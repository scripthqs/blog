# 选择器

css 语法是选择器加上声明块

```css
选择器 {
  属性名: 属性值;
  属性名: 属性值;
}
/*一个属性有多个值的话，那么多个值用空格隔开*/
/*css只有这一种注释*/
```

## 基本选择器

一般来说，类上样式，id 上行为，css 都使用 class，js 上使用 id。所以 class 选择器比 id 选择器使用更多。

### 元素选择器

```css
p {
  font-size: 16px;
  color: red;
}
```

### 类选择器

类选择器，即 class 选择器。

`.`开头

```css
.box {
  width: 200px;
  height: 200px;
}
```

### ID 选择器

`#`开头，id 值不要重复，class 可以重复。

```css
#app {
  width: 100px;
  height: 100px;
}
```

### 通用选择器

`*`，所有的元素

```css
* {
 margin: 0;
 padding 0;
}
```

## 复合选择器

### 交集选择器

选中同时符合多个条件的元素，选择器之间紧密连接，要写元素选择器时必须用元素选择器开头

```css
div.box1 {
  color: red;
}
div#box2 {
  color: green;
  /*这种写法语法上没问题，但是id选择器都是唯一的，没必要*/
}
.a.b.c {
  color: black;
  /*当一个元素同时有a,b,c的class时生效*/
}
```

### 并集选择器

同时选择多个选择器对应的元素，多个选择器之间用逗号隔开

```css
p,
h1,
.box1,
#id {
  color: red;
}
```

## 关系选择器

### 后代选择器

多个选择器之间，使用空格隔开

```css
ul li {
  font-size: 16px;
}
div ul li {
  font-size: 16px;
}
```

### 子代选择器

子代选择器只能选儿子，和后代不同，但是可以多写一个`>`号

```css
ul > li {
  color: red;
}
div > span {
  font-size: 16px;
}
```

### 兄弟选择器

下一个兄弟选择器：兄 + 弟，兄弟必须紧挨着，只能选后面的兄弟元素

```css
p + span {
  font-size: 16px;
}
/*选中p后面相邻的第一个span*/
```

选择下面所有的兄弟选择器：`兄~弟`，只能选后面的兄弟元素

```css
p ~ span {
  color: red;
}
/*选中的p后面所有的span*/
```

## 属性选择器

- `元素[属性名]{}`选择含有这种属性的选择器，元素可以省略不写
- `元素[属性名=属性值]{}`选择含有这种属性名和属性值的选择器，元素可以省略不写
- `元素[属性名^=属性值]{}`选择这种属性值开头的选择器，元素可以省略不写
- `元素[属性名$=属性值]{}`选择这种属性值结尾的选择器，元素可以省略不写
- `元素[属性名*=属性值]{}`选择含有这种属性值的选择器，元素可以省略不写

## 伪类选择器

**伪类**：用于描述一个元素的特殊状态，比如第一个子元素，被点击的元素，鼠标移入的元素。伪类用冒号来表示。

### 超链接伪类

```css
a:link {
  /*超链接点击之前，只能a使用*/
}
a:visited {
  /*超链接被访问后，只能a使用*/
  /*由于隐私的原因，这个伪类只能改超链接的颜色*/
}
a:hover {
  /*鼠标悬停在标签时*/
}
a:active {
  /*鼠标点击标签，但是不松手时*/
}

/*下面这伪类a不能使用*/
:focus {
  /*某个标签获得焦点时的样式（比如某个输入框获得焦点）*/
}
```

超链接 a，这四种状态必须按照固定的顺序，`a:link 、a:visited 、a:hover 、a:active`，否则失效，“爱恨准则”：love hate，先爱后恨。

### 结构伪类选择器

- `E:first-child` 匹配父元素的第一个子元素 E。
- `E:last-child` 匹配父元素的最后一个子元素 E。
- `E:nth-child(n)` 匹配父元素的第 n 个子元素 E。n 的范围是（0~∞）
- `E:nth-child(odd)` 匹配奇数，或者 2n+1
- `E:nth-child(even)` 匹配偶数，或者 2n
- `E:nth-last-child(n)` 匹配父元素的倒数第 n 个子元素 E。
- `E:not(nth-of-type(n))` 除了第 n 个子元素。

nth-child 排所有的子元素，nth-of-type 根据指定的元素排列

### 伪元素选择器

**伪元素**：表示页面中一些特殊的并不真实存在的元素（特殊的位置）。

**一个冒号`:`叫伪类（特殊的状态），两个冒号`::`叫伪元素（特殊的位置）**

- `::before`：元素的开始
- `::after`：元素的最后
- before 和 after 必须结合 content 属性使用，很重要

```css
p::before {
 content: 'abc'
}
div::after {
 content； 'xyz'
}
/*通过这个加入的内容不能被选中*/
p::before{
 content: '『'
}
p::after{
 content: '』'
}
/*通过这个t*/
```

- `::first-letter`：表示第一个字母
- `::first-line`：表示第一行
- `p::selection`：表示选中的内容

## 利用伪元素画三角

```css
.end::after {
  content: " ";
  width: 0;
  height: 0;
  border: 4px solid #666;
  border-color: rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) #666;
  -webkit-border-radius: 3px;
  border-radius: 3px;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
  position: absolute;
  bottom: 0px;
  right: -12px;
}
```
