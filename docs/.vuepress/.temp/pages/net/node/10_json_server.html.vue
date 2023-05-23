<template><div><h1 id="json-server" tabindex="-1"><a class="header-anchor" href="#json-server" aria-hidden="true">#</a> json-server</h1>
<h2 id="json-server-简介" tabindex="-1"><a class="header-anchor" href="#json-server-简介" aria-hidden="true">#</a> json-server 简介</h2>
<p>json-server 是一个在前端本地运行，可以存储数据的 server，可以模拟接口，操作模拟数据。</p>
<h2 id="使用-json-server" tabindex="-1"><a class="header-anchor" href="#使用-json-server" aria-hidden="true">#</a> 使用 json-server</h2>
<ol>
<li>
<p>下载</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> json-server
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>目标根目录下创建数据库 json 文件: <code v-pre>db.json</code></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
<span class="token string-property property">"posts"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span> <span class="token string-property property">"id"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token string-property property">"title"</span><span class="token operator">:</span> <span class="token string">"json-server"</span><span class="token punctuation">,</span> <span class="token string-property property">"author"</span><span class="token operator">:</span> <span class="token string">"typicode"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token string-property property">"id"</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token string-property property">"title"</span><span class="token operator">:</span> <span class="token string">"json-server2"</span><span class="token punctuation">,</span> <span class="token string-property property">"author"</span><span class="token operator">:</span> <span class="token string">"typicode"</span> <span class="token punctuation">}</span>
<span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token string-property property">"comments"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span> <span class="token string-property property">"id"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token string-property property">"body"</span><span class="token operator">:</span> <span class="token string">"some comment"</span><span class="token punctuation">,</span> <span class="token string-property property">"postId"</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span>
<span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token string-property property">"profile"</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token string-property property">"name"</span><span class="token operator">:</span> <span class="token string">"typicode"</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>启动服务器执行命令:</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>json<span class="token operator">-</span>server <span class="token operator">--</span>watch db<span class="token punctuation">.</span>json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>使用浏览器访问测试</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token literal-property property">http</span><span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>localhost<span class="token operator">:</span><span class="token number">3000</span><span class="token operator">/</span>posts
<span class="token literal-property property">http</span><span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>localhost<span class="token operator">:</span><span class="token number">3000</span><span class="token operator">/</span>posts<span class="token operator">/</span><span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
</div></template>


