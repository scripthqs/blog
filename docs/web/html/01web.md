# Web、网页、浏览器

## web、网页、浏览器简介

- Web (World Wide Web)，全球广域网，又称万维网。我们常说的 web 端就是网页端
- **网页是构成网站的基本元素**。网页一般由文字、图片、超链接等组成。
- 浏览器是网页运行的平台。谷歌浏览器（chrome），Edge 浏览器，火狐浏览器等等。

## 浏览器引擎

浏览器是网页显示、运行的平台。2021 年份额占用较多的浏览器：谷歌（chrome）、微软的（Microsoft Edge）、火狐（Firefox）、safari 和 opera 等。浏览器分为渲染引擎（浏览器内核）和 JS 引擎。

### 渲染引擎

浏览器内核就是渲染引擎，根据 css 渲染不同的样式。渲染引擎是浏览器出现兼容性问题的根本原因。

- chrome（谷歌)和 edge(微软)内核是 Blink
- firefox(火狐) 的内核是 Gecko
- Safari(苹果) 的内核是 Webkit
- Opera 的内核开始是 Presto，后面也换成 Blink
- IE 的内核是 Trident

国内的 360、搜狗、百度、UC 等浏览器用的 Trident+Webkit/Blink 双核

Blink 其实是 Webkit 内核的分支，所以其实差不多。

### JS 引擎

JS 引擎又称为 JS 解释器，用来解析网页中的 JavaScript 代码（转化成机器语言），再由计算机执行。常用的谷歌浏览器的 js 引擎是 V8 引擎。

## Web 标准

Web 标准是指定网页的规范。W3C 是万维网联盟组织，是制定 Web 标准的机构。

1、Web 标准包括 3 个方面

- 结构标准（HTML）
- 表现标准（CSS）
- 行为标准（JS）

2、Web 前端分为 3 层

- HTML(HyperText Markup Language):超文本标记语言，注重语义。
- CSS(Cascading Style Sheets):层叠样式表
- JS(JavaScript):脚本语言
