# NodeJS 简介

相关网址：

- <https://nodejs.org/zh-cn/>
- <http://nodejs.cn/>

Node.js 是一个开源与跨平台的`JavaScript`运行时环境。它是在浏览器外运行，它是一个事件驱动异步 I/O 单进程的**服务端**JS 环境，基于 Google 的 V8 引擎，V8 引擎执行 Javascript 的速度非常快，性能非常好。它使用新的 ECMAScript 标准，不必等待所有用户更新其浏览器，可以通过更改其版本来决定要使用新的标准特性。

js 运行环境

- 浏览器：最常见的环境
- 服务器环境: Node 项目就是服务器环境

注意：

- 浏览器是 JS 的前端运行环境。
- Node.js 是 JS 的后端运行环境，在后端中运行无法调用 **DOM 和 BOM 等浏览器内置 API。**
- nodejs 调用服务查看服务器相关基础 node 环境
- 在 Node.js 中可以进行一些额外的操作，比如文件系统读/写、网络 IO、加密、压缩解压文件等操作

浏览器环境提供的额外 API 可以分成三大类：

- 浏览器控制类：操作浏览器
- DOM 类 API：操作网页的各种元素
- Web 类：实现互联网的各种功能

服务器环境主要提供操作系统的 API，包括

- 文件操作 API
- 网络通信 API

## Node.js 运行环境的核心

Node.js 运行环境的核心是 V8 引擎和 libuv 库。

- V8 引擎：编译和执行 JS 代码、管理内存、垃圾回收。V8 给 JS 提供了运行环境，可以说是 JS 的虚拟机。
- libuv：是一个专注于异步 I/O 的跨平台类库，目前主要在 Node.js 上使用。提供事件循环、文件系统读写、网络 IO、线程池等等内容

V8 的内存限制：在一般的后端开发语言中，在基本的内存使用上没有什么限制，然而在 Node 中通过 JavaScript 使用内存时就会发现只能使用部分内存（64 位系统下约为 1.4GB，32 位系统下约为 0.7GB）。在这样的限制下，将会导致 Node 无法直接操作大内存对象。

## NodeJS 应用场景

1. 目前前端开发的库都是以 node 包的形式进行管理
2. npm、yarn、pnpm 工具成为前端开发使用最多的工具
3. 使用 Node.js 作为 web 服务器开发、中间件、代理服务
4. 借助 Node.js 完成前后端渲染的同构应用
5. 为项目编写脚本工具，用 js 编写脚本
6. 在使用 Electron 来开发桌面应用程序

具体的讲：

BFF 中间层

- 服务于前端的后端（Backend For Frontend）
- 让前端有能力自由组装后台数据
- 前端开发者能够自主决定与后台的通讯方式
- 安全性更高（不会把主服务器暴露在外面）、降低主服务器的复杂度

服务端渲染

- SSR / Server Side Render
- 服务器返回的不是接口数据，而是一整个页面（或整个楼层）的 HTML 字符串，浏览器直接显示即可
- 在服务器端直接就渲染好了，然后一次性打包返回给前端。
- 优点是有利于 SEO、首屏渲染很快

做小型服务、小型网站的后端（基于 Express、Koa 框架）

- 有些公司的后台管理系统，是用 Node.js 来开发接口
- 后台管理系统对性能和并发的要求不是太高

做项目构建工具

- 前端正在广泛使用的构建工具 gulp、Webpack，就是基于 Node.js 来实现的

做 PC 端的软件（基于 Electron 框架）

- Electron 是 Node.js 在 PC 客户端的技术。
- 代码编辑器 VSCode 软件，就是用 JS 语言实现的。

简单概括：

- 创建应用服务
- web 开发（后端）
- 接口开发（小程序）
- 客户端应用工具 gulp、webpack、vue 脚手架、react 脚手架、小程序

## NodeJS 安装

nodejs 环境安装非常便捷，直接可通过官网地址，下载对应的安装软件包即可安装使用。

> 注：`尽量下载长期支持版本(LTS，有些软件是Release)`，如果在工作中有多个 node 环境的切换，可以安装 node 环境管理工具 NVM：<https://github.com/coreybutler/nvm-windows/releases>
>
> nvm 可以让你的电脑中有 N 多个 node 版本。
>
> node8 A 项目 B 项目 node9 C 项目 node10

### 通过 Node.js 安装包（不推荐）

- 注意一定要选择偶数版本，因为奇数版不稳定。
- 如果需要选择其他的版本，重新下载新的安装包，覆盖安装。
- 覆盖旧版本后，以前版本安装的全局工具包，要重新安装。
- 无法在多个版本之间切换

### 通过 NVM 安装（推荐）

github 地址：`https://github.com/coreybutler/nvm-windows/releases`

- NVM：node.js version manager，用来管理 node 的版本。
- 先在 github 上安装 NVM，然后通过 NVM 安装 Node.js。
  - nvm-noinstall.zip：绿色免安装版，但使用时需进行配置。
  - nvm-setup.zip：安装版，推荐使用
- 安装时，选择 NVM 和 Node.js 快捷方式的安装路径
- 打开 CMD 命令行，输入`nvm`可以看到里面列出了各种命令
- `nvm -v`，查看已安装的 nvm 版本。
- `nvm ls`查看本地安装的 node 所有版本
- `node -v`，查看正在使用的 node 版本。

安装 Node.js

- `nvm install 14.16.1`安装，命令中的版本号可自定义
- `nvm use 14.16.1`使用特定版本
- `nvm uninstall 14.16.1`卸载指定版本
- `nvm install latest` 安装最新的 node 版本

如果 Node 安装失败，可以在安装路径中找到的 settings.txt 文件中，新增如下两行，修改镜像源：

```js
node_mirror: https://npm.taobao.org/mirrors/node/
npm_mirror: https://npm.taobao.org/mirrors/npm/
```

```bash
nvm version
nvm -v
nvm list
nvm ls
```

## 执行 node 程序

正常情况下执行一个 node 程序，直接跟上我们对应的文件即可

```js
// 简单执行index.js
node index.js
// 执行 index.js 并传递参数
node index.js env=development abcd
```

传递的 node 的参数在 process 的内置对象中，其中的 argv 属性，是一个数组，里面包含了我们需要的参数

```js
// node ./webpack.config.js env=development abcd
const arg1 = process.argv[2];
const arg2 = process.argv[3];

console.log(arg1, arg2);
```
