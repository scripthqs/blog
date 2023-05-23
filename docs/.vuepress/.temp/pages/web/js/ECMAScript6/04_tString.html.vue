<template><div><h1 id="模板字符串" tabindex="-1"><a class="header-anchor" href="#模板字符串" aria-hidden="true">#</a> 模板字符串</h1>
<p>模板字符串（template string）是增强版的字符串，用<strong>反引号</strong>（`）标识（TAB 键上面），特点：</p>
<ol>
<li><strong>字符串中可以出现换行符</strong></li>
<li><strong>可以使用 ${xxx} 形式输出变量</strong></li>
</ol>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> s <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">我是字符串</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> s<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//1.字符串中可以出现换行符</span>
<span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">
        &lt;ul>
            &lt;li>列表1&lt;/li>
            &lt;li>列表2&lt;/li>
            &lt;li>列表3&lt;/li>
        &lt;/ul></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//2.拼接变量，使用 ${xxx} 形式输出变量</span>
<span class="token keyword">let</span> name <span class="token operator">=</span> <span class="token string">"小明"</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> str2 <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">姓名：</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str2<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>当遇到字符串与变量拼接的情况使用模板字符串</strong>。</p>
<h2 id="模板字符串配合函数" tabindex="-1"><a class="header-anchor" href="#模板字符串配合函数" aria-hidden="true">#</a> 模板字符串配合函数</h2>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"参数:"</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">foo</span><span class="token punctuation">(</span><span class="token string">"abc"</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">2.0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
foo<span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">my name is </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">, age is </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>age<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">, height is </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token number">1.88</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


