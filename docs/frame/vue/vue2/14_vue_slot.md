# 插槽

## 插槽的简介

**插槽（Slot）**是 vue 为**组件的封装者**提供的能力。允许开发者在封装组件时，把**不确定的、希望由用户指定的 部分**定义为插槽。

可以把插槽认为是组件封装期间，为用户预留的**内容的占位符**

## 插槽的基础用法

在封装组件时，可以通过 `<slot>`元素**定义插槽**，从而为用**户预留内容占位符**。

如果在封装组件时**没有预留任何 `<slot>` 插槽**，则用户提供的任何**自定义内容**都**会被丢弃**。

在子组件中定义：

```vue
<slot></slot>
```

## 插槽 name 名称

- 每一个 slot 插槽，都有一个 name 名称
- 如果省略了 slot 的 name 属性，则有一个**默认名称叫做 default**

```vue
<slot name="default"></slot>
```

默认情况下，在使用组件的时候，提供的内容都会被填充到名字为 default 的插槽中。

如果要使用指定 name 的插槽则需要使用具名插槽

## 后备内容

封装组件时，可以为预留的 插槽提供**后备内容（默认内容）**。如果组件的使用者没有为插槽提供任何 内容，则后备内容会生效

```vue
<slot name="default">我是默认内容</slot>
```

## 具名插槽

如果在封装组件时**需要预留多个插槽节点**，则需要为每个插槽指定**具体的 name 名称**。这种带有具体名称的插槽叫做“具名插槽”

```js
<slot name="header">我是默认内容</slot>
<slot name="footer">我是默认内容</slot>
```

在向具名插槽提供内容的时候，**必须在**一个 **`<template>`**元素上使用**`v-slot:`**指令，并以**v-slot:**的参数形式提供其名称

```vue
<template v-slot:default>
  <p>我是组件里的p标签</p>
</template>
<template v-slot:header>
  <p>我是组件里的p标签</p>
</template>
<!-- 语法糖形式 -->
<template #header>
  <p>我是组件里的p标签</p>
</template>
```

- **`<template>`**元素只起包裹的作用。
- **v-slot:**的简写是`#`

## 作用域插槽

在封装组件的过程中，可以为预留的 插槽绑定 props 数据，这种**带有 props 数据的 叫做“作用域插槽”**。

```js
<slot name="header" msg="hello world">
  我是默认内容header
</slot>
```

在封装组件时，为预留的`<slot>`提供属性对应的值，这个用法，叫做作用域插槽。

可以使用 **v-slot:** 的形式，接收作用域插槽对外提供的数据

**`scope`是一个形参，但最好都用 scope**

```vue
<template #header="scope">
  {{ scope }}
</template>
```

## 解构插槽 Prop

作用域插槽对外提供的数据对象，可以使用**解构赋值**简化数据的接收过程

```vue
<template #header="{user}">
  {{ user.id }}
</template>
```
