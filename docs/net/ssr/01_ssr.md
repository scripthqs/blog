# SSR 服务端渲染

## SPA 、SSG、 SSR

SPA(Single Page Application)单页面应用

- 构建 SPA 应用常见的框架: React、Vue
- SPA 应用默认只返回一个空 HTML 页面，整个程序的内容是通过 js 动态加载是实现的
- 只需要第一次请求时加载页面，用户体验较好
- 但是不利于 SEO，首屏加载资源过多时，速度慢

SSG(Static Site Generate) 静态站点生成

- 构建 SSG 应用常见的库和框架: Vue Nuxt、 React Next.js
- 是预先生成好的静态网站
- 直接给浏览器返回静态的 HTML，也有利于 SEO
- 但是网站的内容需要更新了，那必须得重新再次构建和部署

SSR(Server Side Render)服务器端渲染

- 构建 SSR 应用常见的库和框架有： Vue Nuxt、 React Next.js 等
- 在服务器端渲染页面，并将渲染好 HTML 返回给浏览器呈现
- 利于 SEO，更快的首屏渲染速度
- 但是更消耗服务器资源，开发者需要注意代码运行环境，服务器端还是浏览器端

## 爬虫和 SEO

对于 google 爬虫来说，分为 3 个阶段

1. 爬取：爬虫(蜘蛛)根据自己的规则在互联网上发现各种网页
2. 索引编制：将获取的信息存储在大型数据库，根据内部算法，归类分组
3. 呈现结果：当用户搜索时，搜索引擎根据内容选择代表呈现

SEO 搜索引擎的优化：就是让网页符合爬虫的规则

- 语义化标签，`<h1>`、`<h6>`、`p`、、`a`、`header`
- 页面包含标题 `title` 和内部链接`a`
- meta 标签优化：设置 description、keywords
- 图片 img 添加 alt 属性，文本标记加粗`<strong>`
- robots.txt：规定爬虫可访问哪些网址
- sitemap.xml 站点地图

## SSR 实现方案

使用流行的框架

- React：Next.js
- Vue3: Nuxt3
- Vue2: Nuxt.js

## Nuxt 3

Nuxt3 是基于 Vue3 + Vue Router + Vite 等技术栈，全程 Vue3 + Vite 开发体验。

- 自动导包：会自动导入辅助函数、组合 API 和 Vue API ，无需手动导入
- 约定式路由：目录结构即路由，在 `pages/` 目录中创建的每个页面，都会根据目录结构和文件名来自动生成路由

```bash
npx nuxi init ssr-nuxt
```

### App.vue 入口文件

默认情况下，Nuxt 会将 App.vue 文件视为入口点：

- 定义页面布局 Layout 或 自定义布局，如：NuxtLayout
- 定义路由的占位，如：NuxtPage
- 编写全局样式
- 全局监听路由

### nuxt.config 配置文件

nuxt.config.ts 配置文件位于项目的根目录，可自定义配置

### nuxt3 内置组件

- SEO 组件： Html、Body、Head、Title、Meta、Style、Link、NoScript、Base
- NuxtLayout：是 Nuxt 自带的页面布局组件
- NuxtPage：是 Nuxt 自带的页面占位组件，是对 router-view 的封装
- ClientOnly：该组件中的默认插槽的内容只在客户端渲染，fallback 插槽的内容只在服务器端渲染
- NuxtLink：是 Nuxt 自带的页面导航组件

### 新建页面

- Nuxt 项目中的页面是在 pages 目录下创建的
- 在 pages 目录创建的页面，Nuxt 会根据该页面的目录结构和其文件名来自动生成对应的路由
