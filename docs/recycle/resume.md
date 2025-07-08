# 面试

## 自我介绍

你好，我叫黄前胜，目前做了 4 年前端，毕业于重庆交通大学，学历是本科，最近使用的技术栈主要是 vue2/3,还有 electron,react hooks 那一套也会，写过一些示例，最近是做了一个制造运营管理系统，包括 web 端和 electron 客户端。还有一个低代码平台，可视化项目。再之前还做过 ssr 服务端渲染的项目。

- 从头到尾：从基建到后期优化都有参与

制造运营管理系统：web 端：权限菜单管理、业务基础数据、工单、产品配置、工艺路线等等业务。客户端：流水线，过站扫码、称重、包装、组装、打标。这个系统就是给国内外各个工厂去使用，包括重庆、南昌、深圳、印度、土耳其等国内外多个工厂。

## 八股文

- css 常见布局 flex 自适应（百分比+flex vh/vw） rem px em 单位
- 输入 url 到看到整个页面，http http2 https
- promise 微任务宏任务
- 原型链 作用域 精度问题

## 框架工具

- vue 响应式、diff 算法、虚拟 dom，vue 依赖收集
- watch computed nextTick vue2/vue3 v-if/v-show v-if/v-for
- ref/reactive
- webpack plugin loader vite
- react

## 项目

- webpack +vite 打包
- vxe-table 动态表单 水印 el-select 多个 tag 才省略
- vue hooks
- echarts 动画 响应式布局
- ai 翻译、客户、iframe 事件通信 postMessage、eval 函数执行代码字符串
- ssr nuxt3 svg 动画 过渡 seo 语义化
- 微前端 monorepo
- uniapp
- 代码规范 css bem 块元素修饰符 样式 vue watch 函数入参 try catch
- 监听滚动，判断底部，触发网络请求 scrollTop+windowHeight>= scrollHeight
- document。visibilityState：页签活跃
- css 的 text-overflow js slice 方法
- 重复请求：加请求锁 flag,按钮 loading,防抖节流
- 批量请求，只弹出一个提示，allSettled all
- 用 map 映射，策略模式，减少 if-else
- px->rem:通常设计稿和和根字体是 1/10 meta 视口缩放
- 静态资源同源宽松 CDN 通常会设置 CORS 响应头
- 空对象 object.keys(ojb).length
- 空数组：Array.isArray(arr) && arr.length === 0;
- flex:1 多个元素等比自适应 平均分配
- iframe 隔离太强，交互困难 不利于 路由权限样式不好做
- qiankun 利用 ES6 的 Proxy 对 window 对象进行代理，拦截子应用对全局变量的读写。
- css 水印伪元素，Canvas 背景
- 全部变量污染，冲突，难以维护
- seo 语义化标签 alt 属性 title 和 description ssr 服务端渲染 直接返回完整 HTML，
- script.onerror 加载失败降级处理 cdn 兜底
- data- 属性自定义数据，且不会影响页面结构和样式。
- sideEffects 标记哪些文件有副作用，帮助构建工具（如 webpack）进行 Tree Shaking（去除未用代码）优化。
- requestIdleCallback 浏览器空闲时执行回调函数
- 懒加载、路由守卫、路由参数

### webpack->vite

webpack 遍历依赖全量打包启动服务器，慢，配置复杂
vite 使用浏览器原生 es-module,按需编译动态加载，配置简单

vite 预编译 处理 commonjs

- vue 版本
- vite 插件
- index.html
- 环境变量 process.env ->import.meta.env define 配置
- require.context->import.meta.glob
- 配置别名 resolve.alias
- 自动为文件加后缀 resolve.extensions
- sass 降级
- variables.scss->variables.module.scss

打包：

```js
// process.argv.slice(2);
// node 子进程
import { spawn } from "child_process";
// 写一个env.temp 的环境变量
// spawn(npxCmd, ["vite", "build", "--mode", "temp"]
// 删除env.temp
```

```js
build.rollupOptions.output;
// manualChunks(id) {
//   if (id.includes("node_modules")) {
//     // 让每个插件都打包成独立的文件
//     return id .toString() .split("node_modules/")[1] .split("/")[0] .toString();
//   }
// }
// import _ from "lodash-es"; // 你将会把整个lodash的库引入到项目
// import { cloneDeep } from "lodash-es"; // 你将会把引入cloneDeep引入到项目
```

代码分割原理：vite rollup 默认是有 es6 的 import 语法 自动分割，manualChunks 函数手动分割 id 绝对路径

- 换成了挂 window 下面

vite 插件 preload（立即加载)和 prefetch(空闲时预加载）预加载资源

- 首屏大图、重要脚本、样式

- 首页懒加载，进去有点卡顿，使用 vite 插件构建预加载

- output.mainfest 生成资源清单，描述打包后的每个入口和资源文件的映射关系
- path 字符串数组 打包资源路径路径
- 构造一个 preload 的 script 标签，添加到 index.html 中
- transformIndexhtml 传 html

echarts 按需引入

- 只引入核心库，引入需要的图表，组件

处理第三方库组件没有提供的效果

1. css 控制视觉显影效果，虚伪达成
2. js 回归原始的 dom 操作

## vue2 和 vue3

1. defineProperty 该为 Proxy,解决数组无法通过下标修改，对象属性增减的问题
2. 选项式 api 改为组合式编程，方便按需引入，配合 tree-shaking 打包体积变小
3. vue3 的 mixin 改为 hooks 组件优先
4. v-model 监听的事件和传递值不一样
   - vue2 value，change
   - vue3 传递 modelValue，监听 update:modelValue

watch/watchEffect/computed

- state、getters、actions 等同于 Vue2 中的 data、computed、methods
- 可以直接在 store 上访问 state、getters、actions 中定义的属性

- render 函数 cre

Vuex 需要定义 State、Getters、Mutations、Actions、Modules

- 更新唯一方式就是提交 mutations。mutation 必须是同步函数
- mutation 必须同步，action 支持异步

## ref 和 reactive computed watch

ref:支持基本数据类型+引用数据类型
reactive:只支持引用数据类型

他们解构后都会丢失响应式，需要使用 toRefs。

ref 和 reactive 都可以定义对象、数组，具体使用哪个根据赋值方式来定

- 直接赋值：ref 会保留响应式，reactive 会丢失响应式
- 修改数据：reactive 和 ref 都可以，但是 ref 需要多写个.value，vscode 可以提供插件自动补全 ref

## diff 算法

框架设计，数据发生改变，引用数据的视图发生改变。

虚拟 dom 用 js 对象模拟 dom 结构，通过 diff 算法比较新旧 dom，减少不必要的 dom 更新，跨平台

- 同层比较和优化策略
- 三大核心操作：移动节点、更新节点、新增和删除节点
- 差异记录和批量更新

v-for 的 key 作用

- key 属性是 dom 元素的唯一标识， 可以在 diff 算法用来判断是否是同一个节点
- 可以调高虚拟 dom 的更新效率：使用 index 做 key，破坏顺序操作的时候， 因为每一个节点都找不到对应的 key，导致部分节点不能复用,所有的新 vnode 都需要重新创建。
- 不设置 key 或者 key 不唯一可能会有 bug：结构中包含输入类的 DOM，会产生错误的 DOM 更新
- 数据没有逆序添加，逆序删除破坏顺序的操作， 只用于列表展示的话 使用 index 作为 Key 没有毛病

## hooks

1. 函数名前缀加上 use；
2. 合理利用 Vue 提供的响应式函数及生命周期
3. 暴露出 变量 和 方法 提供外部需要时使用

## 封装组件

- 单一职责
- 高内聚低耦合，内部的功能紧密相关，减少组件之间的依赖
- 灵活的 slot，props 必填选填明确，使用默认值
- 像 css 使用 BEM 命名 回调事件以 on 开头，组件内事件以 handle 开头 ，私有方法以 \_ 开头
- 使用 computed 对 props 进行二次封装

## ts

数组对象不定属性

```ts
let arr: [number, string, ...(number | string)[]];
let obj: { x: string; [propsName: string]: number } = { x: "123", a: 1 };
```

泛型

- 来在定义时不指定具体类型，使用时再指定类型
- 泛型约束，extends

类型工具

- `Partial<IPerson>` 变可选
- `Required<IPerson>` 变必填
- `Readonly` 只读
- `Record<Keys, Type>` 构造一个对象类型
- `ReturnType` 返回值
- Pick<T, K> 挑选部分属性组成新类型。
- Omit<T, K> 去除部分属性组成新类型。

declare 声明模块、变量、文件、空间等

```ts
// 引入vue文件不识别
declare module "*.vue";
```

tsconfig.json

- compilerOptions
  - 'jsx':'prev'
- include
- exclude

常用

- 泛型 vue 网络请求 page 出参入参
- package.json 中找 exports 下的 types
- HTMLInputElement HTMLCanvasElement

## react

React 在 props 或 state 发生改变时，会调用 React 的 render 方法，会创建一棵不同的树。造成父组件 state 数据一遍，子组件就更新。

- React 需要基于这两个不同的树之间的差别来判断如何有效的更新 UI
- React 进入了 diff 算法来优化
- vue 源码自动依赖收集
- react 需要使用 React.memo 包装组件
- 父组件传递给子组件的方法用 useCallback 包装一下
- js 三元运算、map 便利 == vue 的 v-if/v-show v-for
- onClick、onChange == @click、@input
- const [value, setValue] = useState('') == v-model
- useState == vue 直接改
- useEffect == vue 生命周期（依赖数组为空） == vue 的 watch（依赖数组有值） useLayoutEffect 同步操作 dom，避免闪烁
- useMemo == vue computed
- useRef 获取 ref ,也可以保存一些不会引入组件渲染的数据
- 使用组件的方法或者属性，使用 useImperativeHandle
- useImperativeHandle 配合 forwardRef 使用，自定义暴露给父组件的实例值
- Umi 预定式路由 插件 mock 代理 unocss ts 代码规范
- **styled-components** 库 模板字符串的高级用法 css-modules(不能连接符、style.className、动态修改样式名字)

## PerformanceObserver

- 实时捕获页面性能事件，FCP 首次内容绘制
- 长任务，超过 50ms 的任务 使用 PerformanceObserver
- beforeunload visibilitychange 事件，监听页面关闭
- navigator.sendBeacon 在页面关闭或切换时发送积压的埋点数据，保证数据可靠上报。
- 埋点数据：加载页面、路由切换、点击、滑动、接口
- 统计加载耗时
-

## 公司

架构 人员配比
试用期 福利待遇 年终奖金
