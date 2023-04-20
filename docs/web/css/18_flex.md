# flex 布局

## flex 简介

flex 弹性盒，又称伸缩盒，是 css 中又一种布局手段，它主要用来替代浮动完成页面的布局。flex 可以使元素具有弹性，让元素可以跟随页面的大小改变而改变。

- 当为父元素设置为 flex 布局后，子元素的 float、clear 和 vertical-align 属性将失效
- 伸缩布局 = 弹性布局 = 伸缩盒布局 = 弹性盒布局 = flex 布局

flex 有两个重要的概念

- 开启 flex 布局的元素叫 flex container
- flex container 里面的直接子元素叫 flex item

flex item 的特点

- 布局将受到 flex container 属性设置来进行控制和布局
- 不再严格区分块级元素和行内级元素
- 默认情况是包裹内容的，但是可以设置宽高

## display:flex

采用 flex 布局的元素，称为 flex 容器（flex container），它的所有子元素自动成为容器成员，称为 flex 项目（flex item）

- 弹性容器
  - 要使用弹性盒，必须先将一个元素设置为弹性容器
  - `display:flex` 设置块级弹性容器
  - `display:inline-flex` 设置为行内的弹性容器
- 弹性元素
  - 弹性容器的直接**子元素**是弹性元素（弹性项），**注意是子元素不是后代元素**
  - 弹性元素可以同时是弹性容器

设置 display 属性为 flex 或者 inline-flex 可以成为 flex container

- flex：此时，这个 flex container 以块级元素形式存在
- inline-flex：此时，这个 flex container 以行内元素形式存在

```html
<div class="container">
  <span class="item item1">1</span>
  <span class="item item2">2</span>
  <span class="item item3">3</span>
  <span class="item item4">4</span>
</div>
<style>
  .container {
    display: flex; /* 此时，container还是块级元素 */
    display: inline-flex; /* 此时，container说行内元素元素 */
    width: 600px;
    height: 600px;
  }
  .item {
    width: 100px;
    height: 100px;
  }
</style>
```

原理：**通过给父盒子添加 flex 属性，来控制盒子的位置和排列方式**

## flex 容器属性(container)

flex 分为主轴和侧轴(交叉轴)

```css
flex-direction: 设置主轴方向;
flex-wrap: 设置子元素是否换行;
justify-content: 设置主轴上子元素的排列方式;
align-content: 设置侧轴上子元素的排列方式;
(多行)align-items: 设置侧轴上子元素的排列方式;
(单行)flex-flow: 复合属性，相当于同时设置了flex-direction和flex-wrap;
```

### flex-direction

flex-direction 属性设置主轴的方向。

在 flex 布局中，分为主轴和侧轴两个方向，也称行和列，x 轴和 y 轴

- 主轴：默认是 x 轴方向，从左向右
- 侧轴：默认是 y 轴方向，从上向下

主轴是可以变化的，flex-direction 属性可以设置谁为主轴，剩下的就是侧轴。子元素根据主轴来排列。

```css
flex-direction: row; /*默认值，从左到右*/
flex-direction: row-reverse; /*反向水平排列*/
flex-direction: column; /*从上到下*/
flex-direction: column-reverse; /*反向纵向排列*/
```

### flex-wrap

flex-wrap 设置子元素是否换行

```css
flex-wrap: nowrap; /*默认值，不换行*/
flex-wrap: wrap; /*换行*/
```

### justify-content

justify-content 属性设置主轴上子元素的排列方式。

使用这个属性前一定要**确定好主轴是哪个**

```css
justify-content: flex-start; /*默认值，从头部开始*/
justify-content: flex-end; /*从尾部开始*/
justify-content: center; /*在主轴居中对齐*/
justify-content: space-around; /*平分剩余空间，中间空白会叠加*/
justify-content: space-evenly; /*平分剩余空间，中间空白不会叠加*/
justify-content: space-between; /*先两边贴边，再平分剩余空间*/
```

![flex](https://raw.githubusercontent.com/scripthqs/assets/master/blog/flex.png)

### align-items

align-items 属性设置侧轴上子元素的排列方式(单行)，常用：特别是 center 属性

```css
align-items: stretch; /*默认值，拉伸，子元素平分父元素高度或宽度*/
align-items: normal; /*在弹性盒，和stretch一样*/
align-items: flex-start; /*顶部对齐*/
align-items: flex-end; /*底部对齐*/
align-items: center; /*侧轴居中*/
align-items: baseline; /*基线对齐，有文字的时候可以考虑*/
```

`normal`和`stretch`只有在宽高是 auto(没有设置宽高的时候)有效，会自动拉伸。

### align-content

align-content 属性设置侧轴上的子元素的排列方式（多行），必须有 flex-wrap: wrap; 才能使用。不常用。

```css
flex-wrap: wrap; /*换行*/
align-content: stretch; /*默认值，拉伸，子元素平分父元素高度或宽度*/
align-content: flex-start; /*顶部对齐*/
align-content: flex-end; /*底部对齐*/
align-content: center; /*侧轴居中*/
align-content: space-around; /*子项在侧轴平分剩余空间*/
align-content: space-between; /*两边贴边，再平分剩余空间*/
align-content: space-evenly; /*平分侧轴空间*/
```

### flex-flow

flex-flow 复合属性，相当于同时设置了 flex-direction 和 flex-wrap

```css
flex-flow: row wrap; /*主轴方向，换行*/
flex-flow: column nowrap; /*侧轴方向，不换行*/
```

## flex 子项属性(item)

- align-self 控制子项自己在侧轴的排列方式
- order 属性定义子项的排列方式
- flex-grow 默认值是 0，不拉伸
- flex-shrink 默认值是 1，会收缩
- flex 简写属性

### align-self

align-self 控制子项自己在侧轴上的排列方式

align-self 属性允许单个项目可以和其他项目有不一样的对齐方式，可覆盖 align-items 属性。

```css
align-self: auto; /*默认值auto，表示继承父元素align-items属性，如果没有父元素，则等同于stretch*/
align-self: center;
align-self: flex-start;
align-self: flex-end;
```

### order

order 属性定义项目的排列顺序，数值越小，排列越靠前，默认为 0。

```css
order: 0; /*默认值*/
order: -1; /*可以设置负数*/
```

### flex-grow(0)

flex-grow 决定了 flex items 如何扩展(拉伸/成长)

- 可以设置任意非负数字（正小数、正整数、0），默认值是 0，不拉伸
- 当 flex container 在主轴方向上有剩余 size 时，flex-grow 属性才会有效

```css
flex-grow: 1; /*将剩余的空间分给这个item*/
```

### flex-shrink(1)

flex-shrink 决定了 flex items 如何收缩(缩小)

- 可以设置任意非负数字（正小数、正整数、0），默认值是 1，会收缩
- 当 flex container 在主轴方向上有剩余 size 时，flex-grow 属性才会有效

### flex

flex 是 flex-grow || flex-shrink || flex-basis 的简写,flex 属性可以指定 1 个，2 个或 3 个值。

常见的单值写法：

```css
flex: 0; /*默认值*/
flex: 1; /*将剩余空间分成一份*/
/* 代表flex-grow: flex 属性定义子项目**分配剩余空间**，用 flex 来表示占多少份数 */

flex: 0 0;
/* 代表flex-grow,flex-shrink */
```

## 常见用法

## flex 两端分布

```html
<div class="container">
  <span class="item item1">1</span>
  <span class="item item2">2</span>
</div>
<style>
  /* 写法1 */
  .container {
    display: flex;
    align-items: center;
    /* 利用 */
    justify-content: space-between;
    height: 40px;
    padding: 0 20px;
    background-color: orange;
  }
  .item {
    width: 20px;
    height: 40px;
  }
  /* 写法2 */
  .item1 {
    flex: 1;
  }
</style>
```

### flex 和 margin

有三个元素，前两个靠左，第三个靠右，将第三个的元素的 margin-left:auto，即可实现该功能。

```html
<div class="container">
  <span class="item item1">1</span>
  <span class="item item2">2</span>
  <span class="item item3">3</span>
</div>
<style>
  .container {
    display: flex;
    width: 600px;
    height: 600px;
    background-color: orange;
  }
  .item {
    width: 100px;
    height: 100px;
  }
  .item3 {
    margin-left: auto;
  }
</style>
```

### flex 布局最后一行

```html
<div class="container">
  <div class="item item1">1</div>
  <div class="item item2">2</div>
  <div class="item item3">3</div>
  <div class="item item4">4</div>
  <div class="item item5">5</div>
  <div class="item item6">6</div>
</div>

<style>
  .container {
    width: 500px;
    background-color: orange;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .item {
    width: 110px;
    height: 100px;
    /* margin-right: 20px; */
  }
</style>
```

换行时，第二行剩下的两个元素也会`justify-content: space-between;`，解决办法用空标签填充

```html
<div class="container">
  <div class="item item1">1</div>
  <div class="item item2">2</div>
  <div class="item item3">3</div>
  <div class="item item4">4</div>
  <div class="item item5">5</div>
  <div class="item item6">6</div>
  <!-- 添加span的个数是列数减-2 -->
  <!-- <i></i><i></i> -->
</div>
<style>
  .item {
    width: 110px;
    height: 100px;
    /* margin-right: 20px; */
  }
  .container > i {
    width: 110px;
    /* 不设置高度 */
  }
</style>
```
