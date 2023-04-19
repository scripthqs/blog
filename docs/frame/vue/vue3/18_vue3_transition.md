# Vue3 动画

Vue 提供了两个内置组件，可以制作基于状态变化的过渡和动画

- `<Transition>` 会在一个元素或组件进入和离开 DOM 时应用动画
- `<TransitionGroup>` 会在一个 v-for 列表中的元素或组件被插入，移动，或移除时应用动画

## `<Transition>` 组件

可以自动添加类和移除类，实现过渡和动画的效果，有 3 种方式可以触发：

- 由 v-if 所触发的切换
- 由 v-show 所触发的切换
- 由特殊元素 `<component>` 切换的动态组件

`<Transition>` 一般都会搭配原生 CSS 过渡一起使用

```vue
<button @click="show = !show">点击</button>
<Transition>
  <p v-if="show">hello</p>
</Transition>

<style lang="less" scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
```

可以给 `<Transition>` 组件传一个 name 属性 来声明一个过渡效果名

```vue
<Transition name="fade">...</Transition>
<style lang="less" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
```

如果不希望同时执行进入和离开动画，那么我们需要设置 transition 的过渡模式：

- `in-out`: 新元素先进行过渡，完成之后当前元素过渡离开
- `out-in`: 当前元素先进行过渡，完成之后新元素过渡进入

组件的动画

```vue
<Transition name="fade" mode="out-in">
  <component :is="activeComponent"></component>
</Transition>
```

默认情况下，首次渲染的时候是没有动画的，如果我们希望给他添加上去动画，那么就可以增加另外一个属性 appear

```vue
<Transition name="fade" mode="out-in" appear>
  <component :is="activeComponent"></component>
</Transition>
```

## `<TransitionGroup>` 组件

```vue
<TransitionGroup name="list" tag="ul">
  <li v-for="item in items" :key="item">
    {{ item }}
  </li>
</TransitionGroup>

<style lang="less" scoped>
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
```
