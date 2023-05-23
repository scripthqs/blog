# React 的 fragment

在开发中，总是在一个组件中返回内容时包裹一个 div 元素，不想用 div，就可以使用 fragment，类似于 Vue 的 template.

React 还有个 Fragment 的语法糖

- `<></>`，看起来像空标签
- 但是，在 fragment 添加 key 时，就不能使用短语法

```js
  render() {
    const { sections } = this.state
    return (
      <>
        <h2>我是App的标题</h2>
        <p>我是App的内容, 哈哈哈哈</p>
        <hr />
        {
          sections.map(item => {
            return (
              {/* 有key就不能省略 */}
              <Fragment key={item.title}>
                <h2>{item.title}</h2>
                <p>{item.content}</p>
              </Fragment>
            )
          })
        }
      </>
    )
  }
```
