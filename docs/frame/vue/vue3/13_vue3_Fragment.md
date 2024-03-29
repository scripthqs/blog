# Vue3 新的组件

## Fragment

- 在 Vue2 中: 组件必须有一个根标签
- 在 Vue3 中: 组件可以没有根标签, 内部会将多个标签包含在一个 Fragment 虚拟元素中
- 好处: 减少标签层级, 减小内存占用

## Teleport

- 什么是 Teleport？—— `Teleport` 是一种能够将我们的**组件 html 结构**移动到指定位置的技术。

  ```vue
  <template>
    <h1>teleport1</h1>
    <button @click="isShow = true">点击弹窗</button>
    <!-- <teleport to="移动位置"> -->
    <teleport to="body">
      <div v-if="isShow" class="mask">
        <div class="dialog">
          <h3>我是一个弹窗</h3>
          <p>恭喜发财，点击领取红包</p>
          <button @click="isShow = false">关闭弹窗</button>
        </div>
      </div>
    </teleport>
    <hr />
  </template>

  <script>
  import { ref } from "vue";
  export default {
    name: "Teleport1",
    setup() {
      let isShow = ref(false);
      return {
        isShow,
      };
    },
  };
  </script>

  <style>
  .mask {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
  }
  .dialog {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 300px;
    height: 300px;
    background-color: red;
    text-align: center;
  }
  </style>
  ```

## Suspense

- 等待异步组件时渲染一些额外内容，让应用有更好的用户体验

- 使用步骤：

  - 异步引入组件

    ```js
    import { defineAsyncComponent } from "vue";
    const Child = defineAsyncComponent(() => import("./components/Child.vue"));
    ```

  - 使用`Suspense`包裹组件，并配置好`default` 与 `fallback`

    ```html
    <template>
      <div class="app">
        <h3>我是App组件</h3>
        <Suspense>
          <template v-slot:default>
            <Child />
          </template>
          <template v-slot:fallback>
            <h3>加载中.....</h3>
          </template>
        </Suspense>
      </div>
    </template>
    ```
