# vue 响应式原理

可以自动响应数据变量的代码机制，就称之为是响应式的。

响应式设计：变量改变时，自动执行某一行代码或者多行代码。将多行代码放在一个函数里，就变成了当数据改变时，自动执行某个函数。

## 封装响应式函数

1. 封装一个新的函数 watchFn
2. 凡是传入到 watchFn 的函数，就是需要响应式的
3. 其他默认定义的函数不需要响应式

```js
const reactiveFns = [];
const watchFn = (fn) => {
  reactiveFns.push(fn);
  fn();
};
```

## 响应式依赖的收集

`reactiveFns`收集的依赖放在一个数组中保存，但是会存在数据管理的问题

- 开发中需要监听很多对象的响应式
- 这个对象很可能不止一个属性，每一个属性都需要对应的响应式函数
- 不能在全局维护一大堆数组

因此，需要设计一个类，用于管理某一个对象的某一属性的所有响应式函数，代替`reactiveFns`数组

```js
class Depend {
  constructor() {
    this.reactiveFns = [];
  }
  addDepend(fn) {
    this.reactiveFns.push(fn);
  }
  notify() {
    this.reactiveFns.forEach((fn) => {
      fn();
    });
  }
}
```

- `Object.keys`方法传入一个对象，可以遍历对象的 key，返回一个由 key 组成的数组
- `Object.defineProperty` 方法会直接在一个对象上定义一个新属性，或者修改一个对象的现有属性，并返回此对象。

```js
const dep = new Depend();
Object.keys(obj).forEach((key) => {
  let value = obj[key];
  Object.defineProperty(obj, key, {
    set: function (newValue) {
      value = newValue;
      dep.notify();
    },
    get: function () {
      return value;
    },
  });
});
```

## 响应式数据的判断

### isRef

- isRef: 检查一个值是否为一个 ref 对象

### isReactive

- isReactive: 检查一个对象是否是由 `reactive` 创建的响应式代理

### isReadonly

- isReadonly: 检查一个对象是否是由 `readonly` 创建的只读代理

### isProxy

- isProxy: 检查一个对象是否是由 `reactive` 或者 `readonly` 方法创建的代理
