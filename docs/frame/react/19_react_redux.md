# Redux

## 纯函数

函数式编程中纯函数概念很重要：

- 确定的输入，一定会产生确定的输出
- 在执行过程中，不能产生任何副作用（例如更改全局变量、修改传递给函数的参数等）。

数组的 slice 是一个纯函数，splice 就不是一个纯函数。

```js
const names = ["aaa", "bbb", "ccc"];
const newNames = name.slice(0, 1); //不会对原数组进行任何操作，而是生成一个新数组
const newNames2 = names.splice(0, 1); //会返回一个新数组，也会对原数组进行修改
```

React 要求无论是使用 function 还是 class 声明组件，这个组件都应该像纯函数一样，保护他们的 props 不会被修改。Redux 中的 reducer 也被要求是一个纯函数。

## redux 状态管理

redux 的核心概念

1. store
2. action
3. reducer

store 是数据源，修改需要通过 action

- 所有数据的变化，必须通过派发(dispatch)action 来更新
- action 是一个普通的 js 对象，用来描述这次更新的 type 和 content

reducer 是一个纯函数

- 将传入的 state 和 action 结合起来生成一个新的 state
- 参数一: store 中目前保存的 state
- 参数二: 本次需要更新的 action(dispatch 传入的 action)
- 返回值: 它的返回值会作为 store 之后存储的 state

```js
import { createStore } from "redux";
// 定义 reducer 函数
function counter(state = 0, action) {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
}
// 创建 store 对象，并将 reducer 函数传递给它
const store = createStore(counter);
// 创建动作
const incrementAction = { type: "INCREMENT" };
const decrementAction = { type: "DECREMENT" };
// 在需要更新状态的组件中，调用 dispatch() 函数
store.dispatch(incrementAction);
store.dispatch(decrementAction);
// 在需要访问状态的组件中，调用 getState() 函数
console.log(store.getState()); // 输出 1
```

订阅 store

```js
const store = require("./store");
const unsubscribe = store.subscribe(() => {
  console.log("订阅数据的变化:", store.getState());
});
//修改store的数据必须通过dispatch action
const nameAction = { type: "changeName", name: "world" };
const incrementAction = { type: "INCREMENT", num: 10 };
const decrementAction = { type: "DECREMENT", num: 20 };
// unsubscribe();//取消订阅
store.dispatch(nameAction);
store.dispatch(incrementAction);
store.dispatch(decrementAction);
```

## redux 代码优化

1. 将派发的 action 生成过程放到一个 actionCreators 函数中
2. 将定义的所有 actionCreators 的函数, 放到一个独立的文件中: store/actionCreators.js
3. actionCreators 和 reducer 函数中使用字符串常量是一致的, 所以将常量抽取到一个独立 store/constants.js 的文件中
4. 将 reducer 和默认值(initialState)放到一个独立的 store/reducer.js 文件中, 而不是在 index.js

```js
//使用actionCreators创建action
const changeNameAction = (name) => ({
  type: "changeName",
  name,
});
//修改store的数据必须通过action
const nameAction1 = { type: "changeName", name: "world1" };
const nameAction2 = { type: "changeName", name: "world2" };
store.dispatch(nameAction1);
store.dispatch(nameAction2);
store.dispatch(changeNameAction("world3"));
store.dispatch(changeNameAction("world4"));
```

优化后的 redux 代码，store 会有 4 个 js 文件

- constants.js
- actionCreators.js
- reducer.js
- index.js

```js
// 1.store/constants.js
const ADD_NUMBER = "add_number";
const CHANGE_NAME = "change_name";
module.exports = {
  ADD_NUMBER,
  CHANGE_NAME,
};

// 2.actionCreators.js
const { ADD_NUMBER, CHANGE_NAME } = require("./constants");
const changeNameAction = (name) => ({
  type: CHANGE_NAME,
  name,
});
const addNumberAction = (num) => ({
  type: ADD_NUMBER,
  num,
});
module.exports = {
  changeNameAction,
  addNumberAction,
};

// 3.reducer.js
const { ADD_NUMBER, CHANGE_NAME } = require("./constants");
// 初始化的数据
const initialState = {
  name: "hello",
  counter: 100,
};
function reducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_NAME:
      return { ...state, name: action.name };
    case ADD_NUMBER:
      return { ...state, counter: state.counter + action.num };
    default:
      return state;
  }
}
module.exports = reducer;

// 4.index.js
const { createStore } = require("redux");
const reducer = require("./reducer.js");
// 创建的store
const store = createStore(reducer);
module.exports = store;
```

## redux 的三大原则

1. 单一数据源
2. state 是只读的
3. 使用纯函数来执行修改

## react-redux

redux 和 react 没有直接关系，可以在其他框架中使用。redux 和 react 结合得更好，通过 state 函数描述界面状态.

```bash
npm i react-redux
```

里面 4 个核心的概念

1. Provider
2. connect

react-redux 的 connect 用法

```js
// 1.需要在index.js页面引入
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";
//编写React代码，并且通过React渲染出对应的内容
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// 2.使用connect
import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { incrementAction, decrementAction } from "../store/actionCreators";

export class About extends PureComponent {
  calcNumber(num, isAdd) {
    if (isAdd) {
      console.log("add");
      this.props.addNumber(num);
    } else {
      console.log("sub");
      this.props.subNumber(num);
    }
  }
  render() {
    const { counter } = this.props;
    return (
      <div>
        <div className="title">About{counter}</div>
        <button onClick={(e) => this.calcNumber(1, true)}>+1</button>
        <button onClick={(e) => this.calcNumber(5, true)}>+5</button>
        <button onClick={(e) => this.calcNumber(5, false)}>-5</button>
        <button onClick={(e) => this.calcNumber(10, false)}>-10</button>
      </div>
    );
  }
}
// connect的返回值是一个高阶函数
// function mapStateToProps(state) {
//   return {
//     counter: state.counter,
//   };
// }
const mapStateToProps = (state) => ({
  counter: state.counter,
});

const mapDispatchToProps = (dispatch) => ({
  addNumber: (num) => dispatch(incrementAction(num)),
  subNumber: (num) => dispatch(decrementAction(num)),
});

export default connect(mapStateToProps, mapDispatchToProps)(About);
```

## 异步操作

redux 保存的很多数据可能来自服务器，需要进行异步请求，再将数据保存到 redux 中。

可以在网络请求的异步代码放在组件的生命周期来完成，但是网络请求到的数据也属于状态管理的一部分，更好的方式也是交给 redux 来管理。

- 在默认情况下，dispatch(action)，action 需要是一个 js 对象
- 需要安装 redux-thunk，让 dispatch 的 action 可以是一个函数
- 该函数会被调用，并且传递给这个函数一个 dispatch 函数和 getState 函数
- dispatch 函数用于之后再次派发 action
- getState 函数用于获取之前的一些状态

```js
// 1.安装redux-thunk，是一个中间件
// 2.创建store时传入应用middleware的enhance函数
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducer";
// 正常情况下 store.dispatch(object)
// 想要派发函数 store.dispatch(function)
// redux-devtools //使用redux-devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true }) || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
export default store;
// 3.定义返回的action
export const fetchInfoAction = () => {
  return async (dispatch, getState) => {
    let res = await axios.get("https://v.api.aa1.cn/api/yiyan/index.php");
    console.log(res.data);
    const info = res.data;
    dispatch(changeInfoAction(info));
  };
};
```
