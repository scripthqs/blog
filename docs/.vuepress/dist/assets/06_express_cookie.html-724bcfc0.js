import{_ as n,o as s,c as a,f as o}from"./app-68a897fb.js";const p={},e=o(`<h1 id="cookie-和-session" tabindex="-1"><a class="header-anchor" href="#cookie-和-session" aria-hidden="true">#</a> cookie 和 session</h1><h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h2><p><strong>HTTP 是无状态协议</strong>。例如：活中一些商家开设的会员卡服务，记名的会员卡和不记名的会员卡，不记名的就类似无状态协议<strong>HTTP</strong>的情况。</p><p>实际情况中，系统需要一些手段记录用户的一些列操作，就是 cookie 和 session（会话管理手段）。</p><p>两者区别：</p><ul><li>cookie： <ul><li>存储于浏览器的（客户端）</li><li>有大小限制，大概是 4kb 的大小</li><li>有被用户修改、删除的风险</li></ul></li><li>session： <ul><li>存储在服务端的（服务器上）</li><li>没有被用户说改就改的风险（相对于 cookie 更加安全）</li><li>默认情况下是基于 cookie 实现的（会将 session 会话 id 给 cookie，id 存储客户端上）</li><li>当然 session 的 id 是可以被删除的（客户端上），解决是需要后端技术去实现的</li><li>理论上讲，只要磁盘空间够，session 是可以放很多数据的</li></ul></li></ul><h2 id="cookie" tabindex="-1"><a class="header-anchor" href="#cookie" aria-hidden="true">#</a> cookie</h2><p>HTTP 是一个无状态协议，客户端每次发出请求时候，下一次请求得不到上一次请求的数据，我们如何将上一次请求和下一次请求的数据关联起来呢？如用户登录成功后，跳转到其他页面时候，其他的页面是如何知道该用户已经登录了呢？此时就可以使用到 cookie 中的值来判断用户是否登录，cookie 可以保持用户数据。</p><p>cookie 它是一个由浏览器（存储 cookie）和服务器（产生 cookie）共同协作实现的（<strong>cookie 是存储于浏览器中</strong>）。cookie 分为如下几步实现：</p><ol><li>服务器端向客户端发送 cookie 并指定 cookie 的过期时间。</li><li>浏览器将 cookie 保存起来。</li><li>之后每次请求都会将 cookie 发向服务器端，在 cookie 没有过期时间内服务器都可以得到 cookie 中的值。</li></ol><p>express 中操作的 cookie 使用 cookie-parser 模块。</p><blockquote><p>cookie-parser 模块（也是中间件），所以其也会去操作 req，res 对象；设置 cookie 是通过<code>res.cookie(name,value,[选项])</code>，读 cookie 的时候需要通过<code>req.cookies</code>对象来获取。</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> i <span class="token parameter variable">-S</span> cookie-parser
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>示例代码:</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;express&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> cookieParser <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;cookie-parser&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 中间件引入</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token function">cookieParser</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;/&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// 服务器端通过req来获取cookie数据</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>req<span class="token punctuation">.</span>cookies<span class="token punctuation">.</span>username<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>req<span class="token punctuation">.</span>cookies<span class="token punctuation">)</span><span class="token punctuation">;</span>
    res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">&quot;再次欢迎你&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token comment">// cookie设置过期时间为1天</span>
    <span class="token comment">// maxAge 设置cookie过期时间  毫秒</span>
    res<span class="token punctuation">.</span><span class="token function">cookie</span><span class="token punctuation">(</span><span class="token string">&quot;username&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;admin&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">maxAge</span><span class="token operator">:</span> <span class="token number">86400</span> <span class="token operator">*</span> <span class="token number">1000</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">&quot;欢迎你~&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
app<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">8080</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="session" tabindex="-1"><a class="header-anchor" href="#session" aria-hidden="true">#</a> session</h2><p>cookie 操作很方便，但是使用 cookie 安全性不高，cookie 中的所有数据存储在客户端浏览器中，数据很容易被伪造；所以一些重要的数据就不能放在 cookie 当中了，并且 cookie 还有一个缺点就是不能存放太多的数据，一般浏览大约在 4k 左右，为了解决这些问题，session 就产生了，<strong>session 中的数据保留在服务端的</strong>。</p><p>数据放到 cookie 中是不安全的，我们可以在 cookie 中存放一个 sessionId 值,该 sessionId 会与服务器端之间会产生映射关系，如果 sessionId 被篡改的话，那么它就不会与服务器端数据之间产生映射，因此安全性就更好，并且<strong>session 的有效期一般比较短，一般都是设置是 20 分钟左右</strong>，如果在 20 分钟内客户端与服务端没有产生交互，服务端就会将数据删除。</p><blockquote><p><strong>扩展阅读</strong></p><p>session 的原理是通过一个<strong>sessionid</strong>来进行的，sessionid 是放在客户端的 cookie 中，当请求到来时候，服务端会检查 cookie 中保存的 sessionid 是否有，并且与服务端的 session 数据（一般是 session 文件）映射起来，进行数据的保存和修改，也就是说当我们浏览一个网页时候，服务端会随机生成一个 1024 比特长的字符串，然后存在 cookie 中的 sessionid 字段中，当我们下次访问时，cookie 会带有 sessionid 这个字段。</p></blockquote><p>express 中操作的 session 使用 cookie-session 模块</p><blockquote><p>cookie-session 包的对 session 设置与获取都是基于 req 请求对象。</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> i <span class="token parameter variable">-S</span> cookie-session
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>示例代码:</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;express&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> session <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;cookie-session&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>
  <span class="token function">session</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;sessionId&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// 给sessionid加密的key,随便填写，擦下键盘即可</span>
    <span class="token literal-property property">secret</span><span class="token operator">:</span> <span class="token string">&quot;afsfwefwlfjewlfewfef&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">maxAge</span><span class="token operator">:</span> <span class="token number">20</span> <span class="token operator">*</span> <span class="token number">60</span> <span class="token operator">*</span> <span class="token number">1000</span><span class="token punctuation">,</span> <span class="token comment">// 20分钟</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;/&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>req<span class="token punctuation">.</span>session<span class="token punctuation">[</span><span class="token string">&quot;view&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    req<span class="token punctuation">.</span>session<span class="token punctuation">[</span><span class="token string">&quot;view&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    req<span class="token punctuation">.</span>session<span class="token punctuation">[</span><span class="token string">&quot;view&quot;</span><span class="token punctuation">]</span><span class="token operator">++</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">欢迎您第 </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>req<span class="token punctuation">.</span>session<span class="token punctuation">[</span><span class="token string">&quot;view&quot;</span><span class="token punctuation">]</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> 次访问！</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
app<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">8080</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,24),t=[e];function c(i,l){return s(),a("div",null,t)}const k=n(p,[["render",c],["__file","06_express_cookie.html.vue"]]);export{k as default};
