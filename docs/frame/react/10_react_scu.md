# React 性能优化

React 在 props 或 state 发生改变时，会调用 React 的 render 方法，会创建一棵不同的树。

- React 需要基于这两个不同的树之间的差别来判断如何有效的更新 UI
- React 进入了 diff 算法来优化

可以通过 shouldComponentUpdate 方法(简称 SCU)控制 render 方法是否被调用，该方法接收 2 个参数

- nextProps 修改后，最新的 props 属性
- nextState 修改后，最新的 state 属性

返回值是一个 boolean 类型，返回 true 调用 render，返回 false，不调用 render

```js
shouldComponentUpdate(newProps, nextState) {
  // 自己对比state是否发生改变: this.state和nextState
  if (this.props.message !== newProps.message) {
    return true
  }
  return false
}
```

## PureComponent

如果所有的类，都手动实现 shouldComponentUpdate，对开发不友好，只需要让 class 继承 PureComponent 就可以了

```js
// vscode快捷键rpc
import React, { PureComponent } from "react";

export default class Home extends PureComponent {
  render() {
    return <div>Home</div>;
  }
}
```

需要注意 React 数据的不可变性

```js
const newObj = { name: "aaa", id: "3" };
// 1.直接修改原有的state, 重新设置一遍(不能这么写)
// 在PureComponent是不能引入重新渲染(re-render)
this.state.lists.push(newObj);
this.setState({ lists: this.state.lists });
// 2.赋值一份lists, 在新的lists中修改, 设置新的lists
const lists = [...this.state.lists];
lists.push(newObj);
this.setState({ lists: lists });
```

## memo

对于类组件可以使用 PureComponent，函数式组件使用 memo

```js
import { memo } from "react";

const MemoComponent = memo(function(props) {
  console.log("MemoComponent render");
  return <h2>{props.message}</h2>;
});

export default MemoComponent;
```
