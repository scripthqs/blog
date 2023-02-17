# h 函数

Vue 推荐在绝大数情况下使用模板来创建的 HTML，然后一些特殊的场景，需要 JavaScript 的完全编程的能力，这个时候可以使用渲染函数，比模板更接近编译器。h 函数创建虚拟 DOM 节点 (vnode)。

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
