<template><div><h1 id="react-的-fragment" tabindex="-1"><a class="header-anchor" href="#react-的-fragment" aria-hidden="true">#</a> React 的 fragment</h1>
<p>在开发中，总是在一个组件中返回内容时包裹一个 div 元素，不想用 div，就可以使用 fragment，类似于 Vue 的 template.</p>
<p>React 还有个 Fragment 的语法糖</p>
<ul>
<li><code v-pre>&lt;&gt;&lt;/&gt;</code>，看起来像空标签</li>
<li>但是，在 fragment 添加 key 时，就不能使用短语法</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> sections <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>h2<span class="token operator">></span>我是App的标题<span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">></span>
        <span class="token operator">&lt;</span>p<span class="token operator">></span>我是App的内容<span class="token punctuation">,</span> 哈哈哈哈<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
        <span class="token operator">&lt;</span>hr <span class="token operator">/</span><span class="token operator">></span>
        <span class="token punctuation">{</span>
          sections<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">item</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token punctuation">(</span>
              <span class="token punctuation">{</span><span class="token comment">/* 有key就不能省略 */</span><span class="token punctuation">}</span>
              <span class="token operator">&lt;</span>Fragment key<span class="token operator">=</span><span class="token punctuation">{</span>item<span class="token punctuation">.</span>title<span class="token punctuation">}</span><span class="token operator">></span>
                <span class="token operator">&lt;</span>h2<span class="token operator">></span><span class="token punctuation">{</span>item<span class="token punctuation">.</span>title<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">></span>
                <span class="token operator">&lt;</span>p<span class="token operator">></span><span class="token punctuation">{</span>item<span class="token punctuation">.</span>content<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
              <span class="token operator">&lt;</span><span class="token operator">/</span>Fragment<span class="token operator">></span>
            <span class="token punctuation">)</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">></span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


