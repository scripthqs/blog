# 修改 webpack 默认配置

## webpack.config.js

`webpack.config.js` 是 webpack 的配置文件。webpack 在真正开始打包构建之前，**会先读取这个配置文件**， 从而基于给定的配置，对项目进行打包。

注意：由于 webpack 是**基于 node.js 开发出来的打包工具**，因此在它的配置文件中，**支持使用 node.js 相关 的语法和模块**进行 webpack 的个性化配置

## webpack 的默认配置

在 webpack 4.x 和 5.x 的版本中，有如下的默认约定：

1. 默认的打包入口文件为 src -> index.js

2. 默认的输出文件路径为 dist -> main.js

注意：**可以在 webpack.config.js 中修改打包的默认约定**，如果没有按照规定取名，打包也会出错

## 自定义打包的入口与出口

在`webpack.config.js`中配置

```js
const path = require("path"); // node 内置核心模块，用来处理路径问题

module.exports = {
  entry: path.join(_dirname, "./src/index.js"), // 入口文件
  output: {
    // 输出配置
    filename: "bundle.js", // 输出文件名
    path: path.join(__dirname, "./dist"), // 输出文件路径配置
  },
  mode: "development", //开发环境
};
```

### 内置模块 path

path 模块用于对路径和文件进行处理，提供了很多好用的方法

- dirname：获取文件的父文件夹
- basename：获取文件名
- extname：获取文件扩展名

路径的拼接：path.join

- 如果我们希望将多个路径进行拼接，但是不同的操作系统可能使用的是不同的分隔符
- 这个时候我们可以使用 path.join 函数；

拼接绝对路径：path.resolve

- path.resolve() 方法会把一个路径或路径片段的序列解析为一个绝对路径
- 给定的路径的序列是从右往左被处理的，后面每个 path 被依次解析，直到构造完成一个绝对路径
- 如果在处理完所有给定 path 的段之后，还没有生成绝对路径，则使用当前工作目录
- 生成的路径被规范化并删除尾部斜杠，零长度 path 段被忽略
- 如果没有 path 传递段，path.resolve()将返回当前工作目录的绝对路径

```js
const path = require("path");

module.exports = {
  entry: "./src/main.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./build"),
  },
};
```
