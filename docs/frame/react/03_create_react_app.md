# create-react-app

create-react-app 是 React 的脚手架，可以生成一个通用的目录结构，并且已经将所需的工程环境配置好。

- 和 vue/cli 一样，使用 node 编写的，并且基于 webpack 的；
- 需要安装 node 环境

注意项目名称不能包含大写字母

```shell
create-react-app 项目名称
```

## PWA 概念

PWA 全称 Progressive Web App，渐进式 WEB 应用。

- 一个 PWA 应用首先是一个网页，可以通过 Web 技术编写一个网页应用
- 添加上 App Manifest 和 Service Worker 来实现 PWA 的安装和离线等功能
- 这种 Web 存在的形式，称为 Web App

PWA 的好处

- 可以添加至主屏幕，点击主屏幕图标可以实现启动动画和隐藏地址栏
- 实现离线缓存功能，即使用户手机没有网络，依然可以使用部分功能
- 实现了消息推送

## 打包工具

React 脚手架默认是基于 Webpack 来开发的。

- 但是在目录结构中默认是看不到与 webpack 相关的内容
- 和 Vue CLI3 一样，React 的脚手架将 webpack 相关的配置隐藏起来了

如果想要看到

> 执行 package.json 文件的脚本`"eject":"rect-script-eject"`

但是这个操作是不可逆的，执行过程中会有提示
