(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{548:function(s,n,a){"use strict";a.r(n);var e=a(50),t=Object(e.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"npm使用介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#npm使用介绍"}},[s._v("#")]),s._v(" NPM使用介绍")]),s._v(" "),a("h2",{attrs:{id:"_1-npm简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-npm简介"}},[s._v("#")]),s._v(" 1.NPM简介")]),s._v(" "),a("p",[s._v("NPM（Node Package Manager）是随同Node.js一起安装的包管理工具，能解决NodeJS代码部署上的很多问题，常见的使用场景有以下几种；")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("允许用户从NPM服务器下载别人编写的第三方包到本地使用。")])]),s._v(" "),a("li",[a("p",[s._v("允许用户从NPM服务器下载并安装别人编写的命令行程序到本地使用。")])]),s._v(" "),a("li",[a("p",[s._v("允许用户将自己编写的包或命令行程序上传到NPM服务器供别人使用。")])]),s._v(" "),a("li",[a("p",[a("code",[s._v("npm -v")]),s._v(" 查看npm的版本，npm相当于手机的app应用商店。")])])]),s._v(" "),a("p",[s._v("由于 npm 默认的下载地址在国外（npmjs.com），有时候会被墙，导致无法下载或者下载很慢。因此，我们可以尝试切换成，从其他的镜像源下载 npm 包。")]),s._v(" "),a("p",[a("strong",[s._v("npm仓库地址：https://www.npmjs.com/")])]),s._v(" "),a("p",[s._v("除了npm以外还有yarn，功能和npm一样，也可以作为包管理工具，windows系统一般使用npm就可以了，另外还有npx（了解）。")]),s._v(" "),a("h2",{attrs:{id:"_2-npm源切换"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-npm源切换"}},[s._v("#")]),s._v(" 2.NPM源切换")]),s._v(" "),a("p",[s._v("源：源站，镜像源，镜像。通过 NRM 切换镜像源（推荐），让下载更快。")]),s._v(" "),a("p",[a("strong",[s._v("方法1：")])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("npm install -g cnpm --registry=https://registry.npm.taobao.org\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("blockquote",[a("p",[s._v("执行完毕上述命名后，在系统中提供了一个cnpm包管理工具，功能和npm一样，所不同的是cnpm镜像源地址为阿里提供的源地址。")])]),s._v(" "),a("p",[a("strong",[s._v("方法2：")])]),s._v(" "),a("p",[s._v("nrm 是一个 npm 源管理器，允许你快速地在 npm源间切换。npm默认情况下是使用npm官方源(npm config list 来查看)，如果直接修改npm源，如果后续需要连接到官方源才能工作，这样来回切换源就变得麻烦了，nrm通过简单的命令就可以解决此问题。")]),s._v(" "),a("ul",[a("li",[s._v("NRM：Node Registry Manager。作用是：切换和管理 npm 包的镜像源。")]),s._v(" "),a("li",[a("code",[s._v("npm i -g nrm")]),s._v("安装 NRM")]),s._v(" "),a("li",[a("code",[s._v("nrm ls")]),s._v("显示全部的镜像")]),s._v(" "),a("li",[a("code",[s._v("nrm use taobao")]),s._v(" 使用淘宝的镜像")])]),s._v(" "),a("blockquote",[a("p",[s._v("注：-g表示"),a("code",[s._v("global")]),s._v("全局，让nrm不限于到某一个项目中，而是在所有的项目中都可使用")])]),s._v(" "),a("p",[a("code",[s._v("nrm ls")]),s._v("显示全部的镜像报错"),a("code",[s._v("code: ERR_INVALID_ARG_TYPE")])]),s._v(" "),a("p",[s._v("解决方法:")]),s._v(" "),a("ul",[a("li",[s._v("打开"),a("code",[s._v("cli.js")]),s._v("第17行修改成")])]),s._v(" "),a("div",{staticClass:"language-text line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("//const NRMRC = path.join(process.env.HOME, '.nrmrc'); (删除)\nconst NRMRC = path.join(process.env[(process.platform == 'win32') ? 'USERPROFILE' : 'HOME'], '.nrmrc');\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("重启CMD生效。")]),s._v(" "),a("h2",{attrs:{id:"_3-npm相关命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-npm相关命令"}},[s._v("#")]),s._v(" 3.NPM相关命令")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# 搜索模块包 切换淘宝源后就不可以使用search\nnpm search\n# 初始化生成package.json文件（创建项目的）\nnpm init\nnpm init -y[不询问]\n# 查看本项目已安装模块\nnpm list\n# 安装模块\nnpm install(简写i)\n# 自动下载依赖所需的包\nnpm install(简写i)\n# 卸载已安装模块\nnpm uninstall 模块名\n# 查看全局node_modules的地址\nnpm root -g\n# 删除\nnpm remove(简写r)\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br")])]),a("p",[s._v("安装参数：")]),s._v(" "),a("ul",[a("li",[s._v("--save -S     记录生产环境所需模块 默认")]),s._v(" "),a("li",[s._v("--save-dev -D 记录开发环境所需模块")]),s._v(" "),a("li",[s._v("-g 安装到全局")])]),s._v(" "),a("p",[s._v("生产环境：代码已经上线了的运行环境")]),s._v(" "),a("p",[s._v("开发环境：开发人员在开发的时候环境")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# 安装包并添加到依赖中，重要，主要使用这一条\nnpm install 包名 --save\n# 全局安装包，一般都是一些工具\nnpm install 包名 -g\n# 查看全局node安装路径\nnpm root -g\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("通过npm安装的包都放在node_modules文件夹中，直接通过包名引入即可")]),s._v(" "),a("h2",{attrs:{id:"_4-语义化版本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-语义化版本"}},[s._v("#")]),s._v(" 4.语义化版本")]),s._v(" "),a("p",[s._v("版本格式：主版本号，次版本号，修订号，先行版本号")]),s._v(" "),a("ul",[a("li",[s._v("主版本号：当做了不兼容的api修改时")]),s._v(" "),a("li",[s._v("次版本号：当作了向下兼容的功能性新增")]),s._v(" "),a("li",[s._v("修订号：日常bug修改")]),s._v(" "),a("li",[s._v("先行版本号：作为延伸")])]),s._v(" "),a("ol",[a("li",[a("code",[s._v("~")]),s._v("：表示版本号只能改变最末尾那一段")]),s._v(" "),a("li",[a("code",[s._v("^")]),s._v("：表示除了大版本号以外，小版本号和补丁版本号都可以改变")])]),s._v(" "),a("p",[s._v("0开头的版本号有特殊情况。")]),s._v(" "),a("p",[s._v("软件版本发行的四个阶段：")]),s._v(" "),a("ol",[a("li",[s._v("alpha：内测版本")]),s._v(" "),a("li",[s._v("beta：公测版本")]),s._v(" "),a("li",[s._v("rekease candidate：RC，候选版本，功能已经确定，主要时排bug")]),s._v(" "),a("li",[s._v("release：正式发行版本")])]),s._v(" "),a("p",[s._v("下载软件不要只看版本号，还要看阶段。")]),s._v(" "),a("h2",{attrs:{id:"_5-自定义npm命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-自定义npm命令"}},[s._v("#")]),s._v(" 5.自定义npm命令")]),s._v(" "),a("p",[s._v("目的：npm允许我们执行npm调用三方模块，由于通过npm调用三方模块的指令写起来不方便，但是有需要频繁使用，因此我们可以自定义命令进行简化（别名）。在package.json文件中的script下，使用"),a("code",[s._v("npm run 自定义命令")]),s._v("，在webpack和vue中会经常使用。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('{\n  "scripts": {\n    "test": "echo hello"\n  }\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("随后就可以在命令行中运行（npm run "),a("code",[s._v("自定义指令名称")]),s._v("）：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("npm run test\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"_6-自动重启应用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-自动重启应用"}},[s._v("#")]),s._v(" 6.自动重启应用")]),s._v(" "),a("p",[s._v("每次修改服务端得代码时，都需要重新运行node xx.js才能运行，安装nodemon自动重启工具可以自动运行服务端代码。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# 全局安装nodemon\nnpm i -g nodemon\n\n# 执行node脚本\nnodemon app.js\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("应用非常广泛，框架也是这样的应用。")])])}),[],!1,null,null,null);n.default=t.exports}}]);