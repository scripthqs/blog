<template><div><h1 id="vue-数据代理" tabindex="-1"><a class="header-anchor" href="#vue-数据代理" aria-hidden="true">#</a> Vue 数据代理</h1>
<h2 id="object-defineproperty" tabindex="-1"><a class="header-anchor" href="#object-defineproperty" aria-hidden="true">#</a> Object.defineProperty()</h2>
<p><code v-pre>Object.defineProperty()</code>是用来在一个对象上添加一个新属性，或者修改一个对象的现有属性， 并返回这个对象。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>修改的对象<span class="token punctuation">,</span><span class="token string">'对象的属性名'</span>，<span class="token punctuation">{</span>属性描述对象<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>属性描述对象提供 6 个元属性</strong>：</p>
<ul>
<li>value 是该属性的属性值，默认为 undefined</li>
<li>writable 控制属性是否可以被删除，默认值是 false</li>
<li>enumerable 控制属性是否可以被枚举，默认值是 false</li>
<li>configurable 控制属性是否可以被删除，默认值是 false</li>
<li>get 表示该属性的取值函数（<code v-pre>getter</code>），默认为<code v-pre>undefined</code>。</li>
<li>set 表示该属性的存值函数（setter），默认为<code v-pre>undefined</code>。</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> num <span class="token operator">=</span> <span class="token number">18</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> person <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"张三"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">gender</span><span class="token operator">:</span> <span class="token string">"男"</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>person<span class="token punctuation">,</span> <span class="token string">"age"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token comment">// value: 18,</span>
  <span class="token comment">// enumerable: true,//控制属性是否可以被枚举，默认值是false</span>
  <span class="token comment">// writable: true,//控制属性是否可以被修改，默认值是false</span>
  <span class="token comment">// configurable: true,//控制属性是否可以被删除，默认值是false</span>
  <span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//当有人读取age属性时，get函数（getter）会被调用，且返回值就是age的值</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"有人读取了age属性"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> num<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">set</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//当有人修改了age属性时，set函数（setter）会被调用，且会收到修改的具体值</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"有人修改了age属性，且值是"</span> <span class="token operator">+</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>person<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>当有人读取 age 属性时，get 函数（getter）会被调用，且<strong>返回值就是 age</strong>的值</li>
<li>当有人修改了 age 属性时，set 函数（setter）会被调用，且会收到修改的具体值</li>
<li>Object.defineProperty()将 num 和 person 绑定在一起，这就是 Vue 框架中，数据代理的原理</li>
</ul>
<h2 id="数据代理" tabindex="-1"><a class="header-anchor" href="#数据代理" aria-hidden="true">#</a> 数据代理</h2>
<p>数据代理：通过一个对象代理对另一个对象的属性的操作（读/写）</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code> <span class="token keyword">let</span> obj1 <span class="token operator">=</span> <span class="token punctuation">{</span> x <span class="token operator">=</span> <span class="token number">100</span> <span class="token punctuation">}</span>
 <span class="token keyword">let</span> obj2 <span class="token operator">=</span> <span class="token punctuation">{</span> y <span class="token operator">=</span> <span class="token number">200</span> <span class="token punctuation">}</span>
 Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>obj2<span class="token punctuation">,</span><span class="token string">'x'</span><span class="token punctuation">,</span><span class="token punctuation">{</span>
  <span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> obj<span class="token punctuation">.</span>x
  <span class="token punctuation">}</span>
  <span class="token function">set</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token comment">//value = obj.x</span>
    obj<span class="token punctuation">.</span>x <span class="token operator">=</span> value
  <span class="token punctuation">}</span>
 <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>通过 obj2 也可以修改 obj1</li>
</ul>
</div></template>


