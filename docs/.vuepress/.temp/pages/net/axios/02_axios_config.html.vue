<template><div><h1 id="axios-的配置" tabindex="-1"><a class="header-anchor" href="#axios-的配置" aria-hidden="true">#</a> axios 的配置</h1>
<h2 id="基本配置" tabindex="-1"><a class="header-anchor" href="#基本配置" aria-hidden="true">#</a> 基本配置</h2>
<ol>
<li>baseURL</li>
<li>timeout</li>
<li>headers</li>
</ol>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 1.baseURL</span>
<span class="token keyword">const</span> baseURL <span class="token operator">=</span> <span class="token string">"https://httpbin.org/"</span><span class="token punctuation">;</span>

<span class="token comment">// 给axios实例配置公共的基础配置</span>
axios<span class="token punctuation">.</span>defaults<span class="token punctuation">.</span>baseURL <span class="token operator">=</span> baseURL<span class="token punctuation">;</span>
axios<span class="token punctuation">.</span>defaults<span class="token punctuation">.</span>timeout <span class="token operator">=</span> <span class="token number">10000</span><span class="token punctuation">;</span>
axios<span class="token punctuation">.</span>defaults<span class="token punctuation">.</span>headers <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="axios-all" tabindex="-1"><a class="header-anchor" href="#axios-all" aria-hidden="true">#</a> axios.all</h2>
<p>使用 axios 发送多个请求</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// baseURL</span>
<span class="token keyword">const</span> baseURL <span class="token operator">=</span> <span class="token string">"https://httpbin.org/"</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> params <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">pageIndex</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">pageSize</span><span class="token operator">:</span> <span class="token number">20</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
axios<span class="token punctuation">.</span><span class="token function">all</span><span class="token punctuation">(</span><span class="token punctuation">[</span>axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">"/get"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> params <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span> axios<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">"/post"</span><span class="token punctuation">,</span> params<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"res:"</span><span class="token punctuation">,</span> res<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="axios-创建实例" tabindex="-1"><a class="header-anchor" href="#axios-创建实例" aria-hidden="true">#</a> axios 创建实例</h2>
<p>axios 默认库提供给我们的实例对象 axios，默认就是直接使用的这个实例，这个默认的实例会存在一些问题：</p>
<ol>
<li>当给该实例设置一些默认配置时, 这些配置就被固定下来了</li>
<li>如某些请求需要使用特定的 baseURL 或者 timeout 等</li>
<li>就可以创建新的实例, 并且传入属于该实例的配置信息</li>
</ol>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// axios默认库提供给我们的实例对象</span>
axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">"https://httpbin.org/get"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 创建其他的实例发送网络请求</span>
<span class="token keyword">const</span> baseURL <span class="token operator">=</span> <span class="token string">"https://httpbin.org/"</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> instance1 <span class="token operator">=</span> axios<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  baseURL<span class="token punctuation">,</span>
  <span class="token literal-property property">timeout</span><span class="token operator">:</span> <span class="token number">5000</span><span class="token punctuation">,</span>
  <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
instance1<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">"/get"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//创建多个实例</span>
<span class="token keyword">const</span> instance2 <span class="token operator">=</span> axios<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">timeout</span><span class="token operator">:</span> <span class="token number">5000</span><span class="token punctuation">,</span>
  <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
instance2<span class="token punctuation">.</span>defaults<span class="token punctuation">.</span>baseURL <span class="token operator">=</span> baseURL<span class="token punctuation">;</span>
instance2<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">"/get"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


