import{_ as n,o as s,c as a,f as e}from"./app-440c3c5c.js";const t={},p=e(`<h1 id="居中问题" tabindex="-1"><a class="header-anchor" href="#居中问题" aria-hidden="true">#</a> 居中问题</h1><h2 id="行内元素居中" tabindex="-1"><a class="header-anchor" href="#行内元素居中" aria-hidden="true">#</a> 行内元素居中</h2><p>行内元素（文字、图片等）水平垂直居中比较简单</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.father</span> <span class="token punctuation">{</span>
  <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span> <span class="token comment">/*水平居中*/</span>
  <span class="token comment">/*让文字的行高 等于 盒子的高度，可以让单行文本垂直居中*/</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
  <span class="token property">line-height</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="块级元素居中" tabindex="-1"><a class="header-anchor" href="#块级元素居中" aria-hidden="true">#</a> 块级元素居中</h2><p>在标准流中，盒子在父亲里居中（水平方向看），可以将其设置<code>margin: 0 auto</code>属性。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.father</span> <span class="token punctuation">{</span>
  <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span> <span class="token comment">/*开启BFC，解决外边距重叠问题*/</span>
<span class="token punctuation">}</span>
<span class="token selector">.son</span> <span class="token punctuation">{</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 0 auto<span class="token punctuation">;</span> <span class="token comment">/*水平居中*/</span>
  <span class="token property">margin-top</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>father.h-son.h<span class="token punctuation">)</span>/2<span class="token punctuation">;</span> <span class="token comment">/*（父元素高度-子元素高度）的一半*/</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="开启绝对定位后" tabindex="-1"><a class="header-anchor" href="#开启绝对定位后" aria-hidden="true">#</a> 开启绝对定位后</h2><p>方法 1（不推荐）：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.father</span> <span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span> <span class="token comment">/*父元素开启相对定位*/</span>
<span class="token punctuation">}</span>
<span class="token selector">.son</span> <span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span> <span class="token comment">/*子元素开启绝对定位*/</span>
  <span class="token comment">/*脱离文档流后，此时这个属性不能实现水平居中*/</span>
  <span class="token comment">/*margin: 0 auto;*/</span>
  <span class="token property">left</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
  <span class="token property">margin-left</span><span class="token punctuation">:</span> -son.w/2<span class="token punctuation">;</span> <span class="token comment">/*负子元素的宽度一半大小*/</span>
  <span class="token property">top</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
  <span class="token property">margin-top</span><span class="token punctuation">:</span> -son.h/2<span class="token punctuation">;</span> <span class="token comment">/*负子元素的高度一半大小*/</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>问题：</p><ul><li>要求指定子元素的宽高，才能写出 <code>margin-top</code> 和 <code>margin-left</code> 的属性值。</li><li>在通常情况下，对那些需要居中的元素来说，其宽高往往是由其内容来决定的，不建议固定宽高。</li></ul><p>方法 2（推荐）：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.father</span> <span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span> <span class="token comment">/*父元素开启相对定位*/</span>
<span class="token punctuation">}</span>
<span class="token selector">.son</span> <span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span> <span class="token comment">/*子元素开启绝对定位*/</span>
  <span class="token comment">/*脱离文档流后，此时这个属性不能实现水平居中*/</span>
  <span class="token comment">/*margin: 0 auto;*/</span>
  <span class="token property">left</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
  <span class="token property">top</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>-50%<span class="token punctuation">,</span> -50%<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>translate()</strong> 函数中使用百分比值时，是以这个元素自身的宽度和高度为基准进行换算和移动的（<strong>动态计算宽高</strong>）。</p><h2 id="flex" tabindex="-1"><a class="header-anchor" href="#flex" aria-hidden="true">#</a> flex</h2><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.box</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,17),c=[p];function o(i,l){return s(),a("div",null,c)}const r=n(t,[["render",o],["__file","19_center.html.vue"]]);export{r as default};
