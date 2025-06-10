# Loader

## loader 概述

在实际开发过程中，webpack 默认只能打包处理以 .js 后缀名结尾的模块。其他**非 .js 后缀名结尾的模块**， webpack 默认处理不了，**需要调用 loader 加载器才可以正常打包**，否则会报错！

例如，当我们需要处理加载 css，图片，高级的 ES6，TS，less，.vue 等等文件时，就需要使用 loader

loader 加载器的作用：**协助 webpack 打包处理特定的文件模块**

- css-loader 可以打包处理 .css 相关的文件
- less-loader 可以打包处理 .less 相关的文件
- babel-loader 可以打包处理 webpack 无法处理的高级 JS 语

注意：在 webpack，一切都是模块，需要在 index.js 中通过 import 来引入各种文件，**不需要在 index.html 中引入**

```js
//index.js
import "./css/index.css";
```

ES6 标准发布后，module 成为标准，标准使用是以 export 指令导出接口，以 import 引入模块。但是在我们一贯的 node 模块中，我们依然采用的是 CommonJS 规范，使用 require 引入模块，使用 module.exports 导出接口。

## 打包处理 css 文件

1. **运行命令**，安装处理 css 文件的 loader

   ```bash
   npm i css-loader style-loader -D #安装最新版
   npm i style-loader@3.0.0 css-loader@5.2.6 -D
   ```

   > **注意**：可以直接安装最新版，但是不同的版本可能会报各种莫名其妙的错误，做好准备。-D(--save-dev)表示本地需要

2. 在 webpack.config.js 的 module -> rules 数组中，**添加 loader 规则**如下

   ```js
   module.exports = {
     module: {
       rules: [
         {
           test: /\.css$/,
           use: ["style-loader", "css-loader"],
         },
       ],
     },
   };
   ```

   其中，test 表示匹配的文件类型， use 表示对应要调用的 loader

   注意：

   - use 数组中指定的 loader 顺序是固定的
   - 多个 loader 的调用顺序是：从后往前调用

## 打包处理 less 文件

1. 运行命令，安装处理 less 文件的 loader

   ```bash
   npm i less-loader less -D//安装最新版本
   npm i less-loader@10.0.1 less@4.1.1 -D //安装指定版本
   ```

   注意：**不同版本匹配很可能报错**

2. 在 webpack.config.js 的 module -> rules 数组中，**添加 loader 规则**如下

   ```js
   module.exports = {
     module: {
       rules: [
         {
           test: /\.less$/,
           use: ["style-loader", "css-loader", "less-loader"],
         },
       ],
     },
   };
   ```

## postCSS 工具

- PostCSS 是一个通过 JavaScript 来转换样式的工具
- 这个工具可以帮助我们进行一些 CSS 的转换和适配，比如自动添加浏览器前缀、css 样式的重置
- 但是实现这些功能，我们需要借助于 PostCSS 对应的插件

使用 PostCSS

1. 查找 PostCSS 在构建工具中的扩展，比如 webpack 中的 postcss-loader
2. 选择可以添加你需要的 PostCSS 相关的插件

```bash
npm install postcss-loader -D
```

需要添加前缀，所以要安装 autoprefixer

```bash
npm install autoprefixer -D
```

```js
// postcss 需要有对应的插件才会起效果，所以我们需要配置它的 plugin
{
  loader: "postcss-loader",
  options: {
    postcssOptions: {
      plugins: [
        "autoprefixer"
      ]
    }
  }
}
```

postcss-preset-env 也是一个 postcss 的插件，它可以帮助我们将一些现代的 CSS 特性，转成大多数浏览器认识的 CSS，并且会根据目标浏览器或者运行时环境添加所需的 polyfill，也包括会自动帮助我们添加 autoprefixer（所以相当于已经内置了 autoprefixer）

```bash
npm install postcss-preset-env -D
```

```js
// postcss.config.js
module.exports = {
  plugins: ["postcss-preset-env"],
};
```

## 打包处理图片资源

在项目中使用图片，比较常见的使用图片的方式是两种

- img 元素，设置 src 属性
- 其他元素（比如 div），设置 background-image 的 css 属性

**base 图片适用于小图标，不用发送 ajax 网络请求，大图用 url。**转换成后 base64 后，占用内存变大。

图片资源属于与 url 路径相关的文件。

1. 运行 命令，安装处理 url 文件的 loader

   ```bash
   npm i --save-dev url-loader file-loader
   npm i url-loader@4.1.1 file-loader@6.2.0 -D
   ```

2. 在 webpack.config.js 的 module -> rules 数组中，**添加 loader 规则**如下

   ```js
   module.exports = {
     module: {
       rules: [
         { test: /\.(png|jpg|gif)$/, use: 'url-loader?limit=8192' },
     }
   }
   ```

   其中 **?**之后的使 loader 的参数项

   - **如果需要调用的 loader 只有一个，则可以只传递一个字符串**
   - limit 用来指定图片的大小，单位是字节（byte）
   - 只有 ≤ limit 大小的图片，才会被转为 base64 格式的图片

## 打包处理 js 文件中的高级语法

webpack 只能打包处理**一部分**高级的 JavaScript 语法。对于那些 webpack 无法处理的高级 js 语法，需要借 助于 **babel-loader** 进行打包处理。例如 webpack 无法处理下面的 JavaScript 代码

1. **运行命令**，安装 babel-loader

   > webpack 3.x | babel-loader 8.x | babel 7.x

   ```bash
   npm install babel-loader@8.0.0-beta.0 @babel/core @babel/preset-env webpack
   npm i babel-loader@8.2.2 @babel/core@7.14.6 @babel/plugin-proposal-decorators@7.14.5 -D
   ```

2. **添加 loader 规则**

   ```js
   module: {
     rules: [{ test: /\.js$/, use: "babel-loader", exclude: /node_modules/ }];
   }
   ```

3. 配置 babel-loader，在项目根目录下，具体情况要看使用了哪些 babel-loader 插件，创建名为 **babel.config.js**配置文件，比如使用组件库 element-ui 时，就需要配置 如下：

   ```js
   module.exports = {
     presets: ["@vue/cli-plugin-babel/preset", ["@babel/preset-env", { modules: false }]],
     plugins: [
       [
         "component",
         {
           libraryName: "element-ui",
           styleLibraryName: "theme-chalk",
         },
       ],
     ],
   };
   ```

## 总结

webpack 的 loader 配置

```js
{
  //loader
  module:{
    rules:{
      test:"/",//匹配的文件类型
      use:'',//指定用哪个loader
      options:{}//配置loader
    }
  }
}
```
