# Context 应用场景

对于非父子组件数据的共享

- 在开发中，比较常见的数据传递方式通过 props 属性自上而下(由父到子)进行传递
- 有些情况下，一些数据需要多个组件进行共享(地区偏好、UI 主题、用户登录状态、用户信息)

如果一层层的传，有个简单的语法

```js
const { info } = this.state;
<Header {...info}></Header>;
```

使用 Context，主要有一下几个 api，但是还是很繁琐

- React.createContext
- Context.Provider
- Class.contextType
- Context.Consumer

```js
/* 1.第一步操作.创建一个Context */
// InfoContext.jsx
import React from "react";
const InfoContext = React.createContext();
export default InfoContext;

/* 2.第二步操作: 通过ThemeContext中Provider中value属性为后代提供数据 */
//在main.jsx父组件中
// import InfoContext './context/InfoContext';
<InfoContext.Provider value={{ color: "red", size: "30" }}>
  <Son></Son>
</InfoContext.Provider>;

//在Grandson.jsx组件中，当Grandson.jsx是类组件
// import InfoContext './context/InfoContext';
/* 3.第三步操作: 设置组件的contextType为某一个Context */
Top.contextType = InfoContext;
/*4.第四步操作: 获取数据, 并且使用数据  */
console.log(this.context);
```

以上方法是类组件的使用方式，如果是函数式组件

```js
//在Grandson.jsx组件中，当Grandson.jsx是函数组件
// import InfoContext './context/InfoContext';
return (
  <div>
    {/* 函数式组件中使用Context共享的数据 */}
    <InfoContext.Consumer>
      {(value) => {
        return <h2>{value.color}</h2>;
      }}
    </InfoContext.Consumer>
  </div>
);
```

另外 Context 是支持嵌套的

```js
<UserContext.Provider value={{ id: "666", name: "user" }}>
  <InfoContext.Provider value={{ color: "red", size: "30" }}>
    <Son {...info} />
  </InfoContext.Provider>
</UserContext.Provider>;

//在Grandson.jsx组件中，当Grandson.jsx是类组件
import UserContext from "./context/UserContext";
return (
  <div>
    <h2>Grandson:{this.context.color}</h2>
    <UserContext.Consumer>
      {(value) => {
        return <h2>{value.name}</h2>;
      }}
    </UserContext.Consumer>
  </div>
);
```

`React.createContext`默认值

- React.createContext 可以传一个默认值 defaultValue
- 当组件不能被 `Context.Provider`包裹时用

```js
<InfoContext.Provider value={{ color: "red", size: "30" }}>
  <Son {...info} />
</InfoContext.Provider>
<Grandson></Grandson>
```

`Context.Consumer`的使用场景

1. 在函数式组件中使用，
2. 当组件中需要使用多个 Context 时
