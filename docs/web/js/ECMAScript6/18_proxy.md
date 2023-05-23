# proxy

## 监听对象

可以使用 Object.defineProperty 的存储属性描述符来对属性的操作进行监听

- Object.defineProperty 设计的初衷，不是为了去监听截止一个对象中所有的属性的
- 我们在定义某些属性的时候，初衷其实是定义普通的属性，但是后面我们强行将它变成了数据属性描述符
- 如果我们想监听更加丰富的操作，比如新增属性、删除属性，那么 Object.defineProperty 是无能为力的

```js
const obj = {
  name: "abcd",
  age: 18,
  height: 1.88,
};

// 需求: 监听对象属性的所有操作
// 监听属性的操作
// 1.针对一个属性
let _name = obj.name;
Object.defineProperty(obj, "name", {
  set: function(newValue) {
    console.log("监听: 给name设置了新的值:", newValue);
    _name = newValue;
  },
  get: function() {
    console.log("监听: 获取name的值");
    return _name;
  },
});

// 2.监听所有的属性: 遍历所有的属性, 对每一个属性使用defineProperty
const keys = Object.keys(obj);

Object.keys(obj).forEach((key) => {
  let value = obj[key];
  Object.defineProperty(obj, key, {
    set: function(newValue) {
      console.log(`监听: 给${key}设置了新的值:`, newValue);
      value = newValue;
    },
    get: function() {
      console.log(`监听: 获取${key}的值`);
      return value;
    },
  });
});

// console.log(obj.name)
// obj.name = "aaa"
console.log(obj.age);
obj.age = 17;
console.log(obj.age);

// 什么是响应式?
// const nameEl = document.querySelector(".name")
// nameEl.textContent = obj.name
// obj.name = "aaa"
// obj.name = "bbb"
```

ES6 新增了 Proxy 类，这个类从名字就可以看出来，是用于帮助我们创建一个代理

- 如果我们希望监听一个对象的相关操作，那么我们可以先创建一个代理对象（Proxy 对象）
- 对该对象的所有操作，都通过代理对象来完成，代理对象可以监听我们想要对原对象进行操作

首先我们需要 new Proxy 对象，并且传入需要侦听的对象以及一个处理对象，可以称之为 handler。

```js
const p = new Proxy(target, handler);
```

我们之后的操作都是直接对 Proxy 的操作，而不是原有的对象，因为我们需要在 handler 里面进行侦听。

```js
const obj = {
  name: "aaa",
  age: 18,
  height: 1.88,
};

// 1.创建一个Proxy对象
const objProxy = new Proxy(obj, {
  set: function(target, key, newValue) {
    console.log(`监听: 监听${key}的设置值: `, newValue);
    target[key] = newValue;
  },
  get: function(target, key) {
    console.log(`监听: 监听${key}的获取`);
    return target[key];
  },
});

// 2.对obj的所有操作, 应该去操作objProxy
console.log(objProxy.name);
objProxy.name = "bbb";
console.log(objProxy.age);
objProxy.age = 20;
//可以监听之前没有的属性
objProxy.address = "重庆";
console.log(objProxy.address);
```
