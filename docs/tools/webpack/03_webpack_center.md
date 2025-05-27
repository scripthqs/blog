# webpack 核心概念

## Entry 入口

指示 webpack 以哪个文件作为入口起点开始打包，分析构建内部依赖图

## Output 输出

指示 webpack 打包后的资源 bundles 输入到哪里区，以及如何命名

## Loader 翻译

让 webpack 能够处理那些非 JavaScript 文件，webpack 本身只能理解 JavaScript。

## Plugins 插件

可以用于执行范围更广的任务，插件的范围包括打包优化，压缩，重新定义环境中的变量等等

## Mode 模式

指示 webpack 使用相应模式的配置，开发模式（development）和生产模式（production）。默认是 production

mode=development

- 开发环境
- **不会**对打包生成的文件进行**代码压缩**和性能优化
- 打包**速度快**，适合在**开发阶段**使用

mode=production

- 生产环境
- 会对打包生成的文件进行**代码压缩**和**性能优化**
- 打包**速度很慢**，仅适合在项目发布阶段使用

开发中，使用 development，因为，追求打包的速度，而不是体积。

```bash
npm run dev
```

## Chunk

Chunk 是 Webpack 打包过程中的代码块，是一个可执行的模块

## Module

Module 是 Webpack 中的模块，可以是 js、css、图片等各种资源文件

## Resolve

Resolve 用于解析模块路径，可以配置模块查找的规则(extensions)和路径别名(alias)。

extensions 是解析到文件时自动添加扩展名：

- 默认值是 ['.wasm', '.mjs', '.js', '.json']
- 所以如果我们代码中想要添加加载 .vue 或者 jsx 或者 ts 等文件时，我们必须自己写上扩展名

alias 可以配置别名：

- 特别是当我们项目的目录结构比较深的时候，或者一个文件的路径可能需要 ../../../这种路径片段
- 我们可以给某些常见的路径起一个别名

```js
const path = require("path");
module.exports = {
  configureWebpack: {
    resolve: {
      extensions: [".js", ".css", ".vue"], //配置这个参数后，导入文件时，可以省略后缀
      alias: {
        "@": path.resolve(__dirname, "src"),
        '@': path.join(__dirname,'./src/')//用@符号代替src文件夹
        vue$: "vue/dist/vue.esm.js",
      },
    },
  },
};
```

建议使用@符号表示 src 源代码目录，从外往里找，不要使用../从里往外找。

注意：起别名后，通过 import 引入的路径别名可以直接生效，src 引入的路径使用别名需要加`~`。

### path.join 和 path.resolve

1. join 是把各个 path 片段连接在一起， resolve 把'／'当成根目录

   ```js
   path.join("/a", "/b");
   // /a/b
   path.resolve("/a", "/b");
   // /b
   ```

2. resolve 在传入非/路径时，会自动加上当前目录形成一个绝对路径，而 join 仅仅用于路径拼接

   ```js
   // 当前路径为
   //User/test;
   path.join("a", "b", "..", "d");
   // a/d
   path.resolve("a", "b", "..", "d");
   // /Users/test/a/d
   ```

   可以看出 resolve 在传入的第一参数为非根路径时，会返回一个带当前目录路径的绝对路径。

## Optimization

Optimization 用于优化打包后的代码，包括代码压缩、tree shaking 等
