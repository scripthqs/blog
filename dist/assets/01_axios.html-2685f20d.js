import{_ as e,r as o,o as c,c as i,b as n,e as s,d as t,a as l,f as p}from"./app-4d122d87.js";const u={},r=n("h1",{id:"axios-基础",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#axios-基础","aria-hidden":"true"},"#"),s(" axios 基础")],-1),d=n("h2",{id:"axios-简介",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#axios-简介","aria-hidden":"true"},"#"),s(" axios 简介")],-1),k=n("li",null,"前端最流行的 ajax 请求库",-1),v=n("li",null,"react/vue 官方都推荐使用 axios 发 ajax 请求",-1),m={href:"https://github.com/axios/axios",target:"_blank",rel:"noopener noreferrer"},b=n("p",null,[s("调用 axios 方法，"),n("strong",null,"返回的是一个 promise 对象")],-1),h={href:"https://httpbin.org/#/",target:"_blank",rel:"noopener noreferrer"},g=p('<h2 id="axios-特点" tabindex="-1"><a class="header-anchor" href="#axios-特点" aria-hidden="true">#</a> axios 特点</h2><ol><li>基于 xhr + promise 的异步 ajax 请求库</li><li>浏览器端/node 端都可以使用</li><li>支持请求／响应拦截器</li><li>支持请求取消</li><li>请求/响应数据转换</li><li>批量发送多个请求</li></ol><h2 id="axios-常用语法" tabindex="-1"><a class="header-anchor" href="#axios-常用语法" aria-hidden="true">#</a> axios 常用语法</h2><p><code>axios(config)</code>: 通用/最本质的发任意类型请求的方式 <code>axios(url[, config])</code>: 可以只指定 url 发 get 请求 <code>axios.request(config)</code>: 等同于 axios(config) <code>axios.get(url[, config])</code>: 发 get 请求 <code>axios.delete(url[, config])</code>: 发 delete 请求 <code>axios.post(url[, data, config])</code>: 发 post 请求 <code>axios.put(url[, data, config])</code>: 发 put 请求 <code>axios.defaults.xxx</code>: 请求的默认全局配置（method\\baseURL\\params\\timeout…） <code>axios.interceptors.request.use()</code>: 添加请求拦截器 <code>axios.interceptors.response.use()</code>: 添加响应拦截器 <code>axios.create([config])</code>: 创建一个新的 axios(它没有下面的功能) <code>axios.Cancel()</code>: 用于创建取消请求的错误对象 <code>axios.CancelToken()</code>: 用于创建取消请求的 token 对象 <code>axios.isCancel()</code>: 是否是一个取消请求的错误 <code>axios.all(promises)</code>: 用于批量执行多个异步请求 <code>axios.spread()</code>: 用来指定接收所有成功数据的回调函数的方法</p>',4),x=p(`<p><img src="https://raw.githubusercontent.com/scripthqs/assets/master/blog/axios.png" alt="axios"></p><h2 id="axios-的基本使用" tabindex="-1"><a class="header-anchor" href="#axios-的基本使用" aria-hidden="true">#</a> axios 的基本使用</h2><h3 id="axios-发送-get-请求" tabindex="-1"><a class="header-anchor" href="#axios-发送-get-请求" aria-hidden="true">#</a> axios 发送 get 请求</h3><p>发起 GET 请求：<strong>通过 params 传参</strong></p><ol><li><p>通过<code>axios({})</code>通用方式发送</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">axios</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// 请求方式</span>
  <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">&quot;GET&quot;</span><span class="token punctuation">,</span>
  <span class="token comment">// 请求的地址</span>
  <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&quot;https://autumnfish.cn/top/playlist&quot;</span><span class="token punctuation">,</span>
  <span class="token comment">// URL 中的查询参数</span>
  <span class="token literal-property property">params</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">limit</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
    <span class="token literal-property property">order</span><span class="token operator">:</span> <span class="token string">&quot;new&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">result</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>通过<code>axios(&#39;url&#39;,{})</code>发送</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">axios</span><span class="token punctuation">(</span><span class="token string">&quot;https://autumnfish.cn/top/playlist&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token comment">// 请求方式</span>
  <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">&quot;GET&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">params</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">limit</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
    <span class="token literal-property property">order</span><span class="token operator">:</span> <span class="token string">&quot;new&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">result</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>通过<code>axios.get(&#39;url&#39;,{})</code>发送</p><p>get 请求传递 2 个参数：</p><ol><li>请求的地址</li><li>表示配置信息，</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//  方式1</span>
axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;https://autumnfish.cn/top/playlist?limit=10&amp;order=new&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">result</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 方式2，开发中，这种使用最多</span>
axios
  <span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;https://autumnfish.cn/top/playlist&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token comment">// URL 中的查询参数</span>
    <span class="token literal-property property">params</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">limit</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
      <span class="token literal-property property">order</span><span class="token operator">:</span> <span class="token string">&quot;new&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">result</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h3 id="axios-发送-post-请求" tabindex="-1"><a class="header-anchor" href="#axios-发送-post-请求" aria-hidden="true">#</a> axios 发送 post 请求</h3><p>发起 POST 请求：<strong>通过 data 传参</strong>，<strong>上面的前两种方法，get 和 post 都可以使用。</strong></p><p>通过<code>axios.post(&quot;&quot;,{},{})</code>发送</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>axios<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>post 请求传递 3 个参数，</p><ol><li>请求地址</li><li>传递的数据，在请求体中传递，默认是 json 格式</li><li>配置的信息，header 等</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 方式1</span>
axios
  <span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">&quot;https://httpbin.org/post&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">pageIndex</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
      <span class="token literal-property property">pageSize</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">,</span> <span class="token string">&quot;post-res--&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//方式2，开发中，这种使用最多</span>
axios
  <span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span>
    <span class="token string">&quot;https://httpbin.org/post&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">pageIndex</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
      <span class="token literal-property property">pageSize</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以使用 async 和 await 简化 promise</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>  <span class="token comment">// 如果调用某个方法的返回值是 Promise 实例，则前面可以添加 await！</span>
 <span class="token keyword">async</span> <span class="token function">created</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// await 只能用在被 async “修饰”的方法中</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> <span class="token literal-property property">data</span><span class="token operator">:</span> res <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">await</span> axios<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">&quot;https://autumnfish.cn/login/cellphone&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">phone</span><span class="token operator">:</span> <span class="token string">&#39;15588889999&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">password</span><span class="token operator">:</span> <span class="token string">&#39;123456789&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>调用 axios 之后，使用 async/await 进行简化</li><li>使用结构赋值，从 axios 封装的大对象中，把 data 属性解构出来</li><li>把解构出来的 data 属性，使用冒号<code>:</code>进行重命名{data: res}</li></ol>`,15);function f(y,_){const a=o("ExternalLinkIcon");return c(),i("div",null,[r,d,n("ol",null,[k,v,n("li",null,[n("a",m,[s("文档: https://github.com/axios/axios"),t(a)])])]),b,n("blockquote",null,[n("p",null,[s("接口测试网站"),n("a",h,[s("https://httpbin.org/#/"),t(a)])])]),g,l(" ![axios](./images/axios.png) "),x])}const j=e(u,[["render",f],["__file","01_axios.html.vue"]]);export{j as default};