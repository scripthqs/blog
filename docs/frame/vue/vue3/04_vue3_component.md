# Vue3 组件通信

## 父子组件通信

```vue
<!-- 父组件引用子组件showInfo -->
<!-- 如果当前的属性是一个非prop的attribute, 那么该属性会默认添加到子组件的根元素上 -->
<showInfo name="aaa" :age="18" address="中国" abc="cba" class="active" @change="infoChange" />

<!-- 子组件中 -->
<button @click="changeClick(1)">+1</button>
<script>
export default {
  // props 作用: 接收父组件传递过来的属性
  // 1.props数组语法
  // 弊端: 1> 不能对类型进行验证 2.没有默认值的
  // props: ["name", "age", "height"]
  // 2.props对象语法(重要)
  props: {
    name: {
      type: String,
      required: true,
      default: "我是默认name",
    },
    age: {
      type: Number,
      required: true,
    },
    // 重要的原则: 对象类型写默认值时, 需要编写default的函数, 函数返回默认值
    friend: {
      type: Object,
      default() {
        return { name: "bbb" };
      },
    },
    hobbies: {
      type: Array,
      default: () => ["a", "b", "c"],
    },
  },
  emits: ["change"],
  // emits: {
  //   change: (payload) => {
  //     // 进行校验 用的比较少
  //     return true;
  //   },
  // },
  setup(props, { emit }) {
    const changeClick = (index) => {
      // 让子组件发出去一个自定义事件
      // 第一个参数自定义的事件名称
      // 第二个参数是传递的参数
      emit("change", index);
    };
    return {
      changeClick,
    };
  },
};
</script>
```

## setup 语法糖

- defineProps
- defineEmits
- defineExpose

```vue
<template>
  <div>AppContent: {{ message }}</div>
  <button @click="changeMessage">修改message</button>
  <show-info name="aaa" :age="18" @info-btn-click="infoBtnClick" ref="showInfoRef"> </show-info>
  <show-info></show-info>
  <show-info></show-info>
</template>

<script setup>
// 1.所有编写在顶层中的代码, 都是默认暴露给template可以使用
import { ref, onMounted } from "vue";
import ShowInfo from "./ShowInfo.vue";

// 2.定义响应式数据
const message = ref("Hello World");
console.log(message.value);

// 3.定义绑定的函数
function changeMessage() {
  message.value = "你好啊, 李银河!";
}

function infoBtnClick(payload) {
  console.log("监听到showInfo内部的点击:", payload);
}

// 4.获取组件实例
const showInfoRef = ref();
onMounted(() => {
  showInfoRef.value.foo();
});
</script>

<style scoped></style>
```

组件中：

```vue
<template>
  <div>ShowInfo: {{ name }}-{{ age }}</div>
  <button @click="showInfoBtnClick">showInfoButton</button>
</template>

<script setup>
// 定义props
const props = defineProps({
  name: {
    type: String,
    default: "默认值",
  },
  age: {
    type: Number,
    default: 0,
  },
});

// 绑定函数, 并且发出事件
const emits = defineEmits(["infoBtnClick"]);
function showInfoBtnClick() {
  emits("infoBtnClick", "showInfo内部发生了点击");
}

// 定义foo的函数
function foo() {
  console.log("foo function");
}

// 使用 `<script setup>` 的组件是默认关闭的，不会暴露任何在 `<script setup>` 中声明的绑定，如果想要在父组件访问子组件的属性或者方法，子组件需要使用 defineExpose 导出属性或者方法
defineExpose({
  foo,
});
</script>

<style scoped></style>
```

### setup 语法糖动态绑定组件

```js
<component :is="componentList[componentName]" />

import { ref } from 'vue';
import A_component from '@/components/A_component.vue;
import B_component from '@/components/B_component.vue;
import C_component from '@/components/C_component.vue;
import D_component from '@/components/D_component.vue;

// 组件注册
let componentList = {
    A_component,
    B_component,
    C_component,
    D_component
};

// 指定的动态组件
let componentName = ref('A_component');
```
