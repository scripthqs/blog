import{_ as a,o as n,c as e,f as i}from"./app-f790074e.js";const s={},l=i(`<h1 id="node-相关知识" tabindex="-1"><a class="header-anchor" href="#node-相关知识" aria-hidden="true">#</a> Node 相关知识</h1><h2 id="api-概念" tabindex="-1"><a class="header-anchor" href="#api-概念" aria-hidden="true">#</a> API 概念</h2><p>JavaScript 本身不提供任何与 I/O（输入/输出）相关的 API，都要靠宿主环境（host）提供，所以 JavaScript 只适合嵌入更大型的应用程序环境，去调用宿主环境提供的底层 API。</p><h3 id="javascript-宿主环境" tabindex="-1"><a class="header-anchor" href="#javascript-宿主环境" aria-hidden="true">#</a> JavaScript 宿主环境</h3><ul><li>浏览器：最常见的环境</li><li>服务器环境: Node 项目就是服务器环境</li></ul><p>各种宿主环境提供额外的 API（即只能在该环境使用的接口），以便 JavaScript 调用。</p><h3 id="api-类型" tabindex="-1"><a class="header-anchor" href="#api-类型" aria-hidden="true">#</a> API 类型</h3><p>应用程序接口（Application Programming Interface），简称 API，是基于编程语言构建的结构，使开发人员更容易地创建复杂的功能。</p><p>API 抽象了复杂的代码，并提供一些简单的接口规则可以直接使用。</p><p>在 Web 开发中，API 通常是开发者能用在应用（app）中的一系列代码特性（如 方法、属性 、事件和 URL），这些特性被用于与用户的 web 浏览器中的组件、用户电脑上的其他软硬件或者第三方软件与服务交互。</p><ul><li><code>getUserMedia API</code> 能被用于从用户的摄像头采集音视频</li><li><code>Geolocation API</code> 能被用于从用户的可用的任意定位设备（如 GPS）获取位置信息</li><li><code>Web Animations API</code> 能被用于制作一个网页中的动画，例如让网页中的图片移动或旋转</li></ul><p>浏览器环境提供的额外 API 可以分成三大类：</p><ul><li>浏览器控制类：操作浏览器</li><li>DOM 类 API：操作网页的各种元素</li><li>Web 类：实现互联网的各种功能</li></ul><p>服务器环境主要提供操作系统的 API，包括</p><ul><li>文件操作 API</li><li>网络通信 API</li></ul><p><strong>浏览器 API</strong>内置于 Web 浏览器中，能从浏览器环境中提取数据，并用来做有用的复杂的事情。</p><p><strong>第三方 API</strong>一般情况下不会内置于浏览器中，通常在第三方程序中。</p><h3 id="api-作用" tabindex="-1"><a class="header-anchor" href="#api-作用" aria-hidden="true">#</a> API 作用</h3><ul><li>用来操控网站所基于的浏览器与操作系统的不同方面，或是操控由其他网站或服务端传来的数据</li><li>操作文档 <ul><li>在制作 Web 页面和 APP 时，我们就是使用 DOM 提供的 API 来控制的 HTML 和样式信息，</li></ul></li><li>从服务器获取数据 允许网页直接处理对服务器上可用的特定资源的 HTTP 请求，并在显示之前根据需要对结果数据进行格式化。称为<code>Ajax</code>技术。</li><li>绘制图形</li><li>视频和音频 API</li><li>客户端存储</li></ul><h2 id="node-全局变量" tabindex="-1"><a class="header-anchor" href="#node-全局变量" aria-hidden="true">#</a> Node 全局变量</h2><p>在 node 中有一个全局对象 global，它的作用和网页中的 window 类似，里面包括了的 process、console、setTimeout</p><ul><li>在全局中创建的变量会作为 global 的属性保存</li><li>在全局中创建的函数会作为 global 的方法保存</li></ul><p>当 node 在执行模块中的代码时，他会首先在代码的最顶部，添加如下代码</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>    <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">exports<span class="token punctuation">,</span>require<span class="token punctuation">,</span>module<span class="token punctuation">,</span>__filename<span class="token punctuation">,</span>__dirname</span><span class="token punctuation">)</span><span class="token punctuation">{</span>

    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>实际中模块中的代码都是包装在一个函数中执行的，并且在函数执行时，同时传递了 5 个实参</p><ul><li>exports：该对象将变量和函数暴露在外面</li><li>require：函数，用来引入外部的模块</li><li>module：module 代表是当前模块的本身，exports 就是 module 的属性，既可以使用 exports 导出，也可以使用 module.exports</li><li><code>__filename</code>：当前文件的完整路径</li><li><code>__dirname</code>：当前文件夹的完整路径</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>global<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>__filename<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="常见的全局对象" tabindex="-1"><a class="header-anchor" href="#常见的全局对象" aria-hidden="true">#</a> 常见的全局对象</h3><p>process 对象</p><ul><li>提供了 Node 进程中相关的信息</li><li>如 Node 的运行环境、参数信息等</li></ul><p>console 对象</p><ul><li>提供了简单的调试控制台</li></ul><p>定时器函数</p><ul><li>setTimeout</li><li>setInterval</li><li>setImmediate</li><li>process.nextTick</li></ul><h2 id="package-包" tabindex="-1"><a class="header-anchor" href="#package-包" aria-hidden="true">#</a> package 包</h2><p>CommonJS 的包规范将一组相关的模块组合在一起，形成一组完整的工具，CommonJS 的包规范又包结构和包描述文件两部分组成。</p><ul><li>包结构：用于组织包中的各种文件</li><li>包描述文件：描述包的相关信息，以供外部读取分析</li></ul><p>包实际就是一个压缩文件，解压以后还原为目录。符合规范的目录，应该包含以下文件：</p><ul><li>package.json：描述文件（必须的）</li><li>bin：存放可执行二进制文件的目录</li><li>lib：存放 js 代码的目录</li><li>doc：存放文档的目录</li><li>test：单元测试</li></ul><p>.json 文件不能写注释，package.json 文件可以自定义脚本</p><p>使用</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>可以创建 package.json 文件</p>`,43),o=[l];function p(t,c){return n(),e("div",null,o)}const u=a(s,[["render",p],["__file","03_node_api.html.vue"]]);export{u as default};