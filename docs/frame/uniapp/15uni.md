# uni-ui 组件

uni-ui不包括基础组件，**它是基础组件的补充**。[uni-ui文档](https://uniapp.dcloud.io/component/README?id=uniui)

- uni-ui 支持 HBuilderX 直接新建项目模板、npm 安装和单独导入个别组件等多种使用方式

## 1 uni-ui

在HBuilderX 新建uni-app项目的模板中，选择uni-ui模板

- 在代码区键入`u`，拉出各种内置或 uni-ui 的组件列表，选择其中一个，即可使用该组件。

## 2 uni_modules

通过 uni_modules 单独安装需要的某个组件，点击每个组件在详情页面可以导入组件到项目下，导入后直接使用即可，无需import和注册。

## 3 npm 安装

在 `vue-cli` 项目中可以使用 `npm` 安装 `uni-ui` 库 ，或者直接在 `HBuilderX` 项目中使用 `npm` 。

> **注意** cli 项目默认是不编译 `node_modules` 下的组件的，导致条件编译等功能失效 ，导致组件异常 需要在根目录创建 `vue.config.js` 文件 ，增加 `@dcloudio/uni-ui` 包的编译即可正常
>
> ```javascript
> // vue.config.js
> module.exports = {
>         transpileDependencies:['@dcloudio/uni-ui']
> }
> ```
