import{_ as s,o as n,c as a,f as e}from"./app-10c4e004.js";const t={},p=e(`<h1 id="css-api" tabindex="-1"><a class="header-anchor" href="#css-api" aria-hidden="true">#</a> css api</h1><h2 id="aspect-ratio" tabindex="-1"><a class="header-anchor" href="#aspect-ratio" aria-hidden="true">#</a> aspect-ratio</h2><p><code>aspect-ratio</code> 是 CSS 属性，用于设置元素的宽高比（宽:高），让元素在自适应布局时自动保持指定比例。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.square</span> <span class="token punctuation">{</span>
  <span class="token property">aspect-ratio</span><span class="token punctuation">:</span> 1 / 1<span class="token punctuation">;</span> <span class="token comment">/* 正方形 */</span>
<span class="token punctuation">}</span>
<span class="token selector">.banner</span> <span class="token punctuation">{</span>
  <span class="token property">aspect-ratio</span><span class="token punctuation">:</span> 16 / 9<span class="token punctuation">;</span> <span class="token comment">/* 横幅 */</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="offset-path" tabindex="-1"><a class="header-anchor" href="#offset-path" aria-hidden="true">#</a> offset-path</h2><p>offset-path 可以实现元素不规则的运动</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token atrule"><span class="token rule">@keyframes</span> moveOnPath</span> <span class="token punctuation">{</span>
  <span class="token selector">to</span> <span class="token punctuation">{</span>
    <span class="token property">offset-distance</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span> <span class="token comment">/* 终点 */</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token selector">.move</span> <span class="token punctuation">{</span>
  <span class="token property">offset-path</span><span class="token punctuation">:</span> <span class="token function">path</span><span class="token punctuation">(</span><span class="token string">&quot;M10,80 C40,10 65,10 95,80&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">offset-distance</span><span class="token punctuation">:</span> 0%<span class="token punctuation">;</span> <span class="token comment">/* 起点 */</span>
  <span class="token property">animation</span><span class="token punctuation">:</span> moveOnPath 3s linear infinite<span class="token punctuation">;</span> <span class="token comment">/* 3s 为运动时间 */</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),c=[p];function i(o,l){return n(),a("div",null,c)}const r=s(t,[["render",i],["__file","23_css.html.vue"]]);export{r as default};
