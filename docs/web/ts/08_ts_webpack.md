# webpack 构建 ts

通常情况下，实际开发中我们都需要使用构建工具对代码进行打包，TS 同样也可以结合构建工具一起使用，结合构建工具 webpack 使用 ts

## 初始化项目

进入项目根目录，执行命令

```bash
npm init -y
```

主要作用：初始化，创建 package.json 文件

## 下载构建工具

```bash
npm i -D webpack webpack-cli webpack-dev-server typescript ts-loader clean-webpack-plugin
```

共安装了 7 个包:

- webpack：构建工具 webpack
- webpack-cli：webpack 的命令行工具
- webpack-dev-server：webpack 的开发服务器
- typescript：ts 编译器
- ts-loader：ts 加载器，用于在 webpack 中编译 ts 文件
- html-webpack-plugin：webpack 中 html 插件，用来自动创建 html 文件
- clean-webpack-plugin：webpack 中的清除插件，每次构建都会先清除目录

## 配置 webpack.config.js

根目录下创建 webpack 的配置文件 webpack.config.js

```js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    // environment: {
    //   arrowFunction: false, // 关闭webpack的箭头函数，可选
    // },
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: {
          loader: "ts-loader",
        },
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./index.html",
      title: "Ts test",
    }),
  ],
  devtool: "inline-source-map",
  devServer: {
    // contentBase: "./dist",
  },
  optimization: {
    minimize: false, // 关闭代码压缩，可选
  },
};
```

## 配置 tsconfig.json

根目录下创建 tsconfig.json，配置可以根据自己需要，一般不用改

```json
{
  "compilerOptions": {
    "target": "ES2015",
    "module": "ES2015",
    "strict": true
  }
}
```

### 修改 package.json

```json
{
  // ...略...
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack",
    "start": "webpack serve --open chrome.exe"
  }
  // ...略...
}
```

### 创建 ts 文件

在 src 下创建 ts 文件，并在并命令行执行`npm run build`对代码进行编译，或者执行`npm start`来启动开发服务器

## Babel

经过一系列的配置，使得 TS 和 webpack 已经结合到了一起，除了 webpack，开发中还经常需要结合 babel 来对代码进行转换以使其可以兼容到更多的浏览器，在上述步骤的基础上，通过以下步骤再将 babel 引入到项目中。

### 安装依赖包

```bash
npm i -D @babel/core @babel/preset-env babel-loader core-js
```

共安装了 4 个包，分别是：

- @babel/core：babel 的核心工具
- @babel/preset-env：babel 的预定义环境
- @babel-loader：babel 在 webpack 中的加载器
- core-js：core-js 用来使老版本的浏览器支持新版 ES 语法

### 修改 webpack.config.js

```js
// ...略...
module: {
  rules: [
    {
      test: /\.ts$/,
      use: [
        {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/preset-env",
                {
                  targets: {
                    chrome: "58",
                    ie: "11",
                  },
                  corejs: "3",
                  useBuiltIns: "usage",
                },
              ],
            ],
          },
        },
        {
          loader: "ts-loader",
        },
      ],
      exclude: /node_modules/,
    },
  ];
}
// ...略...
```

配置完成后，使用 ts 编译后的文件将会再次被 babel 处理，使得代码可以在大部分浏览器中直接使用，可以在配置选项的 targets 中指定要兼容的浏览器版本。
