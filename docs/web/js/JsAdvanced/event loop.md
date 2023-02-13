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
   - 该规则树科称为 CSSOM（CSS Object Model，CSS 对象模型）

3. 构建 Render Tree

   - 当有了 DOM Tree 和 CSSOM Tree 后，就可以两个结合来构建 Render Tree
   - link 元素不会阻塞 DOM Tree 的构建过程，但是会阻塞 Render Tree 的构建过程
   - Render Tree 和 DOM Tree 并不是一一对应的关系，比如对于 display 为 none 的元素，就不会出现在 render tree 中

4. 布局（layout）和绘制（Paint）

   - 有了 RenderTree，我们就知道了所有节点的样式，然后计算他们在页面上的大小和位置，开始布局，把节点绘制到页面上。
   - 对 Render Tree 的计算通常只需要遍历一次就可以完成，但 table 及其内部元素除外，他们可能需要多次计算，通常要花 3 倍于同等元素的时间，这也是为什么要避免使用 table 布局的原因之一

## 回流 reflow 与重绘 repaint

### 重绘 repaint

浏览器第一次渲染叫做绘制，重新渲染就叫做重绘。例如当页面中**元素样式的改变**并**不影响它在文档流中的位置**时（例如：`color`、`background-color`、`visibility`等），浏览器会将新样式赋予给元素并重新绘制。

**不影响布局即是重绘。**

### 回流 reflow

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

### display: none 和 visibility:hidden

共同点：都可以让元素变得不可见

- display:none，该元素不占据任何空间，在文档渲染时，该元素如同不存在。非继承属性。
- visibility:hidden，该元素空间依旧存在。继承属性，子孙节点继承 hidden，可以设置 visible 来显示。

- display:none，会触发 reflow（回流），所以必然 repaint（重绘）进行渲染
- visibility:hidden，只会触发 repaint（重绘），因为没有发生位置变化，不进行渲染。

### 如何避免

#### CSS

- 避免使用`table`布局。
- 尽可能在`DOM`树的最末端改变`class`。
- 避免设置多层内联样式。
- 将动画效果应用到`position`属性为`absolute`或`fixed`的元素上。
- 避免使用`CSS`表达式（例如：`calc()`）。

#### JavaScript

- 避免频繁操作样式，最好一次性重写`style`属性，或者将样式列表定义为`class`并一次性更改`class`属性。
- 避免频繁操作`DOM`，创建一个`documentFragment`，在它上面应用所有`DOM操作`，最后再把它添加到文档中。
- 也可以先为元素设置`display: none`，操作结束后再把它显示出来。因为在`display`属性为`none`的元素上进行的`DOM`操作不会引发回流和重绘。
- 避免频繁读取会引发回流/重绘的属性，如果确实需要多次使用，就用一个变量缓存起来。
- 对具有复杂动画的元素使用绝对定位，使它脱离文档流，否则会引起父元素及后续元素频繁回流。

## 浏览器的事件循环（event loop）

**浏览器事件循环是浏览器处理各种任务的机制。**

浏览器在运行过程中，会同时面对很多任务，用户的各种交互事件，网络请求，页面渲染等。这些任务并不是无序的，浏览器内部需要处理这些任务，所以就出现了事件循环。

浏览器事件循环是浏览器处理各种任务的机制。
