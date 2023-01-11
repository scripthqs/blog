# CSS 总结

## display:none 和 visibility:hidden的区别

共同点：都可以使元素不可见

不同点：display:none 会让元素完全从渲染树中消失，不占据任何空间，visibility:hidden 不会让元素从渲染树中消失，占据空间，只是内容不可见。display:none 是非继承属性，visibility:hidden 是继承属性，子孙节点继承了 hidden 属性，可以设置 visibility:visible 让子孙节点显性。

## 为什么要初始化 CSS 样式

主要原因是浏览器的兼容问题，不同浏览器对有些元素的默认样式是不同的，并且默认样式会影响项目的最终布局，如果没有对 CSS 进行初始化，那么有可能出现浏览器之间的页面显示差距。

## 什么是PostCSS

PostCSS是一个平台，基于这个平台，可以使用一些插件来优化css代码，比如autoprefixer插件，它基于postcss使用，可以帮助我们为css增加不同的浏览器前缀

## css 选择器优先级

元素选择器、类选择器、id 选择器、通用选择器、后代选择器

```css
!important>行内样式>id选择器>类选择器>标签选择器>通配符>继承
```

选择器的优先级越高，就显示什么样式，行内样式 1000，id 选择器 0100，类选择器 0010，元素选择器 0001，通配选择器 0000。

## 盒模型的理解

css3 有 2 种盒模型，标准盒模型和 IE 盒模型，盒模型都是由 margin、padding、border、content 组成。区别在于设置 width 和 height 时，所对应的范围不同，标准盒模型的 width 和 height 属性范围只包含 content，IE 盒模型的 width 和 height 包含了 content、padding、border。可以通过修改元素的 box-sizing 属性来元素的盒模型。

- box-sizing: content-box; 表示标准盒模型
- box-sizing: border-box; 表示IE盒模型

## 精灵图（雪碧图）

精灵图将一个页面涉及的小图都包含到一张大图中，然后利用 css 的 background-image,background-repeat,background-position 属性进行背景定位。

- 利用精灵图能够减少网页的 http 请求，从而提高页面的性能，能够减少图片的大小

## 水平垂直居中的实现

行内元素：文字和图片

```css
text-align: center;
height: 20px;
line-height: 20px;
```

块级元素：元素的宽高确定

```css
.father{
  overflow: hidden; /*开启BFC，解决外边距重叠问题*/
}
.son{
  margin: 0 auto;
  margin-top: (father.h-son.h)/2
}
```

块级元素：元素的宽高确定，使用定位，子绝父相

```css
.father{
  position: relative;
}
.son{
  position: absolute;
  left: 50%;
  margin-left: -son.w/2,
  top: 50%;
  margin-top: -son.h/2
}
```

块级元素：宽高不定时

```css
.father{
  position: relative;
}
.son{
  position: absolute;
  left: 50%
  top: 50%
  transform: translate(-50%,-50%)
}
```

使用 flex 布局

```css
.father{
  display: flex;
  justify-content: center;
  align-items: center;
}
```

## BFC

BFC 是块级格式化环境，当元素开启 BFC 后，该区域会变成一个独立的布局区域。

- 开启 BFC 的元素，不会被浮动元素覆盖
- 开启 BFC 的元素，子元素和父元素的外边距不会重叠
- 开启 BFC 的元素，可以包含浮动的子元素

### 如何开启BFC

- 设置浮动，会脱离文档流，不推荐
- 设置为行内块元素
- 将 overflow 设置为一个非 visible 的值

## 定位

相对定位不会脱离文档流，以自身为参照物，灵魂出窍。绝对定位会脱离文档流，参照物是包含块。

### 包含块是离它最近那个开启定位的祖先元素，没有就是HTML根元素

固定定位是特殊的绝对定位，参照物是浏览器视口。粘滞定位是特殊的相对定位，参照物是浏览器视口。开启定位的元素可以是 z-index 来设置层级。

## css 画三角形

主要是利用盒模型的 border 属性来设置的

```css
div {
    width: 0;
    height: 0;
    border: 50px solid red;
    border-left: 50px solid transparent;
    border-right: 50px solid transparent;
}
```

## 回流 reflow 与重绘 repaint

### 1.浏览器的渲染机制

1. 浏览器会把 HTML 解析成 DOM
2. 把 CSS 解析成 CSSOM
3. DOM 和 CSSOM 合并就产生了渲染树（Render Tree）
4. 有了 RenderTree，我们就知道了所有节点的样式，然后计算他们在页面上的大小和位置，最后把节点绘制到页面上。
5. 对 Render Tree 的计算通常只需要遍历一次就可以完成，但 table 及其内部元素除外，他们可能需要多次计算，通常要花 3 倍于同等元素的时间，这也是为什么要避免使用 table 布局的原因之一

### 2.重绘 repaint

当页面中**元素样式的改变**并**不影响它在文档流中的位置**时（例如：`color`、`background-color`、`visibility`等），浏览器会将新样式赋予给元素并重新绘制它，这个过程称为重绘。

**不影响布局即是重绘。**

### 3.回流 reflow

当`Render Tree`中部分或全部元素的尺寸、结构、或某些属性发生改变时，浏览器重新渲染部分或全部文档的过程称为回流。

- 页面首次渲染
- 浏览器窗口大小发生改变
- 元素尺寸或位置发生改变
- 元素内容变化（文字数量或图片大小等等）
- 元素字体大小变化
- 添加或者删除**可见**的`DOM`元素
- 激活`CSS`伪类（例如：`:hover`）
- 查询某些属性或调用某些方法

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

### 4.display: none 和 visibility:hidden

共同点：都可以让元素变得不可见

- display:none，该元素不占据任何空间，在文档渲染时，该元素如同不存在。非继承属性。
- visibility:hidden，该元素空间依旧存在。继承属性，子孙节点继承hidden，可以设置visible来显示。

- display:none，会触发reflow（回流），所以必然repaint（重绘）进行渲染
- visibility:hidden，只会触发repaint（重绘），因为没有发生位置变化，不进行渲染。

### 5.如何避免

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
