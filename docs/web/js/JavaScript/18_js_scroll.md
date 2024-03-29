# offset、scroll、client

## offset 系列

offset：偏移、补偿、位移，offset 系列是 js 中的一套**获取元素尺寸**的便捷办法。

- `offsetWidth` width + padding + border 不包括 margin
- `offsetHeight` Height + padding + border 不包括 margin
- `offsetLeft` 当前元素相对于其包含块的水平偏移量
- `offsetTop`当前元素相对于其包含块的垂直偏移量
  - **从父亲的 padding 开始算起，父亲的 border 不算在内**
- 上面 4 个方法返回的是数字，不带单位
- 上面 4 个方法是只读的,`.style`才可以赋值
- `offsetParent`获取当前元素的包含块。

## scroll 系列

- `scrollWidth` 获取元素整个滚动区域的宽度。包括 width 和 padding，不包括 border 和 margin。
- `scrollHeight` 获取元素整个滚动区域的高度。包括 width 和 padding，不包括 border 和 margin。
- `scrollLeft`获取水平滚动条滚动的距离。
- `scrollTop`获取垂直滚动条滚动的距离。
- 同样上面的方法返回值都是数字，不带单位

## client 系列

- `clientHeight` 返回元素的可见高度（width + padding）。
- `clientWidth` 返回元素的可见宽度（height + padding）。
- 当 body/html 元素调用时，获取的网页可视区域宽度和高度。
- `clientX` 鼠标距离可视区域左侧距离。
- `clientY` 鼠标距离可视区域上侧距离。
- `clientTop` 盒子的上 border。
- `clientLeft` 盒子的左 border。
- `pageX = clientX + scrollLeft`(IE 不支持)
- `pageY = clientY + scrollTop`(IE 不支持)

## 判断滚动到底部

- 当某个元素满足 `scrollHeight - scrollTop <= clientHeight` 时，说明垂直滚动条滚动到底了。
- 当某个元素满足 `scrollWidth - scrollLeft <= clientWidth` 时，说明水平滚动条滚动到底了。
