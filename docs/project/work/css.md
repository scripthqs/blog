# 样式相关

## 文本省略

```css
/* 单行省略 */
.singe-line {
  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-all;
  white-space: nowrap;
}

/* 两行省略 */
.double-line {
  word-break: break-all;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
```

## 毛玻璃效果

```css
.example {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;

  /* 做毛玻璃效果 */
  background-color: transparent;
  backdrop-filter: blur(8px);
}

/* 图片的毛玻璃效果 */

.box {
  position: relative;
  width: 200px;
  height: 200px;
  /* 超出去的模糊效果 隐藏掉 */
  overflow: hidden;
}

img {
  /* 毛玻璃效果 */
  filter: blur(8px);
}
```

## object-fit

object-fit 属性指定元素的内容应该如何去适应指定容器的高度与宽度。

- contain 保持原有尺寸比例。内容被缩放。
- fill 默认，不保证保持原有的比例，内容拉伸填充整个内容容器
- cover 保持原有尺寸比例。但部分内容可能被剪切。

## 锚点滚动效果

```js
<div ref="item"></div>;

// 滚动到顶部
const click = () => {
  item.value.scrollIntoView({ behavior: "smooth" });
};
//这个滚动这个设置距离
item.value.scrollTo({
  top: distance,
  behavior: "smooth",
});
```

## 点击闪烁效果

vue 配合动态绑定 css

```html
<div :class="{ tableFade: a===b }"></div>
<div :class="{ tableFade: true }"></div>
```

```css
@keyframes fade {
  from {
    border: none;
    background: #fff;
    opacity: 1;
  }
  50% {
    opacity: 0.4;
  }
  to {
    background: #f84726;
    border: 1px #f84726 solid;
    opacity: 1;
  }
}

.tableFade {
  animation: fade 500ms 2;
}
```

## antd 表单验证滚动

表单验证滚动到错误的地方

```js
const funForm = async () => {
  setTimeout(() => {
    const errorList = (document as any).querySelectorAll(".ant-form-item-explain-error");
    if (errorList && errorList.length != 0) {
      //由于校验失败ant会自动给失败表单项添加类名，直接获取即可
      errorList[0].scrollIntoView({
        block: "center",
        behavior: "smooth",
      });
    }
  }, 200);
  await busRef.value.validateFields();
  return busState.busForm;
};
```

## 倒计时

```vue
<a-statistic-countdown title="倒计时" :value="deadline" format="H 时 m 分 s 秒">
  <!-- <template #title>
    <div style="font-size: 24px"></div>
  </template> -->
</a-statistic-countdown>
// Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30;
<!-- const deadline = ref(new Date(new Date().setHours(0, 0, 0, 0) + 18.5 * 60 * 60 * 1000 - 1)); -->
```

## 图片懒加载

1. 位置计算 + 滚动事件 (Scroll) + DataSet API
2. IntersectionObserver API + DataSet API
3. LazyLoading 属性

```html
<img src="test.jpg" loading="lazy" />
```

- 占位图片
- data-src
- intersectionObserver

设置一个临时 Data 属性 data-src，控制加载时使用 src 代替 data-src，可利用 DataSet API 实现

```js
img.src = img.dataset.src;
```
