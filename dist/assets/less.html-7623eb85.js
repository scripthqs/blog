import{_ as n,o as s,c as a,f as e}from"./app-007a9be1.js";const i={},l=e(`<h1 id="less" tabindex="-1"><a class="header-anchor" href="#less" aria-hidden="true">#</a> less</h1><h2 id="less-介绍" tabindex="-1"><a class="header-anchor" href="#less-介绍" aria-hidden="true">#</a> less 介绍</h2><p>less 是一门 css 预处理语言，less 是 css 增强版，通过 less 可以编写更少的代码实现更强大的样式。</p><p>常见的 css 预处理器：sass、less、stylus</p><h2 id="less-变量" tabindex="-1"><a class="header-anchor" href="#less-变量" aria-hidden="true">#</a> less 变量</h2><p>变量时指没有固定的值，可以改变的。因为 css 中的一些颜色和数值经常使用。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>@<span class="token property">变量</span><span class="token punctuation">:</span> 值<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><p>必须有@为前缀</p></li><li><p>不能包含特殊字符</p></li><li><p>不能以数字开头</p></li><li><p>大小写敏感</p></li><li><p>原生 css 支持设置变量，语法<code>--*</code>：</p><ul><li><code>--color:red</code></li></ul></li><li><p>后面通过 var 引用，语法<code>var(--*)</code></p><ul><li><code>var(--color)</code></li></ul></li><li><p>原生 css 支持计算，计算函数：</p></li><li><p><code>calc()</code></p></li></ul><p>less 中添加了许多的新特性，语法大体和 css 一致，但是 less 增添了许多 css 的扩展，浏览器不能直接执行 less 代码，要执行必须将 less 转化 css，再由浏览器执行。在 <code>vscode</code>下载<code>Easy LESS</code>插件。</p><ul><li>创建<code>style.less</code>的文件，文件名必须是<code>.less</code></li><li>保存时插件会自动生成一个<code>.css</code>文件</li><li>//是 less 的单行注释，/**/多行注释</li><li>在变量中可以存储一个任意的值，方便修改</li><li>变量的语法：<code>@变量名:变量值;</code>，变量值可以时颜色、尺寸|、路径、属性名等等 <ul><li>一般使用时，直接写<code>@变量名</code>即可，方便修改。</li><li>作为类名或一部分值使用时，<code>@{变量名}</code>使用。</li></ul></li><li>可以在变量声明前就使用变量</li><li><code>&amp;</code>相当于自身外边那个选择器</li><li><code>:extend()</code>为当前选择器扩展分组</li><li><code>.选择器();</code>直接对指定样式进行引用，<code>mixin</code>混合</li><li>使用类选择器时可以在选择器后面加一个括号，此时就创建了一个 minxi 函数。 <ul><li><code>.xuzeqi(){}</code>，之后直接引用。<code>.xunzeqi;</code></li></ul></li><li><code>average()</code>可以取值的平均值。可以填两个颜色。</li><li><code>darken(red,20%)</code>可以加深颜色</li><li>less 中可以直接将所有数值直接运算<code>+ - * /</code>，less 除法时需要用括号括起来。</li><li><code>@import &quot;其他less路径&quot;</code>可以将其他的 less 引入到当前的 less 中。</li><li><code>.map</code></li></ul><div class="language-less line-numbers-mode" data-ext="less"><pre class="language-less"><code><span class="token selector">&quot;less.compile&quot;:</span> <span class="token punctuation">{</span>
  <span class="token string">&quot;compress&quot;</span><span class="token punctuation">:</span> false<span class="token punctuation">,</span> <span class="token comment">// true =&gt; remove surplus whitespace</span>
  <span class="token string">&quot;sourceMap&quot;</span><span class="token punctuation">:</span> true<span class="token punctuation">,</span> <span class="token comment">// true =&gt; generate source maps (.css.map files)</span>
  <span class="token string">&quot;out&quot;</span><span class="token punctuation">:</span> true <span class="token comment">// false =&gt; DON&#39;T output .css files (overridable per-file, see below)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="mixin-混合函数" tabindex="-1"><a class="header-anchor" href="#mixin-混合函数" aria-hidden="true">#</a> mixin 混合函数</h2><p>在混合函数中可以直接设置变量</p><div class="language-less line-numbers-mode" data-ext="less"><pre class="language-less"><code><span class="token selector">.test(<span class="token variable">@w</span>,<span class="token variable">@h</span>)</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> <span class="token variable">@w</span><span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> <span class="token variable">@h</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">div</span> <span class="token punctuation">{</span>
  <span class="token mixin-usage function">.test</span><span class="token punctuation">(</span>200px<span class="token punctuation">,</span> 100px<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>调用混合函数，按照顺序传递参数。可以直接把名字写好，此时就不用按顺序。</p><div class="language-less line-numbers-mode" data-ext="less"><pre class="language-less"><code><span class="token selector">.test(<span class="token variable">@w</span>,<span class="token variable">@h</span>)</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> <span class="token variable">@w</span><span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> <span class="token variable">@h</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">div</span> <span class="token punctuation">{</span>
  <span class="token mixin-usage function">.test</span><span class="token punctuation">(</span><span class="token variable">@w<span class="token punctuation">:</span></span>200px<span class="token punctuation">,</span> <span class="token variable">@h<span class="token punctuation">:</span></span>100px<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>定义值，定义几个必须传几个参数，可以在定义时直接指定默认值。</p><div class="language-less line-numbers-mode" data-ext="less"><pre class="language-less"><code><span class="token selector">.test(<span class="token variable">@w</span>:200px,<span class="token variable">@h</span>:100px)</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> <span class="token variable">@w</span><span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> <span class="token variable">@h</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">div</span> <span class="token punctuation">{</span>
  <span class="token mixin-usage function">.test</span><span class="token punctuation">(</span>200px<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="less-样式" tabindex="-1"><a class="header-anchor" href="#less-样式" aria-hidden="true">#</a> less 样式</h2><p>less 兼容 less，支持变量、嵌套</p><div class="language-less line-numbers-mode" data-ext="less"><pre class="language-less"><code><span class="token comment">// 1.兼容CSS代码</span>
<span class="token comment">// .box {</span>
<span class="token comment">//   width: 100px;</span>
<span class="token comment">//   height: 100px;</span>
<span class="token comment">//   background-color: orange;</span>
<span class="token comment">//   font-size: 20px;</span>
<span class="token comment">//   color: #fff;</span>
<span class="token comment">// }</span>

<span class="token comment">// 2.定义变量</span>
<span class="token variable">@mainColor<span class="token punctuation">:</span></span> #a40011<span class="token punctuation">;</span>

<span class="token variable">@smallFontSize<span class="token punctuation">:</span></span> 12px<span class="token punctuation">;</span>
<span class="token variable">@normalFontSize<span class="token punctuation">:</span></span> 14px<span class="token punctuation">;</span>
<span class="token variable">@bigFontSize<span class="token punctuation">:</span></span> 18px<span class="token punctuation">;</span>

<span class="token comment">// .box .pel {</span>
<span class="token comment">//   color: @mainColor;</span>
<span class="token comment">//   font-size: @normalFontSize;</span>
<span class="token comment">// }</span>

<span class="token comment">// .box h1 .keyword .section .list .item a .desc {</span>
<span class="token comment">//   color: @mainColor;</span>
<span class="token comment">//   font-size: @bigFontSize;</span>
<span class="token comment">// }</span>

<span class="token comment">// .box p .link {</span>
<span class="token comment">//   color: @mainColor;</span>
<span class="token comment">//   font-size: @smallFontSize;</span>
<span class="token comment">// }</span>

<span class="token comment">// 3.选择器的嵌套</span>
<span class="token selector">.box</span> <span class="token punctuation">{</span>
  <span class="token selector">.pel</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> <span class="token variable">@mainColor</span><span class="token punctuation">;</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> <span class="token variable">@normalFontSize</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">h1</span> <span class="token punctuation">{</span>
    <span class="token selector">.keyword</span> <span class="token punctuation">{</span>
      <span class="token property">color</span><span class="token punctuation">:</span> <span class="token variable">@mainColor</span><span class="token punctuation">;</span>
      <span class="token property">font-size</span><span class="token punctuation">:</span> <span class="token variable">@bigFontSize</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token selector">p</span> <span class="token punctuation">{</span>
    <span class="token selector">a.link</span> <span class="token punctuation">{</span>
      <span class="token property">color</span><span class="token punctuation">:</span> <span class="token variable">@mainColor</span><span class="token punctuation">;</span>
      <span class="token property">font-size</span><span class="token punctuation">:</span> <span class="token variable">@smallFontSize</span><span class="token punctuation">;</span>

      <span class="token property">background-color</span><span class="token punctuation">:</span> #0f0<span class="token punctuation">;</span>

      <span class="token selector">&amp;:hover</span> <span class="token punctuation">{</span>
        <span class="token property">color</span><span class="token punctuation">:</span> #00f<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// &amp;符号的练习</span>
<span class="token selector">.list</span> <span class="token punctuation">{</span>
  <span class="token selector">.item</span> <span class="token punctuation">{</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>

    <span class="token selector">&amp;:hover</span> <span class="token punctuation">{</span>
      <span class="token property">color</span><span class="token punctuation">:</span> <span class="token variable">@mainColor</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">&amp;:nth-child(1)</span> <span class="token punctuation">{</span>
      <span class="token property">color</span><span class="token punctuation">:</span> orange<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">&amp;:nth-child(2)</span> <span class="token punctuation">{</span>
      <span class="token property">color</span><span class="token punctuation">:</span> #00f<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>less 混入可以像定义函数一样</p><div class="language-less line-numbers-mode" data-ext="less"><pre class="language-less"><code><span class="token comment">// 1.运算</span>
<span class="token comment">// .box {</span>
<span class="token comment">//   font-size: 20px;</span>
<span class="token comment">//   width: 10% + 50px;</span>
<span class="token comment">//   height: 100px;</span>
<span class="token comment">//   background-color: #ff0000 + #00ff00;</span>
<span class="token comment">// }</span>

<span class="token comment">// px to rem</span>

<span class="token comment">// 2.混入</span>
<span class="token comment">// 2.1. 混入的基本使用</span>
<span class="token selector">.nowrap_ellipsis</span> <span class="token punctuation">{</span>
  <span class="token property">white-space</span><span class="token punctuation">:</span> nowrap<span class="token punctuation">;</span>
  <span class="token property">text-overflow</span><span class="token punctuation">:</span> ellipsis<span class="token punctuation">;</span>
  <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 2.2.混入是可以传递参数(定义变量)的</span>
<span class="token selector">.box_border(<span class="token variable">@borderWidth</span>: 5px, <span class="token variable">@borderColor</span>: purple)</span> <span class="token punctuation">{</span>
  <span class="token property">border</span><span class="token punctuation">:</span> <span class="token variable">@borderWidth</span> solid <span class="token variable">@borderColor</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 2.3.混入和映射(Map)结合使用</span>
<span class="token comment">// 作用: 弥补less中不能自定义函数的缺陷</span>
<span class="token selector">.box_size</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.box1</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> .box_<span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> [width]<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #f00<span class="token punctuation">;</span>

  <span class="token mixin-usage function">.nowrap_ellipsis</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token mixin-usage function">.box_border</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.box2</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 150px<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #0f0<span class="token punctuation">;</span>

  <span class="token mixin-usage function">.nowrap_ellipsis</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token mixin-usage function">.box_border</span><span class="token punctuation">(</span>10px<span class="token punctuation">,</span> orange<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>less 像 js 一样，支持继承，函数，导入等功能</p><div class="language-less line-numbers-mode" data-ext="less"><pre class="language-less"><code><span class="token comment">// 1.extend</span>
<span class="token comment">// .box_border {</span>
<span class="token comment">//   border: 5px solid #f00;</span>
<span class="token comment">// }</span>

<span class="token comment">// .box {</span>
<span class="token comment">//   width: 100px;</span>
<span class="token comment">//   background-color: orange;</span>

<span class="token comment">//   // .box_border();</span>
<span class="token comment">//   &amp;:extend(.box_border);</span>
<span class="token comment">// }</span>

<span class="token comment">// 2.内置函数</span>
<span class="token comment">// .box {</span>
<span class="token comment">//   color: color(skyblue);</span>
<span class="token comment">//   width: convert(100px, &quot;in&quot;);</span>
<span class="token comment">//   font-size: ceil(18.5px);</span>
<span class="token comment">//   background-color: orange;</span>
<span class="token comment">// }</span>

<span class="token comment">// 3.作用域(scope)</span>
<span class="token variable">@mainColor<span class="token punctuation">:</span></span> #f00<span class="token punctuation">;</span>

<span class="token selector">.box_mixin</span> <span class="token punctuation">{</span>
  <span class="token variable">@mainColor<span class="token punctuation">:</span></span> orange<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.box</span> <span class="token punctuation">{</span>
  <span class="token comment">// @mainColor: #0f0;</span>
  <span class="token selector">.item</span> <span class="token punctuation">{</span>
    <span class="token selector">span</span> <span class="token punctuation">{</span>
      <span class="token property">color</span><span class="token punctuation">:</span> <span class="token variable">@mainColor</span><span class="token punctuation">;</span>
      <span class="token mixin-usage function">.box_mixin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token comment">// @mainColor: #00f;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 4.注释(comment)</span>
<span class="token comment">// 单行注释</span>
<span class="token comment">/* 多行注释 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,25),p=[l];function c(t,o){return s(),a("div",null,p)}const d=n(i,[["render",c],["__file","less.html.vue"]]);export{d as default};
