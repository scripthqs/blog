# Vue 封装的过渡与动画

## 作用

在插入、更新或移除 DOM 元素时，在合适的时候给元素添加样式类名。

## 方法

元素进入的样式

- v-enter：进入的起点
- v-enter-active：进入过程中
- v-enter-to：进入的终点

元素离开的样式

- v-leave：离开的起点
- v-leave-active：离开过程中
- v-leave-to：离开的终点

使用`<transition>`包裹要过度的元素，并配置 name 属性

```js
<transition name="hello">
  <h1 v-show="isShow">你好啊！</h1>
</transition>
```

若有多个元素需要过渡，则需要使用：`<transition-group>`，且每个元素都要指定`key`值。
