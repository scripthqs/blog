<template><div><h1 id="provide-与-inject" tabindex="-1"><a class="header-anchor" href="#provide-与-inject" aria-hidden="true">#</a> provide 与 inject</h1>
<p><img src="@source/frame/vue/images/provide.png" alt="provide和inject"></p>
<ul>
<li>
<p>作用：实现祖与后代组件间通信</p>
</li>
<li>
<p>套路：父组件有一个 <code v-pre>provide</code> 选项来提供数据，后代组件有一个 <code v-pre>inject</code> 选项来开始使用这些数据</p>
</li>
<li>
<p>具体写法：</p>
<ol>
<li>
<p>祖组件中：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token operator">...</span><span class="token operator">...</span>
    <span class="token keyword">let</span> car <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">'奔驰'</span><span class="token punctuation">,</span><span class="token literal-property property">price</span><span class="token operator">:</span><span class="token string">'40万'</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token function">provide</span><span class="token punctuation">(</span><span class="token string">'car'</span><span class="token punctuation">,</span>car<span class="token punctuation">)</span>
    <span class="token operator">...</span><span class="token operator">...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>后代组件中：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token function">setup</span><span class="token punctuation">(</span><span class="token parameter">props<span class="token punctuation">,</span>context</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token operator">...</span><span class="token operator">...</span>
    <span class="token keyword">const</span> car <span class="token operator">=</span> <span class="token function">inject</span><span class="token punctuation">(</span><span class="token string">'car'</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>car<span class="token punctuation">}</span>
    <span class="token operator">...</span><span class="token operator">...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
</li>
</ul>
</div></template>


