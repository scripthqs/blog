# css api

## aspect-ratio

`aspect-ratio` 是 CSS 属性，用于设置元素的宽高比（宽:高），让元素在自适应布局时自动保持指定比例。

```css
.square {
  aspect-ratio: 1 / 1; /* 正方形 */
}
.banner {
  aspect-ratio: 16 / 9; /* 横幅 */
}
```

## offset-path

offset-path 可以实现元素不规则的运动

```css
@keyframes moveOnPath {
  to {
    offset-distance: 100%; /* 终点 */
  }
}

.move {
  offset-path: path("M10,80 C40,10 65,10 95,80");
  offset-distance: 0%; /* 起点 */
  animation: moveOnPath 3s linear infinite; /* 3s 为运动时间 */
}
```
