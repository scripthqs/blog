# React 的 transition

在开发中，可能需要给组件的显示和消失添加某种过渡动画，增加用户体验。

## react-transition-group

```bash
npm i react-transition-group
```

```js
import React, { createRef, PureComponent } from "react";
import { CSSTransition } from "react-transition-group";
import "./style.css";

export class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isShow: true,
    };

    this.sectionRef = createRef();
  }

  render() {
    const { isShow } = this.state;

    return (
      <div>
        <button onClick={(e) => this.setState({ isShow: !isShow })}>切换</button>
        {/* { isShow && <h2>哈哈哈</h2> } */}
        <CSSTransition
          nodeRef={this.sectionRef}
          in={isShow}
          unmountOnExit={true}
          classNames="trn"
          timeout={2000}
          appear
          onEnter={(e) => console.log("开始进入动画")}
          onEntering={(e) => console.log("执行进入动画")}
          onEntered={(e) => console.log("执行进入结束")}
          onExit={(e) => console.log("开始离开动画")}
          onExiting={(e) => console.log("执行离开动画")}
          onExited={(e) => console.log("执行离开结束")}
        >
          <div className="section" ref={this.sectionRef}>
            <h2>哈哈哈</h2>
            <p>我是内容, 哈哈哈</p>
          </div>
        </CSSTransition>
      </div>
    );
  }
}
export default App;
```

`react-transition-group` 主要包含 4 个组件

- Transition
- CSSTransition
- SwitchTransition
- TransitionGroup
