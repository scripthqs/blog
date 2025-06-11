# 面试

## 自我介绍

你好，我叫黄前胜，目前做了 4 年前端，毕业于重庆交通大学，普通本科，最近使用的技术栈主要是 vue2/3,还有 electron,react 之前自己也学会，写过一些示例，最近是做了一个制造运营管理系统，包括 web 端和 electron 客户端。还有一个低代码平台，可视化项目。再之前还做过 ssr 服务端渲染的项目。

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

处理第三方库组件没有提供的效果

1. css 控制视觉显影效果，虚伪达成
2. js 回归原始的 dom 操作

React 在 props 或 state 发生改变时，会调用 React 的 render 方法，会创建一棵不同的树。造成父组件 state 数据一遍，子组件就更新。

- React 需要基于这两个不同的树之间的差别来判断如何有效的更新 UI
- React 进入了 diff 算法来优化
- vue 源码自动依赖收集
- react 需要使用 React.memo 包装组件
- 父组件传递给子组件的方法用 useCallback 包装一下
- useState == vue 直接改
- useEffect == vue 生命周期（依赖数组为空） == vue 的 watch（依赖数组有值）
- useMemo == vue computed
- useRef 获取 ref ,也可以保存一些不会引入组件渲染的数据
