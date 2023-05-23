# computed

## computed 简介

computed 计算属性指的是通过**一系列运算**之后，最终得到**一个属性值**。

这个**动态计算出来的属性值**可以被模板结构或 methods 方法使用。

## 计算属性的使用

定义一个函数，return 函数的返回值。

- 通过 this 访问数据
- 对于任何包含响应式数据的赋值逻辑,你应该使用计算属性
- 字符串拼接
- 返回函数的计算结果，计算属性的函数写在 computed 中
- 使用**计算属性时是属性名**，而不是调用函数的形式

```js
<h2>{{ add }}</h2>
<h2>{{ sub() }}</h2>
computed:{
    add(){
        return this.a + ' ' + this.b
    }
}
methods:{
    sub(){
        return this.a - this.b
    }
}
```

## 计算属性的特点

特点：

1. 定义的时候，要被定义为“方法”
2. 在使用计算属性的时候，当普通的属性使用即可

好处：

1. 实现了代码的复用
2. 只要计算属性中依赖的数据源变化了，则计算属性会自动重新求值！

## 计算属性的 setter 和 getter

计算属性原理是底层借助了**Object.defineProperty 的 setter 和 getter**来的

`computed`计算属性中，一般是一个对象，里面有两个方法：getter 和 setter，但是计算属性默认只用 getter，所以一般都是简写的，所有调用都不加括号

```js
 computed: {
    // 语法糖的写法
    fullName1() {
        return this.firstName + " " + this.lastName
    },
    // 完整的写法:
    fullName2: {
        get: function() {
            return this.firstName + " " + this.lastName
        },
        set: function(value) {
            const names = value.split(" ")
            this.firstName = names[0]
            this.firstName = names[1]
        }
    }
},

```

## 计算属性的缓存

计算属性虽然和定义方法得到的最终结果是一样的，但是计算属性是基于它们的**响应式依赖**进行缓存的。所以多使用计算属性少使用方法。

- computed 底层会缓存, 性能更高
- 计算属性会基于它们的依赖关系进行缓存
- 在数据不发生变化时，计算属性是不需要重新计算的
- 但是如果依赖的数据发生变化，在使用时，计算属性依然会重新进行计算
