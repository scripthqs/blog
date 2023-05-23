import{_ as e,o as i,c as l,f as a}from"./app-68a897fb.js";const t={},c=a(`<h1 id="create-react-app" tabindex="-1"><a class="header-anchor" href="#create-react-app" aria-hidden="true">#</a> create-react-app</h1><p>create-react-app 是 React 的脚手架，可以生成一个通用的目录结构，并且已经将所需的工程环境配置好。</p><ul><li>和 vue/cli 一样，使用 node 编写的，并且基于 webpack 的；</li><li>需要安装 node 环境</li></ul><p>注意项目名称不能包含大写字母</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>create-react-app 项目名称
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="打包工具" tabindex="-1"><a class="header-anchor" href="#打包工具" aria-hidden="true">#</a> 打包工具</h2><p>React 脚手架默认是基于 Webpack 来开发的。</p><ul><li>但是在目录结构中默认是看不到与 webpack 相关的内容</li><li>和 Vue CLI3 一样，React 的脚手架将 webpack 相关的配置隐藏起来了</li></ul><p>如果想要看到</p><blockquote><p>执行 package.json 文件的脚本<code>&quot;eject&quot;:&quot;rect-script-eject&quot;</code></p></blockquote><p>但是这个操作是不可逆的，执行过程中会有提示</p><h2 id="目录解构分析" tabindex="-1"><a class="header-anchor" href="#目录解构分析" aria-hidden="true">#</a> 目录解构分析</h2><ul><li>public <ul><li>favicon.ico -- 应用程序顶部 icon 图标</li><li>index.html -- 应用的 index.html 入口文件</li><li>logo192.png -- 在 manifest.json 中被使用</li><li>logo512.png -- 在 manifest.json 中被使用</li><li>manifest.json -- 与 web app 配置相关</li><li>robots.text -- 指定搜索引擎可以或者不可以爬取那些信息</li></ul></li><li>src <ul><li>App.css -- App 组件相关样式</li><li>App.js -- App 组件代码文件</li><li>App.test.js -- App 组件的测试代码文件</li><li>index.css -- 全局样式文件</li><li>index.js -- 整个应用程序的入口文件</li><li>logo.svg -- 启动项目时,所看到的 React 图标</li><li>reportWebVitals.js -- 默认帮我们写好的 注册 pwa 相关的代码</li><li>setupTests.js -- 测试初始文件</li></ul></li><li><strong>pwa 是什么?</strong> 全称 Progressive Web App，即渐进式 WEB 应用 <ul><li>一个 PWA 应用首先是一个网页, 可以通过 Web 技术编写出一个网页应用</li><li>随后添加上 App Manifest 和 Service Worker 来实现 PWA 的安装和离线等功能</li><li>这种 Web 存在的形式，我们也称之为是 Web App</li><li>pwa 可以将网页添加至主屏幕，点击主屏幕图标可以实现启动动画以及隐藏地址栏</li><li>pwa 实现离线缓存功能，即使用户手机没有网络，依然可以使用一些离线功能</li><li>pwa 实现了消息推送</li></ul></li></ul>`,13),p=[c];function s(r,o){return i(),l("div",null,p)}const d=e(t,[["render",s],["__file","03_create_react_app.html.vue"]]);export{d as default};
