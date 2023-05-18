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
