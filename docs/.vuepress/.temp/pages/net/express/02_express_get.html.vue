<template><div><h1 id="访问调试" tabindex="-1"><a class="header-anchor" href="#访问调试" aria-hidden="true">#</a> 访问调试</h1>
<h2 id="调试工具" tabindex="-1"><a class="header-anchor" href="#调试工具" aria-hidden="true">#</a> 调试工具</h2>
<p>在测试请求的时候，<code v-pre>GET</code>类型的请求我们可以直接通过地址栏访问 URL 来进行，对于<code v-pre>POST/PUT/DELETE</code>等特殊类型的请求，我们往往无法通过直接访问地址来实现，这个时候就需要使用三方测试工具了。常见的测试工具有：</p>
<ul>
<li>
<p><strong>postman</strong></p>
</li>
<li>
<p>apipost</p>
</li>
<li>
<p>apizza</p>
</li>
</ul>
<p>以上三个，任选其一即可。</p>
<h2 id="请求方式" tabindex="-1"><a class="header-anchor" href="#请求方式" aria-hidden="true">#</a> 请求方式</h2>
<p>在前后端分离式开发中，常见的增删改查不再是纯粹的<code v-pre>GET+POST</code>的两种请求方式，而是分的更加细化：</p>
<ul>
<li>GET：<strong>查询</strong>请求类型
<ul>
<li>取全部的数据（列表）</li>
<li>取单个的数据（详情）</li>
</ul>
</li>
<li>POST：<strong>新增</strong>请求类型
<ul>
<li>新增是不带条件</li>
</ul>
</li>
<li>PUT：<strong>修改</strong>请求类型
<ul>
<li>修改是要条件的</li>
<li>修改条件的传递是通过地址栏传递的（restful 规范）</li>
<li>修改的数据主体是通过请求体传递的（请求体发送方式与 post 一致）</li>
</ul>
</li>
<li>DELETE：<strong>删除</strong>请求类型
<ul>
<li>删除需要条件的</li>
<li>条件通过地址栏传递的</li>
</ul>
</li>
</ul>
<p>这种对请求方法（<code v-pre>请求动词</code>）约束的规范叫做**<code v-pre>restFul</code>规范**。该规范不是硬性要求，但是接口设计的时候一般都会遵守，其规范的不仅仅是请求方式，在请求地址形式、响应状态码等方面也存在规范要求。</p>
<p>在 Express 中，符合<code v-pre>restFul</code>规范的<code v-pre>请求动词</code>也是被支持的，例如如下代码：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"express"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">"/"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">"get请求"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

app<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">"/"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">"post请求"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

app<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"/"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">"put请求"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

app<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token string">"/"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">"delete请求"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

app<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">8080</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"Server is running at http://127.0.0.1:8080"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>注意点：如果有<code v-pre>地址都一样，但是需要支持所有的请求动词</code>这种需求，则可以简写成以下代码：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>app<span class="token punctuation">.</span><span class="token function">all</span><span class="token punctuation">(</span><span class="token string">"/"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token comment">// 业务代码，只要路径匹配上即可</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>but，这种方式尽量少用！！甚至别用。虽然 all 的请求方式匹配可以所有的请求类型，但是存在安全隐患。</p>
</blockquote>
</div></template>


