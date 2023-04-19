# Vue.js 介绍

## 编程模式

- 以前使用的编程范式，是命令式编程
- 使用 Vue 的编程范式，是声明式编程。

使用构造函数的方式，传一个对象`{}`作为参数。

- `{}`包含`el`属性：该属性决定这个 Vue 对象挂载到哪个元素
- `{}`包含了`data`属性，该属性通常会存储一些数据
  - 这些数据可以自定义
  - 也可以是从服务器加载的
- `{}`包含了`methods`属性，该属性用于在 Vue 中定义新的方法

- `v-for`循环
- `v-on`监听事件
  - `v-on:click`可以写成`@click`
- Vue 的实例中，如果想要获取 data 里的属性、methods 里面的方法，可以通过 this 来访问。
- this 指向的是 Vue 的实例对象。

## Vue 的两个特性

1. **数据驱动视图**：

   - 数据的变化**会驱动视图**自动更新
   - 好处：程序员只管把数据维护好，那么页面结构会被 vue 自动渲染出来！

2. **双向数据绑定**：

   > 在网页中，form 表单负责**采集数据**，Ajax 负责**提交数据**。

   - js 数据的变化，会被自动渲染到页面上
   - 页面上表单采集的数据发生变化的时候，会被 vue 自动获取到，并更新到 js 数据中

> 注意：数据驱动视图和双向数据绑定的底层原理是 **MVVM**（Mode 数据源、View 视图、ViewModel 就是 vue 的实例）

## MVVM 模式

MVVM 指的是 Model、View 和 ViewModel。**ViewModel** 作为 MVVM 的核心，是它把当前页面的数据源（Model）和页面的结构（View）连接在了一起。

1. `Model`

   - 数据层，**对应 data 中的数据**
   - 可以是自已定义的数据，也可以来自于服务器在网络请求的数据
   - 可定义数据修改和操作的业务逻辑 对应 JS 对象

2. `View`

   - 用户看到的视图层，**对应 el 中的模板代码**
   - 在前端开发中，通常就是 DOM 层
   - 主要作用是给用户展示各种信息

3. `view Model`
   - 视图模型层，**new Vue 实例**
   - 是 View 和 Model 沟通的桥梁
   - 一方面实现了`Data Bindings`（数据绑定），将 Model 的改变实时的反应到 View
   - 另一方面它实现了`DOM Listener`（DOM 监听），当 DOM 发生一些事件（点击、滚动、touch 等）时，可以监听到，并在需要的情况下改变对应的 Data。
   - 负责业务逻辑的处理（比如 Ajax 请求），对数据进行加工后交给视图展示 同步连接 V 和 M 的对象

总结：

1. data 中所有的属性，最后都出现在 vm 身上
2. Vue 实例身上所有的属性及 Vue 原型上的所有属性，在 Vue 模板中都可以直接使用

- 当**Model 数据源**发生变化时，会被 ViewModel 监听到，VM 会根据最新的数据源自动更新页面的结构
- 当表单元素的值**View**发生变化时，也会被 VM 监听到，VM 会把变化过后最新的值自动同步到 Model 数据源中

## 计数器中的 MVVM

- `h1、button`标签就是`View`，就是 DOM
- `data`这个对象的属性值就是`Model`，就是我们抽离出来的 obj
- `new Vue()`就是`View Model`，我们创建的 Vue 实例

工作流程：

- `View Model`通过`Data Bindings`让 obj 的数据实时在 DOM 中显示。
- View Model`通过`DOM Listener`来监听`methods 中的操作，来改变 obj 中的数据。

好处：

- Vue 可以帮助我们完成 Vue Model 层任务，避免手动操作 DOM 元素，让前端开发者有更多的时间去关注数据的业务逻辑处理。

## 创建 Vue 实例传入的 options

最基础的 options

- el
  - 类型：string | HTMLElement
  - 决定之后的 Vue 实例会管理哪个 DOM
- data
  - 类型：Object | Function（组件当中时，data 必须是函数）
  - Vue 实例对应的数据类型
- methods
  - 类型：{[key:string]:Function}
  - 定义属于 Vue 的一些方法，可以在其他地方调用，也可以在指令中调用
  - methods 中的函数不能使用箭头函数。箭头函数没有自己的 this，指向外层作用域，js 中`{}`并不是块级作用域，而是对象，所有会一直指向 Window。
- Vue 的生命周期函数(钩子)
