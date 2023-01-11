# 数据可视化 Canvas

## Canvas 简介

Canvas 是 html5 新增元素，提供了很多 javaScript 绘图 API，例如绘制路径，矩形，圆，文本、图像等。

- `canvas`标签只有 2 个属性，`width`和`height`单位默认 px，当没有设置宽高时，canvas 是默认初始化宽为 300px，高为 150px。
- `canvas`必须要有结束标签，`<canvas></canvas>`，如果没有，其他内容会认为是替代内容，不会显示出来。
- `canvas`没有 src 和 alt 属性。

```js
<canvas>当前浏览器不支持显示，请升级浏览器！</canvas>
```

## Canvas Grid 和坐标空间

学习 canvas 需要了解 canvas 网络(canvas grid) 和坐标系。

```js
<canvas width="150" height="150"></canvas>
```

- 当新建一个`width:150px;height:150px`时，`canvas`元素会默认被网格覆盖。
- 通常来说，网格中的一个单元相当于 canvas 的一个像素。
- 网格的原点（0，0)位于坐标的左上角，所有元素都相对于该原点位置。
- 网格理解为原点在左上角的空间坐标系。
- 网格的原点可以变换，旋转、缩放，移动原点后，后续的变换都会基于新的坐标系。

## Canvas 绘图的方法

canvas 绘图的方式有两种：矩形方法和路径方法。

- 简单的图形可以使用矩形方法。
- 复杂的图形都是由路径组成。

```js
```
