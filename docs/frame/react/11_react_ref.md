# React 获取 DOM

在 React 的开发模式中，多数情况是不需要也不建议直接操作原生 DOM 的，某些情况还是需要使用 DOM 操作

- 管理焦点、文本选择、媒体播放
- 触发强制动画
- 集成第三方 DOM 库

## createRef

可以创建 refs 来获取 DOM

1. 在 React 元素上绑定一个 ref 字符串(不推荐)
2. 提前创建好 ref 对象, createRef(), 将创建出来的对象绑定到元素(官方推荐)
3. 传入一个回调函数, 在对应的元素被渲染之后, 回调函数被执行, 并且将元素传入

```js
import React, { PureComponent, createRef } from "react";

export class App extends PureComponent {
  constructor() {
    super();
    this.state = {};
    this.titleRef = createRef();
    this.titleEl = null;
  }

  getNativeDOM() {
    // 1.方式一: 在React元素上绑定一个ref字符串(不推荐了)
    console.log(this.refs.ref1);

    // 2.方式二: 提前创建好ref对象, createRef(), 将创建出来的对象绑定到元素
    console.log(this.titleRef.current);

    // 3.方式三: 传入一个回调函数, 在对应的元素被渲染之后, 回调函数被执行, 并且将元素传入
    console.log(this.titleEl);
  }

  render() {
    return (
      <div>
        <h2 ref="ref1">Hello World1</h2>
        <h2 ref={this.titleRef}>Hello World2</h2>
        <h2 ref={(el) => (this.titleEl = el)}>Hello World3</h2>
        <button onClick={(e) => this.getNativeDOM()}>获取DOM</button>
      </div>
    );
  }
}

export default App;
```

## forwardRef

ref 的值根据节点的类型会有所不同

- ref 属性用于 HTML 元素时，构造函数使用 React.createRef()创建的 ref 接受底层的 DOM 元素作为其 current 属性
- ref 属性用于自定义 class 组件时，ref 对象接收组件挂载实例作为其 current 属性
- 不能在函数组件上使用 ref 属性，因为它们没有实例

```js
//在函数式组件中使用ref
import React, { PureComponent, createRef, forwardRef } from "react";

const HelloWorld = forwardRef(function(props, ref) {
  return (
    <div>
      <h1 ref={ref}>Hello World</h1>
      <p>哈哈哈</p>
    </div>
  );
});

export class App extends PureComponent {
  constructor() {
    super();

    this.hwRef = createRef();
  }

  getComponent() {
    console.log(this.hwRef.current);
  }

  render() {
    return (
      <div>
        <HelloWorld ref={this.hwRef} />
        <button onClick={(e) => this.getComponent()}>获取组件实例</button>
      </div>
    );
  }
}

export default App;
```
