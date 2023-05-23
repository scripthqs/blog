<template><div><h1 id="webpack-简介" tabindex="-1"><a class="header-anchor" href="#webpack-简介" aria-hidden="true">#</a> webpack 简介</h1>
<h2 id="webpack-概述" tabindex="-1"><a class="header-anchor" href="#webpack-概述" aria-hidden="true">#</a> webpack 概述</h2>
<p>官方解答：Webpack 是一个现代的 JavaScript 应用的静态<strong>模块打包</strong>工具</p>
<ol>
<li>ES6 之前必须借助其他工具让我们进行模块化开发。</li>
<li>Webpack 核心就是帮助我们解决模块化开发，并且会帮助我们处理模块间的依赖关系。</li>
<li>不仅仅是 JS 文件，CSS，图片，json 文件等等在 webpack 中都可以被当作模块来使用。</li>
</ol>
<h2 id="grunt-gulp" tabindex="-1"><a class="header-anchor" href="#grunt-gulp" aria-hidden="true">#</a> grunt/gulp</h2>
<p>grunt/gulp 也是前端的构建工具，核心是 Task，即流程自动化</p>
<ul>
<li>配置一系列 task，并且定义 task 要处理的事务（例如 ES6，ts 转化，图片压缩，scss 转换成 css）</li>
<li>让 grunt/gulp 来依次执行这些 task，而且让整个流程自动化</li>
<li>所以 grunt/gulp 也称为前端自动化任务管理工具</li>
</ul>
<p>什么时候使用 grunt/gulp？</p>
<ul>
<li>工程模块依赖非常简单，甚至没有用到模块化的概念</li>
<li>只需要进行简单的合并，压缩</li>
<li>整个项目使用了模块化管理，而且依赖性非常强，就可以使用 webpack</li>
</ul>
<h2 id="webpack-和-node" tabindex="-1"><a class="header-anchor" href="#webpack-和-node" aria-hidden="true">#</a> webpack 和 node</h2>
<p>Webpack 要正常运行，必须依赖 node 环境，node 环境为了可以正常执行很多代码，必须包含各种依赖的包，npm（node packages manager）工具就是专门管理各种包的工具</p>
<p>打包流程：</p>
<ul>
<li>入口 main.js(index.js)</li>
<li>模块-&gt;chunk</li>
<li>打包-&gt;bundle</li>
</ul>
<p>webpack 将所有得资源文件（js/json/css/img/less...）都会作为模块处理，它会根据模块的依赖关系进行静态分析，打包生成对应的静态资源（bundle）</p>
<h2 id="前端工程化" tabindex="-1"><a class="header-anchor" href="#前端工程化" aria-hidden="true">#</a> 前端工程化</h2>
<p>随着前端的发展，前端的开发已经变的越来越复杂</p>
<ul>
<li>开发过程中我们需要通过模块化的方式来开发</li>
<li>使用一些高级的特性来加快我们的开发效率或者安全性，比如通过 ES6+、TypeScript 开发脚本逻辑，通过 sass、
less 等方式来编写 css 样式代码</li>
<li>实时的监听文件的变化来并且反映到浏览器上，提高开发的效率</li>
<li>开发完成后将代码进行压缩、合并以及其他相关的优化</li>
</ul>
<p>实际开发中，通常都会直接使用三大框架来开发：Vue、React、Angular，在创建项目时，借助的脚手架 CLI 都是基于 webpack 开发的。具体的作用主要如下：</p>
<ol>
<li>JavaScript 的打包：
<ul>
<li>将 ES6 转换成 ES5 的语法；</li>
<li>TypeScript 的处理，将其转换成 JavaScript</li>
</ul>
</li>
<li>CSS 的处理：
<ul>
<li>CSS 文件模块的加载、提取</li>
<li>Less、Sass 等预处理器的处理</li>
</ul>
</li>
<li>资源文件 img、font：
<ul>
<li>图片 img 文件的加载</li>
<li>字体 font 文件的加载</li>
</ul>
</li>
<li>HTML 资源的处理：
<ul>
<li>打包 HTML 资源文件</li>
<li>处理 vue 项目的 SFC 文件.vue 文件</li>
</ul>
</li>
</ol>
</div></template>


