# webpack 五个核心概念

## 1.Entry 入口

指示 webpack 以哪个文件作为入口起点开始打包，分析构建内部依赖图

## 2.Output 输出

指示 webpack 打包后的资源 bundles 输入到哪里区，以及如何命名

## 3.Loader 翻译

让 webpack 能够处理那些非 JavaScript 文件，webpack 本身只能理解 JavaScript。

## 4.Plugins 插件

可以用于执行范围更广的任务，插件的范围包括打包优化，压缩，重新定义环境中的变量等等

## 5.Mode 模式

指示 webpack 使用相应模式的配置，开发模式（development）和生产模式（production）。

mode=development

- 开发环境
- **不会**对打包生成的文件进行**代码压缩**和性能优化
- 打包**速度快**，适合在**开发阶段**使用

mode=production

- 生产环境
- 会对打包生成的文件进行**代码压缩**和**性能优化**
- 打包**速度很慢**，仅适合在项目发布阶段使用

开发中，使用 development，因为，追求打包的速度，而不是体积。

```
npm run dev
```

6.什么时候用 Loader 和 Plugins

- webpack 能够编译打包 js 和 json 文件。
- 能将 es6 的模块化语法转换成浏览器能识别的语法。
- 能压缩代码。
- 不能编译打包 css、img 等文件。
- 不能将 js 的 es6 基本语法转化为 es5 以下语法。

出现以上情况时，就需要使用 Loader 和 Plugins
