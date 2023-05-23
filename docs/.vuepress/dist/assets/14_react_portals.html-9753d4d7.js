import{_ as n,o as s,c as a,f as t}from"./app-68a897fb.js";const p={},o=t(`<h1 id="react-的-portals" tabindex="-1"><a class="header-anchor" href="#react-的-portals" aria-hidden="true">#</a> React 的 Portals</h1><p>某些情况下，希望渲染的内容独立于父组件，甚至独立于当前挂载到的 DOM 元素中，默认都是挂载到 id 为 root 的 DOM 元素上。Portal 提供了一种将子节点渲染到存在父组件外的 DOM 节点。类似 Vue3 的 teleport。</p><h2 id="createportal" tabindex="-1"><a class="header-anchor" href="#createportal" aria-hidden="true">#</a> createPortal</h2><ul><li>第一个参数：任何可渲染的 React 子元素，例如一个元素，字符串或 fragment</li><li>第二个参数：是一个 DOM 元素</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> PureComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;react&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> createPortal <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;react-dom&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Modal <span class="token keyword">from</span> <span class="token string">&quot;./Modal&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">PureComponent</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">&quot;app&quot;</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>h1<span class="token operator">&gt;</span>App <span class="token constant">H1</span><span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">&gt;</span>
        <span class="token punctuation">{</span><span class="token function">createPortal</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>h2<span class="token operator">&gt;</span>App <span class="token constant">H2</span><span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">&gt;</span><span class="token punctuation">,</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&quot;#hello&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span>

        <span class="token punctuation">{</span><span class="token comment">/* 2.Modal组件 */</span><span class="token punctuation">}</span>
        <span class="token operator">&lt;</span>Modal<span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span>h2<span class="token operator">&gt;</span>我是标题<span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>我是内容<span class="token punctuation">,</span> 哈哈哈<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>Modal<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>

<span class="token comment">// 1. 在index.html添加新节点</span>
<span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">&quot;modal&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token comment">// 2. 编写节点的样式</span>
<span class="token operator">...</span>
<span class="token comment">// 3.编写modal.jsx组件</span>
<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> PureComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;react&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> createPortal <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;react-dom&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Modal</span> <span class="token keyword">extends</span> <span class="token class-name">PureComponent</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">createPortal</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>children<span class="token punctuation">,</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&quot;#modal&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> Modal<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),e=[o];function c(l,r){return s(),a("div",null,e)}const u=n(p,[["render",c],["__file","14_react_portals.html.vue"]]);export{u as default};
