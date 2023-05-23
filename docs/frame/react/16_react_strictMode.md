# React 的 StrictMode

StrictMode 用来开启严格模式

- StrictMode 是一个组件，和 Fragment 一样，不会渲染任何 UI
- 可以给后代元素触发额外的检查和警告
- 严格模式检测仅在开发模式下运行，不会影响构建

```js
import React, { PureComponent, StrictMode } from "react";
// import { findDOMNode } from "react-dom"
import Home from "./pages/Home";
import Profile from "./pages/Profile";
export class App extends PureComponent {
  render() {
    return (
      <div>
        <StrictMode>
          <Home />
        </StrictMode>
        <Profile />
      </div>
    );
  }
}
export default App;
```

严格模式主要是检测什么：

- 识别不安全的生命周期
- 使用过时的 ref API
- 严格模式下，constructor 等生命周期会执行 2 次，生产环境还是 1 次
- 总的来说就是检测过时的方法
