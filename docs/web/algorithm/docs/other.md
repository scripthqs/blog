## valueOf 方法

```js
//(a==1 &&a==2&&a==3)为true
//==会触发隐式转换，所以可以使用valueOf或者toString方法
class A {
  constructor(value) {
    this.value = value;
  }
  valueOf() {
    return this.value++;
  }
}
const a = new A(1);
//(a===1 &&a===2&&a===3)为true
//===不会触发隐式转换，Object.defineProperty 数据劫持的方法来实现

let value = 1;
Object.defineProperty(window, 'a', {
  get() {
    return value++;
  }
});
```

## 传入数字获取序列数组

输入 5，获得[0,1,2,3,4]

```js
[...new Array(20).keys()];
```

## 获取对象的长度

```js
Object.keys(obj).length;
```
