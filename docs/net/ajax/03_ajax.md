# Ajax 概述

## Ajax 简介

在浏览器中，我们可以在不刷新网页的情况下，通过 Ajax 获取一些新的内容。

Ajax 全称 Asynchronous Javascript And XML(异步的 JavaScript 和 XML)，Ajax 的核心是 js 对象：XMLHttpRequest。可以使用 JSON，XML，HTML 和 text 文本等格式发送和接收数据。

## XML 简介

- XML 可拓展标记语言，
- XML 被设计用来传输和存储数据
- XML 和 HTML 类似，不同的是 HTML 都是**预定义标签**，而 XML 中没有预定义标签，都是**自定义标签**。现在已经被 JSON 代替。

## Ajax 的特点

优点：

- 可以无需刷新网页而与服务器进行通信
- 可以根据用户事件来更新部分部分页面内容

缺点：

- 没有浏览历史，不能回退
- 存在跨越问题，同源
- SEO 不友好
