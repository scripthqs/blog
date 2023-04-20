# vue3 router

- 安装:
  - npm install vue-router
- 使用:通过 createRouter 创建 router 对象,并且传入 routes 和 history 模式

  - 创建 router 对象

    - createRouter
    - routes: 配置映射关系
    - history:指定采用的模式 hash 模式 和 history 模式
      - history: createWebHashHistory()
      - hash:createWebHashHistory()

  - app.use(router) 使用 app 注册路由对象
  - 使用路径:
    - router-view: 占位
    - router-link
      - 编程式导航
      - to 属性, 跳转到哪一个路由

```js
import { createApp } from "vue";
import router from "./router";
import App from "./App.vue";
const app = createApp(App);
app.use(router);
app.mount("#app");
```

## 路由模式

- hash 模式 ,`#`，兼容性更好，需要服务器配置
- history 模式

```js
import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";
const router = createRouter({
  // 指定采用的模式: hash
  history: createWebHashHistory(),
  // history: createWebHistory(),
  // 映射关系
  routes: [],
});
```

## 默认路径(重定向)

path -> redirect

```js
import Home from "../Views/Home.vue";

routes: [
  {
    path: "/",
    redirect: "/home",
  },
  {
    name: "home",
    path: "/home",
    component: () => import("../Views/Home.vue"),
  },
];
```

## 路由懒加载

路由懒加载可以将文件分包处理

```js
// 路由的懒加载
const Home = () => import(/* webpackChunkName: 'home' */ "../Views/Home.vue");
const About = () => import(/* webpackChunkName: 'about' */ "../Views/About.vue");
routes: [
  {
    path: "/",
    redirect: "/home",
  },
  {
    name: "home",
    path: "/home",
    component: () => import("../Views/Home.vue"),
  },
];
```

## 路由嵌套

1. 在一层路由 Home 中添加 children 属性:
2. 在 Home 组件中添加 `<router-view>`
3. 路径跳转 `<router-link>`

```js
routes: [
  {
    path: "/",
    redirect: "/home",
  },
  {
    name: "home",
    path: "/home",
    component: () => import("../Views/Home.vue"),
    children: [
      {
        path: "/home",
        redirect: "/home/recommend",
      },
      {
        path: "recommend", // /home/recommend
        component: () => import("../Views/HomeRecommend.vue"),
      },
      {
        path: "ranking", // /home/ranking
        component: () => import("../Views/HomeRanking.vue"),
      },
    ],
  },
];
```

## 路由其他属性

- name 命名
- meta
  - route.meta

```js
routes: [
  {
    name: "home",
    path: "/home",
    component: () => import("../Views/Home.vue"),
    meta: {
      name: "aaa",
      age: 18,
    },
  },
];
```

## 路由传参

### params 传参

- 动态路由匹配 path: `/user/:id`
- 路由参数：`:`后面的参数会以`this.$route.params` 的形式暴露出来
- 在 template 中，直接通过 `$route.params` 获取值
- 在 created 中，通过 `this.$route.params` 获取值
- 在 setup 中，我们要使用 vue-router 库给我们提供的一个 hook useRoute
  - useRoute
  - onBeforeRouteUpdate

```js
router: [
  {
    path: "/user/:id",
    component: () => import("../Views/User.vue"),
  },
];
```

```vue
<div>User {{ $route.params.id }}</div>
<script setup>
import { useRoute, onBeforeRouteUpdate } from "vue-router";

const route = useRoute();
console.log(route.params.id);

// 获取route跳转id
onBeforeRouteUpdate((to, from) => {
  console.log("from:", from.params.id);
  console.log("to:", to.params.id);
});
// 在当前路由改变，但是该组件被复用时调用
// 举例来说，对于一个带有动态参数的路径 `/users/:id`，在 `/users/1` 和 `/users/2` 之间跳转的时候，
// 由于会渲染同样的 `UserDetails` 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
</script>
```

### query 传参

```js
import { useRouter } from "vue-router";
const router = useRouter();
//  去about页面
function goAboutClick() {
  // 跳转到about页面
  // router.push("/about");
  router.push({
    path: "/about",
    // 传递参数
    query: {
      name: "aaa",
      age: 20,
    },
  });
  // params 传参也可以直接用这种方法
  router.push({
    name: "about",
    // 传递参数
    params: {
      name: "aaa",
      age: 20,
    },
  });
}
```

- query 传参：path 和 query 搭配
- params 传参：name 和 params 搭配，参数不可见，但是刷新页面参数会丢失
- query 传参通过 `$route.query` 来获取参数
- params 传参通过 `$route.params` 来获取参数

```vue
<template>
  <div class="about">
    <h2>about--</h2>
    <h2>传递过来的参数:{{ $route.query }}</h2>
    <button @click="goBack">返回</button>
  </div>
</template>
```

### props 传参

```js
const routes = [
  {
    path: "/user/:id",
    components: { default: User, sidebar: Sidebar },
    props: { default: true, sidebar: false },
    props: { newsletterPopup: false },
    props: (route) => ({ query: route.query.q }),
  },
];
```

## NotFound

path: `/:pathMatch(.*)*`

```js
router: [
  {
    // abc/cba/nba
    path: "/:pathMatch(.*)*",
    component: () => import("../Views/NotFound.vue"),
  },
];
```

## 动态管理路由

后台管理系统，根据权限

- router.addRoute({})
- router.addRoute("name", {})
- router.getRoutes()

```js
// 动态管理路由语法
router.addRoute("<name>", {
  path: "",
  name: "",
  component: () => import("./..."),
});
// 动态管理路由
let isAdmin = true;
if (isAdmin) {
  // 一级路由
  router.addRoute({
    path: "/admin",
    component: () => import("../Views/Admin.vue"),
  });

  // 添加vip页面
  router.addRoute("home", {
    path: "vip",
    component: () => import("../Views/HomeVip.vue"),
  });
}

// 获取router中所有的映射路由对象
console.log(router.getRoutes());
```

删除路由有以下三种方式：

- 方式一：添加一个 name 相同的路由
- 方式二：通过 removeRoute 方法，传入路由的名称
- 方式三：通过 addRoute 方法的返回值回调

路由的其他方法补充：

- router.hasRoute()：检查路由是否存在
- router.getRoutes()：获取一个包含所有路由记录的数组

## 编程式导航

### 路由跳转

- push(路径)
- push({ path/query })
- replace()

### 路由切换

- back()
- forward()
- go(number)

## 路由守卫

全局的前置守卫 beforeEach 是在导航触发时会被回调的，有两个参数：

- to：即将进入的路由 Route 对象
- from：即将离开的路由 Route 对象

有返回值：

- false：取消当前导航
- 不返回或者 undefined：进行默认导航
- 返回一个路由地址：
  - 可以是一个 string 类型的路径
  - 可以是一个对象，对象中包含 path、query、params 等信息

```js
// 路由导航守卫
// 进行任何的路由跳转之前, 传入的beforeEach中的函数都会被回调
// 需求: 进入到订单(order)页面时, 判断用户是否登录(isLogin -> localStorage保存token)
// 情况一: 用户没有登录, 那么跳转到登录页面, 进行登录的操作
// 情况二: 用户已经登录, 那么直接进入到订单页面
router.beforeEach((to, from) => {
  // 1.进入到任何别的页面时, 都跳转到login页面
  // if (to.path !== "/login") {
  //   return "/login"
  // }

  // 2.进入到订单页面时, 判断用户是否登录
  const token = localStorage.getItem("token");
  if (to.path === "/order" && !token) {
    return "/login";
  }
});
```

## keep-alive

```html
<!-- name属性 -->
<router-view v-slot="props">
  <keep-alive include="home">
    <component :is="props.Component"></component>
  </keep-alive>
</router-view>
```
