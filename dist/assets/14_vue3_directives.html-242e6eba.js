import{_ as n,o as s,c as a,f as t}from"./app-10c4e004.js";const p={},e=t(`<h1 id="vue-自定义指令" tabindex="-1"><a class="header-anchor" href="#vue-自定义指令" aria-hidden="true">#</a> Vue 自定义指令</h1><p>vue 自带了 v-show、v-if、v-model 等指令，除了使用这些指令，vue 也允许自定义自己的指令。</p><ul><li>在 vue 中，代码的复用和抽象主要还是通过组件</li><li>在某些情况，需要对 DOM 元素进行底层操作，这时可以用到自定义指令</li></ul><p>自定义指令分为</p><ul><li>自定义局部指令：组件通过 directives 选项，只能在当前组件中使用</li><li>自定义全局指令：app 的 directive 方法，可以在任意组件中使用。</li></ul><p>实现一个功能：当元素挂在完成后可以自动获取焦点。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//vue3 setup中</span>

<span class="token comment">//自定义局部指令</span>
<span class="token keyword">const</span> vFocus <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// 生命周期的函数(自定义指令)</span>
  <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token parameter">el</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// console.log(&quot;v-focus应用的元素被挂载了&quot;, el)</span>
    el<span class="token operator">?.</span><span class="token function">focus</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">//实际开发中，一般使用自定义全局指令</span>
<span class="token comment">// 1.新建一个directives文件夹</span>
<span class="token comment">// 2.directives文件夹下新建一个focus.js文件</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">directiveFocus</span><span class="token punctuation">(</span><span class="token parameter">app</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  app<span class="token punctuation">.</span><span class="token function">directive</span><span class="token punctuation">(</span><span class="token string">&#39;focus&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token comment">// 生命周期的函数(自定义指令)</span>
    <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token parameter">el</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// console.log(&quot;v-focus应用的元素被挂载了&quot;, el)</span>
      el<span class="token operator">?.</span><span class="token function">focus</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">//3.directives文件夹下新建一个index.js文件</span>
<span class="token keyword">import</span> directiveFocus <span class="token keyword">from</span> <span class="token string">&#39;./focus&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> directiveAaa <span class="token keyword">from</span> <span class="token string">&#39;./aaa&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  directiveFocus<span class="token punctuation">,</span>
  directiveAaa
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">//4.在main.js中引入</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> directiveFocus<span class="token punctuation">,</span>directiveAaa <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./directives/index&#39;</span><span class="token punctuation">;</span>
<span class="token function">directiveFocus</span><span class="token punctuation">(</span>app<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">directiveAaa</span><span class="token punctuation">(</span>app<span class="token punctuation">)</span>

<span class="token comment">// 但是这样写，有可能出现过多的导入导出，可以换一种</span>

<span class="token comment">//3-1 directives文件夹下新建一个index.js文件</span>
<span class="token keyword">import</span> directiveFocus <span class="token keyword">from</span> <span class="token string">&#39;./focus&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> directiveAaa <span class="token keyword">from</span> <span class="token string">&#39;./aaa&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> useDirective <span class="token punctuation">{</span>
  <span class="token function">directiveFocus</span><span class="token punctuation">(</span>app<span class="token punctuation">)</span>
  <span class="token function">directiveAaa</span><span class="token punctuation">(</span>app<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">//4-1 在main.js中引入</span>
<span class="token keyword">import</span> useDirective <span class="token keyword">from</span> <span class="token string">&#39;./directives/index&#39;</span><span class="token punctuation">;</span>
<span class="token function">useDirective</span><span class="token punctuation">(</span>app<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="自定义指令参数修饰符" tabindex="-1"><a class="header-anchor" href="#自定义指令参数修饰符" aria-hidden="true">#</a> 自定义指令参数修饰符</h2><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!-- 1.参数-修饰符-值 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span> <span class="token attr-name"><span class="token namespace">v-why:</span>kobe.abc.cba</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>message<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>哈哈哈哈<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">const</span> message <span class="token operator">=</span> <span class="token string">&quot;你好啊, 自定义修饰符&quot;</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> vWhy <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token parameter">el<span class="token punctuation">,</span> bindings</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>bindings<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//参数-修饰符-值在这里面都可以拿到</span>
      el<span class="token punctuation">.</span>textContent <span class="token operator">=</span> bindings<span class="token punctuation">.</span>value<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>自定义指令的生命周期跟之前的生命周期大同小异。</p><p>自定义指令，添加单位</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!-- 2.价格拼接单位符号 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span> <span class="token attr-name">v-unit</span><span class="token punctuation">&gt;</span></span>{{ 111 }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  app<span class="token punctuation">.</span><span class="token function">directive</span><span class="token punctuation">(</span><span class="token string">&quot;unit&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token parameter">el<span class="token punctuation">,</span> bindings</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> defaultText <span class="token operator">=</span> el<span class="token punctuation">.</span>textContent<span class="token punctuation">;</span>
      <span class="token keyword">let</span> unit <span class="token operator">=</span> bindings<span class="token punctuation">.</span>value <span class="token operator">||</span> ￥<span class="token punctuation">;</span>
      <span class="token keyword">let</span> arg <span class="token operator">=</span>bindings<span class="token punctuation">.</span>arg<span class="token punctuation">;</span>
      <span class="token keyword">if</span><span class="token punctuation">(</span>arg<span class="token operator">===</span><span class="token string">&#39;end&#39;</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        el<span class="token punctuation">.</span>textContent <span class="token operator">=</span> defaultText <span class="token operator">+</span>unit<span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
        el<span class="token punctuation">.</span>textContent <span class="token operator">=</span> unit <span class="token operator">+</span> defaultText<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>自定义一个指令 v-format-time，格式化后端传入的时间戳</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> dayjs <span class="token keyword">from</span> <span class="token string">&quot;dayjs&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">directiveFtime</span><span class="token punctuation">(</span><span class="token parameter">app</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  app<span class="token punctuation">.</span><span class="token function">directive</span><span class="token punctuation">(</span><span class="token string">&quot;time&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token parameter">el<span class="token punctuation">,</span> bindings</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 1.获取时间, 并且转化成毫秒</span>
      <span class="token keyword">let</span> timestamp <span class="token operator">=</span> el<span class="token punctuation">.</span>textContent<span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>timestamp<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">10</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        timestamp <span class="token operator">=</span> timestamp <span class="token operator">*</span> <span class="token number">1000</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>

      timestamp <span class="token operator">=</span> <span class="token function">Number</span><span class="token punctuation">(</span>timestamp<span class="token punctuation">)</span><span class="token punctuation">;</span>

      <span class="token comment">// 2.获取传入的参数</span>
      <span class="token keyword">let</span> value <span class="token operator">=</span> bindings<span class="token punctuation">.</span>value <span class="token operator">||</span> <span class="token string">&quot;YYYY-MM-DD HH:mm:ss&quot;</span><span class="token punctuation">;</span>

      <span class="token comment">// 3.对时间进行格式化</span>
      <span class="token keyword">const</span> formatTime <span class="token operator">=</span> <span class="token function">dayjs</span><span class="token punctuation">(</span>timestamp<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
      el<span class="token punctuation">.</span>textContent <span class="token operator">=</span> formatTime<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14),c=[e];function o(i,l){return s(),a("div",null,c)}const k=n(p,[["render",o],["__file","14_vue3_directives.html.vue"]]);export{k as default};
