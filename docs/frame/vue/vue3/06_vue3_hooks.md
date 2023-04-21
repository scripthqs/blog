# 自定义 hook 函数

什么是 hook？—— 本质是一个函数，把 setup 函数中使用的 Composition API 进行了封装。setup 函数中写的函数都算组合式 API。例如：ref、reactive、自定义函数、计算属性、监视属性、生命周期等等。

- 类似于 vue2.x 中的 mixin。
- 自定义 hook 的优势：复用代码, 让 setup 中的逻辑更清楚易懂。

自定义一个 hooks 文件夹，和 components 文件夹同级，定义 use 开头的 js 文件(命名无强制要求)

```js
// usePoint.js
import { reactive, onMounted, onUnmounted } from "vue";
export default function() {
  let point = reactive({
    x: 0,
    y: 0,
  });
  function savePoint(event) {
    point.x = event.pageX;
    point.y = event.pageY;
    console.log(point.x, point.y);
  }
  onMounted(() => {
    window.addEventListener("click", savePoint);
  });

  onUnmounted(() => {
    window.removeEventListener("click", savePoint);
  });
  return point;
}
```

其他组件中引入

```js
import usePoint from "../hooks/usePoint";
export default {
  name: "Hook",
  setup() {
    let point = usePoint();
    return {
      point,
    };
  },
};
```

## hooks 计数

```js
// useCounter.js
import { ref } from "vue";

export default function useCounter() {
  let counter = ref(100);
  const increment = () => {
    counter.value++;
    console.log(counter.value);
  };
  const decrement = () => {
    counter.value--;
  };

  return { counter, increment, decrement };
}
```

```vue
<template>
  <div class="app">
    <!-- template中ref对象自动解包 -->
    <h2>当前计数: {{ counter }}</h2>
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import useCounter from "./hooks/useCounter";

// 1.定义counter的内容
// 默认定义的数据都不是响应式数据
// let counter = ref(100)
// const increment = () => {
//   counter.value++
//   console.log(counter.value)
// }
// const decrement = () => {
//   counter.value--
// }
const { counter, increment, decrement } = useCounter();
</script>

<style></style>
```

## 滚动 hooks

```js
import { onMounted, onUnmounted, ref } from "vue";
import { throttle } from "lodash";

export default function useScroll() {
  const isReachBottom = ref(false);

  const clientHeight = ref(0);
  const scrollTop = ref(0);
  const scrollHeight = ref(0);
  // 获取各种高度(客户端  上滑高度   滑块内容总高度)
  const scrollListenerHandler = throttle(() => {
    clientHeight.value = document.documentElement.clientHeight;
    scrollTop.value = document.documentElement.scrollTop;
    scrollHeight.value = document.documentElement.scrollHeight;

    if (clientHeight.value + scrollTop.value >= scrollHeight.value) {
      // 滚动到底部触发
      isReachBottom.value = true;
    }
  }, 150);
  // 监听事件
  onMounted(() => {
    window.addEventListener("scroll", scrollListenerHandler);
  });
  //移除事件
  onUnmounted(() => {
    window.removeEventListener("scroll", scrollListenerHandler);
  });

  return { isReachBottom, clientHeight, scrollTop, scrollHeight };
}
```

```js
export default function useScroll(elRef) {
  let el = window;

  const isReachBottom = ref(false);

  const clientHeight = ref(0);
  const scrollTop = ref(0);
  const scrollHeight = ref(0);

  // 防抖/节流
  const scrollListenerHandler = throttle(() => {
    if (el === window) {
      clientHeight.value = document.documentElement.clientHeight;
      scrollTop.value = document.documentElement.scrollTop;
      scrollHeight.value = document.documentElement.scrollHeight;
    } else {
      clientHeight.value = el.clientHeight;
      scrollTop.value = el.scrollTop;
      scrollHeight.value = el.scrollHeight;
    }
    if (clientHeight.value + scrollTop.value >= scrollHeight.value) {
      console.log("滚动到底部了");
      isReachBottom.value = true;
    }
  }, 100);

  onMounted(() => {
    if (elRef) el = elRef.value;
    el.addEventListener("scroll", scrollListenerHandler);
  });

  onUnmounted(() => {
    el.removeEventListener("scroll", scrollListenerHandler);
  });

  return { isReachBottom, clientHeight, scrollTop, scrollHeight };
}
```
