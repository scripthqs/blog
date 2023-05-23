# React 组件化开发

React 的组件相对于 Vue 更加灵活，可以按照不同的方式分成很多类组件

- 根据组件的定义方式，可以分为：函数组件(Function Component)和类组件(Class Component)
- 根据组件内部是否有状态需要维护，可以分为：无状态组件(Stateless Component)和有状态组件(Stateful Component)
- 根据组件的不同职责，可以分为：展示型组件(Presentation Component)和容器型组件(Container Component)

不同组件的区别：

- 函数组件、无状态组件、展示型组件主要关注 UI 的展示
- 类组件、有状态组件、容器型组件主要关注数据逻辑

## 类组件

类组件的定义要求：

- 组件的名称是大写字符开头(包括类组件和函数组件)
- 类组件需要继承自 React.Component
- 类组件必须实现 render 函数

在 ES6 之前，可以通过 create-react-class 模块来定义类组件，ES6 后官网建议使用 ES6 的 class 类

- constructor 是可选的，通常在 constructor 中初始化一些数据
- this.state 中维护的是组件内部的数据
- render()方法是 class 组件唯一必须实现的方法

## render 函数的返回值

当 render 被调用时，它会检查 this.props 和 this.state 的变化并返回一下类型之一：

1. React 元素
   - jsx：通过 jsx 编写的代码就会编译成 React.createElement，所以 jsx 是 React 元素
   - `<div/>`会被 React 渲染成 DOM 节点，`<MyComponent/>`会被 React 渲染成自定义组件
2. 数组或 fragments
   - 可以让 render 方法返回多个元素
3. Portals
   - 可以渲染子节点到不同的 DOM 子树中
4. 字符串或数值类型
   - 在 DOM 中被渲染成文本节点
5. 布尔类型或 null
   - 什么都不渲染

## 函数组件

函数组件使用 function 来定义函数，返回值和类组件 render 函数返回一致，函数组件有自己的特点

- 没有生命周期，也会被更新并挂载，但是没有生命周期函数
- this 关键字不能指向组件实例(没有组件实例)
- 没有内部状态 state，有也无法维护

之前函数组件只能做展示，不过有了 hooks 后就不一样了
