# Vue-router 重点

## Vue-router 的懒加载

当路由被加载时才访问对应的组件

- 使用箭头函数+import 的方式

```js
import list from '@/components/list.vue'; //非懒加载
const list = () => import('@/components/list.vue'); //懒加载
const router = new VueRouter({
  routes: [{ path: 'list', component: list }]
});
```

## 路由的 hash 模式和 history 模式

- 默认是 hash 模式，浏览器地址栏的 URL 会带一个`#`，兼容性更好
- history 模式需要后台支持，没有支持就会访问 404

```js
const router = new VueRouter({
  mode: 'history',
  routes: [...]
})
```

## 获取页面的 hash 模式

- 监听\$route 参数对象的变化
- window.location.hash 读取#值

## $route和$router

- \$route 是参数对象，包含了 path,params,hash,query 等路由参数信息
- \$router 是路由实例对象，包含了路由跳转的方法，push,go,back,beforeEach 导航守卫

## 动态路由

路径/后面是路径参数 params，?后面是查询参数 query

使用英文:的方法实现动态路由

## 路由导航

全局前置守卫，beforeEach 参数是回调函数，可以根据 token 判断是否登录跳转
