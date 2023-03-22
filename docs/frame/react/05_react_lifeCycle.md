# React 生命周期

React 每个组件都包含“生命周期方法”，分为很多阶段

- 装载阶段(Mount):组件第一次在 DOM 树被渲染的过程
- 更新阶段(Update):组件状态发生变化，重新更新渲染的过程
- 卸载过程(Unmount):组件从 DOM 树中被移除的过程

react 会对组件内部实现的某些函数进行回调，告诉我们当前处于哪些阶段，这些函数就是生命周期函数

- componentDidMount 函数：组件挂载到 DOM 上
- componentDidUpdate 函数：组件发生了更新
- componentWillUnmount 函数：组件即将被移除

组件实例被创建并插入 DOM 中时，生命周期调用的顺序：

## 挂载

1. constructor：初始化 state 或进行方法绑定
2. render
3. componentDidMount：操作 DOM，发送网络请求，添加订阅

## 更新

1. render
2. componentDidUpdate：首次渲染不会执行，更新后操作 DOM，比较 props 然后发送请求

## 卸载

1. componentWillUnmount：执行必要的清理操作，清除定时器，取消网络请求，取消订阅

## 不常用的生命周期

`shouldComponentUpdate` 返回 false 或者 true，可以用来控制 render 函数需不需要重新渲染，可以用来性能优化
