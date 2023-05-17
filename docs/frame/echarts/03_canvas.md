# 数据可视化 Canvas

## Canvas 简介

Canvas 是 html5 新增元素，提供了很多 javaScript 绘图 API，例如绘制路径，矩形，圆，文本、图像等。

- `canvas`标签只有 2 个属性，`width`和`height`单位默认 px，当没有设置宽高时，canvas 是默认初始化宽为 300px，高为 150px。
- `canvas`必须要有结束标签，`<canvas></canvas>`，如果没有，其他内容会认为是替代内容，不会显示出来。
- `canvas.getContext()` 方法是否存在来检查浏览器是否支持 Canvas（现代浏览器基本都支持）
- `canvas`没有 src 和 alt 属性。
- `canvas`也可以通过 css 选择器设置 css 样式

```html
<style>
  canvas {
    background-color: red;
  }
  canvas:hover {
    background-color: green;
  }
</style>
<body>
  <canvas id="tutorial" width="300" height="300px">
    你的浏览器不兼容Canvas,请升级您的浏览器!
  </canvas>

  <script>
    window.onload = function() {
      // 1.拿到canvas的元素对象
      let canvasEl = document.getElementById("tutorial");
      if (!canvasEl.getContext) {
        return;
      }
      // 2.拿到Canvas渲染的上下文
      // ctx: CanvasRenderingContext2D
      // ctx是一个绘图的上下文: 提供了绘图的指令, 可以绘制各种图形( 圆形 直线 椭圆... )
      let ctx = canvasEl.getContext("2d"); // 2d | webgl
      console.log(ctx);
    };
  </script>
</body>
```

## Canvas 的特点

- 适合像素级处理，能够以 `.png` 或 `.jpg` 格式保存图像，适合对图片进行像素级的处理
- 可以做图像游戏开发
- 移动端不能过多使用，占内存
- 只能通过 js 操作
- 放大图片会模糊，颗粒化和像素化

## Canvas Grid 和坐标空间

学习 canvas 需要了解 canvas 网络(canvas grid) 和坐标系。

```js
<canvas width="150" height="150"></canvas>
```

- 当新建一个`width:150px;height:150px`时，`canvas`元素会默认被网格覆盖。
- 通常来说，网格中的一个单元相当于 canvas 的一个像素。
- 网格的原点（0，0）位于坐标的左上角，所有元素都相对于该原点位置。
- 网格理解为原点在左上角的空间坐标系。
- 网格的原点可以变换，旋转、缩放，移动原点后，后续的变换都会基于新的坐标系。

## Canvas 绘图的方法

canvas 绘图的方式有两种：矩形方法和路径方法。

- 简单的图形可以使用矩形方法。
- 复杂的图形都是由路径组成。

```js
//绘制矩形
fillRect(x, y, width, height); //绘制一个填充的矩形
strokeRect(x, y, width, height); //绘制一个矩形的边框
clearRect(x, y, width, height); // 清除指定矩形区域，让清除部分完全透明。
```

## 路径（更通用）

通过路径绘制图形：

1. 首先需要创建路径起始点（beginPath）。
2. 然后使用绘图命令去画出路径( rect，arc 、moveTo、lineTo )，rect 画矩形，arc 画圆，lineTo 画线
3. 之后把路径闭合( closePath , 不是必须)，看情况是否需要闭合。
4. 一旦路径生成，就能通过描边(stroke)或填充路径区域(fill)来渲染图形。

### 绘制直线

1. lineWidth
   - 设置线条宽度的属性值必须为正数。默认值是 1px，不需单位。（ 零、负数、Infinity 和 NaN 值将被忽略）
   - 路径的两边各绘制线宽的一半
2. moveTo(x,y)
   - moveTo 方法可以移动坐标，但是不出现绘制的途径
   - moveTo(x,y)配合 beginPath()，此时的坐标为 x,y
   - moveTo 方法可以绘制一些不连续的路径
3. lineTo(x,y)
   - lineTo(x,y)表示从当前位置到指定(x,y)位置的直线
   - 开始的点是上次介绍的点
   - 或者可以用 moveTo 指定移动点

### 绘制圆、圆弧

arc(x, y, radius, startAngle, endAngle, anticlockwise)，该方法有六个参数：

- x、y：圆心坐标
- radius：圆弧半径
- startAngle、endAngle：指定开始 和 结束的弧度。以 x 轴为基准（注意：单位是弧度，不是角度）
- anticlockwise：为一个布尔值。true 是逆时针方向，false 是顺时针方向，默认为 false

### 绘制矩形

除了使用 fillRect 和 strokeRect，还有`ctx.rect(x, y, width, height)`

- `ctx.rect(x, y, width, height)`这种方法是路径的方法，需要配合 stroke 或者 fill
- 当该方法执行的时候，`moveTo(x, y)` 方法自动设置坐标参数（0,0）。也就是说，当前笔触自动重置回默认坐标。

## 色彩

绘制图形后，如果想给图形上色，需要两个重要属性

- `fillStyle = color`设置图形的填充颜色，需在 fill() 函数前调用
- `strokeStyle = color`设置图形轮廓的颜色，需在 stroke() 函数前调用。

默认情况下，线条和填充颜色都是黑色（CSS 颜色值 #000000）

- 一旦设置了 strokeStyle 或者 fillStyle 的值，那么这个新值就会成为新绘制的图形的默认值
- 如果要给图形上不同的颜色，需要重新设置 fillStyle 或 strokeStyle 的值

注意区分：

- fill() 函数是图形填充，fillStyle 属性是设置填充色，相互搭配才生效
- stroke() 函数是图形描边，strokeStyle 属性是设置描边色，相互搭配才生效

### 设置透明度

除了可以绘制实色图形，我们还可以用 canvas 来绘制半透明的图形，有 2 种方法：

1. strokeStyle 和 fillStyle 属性结合 RGBA
2. globalAlpha 属性
   - globalAlpha = 0 ~ 1
   - 这个属性影响到 canvas 里所有图形的透明度
   - 有效的值范围是 0.0（完全透明）到 1.0（完全不透明），默认是 1.0。

## 线的样式

- lineWidth：设置线宽
- lineCap： 属性的值决定了线段端点显示的样子
  - butt 截断，默认是 butt。
  - round 圆形
  - square 正方形
- lineJoin：属性的值决定了图形中线段连接处所显示的样子
  - miter 斜槽规，默认是 miter
  - round 圆形
  - bevel 斜角

## 绘制文本

canvas 提供了两种方法来渲染文本：

1. fillText(text, x, y [, maxWidth])
   - 在 (x,y) 位置，填充指定的文本
   - 绘制的最大宽度（可选）。
2. strokeText(text, x, y [, maxWidth])
   - 在 (x,y) 位置，绘制文本边框
   - 绘制的最大宽度（可选）。

文本的样式属性：

- font：字体属性。默认的字体是：10px sans-serif。如果要修改，必须要有这两个属性。
- textAlign：文本对齐属性。可选的值包括：start, end, left, right or center。默认值是 start
- textBaseline：基线对齐。可选的值包括：top, hanging, middle, alphabetic, ideographic, bottom。默认值是 alphabetic。

## 绘制图片

绘制图片，可以使用 drawImage 方法将它渲染到 canvas 里。drawImage 可以传的参数很多，常用的有：

- drawImage(image, x, y, width, height)，其中 image 参数是 image 或者 canvas 对象，x 和 y 是其在目标 canvas 里的起始坐标。width 和 height，这两个参数用来控制当向 canvas 画入时应该缩放的大小。

canvas 的 还有一些 API 设置图片的来源

- HTMLImageElement：这些图片是由 Image()函数构造出来的，或者任何的`<img>`元素
- HTMLVideoElement：用一个 HTML 的 `<video>`元素作为图片源，可以从视频中抓取当前帧作为一个图像
- HTMLCanvasElement：可以使用另一个 `<canvas>` 元素作为图片源

```js
const image = new Image(); //这种使用比较多
const img = document.getElementById("img");
image.onload = function() {}; //图片加载完后有onload事件
```

## 绘制状态

Canvas 绘画状态

- 是当前绘画时所产生的样式和变形的一个快照
- Canvas 在绘画时，会产生相应的绘画状态，其实我们是可以将某些绘画的状态存储在栈中来为以后复用
- Canvas 绘画状态的可以调用 save 和 restore 方法是用来保存和恢复，这两个方法都没有参数，并且它们是成对存在的

保存和恢复（Canvas）绘画状态

- save()：保存画布 (canvas) 的所有绘画状态
- restore()：恢复画布 (canvas) 的所有绘画状态

Canvas 绘画状态包括：

- 当前应用的变形（即移动，旋转和缩放）
- 以及一些常用属性：strokeStyle, fillStyle, globalAlpha, lineWidth, lineCap, lineJoin, miterLimit,
  shadowOffsetX, shadowOffsetY, shadowBlur, shadowColor, font, textAlign, textBaseline 等等
- 当前的裁切路径（clipping path）

## 形变

类似 CSS3 支持形变

- translate(x,y)：平移
- rotate(angle)：旋转。
- scale(x, y)：缩放
- transform(a, b, c, d, e, f)： 允许对变形矩阵直接修改。这个方法是将当前的变形矩阵乘上一个基于自身参数的矩阵。

一般形变都配合 canvas 状态使用

- 形变需要在绘制图形前调用
- 在做变形之前先调用 save 方法保存状态是一个很好的习惯
- 大多数情况下，调用 restore 方法比手动恢复原先的状态要简单得多
- 如果在一个循环中做位移，但没有保存和恢复 canvas 状态，很可能到最后会发现有些东西不见了，因为它很可能已超出 canvas 画布以外了

```js
ctx.save(); // 保存形变之前的状态
// 1.形变
ctx.translate(100, 100);
// 360 -> Math.PI * 2
// 180 -> Math.PI
// 1 -> Math.PI / 180
// 45 -> Math.PI / 180 * 45
ctx.rotate((Math.PI / 180) * 45);
ctx.fillRect(0, 0, 50, 50);
ctx.restore(); // 绘图结束(恢复形变之前的状态)
```

使用 save 和 restore 可以保证形变的坐标轴参照一直是原点

## 动画

canvas 动画需要对画布上所有图形进行一帧一帧的重绘。需要使用三种方法来定期执行指定函数进行重绘。

- setInterval
- setTimeout
- requestAnimationFrame

如要画出流畅动画，1s 需绘 60 帧

1. 用 clearRect 方法清空 canvas
2. 保存 canvas 状态
3. 绘制动画图形的一帧
4. 恢复 canvas 状态

定时器不是非常精准的，放到了宏任务中等待执行。如果有一直未处理的微任务，回调函数可能不在指定事件内触发回调。如果要更加平稳和精准，可以使用 requestAnimationFrame 函数

### requestAnimationFrame 函数

希望执行一个动画，并且要求浏览器在下次重绘之前调用该函数的回调函数来更新动画。

```js
let ctx = canvasEl.getContext("2d"); // 2d | webgl

requestAnimationFrame(draw);

function draw() {
  ctx.clearRect(0, 0, 300, 300);
  ctx.save();
  ...
  ctx.restore();
  requestAnimationFrame(draw);
}
```
