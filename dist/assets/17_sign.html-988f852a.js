import{_ as n,o as s,c as a,f as e}from"./app-38f27126.js";const t={},o=e(`<h1 id="实用的运算符" tabindex="-1"><a class="header-anchor" href="#实用的运算符" aria-hidden="true">#</a> 实用的运算符</h1><h2 id="空值合并操作符" tabindex="-1"><a class="header-anchor" href="#空值合并操作符" aria-hidden="true">#</a> 空值合并操作符</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> info <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
<span class="token comment">// info = info || &quot;默认值&quot;</span>
<span class="token comment">// console.log(info) // 默认值</span>
<span class="token comment">// ??: 空值合并运算符</span>
info <span class="token operator">=</span> info <span class="token operator">??</span> <span class="token string">&quot;默认值&quot;</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>info<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//&#39;&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="可选链" tabindex="-1"><a class="header-anchor" href="#可选链" aria-hidden="true">#</a> 可选链</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;aaa&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">friend</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;bbb&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// running: function() {</span>
    <span class="token comment">//   console.log(&quot;running~&quot;)</span>
    <span class="token comment">// }</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 1.直接调用: 非常危险</span>
<span class="token comment">// obj.friend.running()</span>

<span class="token comment">// 2.if判断: 麻烦/不够简洁</span>
<span class="token comment">// if (obj.friend &amp;&amp; obj.friend.running) {</span>
<span class="token comment">//   obj.friend.running()</span>
<span class="token comment">// }</span>

<span class="token comment">// 3.可选链的用法: ?.</span>
obj<span class="token operator">?.</span>friend<span class="token operator">?.</span>running<span class="token operator">?.</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="赋值" tabindex="-1"><a class="header-anchor" href="#赋值" aria-hidden="true">#</a> 赋值</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 赋值运算符</span>
<span class="token comment">// const foo = &quot;foo&quot;</span>
<span class="token keyword">let</span> counter <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>
counter <span class="token operator">=</span> counter <span class="token operator">+</span> <span class="token number">100</span><span class="token punctuation">;</span>
counter <span class="token operator">+=</span> <span class="token number">50</span><span class="token punctuation">;</span>

<span class="token comment">// 逻辑赋值运算符</span>
<span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token parameter">message</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 1.||逻辑赋值运算符</span>
  <span class="token comment">// message = message || &quot;默认值&quot;</span>
  <span class="token comment">// message ||= &quot;默认值&quot;</span>

  <span class="token comment">// 2.??逻辑赋值运算符</span>
  <span class="token comment">// message = message ?? &quot;默认值&quot;</span>
  message <span class="token operator">??=</span> <span class="token string">&quot;默认值&quot;</span><span class="token punctuation">;</span>

  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">foo</span><span class="token punctuation">(</span><span class="token string">&quot;abc&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 3.&amp;&amp;逻辑赋值运算符</span>
<span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;why&quot;</span><span class="token punctuation">,</span>
  <span class="token function-variable function">running</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;running~&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 3.1.&amp;&amp;一般的应用场景</span>
<span class="token comment">// obj &amp;&amp; obj.running &amp;&amp; obj.running()</span>
<span class="token comment">// obj = obj &amp;&amp; obj.name</span>
obj <span class="token operator">&amp;&amp;=</span> obj<span class="token punctuation">.</span>name<span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="赋值-1" tabindex="-1"><a class="header-anchor" href="#赋值-1" aria-hidden="true">#</a> 赋值</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 赋值运算符</span>
<span class="token comment">// const foo = &quot;foo&quot;</span>
<span class="token keyword">let</span> counter <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>
counter <span class="token operator">=</span> counter <span class="token operator">+</span> <span class="token number">100</span><span class="token punctuation">;</span>
counter <span class="token operator">+=</span> <span class="token number">50</span><span class="token punctuation">;</span>

<span class="token comment">// 逻辑赋值运算符</span>
<span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token parameter">message</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 1.||逻辑赋值运算符</span>
  <span class="token comment">// message = message || &quot;默认值&quot;</span>
  <span class="token comment">// message ||= &quot;默认值&quot;</span>

  <span class="token comment">// 2.??逻辑赋值运算符</span>
  <span class="token comment">// message = message ?? &quot;默认值&quot;</span>
  message <span class="token operator">??=</span> <span class="token string">&quot;默认值&quot;</span><span class="token punctuation">;</span>

  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">foo</span><span class="token punctuation">(</span><span class="token string">&quot;abc&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 3.&amp;&amp;逻辑赋值运算符</span>
<span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;aaa&quot;</span><span class="token punctuation">,</span>
  <span class="token function-variable function">running</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;running~&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 3.1.&amp;&amp;一般的应用场景</span>
<span class="token comment">// obj &amp;&amp; obj.running &amp;&amp; obj.running()</span>
<span class="token comment">// obj = obj &amp;&amp; obj.name</span>
obj <span class="token operator">&amp;&amp;=</span> obj<span class="token punctuation">.</span>name<span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),p=[o];function c(i,l){return s(),a("div",null,p)}const r=n(t,[["render",c],["__file","17_sign.html.vue"]]);export{r as default};
