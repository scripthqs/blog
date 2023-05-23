import{_ as n,o as s,c as a,f as t}from"./app-68a897fb.js";const e={},o=t(`<h1 id="string-padding" tabindex="-1"><a class="header-anchor" href="#string-padding" aria-hidden="true">#</a> String Padding</h1><p>某些字符串我们需要对其进行前后的填充，来实现某种格式化效果，ES8 中增加了 padStart 和 padEnd 方法，分别是对字符串 的首尾进行填充的。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// padStart和padEnd</span>
<span class="token comment">// 1.应用场景一: 对时间进行格式化</span>
<span class="token comment">// const minute = &quot;15&quot;.padStart(2, &quot;0&quot;)</span>
<span class="token comment">// const second = &quot;6&quot;.padStart(2, &quot;0&quot;)</span>

<span class="token comment">// console.log(\`\${minute}:\${second}\`)</span>

<span class="token comment">// 2.应用场景二: 对一些敏感数据格式化，例如银行卡</span>
<span class="token keyword">let</span> cardNumber <span class="token operator">=</span> <span class="token string">&quot;132666200001018899&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> sliceNumber <span class="token operator">=</span> cardNumber<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
cardNumber <span class="token operator">=</span> sliceNumber<span class="token punctuation">.</span><span class="token function">padStart</span><span class="token punctuation">(</span>cardNumber<span class="token punctuation">.</span>length<span class="token punctuation">,</span> <span class="token string">&quot;*&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// const cardEl = document.querySelector(&quot;.card&quot;);</span>
<span class="token comment">// cardEl.textContent = cardNumber;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="trimstart" tabindex="-1"><a class="header-anchor" href="#trimstart" aria-hidden="true">#</a> trimStart</h2><p>去除一个字符串首尾的空格，可以通过 trim 方法，如果单独去除前面或者后面，可以使用：</p><ul><li>trimStart</li><li>trimEnd</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> message <span class="token operator">=</span> <span class="token string">&quot;   Hello World    &quot;</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>message<span class="token punctuation">.</span><span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>message<span class="token punctuation">.</span><span class="token function">trimStart</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>message<span class="token punctuation">.</span><span class="token function">trimEnd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),c=[o];function p(i,l){return s(),a("div",null,c)}const r=n(e,[["render",p],["__file","15_String Padding.html.vue"]]);export{r as default};
