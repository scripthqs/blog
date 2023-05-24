import{_ as a,r as e,o,c as l,b as n,e as s,d as p,f as i}from"./app-440c3c5c.js";const c={},u=n("h1",{id:"vscode-生成代码片段",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#vscode-生成代码片段","aria-hidden":"true"},"#"),s(" VSCode 生成代码片段")],-1),r=n("p",null,"使用 vscode 时，有些代码片段是需要经常写的，VSCode 中可以生成一个代码片段，方便我们快速生成。",-1),d=n("ul",null,[n("li",null,"VSCode 中的代码片段有固定的格式，所以我们一般会借助于一个在线工具来完成。")],-1),v=n("p",null,"具体的步骤如下：",-1),k=n("li",null,"点击设置-用户代码片段-选择需要的文件（比如 vue 片段就选 vue.json）",-1),q=n("li",null,"一般是一个空的 json 对象",-1),m=n("li",null,"复制自己需要生成代码片段的代码；",-1),_={href:"https://snippet-generator.app/",target:"_blank",rel:"noopener noreferrer"},g=n("li",null,"在 VSCode 中的.json 文件（vue 代码片段就在 vue.json）配置代码片段",-1),h=n("li",null,[s("多个代码片段使用"),n("code",null,","),s("隔开")],-1),b=n("li",null,'在文件中输入配置的 "prefix"后面的关键字，按 tab 即可生成',-1),f=i(`<div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;vue3 typescript&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;prefix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;tsvue&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;&lt;template&gt;&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  &lt;div class=\\&quot;\${1:home}\\&quot;&gt;&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;    &lt;h2&gt;\${1:home}&lt;/h2&gt;&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  &lt;/div&gt;&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;&lt;/template&gt;&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;&lt;script setup lang=\\&quot;ts\\&quot;&gt;&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;&lt;/script&gt;&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;&lt;style lang=\\&quot;less\\&quot; scoped&gt;&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;.\${1:home}{&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  color: red;&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;}&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;&lt;/style&gt;&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vue3 typescript&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输入 tem 再按 tab 即可生成自定义代码片段。</p><h2 id="lorem" tabindex="-1"><a class="header-anchor" href="#lorem" aria-hidden="true">#</a> Lorem</h2><p>乱数假文</p>`,4);function x(y,V){const t=e("ExternalLinkIcon");return o(),l("div",null,[u,r,d,v,n("ul",null,[k,q,m,n("li",null,[n("a",_,[s("https://snippet-generator.app/"),p(t)]),s("在该网站中生成代码片段；")]),g,h,b]),f])}const C=a(c,[["render",x],["__file","03vsc.html.vue"]]);export{C as default};
