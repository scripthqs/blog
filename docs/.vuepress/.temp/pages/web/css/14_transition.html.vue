<template><div><h1 id="过渡-transition" tabindex="-1"><a class="header-anchor" href="#过渡-transition" aria-hidden="true">#</a> 过渡 transition</h1>
<p>过渡 transition 属性可以指定一个属性发生变化时的切换方式。常常和 .hover 搭配使用。</p>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token property">transition</span><span class="token punctuation">:</span> 变化的属性 持续时间 运动曲线 延迟时间<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol>
<li>
<p>属性：想要变化的 css 属性，width/height/bgc/margin/padding，如果想要所有的属性都变化过渡，写 all</p>
</li>
<li>
<p>时间：过渡持续的时间，单位是秒（必须写单位），0.5s</p>
</li>
<li>
<p>运动曲线：</p>
<ul>
<li><code v-pre>ease</code>默认值，慢速开始，先加速再减速。</li>
<li><code v-pre>linear</code>匀速运动</li>
<li><code v-pre>ease-in</code>加速运动</li>
<li><code v-pre>ease-out</code>减速运动</li>
<li><code v-pre>ease-in-out</code>先加速后减速</li>
<li><code v-pre>cubic-bezier()</code>来指定时序函数。</li>
<li><code v-pre>steps()</code>分步执行时序函数</li>
<li>具体值参看<a href="http://cubic-bezier.com" target="_blank" rel="noopener noreferrer">http://cubic-bezier.com<ExternalLinkIcon/></a></li>
</ul>
</li>
<li>
<p>延迟时间：单位是秒（必须写单位），默认是 0s，可以省略</p>
</li>
</ol>
<p>过渡写在本身上，<strong>谁做动画给谁加</strong></p>
<h2 id="transition-property" tabindex="-1"><a class="header-anchor" href="#transition-property" aria-hidden="true">#</a> transition-property</h2>
<p>transition-property 指定要执行过渡的属性，多个属性使用<code v-pre>,</code>隔开，可以写<code v-pre>all</code>。大部分属性都支持过渡。一个有效值到另一个有效值就可以。</p>
<h2 id="transition-duration" tabindex="-1"><a class="header-anchor" href="#transition-duration" aria-hidden="true">#</a> transition-duration</h2>
<p>transition-duration 指定过渡的持续时间，<code v-pre>1s=1000ms</code></p>
<h2 id="transition-timing-function" tabindex="-1"><a class="header-anchor" href="#transition-timing-function" aria-hidden="true">#</a> transition-timing-function</h2>
<p>transition-timing-function 指定过渡的时序函数</p>
<ul>
<li><code v-pre>ease</code>默认值，慢速开始，先加速再减速。</li>
<li><code v-pre>linear</code>匀速运动</li>
<li><code v-pre>ease-in</code>加速运动</li>
<li><code v-pre>ease-out</code>减速运动</li>
<li><code v-pre>ease-in-out</code>先加速后减速</li>
<li><code v-pre>cubic-bezier()</code>来指定时序函数。</li>
<li><code v-pre>steps()</code>分步执行时序函数</li>
<li>具体值参看<a href="http://cubic-bezier.com" target="_blank" rel="noopener noreferrer">http://cubic-bezier.com<ExternalLinkIcon/></a></li>
</ul>
<h2 id="transition-delay" tabindex="-1"><a class="header-anchor" href="#transition-delay" aria-hidden="true">#</a> transition-delay</h2>
<p>transition-delay 设置过渡效果的延迟</p>
<h2 id="transition" tabindex="-1"><a class="header-anchor" href="#transition" aria-hidden="true">#</a> transition</h2>
<p>transition 可以同时设置过渡的相关属性，如果要写延迟，第一个时间是持续时间，第二个是延迟时间。</p>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token property">transition</span><span class="token punctuation">:</span> all 1s ease 0.5s<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">.container</span> <span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #f00<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.box</span> <span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>

  <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> orange<span class="token punctuation">;</span>

  <span class="token comment">/* 告知浏览器 box 在进行一些CSS属性变化的时候有一个过渡效果 */</span>
  <span class="token comment">/* transition-property: transform, left; */</span>
  <span class="token comment">/* transition-property: all;
      transition-duration: 1s;
      transition-timing-function: ease-in;
      transition-delay: 1s; */</span>

  <span class="token comment">/* 简写属性 */</span>
  <span class="token property">transition</span><span class="token punctuation">:</span> all 1s ease-in 1s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.container:hover .box</span> <span class="token punctuation">{</span>
  <span class="token property">left</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>100px<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 500px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

&lt;div class=<span class="token string">"container"</span>>
   &lt;div class=<span class="token string">"box"</span>>&lt;/div>
&lt;/div>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


