# JSX 简介

JSX 是一种 JavaScript 的语法扩展（eXtension），也在很多地方称之为 JavaScript XML，因为看起就是一段 XML 语法。

- 用于描述我们的 UI 界面，并且其完成可以和 JavaScript 融合在一起使用
- 不同于 Vue 中的模块语法，不需要专门学习模块语法中的一些指令（比如 v-for、v-if、v-else、v-bind）

React 认为渲染逻辑本质上与其他 UI 逻辑存在内在耦合，所以选择 JSX。

## JSX 规范

1. JSX 的顶层只能有一个根元素，所以很多时候会在外层包裹一个 div 元素
2. 在 JSX 的外层包裹一个小括号()，这样可以方便阅读，并且 jsx 可以进行换行书写
3. JSX 中的标签可以是单标签，也可以是双标签；如果是单标签，必须以/>结尾；
