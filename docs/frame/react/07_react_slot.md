# React 组件的插槽

Vue 中有固定的做法通过 slot 来实现。React 有两种方案来实现:

- 组件的 children 子元素
- props 属性传递 react 元素

```js
import React, { Component } from "react";
import ChildrenSlot from "./components/ChildrenSlot";
import PropsSlot from "./components/PropsSlot";
export class ReactSlot extends Component {
  render() {
    const btn = <button>按钮</button>;
    return (
      <div>
        <h2>ReactSlot</h2>
        {/* 1.使用children实现插槽 */}
        <ChildrenSlot>
          <div>使用children实现插槽</div>
          <div>哈哈</div>
        </ChildrenSlot>
        {/* 2.使用props实现插槽 */}
        <PropsSlot slotOne={<div>使用props实现插槽</div>} slotTwo={<div>呵呵</div>} slotBtn={btn}></PropsSlot>
      </div>
    );
  }
}

export default ReactSlot;
```

注意：使用 children 实现插槽时，

- 如果只传入一个元素，`ChildrenSlot`里面的`const { children } = this.props;`的 children 是一个元素对象
- 传入多个元素时， children 是一个数组

可以使用 propTypes 来限定组件只能传一个元素

```js
ChildrenSlot.propTypes = {
  children: PropTypes.element,
};
```

## 实现作用域插槽

根据回调函数来实现

```js
<PropsSlot slotTwo={(e) => <div>{e}</div>}></PropsSlot>
//PropsSlot中
<div>{slotTwo("666")}</div>
```
