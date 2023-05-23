<template><div><h1 id="toraw-与-markraw" tabindex="-1"><a class="header-anchor" href="#toraw-与-markraw" aria-hidden="true">#</a> toRaw 与 markRaw</h1>
<ul>
<li>toRaw：
<ul>
<li>作用：将一个由<code v-pre>reactive</code>生成的<code v-pre>响应式对象</code>转为<code v-pre>普通对象</code>。</li>
<li>使用场景：用于读取响应式对象对应的普通对象，对这个普通对象的所有操作，不会引起页面更新。</li>
</ul>
</li>
<li>markRaw：
<ul>
<li>作用：标记一个对象，使其永远不会再成为响应式对象。</li>
<li>应用场景:
<ol>
<li><strong>有些值不应被设置为响应式</strong>的，例如复杂的第三方类库等。</li>
<li>当<strong>渲染具有不可变数据源的大列表</strong>时，跳过响应式转换可以提高性能。</li>
</ol>
</li>
</ul>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>h2<span class="token operator">></span><span class="token punctuation">{</span><span class="token punctuation">{</span>num<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">></span>
<span class="token operator">&lt;</span>button @click<span class="token operator">=</span><span class="token string">"num++"</span><span class="token operator">></span>num<span class="token operator">++</span><span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
<span class="token operator">&lt;</span>h4<span class="token operator">></span><span class="token punctuation">{</span><span class="token punctuation">{</span>person<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h4<span class="token operator">></span>
<span class="token operator">&lt;</span>h2<span class="token operator">></span>姓名：<span class="token punctuation">{</span><span class="token punctuation">{</span>name<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">></span>
<span class="token operator">&lt;</span>h2<span class="token operator">></span>年龄：<span class="token punctuation">{</span><span class="token punctuation">{</span>age<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">></span>
<span class="token operator">&lt;</span>h2<span class="token operator">></span>薪资：<span class="token punctuation">{</span><span class="token punctuation">{</span>job<span class="token punctuation">.</span>j1<span class="token punctuation">.</span>salary<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token constant">K</span><span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">></span>
<span class="token operator">&lt;</span>button @click<span class="token operator">=</span><span class="token string">"name+='~'"</span><span class="token operator">></span>修改姓名<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
<span class="token operator">&lt;</span>button @click<span class="token operator">=</span><span class="token string">"age++"</span><span class="token operator">></span>增长年龄<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
<span class="token operator">&lt;</span>button @click<span class="token operator">=</span><span class="token string">"job.j1.salary++"</span><span class="token operator">></span>涨薪<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
<span class="token function">setup</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> num <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
  <span class="token keyword">let</span> person <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token comment">// let person = reactive({</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'张三'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span>
    <span class="token literal-property property">job</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">j1</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">salary</span><span class="token operator">:</span> <span class="token number">20</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  num <span class="token operator">=</span> <span class="token function">toRaw</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token comment">//依然可以改，只能转换 reactive</span>
  <span class="token comment">// person = readonly(person)</span>
  person <span class="token operator">=</span> <span class="token function">toRaw</span><span class="token punctuation">(</span>person<span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    num<span class="token punctuation">,</span>
    person<span class="token punctuation">,</span>
    <span class="token operator">...</span><span class="token function">toRefs</span><span class="token punctuation">(</span>person<span class="token punctuation">)</span><span class="token comment">//此时，不能使用toRefs方法</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


