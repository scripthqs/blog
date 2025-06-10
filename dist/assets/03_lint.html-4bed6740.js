import{_ as p,r as o,o as i,c as l,b as n,e as s,d as e,f as t}from"./app-007a9be1.js";const r={},c=t(`<h1 id="前端集成规范" tabindex="-1"><a class="header-anchor" href="#前端集成规范" aria-hidden="true">#</a> 前端集成规范</h1><h2 id="eslint" tabindex="-1"><a class="header-anchor" href="#eslint" aria-hidden="true">#</a> eslint</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> eslint@8.22.0 <span class="token parameter variable">-D</span>
<span class="token function">npm</span> <span class="token function">install</span> eslint-plugin-vue@8.6.0 <span class="token parameter variable">-D</span>
<span class="token function">npm</span> <span class="token function">install</span> eslint-config-prettier@8.5.0 <span class="token parameter variable">-D</span>
<span class="token function">npm</span> <span class="token function">install</span> eslint-plugin-prettier@4.0.0 <span class="token parameter variable">-D</span>
<span class="token function">npm</span> <span class="token function">install</span> prettier@2.6.2 <span class="token parameter variable">-D</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="官方文档" tabindex="-1"><a class="header-anchor" href="#官方文档" aria-hidden="true">#</a> 官方文档</h3>`,4),u={href:"https://zh-hans.eslint.org/",target:"_blank",rel:"noopener noreferrer"},d=n("br",null,null,-1),v={href:"https://eslint.org/",target:"_blank",rel:"noopener noreferrer"},k=t(`<h3 id="配置文件" tabindex="-1"><a class="header-anchor" href="#配置文件" aria-hidden="true">#</a> 配置文件</h3><p>核心配置</p><ul><li>extends:拓展，把当前配置和别人写好的配置合并</li><li>rules:规则，用于定于一条条 eslint 规则</li><li>plugins:插件，引入第三方检验插件，插件本身不会生效，只有在 rules 里引用了插件提供的规则才会生效。。</li></ul><p>配置可以写在 package.json 文件和单文件（yml,cjs,js）中</p><p>package.json 权重最小，js 文件最高，文件一般叫.eslintrc.js（旧版 8.0） 或者 eslint.config.js（新版 9）,eslintignore 忽略检查文件。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 如果是eslintrc.js格式，需要</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">// 如果是eslintrc.json格式，直接导出对象</span>
<span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// .eslintrc.js</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// 指定环境</span>
  <span class="token literal-property property">env</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 可以使用浏览器的全局变量</span>
    <span class="token literal-property property">browser</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// 添加所有 ECMAScript 2021 的全局变量，并自动将解析器选项 ecmaVersion 设置为 12</span>
    <span class="token literal-property property">es2021</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// 添加node全局变量</span>
    <span class="token literal-property property">node</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 自定义全局变量</span>
  <span class="token literal-property property">globals</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">defineProps</span><span class="token operator">:</span> <span class="token string">&quot;readonly&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">defineEmits</span><span class="token operator">:</span> <span class="token string">&quot;readonly&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">defineExpose</span><span class="token operator">:</span> <span class="token string">&quot;readonly&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">$confirm</span><span class="token operator">:</span> <span class="token string">&quot;readonly&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">$message</span><span class="token operator">:</span> <span class="token string">&quot;readonly&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">$notify</span><span class="token operator">:</span> <span class="token string">&quot;readonly&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">$alert</span><span class="token operator">:</span> <span class="token string">&quot;readonly&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">$storage</span><span class="token operator">:</span> <span class="token string">&quot;readonly&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">$loading</span><span class="token operator">:</span> <span class="token string">&quot;readonly&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">localStorage</span><span class="token operator">:</span> <span class="token string">&quot;off&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">sessionStorage</span><span class="token operator">:</span> <span class="token string">&quot;off&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// vue文件解析器</span>
  <span class="token literal-property property">parser</span><span class="token operator">:</span> <span class="token string">&quot;vue-eslint-parser&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">parserOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// es 语法的版本</span>
    <span class="token literal-property property">ecmaVersion</span><span class="token operator">:</span> <span class="token string">&quot;latest&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// 代码类型</span>
    <span class="token literal-property property">sourceType</span><span class="token operator">:</span> <span class="token string">&quot;module&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token keyword">extends</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;./.eslintrc-auto-import.json&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// https://zh-hans.eslint.org/docs/latest/rules/ 推荐配置</span>
    <span class="token string">&quot;eslint:recommended&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// https://eslint.vuejs.org/</span>
    <span class="token string">&quot;plugin:vue/vue3-essential&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;plugin:vue/vue3-strongly-recommended&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// https://github.com/prettier/eslint-plugin-prettier</span>
    <span class="token string">&quot;plugin:prettier/recommended&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;vue&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;prettier&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 校验prettier规则</span>
    <span class="token string-property property">&quot;prettier/prettier&quot;</span><span class="token operator">:</span> <span class="token string">&quot;warn&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// 箭头函数规范</span>
    <span class="token string-property property">&quot;arrow-body-style&quot;</span><span class="token operator">:</span> <span class="token string">&quot;off&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// 使用箭头函数作为参数传递</span>
    <span class="token string-property property">&quot;prefer-arrow-callback&quot;</span><span class="token operator">:</span> <span class="token string">&quot;off&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// debugger</span>
    <span class="token string-property property">&quot;no-debugger&quot;</span><span class="token operator">:</span> <span class="token string">&quot;off&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// 为空的代码块</span>
    <span class="token string-property property">&quot;no-empty&quot;</span><span class="token operator">:</span> <span class="token string">&quot;off&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// 未使用的变量</span>
    <span class="token string-property property">&quot;no-unused-vars&quot;</span><span class="token operator">:</span> <span class="token string">&quot;off&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// 强制使用===</span>
    <span class="token literal-property property">eqeqeq</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;error&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;always&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// 组件命名格式</span>
    <span class="token string-property property">&quot;vue/multi-word-component-names&quot;</span><span class="token operator">:</span> <span class="token string">&quot;off&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;vue/no-unused-components&quot;</span><span class="token operator">:</span> <span class="token string">&quot;off&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;vue/no-unused-vars&quot;</span><span class="token operator">:</span> <span class="token string">&quot;off&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// 组件参数格式</span>
    <span class="token string-property property">&quot;vue/max-attributes-per-line&quot;</span><span class="token operator">:</span> <span class="token string">&quot;off&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// 单个标签内容格式</span>
    <span class="token string-property property">&quot;vue/singleline-html-element-content-newline&quot;</span><span class="token operator">:</span> <span class="token string">&quot;off&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># .eslintignore</span>
dist
node_modules
package.json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// vite.config.js</span>
<span class="token comment">// 使用vite-eslint-plugin插件</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> mode<span class="token punctuation">,</span> command <span class="token punctuation">}</span><span class="token operator">:</span> ConfigEnv</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token function">AutoImport</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token comment">// 自动导入配置开启eslintrc，避免变量未定义报错</span>
        <span class="token literal-property property">eslintrc</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">enabled</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">imports</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;vue&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;vue-router&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;pinia&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">dts</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="忽略规则" tabindex="-1"><a class="header-anchor" href="#忽略规则" aria-hidden="true">#</a> 忽略规则</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&quot;foo&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// eslint-disable-line no-alert</span>

<span class="token comment">// eslint-disable-next-line no-alert</span>
<span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&quot;foo&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&quot;foo&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">/* eslint-disable-line no-alert */</span>

<span class="token comment">/* eslint-disable-next-line no-alert */</span>
<span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&quot;foo&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="命令" tabindex="-1"><a class="header-anchor" href="#命令" aria-hidden="true">#</a> 命令</h3><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;script&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">&quot;lint&quot;</span><span class="token operator">:</span> <span class="token string">&quot;eslint . --ext --fix .vue,.js&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="prettier" tabindex="-1"><a class="header-anchor" href="#prettier" aria-hidden="true">#</a> prettier</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> prettier <span class="token parameter variable">-D</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="官方文档-1" tabindex="-1"><a class="header-anchor" href="#官方文档-1" aria-hidden="true">#</a> 官方文档</h3>`,16),m={href:"https://prettier.io/",target:"_blank",rel:"noopener noreferrer"},b=t(`<h3 id="配置文件-1" tabindex="-1"><a class="header-anchor" href="#配置文件-1" aria-hidden="true">#</a> 配置文件</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// .prettierrc</span>
<span class="token punctuation">{</span>
 <span class="token comment">// 每行代码数量</span>
  <span class="token string-property property">&quot;printWidth&quot;</span><span class="token operator">:</span> <span class="token number">120</span><span class="token punctuation">,</span>
  <span class="token comment">// 缩进的空格个数</span>
  <span class="token string-property property">&quot;tabWidth&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
  <span class="token comment">// 制表符使用空格</span>
  <span class="token string-property property">&quot;useTabs&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token comment">// 末尾分号</span>
  <span class="token string-property property">&quot;semi&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token comment">// 换行符</span>
  <span class="token string-property property">&quot;endOfLine&quot;</span><span class="token operator">:</span> <span class="token string">&quot;auto&quot;</span><span class="token punctuation">,</span>
  <span class="token comment">// 单引号</span>
  <span class="token string-property property">&quot;singleQuote&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token comment">// 对象末尾始终携带逗号</span>
  <span class="token string-property property">&quot;trailingComma&quot;</span><span class="token operator">:</span> <span class="token string">&quot;all&quot;</span><span class="token punctuation">,</span>
  <span class="token comment">// 对象大括号带空格</span>
  <span class="token string-property property">&quot;bracketSpacing&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token comment">// 箭头符号参数始终带括号</span>
  <span class="token string-property property">&quot;arrowParens&quot;</span><span class="token operator">:</span> <span class="token string">&quot;always&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token comment">// .prettierignore</span>
dist
node_modules
<span class="token punctuation">.</span>eslintignore
<span class="token punctuation">.</span>prettierignore
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="格式化命令" tabindex="-1"><a class="header-anchor" href="#格式化命令" aria-hidden="true">#</a> 格式化命令</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>prettier <span class="token parameter variable">--write</span> src/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="stylelint" tabindex="-1"><a class="header-anchor" href="#stylelint" aria-hidden="true">#</a> stylelint</h2><h2 id="husky-commitlint-lint-staged" tabindex="-1"><a class="header-anchor" href="#husky-commitlint-lint-staged" aria-hidden="true">#</a> husky commitlint lint-staged</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> husky lint-staged @commitlint/cli @commitlint/config-conventional <span class="token parameter variable">-D</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="文档" tabindex="-1"><a class="header-anchor" href="#文档" aria-hidden="true">#</a> 文档</h3>`,8),g={href:"https://typicode.github.io/husky/zh/",target:"_blank",rel:"noopener noreferrer"},h={href:"https://www.npmjs.com/package/lint-staged",target:"_blank",rel:"noopener noreferrer"},q={href:"https://www.npmjs.com/package/@commitlint/config-conventional",target:"_blank",rel:"noopener noreferrer"},y=t(`<h3 id="package-json-配置" tabindex="-1"><a class="header-anchor" href="#package-json-配置" aria-hidden="true">#</a> package.json 配置</h3><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;script&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;prepare&quot;</span><span class="token operator">:</span> <span class="token string">&quot;husky&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;lint-staged&quot;</span><span class="token operator">:</span> <span class="token string">&quot;lint-staged&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;lint-staged&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;*.{js,vue}&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;eslint --fix&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;prettier --write&quot;</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="husky-初始化" tabindex="-1"><a class="header-anchor" href="#husky-初始化" aria-hidden="true">#</a> husky 初始化</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>npx husky init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="commitlint-配置" tabindex="-1"><a class="header-anchor" href="#commitlint-配置" aria-hidden="true">#</a> commitlint 配置</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// .commitlintrc.js</span>
<span class="token comment">// https://www.npmjs.com/package/@commitlint/config-conventional</span>
<span class="token comment">// [</span>
<span class="token comment">//   &#39;build&#39;,</span>
<span class="token comment">//   &#39;chore&#39;,</span>
<span class="token comment">//   &#39;ci&#39;,</span>
<span class="token comment">//   &#39;docs&#39;,</span>
<span class="token comment">//   &#39;feat&#39;,</span>
<span class="token comment">//   &#39;fix&#39;,</span>
<span class="token comment">//   &#39;perf&#39;,</span>
<span class="token comment">//   &#39;refactor&#39;,</span>
<span class="token comment">//   &#39;revert&#39;,</span>
<span class="token comment">//   &#39;style&#39;,</span>
<span class="token comment">//   &#39;test&#39;</span>
<span class="token comment">// ];</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token keyword">extends</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;@commitlint/config-conventional&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="脚本文件" tabindex="-1"><a class="header-anchor" href="#脚本文件" aria-hidden="true">#</a> 脚本文件</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># .husky/commit-msg</span>
npx <span class="token parameter variable">--no</span> -- commitlint <span class="token parameter variable">--edit</span> <span class="token variable">\${1}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># .husky/pre-commit</span>
npx lint-staged
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,9);function f(x,j){const a=o("ExternalLinkIcon");return i(),l("div",null,[c,n("p",null,[n("a",u,[s("https://zh-hans.eslint.org/"),e(a)]),s(),d,n("a",v,[s("https://eslint.org/"),e(a)])]),k,n("p",null,[n("a",m,[s("https://prettier.io/"),e(a)])]),b,n("ul",null,[n("li",null,[n("a",g,[s("https://typicode.github.io/husky/zh/"),e(a)])]),n("li",null,[n("a",h,[s("https://www.npmjs.com/package/lint-staged"),e(a)])]),n("li",null,[n("a",q,[s("https://www.npmjs.com/package/@commitlint/config-conventional"),e(a)])])]),y])}const w=p(r,[["render",f],["__file","03_lint.html.vue"]]);export{w as default};
