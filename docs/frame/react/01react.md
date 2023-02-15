# React 简介

React 是用于构建用户界面的 JavaScript 库。

## React 特点

声明式编程

- 声明式编程是目前整个大前端开发的模式，例如 Vue、React、Flutter、SwiftUI
- 开发时只需要维护自己的状态，当状态改变时，React 可以根据最新的状态去渲染的 UI 界面

组件化开发

- 组件化开发页面目前前端的流行趋势，将复杂的界面拆分成一个个小的组件

多平台适配

- React 发布之初主要是开发 Web 页面
- ReactNative，可用于开发移动端跨平台，目前 Flutter 也比较流行，ReactNative 也有使用
- ReactVR，用于开发虚拟现实 Web 应用程序

## React 的开发依赖

开发 React 必须依赖三个库：

1. react：包含 react 所必须的核心代码
2. react-dom：react 渲染在不同平台所需要的核心代码
3. babel：将 jsx 转换成 React 代码的工具

对比 Vue,只需要依赖一个 vue.js 文件。React 也是后期才拆分才 3 个包。

react 包中包含了 react web 和 react-native 所共同拥有的核心代码。react-dom 针对 web 和 native 所完成的事情不同。

- web 端：react-dom 会将 jsx 最终渲染成真实的 DOM，显示在浏览器中
- native 端：react-dom 会将 jsx 最终渲染成原生的控件（比如 Android 中的 Button，iOS 中的 UIButton）

Babel 就是 Babel.js。是目前前端使用非常广泛的编译器、转移器。

- 很多浏览器并不支持 ES6 的语法，Babel 的主要作用是将 ES6 转成 ES5
