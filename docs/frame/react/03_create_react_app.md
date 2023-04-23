# create-react-app

create-react-app 是 React 的脚手架，可以生成一个通用的目录结构，并且已经将所需的工程环境配置好。

- 和 vue/cli 一样，使用 node 编写的，并且基于 webpack 的；
- 需要安装 node 环境

注意项目名称不能包含大写字母

```shell
create-react-app 项目名称
```

## 打包工具

React 脚手架默认是基于 Webpack 来开发的。

- 但是在目录结构中默认是看不到与 webpack 相关的内容
- 和 Vue CLI3 一样，React 的脚手架将 webpack 相关的配置隐藏起来了

如果想要看到

> 执行 package.json 文件的脚本`"eject":"rect-script-eject"`

但是这个操作是不可逆的，执行过程中会有提示

## 目录解构分析

- public
  - favicon.ico -- 应用程序顶部 icon 图标
  - index.html -- 应用的 index.html 入口文件
  - logo192.png -- 在 manifest.json 中被使用
  - logo512.png -- 在 manifest.json 中被使用
  - manifest.json -- 与 web app 配置相关
  - robots.text -- 指定搜索引擎可以或者不可以爬取那些信息
- src
  - App.css -- App 组件相关样式
  - App.js -- App 组件代码文件
  - App.test.js -- App 组件的测试代码文件
  - index.css -- 全局样式文件
  - index.js -- 整个应用程序的入口文件
  - logo.svg -- 启动项目时,所看到的 React 图标
  - reportWebVitals.js -- 默认帮我们写好的 注册 pwa 相关的代码
  - setupTests.js -- 测试初始文件
- **pwa 是什么?** 全称 Progressive Web App，即渐进式 WEB 应用
  - 一个 PWA 应用首先是一个网页, 可以通过 Web 技术编写出一个网页应用
  - 随后添加上 App Manifest 和 Service Worker 来实现 PWA 的安装和离线等功能
  - 这种 Web 存在的形式，我们也称之为是 Web App
  - pwa 可以将网页添加至主屏幕，点击主屏幕图标可以实现启动动画以及隐藏地址栏
  - pwa 实现离线缓存功能，即使用户手机没有网络，依然可以使用一些离线功能
  - pwa 实现了消息推送
