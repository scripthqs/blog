# 动画 animation

动画(animation)，通过设置关键帧来控制每一个动画，关键帧设置了动画的每一个步骤。制作动画效果需要 2 个步骤：定义动画和使用动画。

## @keyframes

1. 用 keyframes 定义动画 ， `from-to`可以用百分比代替`0%-100%`

   ```css
   @keyframes 动画名称 {
     from {
       width: 100px;
     }
     to {
       width: 200px;
     }
   }
   ```

2. 再使用动画

   ```css
   animation: name duration timing-function delay iteration-count direction fill-mode;
   animation: 动画名称 10s; /*name和duration不能省略*/
   ```

## animation-name

@keyframes 的动画名称，**必须要写**

## animation-duration

动画完成一个周期所花费的时间，单位是秒或者毫秒，默认 0，**必须要写**

## animation-timing-function

动画的速度曲线，默认是“ease"

- `ease`默认值，慢速开始，先加速再减速。
- `linear`匀速运动
- `ease-in`加速运动
- `ease-out`减速运动
- `ease-in-out`先加速后减速
- `cubic-bezier()`来指定时序函数。
- `steps()`分步执行时序函数
- 具体值参看<http://cubic-bezier.com>

## animation-delay

动画开始之前的延迟

## animation-iteration-count

规定动画应该播放的次数。正整数或者无限次

```css
animation-iteration-count: 2; /*2次，默认值是1*/
animation-iteration-count: infinite; /*循环播放*/
```

## animation-direction

规定是否应该轮流反向播放动画。

```css
animation-direction: normal; /*默认值。正常播放。*/
animation-direction: alternate; /*轮流反向播放*/
```

## animation-play-state

动画的运行状态

```css
animation-play-state: running; /*默认值，动画运行*/
animation-play-state: paused; /*动画暂停*/
```

## animation-fill-mode

动画的填充模式

```css
animation-fill-mode: backwards; /*默认值，回到起始位置*/
animation-fill-mode: forwards; /*停在动画结束后的位置*/
animation-fill-mode: both; /*结合上面两种*/
```

## animation

animation 简写属性

```css
animation: 名称 时间 曲线 何时开始 播放次数 反方向 起始或结束位置;
animation: 动画名称 10s; /*name和duration不能省略*/
```

```css
.box {
  width: 200px;
  height: 100px;
  background-color: orange;

  /* box要执行moveAnim的动画 */
  animation-name: moveAnim;
  animation-duration: 3s;
  animation-timing-function: ease-in-out;

  /* 其他属性: */
  /* 动画执行的次数 */
  /* animation-delay: 2s; */
  /* animation-iteration-count: 2; */
  /* animation-direction: reverse; */
  /* 元素停留在动画的哪一个位置 */
  /* animation-fill-mode: forwards; */

  /* js动态修改 */
  /* animation-play-state: paused; */
  animation: moveAnim 3s linear 1s 2 normal forwards;
}

@keyframes moveAnim {
  0% {
    transform: translate(0, 0) scale(0.5, 0.5);
  }

  33% {
    transform: translate(0, 200px) scale(1.2, 1.2);
  }

  66% {
    transform: translate(400px, 200px) scale(1, 1);
  }

  100% {
    transform: translate(400px, 0) scale(0.5, 0.5);
  }
}
```
