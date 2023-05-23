# React 的 Portals

某些情况下，希望渲染的内容独立于父组件，甚至独立于当前挂载到的 DOM 元素中，默认都是挂载到 id 为 root 的 DOM 元素上。Portal 提供了一种将子节点渲染到存在父组件外的 DOM 节点。类似 Vue3 的 teleport。

## createPortal

- 第一个参数：任何可渲染的 React 子元素，例如一个元素，字符串或 fragment
- 第二个参数：是一个 DOM 元素

```js
import React, { PureComponent } from "react";
import { createPortal } from "react-dom";
import Modal from "./Modal";
export class App extends PureComponent {
  render() {
    return (
      <div className="app">
        <h1>App H1</h1>
        {createPortal(<h2>App H2</h2>, document.querySelector("#hello"))}

        {/* 2.Modal组件 */}
        <Modal>
          <h2>我是标题</h2>
          <p>我是内容, 哈哈哈</p>
        </Modal>
      </div>
    );
  }
}

export default App;

// 1. 在index.html添加新节点
<div id="modal"></div>;
// 2. 编写节点的样式
...
// 3.编写modal.jsx组件
import React, { PureComponent } from "react";
import { createPortal } from "react-dom";
export class Modal extends PureComponent {
  render() {
    return createPortal(this.props.children, document.querySelector("#modal"));
  }
}
export default Modal;
```
