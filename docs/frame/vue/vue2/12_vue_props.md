# 组件的通信

## 组件之间的关系

在项目开发中，组件之间的最常见的关系分为如下两种：

1. 父子关系
2. 兄弟关系

## 组件的数据共享

父子组件之间的数据共享分为：

- 父组件向子组件传递数据
- 子组件向父组件传递数据

## 父子组件数据传递

父组件向子组件共享数据使用**自定义属性 props**。

```js
  //父组件
  <Son :msg="message"></Son>
 data(){
   return {
     message: 'hello vue'
   }
 }
  //子组件
  props: ['msg']
```

注意：不用`v-bind`传递时，相当于直接传递字符串'message'，

用`:`才能把'hello vue'传递给子组件
子组件向父组件共享数据使用**自定义事件`$emit`**

```js
  //子组件
  data(){
    return {
      num: 0
    }
  },
  methods: {
    add () {
      this.num++
      this.$emit('numChange', this.num)
    }
  }

  //父组件
  <Son @numChange='getNewNum' />
  data(){
    return {
      newNum: 0
    }
  },
  methods:{
    getNewNum(val){
      this.newNum = val
    }
  }
```

## Vue 的组件通信总结

### 1.`props/$emit`(常用)

`props/$emit`属性可以实现父子组件之间的通信，父组件可以通过**自定义属性 props**向子组件传递数据，子组件可以通过**自定义事件\$emit**向父组件传递数据。

### 2.`$emit/$on`(各种组件关系)

eventBus 事件总线`$emit/$on`适用于**各种组件**之间传递数据。步骤：

1. 新建 event-bus.js 模块文件，向外共享一个 Vue 实例对象
2. 在数据的发送方，使用自定义事件，调用`bus.$emit('事件名称',发送的数据)`
3. 在数据的接收方，组测自定义事件，`bus.$on('自定义事件名称',事件处理函数)`

```js
//eventBus.js
import Vue from 'vue'
export default new Vue()

//Left.vue,发送方
import bus from 'eventBus.js'
methods: {
    send () {
      bus.$emit('share', this.str)
    }
  }

//Right.vue，接受方
import bus from 'eventBus.js'
created () {
    bus.$on('share', (val) => {
      this.msg = val
    })
 }
```

或者将事件总线添加到 Vue 的原型。

1. 在 Vue 的原型上添加一个`$bus` 的属性让其等于一个新的 Vue 实例
2. 发射全局监听事件，和常规`$emit` 一样也可以传递参数
3. 监听全局事件

   ```js
   //在vue中的main.js文件中
   Vue.prototype.$bus = new Vue();
   //或者
   Vue.prototype.$bus = this;

   //数据发送方
   this.$bus.$emit("itemImageLoad");

   //数据接收方
   this.$bus.$on("itemImageLoad", () => {});
   ```

### 3.`ref/$refs`(常用)

`ref/$refs`可以实现**父子组件**之间的通信。

ref 属性使用到组件上，就指向组件引用的实例，可以通过实例方法组件的属性和方法。

```js
// 子组件
data(){
  return {message: 'hello' }
},
methods:{
  fun(){ console.log('world') }
}
// 父组件
<Son ref="child"></Son>
mounted(){
  console.log(this.$refs.child.message)//hello
  this.$refs.child.fun()//world
}
```

### 4.`$parent/$children`

使用`$parent`可以让组件访问父组件的实例，使用`$children`可以让组件访问子组件的实例。

```js
//在子组件中，$parent是一个对象 this.$parent.msg
//在父组件中，$children是一个数组 this.$children[0].msg
```

### 5.`$attrs/$listeners`

`$attrs和$listeners`使用于**父子、隔代组件之间的通信**。

- `$attrs`属性继承了父组件的所有属性（除了 props 传递的属性,class,style）
- `$listeners`是一个对象，包含了父组件的各种事件方法。可以使用`v-bind='$attr'`继续向子组件中传递属性。

### 6.`provide/inject`

依赖注入`provide/inject`可以用于**父子、隔代组件的通信**。provide 和 inject 是 Vue 的钩子函数，provide 用来发送数据，inject 使用接收数据。

```js
//在父组件中，provide书写方式和data一样
provide(){ return { msg: 'hello' } }
//在子组件中
inject:['msg']
```

注意：provide 提供的属性有点像一个全局的变量，有可能造成变量的污染，而且依赖注入提供的属性是**非响应式**的。

### 7.vuex(常用)

当数据比较复杂时，可以使用 vuex，将一些公共的数据抽离出来，作为全局变量进行管理，其他组件可以对这个公共数据进行读写操作。

### 8.离线存储(常用)

可以使用浏览器的离线存储机制

```js
//组件a
created(){
  localStorage.setItem('data','a数据')
}
//组件b
created(){
  console.log(localStorage.getItem('data'))
}
```
