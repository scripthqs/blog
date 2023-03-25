# React 的受控组件

在 React 中，HTML 表单的处理方式和普通的 DOM 元素不太一样，表单元素通常会保存在一些内部的 state

```js

inputChange(event) {
  console.log("inputChange:", event.target.value)
  this.setState({ username: event.target.value })
}
/* 受控组件 */
const { username } = this.state
<input type="checkbox" value={username} onChange={(e) => this.inputChange(e)} />

/* 非受控组件 */
<input type="text" />
<h2>username: {username}</h2>
```
