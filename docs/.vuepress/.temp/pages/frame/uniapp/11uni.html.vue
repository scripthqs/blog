<template><div><h1 id="条件注释实现跨段兼容" tabindex="-1"><a class="header-anchor" href="#条件注释实现跨段兼容" aria-hidden="true">#</a> 条件注释实现跨段兼容</h1>
<p>条件编译是用特殊的注释作为标记，在编译时根据这些特殊的注释，将注释里面的代码编译到不同平台。</p>
<p>**写法：**以 #ifdef 加平台标识 开头，以 #endif 结尾。</p>
<p>平台标识</p>
<table>
<thead>
<tr>
<th>值</th>
<th>平台</th>
<th>参考文档</th>
</tr>
</thead>
<tbody>
<tr>
<td>APP-PLUS</td>
<td>5+App</td>
<td><a href="http://www.html5plus.org/doc/" target="_blank" rel="noopener noreferrer">HTML5+ 规范<ExternalLinkIcon/></a></td>
</tr>
<tr>
<td>H5</td>
<td>H5</td>
<td></td>
</tr>
<tr>
<td>MP-WEIXIN</td>
<td>微信小程序</td>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/" target="_blank" rel="noopener noreferrer">微信小程序<ExternalLinkIcon/></a></td>
</tr>
<tr>
<td>MP-ALIPAY</td>
<td>支付宝小程序</td>
<td><a href="https://docs.alipay.com/mini/developer/getting-started" target="_blank" rel="noopener noreferrer">支付宝小程序<ExternalLinkIcon/></a></td>
</tr>
<tr>
<td>MP-BAIDU</td>
<td>百度小程序</td>
<td><a href="https://smartprogram.baidu.com/docs/develop/tutorial/codedir/" target="_blank" rel="noopener noreferrer">百度小程序<ExternalLinkIcon/></a></td>
</tr>
<tr>
<td>MP-TOUTIAO</td>
<td>头条小程序</td>
<td><a href="https://developer.toutiao.com/dev/cn/mini-app/develop/framework/basic-reference/introduction" target="_blank" rel="noopener noreferrer">头条小程序<ExternalLinkIcon/></a></td>
</tr>
<tr>
<td>MP-QQ</td>
<td>QQ小程序</td>
<td>（目前仅cli版支持）</td>
</tr>
<tr>
<td>MP</td>
<td>微信小程序/支付宝小程序/百度小程序/头条小程序/QQ小程序</td>
<td></td>
</tr>
</tbody>
</table>
<h2 id="组件的条件注释" tabindex="-1"><a class="header-anchor" href="#组件的条件注释" aria-hidden="true">#</a> 组件的条件注释</h2>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token comment">&lt;!-- #ifdef H5 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">></span></span>
  h5页面会显示
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span>
<span class="token comment">&lt;!-- #endif --></span>
<span class="token comment">&lt;!-- #ifdef MP-WEIXIN --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">></span></span>
  微信小程序会显示
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span>
<span class="token comment">&lt;!-- #endif --></span>
<span class="token comment">&lt;!-- #ifdef APP-PLUS --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">></span></span>
  app会显示
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span>
<span class="token comment">&lt;!-- #endif --></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="api-的条件注释" tabindex="-1"><a class="header-anchor" href="#api-的条件注释" aria-hidden="true">#</a> api 的条件注释</h2>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token function">onLoad</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">//#ifdef MP-WEIXIN</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'微信小程序'</span><span class="token punctuation">)</span>
  <span class="token comment">//#endif</span>
  <span class="token comment">//#ifdef H5</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'h5页面'</span><span class="token punctuation">)</span>
  <span class="token comment">//#endif</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="样式的条件注释" tabindex="-1"><a class="header-anchor" href="#样式的条件注释" aria-hidden="true">#</a> 样式的条件注释</h2>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token comment">/* #ifdef H5 */</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


