# Vue3 Vuex

1. 安装 vuex
   - npm install vuex
2. 创建 store
   - createStore
3. app.use(store)
4. template -> `$store.state.counter`

通过 createStore 创建一个 store 实例

```js
import {createStore} from "vuex"
import home from "./home.js"
import about from "./about.js"
const store = createStore({
  modules: {
      home,
      about
    },
  state(){
    return {
      ...
    }
  },
  mutations: {
    ...
  },
  actions: {
    ...
  },

})

// 2 在app中通过插件安装
// main.js
import store from "./store"
createApp(App).use(store).mount("#root")

// 3 在组件中使用
// home.vue
<template>
   {{name}}
</template>
<script setup>
import { useStore } from "vuex"
const store = useStore()
const name = store.state.name
</script>
```
