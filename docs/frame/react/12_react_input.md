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

多个表单使用同一函数

```js
handleInputChange(event) {
  this.setState({
    [event.target.name]: event.target.value
  })
}

<form onSubmit={(e) => this.handleSubmitClick(e)}>
  {/* 1.用户名和密码 */}
  <label htmlFor="username">
    用户:
    <input id="username" type="text" name="username" value={username} onChange={(e) => this.handleInputChange(e)} />
  </label>
  <label htmlFor="password">
    密码:
    <input id="password" type="password" name="password" value={password} onChange={(e) => this.handleInputChange(e)} />
  </label>
  <button type="submit">注册</button>
</form>
```
