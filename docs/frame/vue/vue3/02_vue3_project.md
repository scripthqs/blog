# Vue3 工程结构

## main.js

```js
//引入的不再是Vue构造函数，引入的是名为createApp工厂函数
import { createApp } from "vue";
import App from "./App.vue";

//创建应用实例对象
// createApp(App).mount('#app')
const app = createApp(App);
console.log(app);
app.mount("#app");
```

## App.vue

```js
<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>
```

Vue3 组件中的 template **可以没有根标签**。

### template 标签

template 标签并不是 Vue 中独有的，是属于 HTML 中的内容，在 MDN 中的描述 [template](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/template)。

- 解析器在加载页面时会处理`<template>`元素的内容，但这样做只是为了确保这些内容有效；但元素内容不会被渲染
- template 元素是一种用于保存客户端内容的机制，该内容再加载页面时不会被呈现，但随后可以在运行时使用 JavaScript 实例化

## Vue 开发者工具

Vue3 项目不能再使用 Vue2 的开发者工具，需要重新下载，并且禁用之前的开发者工具。

## Vue3 模板语法

React 的开发模式：

- React 使用的 jsx，所以对应的代码都是编写的类似于 js 的一种语法；
- 之后通过 Babel 将 jsx 编译成 React.createElement 函数调用；

Vue3 也支持 jsx 的开发模式：

- 大多数情况下，使用**基于 HTML 的模板语法**，即`{{}}`语法
- 在模板中，允许开发者以声明式的方式将 DOM 和底层组件实例的数据绑定在一起；
- 在底层的实现中，Vue 将模板编译成虚拟 DOM 渲染函数

## Vue3 其他改变

### 全局 API 的转移

- Vue 2.x 有许多全局 API 和配置。

  - 例如：注册全局组件、注册全局指令等。

    ```js
    //注册全局组件
    Vue.component('MyButton', {
      data: () => ({
        count: 0
      }),
      template: '<button @click="count++">Clicked {{ count }} times.</button>'
    })

    //注册全局指令
    Vue.directive('focus', {
      inserted: el => el.focus()
    }
    ```

- Vue3.0 中对这些 API 做出了调整：

  - 将全局的 API，即：`Vue.xxx`调整到应用实例（`app`）上

    | 2.x 全局 API（`Vue`）    | 3.x 实例 API (`app`)        |
    | ------------------------ | --------------------------- |
    | Vue.config.xxxx          | app.config.xxxx             |
    | Vue.config.productionTip | **移除**                    |
    | Vue.component            | app.component               |
    | Vue.directive            | app.directive               |
    | Vue.mixin                | app.mixin                   |
    | Vue.use                  | app.use                     |
    | Vue.prototype            | app.config.globalProperties |

## 其他改变

- data 选项应始终被声明为一个函数。
- 过渡类名的更改：

  - Vue2.x 写法

    ```css
    .v-enter,
    .v-leave-to {
      opacity: 0;
    }
    .v-leave,
    .v-enter-to {
      opacity: 1;
    }
    ```

  - Vue3.x 写法

    ```css
    .v-enter-from,
    .v-leave-to {
      opacity: 0;
    }

    .v-leave-from,
    .v-enter-to {
      opacity: 1;
    }
    ```

- **移除**keyCode 作为 v-on 的修饰符，同时也不再支持`config.keyCodes`
- **移除**`v-on.native`修饰符

  - 父组件中绑定事件

    ```vue
    <my-component v-on:close="handleComponentEvent" v-on:click="handleNativeClickEvent" />
    ```

  - 子组件中声明自定义事件

    ```vue
    <script>
    export default {
      emits: ["close"],
    };
    </script>
    ```

- **移除**过滤器（filter）

  > 过滤器虽然这看起来很方便，但它需要一个自定义语法，打破大括号内表达式是 “只是 JavaScript” 的假设，这不仅有学习成本，而且有实现成本！建议用方法调用或计算属性去替换过滤器。

- ......
