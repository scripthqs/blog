# 书写规范

css 一般按照以下顺序写比较好。

## 1.布局定位书写

```css
div {
  display: block;
  position: absolute;
  float: left;
  clear: both;
  visibility: hidden;
  overflow: hidden;
}
```

## 2.自身属性

```css
div {
  width: 100px;
  height: 100px;
  margin: 0 auto;
  padding: 10px;
  border: 1px solid red;
  background: blue url(img.jpg) no-repeat fixed top;
}
```

## 3.文本属性

```css
div {
  color: #333;
  font: 18px "宋体";
  text-decoration: none;
  text-align: center;
  vertical-align: middle;
}
```

## 4.其他属性

```css
div {
  border-radius: 50%;
  box-shadow: 10px 10px 50px 10px rgba;
}
```
