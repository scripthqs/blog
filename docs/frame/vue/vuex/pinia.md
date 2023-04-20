# Pinia

Pinia 是一个更加适合 Vue3 的状态管理库。

## Pinia 和 Vuex 的区别

- Pinia 可以替代 Vuex
- 比 Vuex 的更简单的 API
- Pinia 不再有 mutations 的概念
- Pinia 不再有 modules 的嵌套结构
- 没有命名空间的概念
- Pinia 可以创建多个 store
- 对 TypeScript 的支持更好

## 使用 Pinia

首先安装 Pinia

```js
npm install pinia
```

创建一个 pinia 并且传递给应用程序。

```js
//新建stores文件夹，并且新建index.js文件
import { createPinia } from "pinia";
const pinia = createPinia();
export default pinia;
//在main.js中导入pinia
import pinia from "./stores";
createApp(App)
  .use(pinia)
  .mount("#app");
```

## Pinia 有 3 个概念

- state、getters、actions
- 等同于 Vue2 中的 data、computed、methods
- 可以直接在 store 上访问 state、getters、actions 中定义的属性

```js
// 定义关于counter的store
import { defineStore } from "pinia";
import useUser from "./user";
const useCounter = defineStore("counter", {
  state: () => ({
    count: 99,
    friends: [
      { id: 111, name: "why" },
      { id: 112, name: "kobe" },
      { id: 113, name: "james" },
    ],
  }),
  getters: {
    // 1.基本使用
    doubleCount(state) {
      return state.count * 2;
    },
    // 2.一个getter引入另外一个getter
    doubleCountAddOne() {
      // this是store实例
      return this.doubleCount + 1;
    },
    // 3.getters也支持返回一个函数
    getFriendById(state) {
      return function(id) {
        for (let i = 0; i < state.friends.length; i++) {
          const friend = state.friends[i];
          if (friend.id === id) {
            return friend;
          }
        }
      };
    },
    // 4.getters中用到别的store中的数据
    showMessage(state) {
      // 1.获取user信息
      const userStore = useUser();

      // 2.获取自己的信息

      // 3.拼接信息
      return `name:${userStore.name}-count:${state.count}`;
    },
  },
  actions: {
    increment() {
      this.count++;
    },
    incrementNum(num) {
      this.count += num;
    },
  },
});

export default useCounter;
```

### state

- state 是一个选项，这个选项的值需要是一个函数，函数返回一个对象，对象中存储数据
- 在组件中拿到当前的 store 直接使用即可，store.xxx

### getters

- getters 也是一个选项，这个选项的值是一个对象，对象中存储着一个个函数，每个函数可以有一个参数 state，通过 state 可以获取到当前 store 的 state
- 除此之外每个函数还可以拿到一个 this，这个 this 就是当前的整个 store 实例
- 通过这个 this，可以想用谁就用谁
- 在组件中使用也是拿到 store 直接 store.xxx 即可

### actions

- 在 actions 中，主要存放一个个函数，每个函数最主要的工作发送异步请求，获取到数据后直接修改 state
- 每个 action 函数并不像 getter 函数一样，第一个参数是 state，它可以没有参数
- 需要通过 this 拿到 state 然后再修改 state 中的值
- 在组件中拿到 store 后直接调用即可，store.xxx()，如果你在此时传递参数，那么就可以在 action 中拿到参数

## 多个 store 如何使用

没有模块的概念，在 vuex 中会有 modules 的概念，但是在 pinia 中没有，想要有相同的概念，只需要多创建几个 store 即可。

- 想要用时直接拿到 `store：const homeStore = useHome()`，然后直接使用即可
- 想要拿到别的 store，也是直接拿：`const aboutStore = useAbout()`，然后用就行
- 可以在某个 store 中拿另外的 store，然后使用 store 中的任何方法
- 在某个 store 的某个 getter 函数中使用其他 store 的某个 getter 函数，在当前 getter 函数中可以这么写：
  - const aboutStore = useAbout();
  - aboutStore.某个 about 中 getter 函数

## 和 vuex 的使用区别

- 我们在 vuex 中使用某个 state 时，需要`$store.state.xxx`
- 在 pinia 中直接拿到 store 之后 `store.xxx` 即可
- 我们在 vuex 中使用某个 getter 函数时，需要`$store.getters.xxx`
- 在 pinia 中拿到 store 后，`store.xxx` 即可
- 在 vuex 中进行异步请求需要`派发 action` 函数
- 在 pinia 中拿到 store 后，直接`调用 action` 函数即可

## 开发中使用

```js
import { defineStore } from "pinia";

const startDate = new Date();
const endDate = new Date();
endDate.setDate(startDate.getDate() + 1);

const useMainStore = defineStore("main", {
  state: () => ({
    token: "",

    startDate: startDate,
    endDate: endDate,

    isLoading: false,
  }),
});

export default useMainStore;
```
