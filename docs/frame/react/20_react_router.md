# React Router

前端路由分为 hash 模式和 history 模式

1. URL 的 hash：兼容性较好，但是有个#
2. HTML5 中的 history
   - replaceState:替换
   - pushState:使用新的
   - popState:路径的回退
   - go:向前或向后
   - forward:向前
   - back:向后

安装 react-router-dom 即可，安装 react-router 会包含 react-native 的内容，web 开发不需要

```bash
npm i react-router-dom
```

react-router 提供了两个组件

- BrowserRouter：使用 history 模式
- HashRouter：使用 hash 模式

## 路由配置

路由的核心是映射关系

- Routes:包裹所有的 Route，在其中配置一个路由(Router6.x)
- Switch:包裹所有的 Route，在其中配置一个路由(Router5.x)
- Route:用于路径的匹配
  - path:设置匹配的路径
  - element:设置匹配到路径后对应的组件(Router6.x)
  - component:设置匹配到路径后对应的组件(Router5.x)
  - exact:精确匹配，只有完全匹配到完全一致的路径，才会渲染对应的组件(Router6.x 不支持也不需要)

路由的配置和跳转：Link 和 NavLink

Link

- 通常路径的跳转是使用 Link 组件，最终会被渲染成 a 元素
- to ：Link 中最重要的属性，用于设置跳转到的路径

NavLink

- NavLink 是在 Link 基础之上增加了一些样式属性
- style：传入函数，函数接受一个对象，包含 isActive 属性
- className：传入函数，函数接受一个对象，包含 isActive 属性

## Navigate

Navigate 用于路由的重定向，当这个组件出现时，就会执行跳转到对应的 to 路径中(Router5.x 中是 Redirect)

```js
<Routes>
  <Route path="/" element={<Navigate to="/home" />}></Route>
  <Route path="/home" element={<Home></Home>}></Route>
</Routes>
```

## NotFound

```js
<Routes>
  <Route path="*" element={<NotFound></NotFound>}></Route>
</Routes>
```

## 路由嵌套

路由之前经常会存在嵌套关系

```js
<Routes>
  <Route path="/" element={<Navigate to="/home" />}></Route>
  <Route path="/home" element={<Home></Home>}>
    <Route path="/home" element={<Navigate to="/home/recommend" />}></Route>
    <Route path="/home/recommend" element={<HomeRecommend></HomeRecommend>}></Route>
    <Route path="/home/ranking" element={<HomeRanking></HomeRanking>}></Route>
  </Route>
  <Route path="*" element={<NotFound></NotFound>}></Route>
</Routes>

// Home.jsx
<div className="homeNav">
  <Link to="/home/recommend">推荐</Link>
  <Link to="/home/ranking">排行</Link>
</div>
{/* 占位的组件 */}
<Outlet></Outlet>
```

## 手动路由跳转

有时候不想通过 Link 或者 NavLink 来跳转，想用 js 跳转

- 需要通过 useNavigate 的 Hook 获取到 navigate 对象进行操作
- useNavigate 只能在函数式组件中使用

```js
export function App(props) {
  const navigate = useNavigate();
  function navigateTo(path) {
    navigate(path);
  }
  return (
    <div className="App">
      <button onClick={(e) => navigateTo("/category")}>分类</button>
      <span onClick={(e) => navigateTo("/order")}>订单</span>
    </div>
  );
}
```
