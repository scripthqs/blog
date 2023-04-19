# vue3 中使用 jsx

希望在项目中使用 jsx，那么需要添加对 jsx 的支持

- jsx 通常会通过 Babel 来进行转换（React 编写的 jsx 就是通过 babel 转换的）
- 对于 Vue 来说，只需要在 Babel 中配置对应的插件即可

安装 Babel 支持 Vue 的 jsx 插件：

```bash
npm install @vue/babel-plugin-jsx -D
```

在 babel.config.js 配置文件中配置插件：

```js
module.exports = {
  presets: ["@/vue/cli-plugin-babel/preset"],
  plugins: ["@vue/babel-plugin-jsx"],
};
```

如果是 vite 环境

```bash
npm install @vitejs/plugin-vue-jsx -D
```

在 vite.config.js 中配置

```js
import VueJsx from '@vitejs/plugin-vue-jsx';
plugins: [ VueJsx()],
```

```vue
<template>
  <jsx></jsx>
</template>

<script lang="jsx" setup>
import {  ref } from "vue";
const text = ref("hello world");
const btnClick = () => {
  text.value = "屠龙宝刀，点击就送";
};
const jsx = () => (
  <div class="app">
    <h2>{text.value}</h2>
    <button onClick={btnClick}>点击</button>
  </div>
);
</script>

<style lang="less" scoped>
.hello {
  font-size: 20px;
  color: red;
}
</style>
```
