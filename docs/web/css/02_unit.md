# 单位

html 的单位只有像素 px 一种，可以省略不写。CSS 默认没有单位，**所以必须要写**。

## 像素 px

像素 px 是一个相对单位，常说的分辨率 `1920\*1080` 就是屏幕上的小点。

水平方向是 1920 个像素点，垂直方向是 1080 个像素点。不同屏幕的像素大小是不同的。

在前端开发中，像素要分两种情况讨论，css 像素和物理像素。

- 屏幕的小点属于物理像素。
- 编写网页时写的 width 和 height 是 css 像素
- 浏览器编写网页时，需要将 css 像素转换成物理像素再呈现。
- 1 个 css 像素最终由几个物理像素显示由浏览器决定
- 默认情况下，在 PC 端，1 个 css 像素=1 个物理像素。
- 视口（viewport）就是屏幕中显示网页的区域，position：fixed 就是根据视口定位
- 可以通过查看视口的大小来观察 css 像素和物理像素的比值。

## 百分比 %

% 百分比也是一个相对单位，不同属性的百分比相对的参照值不一样。

1. 对于普通定位元素就是我们理解的父元素
2. font-size 相对于父元素的 font-size 来计算，如果父元素（以及它的祖先元素）未显式设置`font-size`值的话，将会以浏览器的默认值`16px`为基准。
3. `line-height`取值为`%`时，它的计算方式是基于元素自身的`font-size`的值来计算。如果元素自身未显式设置`font-size`，则会基于元素继承过来的`font-size`的值计算

## em

em 是相对于父元素的字体大小来计算的，具有继承的特点。如果自身定义了 font-size 按自身来计算（浏览器默认字体是 16px），整个页面内 1em 不是一个固定的值。

- 1em = 1font-size
- em 会根据字体的大小改变而改变

```css
.container {
  font-size: 15px;
}

.box {
  /* font-size: 20px; */
  /* 如果自己没有设置, 那么会继承父元素的font-size */

  /* 
      如果font-size中有写em单位, 可以理解成相对于父元素
      但是更准确的理解依然是相对于自己的
       */
  /* font-size: 1em; */

  /* 1.em: 相对自己的font-size */
  width: 10em;
  height: 5em;
  background-color: orange;
}
```

## rem

rem 是相对于根元素的字体大小来计算的

- 1rem = html 根元素的 1 font-size

## vw

viewpoint width 的缩写，视窗宽度，1vw 等于视窗宽度的 1%

浏览器宽度 1200px, 1 vw = 1200px/100 = 12 px。

## vh

viewpoint height 的缩写，视窗高度，1vh 等于视窗高度的 1%。

浏览器高度 900px, 1 vh = 900px/100 = 9 px。

## vm

相对于视口的宽度或高度中较小的那个。其中最小的那个被均分为 100 单位的 vm

浏览器高度 900px，宽度 1200px，取最小的浏览器高度， 1 vm = 900px/100 = 9 px。

但是 vm 的兼容性较差，使用较少
