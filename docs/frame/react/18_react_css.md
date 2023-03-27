# React 编写 CSS

React 编写 css 的方法非常多，选择 css 解决方案应该符合几种条件：

- 可以编写局部 css：具备自己的作用域，不会随意污染其他组件内的元素
- 可以编写动态 css：可以获取当前组件的一些状态，根据状态的变化生成不同的 css 样式
- 支持所有的 css 特性：伪类、动画、媒体查询等
- 编写起来简洁方便

Vue 的 css 编写方法好于 React

- Vue 可以通过`<style></style>`标签来编写自己的样式
- 可以添加 scoped 属性让样式局部有效
- 通过 lang 属性来设置 less,saas 预处理器
- 通过内联样式根据最新的状态设置和改变 css

## 内联样式

内联样式是一种基本的写法

- style 接受一个采用小驼峰命名属性的 JavaScript 对象，而不是 CSS 字符串
- 并且可以引用 state 的状态来设置相关的样式

内联样式的优点：

- 样式之间不会冲突
- 可以动态获取当前 state 中的状态

内联样式的缺点：

- 写法都需要使用驼峰标识
- 某些样式没有提示
- 大量的样式，代码混乱

```js
import React, { PureComponent } from "react";
export default class ReactStyle extends PureComponent {
  constructor() {
    super();
    this.state = {
      fSize: 20,
    };
  }
  changeSize(e) {
    this.setState({
      fSize: 50,
    });
  }
  render() {
    const { fSize } = this.state;
    return (
      <div>
        <h2>ReactStyle</h2>
        <div style={{ color: "red", fontSize: "20px" }}>标题</div>
        <div style={{ color: "green", fontSize: `${fSize}px` }}>内容</div>
        <button onClick={(e) => this.changeSize(e)}>变大</button>
      </div>
    );
  }
}
```

## 普通的 css

普通 css 编写到一个单独的文件，之后再引入

- 对于组件化开发来说，样式也应该只对自己内部生效
- 这种方式最大的问题就是样式间会相互层叠掉

```js
import React, { PureComponent } from "react";
import Home from "./home/Home";
import Hello from "./hello/Hello";

import "./ReactCss.css";

export default class ReactCss extends PureComponent {
  render() {
    return (
      <div>
        <h2>ReactCss</h2>
        <div className="title">标题</div>
        <div className="content">内容</div>
        <Home></Home>
        <Hello></Hello>
      </div>
    );
  }
}
```

无论是 Home,Hello,还是 ReactCss 组件谁写的样式都会影响其他组件，都是全局生效

## css modules

css modules 并不是 React 特有的解决方法，而是使用了类似于 webpack 配置环境下都可以使用

- 如果在其他项目中使用它，那么需要自己进行配置，比如配置 webpack.config.js 的 modules:true

React 脚手架已经内置了 css.modules 的配置

- .css/.less/.scss 等样式文件都需要修改成.module.css/.module.less/.module.scss 等
- 之后就可以引用并使用

css modules 解决了局部作用域的的问题

这种方式也有自己的缺点：

- 引用的类名，不能使用连接符(.home-title)，在 js 中是不识别的
- 所有的 className 都必须使用`{style.className}`的形式编写
- 不方便动态的修改某些样式，依然需要使用内联样式的方式

```js
import React, { PureComponent } from "react";
import Home from "./home/Home";
import mpStyle from "./ModulePage.module.css";
export default class ModulePage extends PureComponent {
  render() {
    return (
      <div>
        <div className={mpStyle.title}>ModulePage</div>
        <div className={mpStyle.content}>ModulePage的内容</div>
        <Home></Home>
      </div>
    );
  }
}
```

## CSS in Js

CSS in Js 是一种模式，其中 CSS 有 JS 生成而不是在外部文件中定义。

- 这个功能不是 React 的一部分，而是有第三方库提供的
- React 对样式定义没有明确的态度

React 的思想就是逻辑和 UI 无法分离，所有有了 jsx 语法，React 也被称为 All in js.

总的来说，CSS in Js 是 React 编写 CSS 最受欢迎的一种解决方案。

目前比较流行的 CSS in Js 库：

- styled-components
- emotion
- glamorous

目前最流行的是 styled-components。

ES6 标签模板字符串

ES6 中增加了模板字符串的语法，其中有一种标签模板字符串的使用

```js
// ES6: 标签模板字符串
const name = "hello";
const age = 18;

// 1.模板字符串的基本使用
const str = `my name is ${name}, age is ${age}`;
console.log(str);

// 2.标签模板字符串的使用
function foo(...args) {
  console.log(args);
}

// foo("why", 18, 1.88)
foo`my name is ${name}, age is ${age}`;
```

使用 styled-components

1. 可以基本使用，包括嵌套等语法，用&获取当前元素，可以使用伪类、伪元素
2. 子元素单独抽取到一个样式组件
3. 可以接受外部传入的 props
4. 可以通过 attrs 给标签模板字符串中提供的属性
5. 从一个单独的文件中引入变量

```js
//style.js
import styled from "styled-components";
export const AppWrapper = styled.div`
  .title {
    color: green;
    font-size: 50px;
    &:hover {
      background-color: red;
    }
  }
`;
//StyledComponents.jsx
import React, { PureComponent } from "react";
import { AppWrapper } from "./style.js";
export default class StyledComponents extends PureComponent {
  render() {
    return (
      <AppWrapper>
        <div className="title">StyledComponents</div>
        <div className="content">StyledComponents内容</div>
      </AppWrapper>
    );
  }
}

//3. 可以接受外部传入的 props，在style.js可以获取外面的变量
<AppWrapper size={size} color={color}>
  <div className="title">StyledComponents</div>
  <div className="content">StyledComponents内容</div>
</AppWrapper>
.title {
  font-size: ${props => props.size}px;
  color: ${props => props.color};
  &:hover {
    background-color: red;
  }
}
//4.通过attrs可以设置一个默认值
export const SectionWrapper = styled.div.attrs(props => ({
  tColor: props.color || "blue"
}))`
  border: 1px solid red;

  .title {
    font-size: ${props => props.size}px;
    color: ${props => props.tColor};

    &:hover {
      background-color: red;
    }
  }
`
// 5.从一个单独的文件中引入变量
import {primaryColor,largeSize} from "./style/variables"
export const SectionWrapper = styled.div`
  .content {
    font-size: ${largeSize}px;
    color: ${primaryColor};
  }
`
```

styled 设置主题

```js
import { ThemeProvider } from "styled-components";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={{ color: "purple", size: "50px" }}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
```

支持样式的继承

```js
const myButton = styled.button`
  padding: 8px 20px;
  border-radius: 5px;
`;
const myWarnButton = styled(myButton)`
  background-color: red;
  color: #fff;
`;
```

## 添加 class

Vue 添加 class

```js
//传入一个对象
<div class='static' :class="{active:isActive,'color':'red'}"></div>
//传入一个数组
<div :class="[activeClass,colorClass]"></div>
//对象数组混合
<div :class="[{active:isActive},colorClass]"></div>
```

React 添加 class

- 可以用 js 逻辑决定是否添加
- 使用 classnames 库

```js
// 使用三元运算
this.state = {
  isbbb: true,
  isccc: true,
};
const { isbbb, isccc } = this.state;
<h2 className={`aaa ${isbbb ? "bbb" : ""} ${isccc ? "ccc" : ""}`}>哈哈哈</h2>;

// 使用一个数组
const { isbbb, isccc } = this.state;
const classList = ["aaa"];
if (isbbb) classList.push("bbb");
if (isccc) classList.push("ccc");
const classname = classList.join(" ");
<h2 className={classname}>呵呵呵</h2>;
```

使用 classnames 库

- npm i classnames

```js
import classNames from "classnames";
<h2 className={classNames("aaa", { bbb: isbbb, ccc: isccc })}>hello</h2>;
<h2 className={classNames(["aaa", { bbb: isbbb, ccc: isccc }])}>world</h2>;
```
