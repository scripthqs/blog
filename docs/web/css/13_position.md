# 定位 position

## 定位简介

定位(position)是比较高级的布局属性，可以通过定位将元素摆放到页面的任意位置。CSS 的定位属性有 4 种，绝对定位，相对定位，固定定位，粘滞定位。

```css
div {
  position: static; /*默认值，没有开启定位*/
  position: relative; /*相对定位*/
  position: absolute; /*绝对定位*/
  position: fixed; /*固定定位*/
  position: sticky; /*粘滞定位*/
}
```

定位 = 定位属性 + 边偏移

```css
div {
  position: relative; /*相对定位*/
  /*有四个属性表示边偏移*/
  left: 100px;
  top: 100px;
  right: 100px;
  bottom: 100px;
}
```

浮动不会压住文字，但是绝对定位（固定定位）会压住文字

## relative

开启相对定位(relative)后，如果不设置偏移量元素不会发生任何变化

- **相对定位的参照物是自身**。
- 相对定位会提升元素的**层级**。
- 相对定位**不会脱离文档流**，别人不会把它的位置挤走，“灵魂出窍”。
- 不会改变元素的性质，块还是块行内还是行内。

作用：

- 微调元素
- 做绝对定位的参考，**子绝父相**。

## absolute

开启绝对定位(absolute)后，如果不设置偏移量元素的位置不会发生变化。

- 开启绝对定位后，元素会**脱离文档流**。
- 绝对定位会提升元素的**层级**。
- 绝对定位**参照物是包含块**。

### 包含块

正常情况下，**即没有脱离文档流时**，包含块(containing block)就是离当前元素最近的**祖先块元素**。

- **绝对定位会脱离文档流**，包含块是离它最近的**开启了定位的祖先元素**。
- 如果所有祖先元素都没开启定位，则参照物是根元素。
- HTML 根元素，又称**初始包含块**。

当包含块是`html`时，用 bottom 的定位的时候，参考的是浏览器首屏大小对应的页面左下角，此时，可能会踩坑。所以，要设置父元素的定位。

在实际开发中，一般采用**子绝父相**，子元素用绝对定位，父元素用相对定位。

## fixed

固定定位（fixed）是一种特殊的绝对定位。

- 唯一不同是，固定定位**参照物是浏览器视口**。
- 固定定位不会随网页的滚动条滚动。（可以做小广告）
- **fixed 是相对浏览器视口**和**absolute 是相对浏览器首屏**页面

当浏览器**拖动滚动条**时，就能看出来浏览器视口和浏览器首屏的区别。

## sticky

粘滞定位(sticky)和相对定位性质相似，不同的是元素到达某个位置后固定。（可以做导航条）

- **参照物是浏览器视口**
- 相对定位**不会脱离文档流**，占原先的位置
- 必须添加 top,left,right,bottom 其中一个才有效果

```css
position: sticky;
top: 10px; /*距离上端10px时固定*/
```

## z-index

对于**开启定位**的元素，可以通过`z-index`属性来指定元素的层级，`z-index`需要一个整数作为参数。

- 值越大元素的层级越高，元素层级越高越优先显示。
- 元素层级一样，优先显示靠下的元素。
- 祖先元素的层级再高也不会盖住后代元素，“水涨船高”。

```css
z-index: 9;
```
