(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{518:function(s,t,a){"use strict";a.r(t);var n=a(50),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"ref-引用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ref-引用"}},[s._v("#")]),s._v(" ref 引用")]),s._v(" "),a("p",[s._v("ref 用来辅助开发者在"),a("strong",[s._v("不依赖于 jQuery 的情况下")]),s._v("，获取 DOM 元素或组件的引用。")]),s._v(" "),a("p",[s._v("每个 vue 的组件实例上，都包含一个 "),a("strong",[s._v("$refs 对象")]),s._v("，里面存储着对应的 DOM 元素或组件的引用。默认情况下， "),a("strong",[s._v("组件的 $refs 指向一个空对象")])]),s._v(" "),a("h2",{attrs:{id:"_1-使用-ref-引用-dom-元素"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-使用-ref-引用-dom-元素"}},[s._v("#")]),s._v(" 1 使用 ref 引用 DOM 元素")]),s._v(" "),a("p",[s._v("使用 ref 引用 DOM 元素")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('<h1 ref="aaa">App根组件</h1>\n<button @click="showThis">打印</button>\nmethods: {\n    showThis () {\n      console.log(this)\n      console.log(this.$refs.aaa)\n      this.$refs.aaa.style.color = \'red\'\n    }\n  }\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("h2",{attrs:{id:"_2-使用-ref-引用组件实例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-使用-ref-引用组件实例"}},[s._v("#")]),s._v(" 2 使用 ref 引用组件实例")]),s._v(" "),a("p",[s._v("给组件的标签上添加ref属性，父组件就可以使用子组件的方法和值，")]),s._v(" "),a("div",{staticClass:"language-vue line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-vue"}},[a("code",[s._v(" "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("left")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("ref")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("comLeft"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("left")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n     resetLeft () {\n      this.$refs.comLeft\n    }\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h2",{attrs:{id:"_3-this-nexttick-cb"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-this-nexttick-cb"}},[s._v("#")]),s._v(" 3 this.$nextTick(cb)")]),s._v(" "),a("p",[s._v("通过布尔值 inputVisible 来控制组件中的文本框与按钮的按需切换")]),s._v(" "),a("p",[s._v("当文本框展示出来之后，如果希望它立即获得焦点，则可以为其添加 ref 引用，并调用原生 DOM 对象的 .focus() 方法")]),s._v(" "),a("p",[s._v("组件的 $nextTick(cb) 方法，会把 cb 回调推迟到下一个 DOM 更新周期之后执行。通俗的理解是："),a("strong",[s._v("等组件的 DOM 更新完成之后，再执行 cb 回调函数。从而能保证 cb 回调函数可以操作到最新的 DOM 元素")])]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("$nextTick")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("$refs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("inputRef"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("$refs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("inputRef"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("focus")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);