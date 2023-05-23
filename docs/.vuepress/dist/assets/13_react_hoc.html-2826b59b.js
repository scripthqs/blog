import{_ as n,o as s,c as a,f as t}from"./app-68a897fb.js";const p={},e=t(`<h1 id="react-高阶组件" tabindex="-1"><a class="header-anchor" href="#react-高阶组件" aria-hidden="true">#</a> React 高阶组件</h1><p>高阶组件是参数为组件，返回值为新组件的函数。</p><ul><li>高阶组件本质是一个函数</li><li>这个函数的参数是组件，返回值也是一个组件</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 定义一个高阶组件</span>
<span class="token keyword">function</span> <span class="token function">hoc</span><span class="token punctuation">(</span><span class="token parameter">Cpn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 1.定义类组件</span>
  <span class="token keyword">class</span> <span class="token class-name">NewCpn</span> <span class="token keyword">extends</span> <span class="token class-name">PureComponent</span> <span class="token punctuation">{</span>
    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token operator">&lt;</span>Cpn <span class="token operator">/</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// NewCpn.displayName = &quot;Hello world&quot;;</span>
  <span class="token keyword">return</span> NewCpn<span class="token punctuation">;</span>

  <span class="token comment">// 定义函数组件</span>
  <span class="token comment">// function NewCpn2(props) {</span>

  <span class="token comment">// }</span>
  <span class="token comment">// return NewCpn2</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> HelloWorldHOC <span class="token operator">=</span> <span class="token function">hoc</span><span class="token punctuation">(</span>HelloWorld<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>组件名称</p><ul><li>ES6 中，类表达式中的类名可以省略</li><li>组件名称可以通过 displayName 来修改</li></ul><h2 id="增强-props" tabindex="-1"><a class="header-anchor" href="#增强-props" aria-hidden="true">#</a> 增强 props</h2><p>给一些需要特殊数据的组件, 注入 props</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> PureComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;react&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// 定义组件: 给一些需要特殊数据的组件, 注入props</span>
<span class="token keyword">function</span> <span class="token function">enhancedUserInfo</span><span class="token punctuation">(</span><span class="token parameter">OriginComponent</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">class</span> <span class="token class-name">NewComponent</span> <span class="token keyword">extends</span> <span class="token class-name">PureComponent</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">userInfo</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;test&quot;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">level</span><span class="token operator">:</span> <span class="token number">99</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token operator">&lt;</span>OriginComponent <span class="token punctuation">{</span><span class="token operator">...</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">}</span> <span class="token punctuation">{</span><span class="token operator">...</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>userInfo<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> NewComponent<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> enhancedUserInfo<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="共享-context" tabindex="-1"><a class="header-anchor" href="#共享-context" aria-hidden="true">#</a> 共享 Context</h2><p>利用高阶组件共享 Context</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// context/theme_context.js</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> createContext <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;react&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> ThemeContext <span class="token operator">=</span> <span class="token function">createContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> ThemeContext<span class="token punctuation">;</span>

<span class="token comment">// App.jsx</span>
<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> PureComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;react&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> ThemeContext <span class="token keyword">from</span> <span class="token string">&quot;./context/theme_context&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Home <span class="token keyword">from</span> <span class="token string">&quot;./pages/Home&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">PureComponent</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
        <span class="token punctuation">{</span><span class="token comment">/* &lt;ThemeContext.Provider value={{ color: &quot;red&quot;, size: 30 }}&gt;
          &lt;Home /&gt;
        &lt;/ThemeContext.Provider&gt; */</span><span class="token punctuation">}</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>

<span class="token comment">// Home.jsx</span>
<span class="token comment">// 写法1，不利用高阶组件，但是不便复用</span>
<span class="token keyword">import</span> ThemeContext <span class="token keyword">from</span> <span class="token string">&quot;./context/theme_context&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Home</span> <span class="token keyword">extends</span> <span class="token class-name">PureComponent</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
        <span class="token literal-property property">Home</span><span class="token operator">:</span>
        <span class="token operator">&lt;</span>ThemeContext<span class="token punctuation">.</span>Consumer<span class="token operator">&gt;</span>
          <span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token punctuation">(</span>
              <span class="token operator">&lt;</span>h2<span class="token operator">&gt;</span>
                <span class="token literal-property property">theme</span><span class="token operator">:</span><span class="token punctuation">{</span>value<span class="token punctuation">.</span>color<span class="token punctuation">}</span><span class="token operator">-</span><span class="token punctuation">{</span>value<span class="token punctuation">.</span>size<span class="token punctuation">}</span>
              <span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">&gt;</span>
            <span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span><span class="token punctuation">}</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>ThemeContext<span class="token punctuation">.</span>Consumer<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> Home<span class="token punctuation">;</span>

<span class="token comment">//写法2，利用高阶组件</span>
<span class="token comment">// hoc/withTheme.js</span>
<span class="token keyword">import</span> ThemeContext <span class="token keyword">from</span> <span class="token string">&quot;../context/theme_context&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">withTheme</span><span class="token punctuation">(</span><span class="token parameter">OriginComponent</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span>ThemeContext<span class="token punctuation">.</span>Consumer<span class="token operator">&gt;</span>
        <span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> <span class="token operator">&lt;</span>OriginComponent <span class="token punctuation">{</span><span class="token operator">...</span>value<span class="token punctuation">}</span> <span class="token punctuation">{</span><span class="token operator">...</span>props<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">}</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>ThemeContext<span class="token punctuation">.</span>Consumer<span class="token operator">&gt;</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> withTheme<span class="token punctuation">;</span>

<span class="token comment">// Home.jsx</span>
<span class="token keyword">import</span> withTheme <span class="token keyword">from</span> <span class="token string">&quot;../hoc/with_theme&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Home</span> <span class="token keyword">extends</span> <span class="token class-name">PureComponent</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> color<span class="token punctuation">,</span> size <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>h2<span class="token operator">&gt;</span>
          <span class="token literal-property property">Home</span><span class="token operator">:</span> <span class="token punctuation">{</span>color<span class="token punctuation">}</span><span class="token operator">-</span><span class="token punctuation">{</span>size<span class="token punctuation">}</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">withTheme</span><span class="token punctuation">(</span>Home<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="判断鉴权" tabindex="-1"><a class="header-anchor" href="#判断鉴权" aria-hidden="true">#</a> 判断鉴权</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// hoc/loginAuth.js</span>
<span class="token keyword">function</span> <span class="token function">loginAuth</span><span class="token punctuation">(</span><span class="token parameter">OriginComponent</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// 从localStorage中获取token</span>
    <span class="token keyword">const</span> token <span class="token operator">=</span> localStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">&quot;token&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>token<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token operator">&lt;</span>OriginComponent <span class="token punctuation">{</span><span class="token operator">...</span>props<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token operator">&lt;</span>h2<span class="token operator">&gt;</span>请先登录<span class="token punctuation">,</span> 再进行跳转到对应的页面中<span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">&gt;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> loginAuth<span class="token punctuation">;</span>

<span class="token comment">// Home.jsx</span>
<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> PureComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;react&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> loginAuth <span class="token keyword">from</span> <span class="token string">&quot;../hoc/login_auth&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Home</span> <span class="token keyword">extends</span> <span class="token class-name">PureComponent</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token operator">&lt;</span>h2<span class="token operator">&gt;</span>Home Page<span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">&gt;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">loginAuth</span><span class="token punctuation">(</span>Home<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>this.forceUpdate()</code>可以强制渲染 render 函数，但是不推荐</li><li>尽量通过修改 state 来渲染 render 函数</li></ul><h2 id="劫持生命周期" tabindex="-1"><a class="header-anchor" href="#劫持生命周期" aria-hidden="true">#</a> 劫持生命周期</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// hoc/log_render_time.js</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> PureComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;react&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">logRenderTime</span><span class="token punctuation">(</span><span class="token parameter">OriginComponent</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">class</span> <span class="token class-name">extends</span> PureComponent <span class="token punctuation">{</span>
    <span class="token function">UNSAFE_componentWillMount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>beginTime <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">componentDidMount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>endTime <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">const</span> interval <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>endTime <span class="token operator">-</span> <span class="token keyword">this</span><span class="token punctuation">.</span>beginTime<span class="token punctuation">;</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">当前</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>OriginComponent<span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">页面花费了</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>interval<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">ms渲染完成!</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token operator">&lt;</span>OriginComponent <span class="token punctuation">{</span><span class="token operator">...</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> logRenderTime<span class="token punctuation">;</span>

<span class="token comment">// Detail.jsx</span>
<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> PureComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;react&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> logRenderTime <span class="token keyword">from</span> <span class="token string">&quot;../hoc/log_render_time&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Detail</span> <span class="token keyword">extends</span> <span class="token class-name">PureComponent</span> <span class="token punctuation">{</span>
  <span class="token comment">// UNSAFE_componentWillMount() {</span>
  <span class="token comment">//   this.beginTime = new Date().getTime()</span>
  <span class="token comment">// }</span>
  <span class="token comment">// componentDidMount() {</span>
  <span class="token comment">//   this.endTime = new Date().getTime()</span>
  <span class="token comment">//   const interval = this.endTime - this.beginTime</span>
  <span class="token comment">//   console.log(\`当前页面花费了\${interval}ms渲染完成!\`)</span>
  <span class="token comment">// }</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>h2<span class="token operator">&gt;</span>Detail Page<span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>ul<span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span>li<span class="token operator">&gt;</span>数据列表<span class="token number">1</span><span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span>li<span class="token operator">&gt;</span>数据列表<span class="token number">2</span><span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span>li<span class="token operator">&gt;</span>数据列表<span class="token number">3</span><span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span>li<span class="token operator">&gt;</span>数据列表<span class="token number">4</span><span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span>li<span class="token operator">&gt;</span>数据列表<span class="token number">5</span><span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span>li<span class="token operator">&gt;</span>数据列表<span class="token number">6</span><span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span>li<span class="token operator">&gt;</span>数据列表<span class="token number">7</span><span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span>li<span class="token operator">&gt;</span>数据列表<span class="token number">8</span><span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span>li<span class="token operator">&gt;</span>数据列表<span class="token number">9</span><span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span>li<span class="token operator">&gt;</span>数据列表<span class="token number">10</span><span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">logRenderTime</span><span class="token punctuation">(</span>Detail<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="高阶组件的不足" tabindex="-1"><a class="header-anchor" href="#高阶组件的不足" aria-hidden="true">#</a> 高阶组件的不足</h2><p>高阶组件可以对 React 代码进行复用，早期 React 是通过 mixin，但是现在已经不推荐</p><ul><li>Mixin 可能会相互依赖，不利于维护</li><li>不同的 Mixin 方法可能会有冲突</li></ul><p>HOC 也有一些缺陷，类组件使用还是挺多</p><ul><li>HOC 需要在原组件进行包裹或者嵌套，大量的 HOC 也不利于维护</li><li>HOC 可以劫持 props，也可能造成冲突</li></ul><p>目前最好的方案是使用 Hooks 来解决这些问题</p><h2 id="memo-和-forwardref" tabindex="-1"><a class="header-anchor" href="#memo-和-forwardref" aria-hidden="true">#</a> memo 和 forwardRef</h2><ul><li>memo：函数式组件常用的 memo，本质就是一个高阶组件，劫持 props 判断是否重新渲染</li><li>forwardRef：函数式组件常用的 forwardRef，也是一个高阶组件，用来获取组件的 ref</li></ul>`,25),o=[e];function c(l,i){return s(),a("div",null,o)}const u=n(p,[["render",c],["__file","13_react_hoc.html.vue"]]);export{u as default};
