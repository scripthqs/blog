(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{524:function(_,t,v){"use strict";v.r(t);var r=v(50),e=Object(r.a)({},(function(){var _=this,t=_.$createElement,v=_._self._c||t;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("h1",{attrs:{id:"vue生命周期"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#vue生命周期"}},[_._v("#")]),_._v(" Vue生命周期")]),_._v(" "),v("h2",{attrs:{id:"_1-生命周期和生命周期函数"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-生命周期和生命周期函数"}},[_._v("#")]),_._v(" 1 生命周期和生命周期函数")]),_._v(" "),v("p",[v("strong",[_._v("生命周期")]),_._v("（Life Cycle）是指一个组件从"),v("strong",[_._v("创建 -> 运行 -> 销毁")]),_._v("的整个阶段，强调的是一个时间段。")]),_._v(" "),v("p",[v("strong",[_._v("生命周期函数")]),_._v("：是由 vue 框架提供的"),v("strong",[_._v("内置函数")]),_._v("，会伴随着组件的生命周期，"),v("strong",[_._v("自动按次序执行")])]),_._v(" "),v("p",[_._v("注意："),v("strong",[_._v("生命周期")]),_._v("强调的是"),v("strong",[_._v("时间段")]),_._v("，"),v("strong",[_._v("生命周期函数")]),_._v("强调的是"),v("strong",[_._v("时间点")]),_._v("。")]),_._v(" "),v("p",[v("code",[_._v("hook")]),_._v("钩子，生命周期函数又称为钩子函数。")]),_._v(" "),v("h2",{attrs:{id:"_2-组件生命周期函数的分类"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-组件生命周期函数的分类"}},[_._v("#")]),_._v(" 2  组件生命周期函数的分类")]),_._v(" "),v("p",[_._v("组件生命周期有3个阶段：")]),_._v(" "),v("p",[v("strong",[_._v("组件创建阶段：")])]),_._v(" "),v("ol",[v("li",[_._v("beforeCreate 创建前，")]),_._v(" "),v("li",[_._v("created 创建后")]),_._v(" "),v("li",[_._v("beforeMount 挂载前")]),_._v(" "),v("li",[_._v("mounted 挂载后")])]),_._v(" "),v("p",[v("strong",[_._v("组件运行阶段")])]),_._v(" "),v("ol",[v("li",[_._v("beforeUpdate 数据更新前")]),_._v(" "),v("li",[_._v("updated 数据更新后")])]),_._v(" "),v("p",[v("strong",[_._v("组件销毁阶段")])]),_._v(" "),v("ol",[v("li",[_._v("beforeDestroy 销毁前")]),_._v(" "),v("li",[_._v("destroyed 销毁后")])]),_._v(" "),v("h2",{attrs:{id:"_3-beforecreate"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-beforecreate"}},[_._v("#")]),_._v(" 3 beforeCreate")]),_._v(" "),v("ol",[v("li",[v("p",[_._v("初始化"),v("strong",[_._v("事件")]),_._v("和"),v("strong",[_._v("生命周期函数")])])]),_._v(" "),v("li",[v("p",[v("strong",[_._v("props/data/methods")]),_._v("尚未被创建，都处于"),v("strong",[_._v("不可用")]),_._v("的状态")])])]),_._v(" "),v("h2",{attrs:{id:"_4-created"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-created"}},[_._v("#")]),_._v(" 4 "),v("strong",[_._v("created")])]),_._v(" "),v("ol",[v("li",[_._v("初始化"),v("strong",[_._v("props/data/methods")])]),_._v(" "),v("li",[_._v("组件中的"),v("strong",[_._v("props/data/methods")]),_._v("已创建好，都处于"),v("strong",[_._v("可用")]),_._v("的状态，但是组件的"),v("strong",[_._v("模板结构尚未生成")]),_._v("，"),v("strong",[_._v("不能操作DOM")])])]),_._v(" "),v("p",[_._v("注意："),v("strong",[_._v("在开发中，这个函数中，可以发起ajax请求，获取数据")])]),_._v(" "),v("h2",{attrs:{id:"_5-beforemount"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_5-beforemount"}},[_._v("#")]),_._v(" 5 beforeMount")]),_._v(" "),v("p",[v("strong",[_._v("将要把")]),_._v("内存中编译好的"),v("strong",[_._v("HTML")]),_._v("结构"),v("strong",[_._v("渲染到")]),_._v("浏览器中，此时浏览器中"),v("strong",[_._v("还没有")]),_._v("当前组件的DOM结构。"),v("strong",[_._v("不能操作DOM")])]),_._v(" "),v("h2",{attrs:{id:"_6-mounted"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_6-mounted"}},[_._v("#")]),_._v(" 6 "),v("strong",[_._v("mounted")])]),_._v(" "),v("p",[_._v("已经把内存中的HTML结构，成功的渲染到浏览器中，此时浏览器的中"),v("strong",[_._v("已然包含")]),_._v("了当前组件的DOM结构，"),v("strong",[_._v("可以操作DOM")])]),_._v(" "),v("h2",{attrs:{id:"_7-beforeupdate"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_7-beforeupdate"}},[_._v("#")]),_._v(" 7 beforeUpdate")]),_._v(" "),v("p",[v("strong",[_._v("将要")]),_._v("根据变化之后，最新的数据，"),v("strong",[_._v("重新渲染")]),_._v("组件中的模板结构，")]),_._v(" "),v("p",[v("strong",[_._v("data数据是最新的，DOM结构还是旧的")])]),_._v(" "),v("h2",{attrs:{id:"_8-updated"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_8-updated"}},[_._v("#")]),_._v(" 8 updated")]),_._v(" "),v("p",[_._v("已经根据最新的数据，"),v("strong",[_._v("完成了")]),_._v("组件DOM结构的"),v("strong",[_._v("重新渲染")]),_._v("。")]),_._v(" "),v("p",[v("strong",[_._v("data数据是最新的，DOM结构也是最新的")])]),_._v(" "),v("h2",{attrs:{id:"_9-beforedestroy"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_9-beforedestroy"}},[_._v("#")]),_._v(" 9 beforeDestroy")]),_._v(" "),v("p",[v("strong",[_._v("将要销毁")]),_._v("此组件，此时"),v("strong",[_._v("尚未销毁")]),_._v("，组件还处于"),v("strong",[_._v("正常工作")]),_._v("的状态")]),_._v(" "),v("h2",{attrs:{id:"_10-destroyed"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_10-destroyed"}},[_._v("#")]),_._v(" 10 destroyed")]),_._v(" "),v("p",[_._v("组件已经被销毁，此组件在浏览器中对应的"),v("strong",[_._v("DOM结构")]),_._v("已经被"),v("strong",[_._v("完全移除")])])])}),[],!1,null,null,null);t.default=e.exports}}]);