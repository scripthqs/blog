# 实用 tip

输入密码又不希望浏览器弹出保存密码提示框(type=password)

```css
-webkit-text-security: disc，可以直接把文本框的输入值替换成 *;
```

flex:1 和 flex:auto

```js
分别是flex:1 1 0和flex:1 1 auto

1 完全平均分配剩余空间 导航栏和等分卡片
auto 先保证内容再平分剩余空间 搜索框和标题加内容区
```

前端生成唯一 id

```js
const uniqueId = crypto.randomUUID();
```
