import{_ as n,o as s,c as a,f as e}from"./app-f790074e.js";const t={},p=e(`<h1 id="文本属性" tabindex="-1"><a class="header-anchor" href="#文本属性" aria-hidden="true">#</a> 文本属性</h1><p>text 文本属性可以定义文本的外观，比如文本的颜色、对齐、装饰、缩进、行间距、行高等。</p><h2 id="color" tabindex="-1"><a class="header-anchor" href="#color" aria-hidden="true">#</a> color</h2><p>color 属性用于定义文本的<strong>颜色</strong></p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">p</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">rgb</span><span class="token punctuation">(</span>255<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #f00<span class="token punctuation">;</span> <span class="token comment">/*开发中，常用十六进制*/</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="text-align" tabindex="-1"><a class="header-anchor" href="#text-align" aria-hidden="true">#</a> text-align</h2><p>text-align 属性用于设置元素内文本内容的<strong>水平对齐</strong>方式，但是不限于文字，行内元素都可以。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">h1</span> <span class="token punctuation">{</span>
  <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span> <span class="token comment">/*水平两端对齐*/</span>
  <span class="token property">text-align</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span> <span class="token comment">/*左对齐*/</span>
  <span class="token property">text-align</span><span class="token punctuation">:</span> right<span class="token punctuation">;</span> <span class="token comment">/*右对齐*/</span>
  <span class="token property">text-align</span><span class="token punctuation">:</span> justify<span class="token punctuation">;</span> <span class="token comment">/*两端对齐*/</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="text-decoration" tabindex="-1"><a class="header-anchor" href="#text-decoration" aria-hidden="true">#</a> text-decoration</h2><p>text-decoration 属性规定添加到文本的装饰。可以给文本添加下划线、删除线、上划线等</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">a</span> <span class="token punctuation">{</span>
  <span class="token property">text-decoration</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span> <span class="token comment">/*没有装饰线，除a外的默认值*/</span>
  <span class="token property">text-decoration</span><span class="token punctuation">:</span> underline<span class="token punctuation">;</span> <span class="token comment">/*下划线*/</span>
  <span class="token property">text-decoration</span><span class="token punctuation">:</span> overline<span class="token punctuation">;</span> <span class="token comment">/*上划线*/</span>
  <span class="token property">text-decoration</span><span class="token punctuation">:</span> line-through<span class="token punctuation">;</span> <span class="token comment">/*删除线*/</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="text-indent" tabindex="-1"><a class="header-anchor" href="#text-indent" aria-hidden="true">#</a> text-indent</h2><p>text-indent 属性用来指定文本的第一行缩进，通常<strong>是将段落的首行缩进</strong></p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">p</span> <span class="token punctuation">{</span>
  <span class="token property">text-indent</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>
  <span class="token property">text-indent</span><span class="token punctuation">:</span> 2em<span class="token punctuation">;</span> <span class="token comment">/*缩进当前元素的2个文字大小的距离*/</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="line-height" tabindex="-1"><a class="header-anchor" href="#line-height" aria-hidden="true">#</a> line-height</h2><ul><li>CSS 中，所有的行，都有行高</li><li>一行中有上间距、文本高度、下间距三个部分</li><li>line-height 属性用于设置行间的距离（行高），可以控制行与行之间的距离</li><li><strong>行高、字号，一般都是偶数</strong>。这样可以保证，它们的差一定偶数，就能够被 2 整除。</li></ul><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">p</span> <span class="token punctuation">{</span>
  <span class="token property">line-height</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>
  <span class="token property">line-height</span><span class="token punctuation">:</span> 1em<span class="token punctuation">;</span>
  <span class="token property">line-height</span><span class="token punctuation">:</span> 2<span class="token punctuation">;</span> <span class="token comment">/*直接设置一个整数，表示字体大小指定的倍数*/</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="行高小技巧" tabindex="-1"><a class="header-anchor" href="#行高小技巧" aria-hidden="true">#</a> 行高小技巧</h3><p>设置<strong>行高 = 盒子高</strong>，就可以保证单行文本垂直居中</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">line-height</span><span class="token punctuation">:</span> width<span class="token punctuation">;</span> <span class="token comment">/*让行高 = 盒子高*/</span>
<span class="token property">vertical-align</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span> <span class="token comment">/*对于图片，需要加居中对齐*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="vertical-align" tabindex="-1"><a class="header-anchor" href="#vertical-align" aria-hidden="true">#</a> vertical-align</h2><p>vertical-align 属性可以用于指定文字的垂直对齐。但不限于文字，可用于指定<strong>行内元素</strong>（inline）、<strong>行内块元素</strong>（inline-block）、<strong>表格的单元格</strong>（table-cell）的垂直对齐方式。主要是用于<strong>图片、表格、文本</strong>的<strong>对齐</strong>。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">vertical-align</span><span class="token punctuation">:</span> baseline<span class="token punctuation">;</span> <span class="token comment">/*基线对齐，默认值*/</span>
<span class="token property">vertical-align</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span> <span class="token comment">/*居中对齐*/</span>
<span class="token property">vertical-align</span><span class="token punctuation">:</span> top<span class="token punctuation">;</span> <span class="token comment">/*顶端对齐*/</span>
<span class="token property">vertical-align</span><span class="token punctuation">:</span> bottom<span class="token punctuation">;</span> <span class="token comment">/*底端对齐*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="text-shadow" tabindex="-1"><a class="header-anchor" href="#text-shadow" aria-hidden="true">#</a> text-shadow</h2><p>text-shadow 属性可以将阴影应用于文本。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">text-shadow</span><span class="token punctuation">:</span> 水平阴影 垂直阴影 模糊距离 阴影颜色
<span class="token property">text-shadow</span><span class="token punctuation">:</span> 5px 5px 6px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="text-overflow" tabindex="-1"><a class="header-anchor" href="#text-overflow" aria-hidden="true">#</a> text-overflow</h2><p>text-overflow 属性规定当文本溢出包含元素时发生的事情。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">text-overflow</span><span class="token punctuation">:</span> clip<span class="token punctuation">;</span> <span class="token comment">/*修剪文本*/</span>
<span class="token property">text-overflow</span><span class="token punctuation">:</span> ellipsis<span class="token punctuation">;</span> <span class="token comment">/*显示省略符号来代表被修剪的文本*/</span>
<span class="token property">text-overflow</span><span class="token punctuation">:</span> string<span class="token punctuation">;</span> <span class="token comment">/*使用给定的字符串来代表被修剪的文本*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="white-space" tabindex="-1"><a class="header-anchor" href="#white-space" aria-hidden="true">#</a> white-space</h2><p>white-space 属性可以设置网页如何处理空白，属性值有:</p><ul><li><code>normal</code>默认值，正常</li><li><code>nowrap</code>不换行，会合并空格</li><li><code>pre</code>保持原行，保留空格，保留换行符</li><li><code>pre-wrap</code>: 换行, 保留空格，保留换行符</li><li><code>pre-line</code>: 换行, 合并连续的空格, 但保留换行符</li></ul><p>网页中常常需要将溢出的文字内容以省略号显示</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
<span class="token property">white-space</span><span class="token punctuation">:</span> nowrap<span class="token punctuation">;</span> <span class="token comment">/*强制一行显示文本*/</span>
<span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span> <span class="token comment">/*超出部分隐藏*/</span>
<span class="token property">text-overflow</span><span class="token punctuation">:</span> ellipsis<span class="token punctuation">;</span> <span class="token comment">/*文字用省略号替代超出部分*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>两行显示</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
<span class="token property">text-overflow</span><span class="token punctuation">:</span> ellipsis<span class="token punctuation">;</span>
<span class="token property">display</span><span class="token punctuation">:</span> -webkit-box<span class="token punctuation">;</span>
<span class="token property">-webkit-line-clamp</span><span class="token punctuation">:</span> 2<span class="token punctuation">;</span>
<span class="token property">-webkit-box-orient</span><span class="token punctuation">:</span> vertical<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,36),c=[p];function i(o,l){return s(),a("div",null,c)}const d=n(t,[["render",i],["__file","08_text.html.vue"]]);export{d as default};