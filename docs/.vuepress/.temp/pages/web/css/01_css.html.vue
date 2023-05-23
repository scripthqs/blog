<template><div><h1 id="css-简介" tabindex="-1"><a class="header-anchor" href="#css-简介" aria-hidden="true">#</a> CSS 简介</h1>
<h2 id="css-是什么" tabindex="-1"><a class="header-anchor" href="#css-是什么" aria-hidden="true">#</a> CSS 是什么</h2>
<p>CSS (Cascading Style Sheets) 层叠样式表，网页实际上是一个多层结构，通过 CSS 可以将网页的每一层来设置样式，最终我们只能看到网页的最上面一层。</p>
<ul>
<li>CSS 的属性语法：<code v-pre>属性：属性值;</code> 多个属性之间用<code v-pre>;</code>隔开，多个属性值用``或者<code v-pre>,</code>隔开，根据具体情况。</li>
<li>HTML 的属性语法：<code v-pre>属性=&quot;属性值&quot;</code> 多个属性之间用<strong>空格</strong>隔开</li>
</ul>
<h2 id="css-修改样式的方法" tabindex="-1"><a class="header-anchor" href="#css-修改样式的方法" aria-hidden="true">#</a> CSS 修改样式的方法</h2>
<ol>
<li>内联样式（行内样式）：在标签内部通过<code v-pre>style</code>属性来设置元素的样式。样式只对一个标签生效，维护不方便。</li>
<li>内部样式表：将样式写到<code v-pre>head</code>中的<code v-pre>style</code>标签中，通过 CSS 选择器选中元素并为其设置样式，但是只能对当前页面起作用。</li>
<li>外部样式表：创建一个<code v-pre>.css</code>文件，再通过<code v-pre>&lt;link ref=&quot;stylesheet&quot; href=&quot;.css&quot;&gt;</code>引入样式。将样式编写到外部的 css 中可以使用浏览器的缓存机制，从而加快网页的加载速度。开发中都用这种方法。</li>
<li>@import 导入的方式，@import 导入的 css 开始不会被加载 只有在引用到他的时候浏览器才会下载去加载</li>
</ol>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token comment">/*行内样式*/</span>
&lt;p style=<span class="token string">"color:red;"</span>>段落&lt;/p>
<span class="token comment">/*内部样式表*/</span>
<span class="token selector">&lt;head>
  &lt;style>
    p</span> <span class="token punctuation">{</span>
      <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  &lt;/style>
&lt;/head>
<span class="token comment">/*外部样式表*/</span>
&lt;head>
  &lt;link rel=<span class="token string">"stylesheet"</span> type=<span class="token string">"text/css"</span> href=<span class="token string">"style.css"</span>>
&lt;/head>
<span class="token comment">/*@import 引入*/</span>
&lt;style>
 <span class="token atrule"><span class="token rule">@import</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">"css/styles.css"</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span></span>
&lt;/style>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>优先级：行内样式 &gt; 内嵌样式 &gt; 外部样式 &gt; 导入样式</p>
<h2 id="css-基本语法" tabindex="-1"><a class="header-anchor" href="#css-基本语法" aria-hidden="true">#</a> CSS 基本语法</h2>
<p>CSS 有<strong>选择器</strong>和<strong>声明块</strong>。选择器可以选中页面中的指定元素，声明块中通过一个个声明组成，声明也是一个名值对。</p>
<h2 id="css-注释" tabindex="-1"><a class="header-anchor" href="#css-注释" aria-hidden="true">#</a> CSS 注释</h2>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token comment">/*我是css注释*/</span>
<span class="token comment">/*
分为
几行
的
注释
*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


