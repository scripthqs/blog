# Vue重点

## Vue的组件通信方法

### 1.props/$emit

`props/$emit`属性可以实现父子组件之间的通信，父组件可以通过**自定义属性props**向子组件传递数据，子组件可以通过**自定义事件$emit**向父组件传递数据。

### 2.$emit/$on

eventBus事件总线`$emit/$on`适用于**各种组件**之间传递数据。步骤：

1. 新建event-bus.js模块文件，向外共享一个Vue实例对象
2. 在数据的发送方，使用自定义事件，调用**bus.$emit('事件名称',发送的数据)**
3. 在数据的接收方，组测自定义事件，**bus.$on('自定义事件名称',事件处理函数)**

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

或者将事件总线添加到Vue的原型。

  1.在Vue的原型上添加一个$bus的属性让其等于一个新的Vue实例  

  2.发射全局监听事件，和常规$emit一样也可以传递参数

  3.监听全局事件

```js
//在vue中的main.js文件中
Vue.prototype.$bus = new Vue()
//或者
Vue.prototype.$bus = this

//数据发送方
this.$bus.$emit("itemImageLoad")

//数据接收方
this.$bus.$on("itemImageLoad", () => {})

```

### 3.ref/$refs

`ref/$refs`可以实现**父子组件**之间的通信。

ref属性使用到组件上，就指向组件引用的实例，可以通过实例方法组件的属性和方法。

```vue
// 子组件
data(){
  return {
    message: 'hello'
  }
},
methods:{
  fun(){
    console.log('world')
  }
}

// 父组件
<Son ref='child'></Son>
mounted(){
  console.log(this.$refs.child.message)//hello
  this.$refs.child.fun()//world
}
```

### 4.$parent/$children

使用`$parent`可以让组件访问父组件的实例，使用`$children`可以让组件访问子组件的实例。

```vue
//在子组件中，$parent是一个对象
this.$parent.msg

//在父组件中,$children是一个数组
this.$children[0].msg
```

### 5.$attrs/$listeners

`$attrs和$listeners`使用于**父子、隔代组件之间的通信**。`$attrs`属性继承了父组件的所有属性（除了props传递的属性,class,style），`$listeners`是一个对象，包含了父组件的各种事件方法。可以使用`v-bind='$attr'`继续向子组件中传递属性。

### 6.provide/inject

依赖注入`provide/inject`可以用于**父子、隔代组件的通信**。provide和inject是Vue的钩子函数，provide用来发送数据，inject使用接收数据。

```vue
//在父组件中，provide书写方式和data一样
provide(){
  return {
    msg: 'hello'
  }
}
//在子组件中
inject:['msg']
```

注意：provide提供的属性有点像一个全局的变量，有可能造成变量的污染，而且依赖注入提供的属性是**非响应式**的。

### 7.vuex

当数据比较复杂时，可以使用vuex，将一些公共的数据抽离出来，作为全局变量进行管理，其他组件可以对这个公共数据进行读写操作。

## Vue的生命周期

### Vue的生命周期函数

Vue实例有一个完整的生命周期，主要分为3个阶段，创建、运行和销毁。

1.创建阶段

- beforeCreate 创建前，**data/methods**属性都处于**不可用**状态
- created 创建后，data/methods属性可用，但是组件的模板并未生产，不能访问`$el`属性，**不能操作DOM**，可以发送ajax请求
- beforeMount 挂载前，将要把编译好的模板渲染到浏览器中，此时浏览器器中还没有DOM结构，**不能操作DOM**
- mounted 挂载后，浏览器有当前组件的DOM结构，**可以操作DOM**

2.运行阶段

- beforeUpdate 更新前，将要根据最新的属性重新渲染模板，**data数据最新的，DOM结构是旧的**
- updated 更新后，已经根据最新的数据重新渲染了模板，**data数据是最新的，DOM结构也是最新的**

3.销毁阶段

- beforeDestroy 销毁前，将要销毁组件，**组件还处于正常工作状态**
- destroyed 销毁后，**DOM结构已经完全移除**

### 哪个生命周期请求异步数据

可以在created,beforeMount,mounted钩子函数中请求ajax等异步数据，一般都在created中请求数据。

### keep-alive的生命周期

keep-alive可以将组件进行缓存，而不是销毁组件，此时组件会多两个生命周期，activated和deactivated

- 当组件被缓存时，会触发deactivated生命周期函数
- 当组件被激活时，会触发activated生命周期函数

```vue
deactivated(){
  console.log('组件被缓存')
}
activated(){
  console.log('组件被激活')
}
```

## Vue其他问题

### $nextTick的原理和作用
