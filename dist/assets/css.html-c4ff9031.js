import{_ as n,o as s,c as a,f as t}from"./app-f790074e.js";const p={},e=t(`<h1 id="样式相关" tabindex="-1"><a class="header-anchor" href="#样式相关" aria-hidden="true">#</a> 样式相关</h1><h2 id="文本省略" tabindex="-1"><a class="header-anchor" href="#文本省略" aria-hidden="true">#</a> 文本省略</h2><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* 单行省略 */</span>
<span class="token selector">.singe-line</span> <span class="token punctuation">{</span>
  <span class="token property">text-overflow</span><span class="token punctuation">:</span> ellipsis<span class="token punctuation">;</span>
  <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
  <span class="token property">word-break</span><span class="token punctuation">:</span> break-all<span class="token punctuation">;</span>
  <span class="token property">white-space</span><span class="token punctuation">:</span> nowrap<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 两行省略 */</span>
<span class="token selector">.double-line</span> <span class="token punctuation">{</span>
  <span class="token property">word-break</span><span class="token punctuation">:</span> break-all<span class="token punctuation">;</span>
  <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> -webkit-box<span class="token punctuation">;</span>
  <span class="token property">-webkit-line-clamp</span><span class="token punctuation">:</span> 2<span class="token punctuation">;</span>
  <span class="token property">-webkit-box-orient</span><span class="token punctuation">:</span> vertical<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="毛玻璃效果" tabindex="-1"><a class="header-anchor" href="#毛玻璃效果" aria-hidden="true">#</a> 毛玻璃效果</h2><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.example</span> <span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>

  <span class="token comment">/* 做毛玻璃效果 */</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> transparent<span class="token punctuation">;</span>
  <span class="token property">backdrop-filter</span><span class="token punctuation">:</span> <span class="token function">blur</span><span class="token punctuation">(</span>8px<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 图片的毛玻璃效果 */</span>

<span class="token selector">.box</span> <span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
  <span class="token comment">/* 超出去的模糊效果 隐藏掉 */</span>
  <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">img</span> <span class="token punctuation">{</span>
  <span class="token comment">/* 毛玻璃效果 */</span>
  <span class="token property">filter</span><span class="token punctuation">:</span> <span class="token function">blur</span><span class="token punctuation">(</span>8px<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="object-fit" tabindex="-1"><a class="header-anchor" href="#object-fit" aria-hidden="true">#</a> object-fit</h2><p>object-fit 属性指定元素的内容应该如何去适应指定容器的高度与宽度。</p><ul><li>contain 保持原有尺寸比例。内容被缩放。</li><li>fill 默认，不保证保持原有的比例，内容拉伸填充整个内容容器</li><li>cover 保持原有尺寸比例。但部分内容可能被剪切。</li></ul><h2 id="锚点滚动效果" tabindex="-1"><a class="header-anchor" href="#锚点滚动效果" aria-hidden="true">#</a> 锚点滚动效果</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>div ref<span class="token operator">=</span><span class="token string">&quot;item&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span><span class="token punctuation">;</span>

<span class="token comment">// 滚动到顶部</span>
<span class="token keyword">const</span> <span class="token function-variable function">click</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  item<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">scrollIntoView</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">behavior</span><span class="token operator">:</span> <span class="token string">&quot;smooth&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">//这个滚动这个设置距离</span>
item<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">scrollTo</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">top</span><span class="token operator">:</span> distance<span class="token punctuation">,</span>
  <span class="token literal-property property">behavior</span><span class="token operator">:</span> <span class="token string">&quot;smooth&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="点击闪烁效果" tabindex="-1"><a class="header-anchor" href="#点击闪烁效果" aria-hidden="true">#</a> 点击闪烁效果</h2><p>vue 配合动态绑定 css</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ tableFade: a===b }<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ tableFade: true }<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token atrule"><span class="token rule">@keyframes</span> fade</span> <span class="token punctuation">{</span>
  <span class="token selector">from</span> <span class="token punctuation">{</span>
    <span class="token property">border</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
    <span class="token property">background</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
    <span class="token property">opacity</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">50%</span> <span class="token punctuation">{</span>
    <span class="token property">opacity</span><span class="token punctuation">:</span> 0.4<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">to</span> <span class="token punctuation">{</span>
    <span class="token property">background</span><span class="token punctuation">:</span> #f84726<span class="token punctuation">;</span>
    <span class="token property">border</span><span class="token punctuation">:</span> 1px #f84726 solid<span class="token punctuation">;</span>
    <span class="token property">opacity</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token selector">.tableFade</span> <span class="token punctuation">{</span>
  <span class="token property">animation</span><span class="token punctuation">:</span> fade 500ms 2<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="antd-表单验证滚动" tabindex="-1"><a class="header-anchor" href="#antd-表单验证滚动" aria-hidden="true">#</a> antd 表单验证滚动</h2><p>表单验证滚动到错误的地方</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">funForm</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> errorList <span class="token operator">=</span> <span class="token punctuation">(</span>document <span class="token keyword">as</span> any<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">querySelectorAll</span><span class="token punctuation">(</span><span class="token string">&quot;.ant-form-item-explain-error&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>errorList <span class="token operator">&amp;&amp;</span> errorList<span class="token punctuation">.</span>length <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">//由于校验失败ant会自动给失败表单项添加类名，直接获取即可</span>
      errorList<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">scrollIntoView</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">block</span><span class="token operator">:</span> <span class="token string">&quot;center&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">behavior</span><span class="token operator">:</span> <span class="token string">&quot;smooth&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">await</span> busRef<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">validateFields</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> busState<span class="token punctuation">.</span>busForm<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="倒计时" tabindex="-1"><a class="header-anchor" href="#倒计时" aria-hidden="true">#</a> 倒计时</h2><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-statistic-countdown</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>倒计时<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>deadline<span class="token punctuation">&quot;</span></span> <span class="token attr-name">format</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>H 时 m 分 s 秒<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- &lt;template #title&gt;
    &lt;div style=&quot;font-size: 24px&quot;&gt;&lt;/div&gt;
  &lt;/template&gt; --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-statistic-countdown</span><span class="token punctuation">&gt;</span></span>
// Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30;
<span class="token comment">&lt;!-- const deadline = ref(new Date(new Date().setHours(0, 0, 0, 0) + 18.5 * 60 * 60 * 1000 - 1)); --&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="图片懒加载" tabindex="-1"><a class="header-anchor" href="#图片懒加载" aria-hidden="true">#</a> 图片懒加载</h2><ol><li>位置计算 + 滚动事件 (Scroll) + DataSet API</li><li>IntersectionObserver API + DataSet API</li><li>LazyLoading 属性</li></ol><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>test.jpg<span class="token punctuation">&quot;</span></span> <span class="token attr-name">loading</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>lazy<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>占位图片</li><li>data-src</li><li>intersectionObserver</li></ul><p>设置一个临时 Data 属性 data-src，控制加载时使用 src 代替 data-src，可利用 DataSet API 实现</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>img<span class="token punctuation">.</span>src <span class="token operator">=</span> img<span class="token punctuation">.</span>dataset<span class="token punctuation">.</span>src<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,25),o=[e];function c(l,i){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","css.html.vue"]]);export{r as default};