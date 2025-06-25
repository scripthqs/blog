# Plugin 插件

## plugin 简介

plugin 是插件的意思，通过安装和配置第三方的插件，**可以拓展 webpack 的能力**，从而让 webpack 用起来更方便。比如打包优化，文件压缩，环境变量注入等。

**loader 是用于转换某些类型的模块，是一个转换器，plugin 是 webpack 本身的拓展，是一个拓展器。**

常用的 webpack 插件有：

`webpack-dev-server`

- 类似于 node.js 阶段用到的 nodemon 工具
- 每当修改了源代码，webpack 会自动进行项目的打包和构建

`html-webpack-plugin`

- webpack 中的 HTML 插件（类似于一个模板引擎插件）
- 可以通过此插件自定制 index.html 页面的内容
- 对 index.html 进行打包处理,自动在 dist 文件夹中，生成了一个 index.html 的文件

`CleanWebpackPlugin`

- 每次修改了一些配置，重新打包时，帮助我们删除 dist 文件夹

`DefinePlugin`

- 允许在编译时创建配置的全局常量，是一个 webpack 内置的插件（不需要单独安装）
- 比如 process.env.NODE_ENV **判断当前环境是开发还是生产**

## webpack-dev-server

`webpack-dev-server` 可以让 webpack **监听项目源代码的变化**，从而进行**自动打包构建**

1. 安装插件

   ```bash
   npm install --save-dev webpack-dev-server//安装最新版本
   npm install webpack-dev-server@3.11.2 -D
   ```

2. 修改 **package.json -> scripts** 中的 dev 命令如下：

   ```js
   "scripts": {
   "dev": "webpack serve"//通过npm run 执行
   }
   ```

3. 再次运行 npm run dev 命令，重新进行项目的打包

4. 在浏览器中使用 80 端口，查看自动打包效果

5. ctrl+c 按两次就可以停掉

**打包生成的文件哪儿去了**：

不配置 webpack-dev-server 的情况下，webpack 打包生成的文件，会存放到实际的物理磁盘上

- 严格遵守开发者在 webpack.config.js 中指定配置

- 根据 output 节点指定路径进行存放

配置了 webpack-dev-server 之后，打包生成的文件存放到了内存中

- 不再根据 output 节点指定的路径，存放到实际的物理磁盘上

- 提高了实时打包输出的性能，因为内存比物理磁盘速度快很多

**生成到内存中的文件该如何访问？**

webpack-dev-server 生成到内存中的文件，默认放到了项目的根目录中，而且是虚拟的、不可见的。

- 可以直接用 `/` 表示项目根目录，后面跟上要访问的文件名称，即可访问内存中的文件
- 例如 `/bundle.js` 就表示要访问 `webpack-dev-server` 生成到内存中的 `bundle.js` 文件

## html-webpack-plugin

`html-webpack-plugin` 是 webpack 中的 HTML 插件，可以通过此插件自定制 index.html 页面的内容。

通过 html-webpack-plugin 插件，将 src 目录下的 index.html 首页，**复制到项目根目录中一份**

1. 安装 html-webpack-plugin

   ```bash
   npm install --save-dev html-webpack-plugin
   npm install html-webpack-plugin@5.3.2 -D
   ```

2. 在 webpack.config.js 中配置 html-webpack-plugin

   ```json
   const HtmlWebpackPlugin = require("html-webpack-plugin");
   const path = require("path");

   const htmlPlugin = new HtmlWebpackPlugin({
     template: "./src/index.html",
     filename: "./index.html",
   });
   module.exports = {
     entry: path.join(__dirname, "./src/index.js"),
     output: {
       path: path.join(__dirname, "dist"),
       filename: "bundle.js",
     },
     plugins: [htmlPlugin],
     mode: "development",
   };
   ```

注意：

- 通过 HTML 插件复制到项目根目录中的 index.html 页面，也被放到了内存中
- HTML 插件在生成的 index.html 页面，**自动注入了打包的 bundle.js 文件**

## devServer 节点

在 webpack.config.js 配置文件中，可以通过 devServer 节点对 webpack-dev-server 插件进行更多的配置，

```json
devServer: {
  open: true,//自动打开浏览器
  host: '127.0.0.1',
  port: 9999
}
```

注意：

- 凡是修改了 `webpack.config.js` 配置文件，或修改了 package.json 配置文件，必须重启实时打包的服务器，否则最新的配置文件无法生效。

- 80 端口在 http 协议中，可以省略。

## 手动编写 plugin

1. 单一职责
2. 生命周期钩子：compiler/compilation 必须是一个类，且实现 apply(compiler) 方法
3. 异步处理：注意返回 promise
4. 错误处理
