# Vue CLI 脚手架

## 单页面应用程序

单页面应用程序（英文名：Single Page Application）简称 SPA，顾名思义，指的是一个 Web 网站中只有唯一的一个 HTML 页面，所有的功能与交互都在这唯一的一个页面内完成.

## Vue CLI 简介

在开发大型项目，必然会使用 Vue CLI 工具

- 在 Vue.js 开发大型应用时，需要考虑代码目录结构，项目结构和部署、热加载，代码单元测试等事情
- 使用脚手架工具可以帮助我们完成这些事情

CLI 全称 Command-Line Interface，翻译为命令行界面，但是俗称脚手架。

Vue CLI 是官方发布 vue.js 项目脚手架，可以**快速搭建 Vue 开发环境和对应的 webpack 配置**。脚手架依赖 node 和 webpack。

## 安装和使用

vue-cli 是 npm 上的一个全局包，使用 npm install 命令，安装 cli

```bash
npm install -g @vue/cli
```

基于 vue-cli 快速生成工程化的 Vue 项目：

```bash
vue create 项目的名称
```

- `vue ui`以图形化界面创建和管理项目，导入项目即可使用

- ESlint：检测代码规范
- unit test：单元测试
- e2e test：e2e 测试，end to end，安装 Nightwatch，进行自动化测试的工具

## vuecli 目录解析

- public 文件夹：相当于 cli2 对 static 目录,index.html
- .browserslistrc：浏览器相关支持情况
- assets 文件夹：存放项目中用到的静态资源文件，例如：css 样式表、图片资源
- components 文件夹：程序员封装的、可复用的组件，都要放到 components 目录下
- main.js 是项目的入口文件。整个项目的运行，要先执行 main.js
- App.vue 是项目的根组件。
- .editorconfig：项目文本相关配置
- .eslintignore：代码规范忽略文件配置
- .gitignore：git 仓库忽略文件配置
- .postcssrc.js：CSS 相关转化配置
- .babel.config.js：ES 代码相关转化配置

## vuecli 修改配置

Vue3.x 脚手架隐藏了所有 webpack 相关的配置，若想查看具体的配置可以执行

- `vue inspect > output.js` 只能查看，不能修改

修改配置的方法：

1. vuecli3.x 的很多相关配置被隐藏，使用 vue ui 即可使用图形化管理配置
2. 在 node_modules 文件夹下的@vue 文件夹中可以找到隐藏的配置
3. 自己创建 vue.config.js 文件，module.exports = {}自定义配置文件
4. 另外，在用户下找到.vuerc 可删除修改一些保存的配置

## runtime-compiler 和 runtime-only

Vue 程序的运行流程；

1. 写出 template（模板）
2. parse（解析）成 ast（抽象语法树）abstract syntax tree
3. compile（编译）成 render 函数
4. vDom（虚拟 dom）
5. ui（真实 dom）

- runtime-compiler 解析步骤：template->ast->render->vDom->ui
- runtime-only 解析步骤：render->vDom->ui(性能更好，代码更少)

render 函数中的 h 是 createElement 函数，createElement('标签','{标签属性}',['标签中的内容'])

render 函数可以直接传入组件，`render:createElement => createElement(App)`

使用 runtime-only 版本时，.vue 文件的 template 由 vue-template-compiler 直接编译成 render 函数

```vue
new Vue({ render: h => h(App), }).$mount('#app') //相当于 new Vue({ el: '#app', render: h => h(App), })
```

**浏览器无法解析.vue 文件，通过 vue-template-compiler 将 vue 文件转换成 js 文件**。

## vue 项目的运行流程

通过**main.js 把 App.vue 渲染到 index.html**的指定区域中。

- **App.vue** 用来编写待渲染的**模板结构**
- **index.html** 中需要预留一个 **el 区域**
- main.js 把 **App.vue** 渲染到了 **index.html** 所预留的区域中

## components 和 views 文件夹

- 两个文件夹都是用来方组件的
- 如果每个组件是通**过路由来切换的**，就放在**views 里面**
- **不使用路由**切换，**可复用**的组件，放在**components 里面**
