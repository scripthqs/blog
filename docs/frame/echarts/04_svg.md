# svg

SVG 全称为（Scalable Vector Graphics），即可缩放矢量图形。有大小又有方向称为矢量。计算机中，矢量图可无限放大而不变形。svg 的特点：

- 放大缩小不会失真
- 灵活，可以直接使用 js 和 css 操作
- 支持动画
- 轻量，比其他格式小非常多
- 利于 seo
- 可压缩
- 易于编辑

svg 的不足：不适合高清图片制作，复杂时加载会变慢。

总体来说，svg 可以适合大多数情况，适合矢量徽标，图标，可以制作动画，也非常适合制作各种图表和大屏可视化。

## svg 和 canvas 对比

1. 拓展性

   - svg 方法缩小不会失真，可以在任何分辨率高质量打印。
   - canvas 放大会颗粒化和像素化，不同分辨率打印质量不一样。

2. 渲染能力

   - svg 复杂时，渲染较慢
   - canvas 提供高性能渲染和图形处理能力，适合制作 H5 小游戏

3. 灵活度

   - svg 可以通过 css，js 进行修改，用来创建动画和制作特性非常方便
   - canvas 只能通过 js 修改，创建动画只能一帧帧重绘

4. 使用场景

   - canvas 主要用于游戏开发，绘制图形，复杂照片合成，取色器，复古照片
   - svg 非常适合制作徽标、图标

## 绘制 svg

绘制 svg 常用 4 中方式：

1. 在一个单独的 svg 文件中绘制，svg 文件可直接在浏览器预览或嵌入到 HTML 中使用（推荐）
2. 直接在 HTML 文件中使用 svg 元素来绘制（推荐）
3. 直接使用 JavaScript 代码来生成 svg 矢量图 、
4. 使用 AI（Adobe IIIustractor）矢量绘图工具来绘制矢量图，并导出为 svg 文件（推荐）

### 文件声明

在编写 SVG 文件时建议编写一个 XML 声明（不是强制）。

SVG 的 XML 声明格式

```html
<?xml version="1.0" encoding="UTF-8" standalone="no" ?>
```

- version 指定版本（必填）
- encoding 指定 XML 文档的编码（可选，默认是 UTF-8）
- standalone：指定当前 XML 文档是否依赖于外部标记声明（可选，使用该属性时，需和 DTD 声明一起用才有意义）
  - 默认为 no：代表依赖外部标记声明
  - yes：代表依赖内部默认的标记声
- SVG 的文档类型声明（DTD）,让解析器验证 XML 文件是否符合该规范，与 HTML5 文件的 DTD 声明类似

```html
<?xml version="1.0" encoding="UTF-8" standalone="no" ?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- 
 version="1.0"
 baseProfile="full" 正确渲染svg内容时所需要最小SVG语言概述(版本); 
 full:正常的svg语言概述  
 basic:基本SVG语言概述  t
 iny: 轻量级SVG语言概述
 xmlns: 指定svg元素 和 svg内的子元素都是属于 http://www.w3.org/2000/svg 这个命名空间下
 -->
<svg version="1.0" baseProfile="full" width="100" height="100" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="100" height="100"></rect>
  <title>我是svg title</title>
</svg>

<!-- 2.0版本的svg -->
<?xml version="1.0" standalone="no" ?>
<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="100" height="100"></rect>
</svg>
```

### html 中创建 svg

```html
<!-- 1.创建svg 1.0 -->
<svg version="1.0" baseProfile="full" width="100" height="100" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="100" height="100"></rect>
</svg>

<!-- 2.创建svg 2.0 -->
<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="100" height="100"></rect>
</svg>

<!-- 3.创建svg 2.0 简写 
      xmlns="http://www.w3.org/2000/svg" 这个命名空间浏览器的解析器会自动添加
      默认w:300px  h: 150px
-->
<svg>
  <rect x="0" y="0" width="100" height="100"></rect>
</svg>
```

### js 创建 svg

使用 js 来创建 SVG 时，创建的元素都是需要添加命名空间的。

- 创建`<svg>`或者`<rect>`元素都需要添加命名空间（<http://www.w3.org/2000/svg）>
- 属性可以选择带不带前缀，带前缀 `xlink:href`
- 对于元素上的属性如果不带前缀的，命名空间赋值必须为 null

```js
window.onload = function() {
  // 1.创建svg 和 rect 元素
  let xmlns = "http://www.w3.org/2000/svg"; //命名空间
  let svgEl = document.createElementNS(xmlns, "svg");
  let rectEl = document.createElementNS(xmlns, "rect");

  // 2.给svg 和 rect 元素对象添加属性
  svgEl.setAttributeNS(null, "version", "1.0");
  svgEl.setAttributeNS(null, "width", 100);
  svgEl.setAttributeNS(null, "height", 100);

  rectEl.setAttributeNS(null, "width", 50);
  rectEl.setAttributeNS(null, "height", 50);

  // 3.将svg添加到 body上
  svgEl.appendChild(rectEl);
  document.body.appendChild(svgEl);
};
```

### 在 img 中使用 svg

作为一张图片使用，不支持交互

```html
<!-- 在img中直接使用svg -->
<img src="./rect.svg" alt="" />
```

### css 背景使用 svg

作为背景图片使用，不支持交互

```css
.box {
  width: 200px;
  height: 200px;
  background-image: url(./rect.svg);
  background-repeat: no-repeat;
}
```

### 在 html 中引用

作为 HTML 的 DOM 元素，支持交互

```html
<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="100" height="100"></rect>
</svg>
```

## svg 坐标系

SVG 使用的坐标系统（网格系统）和 Canvas 的差不多。以左上角为 (0,0) 坐标原点，坐标以像素为单位，x 轴正方向
是向右，y 轴正方向是向下。

`<svg>`的 transform 属性可以用来移动、旋转、缩放 SVG 中的某个元素

- 如`<svg>`中某个元素用了变形，该元素内部会建立一个新的坐标系统，该元素默认后续所有变化都是基于新创建的坐标系统

## svg 单位

如果没有指定单位，默认是像素 px，还可以手动指定 em、cm、mm、in 等单位

## viewport 和 viewBox

视口是 SVG 可见的区域（也可以说是 SVG 画布大小）。可以将视口视为可看到特定场景的窗口。

- 可以使用`<svg>`元素的 width 和 height 属性指定视口的大小
- 一旦设置了最外层 SVG 元素的宽度和高度，浏览器就会建立初始视口坐标系和初始用户坐标系

视口坐标系 viewport

- 视口坐标系是在视口上建立的坐标，原点在视口左上角的点(0, 0)

用户坐标系 viewBox

- 用户坐标系是建立在 SVG 视口上的坐标系，最初与视口坐标系相同，它的原点位于视口的左上角
- 使用 `viewBox` 属性，可以修改初始用户坐标系，使其不再与视口坐标系相同

为什么要有两个坐标系

- SVG 是矢量图，支持任意缩放。在用户坐标系统绘制的图形，最终会参照视口坐标系来进行等比例缩放

viewBox 用法

viewport 是 SVG 画布的大小，而 viewBox 是用来定义用户坐标系中的位置和尺寸 （该区域通常会被缩放填充视口）。

## viewBox 宽高比

可以使用 viewBox 属性指定用户坐标系的大小

- 如果用户坐标系与视口坐标系具有相同的高宽比，它将 viewBox 区域拉伸以填充视口区域
- 如果用户坐标系和视口坐标系没有相同的宽高比，可用 preserveAspectRatio 属性来指定整个用户坐标系统是否在视口内可见

```js
viewBox = "<min-x> <min-y> <width> <height>";
// 比如
viewBox = "0 0 100 100";
//注意前面的 0 0 不是坐标
```

对于不同的宽高比

- 保留视图框 viewBox 的宽高比，但视图框 viewBox 不会拉伸以覆盖整个视口区域
- 视图框 viewBox 在视口内垂直和水平居中

如果不想垂直水平居中

- 给`<svg>`添加 preserveAspectRatio 属性，该属性允许强制统一缩放视图框 viewBox
- preserveAspectRatio= "none", 强制拉伸图形以填充整个视口
- preserveAspectRatio= "xMinYMin", 图形在视口的最小 x 和 y 轴上显示

## 绘制矩形

SVG 所支持的基本形状有：矩形、圆形、椭圆、线条、折线、多边形、路径

- `<rect>`元素会在屏幕上绘制矩形
- `<rect>`元素有 6 个基本属性可以控制它在屏幕上的位置和形状

`<rect>`元素 6 个基本属性

- x ：矩形左上角的 x 轴位置
- y ：矩形左上角的 y 轴位置
- width ：矩形的宽度
- height ：矩形的高度
- rx ：圆角的 x 轴方位的半径，绘制圆角
- ry ：圆角的 y 轴方位的半径，绘制圆角

```js
<rect x="100" y="100" width="100" height="50" rx="20" ry="20"></rect>
```

## 绘制圆形

- `<circle>`元素会在屏幕上绘制一个圆形
- `<circle>`元素有 3 个基本属性用来设置圆形

`<circle>`元素 3 个基本属性

- r ：圆的半径
- cx ：圆心的 x 轴位置
- cy ：圆心的 y 轴位置

可以使用 fill 填充颜色

```js
<circle cx="100" cy="100" c="50" fill="red"></circle>
```

## 绘制椭圆

`<ellipse>`元素是 < circle > 元素更通用的形式，它可以分别缩放圆的 x 半径和 y 半径 。

- x 半径和 y 半径 ，数学家通常称之为长轴半径和短轴半径
- `<ellipse>`元素有 4 个基本属性用来设置椭圆

`<ellipse>`元素 4 个基本属性

- rx : 椭圆的 x 轴半径
- ry : 椭圆的 y 轴半径
- cx : 椭圆中心的 x 轴位置
- cy : 椭圆中心的 y 轴位置

```js
<ellipse cx="100" xy="100" rx="25" ry="100" fill="red"></ellipse>
```

## 绘制线条

- `<line>`元素是绘制直线。它取两个点的位置作为属性，指定这条线的起点和终点位置
- 需描边才能显示，不支持填充和 Canvas 线条一样
- `<line>`元素有 4 个基本属性用来设置线条

`<line>`元素 4 个基本属性

- x1 :起点的 x 轴位置
- y1 :起点的 y 轴位置
- x2 :终点的 x 轴位置
- y2 :终点的 y 轴位置

```js
<line x1="0" y1="0" x2="100" y2="100" stroke="red" stroke-width="5"></line>
```

## 绘制折线

- `<polyline>`元素是一组连接在一起的直线。因为它可以有很多的点，折线的的所有点位置都放在一个 points 属性
- 默认会填充黑色，可以使用`fill="transparent" stroke="red"`来去掉填充，只绘制线
- `<polyline>`元素有 1 个基本属性用来设置折线所有点位置

`<polyline>`元素 1 个基本属性

- points : 点集数列。每个数字用空白、逗号、终止命令符或者换行符分隔开。
- 每个点必须包含 2 个数字，一个是 x 坐标，一个是 y 坐标。
- 所以点列表 (0,0), (1,1) 和 (2,2) 可以写成这样："0 0, 1 1, 2 2"。
  - "0 0, 1 1, 2 2"
  - "0,0,1,1,2,2"
  - "0 0 1 1 2 2"

```js
<polyline points="0 0,100 100,0 200,100 300" fill="transparent" stroke="red"></polyline>
```

## 绘制多边形

- `<polygon>`元素是和折线很像，它们都是由连接一组点集的直线构成。不同的是，`<polygon>` 的路径在最后一个点处自动
  回到第一个点。需要注意的是，矩形也是一种多边形，也可以用多边形创建一个矩形。
- 默认会填充黑色，可以使用`fill="transparent" stroke="red"`来去掉填充，只绘制线
- < polygon >元素有 1 个基本属性用来设置多边形线所有点位置

`<polygon>`元素 1 个基本属性

- points :点集数列。每个数字用空白符、逗号、终止命令或者换行符分隔开。
- 每个点必须包含 2 个数字，一个是 x 坐标，一个是 y 坐标。
- 所以点列表 (0,0), (1,1) 和 (2,2) 推荐写成这样：“0 0, 1 1, 2 2”。
- 路径绘制完后闭合图形，所以最终的直线将从位置 (2,2) 连接到位置 (0,0)

```js
<polygon points="20 0, 80 50, 20 100" fill="transparent" stroke="red"></polygon>
```

## 绘制路径

- `<path>`元素可能是 SVG 中最常见的形状。可以用`<path>`元素绘制矩形（直角矩形或圆角矩形）、圆形、椭圆、折线形、
  多边形，以及一些其他的形状，例如贝塞尔曲线、2 次曲线等曲线
- 默认会填充黑色，默认路径不会闭合
- `<path>`元素有 1 个基本属性用来设置路径点的位置

`<path>`元素 1 个基本属性

- d : 一个点集数列，以及其它关于如何绘制路径的信息，必须 M 命令开头
- 所以点列表 (0,0), (1,1) 和 (2,2) 推荐写成这样："M 0 0, 1 1, 2 2"
- 支持格式： "M 0 0, 1 1, 2 2"或 "M0 0, 1 1, 2 2" 或 "M 0 ，0 , 1， 1, 2， 2"或 "M 0 0 1 1 2 2"

使用 path 绘图的命令:

- M moveTo
- L lineTo
- Z close path

```js
<path d="M 20 0,L 80 50,L 20 100 Z" fill="transparent" stroke="red"></path>
```

## 绘制图片

在`<image>`元素的 href 属性引入图片 URL

```js
// svg 2.0版本的语法
<svg width="300" height="300" xmlns="http://www.w3.org/2000/svg">
  <image x="0" y="0" href="test.png" width="100" height="100"></image>
</svg>
// svg 1.0版本的语法
<svg
  version="1.0"
  baseProfile="full"
  width="300" height="300"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
>
  <image
    x="0"
    y="0"
    xlink:href="../images/googlelogo_color_92x30dp.png"
    width="100"
    height="100"
  >
  </image>
</svg>
```

## 绘制文字

`<text>`元素是用来在 SVG 画布中绘制文字用的

`<text>`元素的基本属性

- x 和 y 属性决定了文本在用户坐标系中显示的位置
- text-anchor 文本流方向属性
- dominant-baseline 基线对齐属性

`<tspan>` 元素用来标记大块文本的子部分，它必须是一个 text 元素或别的 tspan 元素的子元素

- x 和 y 属性决定了文本在视口坐标系中显示的位置
- alignment-baseline 基线对齐属性

```js
<text x="100" y="100" dominant-baseline="middle" font-size="50" fill="red">
  abcd
</text>

<text x="40" y="100" font-size="20">
  apple
  <tspan fill="red">¥10</tspan>
</text>
```

## 元素组合 g

- `<g>`元素是用来组合元素的容器
- 添加到 g 元素上的变换会应用到其所有的子元素上
- 添加到 g 元素的属性大部分会被其所有的子元素继承
- g 元素也可以用来定义复杂的对象，之后可以通过`<use>`元素来引用它们

`<g>`元素的属性，g 元素没有专有的属性，只有全局的属性

- 核心属性：id
- 样式属性：class 、style
- Presentation Attributes，也可说是 CSS 属性，这些属性可写在 CSS 中，也可作为元素的属性用
- 事件属性：onchange, onclick, ondblclick, ondrag…
- 动画属性：transform
- 更多：<https://developer.mozilla.org/en-US/docs/Web/SVG/Element/g>

```js
<g fill="transparent" stroke="red">
  <circle cx="50" cy="50" r="25"></circle>
  <circle cx="80" cy="50" r="25"></circle>
  <circle cx="110" cy="50" r="25"></circle>
  <circle cx="140" cy="50" r="25"></circle>
</g>
```

## 图形元素的复用 defs

- 可复用的元素定义在`<defs>`元素里面，然后通过`<use>`元素来引用和显示
- 这样可以增加 SVG 内容的易读性、复用性和利于无障碍开发

`<defs>`元素，定义可复用元素

- 例如：定义基本图形、组合图形、渐变、滤镜、样式等等。
- 在`<defs>`元素中定义的图形元素是不会直接显示的
- 可在视口任意地方用`<use>`来呈现在 defs 中定义的元素
- `<defs>`元素没有专有属性，使用时通常也不需添加任何属性

## 引入元素 use

- `<use>`等同于深度克隆 DOM 节点
- 当给`<use>`元素应用 CSS 样式时须小心。因为克隆的 DOM 不能保证都会继承 `<use>`元素上的 CSS
  属性，但是 CSS 可继承的属性是会继承的

`<use>`元素的属性

- href ： 需要复制元素/片段的 URL 或 ID（支持跨 SVG 引用）
- x / y ：元素的 x / y 坐标（相对复制元素的位置）
- width / height ：元素的宽和高（在引入 svg 或 symbol 元素才起作用）

```js
// 1.定义了一个矩形
// 2.定义了一个组合图形
<defs>
  <rect id="rectangle" x="0" y="0" width="100" height="50"></rect>
  <g id="logo" fill="transparent" stroke="red">
    <circle cx="50" cy="50" r="25"></circle>
    <circle cx="80" cy="50" r="25"></circle>
    <circle cx="110" cy="50" r="25"></circle>
    <circle cx="140" cy="50" r="25"></circle>
  </g>
</defs>
// 进行图形的复用
<use href="#rectangle"></use>
<use href="#logo"></use>
//下面设置的宽和高是没有生效的 只用use引用的图形是 svg 或 symbol 才会起作用
<use x="100" y="100" href="#rectangle"></use>
<use x="100" y="100" href="#logo"></use>
```

## 图形元素复用 symbols

`<symbol>`元素和`<defs>`元素类似，也是用于定义可复用元素，然后通过`<use>`元素来引用显示

- 在`<symbol>`元素中定义的图形元素默认也是不会显示在界面上
- `<symbol>`元素常见的应用场景是用来定义各种小图标，比如：icon、logo、徽章等

`<symbol>`元素的属性

- viewBox：定义当前 `<symbol>` 的视图框。
- x / y ：symbol 元素的 x / y 坐标
- width / height：symbol 元素的宽度

`<symbol>`和`<defs>` 的区别

- `<defs>`元素没有专有属性，而`<symbol>`元素提供了更多的属性
  - viewBox、 preserveAspectRatio 、x、y、width、height
- `<symbol>`元素有自己用户坐标系，可以用于制作 SVG 精灵图
- `<symbol>`元素定义的图形增加了结构和语义性，提高文档的可访问性

```js
<svg width="300" height="300" xmlns="http://www.w3.org/2000/svg">
  <symbol id="previous" viewBox="0 0 100 100">
    <path fill="currentColor" d="M 80 0,L 20 50, L 80 100 Z"></path>
  </symbol>

  <symbol id="next" viewBox="0 0 100 100">
    <polygon points="20 0, 80 50, 20 100"></polygon>
  </symbol>

  <use href="#previous" width="100" height="100"></use>
</svg>

//可是设置宽高
<svg width="300" height="300" xmlns="http://www.w3.org/2000/svg">
  <use href="#previous" width="50" height="50"></use>
  <use href="#next" width="50" height="50"></use>
</svg>
```

## 填充和描边

如果想要给 SVG 中的元素上色，一般有两种方案可以实现

1. 直接使用元素的属性，比如：填充（fill）属性、描边（stroke）属性等
2. 直接编写 CSS 样式，因为 SVG 也是 HTML 中的元素，也支持用 CSS 的方式来编写样式

填充属性（fill）

- fill="color"
- fill-opacity = "number"，控制填充色的不透明 0-1

描边属性（stroke）

- stroke = "color"：指定元素边框填充颜色
- stroke-opacity = "number"：控制元素边框填充颜色的透明度
- stroke-width = "number"：指定边框的宽度。

直接编写 CSS 样式实现填充和描边

- CSS 样式可写在 defs 中，也可写在 HTML 头部或外部等
- css 语法和 html 中的基本一样，需要把 background-color、border 改成 fill 和 stroke
- 不是所有的属性都能用 CSS 来设置，路径命令不能用 css 设置

css 给 svg 素填充、描边和上色支持 4 种方式

- 内联（行内） CSS 样式，写在元素的 style 属性上
- 写在 `<defs>`中的 `<style>`标签中
- 写在`<head>`中的`<style>`标签中
- 外部 CSS 样式文件，写在 `.css` 文件中

优先级：内联的 style > defs 中的 style > 外部 / head 内部 > 属性 fill

## 渐变

SVG 除了可以简单的填充和描边，还支持在填充和描边上应用渐变色。渐变有两种类型：线性渐变和径向渐变。

- 编写渐变时，必须给渐变内容指定一个 id 属性，use 引用需用到
- 建议渐变内容定义在`<defs>`标签内部，渐变通常是可复用的

```js
// 默认的渐变色
<defs>
  <linearGradient id="gradient1">
    <stop offset="0%" stop-color="red"></stop>
    <stop offset="50%" stop-color="green"></stop>
    <stop offset="100%" stop-color="blue"></stop>
  </linearGradient>
</defs>
```

## 毛玻璃效果

1. 使用 CSS 的 backdrop-filter 或 filter 属性

   - backdrop-filter：可以给一个元素后面区域添加模糊效果
   - filter：直接将模糊或颜色偏移等模糊效果应用于指定的元素

2. 使用 SVG 的 filter 和 feGaussianBlur 元素（建议少用）

```js
// 高斯模糊的效果
<filter id="blurFilter">
  <feGaussianBlur stdDeviation="8"></feGaussianBlur>
</filter>
```

## svg 形变

形变 transform， 支持的函数：

- translate(x， y) 平移。
- rotate(z) / rotate(z， cx，cy) ：旋转。
- scale（x, y） ：缩放
- skew(x, y) ：倾斜。

```js
// 平移一个元素, 在元素的内部会创建一个新的坐标系统
<g transform="translate(100, 100)">
  <rect x="10" y="10" width="100" height="50"></rect>
</g>

//旋转
<rect transform="translate(100, 0) rotate(45, 50, 25)" x="0" y="0" width="100" height="50"></rect>

//  修改缩放的原点
<g transform="scale(2)">
  <rect transform="translate(10, 0)" x="0" y="0" width="50" height="50"></rect>
</g>
```

## 描边动画

stroke 是描边属性，专门给图形描边。如果想给各种描边添加动画效果，需用到下面两个属性

- stroke-dasharray：虚线
- stroke-dashoffset

```css
#line1 {
  /* 指定为虚线 */
  stroke-dasharray: 100px;
  /* 可见 */
  stroke-dashoffset: 0px;
  animation: line1Move 2s linear;
}

@keyframes line1Move {
  0% {
    /* 不可见 */
    stroke-dashoffset: 100px;
  }

  100% {
    /* 可见 */
    stroke-dashoffset: 0px;
  }
}

/* 或者这样写 */
#line1 {
  /* 将线段设置为虚线 */
  stroke-dasharray: 130px;
  /* 偏移 不可见 */
  stroke-dashoffset: 130px;
  animation: line1Move 3s linear forwards;
}

@keyframes line1Move {
  100% {
    stroke-dashoffset: 0px; /* 可见 */
  }
}
```

## SMIL

SMIL 用于描述多媒体演示

- SMIL 标记是用 XML 编写的，与 HTML 有相似之处。
- SMIL 允许开发多媒体项目，例如：文本、图像、视频、音频等。
- SMIL 定义了时间、布局、动画、视觉转换和媒体嵌入等标记，比如：`<head>` `<body>` `<seq>` `<par>` `<excl>` 等元素

SVG 动画元素是基于 SMIL 实现，SVG 中使用 SMIL 实现元素有：

- `<set>`
- `<animate>`
- `<animateMotion>`
- `<animateColor>`

## SVG 动画实现方式

1. 用 JS 脚本实现
2. 用 CSS 样式实现
3. 用 SMIL 实现

- `<set>`元素提供了一种简单的方法，可以在指定的时间内设置属性的值
- `<animate>`元素给某个属性创建过度动画效果
- `<animateTransform>`控制元素的平移、旋转、缩放或倾斜动画
- `<animateMotion>` 定义了一个元素如何沿着运动路径进行移动

```js
//3s后移动
<set attributeName="x" to="200" begin="3s"></set>
//点击后移动
<set attributeName="x" to="200" begin="rectangle.click"></set>

// animate 元素的基本使用(3个属性是必须的)
<animate attributeName="x" to="200" dur="3s"></animate>
// x轴移动
<animate attributeName="x" values="0; 170; 200" dur="3s" repeatCount="indefinite"></animate>
// 颜色改变
<animate attributeName="fill" values="red;green" dur="3s" repeatCount="indefinite"></animate>

// animateTransform可以平移、旋转、缩放等

//animateMotion可以定义动画
```

## 第三方动画库

- Snap.svg 是一个专门用于处理 SVG 的 JavaScript 库

- GSAP 动画库<https://greensock.com/>，可以写 HTML 元素、还是 SVG、或是 Vue、React 组件的动画
