# webpack 简介

## webpack 概述

官方解答：Webpack 是一个现代的 JavaScript 应用的静态**模块打包**工具

1. ES6 之前必须借助其他工具让我们进行模块化开发。
2. Webpack 核心就是帮助我们解决模块化开发，并且会帮助我们处理模块间的依赖关系。
3. 不仅仅是 JS 文件，CSS，图片，json 文件等等在 webpack 中都可以被当作模块来使用。

## grunt/gulp

grunt/gulp 也是前端的构建工具，核心是 Task，即流程自动化

- 配置一系列 task，并且定义 task 要处理的事务（例如 ES6，ts 转化，图片压缩，scss 转换成 css）
- 让 grunt/gulp 来依次执行这些 task，而且让整个流程自动化
- 所以 grunt/gulp 也称为前端自动化任务管理工具

什么时候使用 grunt/gulp？

- 工程模块依赖非常简单，甚至没有用到模块化的概念
- 只需要进行简单的合并，压缩
- 整个项目使用了模块化管理，而且依赖性非常强，就可以使用 webpack

## webpack 和 node

Webpack 要正常运行，必须依赖 node 环境，node 环境为了可以正常执行很多代码，必须包含各种依赖的包，npm（node packages manager）工具就是专门管理各种包的工具

打包流程：

- 入口 main.js(index.js)
- 模块->chunk
- 打包->bundle

webpack 将所有得资源文件（js/json/css/img/less...）都会作为模块处理，它会根据模块的依赖关系进行静态分析，打包生成对应的静态资源（bundle）

## 前端工程化

随着前端的发展，前端的开发已经变的越来越复杂

- 开发过程中我们需要通过模块化的方式来开发
- 使用一些高级的特性来加快我们的开发效率或者安全性，比如通过 ES6+、TypeScript 开发脚本逻辑，通过 sass、
  less 等方式来编写 css 样式代码
- 实时的监听文件的变化来并且反映到浏览器上，提高开发的效率
- 开发完成后将代码进行压缩、合并以及其他相关的优化

实际开发中，通常都会直接使用三大框架来开发：Vue、React、Angular，在创建项目时，借助的脚手架 CLI 都是基于 webpack 开发的。具体的作用主要如下：

1. JavaScript 的打包：
   - 将 ES6 转换成 ES5 的语法；
   - TypeScript 的处理，将其转换成 JavaScript
2. CSS 的处理：
   - CSS 文件模块的加载、提取
   - Less、Sass 等预处理器的处理
3. 资源文件 img、font：
   - 图片 img 文件的加载
   - 字体 font 文件的加载
4. HTML 资源的处理：
   - 打包 HTML 资源文件
   - 处理 vue 项目的 SFC 文件.vue 文件
