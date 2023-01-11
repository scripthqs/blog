(window.webpackJsonp=window.webpackJsonp||[]).push([[118],{581:function(t,s,e){"use strict";e.r(s);var r=e(21),o=Object(r.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"node-模块化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#node-模块化"}},[t._v("#")]),t._v(" Node 模块化")]),t._v(" "),e("h2",{attrs:{id:"_1-node-模块的定义"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-node-模块的定义"}},[t._v("#")]),t._v(" 1.node 模块的定义")]),t._v(" "),e("p",[t._v("在 node 中，一个 js 文件就是一个模块。")]),t._v(" "),e("p",[e("strong",[t._v("ES6")]),t._v("标准发布后，"),e("strong",[t._v("module 成为标准")]),t._v("，标准使用是以"),e("strong",[t._v("export 指令导出")]),t._v("接口，以"),e("strong",[t._v("import 引入")]),t._v("模块。")]),t._v(" "),e("p",[e("strong",[t._v("但是在我们一贯的 node 模块")]),t._v("中，我们依然采用的是"),e("strong",[t._v("CommonJS 规范")]),t._v("，使用"),e("strong",[t._v("module.exports 导出")]),t._v("接口，使用"),e("strong",[t._v("require 引入")]),t._v("模块，")]),t._v(" "),e("h2",{attrs:{id:"_2-如何使用-node-模块"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-如何使用-node-模块"}},[t._v("#")]),t._v(" 2.如何使用 node 模块")]),t._v(" "),e("ul",[e("li",[t._v("通过 require()函数引入外部的模块，传递一个文件的路径作为参数，node 将会自动根据该路径来引入外部模块")]),t._v(" "),e("li",[t._v("如果使用相对路径，必须以.或..开头")]),t._v(" "),e("li",[t._v("使用 require()引入模块后，该函数会返回一个对象，这个对象代表的是引入的模块")]),t._v(" "),e("li",[t._v("在 node 中，每一个文件中的 js 代码独立运行在一个函数中，一个模块中给的变量，其他模块不能直接访问")]),t._v(" "),e("li",[t._v("需要通过 exports 或者 module.exports 向外部暴露变量和方法，需要将暴露的变量和方法设置为 exports 的属性")])]),t._v(" "),e("h2",{attrs:{id:"_3-exports-和-module-exports-的区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-exports-和-module-exports-的区别"}},[t._v("#")]),t._v(" 3.exports 和 module.exports 的区别")]),t._v(" "),e("p",[e("strong",[t._v("require 方能看到的只有 module.exports 这个对象，它是看不到 exports 对象的，而我们在编写模块时用到的 exports 对象实际上只是对 module.exports 的引用。")])]),t._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("console"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("exports "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" module"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//true")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("ul",[e("li",[t._v("通过 exports 只能使用.的方式来向外暴露内部变量")]),t._v(" "),e("li",[t._v("module.exports 既可以使用.的形式，也可以直接赋值")])]),t._v(" "),e("h2",{attrs:{id:"_4-node-模块的分类"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-node-模块的分类"}},[t._v("#")]),t._v(" 4.node 模块的分类")]),t._v(" "),e("p",[t._v("模块分为三大类：")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("核心模块")]),t._v("：由 node 引擎提供，核心模块的标识就是模块的名字")]),t._v(" "),e("li",[e("strong",[t._v("文件模块")]),t._v("：由用户自己创建的模块，文件模块的标识就是文件的路径，相对路径必须以.或..开头")]),t._v(" "),e("li",[t._v("自定义模块：开发者自己编写")])])])}),[],!1,null,null,null);s.default=o.exports}}]);