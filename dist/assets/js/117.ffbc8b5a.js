(window.webpackJsonp=window.webpackJsonp||[]).push([[117],{576:function(s,t,a){"use strict";a.r(t);var n=a(21),r=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"路由简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#路由简介"}},[s._v("#")]),s._v(" 路由简介")]),s._v(" "),a("h2",{attrs:{id:"什么是路由"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是路由"}},[s._v("#")]),s._v(" 什么是路由")]),s._v(" "),a("p",[s._v("路由（router）就是"),a("strong",[s._v("对应关系")])]),s._v(" "),a("h2",{attrs:{id:"spa"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#spa"}},[s._v("#")]),s._v(" SPA")]),s._v(" "),a("p",[s._v("SPA 指的是一个 web 网站只有"),a("strong",[s._v("唯一的一个 HTML 页面")]),s._v("，"),a("strong",[s._v("所有组件的展示与切换")]),s._v("都在这唯一的一个页面内完成。 此时，"),a("strong",[s._v("不同组件之间的切换")]),s._v("需要通过"),a("strong",[s._v("前端路由")]),s._v("来实现。")]),s._v(" "),a("p",[s._v("结论：在 SPA 项目中，"),a("strong",[s._v("不同功能之间的切换")]),s._v("，要依赖于前端路由来完成")]),s._v(" "),a("h2",{attrs:{id:"前端路由"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前端路由"}},[s._v("#")]),s._v(" 前端路由")]),s._v(" "),a("p",[a("strong",[s._v("Hash 地址")]),s._v("（即#锚链接）与组件之间的"),a("strong",[s._v("对应关系")]),s._v("。")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("location"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("hash "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"xxx"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("使用路由改变 url 保持"),a("strong",[s._v("页面不刷新")])]),s._v(" "),a("p",[s._v("前端路由的工作方式:")]),s._v(" "),a("ol",[a("li",[s._v("用户"),a("strong",[s._v("点击")]),s._v("了页面上的"),a("strong",[s._v("路由链接")])]),s._v(" "),a("li",[s._v("导致了 "),a("strong",[s._v("URL 地址栏")]),s._v("中的 "),a("strong",[s._v("Hash 值")]),s._v("发生了变化")]),s._v(" "),a("li",[s._v("前端路由"),a("strong",[s._v("监听")]),s._v("了到 Hash 地址的"),a("strong",[s._v("变化")])]),s._v(" "),a("li",[s._v("前端路由把当前 "),a("strong",[s._v("Hash 地址对应的组件")]),s._v("渲染都浏览器中")])]),s._v(" "),a("h2",{attrs:{id:"实现简易的前端路由"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实现简易的前端路由"}},[s._v("#")]),s._v(" 实现简易的前端路由")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("通过 "),a("code",[s._v("<component>")]),s._v("标签，结合"),a("code",[s._v("comName")]),s._v(" 动态渲染组件")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("component "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("is"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'comName'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("component"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("data")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    comName"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Left'")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("在 App.vue 组件中，为 "),a("code",[s._v("<a>")]),s._v("链接添加对应的 "),a("strong",[s._v("hash 值")])]),s._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("a")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("href")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("#/Left"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("Left"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("a")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("a")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("href")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("#/Right"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("Right"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("a")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("在 created 生命周期函数中，监听浏览器地址栏中 "),a("strong",[s._v("hash 地址的变化")]),s._v("，动态切换要展示的组件的名称")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("created")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("onhashchange")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("switch")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("location"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("hash"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("case")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'#/Left'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("comName "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Left'")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("break")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("case")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'#/Right'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("comName "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Right'")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("break")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])])])])])}),[],!1,null,null,null);t.default=r.exports}}]);