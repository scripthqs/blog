# 移动端布局

## meta

移动端布局时，需要使用 meta 标签调整合适的视口。

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0,user-scalable=no" />
```

- width：宽度设置的 viewport 宽度，可以设置 device-width 特殊值
- initial-scale：初始缩放比例，大于 0 的数字
- maximum-scale：最大缩放比，大于 0 的数字
- minimum-scale：最小缩放比，大于 0 的数字
- user-scalable：用户是否可以缩放，yes 或 no(1 或 0)

## 移动端像素

不同的屏幕，单位像素的大小是不同的，像素越小，屏幕越清晰。智能手机的像素点远远小于计算机的像素点。

物理像素就是分辨率，是屏幕最小的颗粒

- 默认情况下移动端的网页都会将视口设置为 980 像素（css 像素），确保 PC 端网页可以在移动端正常访问。如果网页的宽度超过了 980，移动端的浏览器会自动对网页缩放以完整显示网页。此时像素比：980/移动端宽度
- 基本上大部分 PC 端网页都可以在移动端中正常浏览，但是往往都不会有一个好的体验。
- 为了解决这个问题，大部分网站都会为移动端专门设计一个网站

## 多倍图

- 编写移动端时，必须确保有一个比较合理的像素比，一般 1：2/3
  - 1 个 css 像素对应 2 个/ 3 个物理像素
- 每一个移动设备都有一个最佳像素比，此时这个视口就称为完美视口。
- 不同的设备完美视口不一样，所有同样的 375 个像素，在不同的设备下，意义是不一样的。所以在移动端开发时，就不能使用 px 来布局了

为了让图片更加清晰，在实际开发中，移动端往往需要使用 2 倍图/3 倍图。

## background-size

background-size 属性规定背景图像的尺寸

```css
background-size: 500px 500px; /* 设置图片宽、高的具体数值 */
background-size: 50% 50%; /* 宽高的百分比（相对于容器的大小）*/
background-size: 100%;
background-size: cover; /* 图片始终填充满容器，且保证长宽比不变。图片如果有超出部分，则超出部分会被隐藏。 */
background-size: contain; /* 图片完整地显示在容器中，且保证长宽比不变。可能会导致容器的部分区域为空白。*/
```

使用这个属性可以将多倍图进行缩放。

## 移动端主流方案

1. **单独制作移动端页面（主流）**

   通常情况下，网址域名前面加 m（mobile）可以打开移动端。通过判断设备，如果是移动设备打开，则跳到移动端页面。

   - 流式布局（百分比布局）
   - flex 弹性布局（推荐）
   - less + rem + 媒体查询布局
   - 混合布局

2. **响应式页面兼容移动端**

通过判断屏幕宽度来改变样式，以适应不同终端。

- 媒体查询
- Bootstrap

## 移动端布局问题

移动端浏览器基本以 webkit 内核为主，因此我们就需要考虑 webkit 兼容性问题。

- 浏览器私有前缀考虑添加 webkit。
- 移动端 css 初始化推荐使用 [normalize.css](https://github.com/necolas/normalize.css) 重置样式表
- 一般使用 border-box 盒模型

  ```css
  box-sizing: border-box; /*设置padding和border不再撑大盒子*/
  ```

  此时，width 和 height 用来设置内容区 content + padding + border 和的大小。即**设置 padding 和 border 不再撑大盒子**

## rem

rem（root em）是一个相对单位，类似于 em，em 是父元素字体的大小。不同的是 rem 的基准是相对于 html 元素的字体大小。

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

/* <div class="container">
    <div class="box">我是box</div>
  </div> */
```

## 媒体查询

- 使用媒体查询（media query）可以根据不同的媒体类型定义不同的样式
- @media 可以针对不同的屏幕尺寸设置不同的样式
- 当重置浏览器大小的过程中，页面也会根据浏览器的宽度和高度重新渲染页面

```css
@media mediatype and|not|only (media feature){
    css-code;
}
```

- @media 开头 注意@符号
- mediatype 媒体类型
- 关键字 and not only
- media feature 媒体特性 必须有小括号包含

### mediatype

将不同的终端设备划分成不同的类型。称为媒体类型

- all：用于所有设备
- print：用于打印机和打印预览
- screen：用于电脑屏幕、平板电脑、智能手机

### 关键字

关键字将媒体类型或多个媒体特性连接到一起作为媒体查询的条件。

- and：可以将多个媒体特性连接到一起，相当于“且”
- not：排除某个媒体特性，相当于“非”，可以省略
- only：指定某个特定的媒体类型，可以省略

### 媒体查询用法

```css
/* @import是可以和媒体查询结合来使用 */
@import url(./css/body_bgc.css) (max-width: 800px);

/* link元素可以配合媒体查询 */
<link rel="stylesheet" media="screen and (max-width: 800px)" href="./css/body_bgc.css" > @media 

/* @media 可以针对不同的屏幕尺寸设置不同的样式 */
(max-width: 800px) {
  body {
    background-color: orange;
  }
}

@media screen {
}

/* 媒体查询可以使用逻辑运算符号 */
@media (min-width: 500px) and (max-width: 800px) {
  body {
    background-color: orange;
  }
}
```

## font-size 配合媒体查询

```css
@media screen and (min-width: 320px) {
  html {
    font-size: 20px;
  }
}

@media screen and (min-width: 375px) {
  html {
    font-size: 24px;
  }
}

@media screen and (min-width: 414px) {
  html {
    font-size: 28px;
  }
}

@media screen and (min-width: 480px) {
  html {
    font-size: 32px;
  }
}

.box {
  width: 5rem;
  height: 5rem;
  background-color: orange;
}
```

## js 动态计算

```js
// 1.获取html的元素
const htmlEl = document.documentElement;

function setRemUnit() {
  // 2.获取html的宽度(视口的宽度)
  const htmlWidth = htmlEl.clientWidth;
  // 3.根据宽度计算一个html的font-size的大小
  const htmlFontSize = htmlWidth / 10;
  // 4.将font-size设置到html上
  htmlEl.style.fontSize = htmlFontSize + "px";
}
// 保证第一次进来时, 可以设置一次font-size
setRemUnit();

// 当屏幕尺寸发生变化时, 实时来修改html的font-size
window.addEventListener("resize", setRemUnit);
```

## 适配方案 vw

vw 相比于 rem 的优势：

1. 不需要去计算 html 的 font-size 大小，也不需要给 html 设置这样一个 font-size；
2. 不会因为设置 html 的 font-size 大小，而必须给 body 再设置一个 font-size，防止继承；
3. 因为不依赖 font-size 的尺寸，所以不用担心某些原因 html 的 font-size 尺寸被篡改，页面尺寸混乱；
4. vw 相比于 rem 更加语义化，1vw 刚才是 1/100 的 viewport 的大小;
5. 可以具备 rem 之前所有的优点；

如何转换成 vw

1. 手动计算

   - 1 个在 375px 屏幕上，100px 宽度和高度的盒子
   - 将 100px 转成对应的 vw 值
   - 100/3.75=26.667，其他也是相同的方法计算即可

2. less/scss 函数

   ```less
   @vwUnit: 3.75;
   .pxToVw(@px) {
     result: (@px / @vwUnit) * 1vw;
   }
   .box{
    width:.pxToVw:(100)[result];
    height.pxToVw:(100)[result]
   }
   ```

3. px to vw 插件
