# React 组件通信

通常来说，一个应用会存在多个嵌套关系的组件。

## 父组件传递给子组件

- 父组件通过 `属性=值` 的形式传递给子组件数据
- 子组件通过 props 参数获取父组件传递过来的数据

## propsTypes

对传递给子组件的数据，希望进行验证

- 如果项目继承了 Flow 或者 TypeScript，那么可以直接进行类型验证
- 通过 Prop-type 库进行参数验证

从 React v15.5 后，React.PropTypes 已移入另一个包中：prop-types 库

<https://react.docschina.org/docs/typechecking-with-proptypes.html>

## 子组件传递给父组件

- vue 是通过自定义事件完成的
- React 同样是通过 props 传递信息，只是让父组件给子组件传递一个回调函数，在子组件调用这个函数就可以
