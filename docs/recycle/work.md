# 总结

CDN 边缘网络节点

css3 实现毛玻璃背景效果怎么实现?
3、Promise 的 then 方法为什么能链式调用?
4、async/ await 是怎么做到串行执行异步操作的?
5、https 比 http 安全在哪呢?
6、快速排序和冒泡排序的时间复杂度是多少?
7、vue 中 v-model 是语法糖，不用 v-mode 用什么可以替代?
8、vue 组件销毁时，所有自定义事件和原生事件都会跟着解绑吗？
9、vue3 是怎么解决 vue2 的响应式缺陷的?
10、nexttick 是什么任务?为什么优先是微任务?
11、JavaScript 不同数据类型是怎么一个存储方式?
12、一个超长字符串能存在栈内存里面吗?
13、赋值、浅拷贝、深拷贝的区别?
14、webworker 开一个子线程，那怎么监听子线程挂了
15、webpack 的 style-loader 和 css-loader 的区别?
16、webpack 如何配置 typescript 的打包?
17、webpack 的三种 hash 值配置的区别?
18、如何计算白屏时间呢?
19、本地服务代理为什么能解决跨域问题?跨域问题的其他解决方法了解过吗?
20、vue 中二次封装时数据往下一层一层传递很麻烦，怎么才能一次性传下去?
21、vuex 是怎么做到将数据注入到每一个组件里的?
22、vite 很快，那他为什么快呢?有了解过吗?
23、axios 拦截器如何拦截请求错误或者响应错误
24、axios 这个库是如何区分浏览器环境和 node 环境的?
25、项目中哪些模块是你主导的?简单聊聊吧
26、你觉得搭建一个组件库需要注意哪些事?
27、有没有在项目中做过换肤的业务?
28、有没有在项目中做过国际化语言切换?
29、DOMContentLoaded 和 load 的区别?
30、强缓存和协商缓存的区别?

<!-- # HTML 总结 -->

## 1.Doctype 的作用

Doctype 是一种文档声明，目的是说明当前代码用的 HTML 的哪一种规范。`<!DOCTYPE>`声明必须是 HTML 文档的第一行，位于 html 标签之前。HTML5 只需要写 `<!DOCTYPE HTML>`

## 2.行内元素和块级元素

行内元素不独占一行，块级元素独占一行

行内元素：`span`、`a`、`input`、`img`

块级元素：`div` 、`ul`、 `ol` 、`li`、 `h1~h6` 、`p` 、`table` 等

## 3.HTML 语义化的理解

**HTML 的职责是描述一块内容是什么（或其意义），而不是它长什么样子；它的外观应该由 CSS 来决定。**

- 能够便于开发者阅读和写出更优雅的代码。
- 同时让浏览器或是网络爬虫可以很好地解析，从而更好分析其中的内容。
- 更好地搜索引擎优化（SEO）。

## 4.浏览器内核

浏览器分成两部分：**渲染引擎（内核）和 JS 引擎**。

渲染引擎主要负责取得网页的内容、整理讯息、计算网页的显示方式等，JS 引擎则是解析 `Javascript` 语言，执行 `javascript` 语言来实现网页的动态效果。

## 5.html5 有哪些新特性

- 语义化标签: ` header``footer``nav``section``article``aside ` 等
- 增强型表单：`date`(从一个日期选择器选择一个日期) `email`(包含 e-mail 地址的输入域) `number`(数值的输入域) `range`(一定范围内数字值的输入域) `search`(用于搜索域) `tel`(定义输入电话号码字段) 等
- 视频和音频：` audio``video `
- `Canvas`绘图 `SVG`绘图
- 地理定位：`Geolocation`
- 拖放 API：`drag`
- `web worker`：是运行在后台的 `JavaScript`，独立于其他脚本，不会影响页面的性能
- `web storage`: ` localStorage``sessionStorage `
- `WebSocket`: `HTML5` 开始提供的一种在单个 `TCP` 连接上进行全双工通讯的协议

## 6.Web 存储

在网页中，会经常性在本地存储大量的数据，传统方式我们以`document.cookie`来进行存储，但是存储大小只有 4kb 左右，解析也非常复杂。

1. Cookie 是浏览器访问服务器后，服务器传给浏览器的一段数据（通常是一段**加密的字符串**），并且默认情况下，只会在同源的 HTTP 请求中携带。（同源：同域名、同端口、同协议）

2. 浏览器需要保存这段数据，不得轻易删除。

3. 此后每次浏览器访问该服务器，都必须带上这段数据。

Cookie 一般有两个作用:

1. **识别用户身份**
2. **记录历史**

**H5 有两种存储方式：**

1. `window.sessionStorage`：会话存储

   - 浏览器**本地存储**的一种方式，以**键值对**的形式的进行存储
   - 保存在内存中
   - 生命周期为关闭浏览器窗口，**窗口关闭时浏览器销毁**
   - 在同一个窗口下数据可以共享

2. `window.localStorage`：本地存储
   - 浏览器**本地存储**的一种方式，以**键值对**的形式的进行存储
   - 有可能保存在浏览器内存里，也可能在硬盘中
   - **永久生效除非手动删除**
   - 可以多串口共享

Web 存储的特性：

1. 设置、读取方便
2. 容量较大，`sessionStorage`约 5M，`localStorage`约 20M
3. 只能存储字符串，可以将对象 JSON.stringfy() 编码后存储

cookie、sessionStorage、localStorage 的区别:

cookie 是浏览器访问服务器后，服务器返回的一段数据，通常是一段加密的字符串，并且只会在同源 HTTP 请求中携带，作用是识别用户的身份和记录历史，sessionStorage 是浏览器本地存储的一种方式，以键值对的形式进行存储，存储的数据会在浏览器窗口关闭后销毁，localStorage 也是浏览器本地存储的一种方式，以键值对的形式进行存储，不过它的数据一般都会一直存在，除非手动删除。

## 7.浏览器内多个标签页之间的通信

- 使用 `localStorage`: `localStorage.setItem(key,value)`、`localStorage.getItem(key)`，一个窗口更新 localStorage，另一个窗口监听 window 对象的'storage'事件，来实现通信

```js
// 本窗口的设值代码
localStorage.setItem("aaa", (Math.random() * 10).toString());

// 其他窗口监听storage事件
window.addEventListener("storage", function (e) {
  console.log(e);
  console.log(e.newValue);
});
```

注：两个页面要同源（URL 的协议、域名和端口相同）

- `websocket`协议
- `webworker`

## 8.src 与 href 的区别

`src` 用于替代这个元素，而 `href` 用于建立这个标签与外部资源之间的关系

```js
<link href="style.css" rel="stylesheet" />
<a href=""></a>
```

浏览器加载到这里的时候，`html` 的渲染和解析不会暂停，`css` 文件的加载是同时进行的

```js
<script src="script.js"></script>
<img src="" alt="">
```

当浏览器解析到这句代码时，页面的加载和解析都会暂停直到浏览器拿到并执行完这个 js 文件

## 9.表单提交中 Get 和 Post 方式的区别

- `Get` 一般用于从服务器上获取数据，`Post` 向服务器传送数据
- `Get` 传输的数据是拼接在 Url 之后的，对用户是可见的；`Post` 的传输数据对用户是不可见的
- `Get` 传送的数据量较小，不能大于 `2KB`。`Post` 传送的数据量较大，一般被默认为不受限制
- `Get` 安全性非常低，`Post` 安全性较高
- 在 `FORM` 提交的时候，如果不指定 `Method`，则默认为 `Get` 请求

## 10.script 标签中 defer 和 async 的区别

**defer** 延时、**async**异步

defer 和 async 属性都是去**异步加载外部的 JS**脚本文件，它们都不会阻塞页面的解析，区别：

- 多个带 async 属性的标签，不能保证加载的顺序；
- 多个带 defer 属性的标签，按照加载顺序执行；

## 供应商和采购商

三种角色，采购商、供应商、二者都是。供应商可以买东西，采购商只能买东西。然后作为供应商时，可以去买东西，但是在管理系统中，发现该供应商没有采购商 id，导致接口报错。

## Jenkins 的 CI/CD

## I18N 国际化

<!-- # CSS 总结 -->

## display:none 和 visibility:hidden 的区别

共同点：都可以使元素不可见

不同点：display:none 会让元素完全从渲染树中消失，不占据任何空间，visibility:hidden 不会让元素从渲染树中消失，占据空间，只是内容不可见。display:none 是非继承属性，visibility:hidden 是继承属性，子孙节点继承了 hidden 属性，可以设置 visibility:visible 让子孙节点显性。

## 为什么要初始化 CSS 样式

主要原因是浏览器的兼容问题，不同浏览器对有些元素的默认样式是不同的，并且默认样式会影响项目的最终布局，如果没有对 CSS 进行初始化，那么有可能出现浏览器之间的页面显示差距。

## 什么是 PostCSS

PostCSS 是一个平台，基于这个平台，可以使用一些插件来优化 css 代码，比如 autoprefixer 插件，它基于 postcss 使用，可以帮助我们为 css 增加不同的浏览器前缀

## css 选择器优先级

元素选择器、类选择器、id 选择器、通用选择器、后代选择器

```css
!important>行内样式>id选择器>类选择器>标签选择器>通配符>继承
```

选择器的优先级越高，就显示什么样式，行内样式 1000，id 选择器 0100，类选择器 0010，元素选择器 0001，通配选择器 0000。

## 盒模型的理解

css3 有 2 种盒模型，标准盒模型和 IE 盒模型，盒模型都是由 margin、padding、border、content 组成。区别在于设置 width 和 height 时，所对应的范围不同，标准盒模型的 width 和 height 属性范围只包含 content，IE 盒模型的 width 和 height 包含了 content、padding、border。可以通过修改元素的 box-sizing 属性来元素的盒模型。

- box-sizing: content-box; 表示标准盒模型
- box-sizing: border-box; 表示 IE 盒模型

## 精灵图（雪碧图）

精灵图将一个页面涉及的小图都包含到一张大图中，然后利用 css 的 background-image,background-repeat,background-position 属性进行背景定位。

- 利用精灵图能够减少网页的 http 请求，从而提高页面的性能，能够减少图片的大小

## 水平垂直居中的实现

行内元素：文字和图片

```css
text-align: center;
height: 20px;
line-height: 20px;
```

块级元素：元素的宽高确定

```css
.father {
  overflow: hidden; /*开启BFC，解决外边距重叠问题*/
}
.son {
  margin: 0 auto;
  margin-top: (father.h-son.h)/2;
}
```

块级元素：元素的宽高确定，使用定位，子绝父相

```css
.father{
  position: relative;
}
.son{
  position: absolute;
  left: 50%;
  margin-left: -son.w/2,
  top: 50%;
  margin-top: -son.h/2
}
```

块级元素：宽高不定时

```css
.father{
  position: relative;
}
.son{
  position: absolute;
  left: 50%
  top: 50%
  transform: translate(-50%,-50%)
}
```

使用 flex 布局

```css
.father {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

## BFC

BFC 是块级格式化环境，当元素开启 BFC 后，该区域会变成一个独立的布局区域。

- 开启 BFC 的元素，不会被浮动元素覆盖
- 开启 BFC 的元素，子元素和父元素的外边距不会重叠
- 开启 BFC 的元素，可以包含浮动的子元素

### 如何开启 BFC

- 设置浮动，会脱离文档流，不推荐
- 设置为行内块元素
- 将 overflow 设置为一个非 visible 的值

## 定位

相对定位不会脱离文档流，以自身为参照物，灵魂出窍。绝对定位会脱离文档流，参照物是包含块。

### 包含块是离它最近那个开启定位的祖先元素，没有就是 HTML 根元素

固定定位是特殊的绝对定位，参照物是浏览器视口。粘滞定位是特殊的相对定位，参照物是浏览器视口。开启定位的元素可以是 z-index 来设置层级。

## css 画三角形

主要是利用盒模型的 border 属性来设置的

```css
div {
  width: 0;
  height: 0;
  border: 50px solid red;
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
}
```

# Vue 重点

## Vue 的组件通信方法

### 1.props/\$emit

`props/$emit`属性可以实现父子组件之间的通信，父组件可以通过**自定义属性 props**向子组件传递数据，子组件可以通过**自定义事件\$emit**向父组件传递数据。

### 2.$emit/$on

eventBus 事件总线`$emit/$on`适用于**各种组件**之间传递数据。步骤：

1. 新建 event-bus.js 模块文件，向外共享一个 Vue 实例对象
2. 在数据的发送方，使用自定义事件，调用**bus.\$emit('事件名称',发送的数据)**
3. 在数据的接收方，组测自定义事件，**bus.\$on('自定义事件名称',事件处理函数)**

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

1.在 Vue 的原型上添加一个\$bus 的属性让其等于一个新的 Vue 实例

2.发射全局监听事件，和常规\$emit 一样也可以传递参数

3.监听全局事件

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

### 3.ref/\$refs

`ref/$refs`可以实现**父子组件**之间的通信。

ref 属性使用到组件上，就指向组件引用的实例，可以通过实例方法组件的属性和方法。

```vue
// 子组件 data(){ return { message: 'hello' } }, methods:{ fun(){ console.log('world') } } // 父组件
<Son ref="child"></Son>
mounted(){ console.log(this.$refs.child.message)//hello this.$refs.child.fun()//world }
```

### 4.$parent/$children

使用`$parent`可以让组件访问父组件的实例，使用`$children`可以让组件访问子组件的实例。

```vue
//在子组件中，$parent是一个对象 this.$parent.msg //在父组件中,$children是一个数组 this.$children[0].msg
```

### 5.$attrs/$listeners

`$attrs和$listeners`使用于**父子、隔代组件之间的通信**。`$attrs`属性继承了父组件的所有属性（除了 props 传递的属性,class,style），`$listeners`是一个对象，包含了父组件的各种事件方法。可以使用`v-bind='$attr'`继续向子组件中传递属性。

### 6.provide/inject

依赖注入`provide/inject`可以用于**父子、隔代组件的通信**。provide 和 inject 是 Vue 的钩子函数，provide 用来发送数据，inject 使用接收数据。

```vue
//在父组件中，provide书写方式和data一样 provide(){ return { msg: 'hello' } } //在子组件中 inject:['msg']
```

注意：provide 提供的属性有点像一个全局的变量，有可能造成变量的污染，而且依赖注入提供的属性是**非响应式**的。

### 7.vuex

当数据比较复杂时，可以使用 vuex，将一些公共的数据抽离出来，作为全局变量进行管理，其他组件可以对这个公共数据进行读写操作。

### 8.离线存储

可以使用浏览器的离线存储机制

```vue
//组件a created(){ localStorage.setItem('data','a数据') } //组件b created(){ console.log(localStorage.getItem('data')) }
```

## Vue 的生命周期

### Vue 的生命周期函数

Vue 实例有一个完整的生命周期，主要分为 3 个阶段，创建、运行和销毁。

1.创建阶段

- beforeCreate 创建前，**data/methods**属性都处于**不可用**状态
- created 创建后，data/methods 属性可用，但是组件的模板并未生产，不能访问`$el`属性，**不能操作 DOM**，可以发送 ajax 请求
- beforeMount 挂载前，将要把编译好的模板渲染到浏览器中，此时浏览器器中还没有 DOM 结构，**不能操作 DOM**
- mounted 挂载后，浏览器有当前组件的 DOM 结构，**可以操作 DOM**

  2.运行阶段

- beforeUpdate 更新前，将要根据最新的属性重新渲染模板，**data 数据最新的，DOM 结构是旧的**
- updated 更新后，已经根据最新的数据重新渲染了模板，**data 数据是最新的，DOM 结构也是最新的**

  3.销毁阶段

- beforeDestroy 销毁前，将要销毁组件，**组件还处于正常工作状态**
- destroyed 销毁后，**DOM 结构已经完全移除**

### 哪个生命周期请求异步数据

可以在 created,beforeMount,mounted 钩子函数中请求 ajax 等异步数据，一般都在 created 中请求数据。

### keep-alive 的生命周期

keep-alive 可以将组件进行缓存，而不是销毁组件，此时组件会多两个生命周期，activated 和 deactivated

- 当组件被缓存时，会触发 deactivated 生命周期函数
- 当组件被激活时，会触发 activated 生命周期函数

```vue
deactivated(){ console.log('组件被缓存') } activated(){ console.log('组件被激活') }
```

## Vue 其他问题

### v-if 和 v-show

v-if 和 v-show 都可以控制元素的显示和隐藏。

- v-if 是真正的条件渲染，在显示隐藏过程中有 DOM 的添加和删除
- v-show 只是切换 css，相当于设置 display 属性

如何需要非常频繁的切换，可以考虑使用 v-show

### \$nextTick 的作用

`$nextTick`将回调函数推迟到下一次 DOM 更新后执行，在 created 生命周期函数中，需要进行 DOM 操作，就一定要放在 nextTick 函数中。

### computed 和 watch

- computed 是计算属性，依赖于其他属性计算而来的，有缓存机制
- watch 是监听其他属性的变化，支持异步，不支持缓存

# Vue-router 重点

## Vue-router 的懒加载

当路由被加载时才访问对应的组件

- 使用箭头函数+import 的方式

```js
import list from "@/components/list.vue"; //非懒加载
const list = () => import("@/components/list.vue"); //懒加载
const router = new VueRouter({
  routes: [{ path: "list", component: list }],
});
```

## 路由的 hash 模式和 history 模式

- 默认是 hash 模式，浏览器地址栏的 URL 会带一个`#`，兼容性更好
- history 模式需要后台支持，没有支持就会访问 404

```js
const router = new VueRouter({
  mode: 'history',
  routes: [...]
})
```

## 获取页面的 hash 模式

- 监听\$route 参数对象的变化
- window.location.hash 读取#值

## $route和$router

- \$route 是参数对象，包含了 path,params,hash,query 等路由参数信息
- \$router 是路由实例对象，包含了路由跳转的方法，push,go,back,beforeEach 导航守卫

## 动态路由

路径/后面是路径参数 params，?后面是查询参数 query

使用英文:的方法实现动态路由

## 路由导航

全局前置守卫，beforeEach 参数是回调函数，可以根据 token 判断是否登录跳转


## 问题

- 多环境 public 文件夹 window变量
- 后端数字类型id
- ai自动翻译
- 菜单级联勾选，
