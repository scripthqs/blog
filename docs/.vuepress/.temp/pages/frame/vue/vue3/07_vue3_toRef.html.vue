<template><div><h1 id="toref-和-torefs" tabindex="-1"><a class="header-anchor" href="#toref-和-torefs" aria-hidden="true">#</a> toRef 和 toRefs</h1>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> info <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"aaa"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span>
  <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">1.88</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// reactive被解构后会变成普通的值, 失去响应式</span>
<span class="token comment">// const { name, age, height } = info; //直接解构会失去响应式</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span> name<span class="token punctuation">,</span> age <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">toRefs</span><span class="token punctuation">(</span>info<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//使用toRefs解构，保留响应式</span>
<span class="token keyword">const</span> height <span class="token operator">=</span> <span class="token function">toRef</span><span class="token punctuation">(</span>info<span class="token punctuation">,</span> <span class="token string">"height"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p>作用：创建一个 ref 对象，其 value 值指向另一个对象中的某个属性。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">//toRef(对象,'对象中的属性')</span>
<span class="token keyword">const</span> name <span class="token operator">=</span> <span class="token function">toRef</span><span class="token punctuation">(</span>person<span class="token punctuation">,</span> <span class="token string">"name"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>应用: 要将响应式对象中的某个属性<strong>单独提供给外部使用</strong>时，此时，<strong>该属性也具有响应式</strong>。</p>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> person <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"小明"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">22</span><span class="token punctuation">,</span>
  <span class="token literal-property property">job</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">j1</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">salary</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> name1 <span class="token operator">=</span> person<span class="token punctuation">.</span>name<span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"%%%"</span><span class="token punctuation">,</span> name1<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> name2 <span class="token operator">=</span> <span class="token function">toRef</span><span class="token punctuation">(</span>person<span class="token punctuation">,</span> <span class="token string">"name"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"toRef"</span><span class="token punctuation">,</span> name2<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">return</span> <span class="token punctuation">{</span>
  person<span class="token punctuation">,</span>
  name2<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>扩展：<code v-pre>toRefs</code> 与<code v-pre>toRef</code>功能一致，但可以批量创建多个 ref 对象，语法：<code v-pre>toRefs(person)</code>，<strong>配合解构</strong>可以将对象中的属性分离出来。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token function">setup</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 数据</span>
  <span class="token keyword">let</span> person <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'小明'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">22</span><span class="token punctuation">,</span>
    <span class="token literal-property property">job</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">j1</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">salary</span><span class="token operator">:</span> <span class="token number">20</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> name1 <span class="token operator">=</span> person<span class="token punctuation">.</span>name
  <span class="token comment">// console.log('%%%', name1)</span>
  <span class="token keyword">const</span> name2 <span class="token operator">=</span> <span class="token function">toRef</span><span class="token punctuation">(</span>person<span class="token punctuation">,</span> <span class="token string">'name'</span><span class="token punctuation">)</span>
  <span class="token comment">// console.log('toRef', name2)</span>
  <span class="token keyword">const</span> name3 <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span>person<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
  <span class="token keyword">const</span> x <span class="token operator">=</span> <span class="token function">toRefs</span><span class="token punctuation">(</span>person<span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'toRefs'</span><span class="token punctuation">,</span> x<span class="token punctuation">)</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    person<span class="token punctuation">,</span>
    name1<span class="token punctuation">,</span>
    name2<span class="token punctuation">,</span>
    name3<span class="token punctuation">,</span>
    x<span class="token punctuation">,</span>
    <span class="token operator">...</span><span class="token function">toRefs</span><span class="token punctuation">(</span>person<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


