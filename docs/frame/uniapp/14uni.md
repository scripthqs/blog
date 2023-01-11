# 组件的通讯

## 1 父组件给子组件传值

通过 props 来接受外界传递到组件内部的值

```vue
<template>
 <view>
  这是一个自定义组件 {{msg}}
 </view>
</template>

<script>
 export default {
  props: ['msg']
 }
</script>

<style>
</style>
```

其他组件在使用 login 组件的时候传递值

```vue
<template>
 <view>
  <test :msg="msg"></test>
 </view>
</template>

<script>
 import test from "@/components/test/test.vue"
 export default {
  data () {
   return {
    msg: 'hello'
   }
  },
  
  components: {test}
 }
</script>
```

## 2 子组件给父组件传值

通过 $emit 触发事件进行传递参数

```vue
<template>
 <view>
  这是一个自定义组件 {{msg}}
  <button type="primary" @click="sendMsg">给父组件传值</button>
 </view>
</template>

<script>
 export default {
  data () {
   return {
    status: '打篮球'
   }
  },
  props: {
   msg: {
    type: String,
    value: ''
   }
  },
  methods: {
   sendMsg () {
    this.$emit('myEvent',this.status)
   }
  }
 }
</script>
```

父组件定义自定义事件并接收参数

```vue
<template>
 <view>
  <test :msg="msg" @myEvent="getMsg"></test>
 </view>
</template>
<script>
 import test from "@/components/test/test.vue"
 export default {
  data () {
   return {
    msg: 'hello'
   }
  },
  methods: {
   getMsg (res) {
    console.log(res)
   }
  },
  
  components: {test}
 }
</script>
```

## 3 兄弟组件通讯

### [uni.$emit](https://uniapp.dcloud.io/api/window/communication?id=emit)

触发全局的自定义事件，附加参数都会传给监听器回调函数。

```js
    uni.$emit('update',{msg:'页面更新'})
```

### [uni.$on(eventName,callback)](https://uniapp.dcloud.io/api/window/communication?id=on)

监听全局的自定义事件，事件由 `uni.$emit` 触发，回调函数会接收事件触发函数的传入参数。

```js
    uni.$on('update',function(data){
        console.log('监听到事件来自 update ，携带参数 msg 为：' + data.msg);
    })
```
