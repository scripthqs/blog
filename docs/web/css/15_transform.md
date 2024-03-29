# 转换 transform

transform 转换属性可以实现元素的**位移，旋转、缩放、倾斜**等效果。可以简单的理解为变形。

通过 `transform` 转换可以实现 2D 转换或者 3D 转换。

## transform-origin

transform-origin 属性可以设置元素转换的中心点

```css
transform-origin: x y;
transform-origin: 50% 50%; /*默认值，元素的中心点*/
transform-origin: center center; /*默认值，可以写方位词*/
```

## translate

translate 平移可以改变元素在页面中的位置，类似定位。

```css
transform: translate(x, y);
transform: translateX(n); /*沿X轴移动元素*/
transform: translateY(n); /*沿Y轴移动元素*/
```

- translate 不会影响到其他元素的位置
- 对行内元素没有效果
- translate 中如果使用百分比 % 单位，则相对于自身移动

```css
transform: translate(50%, 50%);
```

### translate 布局

利用这个技巧，可以显示水平垂直居中的布局，不需要知道元素的具体宽高。

```css
.father {
  position: relative; /*父元素开启相对定位*/
}
.son {
  position: absolute; /*子元素开启绝对定位*/
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
```

### perspective

`translateZ()`沿 Z 轴方向平移，属于立体效果，近大远小，默认情况下网页不支持透视，如果要看到效果，必须设置网页的视距。

```css
transform: translate3d(x, y, z); /*不能省略*/
```

perspective 透视属性设置当前网页的视距，人眼距网页的距离，一般写`600px-1000px`。格式有两种写法：

- 作为一个属性，设置给父元素，作用于所有 3D 转换的子元素。
- 作为 transform 属性的一个值，做用于元素自身。

```css
body {
  perspective: 800px;
}
```

## rotate

rotate 旋转让元素在二维平面内顺时针或逆时针旋转。

```css
transform: rotate(角度);
```

角度可以写 turn 或 deg

```css
transform: rotate(45deg); /*顺时针旋转45°*/
transform: rotate(1turn); /*顺时针旋转1圈*/
```

通过旋转可以使元素沿着 x,y,z 旋转指定的角度

```css
transform: rotateX(45deg);
transform: rotateY(45deg);
transform: rotateZ(45deg);
transform: rotate3d(x, y, z, deg); /*沿自定义轴旋转*/
transform: rotate3d(1, 1, 0, deg); /*沿自定义轴，矢量旋转*/
```

左手法则，顺时针旋转

## scale

scale 属性可以对元素设置缩放

```css
transform: scale(x, y);
transform: scale(1, 1); /*默认值*/
transform: scale(2, 2); /*宽高都放大了2倍*/
transform: scale(2); /*相当于上面的简写*/
transform: scale(0.5); /*宽高都缩小了2倍*/
```

默认中心的缩放，不影响其他盒子

## transform

```css
transform: translate(x, y) rotate(180deg) scale(2);
```

- 先旋转会改变坐标轴

- 当同时有位移和其他属性时，要把位移放在前面

## transform-style

transform-style 属性控制子元素是否开启三维立体空间

```css
body {
  perspective: 800px;
}
.father {
  transform-style: flat; /*子元素不开启3d立体空间，默认的*/
  transform-style: preserve-3d; /*子元素开启3d立体空间*/
}
```

## skew

skew 属性对元素进行倾斜

```css
/* 实现平行四边形 */
.box {
  width: 200px;
  height: 100px;
  background-color: skyblue;
  transform: skew(45deg);
}
```

## backface-visibility

背面可见性：backface-visibility，该 CSS 属性指定某个元素当背面朝向观察者时是否可见。

- visible：背面朝向用户时可见
- hidden：背面朝向用户时不可见
