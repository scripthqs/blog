import{_ as a,o as n,c as s,f as t}from"./app-68a897fb.js";const e={},p=t(`<h1 id="排版标签" tabindex="-1"><a class="header-anchor" href="#排版标签" aria-hidden="true">#</a> 排版标签</h1><p>常用的排版标签有：</p><ul><li>标题标签：<code>&lt;h1&gt;、&lt;h2&gt;、···、&lt;h6&gt;</code></li><li>段落标签：<code>&lt;p&gt;</code></li><li>水平线标签：<code>&lt;hr/&gt;</code>自结束标签</li><li>换行标签：<code>&lt;br/&gt;</code>自结束标签</li><li>div 和 span 标签：<code>&lt;div&gt;,&lt;span&gt;</code></li><li>内容居中标签：<code>&lt;center&gt;</code></li><li>预定义（预格式化）标签：<code>&lt;pre&gt;</code></li></ul><h2 id="标题标签" tabindex="-1"><a class="header-anchor" href="#标题标签" aria-hidden="true">#</a> 标题标签</h2><p>标题标签从<code>&lt;h1&gt;~&lt;h6&gt;</code>,<code>&lt;h1&gt;</code>定义最大标题，重要性仅次于<code>&lt;title&gt;</code>。具有 align 属性，属性值可以是：left、center、right。<code>h</code>标签都是块元素、容器级标签。</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span> <span class="token attr-name">align</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>center<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>一级标题<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span> <span class="token attr-name">align</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>left<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>二级标题<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span> <span class="token attr-name">align</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>right<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>三级标题<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="段落标签" tabindex="-1"><a class="header-anchor" href="#段落标签" aria-hidden="true">#</a> 段落标签</h2><p><code>&lt;p&gt;</code>是单词段落(paragraph)的缩写,即该标签中的内容表示一个段落。具有 align 属性，属性值可以是：left、center、right。<code>p</code>标签是块元素、文本级标签。</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">align</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>center<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>第一段<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">align</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>left<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>第二段<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">align</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>right<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>第三段<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="水平线标签" tabindex="-1"><a class="header-anchor" href="#水平线标签" aria-hidden="true">#</a> 水平线标签</h2><p><code>&lt;hr/&gt;</code>是水平分割线(horizontal rule)的缩写，可以在视觉上将文档分为各个部分。 常用的属性有：align(属性值可以是 center、left、right)，color，size，noshade 等。</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>hr</span> <span class="token attr-name">align</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>center<span class="token punctuation">&quot;</span></span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>red<span class="token punctuation">&quot;</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>5px<span class="token punctuation">&quot;</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>50%<span class="token punctuation">&quot;</span></span> <span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>hr</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>hr</span> <span class="token attr-name">align</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>center<span class="token punctuation">&quot;</span></span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>red<span class="token punctuation">&quot;</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>5px<span class="token punctuation">&quot;</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>50%<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>hr</span> <span class="token attr-name">noshade</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>hr</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="换行标签" tabindex="-1"><a class="header-anchor" href="#换行标签" aria-hidden="true">#</a> 换行标签</h2><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>&lt;br /&gt;</code>是中断(break)的缩写，起换行的作用。</p><h2 id="div-和-span-标签" tabindex="-1"><a class="header-anchor" href="#div-和-span-标签" aria-hidden="true">#</a> div 和 span 标签</h2><p>这两个标签是非常重要的标签，div 的是分割(division)的缩写，span 是&quot;跨度、范围&quot;的意思，两个标签其实没什么语义，但是实例开发中却非常常用。</p><ul><li>div 是块元素，容器级标签</li><li>span 是行内元素，文本级标签</li><li>这两个元素专门为定义 css 而生，故有&quot;div + css 布局&quot;</li></ul><h2 id="居中标签" tabindex="-1"><a class="header-anchor" href="#居中标签" aria-hidden="true">#</a> 居中标签</h2><p><code>&lt;center&gt;</code>这是一个标签，不是一个属性，不建议使用，居中应该使用 css 来实现。</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>center</span><span class="token punctuation">&gt;</span></span>居中<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>center</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="预定义-预格式化-标签" tabindex="-1"><a class="header-anchor" href="#预定义-预格式化-标签" aria-hidden="true">#</a> 预定义（预格式化）标签</h2><p><code>&lt;pre&gt;</code>标签可以含义：将保留标签内部所有的空白字符(空格、换行符)，原封不动地输出结果（告诉浏览器不要忽略空格和空行）。<strong>真正做网页时，基本不会使用。</strong></p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>pre</span><span class="token punctuation">&gt;</span></span>
有人辞官归故里，
有人星夜赶科场。
年少不知愁滋味，
老来方知行路难。
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>pre</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="布局标签-结构化语义标签" tabindex="-1"><a class="header-anchor" href="#布局标签-结构化语义标签" aria-hidden="true">#</a> 布局标签（结构化语义标签）</h2><ul><li><code>&lt;header&gt;</code>：网页的头部</li><li><code>&lt;main&gt;</code>：网页的主题部分</li><li><code>&lt;footer&gt;</code>：网页的底部</li><li><code>&lt;nav&gt;</code>：网页的导航</li><li><code>&lt;aside&gt;</code>：网页的侧边栏</li><li><code>&lt;section&gt;</code>:表示一个独立的区块</li><li><code>&lt;article&gt;</code>：表示独立的文章</li></ul><p>上面这些标签都不如<code>&lt;div&gt;</code>和<code>&lt;span&gt;</code>用的广泛。</p>`,27),l=[p];function c(o,i){return n(),s("div",null,l)}const d=a(e,[["render",c],["__file","05_div.html.vue"]]);export{d as default};
