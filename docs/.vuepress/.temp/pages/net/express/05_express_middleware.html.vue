<template><div><h1 id="中间件" tabindex="-1"><a class="header-anchor" href="#中间件" aria-hidden="true">#</a> 中间件</h1>
<h2 id="含义" tabindex="-1"><a class="header-anchor" href="#含义" aria-hidden="true">#</a> 含义</h2>
<p>中间件（middleware）可以理解为业务流程的中间处理环节。如生活中吃一般炒青菜，大约分为如下几步骤：</p>
<p><img src="@source/net/express/images/middleware1.png" alt="中间件1">
express 中，当一个<strong>请求到达的服务器之后，可以在给客户响应之前</strong>连续调用<strong>多个</strong>中间件，来对本次请求和返回响应数据进行<strong>处理</strong>。</p>
<p><img src="@source/net/express/images/middleware2.png" alt="中间件2"></p>
<h2 id="中间件的分类" tabindex="-1"><a class="header-anchor" href="#中间件的分类" aria-hidden="true">#</a> 中间件的分类</h2>
<p>中间件可以分类可分如下几类：</p>
<ol>
<li>
<p>内置中间件，也就是 express 本身自带无需 npm 安装</p>
<ul>
<li>express.static()</li>
</ul>
</li>
<li>
<p>第三方中间件</p>
<p>非 Express 官方内置的，而是由第三方开发出来的中间件，叫做第三方中间件。在项目中可以通过 npm 进行安装第三方中间件并配置，从而提高项目的开发效率。例如 body-parser （解析 post 数据的）此中间件可以很方便帮助我们获取到 post 提交过来的数据。</p>
</li>
<li>
<p>自定义中间件，开发者自己编写的（<strong>中间件的本质其实就是一个 function</strong>）</p>
</li>
</ol>
<p>如果从使用层面去考虑，中间件可以划分为：</p>
<ol>
<li>应用级别中间件（通过 app.get/post/use 等方法绑定到 app 实例的中间件）
<ul>
<li>全局使用中间件（所有路由都生效）
<ul>
<li>app.use(中间件)</li>
</ul>
</li>
<li>局部使用中间件（当前路由生效）
<ul>
<li>app.请求方法(地址,[中间件.....,]回调函数)</li>
<li>app.请求方法(地址,中间件 1,中间 2,中间 3......,]回调函数)</li>
</ul>
</li>
</ul>
</li>
<li>路由级别中间件（绑定到 express.Router()上的中间件）
<ul>
<li>其用法与应用级别的中间件<strong>没有任何区别</strong>，只是一个绑在 app 实例上，一个绑在 router 上
<ul>
<li>router.use(中间件)</li>
<li>router.请求方法(地址,[中间件.....,]回调函数)</li>
</ul>
</li>
</ul>
</li>
</ol>
<h2 id="内置中间件" tabindex="-1"><a class="header-anchor" href="#内置中间件" aria-hidden="true">#</a> 内置中间件</h2>
<p>express 提供了好用的内置中间件，如提供一个静态资源管理的中间件，通过此中间件就可以帮助为我们快速搭建一个静态资源服务器：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token string">"前缀"</span><span class="token punctuation">,</span> express<span class="token punctuation">.</span><span class="token function">static</span><span class="token punctuation">(</span><span class="token string">"托管目录地址"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在 express 中，除了内置的<code v-pre>express.static()</code>中间件，还内置了另外 2 个常用的中间件：</p>
<ul>
<li>express.json
<ul>
<li>作用：接收 json 格式提交的数据</li>
<li>兼容性问题：express &gt;= 4.16.0</li>
<li><code v-pre>app.use(express.json())</code></li>
<li><strong>其在接收完数据后，会将数据的对象形式挂载到<code v-pre>req</code>请求对象的<code v-pre>body</code>属性上</strong></li>
</ul>
</li>
<li>express.urlencoded
<ul>
<li>作用：处理 post 表单数据</li>
<li>兼容性问题：express &gt;= 4.16.0</li>
<li><code v-pre>app.use(express.urlencoded({extended: false}))</code></li>
<li><strong>其在接收完数据后，会将数据的对象形式挂载到<code v-pre>req</code>请求对象的<code v-pre>body</code>属性上</strong></li>
</ul>
</li>
</ul>
<blockquote>
<p>注意，</p>
<ul>
<li>后面提及的这 2 个常用内置中间件存在兼容性问题。express&gt;=4.16.0</li>
<li>上述 2 个中间件都说把数据处理之后挂到 req.body 上，但是实际上并不会出现我们想的覆盖的问题。</li>
</ul>
</blockquote>
<p>案例：使用 json、urlencoded 中间件来接收 json 数据与表单 post 数据，发送可以通过 postman 来进行</p>
<p><strong>需要注意，JSON 数据数据名必须用双引号引起来，值如果是字符串的话也需要用双引号引起来，单引号不行！！！</strong></p>
<h2 id="自定义中间件" tabindex="-1"><a class="header-anchor" href="#自定义中间件" aria-hidden="true">#</a> 自定义中间件</h2>
<p>自定义中间件，<strong>其本质就是定义一个处理请求的函数</strong>，只是此函数中除了有 request 和 response 参数外还必须包含一个 next 参数，此参数作用让中间件能够让流程向下执行下去直到匹配到的路由中发送响应给客户端。也可以通过给 request 对象添加属性来进行中间件数据的向下传递</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">mfn</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">//. 自己需要定义的逻辑流程</span>
  <span class="token comment">// 中间件最后一定要执行此函数，否则程序无法向下执行下去</span>
  <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>注意：在整个请求链路中，<strong>所有中间件与最终路由共用一份<code v-pre>req</code>和<code v-pre>res</code></strong></p>
</blockquote>
<p><img src="@source/net/express/images/middleware3.png" alt="中间件3"></p>
<p><strong>案例：依据上述的共用特性，自定义一个中间件来接收 post 提交的表单数据</strong>（意义：内置那中间件是不是存在兼容性问题）</p>
<p>自己手动模拟一个类似于<code v-pre>express.urlencoded</code>这样的中间件，以解析 post 提交到服务器的表单数据。</p>
<p>步骤分析：</p>
<ul>
<li>定义中间件（本质：函数）</li>
<li>监听 req 的 data 事件
<ul>
<li>在中间件中，需要监听 req 对象的 data 事件来获取客户端发送到服务器的数据。如果数据量比较大，无法一次性发送完毕，则客户端会把数据切割后分批次发送给服务器。所以 data 事件可能会被触发多次，每次触发 data 事件时，收到的数据只是全部数据的一部分，因此需要做数据的拼接才能得到完整的数据。</li>
</ul>
</li>
<li>监听 req 的 end 事件
<ul>
<li>当请求体数据传输完毕后会触发 end 事件，拿到全部数据后可以继续处理 post 数据</li>
</ul>
</li>
<li>使用 querystring 模块来解析请求体数据</li>
<li>将解析出来的请求体对象挂载到 req.body 上</li>
<li>将自定义中间件封装为模块（可选，建议做）
<ul>
<li>为了优化代码的结构，我们可以把自定义的中间件函数封装成独立的模块</li>
</ul>
</li>
</ul>
<p><strong>实现代码:</strong></p>
<blockquote>
<p>独立的自定义中间件模块：cs-body-parse</p>
</blockquote>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 引入querystring模块</span>
<span class="token keyword">const</span> querystring <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"querystring"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 核心代码</span>
<span class="token keyword">var</span> <span class="token function-variable function">csBodyParse</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> data <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  req<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">"data"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">buffer</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    data<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>buffer<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  req<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">"end"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> post <span class="token operator">=</span> querystring<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>Buffer<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 挂载到req.body上</span>
    req<span class="token punctuation">.</span>body <span class="token operator">=</span> post<span class="token punctuation">;</span>
    <span class="token comment">// 继续后续的请求处理</span>
    <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 导出</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> csBodyParse<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>应用入口文件：app.js</p>
</blockquote>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 自定义中间件服务器文件（入口文件）</span>
<span class="token keyword">const</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"express"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 引入自己封装的中间件模块cs-body-parse</span>
<span class="token keyword">const</span> csBodyParse <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"./modules/cs-body-parse"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// csBodyParse的使用</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>csBodyParse<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 路由</span>
app<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">"/post"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>req<span class="token punctuation">.</span>body<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

app<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">3722</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"Server is running at http://127.0.0.1:3722"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="第三方中间件" tabindex="-1"><a class="header-anchor" href="#第三方中间件" aria-hidden="true">#</a> 第三方中间件</h2>
<p>在 express 中，其允许我们使用第三方的中间件来进行对数据进行处理。比较典型的例如：可以使用第三方中间件来接收 post 数据。</p>
<p>以使用<code v-pre>body-parser</code>中间件来接收 post 数据为例，步骤如下：</p>
<ol>
<li>
<p>安装三方中间件<code v-pre>body-parser</code></p>
<ul>
<li><code v-pre>npm i -S body-parser</code></li>
</ul>
</li>
<li>
<p>应用文件中导入<code v-pre>body-parser</code></p>
</li>
<li>
<p>通过中间件调用 <code v-pre>app.use(body.urlencoded({extended: false}))</code></p>
</li>
<li>
<p>在匹配的路由中通过<code v-pre>req.body</code>获数 post 中数据</p>
<ul>
<li>Express 内置的 express.urlencoded 中间件，就是基于 body-parser 这个第三方中间件进一步封装出来的。但内置的有版本兼容问题，所以一般项目选择安装使用第三方的中间件</li>
</ul>
</li>
</ol>
<blockquote>
<p>在使用的时候，<code v-pre>body-parser</code>库的语法与前面看的 express 内置的<code v-pre>express.urlencoded</code>中间件的语法非常相似，原因是内置中间件是基于<code v-pre>body-parser</code>来实现的。</p>
</blockquote>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"express"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 引入body-parser</span>
<span class="token keyword">const</span> bodyParser <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"body-parser"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 使用body-parser中间件</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>bodyParser<span class="token punctuation">.</span><span class="token function">urlencoded</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">extended</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

app<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">"/post"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>req<span class="token punctuation">.</span>body<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

app<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">3723</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"Server is running at http://127.0.0.1:3723"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个中间件已经弃用</p>
<p>新版写法：</p>
<ul>
<li><code v-pre>app.use(express.json())</code></li>
<li><code v-pre>app.use(express.urlencoded({extended: false}))</code></li>
</ul>
<h2 id="错误类型中间件" tabindex="-1"><a class="header-anchor" href="#错误类型中间件" aria-hidden="true">#</a> 错误类型中间件</h2>
<h3 id="异常中间件" tabindex="-1"><a class="header-anchor" href="#异常中间件" aria-hidden="true">#</a> 异常中间件</h3>
<p>**作用：**专门用来捕获整个项目发生的异常错误，从而防止项目异常崩溃的问题产生（友好显示异常）。</p>
<p>**格式：**错误级别中间件的函数参数中，<strong>必须有四个形参</strong>，分别是<code v-pre>(err,req,res,next)</code></p>
<p>问：多出来的 err 参数有什么作用呢？</p>
<p>答：里面包含了错误的信息，err.message 属性中就包含了错误的文本信息，这个信息可以在中间件中输出给用户看。</p>
<p><strong>示例代码：</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">"/"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">"服务器内部发生了致命的错误！"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">"Welcome to my homepage"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"发生了错误："</span> <span class="token operator">+</span> err<span class="token punctuation">.</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>
  res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">"Error！"</span> <span class="token operator">+</span> err<span class="token punctuation">.</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>**案例：**要求指定一个路径（可能路由对应的文件不存在），读取文件内容，输出给用户。正常的错误显示，既不友好，也不安全。需要处理</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 引入需要的模块</span>
<span class="token keyword">const</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"express"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"fs"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 路由</span>
app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">"/"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> url <span class="token operator">=</span> <span class="token string">"readme1.txt"</span><span class="token punctuation">;</span>
  <span class="token comment">// 读文件</span>
  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token comment">// 先去尝试一下读文件</span>
    <span class="token keyword">let</span> data <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">readFileSync</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">;</span>
    res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 尝试失败，抛出异常</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">"文件读取失败"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 异常中间件</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token comment">// 接受异常，继续处理异常</span>
  res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">"ERROR："</span> <span class="token operator">+</span> err<span class="token punctuation">.</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 启动服务器</span>
app<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">3724</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"Server is running at http://127.0.0.1:3724"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>注意事项：错误级别中间件要想发挥其作用，必须写在所有的路由的后面，是否是<code v-pre>app.listen</code>之前无所谓。</p>
</blockquote>
<h3 id="_404-处理" tabindex="-1"><a class="header-anchor" href="#_404-处理" aria-hidden="true">#</a> 404 处理</h3>
<p>**作用：**用于处理 404 的请求响应</p>
<p><strong>示例代码:</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 假设定义这个路由，但是实际请求的时候请求了/12345，这个时候就会404</span>
app<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">"/1234"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">"你请求成功了"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 404的输出</span>
<span class="token comment">// 该中间件也需要写在最后（与异常中间件的顺序无所谓，只要确保其在所有的路由方法之后就可）</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token comment">// 输出404错误</span>
  res<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token number">404</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">"&lt;h1>404&lt;/h1>"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// 先指定404状态码，然后再输出错误信息</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>404 错误中间件也要求在所有的正常请求路由的后面去声明使用，<strong>不要放在路由的前面，否则会导致后面的路由都是 404 错误。</strong></p>
</blockquote>
<p>**注意点：**错误级别的中间件，必须在所有路由之后注册，至于 404 中间件与异常中间件，谁先谁后无所谓。</p>
<p>页面：<a href="https://404.life/" target="_blank" rel="noopener noreferrer">https://404.life/<ExternalLinkIcon/></a></p>
<h2 id="中间件的局部使用" tabindex="-1"><a class="header-anchor" href="#中间件的局部使用" aria-hidden="true">#</a> 中间件的局部使用</h2>
<ul>
<li>app.请求方法(地址,[中间件.....,]回调函数)
<ul>
<li>3 个参数
<ul>
<li>url，请求地址</li>
<li>数组，多个中间件的集合</li>
<li>回调函数，用于处理请求给出响应</li>
</ul>
</li>
</ul>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>app<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">"/"</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>express<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> express<span class="token punctuation">.</span><span class="token function">urlencoded</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">extended</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>app.请求方法(地址,中间件 1,中间件 2,.....,回调函数)
<ul>
<li>至少 3 个参数，至多 N+2（N 为中间件的个数）</li>
</ul>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>app<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">"/"</span><span class="token punctuation">,</span> express<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> express<span class="token punctuation">.</span><span class="token function">urlencoded</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">extended</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="小结" tabindex="-1"><a class="header-anchor" href="#小结" aria-hidden="true">#</a> 小结</h2>
<p>在 express 中使用中间件时，需要注意以下几点：</p>
<ul>
<li>在定义路由<strong>之前</strong>注册中间件（除了错误中间件）</li>
<li>一个请求中可以连续调用多个中间件</li>
<li>在一次请求链路中，多个中间件与最终路由方法中，他们共用一份<code v-pre>req</code>与<code v-pre>res</code></li>
<li>每个中间件最后必须调用<code v-pre>next()</code>（除了错误中间件，必须要有参数传递）</li>
<li>不要在中间件的<code v-pre>next()</code>后继续写任何代码（没意义）</li>
</ul>
</div></template>


