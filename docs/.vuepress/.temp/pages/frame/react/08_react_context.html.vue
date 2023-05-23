<template><div><h1 id="context-应用场景" tabindex="-1"><a class="header-anchor" href="#context-应用场景" aria-hidden="true">#</a> Context 应用场景</h1>
<p>对于非父子组件数据的共享</p>
<ul>
<li>在开发中，比较常见的数据传递方式通过 props 属性自上而下(由父到子)进行传递</li>
<li>有些情况下，一些数据需要多个组件进行共享(地区偏好、UI 主题、用户登录状态、用户信息)</li>
</ul>
<p>如果一层层的传，有个简单的语法</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> info <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">;</span>
<span class="token operator">&lt;</span>Header <span class="token punctuation">{</span><span class="token operator">...</span>info<span class="token punctuation">}</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>Header<span class="token operator">></span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>使用 Context，主要有一下几个 api，但是还是很繁琐</p>
<ul>
<li>React.createContext</li>
<li>Context.Provider</li>
<li>Class.contextType</li>
<li>Context.Consumer</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">/* 1.第一步操作.创建一个Context */</span>
<span class="token comment">// InfoContext.jsx</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> InfoContext <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">createContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> InfoContext<span class="token punctuation">;</span>

<span class="token comment">/* 2.第二步操作: 通过ThemeContext中Provider中value属性为后代提供数据 */</span>
<span class="token comment">//在main.jsx父组件中</span>
<span class="token comment">// import InfoContext './context/InfoContext';</span>
<span class="token operator">&lt;</span>InfoContext<span class="token punctuation">.</span>Provider value<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">"red"</span><span class="token punctuation">,</span> <span class="token literal-property property">size</span><span class="token operator">:</span> <span class="token string">"30"</span> <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">></span>
  <span class="token operator">&lt;</span>Son<span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>Son<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>InfoContext<span class="token punctuation">.</span>Provider<span class="token operator">></span><span class="token punctuation">;</span>

<span class="token comment">//在Grandson.jsx组件中，当Grandson.jsx是类组件</span>
<span class="token comment">// import InfoContext './context/InfoContext';</span>
<span class="token comment">/* 3.第三步操作: 设置组件的contextType为某一个Context */</span>
Top<span class="token punctuation">.</span>contextType <span class="token operator">=</span> InfoContext<span class="token punctuation">;</span>
<span class="token comment">/*4.第四步操作: 获取数据, 并且使用数据  */</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>context<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上方法是类组件的使用方式，如果是函数式组件</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">//在Grandson.jsx组件中，当Grandson.jsx是函数组件</span>
<span class="token comment">// import InfoContext './context/InfoContext';</span>
<span class="token keyword">return</span> <span class="token punctuation">(</span>
  <span class="token operator">&lt;</span>div<span class="token operator">></span>
    <span class="token punctuation">{</span><span class="token comment">/* 函数式组件中使用Context共享的数据 */</span><span class="token punctuation">}</span>
    <span class="token operator">&lt;</span>InfoContext<span class="token punctuation">.</span>Consumer<span class="token operator">></span>
      <span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token operator">&lt;</span>h2<span class="token operator">></span><span class="token punctuation">{</span>value<span class="token punctuation">.</span>color<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">></span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">}</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>InfoContext<span class="token punctuation">.</span>Consumer<span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>另外 Context 是支持嵌套的</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>UserContext<span class="token punctuation">.</span>Provider value<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">"666"</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"user"</span> <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">></span>
  <span class="token operator">&lt;</span>InfoContext<span class="token punctuation">.</span>Provider value<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">"red"</span><span class="token punctuation">,</span> <span class="token literal-property property">size</span><span class="token operator">:</span> <span class="token string">"30"</span> <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>Son <span class="token punctuation">{</span><span class="token operator">...</span>info<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>InfoContext<span class="token punctuation">.</span>Provider<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>UserContext<span class="token punctuation">.</span>Provider<span class="token operator">></span><span class="token punctuation">;</span>

<span class="token comment">//在Grandson.jsx组件中，当Grandson.jsx是类组件</span>
<span class="token keyword">import</span> UserContext <span class="token keyword">from</span> <span class="token string">"./context/UserContext"</span><span class="token punctuation">;</span>
<span class="token keyword">return</span> <span class="token punctuation">(</span>
  <span class="token operator">&lt;</span>div<span class="token operator">></span>
    <span class="token operator">&lt;</span>h2<span class="token operator">></span>Grandson<span class="token operator">:</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>context<span class="token punctuation">.</span>color<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">></span>
    <span class="token operator">&lt;</span>UserContext<span class="token punctuation">.</span>Consumer<span class="token operator">></span>
      <span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token operator">&lt;</span>h2<span class="token operator">></span><span class="token punctuation">{</span>value<span class="token punctuation">.</span>name<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">></span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">}</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>UserContext<span class="token punctuation">.</span>Consumer<span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>React.createContext</code>默认值</p>
<ul>
<li>React.createContext 可以传一个默认值 defaultValue</li>
<li>当组件不能被 <code v-pre>Context.Provider</code>包裹时用</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>InfoContext<span class="token punctuation">.</span>Provider value<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">"red"</span><span class="token punctuation">,</span> <span class="token literal-property property">size</span><span class="token operator">:</span> <span class="token string">"30"</span> <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">></span>
  <span class="token operator">&lt;</span>Son <span class="token punctuation">{</span><span class="token operator">...</span>info<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>InfoContext<span class="token punctuation">.</span>Provider<span class="token operator">></span>
<span class="token operator">&lt;</span>Grandson<span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>Grandson<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>Context.Consumer</code>的使用场景</p>
<ol>
<li>在函数式组件中使用，</li>
<li>当组件中需要使用多个 Context 时</li>
</ol>
</div></template>


