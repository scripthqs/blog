# 浏览器原理

## 浏览器渲染机制

浏览器渲染网页分为以下步骤：

1. 解析 HTML

   - 默认情况下服务器会给浏览器返回 index.html 文件，解析 HTML 是所有步骤的开始
   - 解析 HTML，会构建 DOM Tree

2. 生成 CSS 规则

   - 遇到 CSS 的 link 元素，那么会由浏览器负责下载对应的 CSS 文件
   - 下载 CSS 文件不会影响 DOM 的解析的
   - 浏览器下载完 CSS 文件后，就会对 CSS 文件进行解析，解析出对应的规则树
   - 该规则树可称为 CSSOM（CSS Object Model，CSS 对象模型）

3. 构建 Render Tree

   - 当有了 DOM Tree 和 CSSOM Tree 后，就可以两个结合来构建 Render Tree
   - link 元素不会阻塞 DOM Tree 的构建过程，但是会阻塞 Render Tree 的构建过程
   - Render Tree 和 DOM Tree 并不是一一对应的关系，比如对于 display 为 none 的元素，就不会出现在 render tree 中

4. 布局（layout）和绘制（Paint）

   - 有了 RenderTree，我们就知道了所有节点的样式，然后计算他们在页面上的大小和位置，开始布局，把节点绘制到页面上。
   - 对 Render Tree 的计算通常只需要遍历一次就可以完成，但 table 及其内部元素除外，他们可能需要多次计算，通常要花 3 倍于同等元素的时间，这也是为什么要避免使用 table 布局的原因之一

### 回流 reflow 与重绘 repaint

重绘 repaint

浏览器第一次渲染叫做绘制，重新渲染就叫做重绘。例如当页面中**元素样式的改变**并**不影响它在文档流中的位置**时（例如：`color`、`background-color`、`visibility`等），浏览器会将新样式赋予给元素并重新绘制。

**不影响布局即是重绘。**

回流 reflow

第一次确定节点的大小和位置，称之为布局（layout）。之后对节点的大小、位置修改重新计算称之为回流。

当`Render Tree`中部分或全部元素的尺寸、结构、或某些属性发生改变时，浏览器重新渲染部分或全部文档的过程就是回流。

- 如 DOM 结构发生改变（添加新的节点或者移除节点）
- 浏览器窗口大小发生改变
- 元素尺寸或位置发生改变
- 元素内容变化（文字数量或图片大小等等）
- 元素字体大小变化
- 添加或者删除**可见**的`DOM`元素
- 激活`CSS`伪类（例如：`:hover`）
- 查询某些属性或调用某些方法，例如调用 getComputedStyle 方法获取尺寸、位置信息

一些常用且会导致回流的属性和方法：

- `clientWidth`、`clientHeight`、`clientTop`、`clientLeft`
- `offsetWidth`、`offsetHeight`、`offsetTop`、`offsetLeft`
- `scrollWidth`、`scrollHeight`、`scrollTop`、`scrollLeft`
- `scrollIntoView()`、`scrollIntoViewIfNeeded()`
- `getComputedStyle()`
- `getBoundingClientRect()`
- `scrollTo()`

影响了**布局就会回流**

**回流必定会发生重绘**，重绘不一定会引发回流。

**回流比重绘的代价要更高。**

display: none 和 visibility:hidden 比较

共同点：都可以让元素变得不可见

- display:none，该元素不占据任何空间，在文档渲染时，该元素如同不存在。非继承属性。
- visibility:hidden，该元素空间依旧存在。继承属性，子孙节点继承 hidden，可以设置 visible 来显示。

- display:none，会触发 reflow（回流），所以必然 repaint（重绘）进行渲染
- visibility:hidden，只会触发 repaint（重绘），因为没有发生位置变化，不进行渲染。

可以通过 css 和 js 相关

CSS

- 避免使用`table`布局。
- 尽可能在`DOM`树的最末端改变`class`。
- 避免设置多层内联样式。
- 将动画效果应用到`position`属性为`absolute`或`fixed`的元素上。
- 避免使用`CSS`表达式（例如：`calc()`）。

JavaScript

- 避免频繁操作样式，最好一次性重写`style`属性，或者将样式列表定义为`class`并一次性更改`class`属性。
- 避免频繁操作`DOM`，创建一个`documentFragment`，在它上面应用所有`DOM操作`，最后再把它添加到文档中。
- 也可以先为元素设置`display: none`，操作结束后再把它显示出来。因为在`display`属性为`none`的元素上进行的`DOM`操作不会引发回流和重绘。
- 避免频繁读取会引发回流/重绘的属性，如果确实需要多次使用，就用一个变量缓存起来。
- 对具有复杂动画的元素使用绝对定位，使它脱离文档流，否则会引起父元素及后续元素频繁回流。

### composite 合成（web 优化）

默认情况下，标准流中的内容都是被绘制在同一个图层（Layer）中。浏览器有一种优化手段，在绘制的过程，可以将布局后的元素绘制到多个合成图层中。

有一些特殊的属性，会创建一个新的合成层（ CompositingLayer ），并且新的图层可以利用 GPU 来加速绘制，每个合成层都是单独渲染的，以下属性可以生成新的合成层。

- 3D transforms
- video、canvas、iframe
- opacity 动画转换时
- position: fixed
- will-change：一个实验性的属性，提前告诉浏览器元素可能发生哪些变化
- animation 或 transition 设置了 opacity、transform；

分层确实可以提高性能，但是它以内存管理为代价，因此不应作为 web 性能优化策略的一部分过度使用。

谷歌浏览器工具里可以看到这个 layer。

![layer工具](https://raw.githubusercontent.com/scripthqs/assets/master/blog/css_layers.png)

### script 元素和页面解析

- 浏览器在解析 HTML 的过程中，遇到了 script 元素是不能继续构建 DOM 树的；

- 它会停止继续构建，首先下载 JavaScript 代码，并且执行 JavaScript 的脚本；
- 只有等到 JavaScript 脚本执行结束后，才会继续解析 HTML，构建 DOM 树；

为什么要先等到 js 脚本结束后才能继续解析，或者说为什么要这么设计

- JavaScript 的作用之一就是操作 DOM，并且可以修改 DOM
- 等到 DOM 树构建完成并且渲染再执行 JavaScript，会造成严重的回流和重绘，影响页面的性能；
- 因此遇到 script 元素时，优先下载和执行 JavaScript 代码，再继续构建 DOM 树

但是，在目前的开发模式中（比如 Vue、React），脚本往往比 HTML 页面更“重”，处理时间需要更长；

- 会造成页面的解析阻塞，在脚本下载、执行完成之前，用户在界面上什么都看不到
- 为了解决这个问题，script 元素给我们提供了两个属性（attribute）：defer 和 async

### defer 属性和 async 属性

defer 属性告诉浏览器不要等待脚本下载，而继续解析 HTML，构建 DOM Tree。

- 加上 defer 后，js 的下载和执行，不会阻塞 DOM Tree 的构建过程
- 在 defer 的 js 文件中，是可以去操作 DOM Tree 的
- defer 的 js 文件是在 DOMContentLoaded 事件之前先执行的
- 多个带 defer 的脚本是可以保持正确的顺序执行的
- defer 可以提高页面的性能，并且推荐放到 head 元素中
- defer 仅适用于外部引用脚本，对于 script 默认内容会被忽略，加了也没有用。

async 特性与 defer 有些类似，它也能够让脚本不阻塞页面。可以让脚本完全独立。

- 浏览器不会因 async 脚本而阻塞（与 defer 类似）
- async 脚本不能保证顺序，它是独立下载、独立运行，不会等待其他脚本
- async 不会能保证在 DOMContentLoaded 之前或者之后执行

区别：

- defer 通常用于需要在文档解析后操作 DOM 的 JavaScript 代码，并且对多个 script 文件有顺序要求的
- async 通常用于独立的脚本，对其他脚本，甚至 DOM 没有依赖的；

## 浏览器的 Js 引擎

浏览器内核是由两部分组成的，以 webkit 中分为

- WebCore：负责 HTML 解析、布局、渲染等等相关的工作；
- JavaScriptCore：解析、执行 JavaScript 代码；

### V8 引擎

目前最强大的 js 引擎就是 V8 引擎。

V8 是用 C ++编写的 Google 开源高性能 JavaScript 和 WebAssembly 引擎，它用于 Chrome 和 Node.js。

- V8 可以独立运行，也可以嵌入到任何 C ++应用程序中

代码交给 CPU 执行，源代码转成二进制代码，才能被 CPU 执行，V8 引擎的作用就是将源代码转成二进制代码。

V8 引擎有几个重要的模块：

- Parse 模块会将 JavaScript 代码转换成 AST（抽象语法树）
- Ignition 是一个解释器，会将 AST 转换成 ByteCode（字节码）
- TurboFan 是一个编译器，可以将字节码编译为 CPU 可以直接执行的机器码

### Js 的执行原理

- ES3 的主要概念包括 JavaScript 执行原理、作用域、作用域链、闭包。
- ES5 中的概念包括块级作用域、let、const 等；

## 浏览器的事件循环（event loop）

**浏览器事件循环是浏览器处理各种任务的机制。**

浏览器在运行过程中，会同时面对很多任务，用户的各种交互事件，网络请求，页面渲染等。这些任务并不是无序的，浏览器内部需要处理这些任务，所以就出现了事件循环。

浏览器事件循环是浏览器处理各种任务的机制。
