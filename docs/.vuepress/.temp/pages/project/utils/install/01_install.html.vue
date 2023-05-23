<template><div><h1 id="使用自定义工具包" tabindex="-1"><a class="header-anchor" href="#使用自定义工具包" aria-hidden="true">#</a> 使用自定义工具包</h1>
<h2 id="下载工具包" tabindex="-1"><a class="header-anchor" href="#下载工具包" aria-hidden="true">#</a> 下载工具包</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> hqs-utils
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="网页中引入并使用" tabindex="-1"><a class="header-anchor" href="#网页中引入并使用" aria-hidden="true">#</a> 网页中引入并使用</h2>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>./node_modules/hqs-utils/dist/hqs-utils.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  utils<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="模块化引入并使用" tabindex="-1"><a class="header-anchor" href="#模块化引入并使用" aria-hidden="true">#</a> 模块化引入并使用</h2>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 使用ESM引入</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>test<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'hqs-utils'</span>
<span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// 使用commonjs引入</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span>test<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span>'hqs<span class="token operator">-</span>utils<span class="token punctuation">)</span>
<span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


