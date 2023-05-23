<template><div><h1 id="浏览器原理" tabindex="-1"><a class="header-anchor" href="#浏览器原理" aria-hidden="true">#</a> 浏览器原理</h1>
<p>浏览器的网络线程收到 HTML 文档后，会产生一个渲染任务，将其传递给渲染主线程的消息队列。在事件循环机制的作用下，渲染主线程取出消息队列的渲染任务，开启渲染流程。</p>
<h2 id="浏览器渲染机制" tabindex="-1"><a class="header-anchor" href="#浏览器渲染机制" aria-hidden="true">#</a> 浏览器渲染机制</h2>
<p>浏览器渲染网页分为以下步骤：</p>
<ol>
<li>
<p>解析 HTML(parse HTML)</p>
<ul>
<li>默认情况下服务器会给浏览器返回 index.html 文件，解析 HTML 是所有步骤的开始</li>
<li>解析 HTML，会构建 DOM Tree</li>
</ul>
</li>
<li>
<p>生成 CSS 规则</p>
<ul>
<li>遇到 CSS 的 link 元素，那么会由浏览器负责下载对应的 CSS 文件</li>
<li>下载 CSS 文件不会影响 DOM 的解析的</li>
<li>浏览器下载完 CSS 文件后，就会对 CSS 文件进行解析，解析出对应的规则树</li>
<li>该规则树可称为 CSSOM（CSS Object Model，CSS 对象模型）</li>
</ul>
</li>
<li>
<p>构建 Render Tree</p>
<ul>
<li>当有了 DOM Tree 和 CSSOM Tree 后，就可以两个结合来构建 Render Tree</li>
<li>link 元素不会阻塞 DOM Tree 的构建过程，但是会阻塞 Render Tree 的构建过程</li>
<li>Render Tree 和 DOM Tree 并不是一一对应的关系，比如对于 display 为 none 的元素，就不会出现在 render tree 中</li>
</ul>
</li>
<li>
<p>布局（layout）和绘制（Paint）</p>
<ul>
<li>有了 RenderTree，我们就知道了所有节点的样式，然后计算他们在页面上的大小和位置，开始布局，把节点绘制到页面上。</li>
<li>对 Render Tree 的计算通常只需要遍历一次就可以完成，但 table 及其内部元素除外，他们可能需要多次计算，通常要花 3 倍于同等元素的时间，这也是为什么要避免使用 table 布局的原因之一</li>
</ul>
</li>
</ol>
<p>HTML 字符串-&gt; 解析 HTML -&gt; 样式计算 -&gt; 布局 -&gt; 分层 -&gt; 绘制 -&gt; 分块 -&gt; 光栅化 -&gt; 画 -&gt; 像素信息</p>
<h3 id="回流-reflow-与重绘-repaint" tabindex="-1"><a class="header-anchor" href="#回流-reflow-与重绘-repaint" aria-hidden="true">#</a> 回流 reflow 与重绘 repaint</h3>
<p>重绘 repaint</p>
<p>浏览器第一次渲染叫做绘制，重新渲染就叫做重绘。例如当页面中<strong>元素样式的改变</strong>并<strong>不影响它在文档流中的位置</strong>时（例如：<code v-pre>color</code>、<code v-pre>background-color</code>、<code v-pre>visibility</code>等），浏览器会将新样式赋予给元素并重新绘制。</p>
<p><strong>不影响布局即是重绘。</strong></p>
<p>回流 reflow</p>
<p>第一次确定节点的大小和位置，称之为布局（layout）。之后对节点的大小、位置修改重新计算称之为回流。</p>
<p>当<code v-pre>Render Tree</code>中部分或全部元素的尺寸、结构、或某些属性发生改变时，浏览器重新渲染部分或全部文档的过程就是回流。</p>
<ul>
<li>如 DOM 结构发生改变（添加新的节点或者移除节点）</li>
<li>浏览器窗口大小发生改变</li>
<li>元素尺寸或位置发生改变</li>
<li>元素内容变化（文字数量或图片大小等等）</li>
<li>元素字体大小变化</li>
<li>添加或者删除<strong>可见</strong>的<code v-pre>DOM</code>元素</li>
<li>激活<code v-pre>CSS</code>伪类（例如：<code v-pre>:hover</code>）</li>
<li>查询某些属性或调用某些方法，例如调用 getComputedStyle 方法获取尺寸、位置信息</li>
</ul>
<p>一些常用且会导致回流的属性和方法：</p>
<ul>
<li><code v-pre>clientWidth</code>、<code v-pre>clientHeight</code>、<code v-pre>clientTop</code>、<code v-pre>clientLeft</code></li>
<li><code v-pre>offsetWidth</code>、<code v-pre>offsetHeight</code>、<code v-pre>offsetTop</code>、<code v-pre>offsetLeft</code></li>
<li><code v-pre>scrollWidth</code>、<code v-pre>scrollHeight</code>、<code v-pre>scrollTop</code>、<code v-pre>scrollLeft</code></li>
<li><code v-pre>scrollIntoView()</code>、<code v-pre>scrollIntoViewIfNeeded()</code></li>
<li><code v-pre>getComputedStyle()</code></li>
<li><code v-pre>getBoundingClientRect()</code></li>
<li><code v-pre>scrollTo()</code></li>
</ul>
<p>影响了<strong>布局就会回流</strong></p>
<p><strong>回流必定会发生重绘</strong>，重绘不一定会引发回流。</p>
<p><strong>回流比重绘的代价要更高。</strong></p>
<p>display: none 和 visibility:hidden 比较</p>
<p>共同点：都可以让元素变得不可见</p>
<ul>
<li>
<p>display:none，该元素不占据任何空间，在文档渲染时，该元素如同不存在。非继承属性。</p>
</li>
<li>
<p>visibility:hidden，该元素空间依旧存在。继承属性，子孙节点继承 hidden，可以设置 visible 来显示。</p>
</li>
<li>
<p>display:none，会触发 reflow（回流），所以必然 repaint（重绘）进行渲染</p>
</li>
<li>
<p>visibility:hidden，只会触发 repaint（重绘），因为没有发生位置变化，不进行渲染。</p>
</li>
</ul>
<p>可以通过 css 和 js 相关</p>
<p>CSS</p>
<ul>
<li>避免使用<code v-pre>table</code>布局。</li>
<li>尽可能在<code v-pre>DOM</code>树的最末端改变<code v-pre>class</code>。</li>
<li>避免设置多层内联样式。</li>
<li>将动画效果应用到<code v-pre>position</code>属性为<code v-pre>absolute</code>或<code v-pre>fixed</code>的元素上。</li>
<li>避免使用<code v-pre>CSS</code>表达式（例如：<code v-pre>calc()</code>）。</li>
</ul>
<p>JavaScript</p>
<ul>
<li>避免频繁操作样式，最好一次性重写<code v-pre>style</code>属性，或者将样式列表定义为<code v-pre>class</code>并一次性更改<code v-pre>class</code>属性。</li>
<li>避免频繁操作<code v-pre>DOM</code>，创建一个<code v-pre>documentFragment</code>，在它上面应用所有<code v-pre>DOM操作</code>，最后再把它添加到文档中。</li>
<li>也可以先为元素设置<code v-pre>display: none</code>，操作结束后再把它显示出来。因为在<code v-pre>display</code>属性为<code v-pre>none</code>的元素上进行的<code v-pre>DOM</code>操作不会引发回流和重绘。</li>
<li>避免频繁读取会引发回流/重绘的属性，如果确实需要多次使用，就用一个变量缓存起来。</li>
<li>对具有复杂动画的元素使用绝对定位，使它脱离文档流，否则会引起父元素及后续元素频繁回流。</li>
</ul>
<h3 id="composite-合成-web-优化" tabindex="-1"><a class="header-anchor" href="#composite-合成-web-优化" aria-hidden="true">#</a> composite 合成（web 优化）</h3>
<p>默认情况下，标准流中的内容都是被绘制在同一个图层（Layer）中。浏览器有一种优化手段，在绘制的过程，可以将布局后的元素绘制到多个合成图层中。</p>
<p>有一些特殊的属性，会创建一个新的合成层（ CompositingLayer ），并且新的图层可以利用 GPU 来加速绘制，每个合成层都是单独渲染的，以下属性可以生成新的合成层。</p>
<ul>
<li>3D transforms</li>
<li>video、canvas、iframe</li>
<li>opacity 动画转换时</li>
<li>position: fixed</li>
<li>will-change：一个实验性的属性，提前告诉浏览器元素可能发生哪些变化</li>
<li>animation 或 transition 设置了 opacity、transform；</li>
</ul>
<p>分层确实可以提高性能，但是它以内存管理为代价，因此不应作为 web 性能优化策略的一部分过度使用。</p>
<p>谷歌浏览器工具里可以看到这个 layer。</p>
<p><img src="https://raw.githubusercontent.com/scripthqs/assets/master/blog/css_layers.png" alt="layer工具"></p>
<h3 id="script-元素和页面解析" tabindex="-1"><a class="header-anchor" href="#script-元素和页面解析" aria-hidden="true">#</a> script 元素和页面解析</h3>
<ul>
<li>
<p>浏览器在解析 HTML 的过程中，遇到了 script 元素是不能继续构建 DOM 树的；</p>
</li>
<li>
<p>它会停止继续构建，首先下载 JavaScript 代码，并且执行 JavaScript 的脚本；</p>
</li>
<li>
<p>只有等到 JavaScript 脚本执行结束后，才会继续解析 HTML，构建 DOM 树；</p>
</li>
</ul>
<p>为什么要先等到 js 脚本结束后才能继续解析，或者说为什么要这么设计</p>
<ul>
<li>JavaScript 的作用之一就是操作 DOM，并且可以修改 DOM</li>
<li>等到 DOM 树构建完成并且渲染再执行 JavaScript，会造成严重的回流和重绘，影响页面的性能；</li>
<li>因此遇到 script 元素时，优先下载和执行 JavaScript 代码，再继续构建 DOM 树</li>
</ul>
<p>但是，在目前的开发模式中（比如 Vue、React），脚本往往比 HTML 页面更“重”，处理时间需要更长；</p>
<ul>
<li>会造成页面的解析阻塞，在脚本下载、执行完成之前，用户在界面上什么都看不到</li>
<li>为了解决这个问题，script 元素给我们提供了两个属性（attribute）：defer 和 async</li>
</ul>
<h3 id="defer-属性和-async-属性" tabindex="-1"><a class="header-anchor" href="#defer-属性和-async-属性" aria-hidden="true">#</a> defer 属性和 async 属性</h3>
<p>defer 属性告诉浏览器不要等待脚本下载，而继续解析 HTML，构建 DOM Tree。</p>
<ul>
<li>加上 defer 后，js 的下载和执行，不会阻塞 DOM Tree 的构建过程</li>
<li>在 defer 的 js 文件中，是可以去操作 DOM Tree 的</li>
<li>defer 的 js 文件是在 DOMContentLoaded 事件之前先执行的</li>
<li>多个带 defer 的脚本是可以保持正确的顺序执行的</li>
<li>defer 可以提高页面的性能，并且推荐放到 head 元素中</li>
<li>defer 仅适用于外部引用脚本，对于 script 默认内容会被忽略，加了也没有用。</li>
</ul>
<p>async 特性与 defer 有些类似，它也能够让脚本不阻塞页面。可以让脚本完全独立。</p>
<ul>
<li>浏览器不会因 async 脚本而阻塞（与 defer 类似）</li>
<li>async 脚本不能保证顺序，它是独立下载、独立运行，不会等待其他脚本</li>
<li>async 不会能保证在 DOMContentLoaded 之前或者之后执行</li>
</ul>
<p>区别：</p>
<ul>
<li>defer 通常用于需要在文档解析后操作 DOM 的 JavaScript 代码，并且对多个 script 文件有顺序要求的</li>
<li>async 通常用于独立的脚本，对其他脚本，甚至 DOM 没有依赖的；</li>
</ul>
<h2 id="浏览器的-js-引擎" tabindex="-1"><a class="header-anchor" href="#浏览器的-js-引擎" aria-hidden="true">#</a> 浏览器的 Js 引擎</h2>
<p>浏览器内核是由两部分组成的，以 webkit 中分为</p>
<ul>
<li>WebCore：负责 HTML 解析、布局、渲染等等相关的工作；</li>
<li>JavaScriptCore：解析、执行 JavaScript 代码；</li>
</ul>
<h3 id="v8-引擎" tabindex="-1"><a class="header-anchor" href="#v8-引擎" aria-hidden="true">#</a> V8 引擎</h3>
<p>目前最强大的 js 引擎就是 V8 引擎。</p>
<p>V8 是用 C ++编写的 Google 开源高性能 JavaScript 和 WebAssembly 引擎，它用于 Chrome 和 Node.js。</p>
<ul>
<li>V8 可以独立运行，也可以嵌入到任何 C ++应用程序中</li>
</ul>
<p>代码交给 CPU 执行，源代码转成二进制代码，才能被 CPU 执行，V8 引擎的作用就是将源代码转成二进制代码。</p>
<p>V8 引擎有几个重要的模块：</p>
<ul>
<li>Parse 模块会将 JavaScript 代码转换成 AST（抽象语法树）</li>
<li>Ignition 是一个解释器，会将 AST 转换成 ByteCode（字节码）</li>
<li>TurboFan 是一个编译器，可以将字节码编译为 CPU 可以直接执行的机器码</li>
</ul>
<h3 id="js-的执行原理" tabindex="-1"><a class="header-anchor" href="#js-的执行原理" aria-hidden="true">#</a> Js 的执行原理</h3>
<ul>
<li>ES3 的主要概念包括 JavaScript 执行原理、作用域、作用域链、闭包。</li>
<li>ES5 中的概念包括块级作用域、let、const 等；</li>
</ul>
<h3 id="初始化全局对象-go" tabindex="-1"><a class="header-anchor" href="#初始化全局对象-go" aria-hidden="true">#</a> 初始化全局对象(GO)</h3>
<p>js 引擎会在执行代码之前，会在堆内存中创建一个全局对象：Global Object（GO）</p>
<ul>
<li>该对象的所有作用域(scope)都可以访问</li>
<li>里面包含了 Date、Array、String、Number、setTimeout、setInterval 等等</li>
<li>其中还有一个 window 属性指向自己</li>
</ul>
<h3 id="执行上下文-ecs" tabindex="-1"><a class="header-anchor" href="#执行上下文-ecs" aria-hidden="true">#</a> 执行上下文(ECS)</h3>
<ul>
<li>js 引擎内部有一个执行上下文栈(Execution Context Stack，简称 ECS)，它是用于执行代码的调用栈。</li>
<li>全局的代码块为了执行会构建一个 Global Execution Context(GEC)</li>
<li>GEC 会被放入到 ECS 中执行；</li>
</ul>
<p>分为 2 步：</p>
<ol>
<li>在代码执行前，在 parser 转成 AST 的过程中，会将全局定义的变量、函数等加入到 GlobalObject 中，但是并不会
赋值；这个过程也称之为变量的作用域提升(hoisting)</li>
<li>在代码执行中，对变量赋值，或者执行其他的函数；</li>
</ol>
<h3 id="vo-对象" tabindex="-1"><a class="header-anchor" href="#vo-对象" aria-hidden="true">#</a> VO 对象</h3>
<ul>
<li>每一个执行上下文会关联一个 VO(Variable Object，变量对象)，变量和函数声明会被添加到这个 VO 对象中。</li>
<li>当全局代码被执行的时候，VO 就是 GO 对象了</li>
</ul>
<h3 id="函数执行上下文" tabindex="-1"><a class="header-anchor" href="#函数执行上下文" aria-hidden="true">#</a> 函数执行上下文</h3>
<ul>
<li>在执行的过程中执行到一个函数时，就会根据函数体创建一个函数执行上下文(Functional Execution Context，简称 FEC)，并且压入到 EC Stack 中。</li>
<li>因为每个执行上下文都会关联一个 VO，那么函数执行上下文关联的 VO 是什么呢</li>
<li>当进入一个函数执行上下文时，会创建一个 AO 对象（Activation Object）</li>
<li>这个 AO 对象会使用 arguments 作为初始化，并且初始值是传入的参数</li>
<li>这个 AO 对象会作为执行上下文的 VO 来存放变量的初始化</li>
</ul>
<h3 id="作用域和作用域链-scope-chain" tabindex="-1"><a class="header-anchor" href="#作用域和作用域链-scope-chain" aria-hidden="true">#</a> 作用域和作用域链（Scope Chain）</h3>
<p>当进入到一个执行上下文时，执行上下文也会关联一个作用域链(Scope Chain)</p>
<ul>
<li>作用域链是一个对象列表，用于变量标识符的求值</li>
<li>当进入一个执行上下文时，这个作用域链被创建，并且根据代码类型，添加一系列的对象</li>
</ul>
</div></template>


