<template><div><h1 id="创建工具包项目" tabindex="-1"><a class="header-anchor" href="#创建工具包项目" aria-hidden="true">#</a> 创建工具包项目</h1>
<h2 id="安装-node" tabindex="-1"><a class="header-anchor" href="#安装-node" aria-hidden="true">#</a> 安装 Node</h2>
<ul>
<li>检查是否已经安装 node(node 中自带 npm)</li>
</ul>
<p><img src="@source/project/utils/images/image-20201210141935346.png" alt="image-20201210141935346"></p>
<ul>
<li>如果 node 与 npm 命令不识别，说明你还没有安装 node</li>
<li>安装 node</li>
</ul>
<h2 id="创建项目" tabindex="-1"><a class="header-anchor" href="#创建项目" aria-hidden="true">#</a> 创建项目</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 创建一个空的项目文件夹: hqs-utils</span>
<span class="token comment"># 在文件夹下执行命令</span>
<span class="token function">npm</span> init <span class="token parameter variable">-y</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="下载依赖包" tabindex="-1"><a class="header-anchor" href="#下载依赖包" aria-hidden="true">#</a> 下载依赖包</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> i webpack webpack-cli
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="配置-webpack" tabindex="-1"><a class="header-anchor" href="#配置-webpack" aria-hidden="true">#</a> 配置 webpack</h2>
<ul>
<li><code v-pre>webpack.config.js</code></li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"path"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// 模式</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">"development"</span><span class="token punctuation">,</span> <span class="token comment">// 也可以使用 production</span>
  <span class="token comment">// 入口</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">"./src/index.js"</span><span class="token punctuation">,</span>
  <span class="token comment">// 出口</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 打包文件夹</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">"dist"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token comment">// 打包文件</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">"hqs-utils.js"</span><span class="token punctuation">,</span>
    <span class="token comment">// 向外暴露的对象的名称</span>
    <span class="token literal-property property">library</span><span class="token operator">:</span> <span class="token string">"utils"</span><span class="token punctuation">,</span>
    <span class="token comment">// 打包生成库可以通过esm/commonjs/requirejs的语法引入</span>
    <span class="token literal-property property">libraryTarget</span><span class="token operator">:</span> <span class="token string">"umd"</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="在入口-js-中暴露功能" tabindex="-1"><a class="header-anchor" href="#在入口-js-中暴露功能" aria-hidden="true">#</a> 在入口 JS 中暴露功能</h2>
<ul>
<li><code v-pre>src/index.js</code></li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  document<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">"测试自定义包"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"test()"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置打包命令" tabindex="-1"><a class="header-anchor" href="#配置打包命令" aria-hidden="true">#</a> 配置打包命令</h2>
<ul>
<li><code v-pre>package.json</code></li>
</ul>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">"build:watch"</span><span class="token operator">:</span> <span class="token string">"webpack --watch"</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="对项目进行打包" tabindex="-1"><a class="header-anchor" href="#对项目进行打包" aria-hidden="true">#</a> 对项目进行打包</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> run build:watch
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="测试使用自定义包" tabindex="-1"><a class="header-anchor" href="#测试使用自定义包" aria-hidden="true">#</a> 测试使用自定义包</h2>
<ul>
<li><code v-pre>test/first.html</code></li>
</ul>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>../dist/hqs-utils.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
    aUtils<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/project/utils/images/image-20201204142438695.png" alt="image-20201204142438695"></p>
</div></template>


