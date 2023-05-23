# 组件创建和生命周期

## 1 组件创建

在 uni-app 中，可以通过创建一个后缀名为 vue 的文件，即创建一个组件成功，其他组件可以将该组件通过 import 的方式导入，在通过components 进行注册即可

- 创建 login 组件，在 component 中创建 login 目录，然后新建 login.vue 文件

  ```vue
  <template>
   <view>
    这是一个自定义组件
   </view>
  </template>
  
  <script>
  </script>
  
  <style>
  </style>
  ```

- 在其他组件中导入该组件并注册

  ```js
  import login from "@/components/test/test.vue"
  ```

- 注册组件

  ```vue
  components: {test}
  ```

- 使用组件

  ```vue
  <test></test>
  ```

## 2 组件的生命周期函数

组件的生命周期和 vue 生命周期一样

| beforeCreate  | 在实例初始化之后被调用。[详见](https://cn.vuejs.org/v2/api/#beforeCreate)                                                                                                                                                  |              |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ |
| created       | 在实例创建完成后被立即调用。[详见](https://cn.vuejs.org/v2/api/#created)                                                                                                                                                   |              |
| beforeMount   | 在挂载开始之前被调用。[详见](https://cn.vuejs.org/v2/api/#beforeMount)                                                                                                                                                     |              |
| mounted       | 挂载到实例上去之后调用。[详见](https://cn.vuejs.org/v2/api/#mounted) 注意：此处并不能确定子组件被全部挂载，如果需要子组件完全挂载之后在执行操作可以使用`$nextTick`[Vue官方文档](https://cn.vuejs.org/v2/api/#Vue-nextTick) |              |
| beforeUpdate  | 数据更新时调用，发生在虚拟 DOM 打补丁之前。[详见](https://cn.vuejs.org/v2/api/#beforeUpdate)                                                                                                                               | 仅H5平台支持 |
| updated       | 由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子。[详见](https://cn.vuejs.org/v2/api/#updated)                                                                                                            | 仅H5平台支持 |
| beforeDestroy | 实例销毁之前调用。在这一步，实例仍然完全可用。[详见](https://cn.vuejs.org/v2/api/#beforeDestroy)                                                                                                                           |              |
| destroyed     | Vue 实例销毁后调用。调用后，Vue 实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁。[详见](https://cn.vuejs.org/v2/api/#destroyed)                                                             |              |
