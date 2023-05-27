import{_ as t,r as l,o as i,c as o,b as n,e as s,d as e,f as c}from"./app-27e95156.js";const p={},d=n("h1",{id:"条件注释实现跨段兼容",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#条件注释实现跨段兼容","aria-hidden":"true"},"#"),s(" 条件注释实现跨段兼容")],-1),u=n("p",null,"条件编译是用特殊的注释作为标记，在编译时根据这些特殊的注释，将注释里面的代码编译到不同平台。",-1),r=n("p",null,"**写法：**以 #ifdef 加平台标识 开头，以 #endif 结尾。",-1),v=n("p",null,"平台标识",-1),m=n("thead",null,[n("tr",null,[n("th",null,"值"),n("th",null,"平台"),n("th",null,"参考文档")])],-1),k=n("td",null,"APP-PLUS",-1),h=n("td",null,"5+App",-1),_={href:"http://www.html5plus.org/doc/",target:"_blank",rel:"noopener noreferrer"},b=n("tr",null,[n("td",null,"H5"),n("td",null,"H5"),n("td")],-1),g=n("td",null,"MP-WEIXIN",-1),f=n("td",null,"微信小程序",-1),x={href:"https://developers.weixin.qq.com/miniprogram/dev/api/",target:"_blank",rel:"noopener noreferrer"},P=n("td",null,"MP-ALIPAY",-1),w=n("td",null,"支付宝小程序",-1),I={href:"https://docs.alipay.com/mini/developer/getting-started",target:"_blank",rel:"noopener noreferrer"},M=n("td",null,"MP-BAIDU",-1),y=n("td",null,"百度小程序",-1),N={href:"https://smartprogram.baidu.com/docs/develop/tutorial/codedir/",target:"_blank",rel:"noopener noreferrer"},A=n("td",null,"MP-TOUTIAO",-1),E=n("td",null,"头条小程序",-1),L={href:"https://developer.toutiao.com/dev/cn/mini-app/develop/framework/basic-reference/introduction",target:"_blank",rel:"noopener noreferrer"},H=n("tr",null,[n("td",null,"MP-QQ"),n("td",null,"QQ小程序"),n("td",null,"（目前仅cli版支持）")],-1),Q=n("tr",null,[n("td",null,"MP"),n("td",null,"微信小程序/支付宝小程序/百度小程序/头条小程序/QQ小程序"),n("td")],-1),B=c(`<h2 id="组件的条件注释" tabindex="-1"><a class="header-anchor" href="#组件的条件注释" aria-hidden="true">#</a> 组件的条件注释</h2><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!-- #ifdef H5 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">&gt;</span></span>
  h5页面会显示
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!-- #endif --&gt;</span>
<span class="token comment">&lt;!-- #ifdef MP-WEIXIN --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">&gt;</span></span>
  微信小程序会显示
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!-- #endif --&gt;</span>
<span class="token comment">&lt;!-- #ifdef APP-PLUS --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">&gt;</span></span>
  app会显示
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!-- #endif --&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="api-的条件注释" tabindex="-1"><a class="header-anchor" href="#api-的条件注释" aria-hidden="true">#</a> api 的条件注释</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">onLoad</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">//#ifdef MP-WEIXIN</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;微信小程序&#39;</span><span class="token punctuation">)</span>
  <span class="token comment">//#endif</span>
  <span class="token comment">//#ifdef H5</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;h5页面&#39;</span><span class="token punctuation">)</span>
  <span class="token comment">//#endif</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="样式的条件注释" tabindex="-1"><a class="header-anchor" href="#样式的条件注释" aria-hidden="true">#</a> 样式的条件注释</h2><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* #ifdef H5 */</span>
<span class="token selector">view</span><span class="token punctuation">{</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">line-height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/* #endif */</span>
<span class="token comment">/* #ifdef MP-WEIXIN */</span>
<span class="token selector">view</span><span class="token punctuation">{</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">line-height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/* #endif */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6);function T(U,V){const a=l("ExternalLinkIcon");return i(),o("div",null,[d,u,r,v,n("table",null,[m,n("tbody",null,[n("tr",null,[k,h,n("td",null,[n("a",_,[s("HTML5+ 规范"),e(a)])])]),b,n("tr",null,[g,f,n("td",null,[n("a",x,[s("微信小程序"),e(a)])])]),n("tr",null,[P,w,n("td",null,[n("a",I,[s("支付宝小程序"),e(a)])])]),n("tr",null,[M,y,n("td",null,[n("a",N,[s("百度小程序"),e(a)])])]),n("tr",null,[A,E,n("td",null,[n("a",L,[s("头条小程序"),e(a)])])]),H,Q])]),B])}const X=t(p,[["render",T],["__file","11uni.html.vue"]]);export{X as default};
