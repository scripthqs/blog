import{_ as p,r as c,o as l,c as o,b as n,e as s,d as e,f as a}from"./app-10c4e004.js";const i={},u=a(`<h1 id="css-规范-bem" tabindex="-1"><a class="header-anchor" href="#css-规范-bem" aria-hidden="true">#</a> CSS 规范 BEM</h1><p>css 一般按照以下顺序写比较好。</p><h2 id="_1-布局定位书写" tabindex="-1"><a class="header-anchor" href="#_1-布局定位书写" aria-hidden="true">#</a> 1.布局定位书写</h2><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">div</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
  <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
  <span class="token property">clear</span><span class="token punctuation">:</span> both<span class="token punctuation">;</span>
  <span class="token property">visibility</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
  <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-自身属性" tabindex="-1"><a class="header-anchor" href="#_2-自身属性" aria-hidden="true">#</a> 2.自身属性</h2><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">div</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 0 auto<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid red<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> blue <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>img.jpg<span class="token punctuation">)</span></span> no-repeat fixed top<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-文本属性" tabindex="-1"><a class="header-anchor" href="#_3-文本属性" aria-hidden="true">#</a> 3.文本属性</h2><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">div</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #333<span class="token punctuation">;</span>
  <span class="token property">font</span><span class="token punctuation">:</span> 18px <span class="token string">&quot;宋体&quot;</span><span class="token punctuation">;</span>
  <span class="token property">text-decoration</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
  <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">vertical-align</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-其他属性" tabindex="-1"><a class="header-anchor" href="#_4-其他属性" aria-hidden="true">#</a> 4.其他属性</h2><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">div</span> <span class="token punctuation">{</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
  <span class="token property">box-shadow</span><span class="token punctuation">:</span> 10px 10px 50px 10px rgba<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="bem-方法论" tabindex="-1"><a class="header-anchor" href="#bem-方法论" aria-hidden="true">#</a> BEM 方法论</h2><p>在 web 开发中，你是否会有这样的体验：在开发中随便建立 css 文件，从上到下依次写，为怎样取类名而烦劳，因为害怕取重名了，把前面的样式覆盖了。怎么减少这个问题？</p>`,12),r={href:"https://en.bem.info/methodology/quick-start/",target:"_blank",rel:"noopener noreferrer"},d=a(`<ul><li>块（Block）</li><li>元素（Element）</li><li>修饰符（Modifier）</li></ul><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.block</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
<span class="token selector">.block__element</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
<span class="token selector">.block--modifier</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
<span class="token comment">/* 使用两个连字符和下划线而不是一个，是为了让 block 可以用单个连字符来界定 */</span>
<span class="token selector">.site-search</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span> <span class="token comment">/* 块 */</span>
<span class="token selector">.site-search__field</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span> <span class="token comment">/* 元素 */</span>
<span class="token selector">.site-search--full</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span> <span class="token comment">/* 修饰符 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>nav</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>nav<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>nav__item nav__item--active<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>当前状态<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>nav__item nav__item--hover<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>鼠标移上时的状态<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>nav__item nav__item--normal<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>正常状态<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>nav</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token selector">.nav </span><span class="token punctuation">{</span>
  <span class="token selector"><span class="token parent important">&amp;</span>__item </span><span class="token punctuation">{</span>
    <span class="token selector"><span class="token parent important">&amp;</span>--active </span><span class="token punctuation">{</span>
    <span class="token punctuation">}</span>
    <span class="token selector"><span class="token parent important">&amp;</span>--hover </span><span class="token punctuation">{</span>
    <span class="token punctuation">}</span>
    <span class="token selector"><span class="token parent important">&amp;</span>--normal </span><span class="token punctuation">{</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="block" tabindex="-1"><a class="header-anchor" href="#block" aria-hidden="true">#</a> Block</h2><ol><li>描述这个组件是什么，而不是像什么</li><li>可以多层级嵌套</li><li>需要复用，并且不依赖其它任何组件，那么这个时候就应该建立一个 Block</li></ol><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!-- 正确。\`error\` 块在语义上是有意义的 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>error<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

<span class="token comment">&lt;!-- 不正确。它描述的是外观 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>red-text<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

<span class="token comment">&lt;!-- 可以多层级嵌套 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>header</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>header<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!--嵌套了&#39;logo&#39;block--&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>logo<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!--嵌套了&#39;search-form&#39; block--&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>search-form<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>header</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="element" tabindex="-1"><a class="header-anchor" href="#element" aria-hidden="true">#</a> Element</h2><ol><li>Element 是 Block 的一部分，并且不能离开 Block 单独使用</li><li>取名应该描述它的目标，而不是描述它的外貌</li><li>并且嵌套层级不限制</li><li>不能离开一个实体而单独使用，那么这个时候就应该建立一个 Element</li></ol><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>search-form<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!--&#39;search-form&#39; block 中的 &#39;input&#39; element--&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>search-form__input<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>

  <span class="token comment">&lt;!--&#39;search-form&#39; block 中的 &#39;button&#39; element--&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>search-form__button<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Search<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">&gt;</span></span>

<span class="token comment">&lt;!--正确的：Element的名字格式&quot;block-name__element-name&quot;--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>search-form<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>search-form__content<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>search-form__input<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>search-form__button<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Search<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">&gt;</span></span>

<span class="token comment">&lt;!--错误的：Element的名字格式不能是这样：&quot;block-name__element-name__element-name&quot;--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>search-form<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>search-form__content<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!--推荐使用：&#39;search-form__input&#39;或者&#39;search-form__content-input&#39;--&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>search-form__content__input<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>

    <span class="token comment">&lt;!--推荐使用：&#39;search-form__content&#39;或者&#39;search-form__content-button&#39;--&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>search-form__content__button<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Search<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">&gt;</span></span>

<span class="token comment">&lt;!-- Block名字定义了命名空间，保证Elements可以依赖于Block而存在 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>block<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>block__elem1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>block__elem2<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>block__elem3<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!-- 可以使在改变dom-tree的情况下，不改变css就能使用--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
<span class="token selector">.block</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token selector">.block__elem1</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token selector">.block__elem2</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token selector">.block__elem3</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="modifier" tabindex="-1"><a class="header-anchor" href="#modifier" aria-hidden="true">#</a> Modifier</h2><ol><li>定义了 Block 或者 Element 的状态、外观等“附加”的样式！</li><li>描述了组件的外观(比如 size 等)或者状态(比如 disabled 等)</li></ol><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.block__elem--full</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
<span class="token selector">.block__elem--disabled</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
<span class="token selector">.block__elem--size</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="elementui-对-bem-的运用" tabindex="-1"><a class="header-anchor" href="#elementui-对-bem-的运用" aria-hidden="true">#</a> elementUI 对 BEM 的运用</h2>`,14),k={href:"https://github.com/ElemeFE/element/blob/dev/packages/theme-chalk/src/mixins/mixins.scss",target:"_blank",rel:"noopener noreferrer"},v=a(`<h2 id="声明变量" tabindex="-1"><a class="header-anchor" href="#声明变量" aria-hidden="true">#</a> 声明变量</h2><p>scss 使用<code>$</code>声明变量，less 用<code>@</code>声明变量，<code>&amp;</code>指父元素引用</p><h2 id="default-和-global" tabindex="-1"><a class="header-anchor" href="#default-和-global" aria-hidden="true">#</a> !default 和 !global</h2><p>!default 用来定义局部变量（默认值）、!global 可以把局部变量转为全局变量</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">#main</span> <span class="token punctuation">{</span>
  $<span class="token property">width</span><span class="token punctuation">:</span> 5em !global<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> $width<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">#sidebar</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> $width<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 编译后 */</span>
<span class="token selector">#main</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 5em<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">#sidebar</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 5em<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="混入-mixin-和-include" tabindex="-1"><a class="header-anchor" href="#混入-mixin-和-include" aria-hidden="true">#</a> 混入 @mixin 和 @include</h2><p>@mixin 用来定义代码块、@include 引入</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token keyword">@mixin</span> <span class="token selector">color-links </span><span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">span </span><span class="token punctuation">{</span>
  <span class="token keyword">@include</span> color-links<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/* 编译后 */</span>
<span class="token selector">span </span><span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="content-向混合样式中导入内容" tabindex="-1"><a class="header-anchor" href="#content-向混合样式中导入内容" aria-hidden="true">#</a> @content 向混合样式中导入内容</h2><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token atrule"><span class="token rule">@mixin</span> apply-to-ie6-only</span> <span class="token punctuation">{</span>
  <span class="token selector">* html</span> <span class="token punctuation">{</span>
    <span class="token atrule"><span class="token rule">@content</span><span class="token punctuation">;</span></span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token atrule"><span class="token rule">@include</span> apply-to-ie6-only</span> <span class="token punctuation">{</span>
  <span class="token selector">#logo</span> <span class="token punctuation">{</span>
    <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>/logo.gif<span class="token punctuation">)</span></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">/* 编译后 */</span>
<span class="token selector">* html #logo</span> <span class="token punctuation">{</span>
  <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>/logo.gif<span class="token punctuation">)</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 下面这种是错误的 */</span>
<span class="token selector">* html</span> <span class="token punctuation">{</span>
  <span class="token selector">#logo</span> <span class="token punctuation">{</span>
    <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>/logo.gif<span class="token punctuation">)</span></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="at-root-跳出嵌套" tabindex="-1"><a class="header-anchor" href="#at-root-跳出嵌套" aria-hidden="true">#</a> @at-root 跳出嵌套</h2><p><code>#{}</code>是 scss 的插值语法</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.block</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
  <span class="token atrule"><span class="token rule">@at-root</span> #</span><span class="token punctuation">{</span>&amp;<span class="token punctuation">}</span><span class="token selector">__element</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token atrule"><span class="token rule">@at-root</span> #</span><span class="token punctuation">{</span>&amp;<span class="token punctuation">}</span><span class="token selector">--modifier</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> orange<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 编译后 */</span>
<span class="token selector">.block</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.block__element</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.block--modifier</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> orange<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="each-in-遍历列表" tabindex="-1"><a class="header-anchor" href="#each-in-遍历列表" aria-hidden="true">#</a> @each in 遍历列表</h2><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token keyword">@each</span> <span class="token selector"><span class="token variable">$animal</span> in puma, sea-slug, egret, salamander </span><span class="token punctuation">{</span>
  <span class="token selector">.<span class="token variable">#{$animal}</span>-icon </span><span class="token punctuation">{</span>
    <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url">url</span><span class="token punctuation">(</span><span class="token string">&quot;/images/#{$animal}.png&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// 编译后</span>
<span class="token selector">.puma-icon </span><span class="token punctuation">{</span>
  <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url">url</span><span class="token punctuation">(</span><span class="token string">&quot;/images/puma.png&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.sea-slug-icon </span><span class="token punctuation">{</span>
  <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url">url</span><span class="token punctuation">(</span><span class="token string">&quot;/images/sea-slug.png&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.egret-icon </span><span class="token punctuation">{</span>
  <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url">url</span><span class="token punctuation">(</span><span class="token string">&quot;/images/egret.png&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.salamander-icon </span><span class="token punctuation">{</span>
  <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url">url</span><span class="token punctuation">(</span><span class="token string">&quot;/images/salamander.png&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="if-else-条件判断" tabindex="-1"><a class="header-anchor" href="#if-else-条件判断" aria-hidden="true">#</a> @if @else 条件判断</h2><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token selector">p </span><span class="token punctuation">{</span>
  <span class="token keyword">@if</span> <span class="token selector">1 + 1 == 2 </span><span class="token punctuation">{</span>
    <span class="token property">border</span><span class="token punctuation">:</span> 1px solid<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">@if</span> <span class="token selector">5 &lt; 3 </span><span class="token punctuation">{</span>
    <span class="token property">border</span><span class="token punctuation">:</span> 2px dotted<span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">@else</span> <span class="token punctuation">{</span>
    <span class="token property">border</span><span class="token punctuation">:</span> 3px double<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// 编译后</span>
<span class="token selector">p </span><span class="token punctuation">{</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="sass-内置函数" tabindex="-1"><a class="header-anchor" href="#sass-内置函数" aria-hidden="true">#</a> sass 内置函数</h2><ul><li>@debug 在 scss 编译过程中打印信息到控制台</li></ul><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token comment">// map-has-key($map,$key) 函数将返回一个布尔值。当 $map 中有这个 $key，则函数返回 true，否则返回 false。 通过map-get($map,$key)获取$key 对应的值</span>

<span class="token property"><span class="token variable">$map</span></span><span class="token punctuation">:</span> <span class="token punctuation">(</span>
  <span class="token string">&quot;xs&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;200px&quot;</span><span class="token punctuation">,</span>
  <span class="token string">&quot;sm&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;100px&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$key</span></span><span class="token punctuation">:</span> <span class="token string">&quot;xs&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">@if</span> <span class="token function">map-has-key</span><span class="token punctuation">(</span><span class="token variable">$map</span><span class="token punctuation">,</span> <span class="token variable">$key</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">@debug</span> <span class="token function">map-get</span><span class="token punctuation">(</span><span class="token variable">$map</span><span class="token punctuation">,</span> <span class="token variable">$key</span><span class="token punctuation">)</span> <span class="token comment">// 200px</span>
<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// inspect(value)函数返回 value 的字符串表示形式</span>
<span class="token keyword">@debug</span> <span class="token function">inspect</span><span class="token punctuation">(</span><span class="token null keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &quot;null&quot;</span>
<span class="token keyword">@debug</span> <span class="token function">inspect</span><span class="token punctuation">(</span>
  <span class="token punctuation">(</span>
    <span class="token string">&quot;width&quot;</span><span class="token punctuation">:</span> 200px<span class="token punctuation">,</span>
  <span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &quot;(&#39;width&#39;: 200px)&quot;</span>

<span class="token comment">// str-index 返回字符串的第一个索引位置(索引从 1 开始)，如果字符串不包含该子字符串，则返回 null</span>
<span class="token keyword">@debug</span> <span class="token function">str-index</span><span class="token punctuation">(</span><span class="token string">&quot;sans-serif&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;ans&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 2</span>

<span class="token comment">// str-slice($str, $beginIndex, $endIndex) 截取字符串的指定字符</span>
<span class="token keyword">@debug</span> <span class="token function">str-slice</span><span class="token punctuation">(</span><span class="token string">&quot;(.el-message)&quot;</span><span class="token punctuation">,</span> 2<span class="token punctuation">,</span> -2<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// .el-message</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="element-的-bem-实现" tabindex="-1"><a class="header-anchor" href="#element-的-bem-实现" aria-hidden="true">#</a> element 的 BEM 实现</h2><h3 id="定义-block" tabindex="-1"><a class="header-anchor" href="#定义-block" aria-hidden="true">#</a> 定义 block</h3><p>给组件添加 el-前缀，通过@content 将 include{}中传递过来的内容导入到指定位置</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token property"><span class="token variable">$namespace</span></span><span class="token punctuation">:</span> <span class="token string">&quot;el&quot;</span><span class="token punctuation">;</span> <span class="token comment">// 所有的组件以el开头，如el-input</span>
<span class="token property"><span class="token variable">$element-separator</span></span><span class="token punctuation">:</span> <span class="token string">&quot;__&quot;</span><span class="token punctuation">;</span> <span class="token comment">// 元素以__分割，如el-input__inner</span>
<span class="token property"><span class="token variable">$modifier-separator</span></span><span class="token punctuation">:</span> <span class="token string">&quot;--&quot;</span><span class="token punctuation">;</span> <span class="token comment">// 修饰符以--分割，如el-input--mini</span>
<span class="token property"><span class="token variable">$state-prefix</span></span><span class="token punctuation">:</span> <span class="token string">&quot;is-&quot;</span><span class="token punctuation">;</span> <span class="token comment">// 状态以is-开头，如is-disabled</span>

<span class="token keyword">@mixin</span> <span class="token function">b</span><span class="token punctuation">(</span><span class="token variable">$block</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token property"><span class="token variable">$B</span></span><span class="token punctuation">:</span> <span class="token variable">$namespace</span> <span class="token operator">+</span> <span class="token string">&quot;-&quot;</span> <span class="token operator">+</span> <span class="token variable">$block</span> !global<span class="token punctuation">;</span> <span class="token comment">// 使用el-拼接组件名</span>
  <span class="token selector">.<span class="token variable">#{$B}</span> </span><span class="token punctuation">{</span>
    <span class="token keyword">@content</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">@include</span> <span class="token function">b</span><span class="token punctuation">(</span>button<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
  <span class="token property">line-height</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
  <span class="token property">white-space</span><span class="token punctuation">:</span> nowrap<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// 编译后</span>
<span class="token selector">.el-button </span><span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
  <span class="token property">line-height</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
  <span class="token property">white-space</span><span class="token punctuation">:</span> nowrap<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="定义-element" tabindex="-1"><a class="header-anchor" href="#定义-element" aria-hidden="true">#</a> 定义 element</h3><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token property"><span class="token variable">$element-separator</span></span><span class="token punctuation">:</span> <span class="token string">&quot;__&quot;</span><span class="token punctuation">;</span> <span class="token comment">// 元素以__分割，如el-input__inner</span>
<span class="token keyword">@mixin</span> <span class="token function">e</span><span class="token punctuation">(</span><span class="token variable">$element</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token property"><span class="token variable">$E</span></span><span class="token punctuation">:</span> <span class="token variable">$element</span> !global<span class="token punctuation">;</span>
  <span class="token property"><span class="token variable">$selector</span></span><span class="token punctuation">:</span> &amp;<span class="token punctuation">;</span>
  <span class="token property"><span class="token variable">$currentSelector</span></span><span class="token punctuation">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
  <span class="token keyword">@each</span> <span class="token selector"><span class="token variable">$unit</span> in <span class="token variable">$element</span> </span><span class="token punctuation">{</span>
    <span class="token comment">// $element传入的值可以单个，也可以是列表</span>
    <span class="token property"><span class="token variable">$currentSelector</span></span><span class="token punctuation">:</span> #<span class="token punctuation">{</span><span class="token variable">$currentSelector</span> <span class="token operator">+</span> <span class="token string">&quot;.&quot;</span> <span class="token operator">+</span> <span class="token variable">$B</span> <span class="token operator">+</span> <span class="token variable">$element-separator</span> <span class="token operator">+</span> <span class="token variable">$unit</span> <span class="token operator">+</span> <span class="token string">&quot;,&quot;</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// hitAllSpecialNestRule 判断父级选择器是否包含-- .is- ：这三种字符</span>
  <span class="token keyword">@if</span> <span class="token function">hitAllSpecialNestRule</span><span class="token punctuation">(</span><span class="token variable">$selector</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token atrule"><span class="token rule">@at-root</span></span> <span class="token punctuation">{</span>
      <span class="token selector"><span class="token variable">#{$selector}</span> </span><span class="token punctuation">{</span>
        <span class="token selector"><span class="token variable">#{$currentSelector}</span> </span><span class="token punctuation">{</span>
          <span class="token keyword">@content</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span> <span class="token keyword">@else</span> <span class="token punctuation">{</span>
    <span class="token atrule"><span class="token rule">@at-root</span></span> <span class="token punctuation">{</span>
      <span class="token selector"><span class="token variable">#{$currentSelector}</span> </span><span class="token punctuation">{</span>
        <span class="token keyword">@content</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">@include</span> <span class="token function">b</span><span class="token punctuation">(</span>message-box<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
  <span class="token keyword">@include</span> <span class="token function">m</span><span class="token punctuation">(</span>header<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token property">padding-bottom</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">//转化为：</span>
<span class="token selector">.el-message-box </span><span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.el-message-box--header </span><span class="token punctuation">{</span>
  <span class="token property">padding-bottom</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="定义-modifier" tabindex="-1"><a class="header-anchor" href="#定义-modifier" aria-hidden="true">#</a> 定义 modifier</h2><p>通过<code>--</code>连接符将父级选择器和传入的修饰符拼接起来</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token property"><span class="token variable">$modifier-separator</span></span><span class="token punctuation">:</span> <span class="token string">&quot;--&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">@mixin</span> <span class="token function">m</span><span class="token punctuation">(</span><span class="token variable">$modifier</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token property"><span class="token variable">$selector</span></span><span class="token punctuation">:</span> &amp;<span class="token punctuation">;</span>
  <span class="token property"><span class="token variable">$currentSelector</span></span><span class="token punctuation">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
  <span class="token keyword">@each</span> <span class="token selector"><span class="token variable">$unit</span> in <span class="token variable">$modifier</span> </span><span class="token punctuation">{</span>
    <span class="token property"><span class="token variable">$currentSelector</span></span><span class="token punctuation">:</span> #<span class="token punctuation">{</span><span class="token variable">$currentSelector</span> <span class="token operator">+</span> &amp; <span class="token operator">+</span> <span class="token variable">$modifier-separator</span> <span class="token operator">+</span> <span class="token variable">$unit</span> <span class="token operator">+</span> <span class="token string">&quot;,&quot;</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token atrule"><span class="token rule">@at-root</span></span> <span class="token punctuation">{</span>
    <span class="token selector"><span class="token variable">#{$currentSelector}</span> </span><span class="token punctuation">{</span>
      <span class="token keyword">@content</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">@include</span> <span class="token function">b</span><span class="token punctuation">(</span>button<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
  <span class="token keyword">@include</span> <span class="token function">m</span><span class="token punctuation">(</span>primary<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// 编译后</span>
<span class="token selector">.el-button </span><span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.el-button--primary </span><span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">@include</span> <span class="token function">b</span><span class="token punctuation">(</span>message-box<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
  <span class="token keyword">@include</span> <span class="token function">m</span><span class="token punctuation">(</span>center<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token property">padding-bottom</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>
    <span class="token keyword">@include</span> <span class="token function">e</span><span class="token punctuation">(</span>header<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token property">padding-top</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">//转化为：</span>
<span class="token selector">.el-message-box </span><span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.el-message-box--center </span><span class="token punctuation">{</span>
  <span class="token property">padding-bottom</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.el-message-box--center .el-message-box__header </span><span class="token punctuation">{</span>
  <span class="token property">padding-top</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,29);function m(b,g){const t=c("ExternalLinkIcon");return l(),o("div",null,[u,n("p",null,[s("BEM（Block，Element，Modifier）是一种前端开发中常用的命名规范和方法论。 "),n("a",r,[s("https://en.bem.info/methodology/quick-start/"),e(t)])]),d,n("p",null,[n("a",k,[s("https://github.com/ElemeFE/element/blob/dev/packages/theme-chalk/src/mixins/mixins.scss"),e(t)])]),v])}const q=p(i,[["render",m],["__file","22_standard.html.vue"]]);export{q as default};
