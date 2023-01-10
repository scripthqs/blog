# webpack 基本使用

## 1.准备工作

创建文件和文件夹：

- dist 文件夹：用于存放之后打包的文件
- src 文件夹：用于存放写的源文件
  - index.js：项目的入口文件
  - Moudle.js；定义模块工具函数，可以在其他地方引用
  - index.html：浏览器打开展示的首页 html
  - package.json：通过 npm init 生成的，npm 包管理文件，**取名时千万不能叫 webpack**

```bash
# 将`index.js`打包成`main.js`
webpack ./src/index.js ./dist/main.js
```

> 打包后 dist 文件夹下会生成一个 main.js 文件，只需要将这个 js 文件在 index.html 引入即可

## 2.安装 webpack

1.初始化 package.json，运行命令自动生成

```bash
npm init
npm init -y //一切默认，不用输入
```

2.下载并安装 webpack

```shell
npm install --save-dev webpack//最新版本
npm install --save-dev webpack@<version>//指定版本
npm install --save-dev webpack-cli
```

- -g：全局安装，**不推荐全局安装 webpack**
- -D：--save-dev 的简写，**开发和测试，本地环境**
- -S：--save 的简写， **生产环境，线上环境**

## 3.配置 webpack

1.新建文件`webpack.config.js`文件

2.在`webpack.config.js`中配置：

```shell
module.exports = {
  mode: "development", //开发环境
};
```

3.运行指令: webpack，相当于

```bash
webpack ./src/index.js ./dist/main.js -mode=development
```

**注意：本地安装的 webpack 不会自动添加到环境变量中，如果没有全局安装过 webpack，直接使用 webpack 命令就会报错。**

实际开发中，一般也不会直接使用 webpack 打包 js 文件，所以不推荐按全局安装，而是使用`npm run dev/bulid`

4.在**package.json**文件中的 scripts 节点下，配置

```shell
"scripts":{
 "dev": "webpack"//scripts下的节点，使用npm run执行
}
```

5.执行脚本，启动 webpack 进行项目的打包构建

```shell
npm run dev //mode=development，速度快，体积大
npm run build //mode=production，速度慢，体积小
```

开发中，使用 development，因为，追求打包的速度，而不是体积。

此时，会优先在本地中找 webpack，实际开发中，一般都会使用本地的 webpack

## 4.报错处理

**情况 1：**

在通过 vs code 运行 webpack 进行打包时，报错 webpack : 无法加载文件 D:\nodejs\node_global\webpack.ps1，因为在此系统上禁止运行脚本。解决方案：

- 以管理员身份运行 vscode
- 执行：get-ExecutionPolicy，显示 Restricted，表示状态是禁止的
- 执行：set-ExecutionPolicy RemoteSigned
- 这时再执行 get-ExecutionPolicy，就显示 RemoteSigned

- 全局安装`npm install webpack@<version> -g`

**情况 2：**

webpack 可能有些默认配置，违背有可能报错。

在 webpack 4.x 和 5.x 的版本中，有如下的默认约定：

```bash
① 默认的打包入口文件为 src -> index.js

② 默认的输出文件路径为 dist -> main.js
```

注意：**可以在 webpack.config.js 中修改打包的默认约定**，如果没有按照规定取名，打包也会出错
