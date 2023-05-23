import{_ as i,r as o,o as s,c,d as e,e as n,b as u,f as d}from"./app-68a897fb.js";const t={},r=e("h1",{id:"uni-ui-组件",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#uni-ui-组件","aria-hidden":"true"},"#"),n(" uni-ui 组件")],-1),l=e("strong",null,"它是基础组件的补充",-1),p={href:"https://uniapp.dcloud.io/component/README?id=uniui",target:"_blank",rel:"noopener noreferrer"},h=d(`<ul><li>uni-ui 支持 HBuilderX 直接新建项目模板、npm 安装和单独导入个别组件等多种使用方式</li></ul><h2 id="_1-uni-ui" tabindex="-1"><a class="header-anchor" href="#_1-uni-ui" aria-hidden="true">#</a> 1 uni-ui</h2><p>在HBuilderX 新建uni-app项目的模板中，选择uni-ui模板</p><ul><li>在代码区键入<code>u</code>，拉出各种内置或 uni-ui 的组件列表，选择其中一个，即可使用该组件。</li></ul><h2 id="_2-uni-modules" tabindex="-1"><a class="header-anchor" href="#_2-uni-modules" aria-hidden="true">#</a> 2 uni_modules</h2><p>通过 uni_modules 单独安装需要的某个组件，点击每个组件在详情页面可以导入组件到项目下，导入后直接使用即可，无需import和注册。</p><h2 id="_3-npm-安装" tabindex="-1"><a class="header-anchor" href="#_3-npm-安装" aria-hidden="true">#</a> 3 npm 安装</h2><p>在 <code>vue-cli</code> 项目中可以使用 <code>npm</code> 安装 <code>uni-ui</code> 库 ，或者直接在 <code>HBuilderX</code> 项目中使用 <code>npm</code> 。</p><blockquote><p><strong>注意</strong> cli 项目默认是不编译 <code>node_modules</code> 下的组件的，导致条件编译等功能失效 ，导致组件异常 需要在根目录创建 <code>vue.config.js</code> 文件 ，增加 <code>@dcloudio/uni-ui</code> 包的编译即可正常</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// vue.config.js</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">transpileDependencies</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token string">&#39;@dcloudio/uni-ui&#39;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote>`,9);function _(m,v){const a=o("ExternalLinkIcon");return s(),c("div",null,[r,e("p",null,[n("uni-ui不包括基础组件，"),l,n("。"),e("a",p,[n("uni-ui文档"),u(a)])]),h])}const f=i(t,[["render",_],["__file","15uni.html.vue"]]);export{f as default};
