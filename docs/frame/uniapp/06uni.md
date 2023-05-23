# 数据绑定和事件绑定

## 1 data

在页面中需要定义数据，和 vue 一摸一样，直接在 data 中定义数据即可

```vue
export default {
  data () {
    return {
      msg: 'hello-uni'
    }
  }
}
```

## 2 {{ }}

依然支持插值表达式

+ 利用插值表达式渲染基本数据

  ```html
  <view>{{msg}}</view>
  ```

+ 在插值表达式中使用三元运算

  ```html
  <view>{{ flag ? '我是真的':'我是假的' }}</view>
  ```

+ 基本运算

  ```html
  <view>{{ 1+1 }}</view>
  ```

## 3 v-bind

v-bind 动态绑定属性。

利用v-bind进行渲染

```html
<image v-bind:src="img"></image>
```

还可以缩写成:

```html
<image :src="img"></image>
```

## 4 v-for

v-for 进行循环，同样需要写 key。

```vue
<view v-for="(item,i) in arr" :key="i">名字：{{item.name}}---年龄：{{item.age}}</view>
```

## 5 v-on

事件绑定和 vue 中是一样的，通过 v-on 进行事件的绑定，也可以简写为 @，事件函数定义在 methods 中

```js
<button @click="funClick">点击触发事件</button>
```

+ 事件传参方式一样，默认如果没有传递参数，事件函数第一个形参为事件对象。

+ 如果给事件函数传递参数了，则对应的事件函数形参接收的则是传递过来的数据

+ 如果获取事件对象也想传递参数，使用`$event`
