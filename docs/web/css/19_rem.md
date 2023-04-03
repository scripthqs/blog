# rem 适配布局

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
