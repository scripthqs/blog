# 相关技巧

## 传入数字获取序列数组

输入 5，获得[0,1,2,3,4]

```js
[...new Array(20).keys()];
```

## 获取对象的长度

```js
Object.keys(obj).length;
```

## 锚点滚动效果

```js
  <div id='item'></div>
  const click = () =>{
    (document.getElementById(item) as any).scrollIntoView({ behavior: 'smooth' });
  }
```

## 点击闪烁效果

- vue 配合动态绑定 css

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

## vue v-for 遍历对象

- 能够获取到键名、键值和索引

```js
<div v-for="(val, key, index) in data" :key="index" :id="key"></div>
```
