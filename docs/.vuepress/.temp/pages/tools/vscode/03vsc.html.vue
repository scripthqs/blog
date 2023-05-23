<template><div><h1 id="vscode-生成代码片段" tabindex="-1"><a class="header-anchor" href="#vscode-生成代码片段" aria-hidden="true">#</a> VSCode 生成代码片段</h1>
<p>使用 vscode 时，有些代码片段是需要经常写的，VSCode 中可以生成一个代码片段，方便我们快速生成。</p>
<ul>
<li>VSCode 中的代码片段有固定的格式，所以我们一般会借助于一个在线工具来完成。</li>
</ul>
<p>具体的步骤如下：</p>
<ul>
<li>点击设置-用户代码片段-选择需要的文件（比如 vue 片段就选 vue.json）</li>
<li>一般是一个空的 json 对象</li>
<li>复制自己需要生成代码片段的代码；</li>
<li><a href="https://snippet-generator.app/" target="_blank" rel="noopener noreferrer">https://snippet-generator.app/<ExternalLinkIcon/></a>在该网站中生成代码片段；</li>
<li>在 VSCode 中的.json 文件（vue 代码片段就在 vue.json）配置代码片段</li>
<li>多个代码片段使用<code v-pre>,</code>隔开</li>
<li>在文件中输入配置的 &quot;prefix&quot;后面的关键字，按 tab 即可生成</li>
</ul>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"vue3 typescript"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"prefix"</span><span class="token operator">:</span> <span class="token string">"tsvue"</span><span class="token punctuation">,</span>
    <span class="token property">"body"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">"&lt;template>"</span><span class="token punctuation">,</span>
      <span class="token string">"  &lt;div class=\"${1:home}\">"</span><span class="token punctuation">,</span>
      <span class="token string">"    &lt;h2>${1:home}&lt;/h2>"</span><span class="token punctuation">,</span>
      <span class="token string">"  &lt;/div>"</span><span class="token punctuation">,</span>
      <span class="token string">"&lt;/template>"</span><span class="token punctuation">,</span>
      <span class="token string">""</span><span class="token punctuation">,</span>
      <span class="token string">"&lt;script setup lang=\"ts\">"</span><span class="token punctuation">,</span>
      <span class="token string">"&lt;/script>"</span><span class="token punctuation">,</span>
      <span class="token string">""</span><span class="token punctuation">,</span>
      <span class="token string">"&lt;style lang=\"less\" scoped>"</span><span class="token punctuation">,</span>
      <span class="token string">".${1:home}{"</span><span class="token punctuation">,</span>
      <span class="token string">"  color: red;"</span><span class="token punctuation">,</span>
      <span class="token string">"}"</span><span class="token punctuation">,</span>
      <span class="token string">"&lt;/style>"</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">"description"</span><span class="token operator">:</span> <span class="token string">"vue3 typescript"</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输入 tem 再按 tab 即可生成自定义代码片段。</p>
<h2 id="lorem" tabindex="-1"><a class="header-anchor" href="#lorem" aria-hidden="true">#</a> Lorem</h2>
<p>乱数假文</p>
</div></template>


