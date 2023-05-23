import{_ as n,o as s,c as a,f as e}from"./app-66b3a2f7.js";const c={},t=e(`<h1 id="选择器" tabindex="-1"><a class="header-anchor" href="#选择器" aria-hidden="true">#</a> 选择器</h1><p>css 语法是选择器加上声明块</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">选择器</span> <span class="token punctuation">{</span>
  <span class="token property">属性名</span><span class="token punctuation">:</span> 属性值<span class="token punctuation">;</span>
  <span class="token property">属性名</span><span class="token punctuation">:</span> 属性值<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/*一个属性有多个值的话，那么多个值用空格隔开*/</span>
<span class="token comment">/*css只有这一种注释*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="基本选择器" tabindex="-1"><a class="header-anchor" href="#基本选择器" aria-hidden="true">#</a> 基本选择器</h2><p>一般来说，类上样式，id 上行为，css 都使用 class，js 上使用 id。所以 class 选择器比 id 选择器使用更多。</p><h3 id="元素选择器" tabindex="-1"><a class="header-anchor" href="#元素选择器" aria-hidden="true">#</a> 元素选择器</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">p</span> <span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="类选择器" tabindex="-1"><a class="header-anchor" href="#类选择器" aria-hidden="true">#</a> 类选择器</h3><p>类选择器，即 class 选择器。</p><p><code>.</code>开头</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.box</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="id-选择器" tabindex="-1"><a class="header-anchor" href="#id-选择器" aria-hidden="true">#</a> ID 选择器</h3><p><code>#</code>开头，id 值不要重复，class 可以重复。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">#app</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="通用选择器" tabindex="-1"><a class="header-anchor" href="#通用选择器" aria-hidden="true">#</a> 通用选择器</h3><p><code>*</code>，所有的元素</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">*</span> <span class="token punctuation">{</span>
 <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
 padding 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="复合选择器" tabindex="-1"><a class="header-anchor" href="#复合选择器" aria-hidden="true">#</a> 复合选择器</h2><h3 id="交集选择器" tabindex="-1"><a class="header-anchor" href="#交集选择器" aria-hidden="true">#</a> 交集选择器</h3><p>选中同时符合多个条件的元素，选择器之间紧密连接，要写元素选择器时必须用元素选择器开头</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">div.box1</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">div#box2</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>
  <span class="token comment">/*这种写法语法上没问题，但是id选择器都是唯一的，没必要*/</span>
<span class="token punctuation">}</span>
<span class="token selector">.a.b.c</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> black<span class="token punctuation">;</span>
  <span class="token comment">/*当一个元素同时有a,b,c的class时生效*/</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="并集选择器" tabindex="-1"><a class="header-anchor" href="#并集选择器" aria-hidden="true">#</a> 并集选择器</h3><p>同时选择多个选择器对应的元素，多个选择器之间用逗号隔开</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">p,
h1,
.box1,
#id</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="关系选择器" tabindex="-1"><a class="header-anchor" href="#关系选择器" aria-hidden="true">#</a> 关系选择器</h2><h3 id="后代选择器" tabindex="-1"><a class="header-anchor" href="#后代选择器" aria-hidden="true">#</a> 后代选择器</h3><p>多个选择器之间，使用空格隔开</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">ul li</span> <span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">div ul li</span> <span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="子代选择器" tabindex="-1"><a class="header-anchor" href="#子代选择器" aria-hidden="true">#</a> 子代选择器</h3><p>子代选择器只能选儿子，和后代不同，但是可以多写一个<code>&gt;</code>号</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">ul &gt; li</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">div &gt; span</span> <span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="兄弟选择器" tabindex="-1"><a class="header-anchor" href="#兄弟选择器" aria-hidden="true">#</a> 兄弟选择器</h3><p>下一个兄弟选择器：兄 + 弟，兄弟必须紧挨着，只能选后面的兄弟元素</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">p + span</span> <span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/*选中p后面相邻的第一个span*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>选择下面所有的兄弟选择器：<code>兄~弟</code>，只能选后面的兄弟元素</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">p ~ span</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/*选中的p后面所有的span*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="属性选择器" tabindex="-1"><a class="header-anchor" href="#属性选择器" aria-hidden="true">#</a> 属性选择器</h2><ul><li><code>元素[属性名]{}</code>选择含有这种属性的选择器，元素可以省略不写</li><li><code>元素[属性名=属性值]{}</code>选择含有这种属性名和属性值的选择器，元素可以省略不写</li><li><code>元素[属性名^=属性值]{}</code>选择这种属性值开头的选择器，元素可以省略不写</li><li><code>元素[属性名$=属性值]{}</code>选择这种属性值结尾的选择器，元素可以省略不写</li><li><code>元素[属性名*=属性值]{}</code>选择含有这种属性值的选择器，元素可以省略不写</li></ul><h2 id="伪类选择器" tabindex="-1"><a class="header-anchor" href="#伪类选择器" aria-hidden="true">#</a> 伪类选择器</h2><p><strong>伪类</strong>：用于描述一个元素的特殊状态，比如第一个子元素，被点击的元素，鼠标移入的元素。伪类用冒号来表示。</p><h3 id="超链接伪类" tabindex="-1"><a class="header-anchor" href="#超链接伪类" aria-hidden="true">#</a> 超链接伪类</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">a:link</span> <span class="token punctuation">{</span>
  <span class="token comment">/*超链接点击之前，只能a使用*/</span>
<span class="token punctuation">}</span>
<span class="token selector">a:visited</span> <span class="token punctuation">{</span>
  <span class="token comment">/*超链接被访问后，只能a使用*/</span>
  <span class="token comment">/*由于隐私的原因，这个伪类只能改超链接的颜色*/</span>
<span class="token punctuation">}</span>
<span class="token selector">a:hover</span> <span class="token punctuation">{</span>
  <span class="token comment">/*鼠标悬停在标签时*/</span>
<span class="token punctuation">}</span>
<span class="token selector">a:active</span> <span class="token punctuation">{</span>
  <span class="token comment">/*鼠标点击标签，但是不松手时*/</span>
<span class="token punctuation">}</span>

<span class="token comment">/*下面这伪类a不能使用*/</span>
<span class="token selector">:focus</span> <span class="token punctuation">{</span>
  <span class="token comment">/*某个标签获得焦点时的样式（比如某个输入框获得焦点）*/</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>超链接 a，这四种状态必须按照固定的顺序，<code>a:link 、a:visited 、a:hover 、a:active</code>，否则失效，“爱恨准则”：love hate，先爱后恨。</p><h3 id="结构伪类选择器" tabindex="-1"><a class="header-anchor" href="#结构伪类选择器" aria-hidden="true">#</a> 结构伪类选择器</h3><ul><li><code>E:first-child</code> 匹配父元素的第一个子元素 E。</li><li><code>E:last-child</code> 匹配父元素的最后一个子元素 E。</li><li><code>E:nth-child(n)</code> 匹配父元素的第 n 个子元素 E。n 的范围是（0~∞）</li><li><code>E:nth-child(odd)</code> 匹配奇数，或者 2n+1</li><li><code>E:nth-child(even)</code> 匹配偶数，或者 2n</li><li><code>E:nth-last-child(n)</code> 匹配父元素的倒数第 n 个子元素 E。</li><li><code>E:not(nth-of-type(n))</code> 除了第 n 个子元素。</li></ul><p>nth-child 排所有的子元素，nth-of-type 根据指定的元素排列</p><h3 id="伪元素选择器" tabindex="-1"><a class="header-anchor" href="#伪元素选择器" aria-hidden="true">#</a> 伪元素选择器</h3><p><strong>伪元素</strong>：表示页面中一些特殊的并不真实存在的元素（特殊的位置）。</p><p><strong>一个冒号<code>:</code>叫伪类（特殊的状态），两个冒号<code>::</code>叫伪元素（特殊的位置）</strong></p><ul><li><code>::before</code>：元素的开始</li><li><code>::after</code>：元素的最后</li><li>before 和 after 必须结合 content 属性使用，很重要</li></ul><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">p::before</span> <span class="token punctuation">{</span>
 <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&#39;abc&#39;</span>
<span class="token punctuation">}</span>
<span class="token selector">div::after</span> <span class="token punctuation">{</span>
 content； <span class="token string">&#39;xyz&#39;</span>
<span class="token punctuation">}</span>
<span class="token comment">/*通过这个加入的内容不能被选中*/</span>
<span class="token selector">p::before</span><span class="token punctuation">{</span>
 <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&#39;『&#39;</span>
<span class="token punctuation">}</span>
<span class="token selector">p::after</span><span class="token punctuation">{</span>
 <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&#39;』&#39;</span>
<span class="token punctuation">}</span>
<span class="token comment">/*通过这个t*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>::first-letter</code>：表示第一个字母</li><li><code>::first-line</code>：表示第一行</li><li><code>p::selection</code>：表示选中的内容</li></ul><h2 id="利用伪元素画三角" tabindex="-1"><a class="header-anchor" href="#利用伪元素画三角" aria-hidden="true">#</a> 利用伪元素画三角</h2><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.end::after</span> <span class="token punctuation">{</span>
  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&quot; &quot;</span><span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 4px solid #666<span class="token punctuation">;</span>
  <span class="token property">border-color</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">)</span> <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">)</span> <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">)</span> #666<span class="token punctuation">;</span>
  <span class="token property">-webkit-border-radius</span><span class="token punctuation">:</span> 3px<span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 3px<span class="token punctuation">;</span>
  <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">rotate</span><span class="token punctuation">(</span>45deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">-ms-transform</span><span class="token punctuation">:</span> <span class="token function">rotate</span><span class="token punctuation">(</span>45deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotate</span><span class="token punctuation">(</span>45deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
  <span class="token property">bottom</span><span class="token punctuation">:</span> 0px<span class="token punctuation">;</span>
  <span class="token property">right</span><span class="token punctuation">:</span> -12px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,54),p=[t];function i(l,o){return s(),a("div",null,p)}const u=n(c,[["render",i],["__file","04_selector.html.vue"]]);export{u as default};
