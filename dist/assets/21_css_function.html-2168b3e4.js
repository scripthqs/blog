import{_ as n,o as s,c as a,f as e}from"./app-440c3c5c.js";const t={},i=e(`<h1 id="原生-css-函数" tabindex="-1"><a class="header-anchor" href="#原生-css-函数" aria-hidden="true">#</a> 原生 CSS 函数</h1><h2 id="var-函数" tabindex="-1"><a class="header-anchor" href="#var-函数" aria-hidden="true">#</a> var 函数</h2><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">:root</span> <span class="token punctuation">{</span>
  <span class="token comment">/* 定义了一个变量(CSS属性) */</span>
  <span class="token comment">/* 只有后代元素可以使用 */</span>
  <span class="token property">--main-color</span><span class="token punctuation">:</span> #f00<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.box</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--main-color<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.title</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--main-color<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="calc-函数" tabindex="-1"><a class="header-anchor" href="#calc-函数" aria-hidden="true">#</a> calc 函数</h2><p>calc() 函数可以在执行 css 属性值时执行一些计算。calc() 内部运算符两侧必须各加一个空格。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.box</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 500px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> orange<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.item</span> <span class="token punctuation">{</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.item1</span> <span class="token punctuation">{</span>
  <span class="token comment">/* width的百分比相对于包含块(父元素) */</span>
  <span class="token property">width</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span>100% - 100px<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #f00<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.item2</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #0f0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* &lt;div class=&quot;box&quot;&gt;
  &lt;div class=&quot;item item1&quot;&gt;&lt;/div&gt;
  &lt;div class=&quot;item item2&quot;&gt;&lt;/div&gt;
&lt;/div&gt; */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="blur-函数" tabindex="-1"><a class="header-anchor" href="#blur-函数" aria-hidden="true">#</a> blur 函数</h2><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* img {
      filter: blur(5px);
    } */</span>

<span class="token selector">.box</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
  <span class="token comment">/* filter: blur(5px); */</span>
<span class="token punctuation">}</span>

<span class="token selector">.cover</span> <span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>255<span class="token punctuation">,</span> 255<span class="token punctuation">,</span> 255<span class="token punctuation">,</span> 0.2<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">backdrop-filter</span><span class="token punctuation">:</span> <span class="token function">blur</span><span class="token punctuation">(</span>10px<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* &lt;div class=&quot;box&quot;&gt;
  &lt;img src=&quot;xxx.png&quot; alt=&quot;&quot;&gt;
  &lt;div class=&quot;cover&quot;&gt;&lt;/div&gt;
&lt;/div&gt; */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="gradient-函数" tabindex="-1"><a class="header-anchor" href="#gradient-函数" aria-hidden="true">#</a> gradient 函数</h2><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.box</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>

  <span class="token comment">/* background-color: orange; */</span>
  <span class="token comment">/* background-image: linear-gradient(red, blue); */</span>
  <span class="token comment">/* 改变方向 */</span>
  <span class="token comment">/* background-image: linear-gradient(to right, red, blue); */</span>
  <span class="token comment">/* background-image: linear-gradient(to right top, red, blue); */</span>
  <span class="token comment">/* background-image: linear-gradient(-45deg, red, blue); */</span>
  <span class="token comment">/* background-image: linear-gradient(to right, red, blue 40px, orange 60%, purple 100%); */</span>

  <span class="token comment">/* radial-gradient */</span>
  <span class="token comment">/* background-image: radial-gradient(red, blue); */</span>
  <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token function">radial-gradient</span><span class="token punctuation">(</span>at 0% 50%<span class="token punctuation">,</span> red<span class="token punctuation">,</span> blue<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* &lt;div class=&quot;box&quot;&gt;&lt;/div&gt; */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置-css-变量" tabindex="-1"><a class="header-anchor" href="#配置-css-变量" aria-hidden="true">#</a> 配置 css 变量</h2><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">:root</span> <span class="token punctuation">{</span>
  <span class="token property">--primary-color</span><span class="token punctuation">:</span> #ff9854<span class="token punctuation">;</span>
  <span class="token property">--line-color</span><span class="token punctuation">:</span> #faf8f9<span class="token punctuation">;</span>
  <span class="token property">--theme-linear-gradient</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>90deg<span class="token punctuation">,</span> #fa8c1d<span class="token punctuation">,</span> #fcaf3f<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">/* 全局修改: 任何地方只要用到-van-tabbar-item-icon-size都会被修改掉 */</span>
  <span class="token comment">/* --van-tabbar-item-icon-size: 30px !important; */</span>

  <span class="token comment">/* 全局修改: 修改search样式 */</span>
  <span class="token property">--van-primary-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--primary-color<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--van-search-left-icon-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--primary-color<span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),p=[i];function c(l,o){return s(),a("div",null,p)}const r=n(t,[["render",c],["__file","21_css_function.html.vue"]]);export{r as default};
