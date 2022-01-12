# Vue-router重点

## Vue-router的懒加载

当路由被加载时才访问对应的组件

- 使用箭头函数+import的方式

```js
import list from '@/components/list.vue'//非懒加载
const list = () => import('@/components/list.vue')//懒加载
const router = new VueRouter({
  routes: [
    {path:'list',component:list}
  ]
})
```

## 路由的hash模式和history模式

- 默认是hash模式，浏览器地址栏的URL会带一个`#`，兼容性更好
- history模式需要后台支持，没有支持就会访问404

```js
const router = new VueRouter({
  mode: 'history',
  routes: [...]
})
```

## 获取页面的hash模式

- 监听$route参数对象的变化
- window.location.hash读取#值

## $route和$router

- $route是参数对象，包含了path,params,hash,query等路由参数信息
- $router是路由实例对象，包含了路由跳转的方法，push,go,back,beforeEach导航守卫

## 动态路由

路径/后面是路径参数params，?后面是查询参数query

使用英文:的方法实现动态路由

## 路由导航

全局前置守卫，beforeEach参数是回调函数，可以根据token判断是否登录跳转