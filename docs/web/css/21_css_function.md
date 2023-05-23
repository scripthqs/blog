# 原生 CSS 函数

## var 函数

```css
:root {
  /* 定义了一个变量(CSS属性) */
  /* 只有后代元素可以使用 */
  --main-color: #f00;
}

.box {
  color: var(--main-color);
}

.title {
  color: var(--main-color);
}
```

## calc 函数

calc() 函数可以在执行 css 属性值时执行一些计算。calc() 内部运算符两侧必须各加一个空格。

```css
.box {
  width: 500px;
  height: 100px;
  background-color: orange;
}

.item {
  height: 50px;
  display: inline-block;
}

.item1 {
  /* width的百分比相对于包含块(父元素) */
  width: calc(100% - 100px);
  background-color: #f00;
}

.item2 {
  width: 100px;
  background-color: #0f0;
}

/* <div class="box">
  <div class="item item1"></div>
  <div class="item item2"></div>
</div> */
```

## blur 函数

```css
/* img {
      filter: blur(5px);
    } */

.box {
  display: inline-block;
  position: relative;
  /* filter: blur(5px); */
}

.cover {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
}

/* <div class="box">
  <img src="xxx.png" alt="">
  <div class="cover"></div>
</div> */
```

## gradient 函数

```css
.box {
  width: 200px;
  height: 100px;

  /* background-color: orange; */
  /* background-image: linear-gradient(red, blue); */
  /* 改变方向 */
  /* background-image: linear-gradient(to right, red, blue); */
  /* background-image: linear-gradient(to right top, red, blue); */
  /* background-image: linear-gradient(-45deg, red, blue); */
  /* background-image: linear-gradient(to right, red, blue 40px, orange 60%, purple 100%); */

  /* radial-gradient */
  /* background-image: radial-gradient(red, blue); */
  background-image: radial-gradient(at 0% 50%, red, blue);
}

/* <div class="box"></div> */
```

## 配置 css 变量

```css
:root {
  --primary-color: #ff9854;
  --line-color: #faf8f9;
  --theme-linear-gradient: linear-gradient(90deg, #fa8c1d, #fcaf3f);

  /* 全局修改: 任何地方只要用到-van-tabbar-item-icon-size都会被修改掉 */
  /* --van-tabbar-item-icon-size: 30px !important; */

  /* 全局修改: 修改search样式 */
  --van-primary-color: var(--primary-color);
  --van-search-left-icon-color: var(--primary-color) !important;
}
```
