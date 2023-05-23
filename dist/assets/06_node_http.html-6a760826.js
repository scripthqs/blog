import{_ as n,o as s,c as a,f as t}from"./app-f790074e.js";const p="/assets/static-50bf9609.png",e={},o=t(`<h1 id="http-模块" tabindex="-1"><a class="header-anchor" href="#http-模块" aria-hidden="true">#</a> http 模块</h1><p>http 模块是用来创建 web 服务器。</p><h2 id="服务器" tabindex="-1"><a class="header-anchor" href="#服务器" aria-hidden="true">#</a> 服务器</h2><p>给用户提供的服务的机器就是服务器，在服务器上需要安装服务器软件，目前最主流的 3 个 web 服务器软件是 Apache,Nginx,IIS。</p><p>用户从浏览器打开页面最终呈现在屏幕上，经历了哪些事？</p><ul><li>首先用户需要联网</li><li>用户根据 url 请求，DNS 将 url 中的域名解析成 ip 地址</li><li>根据地址等请求信息找对应的服务器</li><li>后端可能会用到数据库，服务器会从数据库拿到数据，再从服务器通过网络呈现到浏览器上。</li></ul><h2 id="开发模式" tabindex="-1"><a class="header-anchor" href="#开发模式" aria-hidden="true">#</a> 开发模式</h2><p>现在一般主要有前后端分离和前后端耦合开发 2 种模式。</p><ol><li>前后端分离：提出需求-设计接口约定数据（接口文档）-前后端并行开发-前后端集成-前端调整页面-集成成功-交付</li><li>前后端耦合开发：提出需求-前端开发页面-后端编译成模板-前后端对接（需要相互看彼此的代码）-集成遇到问题-前端返工-后端返工-二次集成-集成成功-交付</li></ol><p>现在主要是使用前后端分离开发，不过要是懂后端语言耦合开发也不错。</p><h2 id="服务器相关的概念" tabindex="-1"><a class="header-anchor" href="#服务器相关的概念" aria-hidden="true">#</a> 服务器相关的概念</h2><h3 id="ip-地址" tabindex="-1"><a class="header-anchor" href="#ip-地址" aria-hidden="true">#</a> ip 地址</h3><p><strong>ip 地址</strong>：ip 地址有 v4 和 v6 之分，IP 地址就是互联网上每台计算机/电子设备的唯一地址，因此 IP 地址具有唯一性。在开发期间，自己的电脑既是一台服务器，也是一个客户端，可以在本机浏览器中输入<strong>127.0.0.1</strong>进行访问。</p><h3 id="_3-2-域名" tabindex="-1"><a class="header-anchor" href="#_3-2-域名" aria-hidden="true">#</a> 3.2 域名</h3><p><strong>域名</strong>：尽管 IP 地址能够唯一地标记网络上的计算机，但 IP 地址是一长串数字，不直观，而且不便于记忆，于是人们又发明了另一套字符型的地址方案，叫<strong>域名地址</strong>。IP 地址和域名是一一对应的关系，这份对应关系存放在一种叫做<strong>域名服务器</strong>(<strong>DNS</strong>)的电脑中。在开发测试期间，<strong>127.0.0.1 对应的域名是 localhost</strong>。</p><blockquote><p>本地如果 localhost 无法使用，则是因为本机中的 hosts 文件中没有匹配上 ip 地址</p></blockquote><h3 id="网络协议" tabindex="-1"><a class="header-anchor" href="#网络协议" aria-hidden="true">#</a> 网络协议</h3><p><strong>网络协议</strong> ：网络上的计算机之间交换信息，就像我们说话用某种语言一样，在网络上的各台计算机之间也有一种语言，这就是网络协议，<strong>不同的计算机之间必须使用相同的网络协议才能进行通信</strong>。如：TCP、UDP、HTTP、FTP 等等。</p><h3 id="端口号" tabindex="-1"><a class="header-anchor" href="#端口号" aria-hidden="true">#</a> 端口号</h3><p><strong>端口号</strong>：服务器的端口号就像是现实生活中的门牌号一样。通过门牌号，外卖员就可以准确把外卖送到你的手中。同样的道理，在一台电脑中，可以运行 N 多个 web 服务。每个 web 服务都对应一个唯一的端口号（0-65535，2^16，常见的端口号别占用：20,21,22,25,80,443,3306,3389,11211,27017....）。客户端发送过来的网络请求，通过端口号，可以被准确地交给对应的 web 服务进行处理。0-65535</p><blockquote><p>注：服务器上的端口号是不可以重复的，必须是独一无二。<strong>http 服务默认端口号为 80，https 的端口号默认是 443。</strong></p></blockquote><h2 id="创建-web-服务器" tabindex="-1"><a class="header-anchor" href="#创建-web-服务器" aria-hidden="true">#</a> 创建 web 服务器</h2><p>NodeJs 是通过官方提供的 http 模块来创建 web 服务器的模块。通过几行简单的代码，就能轻松的手写一个 web 服务，从而对外提供 web 服务。</p><ol><li>导入 http 模块</li><li>创建 web 服务对象实例</li><li>绑定监听客户端请求事件 request</li><li>监听端口，启动服务</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 导入http模块</span>
<span class="token keyword">const</span> http <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;http&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 创建web服务对象实例</span>
<span class="token keyword">const</span> server <span class="token operator">=</span> http<span class="token punctuation">.</span><span class="token function">createServer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 绑定监听客户端请求事件request</span>
server<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&quot;request&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">request<span class="token punctuation">,</span> response</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// request: 接受客户端请求对象，它包含了与客户端相关的数据和属性</span>
<span class="token comment">//      request.url      客户端请求的uri地址</span>
<span class="token comment">//      request.method  客户端请求的方式 get或post</span>
<span class="token comment">//      request.headers   客户端请求头信息(对象)</span>
<span class="token comment">//      ....</span>
<span class="token comment">// response:服务器对客户端的响应对象</span>
<span class="token comment">//     设置响应头信息 ，用于响应时有中文时乱码解决处理</span>
<span class="token comment">//     response.setHeader(&#39;content-type&#39;, &#39;text/html;charset=utf-8&#39;)</span>
<span class="token comment">//     设置状态码（常见的HTTP状态码有：200，404，301、302、304、403、401、405、500，502）</span>
<span class="token comment">//     response.statusCode = 200</span>
<span class="token comment">//     向客户端发送响应数据,并结束本次请求的处理过程</span>
<span class="token comment">//     response.end(&#39;hello world&#39;)</span>
<span class="token comment">// 启动服务</span>
server<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">8080</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;服务已启动&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>手写一个服务器软件，启动后要求用户访问根“/”输出<code>hello world</code>，用户访问<code>/html5</code>输出<code>2004</code>。</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 1. 导入http模块</span>
<span class="token keyword">const</span> http <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;http&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 2. 创建web服务实例</span>
<span class="token keyword">const</span> server <span class="token operator">=</span> http<span class="token punctuation">.</span><span class="token function">createServer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 3. 监听request请求</span>
server<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&quot;request&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// 输出hello world</span>
  <span class="token comment">// res.end(&quot;hello world&quot;);</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>req<span class="token punctuation">.</span>url <span class="token operator">===</span> <span class="token string">&quot;/&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    res<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token string">&quot;hello world&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>req<span class="token punctuation">.</span>url <span class="token operator">===</span> <span class="token string">&quot;/html5&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    res<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token string">&quot;2004&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 4. 启动服务</span>
server<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">8080</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// 仅是提示作用，可以不写，但是建议写</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;server is running at http://127.0.0.1:8080&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="静态资源服务器" tabindex="-1"><a class="header-anchor" href="#静态资源服务器" aria-hidden="true">#</a> 静态资源服务器</h2><p>静态资源：常见的有 html、css、js、图片、音频、视频等</p><p>静态资源服务器：专门保存上述静态资源的服务器，称之为静态资源服务器。</p><p>为什么要将静态资源和动态资源分开放，静态资源一般需要高带宽，而后端资源一般不需要较大的资源，主要是为了提升静态资源的访问速度。</p><p><strong>手写静态资源服务器实现思路</strong>：</p><p>客户端请求的每个资源 uri 地址，作为在本机服务器指定目录中的文件。通过相关模块进行读取文件中数据进行响应给客户端，从而实现静态服务器。</p><p><img src="`+p+`" alt="静态资源"></p><p><strong>实现步骤:</strong></p><p>需求：使用 nodejs 的 http 模块创建静态资源服务器，专门存放静态资源展示 2 张图片</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 创建服务器有以下几步：</span>
<span class="token comment">//  a. 导入</span>
<span class="token keyword">const</span> http <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;http&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;path&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;fs&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//  b. 创建web实例</span>
<span class="token keyword">const</span> server <span class="token operator">=</span> http<span class="token punctuation">.</span><span class="token function">createServer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//  c. 监听request事件</span>
server<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&quot;request&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// 获取当前用户访问的资源路径</span>
  <span class="token keyword">let</span> uri <span class="token operator">=</span> req<span class="token punctuation">.</span>url<span class="token punctuation">;</span>
  <span class="token comment">// 由于“/”没有实体资源，需要将“/”做处理，如果访问“/”则让其对应访问“/index.html”</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>uri <span class="token operator">==</span> <span class="token string">&quot;/&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    uri <span class="token operator">=</span> <span class="token string">&quot;/index.html&quot;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 默认情况下，浏览器在第一次请求网站的时候会访问“/favicon.ico”图标文件，如果没有也会出现404</span>
  <span class="token comment">// 如果需要解决这个问题，则有3种方式：</span>
  <span class="token comment">// 方式1：去找个ico文件，存放在静态资源的public目录下，命名为“favicon.ico”</span>
  <span class="token comment">// 方式2：在处理的时候忽略“/favicon.ico”文件的处理，也就是下面的加了判断的写法</span>
  <span class="token comment">// 方式3：不管，不用处理，其不影响页面的显示</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>uri <span class="token operator">!=</span> <span class="token string">&quot;/favicon.ico&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 读取文件（fs模块），将内容返回给用户（res.end）</span>
    <span class="token keyword">let</span> filename <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&quot;public&quot;</span><span class="token punctuation">,</span> uri<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 判断文件是否存在</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>fs<span class="token punctuation">.</span><span class="token function">existsSync</span><span class="token punctuation">(</span>filename<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      fs<span class="token punctuation">.</span><span class="token function">readFile</span><span class="token punctuation">(</span>filename<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> data</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token comment">// ok</span>
          res<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
          <span class="token comment">// 不ok</span>
          res<span class="token punctuation">.</span><span class="token function">setHeader</span><span class="token punctuation">(</span><span class="token string">&quot;Content-Type&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;text/html;charset=utf-8&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          res<span class="token punctuation">.</span>statusCode <span class="token operator">=</span> <span class="token number">500</span><span class="token punctuation">;</span>
          res<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token string">&quot;请求资源出现错误。。。&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      res<span class="token punctuation">.</span><span class="token function">setHeader</span><span class="token punctuation">(</span><span class="token string">&quot;Content-Type&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;text/html;charset=utf-8&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      res<span class="token punctuation">.</span>statusCode <span class="token operator">=</span> <span class="token number">404</span><span class="token punctuation">;</span>
      res<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token string">&quot;你要找的资源失踪了。。。&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//  d. 监听端口，启动服务</span>
server<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">8080</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;server is running at http://127.0.0.1:8080&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="get-数据获取" tabindex="-1"><a class="header-anchor" href="#get-数据获取" aria-hidden="true">#</a> get 数据获取</h2><p>get 数据通过地址栏使用 query 方式进行传递的数据 例</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">?</span>id<span class="token operator">=</span><span class="token number">1</span><span class="token operator">&amp;</span>name<span class="token operator">=</span>zhangsan
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查询字符串的规则：请求参数使用 URL 地址和“问号传参“ 的方式进行传递----用问号把 url 和请求参数分开。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 导入</span>
<span class="token keyword">const</span> http <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;http&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> url <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;url&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 创建实例&amp;监听request事件&amp;监听端口</span>
http
  <span class="token punctuation">.</span><span class="token function">createServer</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">//  之前第3步中的回调函数</span>
    <span class="token comment">// 获取地址栏中 query数据</span>
    <span class="token keyword">let</span> <span class="token punctuation">{</span> query <span class="token punctuation">}</span> <span class="token operator">=</span> url<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>req<span class="token punctuation">.</span>url<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>query<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">8080</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="post-数据获取" tabindex="-1"><a class="header-anchor" href="#post-数据获取" aria-hidden="true">#</a> post 数据获取</h2><p>当请求方式不是 get（大部分情况是 post 或 put）时，那么请求的数据不是在 url 上，而是在请求体里。chrome 浏览器针对不同的 content-type 有做了区分，分别是 formData 和 request payload。</p><p>表单数据多数为 post 进行提交到服务器端。需要监听 req 对象的 data 事件来获取客户端发送到服务器的数据。如果数据量比较大，无法一次性发送完毕，则客户端会把数据切割后分批次发送给服务器。所以 data 事件可能会被触发多次，每次触发 data 事件时，收到的数据只是全部数据的一部分，因此需要做数据的拼接才能得到完整的数据：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> http <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;http&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> queryString <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;querystring&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
http
  <span class="token punctuation">.</span><span class="token function">createServer</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token comment">// 数据接受中</span>
    req<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&quot;data&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">buffer</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      arr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>buffer<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 数据传输结束了</span>
    req<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&quot;end&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token comment">// 拼接接受到的所有数据</span>
      <span class="token keyword">let</span> buffer <span class="token operator">=</span> Buffer<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">let</span> post <span class="token operator">=</span> queryString<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>buffer<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>post<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">8080</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,46),c=[o];function i(u,l){return s(),a("div",null,c)}const k=n(e,[["render",i],["__file","06_node_http.html.vue"]]);export{k as default};