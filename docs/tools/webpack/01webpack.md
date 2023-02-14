# webpack 简介

## 1.webpack 概述

官方解答：Webpack 是一个现代的 JavaScript 应用的静态**模块打包**工具

1. ES6 之前必须借助其他工具让我们进行模块化开发。
2. Webpack 核心就是帮助我们解决模块化开发，并且会帮助我们处理模块间的依赖关系。
3. 不仅仅是 JS 文件，CSS，图片，json 文件等等在 webpack 中都可以被当作模块来使用。

## 2.grunt/gulp

grunt/gulp 也是前端的构建工具，核心是 Task，即流程自动化

- 配置一系列 task，并且定义 task 要处理的事务（例如 ES6，ts 转化，图片压缩，scss 转换成 css）
- 让 grunt/gulp 来依次执行这些 task，而且让整个流程自动化
- 所以 grunt/gulp 也称为前端自动化任务管理工具

什么时候使用 grunt/gulp？

- 工程模块依赖非常简单，甚至没有用到模块化的概念
- 只需要进行简单的合并，压缩
- 整个项目使用了模块化管理，而且依赖性非常强，就可以使用 webpack

## 3.webpack 和 node

Webpack 要正常运行，必须依赖 node 环境，node 环境为了可以正常执行很多代码，必须包含各种依赖的包，npm（node packages manager）工具就是专门管理各种包的工具

打包流程：

- 入口 main.js(index.js)
- 模块->chunk
- 打包->bundle

webpack 将所有得资源文件（js/json/css/img/less...）都会作为模块处理，它会根据模块的依赖关系进行静态分析，打包生成对应的静态资源（bundle）
