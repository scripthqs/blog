# React setState

开发中并不能直接通过修改 state 的值让界面发生更新

- 修改 state 后，希望 React 根据最新的 state 来重新渲染界面，这是直接修改 state 会让 React 不知道数据何时修改
- React 没有类似 Vue2 的 Object.defineProperty 或者 Vue3 的 proxy 的方式监听数据的变化
- React 必须通过 setState 来告知 React 数据已经发生了变化

setState 方法是从 Component 中继承来的

## setState 的使用

```js
// 1.setState的基本使用
this.setState({
  message: "hello state1",
});

// 2.setState可以传入一个回调函数
// 好处一: 可以在回调函数中编写新的state的逻辑
// 好处二: 当前的回调函数会将之前的state和props传递进来
this.setState((state, props) => {
  // 1.编写一些对新的state处理逻辑
  // 2.可以获取之前的state和props值
  console.log(this.state.message, this.props);
  return {
    message: "hello state2",
  };
});

// 3.setState在React的事件处理中是一个异步调用
// 如果希望在数据更新之后(数据合并), 获取到对应的结果执行一些逻辑代码
// 那么可以在setState中传入第二个参数: callback
this.setState({ message: "hello state3" }, () => {
  console.log(this.state.message);
});
console.log(this.state.message);
```

## setState 异步更新

setState 的更新是异步的，并不能在执行完 setState 之后马上拿到最新的 state 结果

1. setState 设计成异步，可以显著提升性能
   - 如果每次调用 setState 都会进行一次更新，那么 render 函数会被频繁调用，界面重新渲染
   - 最好的方法应该是获取多个更新后，批量更新
2. 如果同步更新了 state，但是还没有执行 render 函数，那么 state 和 props 不能保持同步

如何获取更新后的值

1. setState 的回调

   ```js
   this.setState({ message: "hello state3" }, () => {
     console.log(this.state.message); //获取更新后的setState
   });
   ```

2. 生命周期函数

   ```js
   componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(prevProps, prevState, snapshot);
   }
   ```

在 React18 之前时，setState 有可能不是异步的

- 在组件生命周期或 React 合成事件中，setState 是异步的
- 在 setTimeout 或原生 DOM 事件中，setState 是同步的

在 React18 之后，默认所有的操作都放到了批处理中（异步处理）

- 如果希望拿到同步的操作，需要执行特殊的 flushSync 操作

```js
import { flushSync } from "react-dom";
setTimeout(() => {
  // 在react18之前, setTimeout中setState操作, 是同步操作
  // 在react18之后, setTimeout中setState异步操作(批处理)
  flushSync(() => {
    this.setState({ message: "hello flushSync" });
  });
  console.log(this.state.message);
}, 0);
```
