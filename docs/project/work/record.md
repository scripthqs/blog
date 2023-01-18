# work

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

## require.context()函数

require.context 是 webpack 的一个 api，通过执行 require.context()函数，来获取指定的文件夹内的特定文件，在需要多次从同一个文件夹内倒入的模块，使用这个函数可以自动倒入，不用每个都显示的写 import 来引入。

## 路由传参

1. query 传参 参数会跟在 url 后面，刷新页码不丢失
2. params 传参 参数不可见 但是刷新页面参数会丢失 ，解决不丢失的方法存在 localStorage 或 sessionStorage 中

## antd

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

```json
{
  "pnlCount": 1,
  "pnl": {
    "length": 29.7,
    "width": 29.7,
    "count": null,
    "v": 568516,
    "useV": 116640,
    "edgeLength": 8,
    "edgeWidth": 8,
    "space": 8,
    "type": null,
    "q": null,
    "p": null,
    "key": 29.7
  },
  "setList": [
    {
      "name": "D202301090221431228-1",
      "length": 100,
      "width": 100,
      "count": 5,
      "flag": 0,
      "v": 10000,
      "x": 8,
      "y": 108,
      "l": 108,
      "z": 8,
      "level": null,
      "right": false,
      "edgeLength": null,
      "edgeWidth": null,
      "space": null,
      "ln": null,
      "wn": null,
      "setMakeUpCount": null,
      "alias": "set1"
    },
    {
      "name": "D202301090221431228-1",
      "length": 100,
      "width": 100,
      "count": 4,
      "flag": 0,
      "v": 10000,
      "x": 116,
      "y": 216,
      "l": 108,
      "z": 8,
      "level": null,
      "right": false,
      "edgeLength": null,
      "edgeWidth": null,
      "space": null,
      "ln": null,
      "wn": null,
      "setMakeUpCount": null,
      "alias": "set1"
    },
    {
      "name": "D202301090221431228-1",
      "length": 100,
      "width": 100,
      "count": 3,
      "flag": 0,
      "v": 10000,
      "x": 224,
      "y": 324,
      "l": 108,
      "z": 8,
      "level": null,
      "right": false,
      "edgeLength": null,
      "edgeWidth": null,
      "space": null,
      "ln": null,
      "wn": null,
      "setMakeUpCount": null,
      "alias": "set1"
    },
    {
      "name": "D202301090221431228-1",
      "length": 100,
      "width": 100,
      "count": 2,
      "flag": 0,
      "v": 10000,
      "x": 332,
      "y": 432,
      "l": 108,
      "z": 8,
      "level": null,
      "right": false,
      "edgeLength": null,
      "edgeWidth": null,
      "space": null,
      "ln": null,
      "wn": null,
      "setMakeUpCount": null,
      "alias": "set1"
    },
    {
      "name": "D202301090221431228-1",
      "length": 100,
      "width": 100,
      "count": 1,
      "flag": 0,
      "v": 10000,
      "x": 440,
      "y": 540,
      "l": 108,
      "z": 8,
      "level": null,
      "right": false,
      "edgeLength": null,
      "edgeWidth": null,
      "space": null,
      "ln": null,
      "wn": null,
      "setMakeUpCount": null,
      "alias": "set1"
    },
    {
      "name": "D202301090221431228-2",
      "length": 100,
      "width": 100,
      "count": 5,
      "flag": 0,
      "v": 10000,
      "x": 548,
      "y": 648,
      "l": 108,
      "z": 8,
      "level": null,
      "right": true,
      "edgeLength": null,
      "edgeWidth": null,
      "space": null,
      "ln": null,
      "wn": null,
      "setMakeUpCount": null,
      "alias": "set2"
    },
    {
      "name": "D202301090221431228-2",
      "length": 100,
      "width": 100,
      "count": 4,
      "flag": 0,
      "v": 10000,
      "x": 8,
      "y": 108,
      "l": 216,
      "z": 116,
      "level": null,
      "right": false,
      "edgeLength": null,
      "edgeWidth": null,
      "space": null,
      "ln": null,
      "wn": null,
      "setMakeUpCount": null,
      "alias": "set2"
    },
    {
      "name": "D202301090221431228-2",
      "length": 100,
      "width": 100,
      "count": 3,
      "flag": 0,
      "v": 10000,
      "x": 116,
      "y": 216,
      "l": 216,
      "z": 116,
      "level": null,
      "right": false,
      "edgeLength": null,
      "edgeWidth": null,
      "space": null,
      "ln": null,
      "wn": null,
      "setMakeUpCount": null,
      "alias": "set2"
    },
    {
      "name": "D202301090221431228-2",
      "length": 100,
      "width": 100,
      "count": 2,
      "flag": 0,
      "v": 10000,
      "x": 224,
      "y": 324,
      "l": 216,
      "z": 116,
      "level": null,
      "right": false,
      "edgeLength": null,
      "edgeWidth": null,
      "space": null,
      "ln": null,
      "wn": null,
      "setMakeUpCount": null,
      "alias": "set2"
    },
    {
      "name": "D202301090221431228-2",
      "length": 100,
      "width": 100,
      "count": 1,
      "flag": 0,
      "v": 10000,
      "x": 332,
      "y": 432,
      "l": 216,
      "z": 116,
      "level": null,
      "right": false,
      "edgeLength": null,
      "edgeWidth": null,
      "space": null,
      "ln": null,
      "wn": null,
      "setMakeUpCount": null,
      "alias": "set2"
    }
  ],
  "totalArea": 0.568516,
  "numList": [
    {
      "setLength": 100,
      "setWidth": 100,
      "orderNo": "D202301090221431228-1",
      "setCount": 5,
      "setMakeUpCount": null,
      "orderId": "1612333701880913922",
      "alias": "set1"
    },
    {
      "setLength": 100,
      "setWidth": 100,
      "orderNo": "D202301090221431228-2",
      "setCount": 5,
      "setMakeUpCount": null,
      "orderId": "1612333702812049476",
      "alias": "set2"
    }
  ],
  "ratio": 0.2052
}
```
