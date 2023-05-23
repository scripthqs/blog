<template><div><h1 id="vue-购物街" tabindex="-1"><a class="header-anchor" href="#vue-购物街" aria-hidden="true">#</a> Vue 购物街</h1>
<p>一款基于 VueCLI、Vue-router、Vuex、VueLazyLoad、BetterScroll(滚动插件)、Axios 等构建的 web 移动端商城项目。</p>
<p><a href="https://github.com/Scripthqs/vuemall" target="_blank" rel="noopener noreferrer">源码链接<ExternalLinkIcon/></a></p>
<p>本项目是移动端项目，推荐手机<strong>扫描二维码预览</strong></p>
<p><img src="@source/project/h5/vue2_h5/images/vuemall.png" alt="可手机扫描二维码预览"></p>
<p><a href="http://scripthqs.gitee.io/vuemall/#/home" target="_blank" rel="noopener noreferrer">没有使用组件库的项目预览<ExternalLinkIcon/></a></p>
<p><img src="@source/project/h5/vue2_h5/images/vantmall.png" alt="可手机扫描二维码预览"></p>
<p><a href="http://scripthqs.gitee.io/vantmall" target="_blank" rel="noopener noreferrer">使用 vant-ui 组件库重构的版本<ExternalLinkIcon/></a></p>
<p>本项目功能模块包含首页轮播、商品详情、商品分类、购物车功能等业务、采用模块化、组件化、工程化的模式开发</p>
<h2 id="_1-准备" tabindex="-1"><a class="header-anchor" href="#_1-准备" aria-hidden="true">#</a> 1 准备</h2>
<h3 id="_1-1-划分目录结构" tabindex="-1"><a class="header-anchor" href="#_1-1-划分目录结构" aria-hidden="true">#</a> 1.1 划分目录结构</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>vue create vuemall
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>使用 vuecli 创建项目，</p>
<ul>
<li>src/network 文件夹：专门用来封装网络请求，里面对 axios 进行了二次封装</li>
<li>components/views 文件夹：
<ul>
<li>两个文件夹都可以用来放组件</li>
<li>components 文件夹，存放<strong>不使用路由</strong>切换，<strong>可复用</strong>的组件</li>
<li>views 文件夹，存放<strong>通过路由来切换的</strong>的组件</li>
</ul>
</li>
</ul>
<h3 id="_1-2-css-样式重置" tabindex="-1"><a class="header-anchor" href="#_1-2-css-样式重置" aria-hidden="true">#</a> 1.2 css 样式重置</h3>
<ol>
<li>
<p>引入 normalize.css，npm 引入或者直接下载到 src/assets/css 文件夹中</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">--save</span> normalize.css
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>main.js 引入</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code> <span class="token function">import</span> 'normalize.css/normalize.css
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>定义基础样式 base.css</p>
</li>
<li>
<p>在 vue 中引入 css 文件时，需要注意，例如引入 base.css</p>
<p>在 app.vue 文件中引入时，需要在 style 标签里面引入</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>@import <span class="token string">"@/assets/css/base.css"</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在 main.js 文件中引入</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">import</span> <span class="token string">'@/assets/css/base.css'</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
</ol>
<h3 id="_1-3-vue-的配置文件" tabindex="-1"><a class="header-anchor" href="#_1-3-vue-的配置文件" aria-hidden="true">#</a> 1.3 vue 的配置文件</h3>
<p>在 vue 项目中，默认隐藏了 webpack 的默认配置，需要新建配置文件 vue.config.js 和.editorconfig</p>
<ul>
<li>
<p>在 vue.config.js 中配置别名</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">configureWebpack</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">resolve</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">alias</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token string">"@/components"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">"components/content"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">common</span><span class="token operator">:</span> <span class="token string">"components/common"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">assets</span><span class="token operator">:</span> <span class="token string">"@/assets"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">network</span><span class="token operator">:</span> <span class="token string">"@/network"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">views</span><span class="token operator">:</span> <span class="token string">"@/views"</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>在.editorconfig 中统一代码格式化规则</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>root <span class="token operator">=</span> <span class="token boolean">true</span>

<span class="token punctuation">[</span><span class="token operator">*</span><span class="token punctuation">]</span>
charset <span class="token operator">=</span> utf<span class="token operator">-</span><span class="token number">8</span>
indent_style <span class="token operator">=</span> space
indent_size <span class="token operator">=</span> <span class="token number">2</span>
end_of_line <span class="token operator">=</span> lf
insert_final_newline <span class="token operator">=</span> <span class="token boolean">true</span>
trim_trailing_whitespace <span class="token operator">=</span> <span class="token boolean">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h3 id="_1-4-项目模板的划分" tabindex="-1"><a class="header-anchor" href="#_1-4-项目模板的划分" aria-hidden="true">#</a> 1.4 项目模板的划分</h3>
<p>在 app.vue 文件中，引入<strong>Tabbar 底部切换</strong>的标签栏组件，然后再<strong>配置路由</strong>的映射关系</p>
<ol>
<li>如果完全手写，需要自己手动封装一个 Tabbar 组件</li>
<li>封装组件时，一般都会使用到插槽，对于一个完整的 Tabbar 组件，一般需要封装 Tabbar 组件和 TabBarItem 组件</li>
</ol>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code>//Tabbar组件
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tab-bar<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slot</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

//TabBarItem组件
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tab-bar-item<span class="token punctuation">"</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>itemClick<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>!isActive<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item-icon<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slot</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-else</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item-icon-active<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slot</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token comment">&lt;!-- 下面这个slot会被替换掉，所以得放在div中 并在div中设置 :class --></span>
    <span class="token comment">&lt;!-- &lt;div :class="{ active: isActive }">&lt;slot name="item-text">&lt;/slot>&lt;/div> --></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">:style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>activeStyle<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item-text<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slot</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-首页的开发" tabindex="-1"><a class="header-anchor" href="#_2-首页的开发" aria-hidden="true">#</a> 2 首页的开发</h2>
<h3 id="_2-1-navbar-导航栏封装" tabindex="-1"><a class="header-anchor" href="#_2-1-navbar-导航栏封装" aria-hidden="true">#</a> 2.1 navbar 导航栏封装</h3>
<p>导航栏的封装一般比较简单</p>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>nav-bar<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>left<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>left<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slot</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>center<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>center<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slot</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>right<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>right<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slot</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-网络的请求的封装" tabindex="-1"><a class="header-anchor" href="#_2-2-网络的请求的封装" aria-hidden="true">#</a> 2.2 网络的请求的封装</h3>
<ol>
<li>
<p>在 src/network 文件夹中，基于 axios 框架封装 request.js</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> axios <span class="token keyword">from</span> <span class="token string">'axios'</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">request</span><span class="token punctuation">(</span><span class="token parameter">config</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 初始化：新建一个axios实例</span>
    <span class="token keyword">const</span> instance1 <span class="token operator">=</span> axios<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token comment">//baseURL: 'http://152.136.185.210:7878/api/m5',</span>
        <span class="token literal-property property">baseURL</span><span class="token operator">:</span> <span class="token string">'/api'</span>，<span class="token comment">//这种方式，配合vue.config.js可以解决跨域问题</span>
        <span class="token literal-property property">timeout</span><span class="token operator">:</span> <span class="token number">5000</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token comment">// 拦截：请求request，</span>
    instance1<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>request<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token parameter">config</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token comment">//拦截某些网络请求，比如登录token，必须携带一些特殊的信息，跳转到某个地方登录</span>
        <span class="token comment">// console.log(config);</span>
        <span class="token comment">//拦截后必须返回</span>
        <span class="token keyword">return</span> config<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token parameter">err</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token comment">// 拦截：响应response</span>
    instance1<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>response<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token comment">//拦截响应，可以对结果进行处理，比如，根据服务器的返回状态码做判断</span>
        <span class="token comment">// console.log(res.data);</span>
        <span class="token comment">//拦截后必须返回</span>
        <span class="token keyword">return</span> res<span class="token punctuation">.</span>data<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token parameter">err</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token comment">// 返回：发送真实请求</span>
    <span class="token keyword">return</span> <span class="token function">instance1</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>将<strong>不同页面</strong>的网络请求分类，分别封装对于的请求文件，例如 home.vue 面向 home.js 开发，可降低耦合度</p>
</li>
<li>
<p>例如首页的网络的网络请求，可以封装 home.js，引入 request.js，配置各页面的具体 url，</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> request <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"./request"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">getHomeMultidata</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">"/home/swiperdata"</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">getHomeGoods</span><span class="token punctuation">(</span><span class="token parameter">type<span class="token punctuation">,</span> page</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token comment">//url: 'api/getHomeMock',</span>
    <span class="token literal-property property">params</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      type<span class="token punctuation">,</span>
      page<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4.有的接口可能会出现跨域问题，需要在 vue.config.js 中追加如下配置</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token literal-property property">devServer</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">proxy</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">'/api'</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token string">'http://152.136.185.210:7878/api/m5'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">pathRewrite</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token string-property property">'^/api'</span><span class="token operator">:</span><span class="token string">''</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token comment">//重写api，将地址栏路径中的api用''替代</span>
        <span class="token literal-property property">ws</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//用于支持websocket</span>
        <span class="token literal-property property">changeOrigin</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token comment">//用于控制请求头中的host值</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token string-property property">'/demo'</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token string">'http://localhost:5001'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">pathRewrite</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token string-property property">'^/demo'</span><span class="token operator">:</span><span class="token string">''</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
<h3 id="_2-3-swiper-轮播图封装" tabindex="-1"><a class="header-anchor" href="#_2-3-swiper-轮播图封装" aria-hidden="true">#</a> 2.3 swiper 轮播图封装</h3>
<ol>
<li>
<p>先写对应的结构</p>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>swiper<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>swiper<span class="token punctuation">"</span></span> <span class="token attr-name">@touchstart</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>touchStart<span class="token punctuation">"</span></span> <span class="token attr-name">@touchmove</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>touchMove<span class="token punctuation">"</span></span> <span class="token attr-name">@touchend</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>touchEnd<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slot</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>indicator<span class="token punctuation">"</span></span><span class="token punctuation">></span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slot</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>indicator<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>indicator<span class="token punctuation">"</span></span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>showIndicator &amp;&amp; slideCount > 1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>
          <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>(item, index) in slideCount<span class="token punctuation">"</span></span>
          <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>indi-item<span class="token punctuation">"</span></span>
          <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{ active: index === currentIndex - 1 }<span class="token punctuation">"</span></span>
          <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>index<span class="token punctuation">"</span></span>
        <span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slot</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>太难了，还是用插件，UI 库。</p>
</li>
<li>
<p>引入轮播图组件</p>
</li>
<li>
<p>使用轮播图</p>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>swiper</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>swiper-item</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item in cBanners<span class="token punctuation">"</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item.id<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">:href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item.link<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">:src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item.image<span class="token punctuation">"</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>轮播图<span class="token punctuation">"</span></span> <span class="token attr-name">@load</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>imgLoad<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>swiper-item</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>swiper</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
<h3 id="_2-4-推荐信息封装" tabindex="-1"><a class="header-anchor" href="#_2-4-推荐信息封装" aria-hidden="true">#</a> 2.4 推荐信息封装</h3>
<p>封装 RecommendView.vue 和 FeatureView.vue 文件，重点：</p>
<p>1 在组件中使用<strong>自定义属性 props</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"RecommendView"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">recommends</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> Array<span class="token punctuation">,</span>
      <span class="token keyword">default</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2 在父组件中使用 v-bind 将数据传递给子组件</p>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>recommend-view</span> <span class="token attr-name">:recommends</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>recommends<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>recommend-view</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>3 使用网络请求，拿到数据</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>    <span class="token comment">//在methods中写网络请求的方法</span>
 <span class="token function">getHmMultidata</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">getHomeMultidata</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>banners <span class="token operator">=</span> res<span class="token punctuation">.</span>data<span class="token punctuation">.</span>banner<span class="token punctuation">.</span>list
        <span class="token keyword">this</span><span class="token punctuation">.</span>recommends <span class="token operator">=</span> res<span class="token punctuation">.</span>data<span class="token punctuation">.</span>recommend<span class="token punctuation">.</span>list
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
 <span class="token comment">//也可以使用async和await简化promise</span>
 <span class="token keyword">async</span> <span class="token function">getHmMultidata</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> <span class="token punctuation">{</span> <span class="token literal-property property">data</span><span class="token operator">:</span> res <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">getHomeMultidata</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>banners <span class="token operator">=</span> res<span class="token punctuation">.</span>banner<span class="token punctuation">.</span>list
      <span class="token keyword">this</span><span class="token punctuation">.</span>recommends <span class="token operator">=</span> res<span class="token punctuation">.</span>recommend<span class="token punctuation">.</span>list
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token comment">//在created()中，调用网络请求的方法</span>
 <span class="token function">created</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getHmMultidata</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
   <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-5-tab-标签页封装" tabindex="-1"><a class="header-anchor" href="#_2-5-tab-标签页封装" aria-hidden="true">#</a> 2.5 Tab 标签页封装</h3>
<p>1 写出对应的结构</p>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tab-control<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>
      <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>(item, index) in titles<span class="token punctuation">"</span></span>
      <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tab-control-item<span class="token punctuation">"</span></span>
      <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{ active: index === currentIndex }<span class="token punctuation">"</span></span>
      <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item<span class="token punctuation">"</span></span>
      <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>itemClick(index)<span class="token punctuation">"</span></span>
    <span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span>{{ item }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2 在组件中使用<strong>自定义属性 props</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code> <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">titles</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> Array<span class="token punctuation">,</span>
      <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3 在组件中使用<strong>自定义事件</strong>向父组件传递数据</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">itemClick</span> <span class="token punctuation">(</span><span class="token parameter">index</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>currentIndex <span class="token operator">!=</span> index<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>currentIndex <span class="token operator">=</span> index
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$emit</span><span class="token punctuation">(</span><span class="token string">"tabClick"</span><span class="token punctuation">,</span> index<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4 在<strong>父组件中使用 v-bind</strong>将数据传递给子组件</p>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tab-control</span> <span class="token attr-name">:titles</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>['流行', '新款', '精选']<span class="token punctuation">"</span></span> <span class="token attr-name">@tabClick</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tabClick<span class="token punctuation">"</span></span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tabControl2<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>5 对于 tab 标签切换，请求不同的网络请求数据，需要设计对应的数据结构</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>      <span class="token literal-property property">goods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">pop</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">page</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token literal-property property">list</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token keyword">new</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">page</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token literal-property property">list</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">sell</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">page</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token literal-property property">list</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">currentType</span><span class="token operator">:</span> <span class="token string">"pop"</span><span class="token punctuation">,</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>6 切换不同的标签，请求不同的数据</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token function">tabClick</span> <span class="token punctuation">(</span><span class="token parameter">index</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">switch</span> <span class="token punctuation">(</span>index<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">case</span> <span class="token number">0</span><span class="token operator">:</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span>currentType <span class="token operator">=</span> <span class="token string">"pop"</span>
          <span class="token keyword">break</span>
        <span class="token keyword">case</span> <span class="token number">1</span><span class="token operator">:</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span>currentType <span class="token operator">=</span> <span class="token string">"new"</span>
          <span class="token keyword">break</span>
        <span class="token keyword">case</span> <span class="token number">2</span><span class="token operator">:</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span>currentType <span class="token operator">=</span> <span class="token string">"sell"</span>
          <span class="token keyword">break</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>7 根据不同的 type，请求不同的数据</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token function">getHmGoods</span> <span class="token punctuation">(</span><span class="token parameter">type</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token comment">//定义变量，请求，不同的数据</span>
      <span class="token keyword">const</span> page <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>goods<span class="token punctuation">[</span>type<span class="token punctuation">]</span><span class="token punctuation">.</span>page <span class="token operator">+</span> <span class="token number">1</span>
      <span class="token function">getHomeGoods</span><span class="token punctuation">(</span>type<span class="token punctuation">,</span> page<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>goods<span class="token punctuation">[</span>type<span class="token punctuation">]</span><span class="token punctuation">.</span>list<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token operator">...</span>res<span class="token punctuation">.</span>data<span class="token punctuation">.</span>list<span class="token punctuation">)</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>goods<span class="token punctuation">[</span>type<span class="token punctuation">]</span><span class="token punctuation">.</span>page <span class="token operator">+=</span> <span class="token number">1</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

   <span class="token function">created</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getHmGoods</span><span class="token punctuation">(</span><span class="token string">"pop"</span><span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getHmGoods</span><span class="token punctuation">(</span><span class="token string">"new"</span><span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getHmGoods</span><span class="token punctuation">(</span><span class="token string">"sell"</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>8 上拉加载更多的数据</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token function">loadMore</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getHmGoods</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>currentType<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>9 根据请求到的数据，封装对应的组件 GoodsList</p>
<div class="language-hs line-numbers-mode" data-ext="hs"><pre v-pre class="language-hs"><code><span class="token operator">*</span> <span class="token hvariable">props</span><span class="token operator">:</span> <span class="token hvariable">goods</span> <span class="token operator">-></span> <span class="token hvariable">list</span><span class="token punctuation">[</span><span class="token number">30</span><span class="token punctuation">]</span>
<span class="token operator">*</span> <span class="token hvariable">v</span><span class="token operator">-</span><span class="token hvariable">for</span> <span class="token hvariable">goods</span> <span class="token operator">-></span> <span class="token constant">GoodsListItem</span><span class="token punctuation">[</span><span class="token number">30</span><span class="token punctuation">]</span>
<span class="token operator">*</span> <span class="token constant">GoodListItem</span><span class="token punctuation">(</span>组件<span class="token punctuation">)</span> <span class="token operator">-></span> <span class="token constant">GoodsItem</span><span class="token punctuation">(</span>数据<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>10 封装 GoodsListItem.vue 组件</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token operator">*</span> props<span class="token operator">:</span> goodsItem
<span class="token operator">*</span> goodsItem 取出数据<span class="token punctuation">,</span> 并且使用正确的div<span class="token operator">/</span>span<span class="token operator">/</span>img基本标签进行展示
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-6-better-scroll-滚动封装" tabindex="-1"><a class="header-anchor" href="#_2-6-better-scroll-滚动封装" aria-hidden="true">#</a> 2.6 better-scroll 滚动封装</h3>
<p>1 安装 better-scroll 插件</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> @better-scroll/core <span class="token parameter variable">--save</span>
<span class="token function">npm</span> <span class="token function">install</span> @better-scroll/pull-up <span class="token parameter variable">--save</span>
<span class="token function">npm</span> <span class="token function">install</span> @better-scroll/observe-image <span class="token parameter variable">--save</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2 当 content 的高度&gt;父容器 wrapper 的高度，才能滚动的，当有图片异步请求时，很容易出问题。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>  <span class="token literal-property property">observeDOM</span><span class="token operator">:</span> <span class="token boolean">true</span>

  <span class="token function">updated</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>scroll<span class="token punctuation">.</span><span class="token function">refresh</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">activated</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>scroll<span class="token punctuation">.</span><span class="token function">refresh</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3 better-scroll 首次加载无法滑动，在初始化 BScroll 时，配置属性</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token literal-property property">disableTouch</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2-7-backtop-回到顶部" tabindex="-1"><a class="header-anchor" href="#_2-7-backtop-回到顶部" aria-hidden="true">#</a> 2.7 BackTop 回到顶部</h3>
<p>1 BackTop 的封装</p>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>back-top<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>~assets/img/common/top.png<span class="token punctuation">"</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结构比较简单，主要是逻辑的书写。</p>
<p>在 Home.vue 中使用 BackTop 组件</p>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>back-top</span> <span class="token attr-name">@click.native</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>backClick<span class="token punctuation">"</span></span> <span class="token attr-name">v-show</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>isShowBackTop<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>back-top</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote>
<p>@click.native 可以监听组件根元素的点击</p>
</blockquote>
<p><strong>监听组件的点击：</strong></p>
<ul>
<li>组件的点击加上修饰符.native</li>
<li>回到顶部的点击事件功能实现</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>   <span class="token function">backClick</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 获取滚动的高度</span>
      <span class="token keyword">let</span> top <span class="token operator">=</span> document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>scrollTop <span class="token operator">||</span> document<span class="token punctuation">.</span>body<span class="token punctuation">.</span>scrollTop
      <span class="token comment">// 实现滚动效果</span>
      <span class="token keyword">const</span> timeTop <span class="token operator">=</span> <span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        document<span class="token punctuation">.</span>body<span class="token punctuation">.</span>scrollTop <span class="token operator">=</span> document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>scrollTop <span class="token operator">=</span> top <span class="token operator">-=</span> <span class="token number">100</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>top <span class="token operator">&lt;=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token function">clearInterval</span><span class="token punctuation">(</span>timeTop<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>BackTop 组件的<strong>显示和隐藏</strong></p>
<ul>
<li>监听滚动, 拿到滚动的位置</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">isShowBackTop</span><span class="token operator">:</span> <span class="token boolean">false</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token function">mounted</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'scroll'</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>scrollToTop<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token function">destroyed</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 window<span class="token punctuation">.</span><span class="token function">removeEventListener</span><span class="token punctuation">(</span><span class="token string">'scroll'</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>scrollToTop<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token literal-property property">methods</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token function">scrollToTop</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> top <span class="token operator">=</span> document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>scrollTop <span class="token operator">||</span> document<span class="token punctuation">.</span>body<span class="token punctuation">.</span>scrollTop
      <span class="token keyword">if</span> <span class="token punctuation">(</span>top <span class="token operator">>=</span> <span class="token number">700</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>isShowBackTop <span class="token operator">=</span> <span class="token boolean">true</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>isShowBackTop <span class="token operator">=</span> <span class="token boolean">false</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-8-上拉加载更多的问题" tabindex="-1"><a class="header-anchor" href="#_2-8-上拉加载更多的问题" aria-hidden="true">#</a> 2.8 上拉加载更多的问题</h3>
<p>1 设计数据结构</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>    <span class="token literal-property property">currentType</span><span class="token operator">:</span> <span class="token string">'pop'</span><span class="token punctuation">,</span>
 <span class="token literal-property property">goods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">pop</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">page</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token literal-property property">list</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token keyword">new</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">page</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token literal-property property">list</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">sell</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">page</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token literal-property property">list</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2 点击切换 tab 栏切换 currentType</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>    <span class="token function">tabClick</span> <span class="token punctuation">(</span><span class="token parameter">index<span class="token punctuation">,</span> title</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">switch</span> <span class="token punctuation">(</span>index<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">case</span> <span class="token number">0</span><span class="token operator">:</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span>currentType <span class="token operator">=</span> <span class="token string">'pop'</span>
          <span class="token keyword">break</span>
        <span class="token keyword">case</span> <span class="token number">1</span><span class="token operator">:</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span>currentType <span class="token operator">=</span> <span class="token string">'new'</span>
          <span class="token keyword">break</span>
        <span class="token keyword">case</span> <span class="token number">2</span><span class="token operator">:</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span>currentType <span class="token operator">=</span> <span class="token string">'sell'</span>
          <span class="token keyword">break</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3 更新数据</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>    <span class="token function">onLoad</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 异步更新数据</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getHmGoods</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>currentType<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4 商品数据的网络请求</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>    <span class="token function">getHmGoods</span> <span class="token punctuation">(</span><span class="token parameter">type</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> page <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>goods<span class="token punctuation">[</span>type<span class="token punctuation">]</span><span class="token punctuation">.</span>page <span class="token operator">+</span> <span class="token number">1</span>
      <span class="token function">getHomeGoods</span><span class="token punctuation">(</span>type<span class="token punctuation">,</span> page<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>goods<span class="token punctuation">[</span>type<span class="token punctuation">]</span><span class="token punctuation">.</span>list<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token operator">...</span>res<span class="token punctuation">.</span>data<span class="token punctuation">.</span>list<span class="token punctuation">)</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>goods<span class="token punctuation">[</span>type<span class="token punctuation">]</span><span class="token punctuation">.</span>page <span class="token operator">+=</span> <span class="token number">1</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-9-让-home-保持原来的状态" tabindex="-1"><a class="header-anchor" href="#_2-9-让-home-保持原来的状态" aria-hidden="true">#</a> 2.9 让 Home 保持原来的状态</h3>
<p>从 home 跳到了 category，再返回 home 后又重新加载 home</p>
<p>让 Home 不要随意销毁掉，使用 keep-alive</p>
<ul>
<li>路由组件会自动 destroyed，要用 keep-alive ,让组件不自动销毁</li>
<li>离开 home 组件时，保存一个位置信息 saveY，再进来时，将位置设置为原来保存的位置信息即可</li>
<li>利用生命周期函数 activated(){} 和函数 deactivated(){}</li>
<li>进入是触发 activated()，退出时触发 deactivated()</li>
<li>页面第一次进入，钩子的出发顺序是 created -&gt; mounted -&gt; activated，退出时触发 deactivated</li>
<li>当再次进入时，只触发 activated</li>
</ul>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>keep-alive</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-view</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-view</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>keep-alive</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-10-使用防抖-优化监听" tabindex="-1"><a class="header-anchor" href="#_2-10-使用防抖-优化监听" aria-hidden="true">#</a> 2.10 使用防抖，优化监听</h3>
<p>当屏幕滚动时，调用获取屏幕高度的函数调用非常频繁，使用防抖优化</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 防抖
 * 说明：定义一个 const 常量保存本函数的返回值（返回值也是一个函数），并多次调用该返回值函数即可
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">func</span> 需要执行的函数，必填
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">delay</span> 防抖的延时，默认 100 毫秒
 * <span class="token keyword">@returns</span> 供使用的防抖函数，可为需要执行的函数添加可变参数项，使用...定义
 */</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">debounce</span><span class="token punctuation">(</span><span class="token parameter">func<span class="token punctuation">,</span> delay <span class="token operator">=</span> <span class="token number">100</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 初始化一个计时器，用于判断上一次调用的计时器是否已经计时结束</span>
  <span class="token keyword">let</span> times <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

  <span class="token comment">// 返回函数形成闭包，使得 times 变量能够重复引用不被销毁</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 下次调用时如果存在上次的计时，则清空上次的计时并重置计时</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>times<span class="token punctuation">)</span> <span class="token function">clearTimeout</span><span class="token punctuation">(</span>times<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 设置延时执行函数，以期待下次调用在本次延时未结束时重新进入此处</span>
    times <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token comment">// 延时结束时最终执行传入的函数</span>
      <span class="token function">func</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> delay<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-详情页的开发" tabindex="-1"><a class="header-anchor" href="#_3-详情页的开发" aria-hidden="true">#</a> 3 详情页的开发</h2>
<h3 id="_3-1-根据商品-id-配置路由" tabindex="-1"><a class="header-anchor" href="#_3-1-根据商品-id-配置路由" aria-hidden="true">#</a> 3.1 根据商品 ID 配置路由</h3>
<p>配置详情页的路由采用动态路由的方式</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/detail/:iid'</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'Detail'</span><span class="token punctuation">,</span> <span class="token literal-property property">component</span><span class="token operator">:</span> Detail <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>根据点击商品的 id，获取对应的商品信息</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token function">created</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 保存传入的iid数据</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>iid <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$route<span class="token punctuation">.</span>params<span class="token punctuation">.</span>iid
    <span class="token comment">// 发送网络请求请求详情页数据</span>
    <span class="token function">getDetail</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>iid<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
      <span class="token keyword">const</span> data <span class="token operator">=</span> res<span class="token punctuation">.</span>result
      <span class="token comment">// 顶部图片轮播数据</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>topImages <span class="token operator">=</span> data<span class="token punctuation">.</span>itemInfo<span class="token punctuation">.</span>topImages
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>topImages<span class="token punctuation">)</span>
      <span class="token comment">// 取出并整合需要使用的数据</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>goods <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Goods</span><span class="token punctuation">(</span>
        data<span class="token punctuation">.</span>itemInfo<span class="token punctuation">,</span>
        data<span class="token punctuation">.</span>columns<span class="token punctuation">,</span>
        data<span class="token punctuation">.</span>shopInfo<span class="token punctuation">.</span>services
      <span class="token punctuation">)</span>
      <span class="token comment">// 取出并整合店家信息</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>shop <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Shop</span><span class="token punctuation">(</span>data<span class="token punctuation">.</span>shopInfo<span class="token punctuation">)</span>
      <span class="token comment">// 图片详情相关信息</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>detailInfo <span class="token operator">=</span> data<span class="token punctuation">.</span>detailInfo
      <span class="token comment">// detailParam相关信息整合</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>paramInfo <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">GoodsParam</span><span class="token punctuation">(</span>
        data<span class="token punctuation">.</span>itemParams<span class="token punctuation">.</span>info<span class="token punctuation">,</span>
        data<span class="token punctuation">.</span>itemParams<span class="token punctuation">.</span>rule
      <span class="token punctuation">)</span>
      <span class="token comment">// 取出评论信息</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>data<span class="token punctuation">.</span>rate<span class="token punctuation">.</span>cRate <span class="token operator">!==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>commentInfo <span class="token operator">=</span> data<span class="token punctuation">.</span>rate<span class="token punctuation">.</span>list<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>itemInfo <span class="token operator">=</span> data<span class="token punctuation">.</span>itemInfo
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token function">getRecommend</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>recommend <span class="token operator">=</span> res<span class="token punctuation">.</span>data<span class="token punctuation">.</span>list
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-详情页导航栏" tabindex="-1"><a class="header-anchor" href="#_3-2-详情页导航栏" aria-hidden="true">#</a> 3.2 详情页导航栏</h3>
<h3 id="_3-3-轮播图" tabindex="-1"><a class="header-anchor" href="#_3-3-轮播图" aria-hidden="true">#</a> 3.3 轮播图</h3>
<h3 id="_3-4-商品信息" tabindex="-1"><a class="header-anchor" href="#_3-4-商品信息" aria-hidden="true">#</a> 3.4 商品信息</h3>
<h3 id="_3-5-商家信息" tabindex="-1"><a class="header-anchor" href="#_3-5-商家信息" aria-hidden="true">#</a> 3.5 商家信息</h3>
<h3 id="_3-6-商品细节" tabindex="-1"><a class="header-anchor" href="#_3-6-商品细节" aria-hidden="true">#</a> 3.6 商品细节</h3>
<h3 id="_3-7-评论信息" tabindex="-1"><a class="header-anchor" href="#_3-7-评论信息" aria-hidden="true">#</a> 3.7 评论信息</h3>
<p>使用过滤器，将获取到的时间戳转换成对应的时间</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token literal-property property">filters</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function-variable function">showDate</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> date <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span>value <span class="token operator">*</span> <span class="token number">1000</span><span class="token punctuation">)</span>
      <span class="token keyword">return</span> <span class="token function">formatDate</span><span class="token punctuation">(</span>date<span class="token punctuation">,</span> <span class="token string">'yyyy-MM-dd'</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>格式化时间的工具函数</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">formatDate</span><span class="token punctuation">(</span><span class="token parameter">date<span class="token punctuation">,</span> fmt</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">(y+)</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>fmt<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fmt <span class="token operator">=</span> fmt<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span>RegExp<span class="token punctuation">.</span>$1<span class="token punctuation">,</span> <span class="token punctuation">(</span>date<span class="token punctuation">.</span><span class="token function">getFullYear</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">""</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">substr</span><span class="token punctuation">(</span><span class="token number">4</span> <span class="token operator">-</span> RegExp<span class="token punctuation">.</span>$1<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">const</span> o <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string-property property">"M+"</span><span class="token operator">:</span> date<span class="token punctuation">.</span><span class="token function">getMonth</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token string-property property">"d+"</span><span class="token operator">:</span> date<span class="token punctuation">.</span><span class="token function">getDate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token string-property property">"h+"</span><span class="token operator">:</span> date<span class="token punctuation">.</span><span class="token function">getHours</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token string-property property">"m+"</span><span class="token operator">:</span> date<span class="token punctuation">.</span><span class="token function">getMinutes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token string-property property">"s+"</span><span class="token operator">:</span> date<span class="token punctuation">.</span><span class="token function">getSeconds</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> k <span class="token keyword">in</span> o<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">RegExp</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">(</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>k<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">)</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>fmt<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> str <span class="token operator">=</span> o<span class="token punctuation">[</span>k<span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token string">""</span><span class="token punctuation">;</span>
      fmt <span class="token operator">=</span> fmt<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span>RegExp<span class="token punctuation">.</span>$1<span class="token punctuation">,</span> RegExp<span class="token punctuation">.</span>$1<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">1</span> <span class="token operator">?</span> str <span class="token operator">:</span> <span class="token function">padLeftZero</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> fmt<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">padLeftZero</span><span class="token punctuation">(</span><span class="token parameter">str</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token string">"00"</span> <span class="token operator">+</span> str<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">substr</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-8-参数信息" tabindex="-1"><a class="header-anchor" href="#_3-8-参数信息" aria-hidden="true">#</a> 3.8 参数信息</h3>
<h3 id="_3-9-推荐商品" tabindex="-1"><a class="header-anchor" href="#_3-9-推荐商品" aria-hidden="true">#</a> 3.9 推荐商品</h3>
<p>主要是网络请求的封装，取出并整合需要使用的数据</p>
<h3 id="_3-10-标题和内容的联动效果" tabindex="-1"><a class="header-anchor" href="#_3-10-标题和内容的联动效果" aria-hidden="true">#</a> 3.10 标题和内容的联动效果</h3>
<p>1 监听标题点击，滚动到对应的模块</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token function">onClick</span> <span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> title</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> title<span class="token punctuation">)</span>
      <span class="token comment">// const currentScroll = Math.ceil(document.documentElement.scrollTop)</span>
      <span class="token comment">// this.active = name</span>
      <span class="token comment">// console.log(document.querySelector('#推荐').offsetTop - 46)</span>
      <span class="token keyword">switch</span> <span class="token punctuation">(</span>title<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">case</span> <span class="token string">'商品'</span><span class="token operator">:</span>
          document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>scrollTop <span class="token operator">=</span> <span class="token number">0</span>
          <span class="token keyword">break</span>
        <span class="token keyword">case</span> <span class="token string">'评价'</span><span class="token operator">:</span>
          document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>scrollTop <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'#评价'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>offsetTop <span class="token operator">-</span> <span class="token number">46</span>
          <span class="token keyword">break</span>
        <span class="token keyword">case</span> <span class="token string">'参数'</span><span class="token operator">:</span>
          document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>scrollTop <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'#参数'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>offsetTop <span class="token operator">-</span> <span class="token number">46</span>
          <span class="token keyword">break</span>
        <span class="token keyword">case</span> <span class="token string">'推荐'</span><span class="token operator">:</span>
          document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>scrollTop <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'#推荐'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>offsetTop <span class="token operator">-</span> <span class="token number">46</span>
          <span class="token keyword">break</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2 滚动模块，改变为显示正确的标题</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>  <span class="token function">mounted</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'scroll'</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>scrollToTop<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">destroyed</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    window<span class="token punctuation">.</span><span class="token function">removeEventListener</span><span class="token punctuation">(</span><span class="token string">'scroll'</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>scrollToTop<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token function">scrollToTop</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> top <span class="token operator">=</span> document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>scrollTop <span class="token operator">||</span> document<span class="token punctuation">.</span>body<span class="token punctuation">.</span>scrollTop
      <span class="token comment">// console.log(2)</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>top <span class="token operator">>=</span> <span class="token number">700</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>isShowBackTop <span class="token operator">=</span> <span class="token boolean">true</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>isShowBackTop <span class="token operator">=</span> <span class="token boolean">false</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>top <span class="token operator">&lt;</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'#评价'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>offsetTop <span class="token operator">-</span> <span class="token number">46</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>active <span class="token operator">=</span> <span class="token number">0</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>top <span class="token operator">&lt;</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'#参数'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>offsetTop <span class="token operator">-</span> <span class="token number">46</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>active <span class="token operator">=</span> <span class="token number">1</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>top <span class="token operator">&lt;</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'#推荐'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>offsetTop <span class="token operator">-</span> <span class="token number">47</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>active <span class="token operator">=</span> <span class="token number">2</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>active <span class="token operator">=</span> <span class="token number">3</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-11-底部工具栏的封装" tabindex="-1"><a class="header-anchor" href="#_3-11-底部工具栏的封装" aria-hidden="true">#</a> 3.11 底部工具栏的封装</h3>
<p>重点，点击加入购物车</p>
<p>1 将购物车所需页面的的信息进行整理，network/cart.js</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">CartGoods</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">itemInfo</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>desc <span class="token operator">=</span> itemInfo<span class="token punctuation">.</span>desc<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>title <span class="token operator">=</span> itemInfo<span class="token punctuation">.</span>title<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>iid <span class="token operator">=</span> itemInfo<span class="token punctuation">.</span>iid<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>imgURL <span class="token operator">=</span> itemInfo<span class="token punctuation">.</span>topImages<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>newPrice <span class="token operator">=</span> itemInfo<span class="token punctuation">.</span>lowNowPrice<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>传入参数，得到商品信息</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token function">addToCart</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> product <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CartGoods</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>itemInfo<span class="token punctuation">)</span>
      <span class="token comment">// this.$store.dispatch("addCart", product);</span>
      <span class="token comment">// 由于通过mapActions将store中的方法映射了过来，因此可以直接调用改方法</span>
      <span class="token comment">//  这是普通方法使用toast，若想要看以插件形式封装的toast使用，看Cart中相关的</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">addCart</span><span class="token punctuation">(</span>product<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>toastMessage <span class="token operator">=</span> res
        <span class="token keyword">this</span><span class="token punctuation">.</span>$toast<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span>res<span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-12-toast-插件的封装" tabindex="-1"><a class="header-anchor" href="#_3-12-toast-插件的封装" aria-hidden="true">#</a> 3.12 toast 插件的封装</h3>
<ol>
<li>仔细看 components/common/toast 文件夹中的 index.js 和 Toast.vue</li>
<li>导入 index.js <code v-pre>import toast from 'components/common/toast/'</code></li>
<li>注册 toast 插件 Vue.use(toast)</li>
<li>此后，都可以通过 this.$toast.show(message, duration)来显示 message
注意，能使用<code v-pre>$toast</code>是因为在 Vue 的原型上添加了<code v-pre>$toast</code>，其内部添加了一个 show 方法</li>
</ol>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">//Toast.vue</span>
<span class="token function">show</span><span class="token punctuation">(</span><span class="token parameter">message<span class="token punctuation">,</span> duration</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>isShow <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>message <span class="token operator">=</span> message<span class="token punctuation">;</span>
  <span class="token function">clearTimeout</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>timer<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>timer <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>isShow <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>message <span class="token operator">=</span> <span class="token string">""</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> duration<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>

<span class="token punctuation">.</span>toast <span class="token punctuation">{</span>
  <span class="token literal-property property">position</span><span class="token operator">:</span> fixed<span class="token punctuation">;</span>
  z<span class="token operator">-</span>index<span class="token operator">:</span> <span class="token number">99999</span><span class="token punctuation">;</span>
  <span class="token literal-property property">top</span><span class="token operator">:</span> <span class="token number">50</span><span class="token operator">%</span><span class="token punctuation">;</span>
  <span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token number">50</span><span class="token operator">%</span><span class="token punctuation">;</span>
  <span class="token literal-property property">transform</span><span class="token operator">:</span> <span class="token function">translate</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">50</span><span class="token operator">%</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">50</span><span class="token operator">%</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  background<span class="token operator">-</span>color<span class="token operator">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0.65</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token literal-property property">padding</span><span class="token operator">:</span> 5px 10px<span class="token punctuation">;</span>
  border<span class="token operator">-</span>radius<span class="token operator">:</span> 5px<span class="token punctuation">;</span>
  text<span class="token operator">-</span>align<span class="token operator">:</span> center<span class="token punctuation">;</span>
  <span class="token literal-property property">color</span><span class="token operator">:</span> #fff<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>插件的封装</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 这是关于toast插件的封装，index.js</span>
<span class="token keyword">import</span> Toast <span class="token keyword">from</span> <span class="token string">"./Toast"</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> obj<span class="token punctuation">;</span>
<span class="token comment">// 在main.js安装插件时，会自动调用该插件的install函数，并自动传入Vue对象</span>
obj<span class="token punctuation">.</span><span class="token function-variable function">install</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">Vue</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 1.创建组件构造器</span>
  <span class="token keyword">const</span> toastConstructor <span class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">extend</span><span class="token punctuation">(</span>Toast<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// 2.根据组件构造器，可以创建出一个组件对象</span>
  <span class="token keyword">const</span> toast <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">toastConstructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// 3.将组件对象，手动挂载到某一元素上</span>
  toast<span class="token punctuation">.</span><span class="token function">$mount</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">"div"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// 4.toast.$el对应的就是div</span>
  document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>toast<span class="token punctuation">.</span>$el<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// 在Vue原型中定义$toast，方便直接采用$toast使用</span>
  <span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>$toast <span class="token operator">=</span> toast<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-购物车页面的开发" tabindex="-1"><a class="header-anchor" href="#_4-购物车页面的开发" aria-hidden="true">#</a> 4 购物车页面的开发</h2>
<p>开发流程：在详情页点击加入购物车，将商品的数据（id，图片，名称，数量，价格等）传递到 vuex，state 中购物车数据应该是数组，放很多 json 对象，</p>
<h3 id="_4-1-使用-vuex-管理购物车的商品" tabindex="-1"><a class="header-anchor" href="#_4-1-使用-vuex-管理购物车的商品" aria-hidden="true">#</a> 4.1 使用 Vuex 管理购物车的商品</h3>
<ol>
<li>
<p>安装、配置 Vuex</p>
</li>
<li>
<p>定义 state，存放购物车状态相关的信息</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">cartList</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>定义 actions,actions 中进行异步方法的处理，或者进行复杂的逻辑判断</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token function">addCart</span> <span class="token punctuation">(</span><span class="token parameter">context<span class="token punctuation">,</span> payload</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">let</span> flag <span class="token operator">=</span> <span class="token boolean">false</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> context<span class="token punctuation">.</span>state<span class="token punctuation">.</span>cartList<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>context<span class="token punctuation">.</span>state<span class="token punctuation">.</span>cartList<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>iid <span class="token operator">===</span> payload<span class="token punctuation">.</span>iid<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          flag <span class="token operator">=</span> <span class="token boolean">true</span>
          context<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">'addCounter'</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span>
          <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">'已存在商品，数量+1'</span><span class="token punctuation">)</span>
          <span class="token keyword">break</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>flag<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        context<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">'addGoods'</span><span class="token punctuation">,</span> payload<span class="token punctuation">)</span>
        <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">'添加至购物车成功！'</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>定义 mutations，将商品添加到 state，cartList，相当于我们 vue 里面的 methods，定义各种方法</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code> <span class="token comment">// 存在的商品，已有数量+1</span>
<span class="token function">addCounter</span> <span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> payload</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    state<span class="token punctuation">.</span>cartList<span class="token punctuation">[</span>payload<span class="token punctuation">]</span><span class="token punctuation">.</span>count<span class="token operator">++</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// 不存在的商品，商品+1</span>
  <span class="token function">addGoods</span> <span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> payload</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    payload<span class="token punctuation">.</span>count <span class="token operator">=</span> <span class="token number">1</span>
    payload<span class="token punctuation">.</span>checked <span class="token operator">=</span> <span class="token boolean">true</span>
    state<span class="token punctuation">.</span>cartList<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>payload<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>定义 getters，其实就是相当于 vue 里面的计算属性，将 state 中的数据进行计算处理</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token function">cartLength</span> <span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> state<span class="token punctuation">.</span>cartList<span class="token punctuation">.</span>length
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 购物车商品列表</span>
  <span class="token function">cartList</span> <span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> state<span class="token punctuation">.</span>cartList
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
<h3 id="_4-2-删除商品" tabindex="-1"><a class="header-anchor" href="#_4-2-删除商品" aria-hidden="true">#</a> 4.2 删除商品</h3>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>  <span class="token comment">//  actions.js</span>
  <span class="token function">deleteCart</span> <span class="token punctuation">(</span><span class="token parameter">context<span class="token punctuation">,</span> payload</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      context<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">'deleteCart'</span><span class="token punctuation">,</span> payload<span class="token punctuation">)</span>
      <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">'已移除该商品！'</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">//  mutations.js</span>
  <span class="token function">deleteCart</span> <span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> payload</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> <span class="token function-variable function">arrRemoveJson</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">arr<span class="token punctuation">,</span> attr<span class="token punctuation">,</span> value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>arr <span class="token operator">||</span> arr<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">''</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">const</span> newArr <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> item<span class="token punctuation">[</span>attr<span class="token punctuation">]</span> <span class="token operator">!==</span> value
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token keyword">return</span> newArr
    <span class="token punctuation">}</span>
    state<span class="token punctuation">.</span>cartList <span class="token operator">=</span> <span class="token function">arrRemoveJson</span><span class="token punctuation">(</span>state<span class="token punctuation">.</span>cartList<span class="token punctuation">,</span> <span class="token string">'iid'</span><span class="token punctuation">,</span> payload<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-3-全选按钮" tabindex="-1"><a class="header-anchor" href="#_4-3-全选按钮" aria-hidden="true">#</a> 4.3 全选按钮</h3>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>  <span class="token comment">//  actions.js</span>
<span class="token function">allCheckClick</span> <span class="token punctuation">(</span><span class="token parameter">context</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    context<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">'changeAllChecked'</span><span class="token punctuation">)</span>
 <span class="token punctuation">}</span>
  <span class="token comment">//  mutations.js</span>
    <span class="token function">changeAllChecked</span> <span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>state<span class="token punctuation">.</span>cartList<span class="token punctuation">.</span>length <span class="token operator">!==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>state<span class="token punctuation">.</span>cartList<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token parameter">item</span> <span class="token operator">=></span> <span class="token operator">!</span>item<span class="token punctuation">.</span>checked<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> item <span class="token keyword">of</span> state<span class="token punctuation">.</span>cartList<span class="token punctuation">)</span> <span class="token punctuation">{</span> item<span class="token punctuation">.</span>checked <span class="token operator">=</span> <span class="token boolean">true</span> <span class="token punctuation">}</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> item <span class="token keyword">of</span> state<span class="token punctuation">.</span>cartList<span class="token punctuation">)</span> <span class="token punctuation">{</span> item<span class="token punctuation">.</span>checked <span class="token operator">=</span> <span class="token boolean">false</span> <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-4-计算总价格" tabindex="-1"><a class="header-anchor" href="#_4-4-计算总价格" aria-hidden="true">#</a> 4.4 计算总价格</h3>
<ul>
<li>计算选中的数量</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// getters.js</span>
  <span class="token function">cartChecked</span> <span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> state<span class="token punctuation">.</span>cartList<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token parameter">item</span> <span class="token operator">=></span> item<span class="token punctuation">.</span>checked<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>计算选中的价格</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// getters.js</span>
  <span class="token comment">// 已选的购物车商品总额</span>
  <span class="token function">cartTotal</span> <span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// console.log(cartChecked)</span>
    <span class="token keyword">return</span> state<span class="token punctuation">.</span>cartList<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> item<span class="token punctuation">.</span>checked
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">preValue<span class="token punctuation">,</span> item</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> preValue <span class="token operator">+</span> item<span class="token punctuation">.</span>newPrice <span class="token operator">*</span> item<span class="token punctuation">.</span>count
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以引入 vuex 的 mapGetters 做解构引入</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> mapGetters <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vuex"</span>

<span class="token literal-property property">computed</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">//   1.普通写法</span>
    <span class="token comment">// cartLength () {</span>
    <span class="token comment">// //   return this.$store.state.cartList.length  将方法封装到getters之前的写法</span>
    <span class="token comment">//   return this.$store.getters.cartLength   封装到getters之后的写法</span>
    <span class="token comment">// }</span>
    <span class="token comment">// 2.利用mapGetters解构 ， 还可用 mapState , mapActions</span>
    <span class="token operator">...</span><span class="token function">mapGetters</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'cartLength'</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-分类页面的开发" tabindex="-1"><a class="header-anchor" href="#_5-分类页面的开发" aria-hidden="true">#</a> 5 分类页面的开发</h2>
<h3 id="_5-1-导航栏的开发" tabindex="-1"><a class="header-anchor" href="#_5-1-导航栏的开发" aria-hidden="true">#</a> 5.1 导航栏的开发</h3>
<h3 id="_5-2-侧边栏的开发" tabindex="-1"><a class="header-anchor" href="#_5-2-侧边栏的开发" aria-hidden="true">#</a> 5.2 侧边栏的开发</h3>
<h3 id="_5-3-商品分类的开发" tabindex="-1"><a class="header-anchor" href="#_5-3-商品分类的开发" aria-hidden="true">#</a> 5.3 商品分类的开发</h3>
<h2 id="_6-项目的优化打包和发布" tabindex="-1"><a class="header-anchor" href="#_6-项目的优化打包和发布" aria-hidden="true">#</a> 6 项目的优化打包和发布</h2>
<h3 id="_6-1-解决移动端点击问题" tabindex="-1"><a class="header-anchor" href="#_6-1-解决移动端点击问题" aria-hidden="true">#</a> 6.1 解决移动端点击问题</h3>
<p>解决移动端点击 300ms 延迟问题，引入 FastClick，插件使用的步骤：下载-引入-配置</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> FastClick <span class="token keyword">from</span> <span class="token string">"fastclick"</span><span class="token punctuation">;</span>
<span class="token comment">// 解决移动端300ms延迟</span>
FastClick<span class="token punctuation">.</span><span class="token function">attach</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span>body<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-2-图片懒加载" tabindex="-1"><a class="header-anchor" href="#_6-2-图片懒加载" aria-hidden="true">#</a> 6.2 图片懒加载</h3>
<p>图片需要显示在屏幕时在加载，使用 vue-lazyload，使用图片的懒加载，并传入 options，这些选项中可以定义图片加载失败要显示的情况，或加载中显示的情况</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> VueLazyLoad <span class="token keyword">from</span> <span class="token string">'vue-lazyload'</span>
Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>VueLazyLoad<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">loading</span><span class="token operator">:</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'./assets/img/common/placeholder.png'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">error</span><span class="token operator">:</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'assets/img/common/placeholder.png'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">//Home.vue</span>
 <span class="token operator">&lt;</span>img v<span class="token operator">-</span>lazy<span class="token operator">=</span><span class="token string">"showImage"</span> alt<span class="token operator">=</span><span class="token string">""</span> @load<span class="token operator">=</span><span class="token string">"imageLoad"</span><span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-3-配置路由懒加载" tabindex="-1"><a class="header-anchor" href="#_6-3-配置路由懒加载" aria-hidden="true">#</a> 6.3 配置路由懒加载</h3>
<ol>
<li>
<p>安装 babel 插件</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>  <span class="token function">npm</span> <span class="token function">install</span> --save-dev @babel/plugin-syntax-dynamic-import
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>修改项目根目录下的 babel.config.js 配置文件，新增 plugins 节点：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">presets</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"@vue/cli-plugin-babel/preset"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">// 实现路由组件按需导入的 babel 插件</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"@babel/plugin-syntax-dynamic-import"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>在 /src/router/index.js 模块中，基于 const Foo = () =&gt; import('./Foo.vue') 语法，改造每个路由组件的导入方式。例如：</p>
</li>
</ol>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 导入 Login 组件</span>
<span class="token comment">// import Login from '@/views/Login/Login.vue'</span>
<span class="token keyword">const</span> <span class="token function-variable function">Login</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">"@/views/Login/Login.vue"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 导入 Main 组件</span>
<span class="token comment">// import Main from '@/views/Main/Main.vue'</span>
<span class="token keyword">const</span> <span class="token function-variable function">Main</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">"@/views/Main/Main.vue"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-3-px2vm" tabindex="-1"><a class="header-anchor" href="#_6-3-px2vm" aria-hidden="true">#</a> 6.3 px2vm</h3>
<p>webpack 配置，移动端适配，使用 postcss-px-to-viewport 插件，将 css 中 px 编译为 vm。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>    <span class="token function">npm</span> i postcss-px-to-viewport --save-dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>安装 postcss-px-to-viewport 插件，该只是开发时依赖，只在打包过程中帮助转化</p>
<p>修改 postcss.config.js 文件</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">autoprefixer</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">//  这条不写的话好像不会生效</span>
    <span class="token string-property property">"postcss-px-to-viewport"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">// options</span>
      <span class="token literal-property property">unitToConvert</span><span class="token operator">:</span> <span class="token string">"px"</span><span class="token punctuation">,</span> <span class="token comment">//  (String) 需要转换的单位，默认为"px"</span>
      <span class="token literal-property property">viewportWidth</span><span class="token operator">:</span> <span class="token number">320</span><span class="token punctuation">,</span> <span class="token comment">//  (Number) 设计稿的视口宽度</span>
      <span class="token literal-property property">unitPrecision</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token comment">//  (Number) 单位转换后保留的精度</span>
      <span class="token literal-property property">propList</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"*"</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">//  (Array) 能转化为vw的属性列表</span>
      <span class="token literal-property property">viewportUnit</span><span class="token operator">:</span> <span class="token string">"vw"</span><span class="token punctuation">,</span> <span class="token comment">//  (String) 希望使用的视口单位</span>
      <span class="token literal-property property">fontViewportUnit</span><span class="token operator">:</span> <span class="token string">"vw"</span><span class="token punctuation">,</span> <span class="token comment">//  (String) 字体使用的视口单位</span>
      <span class="token literal-property property">selectorBlackList</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">//  (Array) 需要忽略的CSS选择器，不会转为视口单位，使用原有的px等单位。</span>
      <span class="token literal-property property">minPixelValue</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token comment">//  (Number) 设置最小的转换数值，如果为1的话，只有大于1的值会被转换</span>
      <span class="token literal-property property">mediaQuery</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">//  (Boolean) 媒体查询里的单位是否需要转换单位</span>
      <span class="token literal-property property">replace</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//  (Boolean) 是否直接更换属性值，而不添加备用属性</span>
      <span class="token literal-property property">exclude</span><span class="token operator">:</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span> <span class="token comment">//  (Array or Regexp) 忽略某些文件夹下的文件或特定文件，例如 'node_modules' 下的文件</span>
      <span class="token literal-property property">include</span><span class="token operator">:</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span> <span class="token comment">//  (Array or Regexp) 如果设置了include，那将只有匹配到的文件才会被转换，例如只转换 'src/mobile' 下的文件 (include: /\/src\/mobile\//)</span>
      <span class="token literal-property property">landscape</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">//  (Boolean) 是否添加根据 landscapeWidth 生成的媒体查询条件 @media (orientation: landscape)</span>
      <span class="token literal-property property">landscapeUnit</span><span class="token operator">:</span> <span class="token string">"vw"</span><span class="token punctuation">,</span> <span class="token comment">//  (String) 横屏时使用的单位</span>
      <span class="token literal-property property">landscapeWidth</span><span class="token operator">:</span> <span class="token number">568</span><span class="token punctuation">,</span> <span class="token comment">//  (Number) 横屏时使用的视口宽度</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-4-移除-console-的信息" tabindex="-1"><a class="header-anchor" href="#_6-4-移除-console-的信息" aria-hidden="true">#</a> 6.4 移除 console 的信息</h3>
<p>在项目打包后，借助 babel-plugin-transform-remove-console 进行去除 console.log 打印信息</p>
<ol>
<li>
<p>安装@babel/plugin-syntax-dynamic-import 包</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>    <span class="token function">npm</span> <span class="token function">install</span> --save-dev @babel/plugin-syntax-dynamic-import
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>修改项目根目录下的 babel.config.js 配置文件，新增 plugins 节点：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">presets</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"@vue/cli-plugin-babel/preset"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">// 实现路由组件按需导入的 babel 插件</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"@babel/plugin-syntax-dynamic-import"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>在 /src/router/index.js 模块中，基于 const Foo = () =&gt; import('./Foo.vue') 语法，改造每个路由组件的导入方式</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 导入 Login 组件</span>
<span class="token comment">// import Login from '@/views/Login/Login.vue'</span>
<span class="token keyword">const</span> <span class="token function-variable function">Login</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">"@/views/Login/Login.vue"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 导入 Main 组件</span>
<span class="token comment">// import Main from '@/views/Main/Main.vue'</span>
<span class="token keyword">const</span> <span class="token function-variable function">Main</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">"@/views/Main/Main.vue"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
</div></template>


