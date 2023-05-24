# node 事件

Node 中的核心 API 都是基于异步事件驱动的

- 一些对象发出某件事件
- 可以监听这个事件，传入回调函数，会在监听时调用

发出事件和监听事件是通过 EventEmitter 类完成的，该类属于 events 对象

```js
// events模块中的事件总线
const EventEmitter = require("events");
// 创建EventEmitter的实例
const emitter = new EventEmitter();
// 监听事件
function handleFn(i, j, k) {
  console.log("监听到a的事件", i, j, k);
}
emitter.on("a", handleFn);

// 发射事件
setTimeout(() => {
  emitter.emit("a", 1, 2, 3);
  // 取消事件监听
  emitter.off("a", handleFn);
  setTimeout(() => {
    emitter.emit("a");
  }, 1000);
}, 2000);
```

## 事件的常用方法

```js
const EventEmitter = require("events");
const emitter = new EventEmitter();
emitter.on("a", () => {});
emitter.on("a", () => {});
emitter.on("c", () => {});
emitter.on("d", () => {});
emitter.on("e", () => {});
// 1.获取所有监听事件的名称
console.log(emitter.eventNames());

// 2.获取监听最大的监听个数
console.log(emitter.getMaxListeners());

// 3.获取某一个事件名称对应的监听器个数
console.log(emitter.listenerCount("a"));

// 4.获取某一个事件名称对应的监听器函数(数组)
console.log(emitter.listeners("a"));

// 5.once: 事件监听只监听一次(第一次发射事件的时候进行监听)
emitter.once("c", () => {
  console.log("on监听c");
});

// 6.prependListener: 将事件监听添加到最前面
emitter.prependListener("d", () => {
  console.log("on监听d");
});

// 7.removeAllListeners：移除所有的事件监听

ee.removeAllListeners("a"); // 在传递参数的情况下, 只会移除传递的事件名称的事件监听
ee.removeAllListeners(); // 不传递参数的情况下, 移除所有事件名称的所有事件监听
```
