(window.webpackJsonp=window.webpackJsonp||[]).push([[208],{680:function(v,_,t){"use strict";t.r(_);var e=t(21),s=Object(e.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h1",{attrs:{id:"单位"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#单位"}},[v._v("#")]),v._v(" 单位")]),v._v(" "),t("p",[v._v("html 的单位只有像素 px 一种，可以省略不写。CSS 没有没有单位，"),t("strong",[v._v("所以必须要写")]),v._v("。")]),v._v(" "),t("h2",{attrs:{id:"_1-像素-px"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-像素-px"}},[v._v("#")]),v._v(" 1.像素 px")]),v._v(" "),t("p",[v._v("像素 px 是一个相对单位，常说的分辨率 1920*1080 就是屏幕的上的小点。")]),v._v(" "),t("p",[v._v("水平方向是 1920 个像素点，垂直方向是 1080 个像素点。不同屏幕的像素大小是不同的。")]),v._v(" "),t("p",[v._v("在前端开发中，像素要分两种情况讨论，css 像素和物理像素。")]),v._v(" "),t("ul",[t("li",[v._v("屏幕的小点属于物理像素。")]),v._v(" "),t("li",[v._v("编写网页时写的 width 和 height 是 css 像素")]),v._v(" "),t("li",[v._v("浏览器编写网页时，需要将 css 像素转换成物理像素再呈现。")]),v._v(" "),t("li",[v._v("1 个 css 像素最终由几个物理像素显示由浏览器决定")]),v._v(" "),t("li",[v._v("默认情况下，在 PC 端，1 个 css 像素=1 个物理像素。")]),v._v(" "),t("li",[v._v("视口（viewport）就是屏幕中显示网页的区域，position：fixed 就是根据视口定位")]),v._v(" "),t("li",[v._v("可以通过查看视口的大小来观察 css 像素和物理像素的比值。")])]),v._v(" "),t("h2",{attrs:{id:"_2-百分比"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-百分比"}},[v._v("#")]),v._v(" 2.百分比 %")]),v._v(" "),t("p",[v._v("% 百分比也是一个相对单位，不同属性的百分比相对的参照值不一样。")]),v._v(" "),t("ol",[t("li",[t("p",[v._v("对于普通定位元素就是我们理解的父元素")])]),v._v(" "),t("li",[t("p",[v._v("font-size 相对于父元素的 font-size 来计算，如果父元素（以及它的祖先元素）未显式设置"),t("code",[v._v("font-size")]),v._v("值的话，将会以浏览器的默认值"),t("code",[v._v("16px")]),v._v("为基准。")])]),v._v(" "),t("li",[t("p",[t("code",[v._v("line-height")]),v._v("取值为"),t("code",[v._v("%")]),v._v("时，它的计算方式是基于元素自身的"),t("code",[v._v("font-size")]),v._v("的值来计算。如果元素自身未显式设置"),t("code",[v._v("font-size")]),v._v("，则会基于元素继承过来的"),t("code",[v._v("font-size")]),v._v("的值计算")])])]),v._v(" "),t("h2",{attrs:{id:"_3-em"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-em"}},[v._v("#")]),v._v(" 3.em")]),v._v(" "),t("p",[v._v("em 是相对于父元素的字体大小来计算的，具有继承的特点。如果自身定义了 font-size 按自身来计算（浏览器默认字体是 16px），整个页面内 1em 不是一个固定的值。")]),v._v(" "),t("ul",[t("li",[v._v("1em = 1font-size")]),v._v(" "),t("li",[v._v("em 会根据字体的大小改变而改变")])]),v._v(" "),t("h2",{attrs:{id:"_4-rem"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-rem"}},[v._v("#")]),v._v(" 4.rem")]),v._v(" "),t("p",[v._v("rem 是相对于根元素的字体大小来计算的")]),v._v(" "),t("ul",[t("li",[v._v("1rem = html 根元素的 1 font-size")])]),v._v(" "),t("h2",{attrs:{id:"_5-vw"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-vw"}},[v._v("#")]),v._v(" 5.vw")]),v._v(" "),t("p",[v._v("viewpoint width 的缩写，视窗宽度，1vw 等于视窗宽度的 1%")]),v._v(" "),t("p",[v._v("浏览器宽度 1200px, 1 vw = 1200px/100 = 12 px。")]),v._v(" "),t("h2",{attrs:{id:"_6-vh"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-vh"}},[v._v("#")]),v._v(" 6.vh")]),v._v(" "),t("p",[v._v("viewpoint height 的缩写，视窗高度，1vh 等于视窗高度的 1%。")]),v._v(" "),t("p",[v._v("浏览器高度 900px, 1 vh = 900px/100 = 9 px。")]),v._v(" "),t("h2",{attrs:{id:"_7-vm"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-vm"}},[v._v("#")]),v._v(" 7.vm")]),v._v(" "),t("p",[v._v("相对于视口的宽度或高度中较小的那个。其中最小的那个被均分为 100 单位的 vm")]),v._v(" "),t("p",[v._v("浏览器高度 900px，宽度 1200px，取最小的浏览器高度， 1 vm = 900px/100 = 9 px。")]),v._v(" "),t("p",[v._v("但是 vm 的兼容性较差，使用较少")])])}),[],!1,null,null,null);_.default=s.exports}}]);