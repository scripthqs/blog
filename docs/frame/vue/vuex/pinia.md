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
import { createPinia } from 'pinia';
const pinia = createPinia();
export default pinia;
//在main.js中导入pinia
import pinia from './stores';
createApp(App)
  .use(pinia)
  .mount('#app');
```

## Pinia 有 3 个概念

- state、getters、actions
- 等同于 Vue2 中的 data、computed、methods
- 可以直接在 store 上访问 state、getters、actions 中定义的属性
