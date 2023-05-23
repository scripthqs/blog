<template><div><h1 id="shallowreactive-与-shallowref" tabindex="-1"><a class="header-anchor" href="#shallowreactive-与-shallowref" aria-hidden="true">#</a> shallowReactive 与 shallowRef</h1>
<p>shallow：浅的</p>
<ul>
<li>
<p>shallowReactive：只处理对象最外层属性的响应式（浅响应式）。</p>
</li>
<li>
<p>shallowRef：只处理基本数据类型的响应式, 不进行对象的响应式处理。</p>
</li>
<li>
<p>什么时候使用?</p>
<ul>
<li>如果有一个对象数据，结构比较深, 但变化时只是外层属性变化 ===&gt; shallowReactive。</li>
<li>如果有一个对象数据，后续功能不会修改该对象中的属性，而是生新的对象来替换 ===&gt; shallowRef。</li>
</ul>
</li>
</ul>
<p>shallowReactive：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>h4<span class="token operator">></span><span class="token punctuation">{</span><span class="token punctuation">{</span>person<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h4<span class="token operator">></span>
<span class="token operator">&lt;</span>h2<span class="token operator">></span>姓名：<span class="token punctuation">{</span><span class="token punctuation">{</span>name<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">></span>
<span class="token operator">&lt;</span>h2<span class="token operator">></span>年龄：<span class="token punctuation">{</span><span class="token punctuation">{</span>age<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">></span>
<span class="token operator">&lt;</span>h2<span class="token operator">></span>薪资：<span class="token punctuation">{</span><span class="token punctuation">{</span>job<span class="token punctuation">.</span>j1<span class="token punctuation">.</span>salary<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token constant">K</span><span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">></span>
<span class="token operator">&lt;</span>button @click<span class="token operator">=</span><span class="token string">"name+='~'"</span><span class="token operator">></span>修改姓名<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
<span class="token operator">&lt;</span>button @click<span class="token operator">=</span><span class="token string">"age++"</span><span class="token operator">></span>增长年龄<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
<span class="token operator">&lt;</span>button @click<span class="token operator">=</span><span class="token string">"job.j1.salary++"</span><span class="token operator">></span>涨薪<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
  <span class="token keyword">let</span> person <span class="token operator">=</span> <span class="token function">shallowReactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token comment">//只考虑第一层数据的响应式</span>
    <span class="token comment">// let person = reactive({</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'张三'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span>
    <span class="token literal-property property">job</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">j1</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">salary</span><span class="token operator">:</span> <span class="token number">20</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
      person<span class="token punctuation">,</span>
      <span class="token operator">...</span><span class="token function">toRefs</span><span class="token punctuation">(</span>person<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>shallowRef：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>h4<span class="token operator">></span>当前的x<span class="token punctuation">.</span>y值是：<span class="token punctuation">{</span><span class="token punctuation">{</span>x<span class="token punctuation">.</span>y<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h4<span class="token operator">></span>
<span class="token operator">&lt;</span>button @click<span class="token operator">=</span><span class="token string">"x={y:888}"</span><span class="token operator">></span>点我替换x<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span><span class="token comment">//可以替换</span>
<span class="token operator">&lt;</span>button @click<span class="token operator">=</span><span class="token string">"x.y++"</span><span class="token operator">></span>点我x<span class="token punctuation">.</span>y<span class="token operator">++</span><span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span><span class="token comment">//不能监测x.y的改变</span>
<span class="token keyword">let</span> x <span class="token operator">=</span> <span class="token function">shallowRef</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">0</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">return</span> <span class="token punctuation">{</span>
  x
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


