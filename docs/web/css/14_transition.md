# 过渡 transition

过渡 transition 属性可以指定一个属性发生变化时的切换方式。常常和 .hover 搭配使用。

```css
transition: 变化的属性 持续时间 运动曲线 延迟时间;
```

1. 属性：想要变化的 css 属性，width/height/bgc/margin/padding，如果想要所有的属性都变化过渡，写 all
2. 时间：过渡持续的时间，单位是秒（必须写单位），0.5s
3. 运动曲线：

   - `ease`默认值，慢速开始，先加速再减速。
   - `linear`匀速运动
   - `ease-in`加速运动
   - `ease-out`减速运动
   - `ease-in-out`先加速后减速
   - `cubic-bezier()`来指定时序函数。
   - `steps()`分步执行时序函数
   - 具体值参看<http://cubic-bezier.com>

4. 延迟时间：单位是秒（必须写单位），默认是 0s，可以省略

过渡写在本身上，**谁做动画给谁加**

## transition-property

transition-property 指定要执行过渡的属性，多个属性使用`,`隔开，可以写`all`。大部分属性都支持过渡。一个有效值到另一个有效值就可以。

## transition-duration

transition-duration 指定过渡的持续时间，`1s=1000ms`

## transition-timing-function

transition-timing-function 指定过渡的时序函数

- `ease`默认值，慢速开始，先加速再减速。
- `linear`匀速运动
- `ease-in`加速运动
- `ease-out`减速运动
- `ease-in-out`先加速后减速
- `cubic-bezier()`来指定时序函数。
- `steps()`分步执行时序函数
- 具体值参看<http://cubic-bezier.com>

## transition-delay

transition-delay 设置过渡效果的延迟

## transition

transition 可以同时设置过渡的相关属性，如果要写延迟，第一个时间是持续时间，第二个是延迟时间。

```css
transition: all 1s ease 0.5s;
```

```css
.container {
  background-color: #f00;
}

.box {
  position: relative;
  left: 0;

  width: 200px;
  height: 100px;
  background-color: orange;

  /* 告知浏览器 box 在进行一些CSS属性变化的时候有一个过渡效果 */
  /* transition-property: transform, left; */
  /* transition-property: all;
      transition-duration: 1s;
      transition-timing-function: ease-in;
      transition-delay: 1s; */

  /* 简写属性 */
  transition: all 1s ease-in 1s;
}

.container:hover .box {
  left: 100px;
  transform: translate(100px);
  width: 500px;
}

<div class="container">
   <div class="box"></div>
</div>
```
