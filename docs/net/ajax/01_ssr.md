# 前端数据请求

前端数据请求主要有两种：前后端分离和服务端渲染，早期的网页基本都是服务端渲染。

## 服务端渲染

服务端渲染：早期的网页都是后端渲染来完成的，这种方式叫做服务端渲染(SSR,server side render)。

- 客户端发出请求->服务器接收请求并返回响应的 HTML 文档->页面刷新，客户端加载新的 HTML 文档

服务器渲染的优点：

- 更快的响应时间，不用等待所有的 js 加载完成，也能显示比较完整的页面
- 更好的 SEO，可以将 SEO 的关键信息直接在后台渲染成 html，保证了搜索引擎能够爬到关键的数据
- 无需占用客户端资源，解析模板交给后端工作，对客户端的资源占用更少

服务端渲染的缺点：

- 占用服务器资源，只是一个小小的页面改动，都需要请求一次完整的 html 页面
- 一些常见的 API 需要对运行环境判断再使用

## 前后端分离

前后端分离：ajax 是一种实现无页面刷新获取服务器数据的技术。主要的两个特性：

1. 在不重新加载页面的情况下发送请求给服务器
2. 接受并使用从服务器发来的数据

前后端分离的优点：

- 前端可以专注 ui 界面的开发，后端专注 api 的开发，职责单一
- 体验更好

前后端分离的缺点：

- 第一次响应内容较慢，不如服务端渲染快
- 不利于 SEO 优化，只是记录一个页面，对于 SEO 较差
