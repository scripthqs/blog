# Vue的详解

vuex是一个状态管理工具，可以做跨组件通信和跨页面通信。Vuex的存储流程有state，mutations，actions，getters，modules

5个概念，

- state可以存放属性和变量，state存数据有两个好处一个是**能跨页面跨组件通信，另一个是state里面的数据是响应式的**。
- getters可以对state进行计算操作，相当于vue中的计算属性computed。**那么可以在组件中直接用computed中操作state中的数据吗？**可以，如果一个状态只在一个组件中使用时，可以直接在computed中操作。getters的好处就是可以在多个组件中复用。
- mutations可以同步的改变state里面的值，actions可以进行异步操作。

- mutations使用较多，对应commit方法，对于购物车，登录信息可以存在放在mutations中

- actions对应dispatch方法

**具体的业务**：

比如在购物车中商品的收藏数量，需要在详情页和购物车页面显示，可以在vuex中在无刷新的存储。**vuex存在一个问题**，只能做临时存储，就是一刷新页面，vuex里面的数据就没有了，**没有了怎么办？**可以配合浏览器的**本地存储**sessionStorage或者localStorage解决不能长久存储的问题。**具体怎么做？**在存储数据时，**在vuex里面存储一份，在localSrorage中也存储一份**，在state中赋值的时候判断一下，localStorage中是否有值，把里面的值赋值给state。**但是又存在一个问题**：vue是单页面应用，操作都是在一个页面跳转路由；localStorage会读取上一次打开页面的数据，sessionStorage可保证打开页面时**sessionStorage的数据**为空，

因为我们是只有在**刷新页面时才会丢失state里的数据**，想法在**点击页面刷新时先将state数据保存到sessionStorage**,然后才真正刷新页面。

**beforeunload**这个事件在页面刷新时先触发的。那这个事件应该在哪里触发呢？我们总不能每个页面都监听这个事件，所以选择放在**app.vue这个入口组件**中，在**created这个生命周期函数**下，监听**beforeunload**，将state中的数据存储到sessionStoage中（注意存储数据时**考虑json格式的数据转换**），再判断sessionStoage中有没有数据，有数据，可以使用**深拷贝**的方式将数据拷贝到state中，这样就可以保证每次刷新页面都可以触发。

```js
export default {
  name: 'App',
  created () {
    //在页面加载时读取sessionStorage里的状态信息
    if (sessionStorage.getItem("store") ) {
        this.$store.replaceState(Object.assign({}, this.$store.state,JSON.parse(sessionStorage.getItem("store"))))
    } 
    //在页面刷新时将vuex里的信息保存到sessionStorage里
    window.addEventListener("beforeunload",()=>{
        sessionStorage.setItem("store",JSON.stringify(this.$store.state))
    })
  }
}
```
