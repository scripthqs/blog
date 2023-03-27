# React 高阶组件

高阶组件是参数为组件，返回值为新组件的函数。

- 高阶组件本质是一个函数
- 这个函数的参数是组件，返回值也是一个组件

```js
// 定义一个高阶组件
function hoc(Cpn) {
  // 1.定义类组件
  class NewCpn extends PureComponent {
    render() {
      return <Cpn />;
    }
  }
  // NewCpn.displayName = "Hello world";
  return NewCpn;

  // 定义函数组件
  // function NewCpn2(props) {

  // }
  // return NewCpn2
}

const HelloWorldHOC = hoc(HelloWorld);
```

组件名称

- ES6 中，类表达式中的类名可以省略
- 组件名称可以通过 displayName 来修改

## 增强 props

给一些需要特殊数据的组件, 注入 props

```js
import { PureComponent } from "react";

// 定义组件: 给一些需要特殊数据的组件, 注入props
function enhancedUserInfo(OriginComponent) {
  class NewComponent extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        userInfo: {
          name: "test",
          level: 99,
        },
      };
    }
    render() {
      return <OriginComponent {...this.props} {...this.state.userInfo} />;
    }
  }
  return NewComponent;
}
export default enhancedUserInfo;
```

## 共享 Context

利用高阶组件共享 Context

```js
// context/theme_context.js
import { createContext } from "react";
const ThemeContext = createContext();
export default ThemeContext;

// App.jsx
import React, { PureComponent } from "react";
import ThemeContext from "./context/theme_context";
import Home from "./pages/Home";
export class App extends PureComponent {
  render() {
    return (
      <div>
        <ThemeContext.Provider value={{ color: "red", size: 30 }}>
          <Home />
        </ThemeContext.Provider>
      </div>
    );
  }
}
export default App;

// Home.jsx
// 写法1，不利用高阶组件，但是不便复用
import ThemeContext from "./context/theme_context";
export class Home extends PureComponent {
  render() {
    return (
      <div>
        Home:
        <ThemeContext.Consumer>
          {(value) => {
            return (
              <h2>
                theme:{value.color}-{value.size}
              </h2>
            );
          }}
        </ThemeContext.Consumer>
      </div>
    );
  }
}
export default Home;

//写法2，利用高阶组件
// hoc/withTheme.js
import ThemeContext from "../context/theme_context";
function withTheme(OriginComponent) {
  return (props) => {
    return (
      <ThemeContext.Consumer>
        {(value) => {
          return <OriginComponent {...value} {...props} />;
        }}
      </ThemeContext.Consumer>
    );
  };
}
export default withTheme;

// Home.jsx
import withTheme from "../hoc/with_theme";
export class Home extends PureComponent {
  render() {
    const { color, size } = this.props;
    return (
      <div>
        <h2>
          Home: {color}-{size}
        </h2>
      </div>
    );
  }
}
export default withTheme(Home);
```

## 判断鉴权

```js
// hoc/loginAuth.js
function loginAuth(OriginComponent) {
  return (props) => {
    // 从localStorage中获取token
    const token = localStorage.getItem("token");
    if (token) {
      return <OriginComponent {...props} />;
    } else {
      return <h2>请先登录, 再进行跳转到对应的页面中</h2>;
    }
  };
}
export default loginAuth;

// Home.jsx
import React, { PureComponent } from "react";
import loginAuth from "../hoc/login_auth";
export class Home extends PureComponent {
  render() {
    return <h2>Home Page</h2>;
  }
}
export default loginAuth(Home);
```

- `this.forceUpdate()`可以强制渲染 render 函数，但是不推荐
- 尽量通过修改 state 来渲染 render 函数

## 劫持生命周期

```js
// hoc/log_render_time.js
import { PureComponent } from "react";
function logRenderTime(OriginComponent) {
  return class extends PureComponent {
    UNSAFE_componentWillMount() {
      this.beginTime = new Date().getTime();
    }
    componentDidMount() {
      this.endTime = new Date().getTime();
      const interval = this.endTime - this.beginTime;
      console.log(`当前${OriginComponent.name}页面花费了${interval}ms渲染完成!`);
    }

    render() {
      return <OriginComponent {...this.props} />;
    }
  };
}
export default logRenderTime;

// Detail.jsx
import React, { PureComponent } from "react";
import logRenderTime from "../hoc/log_render_time";
export class Detail extends PureComponent {
  // UNSAFE_componentWillMount() {
  //   this.beginTime = new Date().getTime()
  // }
  // componentDidMount() {
  //   this.endTime = new Date().getTime()
  //   const interval = this.endTime - this.beginTime
  //   console.log(`当前页面花费了${interval}ms渲染完成!`)
  // }
  render() {
    return (
      <div>
        <h2>Detail Page</h2>
        <ul>
          <li>数据列表1</li>
          <li>数据列表2</li>
          <li>数据列表3</li>
          <li>数据列表4</li>
          <li>数据列表5</li>
          <li>数据列表6</li>
          <li>数据列表7</li>
          <li>数据列表8</li>
          <li>数据列表9</li>
          <li>数据列表10</li>
        </ul>
      </div>
    );
  }
}
export default logRenderTime(Detail);
```

## 高阶组件的不足

高阶组件可以对 React 代码进行复用，早期 React 是通过 mixin，但是现在已经不推荐

- Mixin 可能会相互依赖，不利于维护
- 不同的 Mixin 方法可能会有冲突

HOC 也有一些缺陷，类组件使用还是挺多

- HOC 需要在原组件进行包裹或者嵌套，大量的 HOC 也不利于维护
- HOC 可以劫持 props，也可能造成冲突

目前最好的方案是使用 Hooks 来解决这些问题

## memo 和 forwardRef

- memo：函数式组件常用的 memo，本质就是一个高阶组件，劫持 props 判断是否重新渲染
- forwardRef：函数式组件常用的 forwardRef，也是一个高阶组件，用来获取组件的 ref
