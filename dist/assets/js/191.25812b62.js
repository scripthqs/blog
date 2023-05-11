(window.webpackJsonp=window.webpackJsonp||[]).push([[191],{661:function(s,t,a){"use strict";a.r(t);var n=a(21),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"修改-webpack-默认配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修改-webpack-默认配置"}},[s._v("#")]),s._v(" 修改 webpack 默认配置")]),s._v(" "),a("h2",{attrs:{id:"webpack-config-js"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#webpack-config-js"}},[s._v("#")]),s._v(" webpack.config.js")]),s._v(" "),a("p",[a("code",[s._v("webpack.config.js")]),s._v(" 是 webpack 的配置文件。webpack 在真正开始打包构建之前，"),a("strong",[s._v("会先读取这个配置文件")]),s._v("， 从而基于给定的配置，对项目进行打包。")]),s._v(" "),a("p",[s._v("注意：由于 webpack 是"),a("strong",[s._v("基于 node.js 开发出来的打包工具")]),s._v("，因此在它的配置文件中，"),a("strong",[s._v("支持使用 node.js 相关 的语法和模块")]),s._v("进行 webpack 的个性化配置")]),s._v(" "),a("h2",{attrs:{id:"webpack-的默认配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#webpack-的默认配置"}},[s._v("#")]),s._v(" webpack 的默认配置")]),s._v(" "),a("p",[s._v("在 webpack 4.x 和 5.x 的版本中，有如下的默认约定：")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("默认的打包入口文件为 src -> index.js")])]),s._v(" "),a("li",[a("p",[s._v("默认的输出文件路径为 dist -> main.js")])])]),s._v(" "),a("p",[s._v("注意："),a("strong",[s._v("可以在 webpack.config.js 中修改打包的默认约定")]),s._v("，如果没有按照规定取名，打包也会出错")]),s._v(" "),a("h2",{attrs:{id:"自定义打包的入口与出口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自定义打包的入口与出口"}},[s._v("#")]),s._v(" 自定义打包的入口与出口")]),s._v(" "),a("p",[s._v("在"),a("code",[s._v("webpack.config.js")]),s._v("中配置")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" path "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"path"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// node 内置核心模块，用来处理路径问题")]),s._v("\n\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  entry"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("join")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("_dirname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./src/index.js"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 入口文件")]),s._v("\n  output"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 输出配置")]),s._v("\n    filename"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"bundle.js"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 输出文件名")]),s._v("\n    path"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("join")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("__dirname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./dist"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 输出文件路径配置")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  mode"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"development"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//开发环境")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("h3",{attrs:{id:"内置模块-path"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#内置模块-path"}},[s._v("#")]),s._v(" 内置模块 path")]),s._v(" "),a("p",[s._v("path 模块用于对路径和文件进行处理，提供了很多好用的方法")]),s._v(" "),a("ul",[a("li",[s._v("dirname：获取文件的父文件夹")]),s._v(" "),a("li",[s._v("basename：获取文件名")]),s._v(" "),a("li",[s._v("extname：获取文件扩展名")])]),s._v(" "),a("p",[s._v("路径的拼接：path.join")]),s._v(" "),a("ul",[a("li",[s._v("如果我们希望将多个路径进行拼接，但是不同的操作系统可能使用的是不同的分隔符")]),s._v(" "),a("li",[s._v("这个时候我们可以使用 path.join 函数；")])]),s._v(" "),a("p",[s._v("拼接绝对路径：path.resolve")]),s._v(" "),a("ul",[a("li",[s._v("path.resolve() 方法会把一个路径或路径片段的序列解析为一个绝对路径")]),s._v(" "),a("li",[s._v("给定的路径的序列是从右往左被处理的，后面每个 path 被依次解析，直到构造完成一个绝对路径")]),s._v(" "),a("li",[s._v("如果在处理完所有给定 path 的段之后，还没有生成绝对路径，则使用当前工作目录")]),s._v(" "),a("li",[s._v("生成的路径被规范化并删除尾部斜杠，零长度 path 段被忽略")]),s._v(" "),a("li",[s._v("如果没有 path 传递段，path.resolve()将返回当前工作目录的绝对路径")])]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" path "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"path"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  entry"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./src/main.js"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  output"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    filename"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"bundle.js"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    path"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("__dirname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./build"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);