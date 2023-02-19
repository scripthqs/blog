# h 函数

Vue 推荐在绝大数情况下使用模板来创建的 HTML，然后一些特殊的场景，需要 JavaScript 的完全编程的能力，这个时候可以使用渲染函数，比模板更接近编译器。h 函数创建虚拟 DOM 节点 (vnode)。实际使用场景不多，更推荐使用 jsx。

h 函数接收 3 个参数：

```js
function h(
  type: string | Component,
  props?: object | null,
  children?: Children | Slot | Slots
): VNode
```

1. 第一个参数 type 既可以是一个字符串 (用于原生元素) 也可以是一个 Vue 组件定义
2. 第二个参数是要传递的 prop
3. 第三个参数是子节点

```js
import { h } from "vue";
h("div");
h("div", { id: "foo" });
// class 与 style 可以像在模板中一样
// 用数组或对象的形式书写
h("div", { class: [foo, { bar }], style: { color: "red" } });
// 事件监听器应以 onXxx 的形式书写
h("div", { onClick: () => {} });

// children 数组可以同时包含 vnode 和字符串
h("div", ["hello", h("span", "hello")]);
```

- 如果没有 props，那么通常可以将 children 作为第二个参数传入
- 如果会产生歧义，可以将 null 作为第二个参数传入，将 children 作为第三个参数传入

h 函数的使用场景：

1. render 函数选项中
2. setup 函数选项中，setup 本身需要是一个函数类型，函数再返回 h 函数创建的 VNode

```js
import { h } from "vue";
export default {
  render() {
    return h("div", { class: "app" }, "Hello App");
  },
};
export default {
  setup() {
    return () => h("div", { class: "app" }, "Hello App");
  },
};
```

在 setup 语法糖中使用 h 函数

```ts
<template>
  <test></test>
</template>

<script setup lang="ts">
import { h, ref } from "vue";
const text = ref("hello world");
const btnClick = () => {
  text.value = "屠龙宝刀，点击就送";
};
const test = () =>
  h("div", { className: "hello" }, [
    h("button", { onClick: btnClick }, "点击"),
    h("div", null, text.value)
  ]);
</script>

<style lang="less" scoped>
.hello {
  font-size: 20px;
  color: red;
}
</style>
```
