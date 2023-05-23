import{_ as s,o as n,c as a,f as e}from"./app-68a897fb.js";const t={},o=e(`<h1 id="tsconfig-json" tabindex="-1"><a class="header-anchor" href="#tsconfig-json" aria-hidden="true">#</a> tsconfig.json</h1><ul><li>当目录中出现了 tsconfig.json 文件，则说明该目录是 TypeScript 项目的根目录</li><li>tsconfig.json 文件指定了编译项目所需的根目录下的文件以及编译选项</li></ul><p>两个作用：</p><ol><li><p>知道如何去编译 TypeScript 代码和进行类型检测</p><ul><li>是否允许不明确的 this 选项，是否允许隐式的 any 类型</li><li>将 TypeScript 代码编译成什么版本的 JavaScript 代码</li></ul></li><li><p>让编辑器（比如 VSCode）可以按照正确的方式识别 TypeScript 代码</p><ul><li>对于哪些语法进行提示、类型错误检测等等</li></ul></li></ol><p>JavaScript 项目可以使用 jsconfig.json 文件，它的作用与 tsconfig.json 基本相同，只是默认启用了一些 JavaScript 相关的编译选项。</p><h2 id="自动编译" tabindex="-1"><a class="header-anchor" href="#自动编译" aria-hidden="true">#</a> 自动编译</h2><p>自动编译文件</p><ul><li>编译文件时，使用 -w 指令后，TS 编译器会自动监视文件的变化，并在文件发生变化时对文件进行重新编译。</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>tsc xxx.ts <span class="token parameter variable">-w</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>自动编译整个项目</p><ul><li>如果直接使用 tsc 指令，则可以自动将当前项目下的所有 ts 文件编译为 js 文件。</li><li>但是能直接使用 tsc 命令的前提是，要先在项目根目录下创建一个 ts 的配置文件 tsconfig.json</li><li>tsconfig.json 是一个 JSON 文件，添加配置文件后，只需 tsc 命令即可完成对整个项目的编译</li></ul><h2 id="配置选项" tabindex="-1"><a class="header-anchor" href="#配置选项" aria-hidden="true">#</a> 配置选项</h2><p>新建 tsconfig.json 文件，tsconfig.json 是 ts 编译器的配置文件，ts 编译器可以根据它的信息来对代码进行编译。 里面包括的选项非常多，比较重要和常见的配置如下</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;compilerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;target&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ES2016&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;module&quot;</span><span class="token operator">:</span> <span class="token string">&quot;commonjs&quot;</span><span class="token punctuation">,</span>

    <span class="token property">&quot;esModuleInterop&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;forceConsistentCasingInFileNames&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

    <span class="token property">&quot;strict&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;noImplicitAny&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;strictNullChecks&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;strictFunctionTypes&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;noImplicitThis&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;skipLibCheck&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// jsx的处理方法</span>
    <span class="token property">&quot;jsx&quot;</span><span class="token operator">:</span> <span class="token string">&quot;preserve&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">//路径映射，类似webpack的alias别名</span>
    <span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;@/*&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;src/*&quot;</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;files&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;include&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;./src/**/*.ts&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;./types/*.d.ts&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;exclude&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;node_modules&quot;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="include" tabindex="-1"><a class="header-anchor" href="#include" aria-hidden="true">#</a> include</h3><p>&quot;include&quot; 用来指定哪些 ts 文件需要被编译</p><ul><li><code>/**</code>表示任意目录</li><li><code>/*</code> 表示任意文件</li></ul><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token comment">// 所有src目录和tests目录下的文件都会被编译</span>
<span class="token property">&quot;include&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
  <span class="token string">&quot;./src/**/*&quot;</span><span class="token punctuation">,</span>
  <span class="token string">&quot;tests/**/*&quot;</span>
<span class="token punctuation">]</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="exclude" tabindex="-1"><a class="header-anchor" href="#exclude" aria-hidden="true">#</a> exclude</h3><p>&quot;exclude&quot; 不需要被编译的文件目录</p><ul><li>默认值：[&quot;node_modules&quot;, &quot;bower_components&quot;, &quot;jspm_packages&quot;]</li></ul><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token comment">// src下hello目录下的文件都不会被编译</span>
<span class="token property">&quot;exclude&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;./src/hello/**/*&quot;</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="extends" tabindex="-1"><a class="header-anchor" href="#extends" aria-hidden="true">#</a> extends</h3><p>定义被继承的配置文件</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token comment">// 当前配置文件中会自动包含config目录下base.json中的所有配置信息</span>
<span class="token property">&quot;extends&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./configs/base&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="files" tabindex="-1"><a class="header-anchor" href="#files" aria-hidden="true">#</a> files</h3><p>指定被编译文件的列表，只有需要编译的文件少时才会用到</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token comment">// 列表中的文件都会被TS编译器所编译</span>
<span class="token property">&quot;files&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;core.ts&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;sys.ts&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;types.ts&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;scanner.ts&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;parser.ts&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;utilities.ts&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;binder.ts&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;checker.ts&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;tsc.ts&quot;</span>
  <span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="compileroptions" tabindex="-1"><a class="header-anchor" href="#compileroptions" aria-hidden="true">#</a> compilerOptions</h3><p>编译选项是配置文件中非常重要也比较复杂的配置选项</p><ul><li>在 compilerOptions 中<strong>包含多个子选项</strong>，用来完成对编译的配置</li></ul><h4 id="target" tabindex="-1"><a class="header-anchor" href="#target" aria-hidden="true">#</a> target</h4><p>设置 ts 代码编译的目标版本</p><ul><li>可选值：ES3（默认）、ES5、ES6/ES2015、ES7/ES2016、ES2017、ES2018、ES2019、ES2020、ESNext</li></ul><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token comment">// 编写的ts代码将会被编译为ES6版本的js代码</span>
<span class="token property">&quot;compilerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;target&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ES6&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="lib" tabindex="-1"><a class="header-anchor" href="#lib" aria-hidden="true">#</a> lib</h4><p>指定代码运行时所包含的库（宿主环境），在前端开发时一般不用动</p><ul><li>可选值：ES5、ES6/ES2015、ES7/ES2016、ES2017、ES2018、ES2019、ES2020、ESNext、DOM、WebWorker、ScriptHost ......</li></ul><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;compilerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;target&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ES6&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;lib&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;ES6&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;DOM&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="module" tabindex="-1"><a class="header-anchor" href="#module" aria-hidden="true">#</a> module</h4><p>设置编译后代码使用的模块化系统</p><ul><li>可选值：CommonJS、UMD、AMD、System、ES2020、ESNext、None</li></ul><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;compilerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;module&quot;</span><span class="token operator">:</span> <span class="token string">&quot;CommonJS&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="outdir" tabindex="-1"><a class="header-anchor" href="#outdir" aria-hidden="true">#</a> outDir</h4><p>编译后文件的所在目录</p><ul><li>默认情况下，编译后的 js 文件会和 ts 文件位于相同的目录，设置 outDir 后可以改变编译后文件的位置</li></ul><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token comment">// 设置后编译后的js文件将会生成到dist目录</span>
<span class="token property">&quot;compilerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;outDir&quot;</span><span class="token operator">:</span> <span class="token string">&quot;dist&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="outfile" tabindex="-1"><a class="header-anchor" href="#outfile" aria-hidden="true">#</a> outFile</h4><p>将所有的文件编译为一个 js 文件</p><ul><li>默认会将所有的编写在全局作用域中的代码合并为一个 js 文件，如果 module 制定了 None、System 或 AMD 则会将模块一起合并到文件之中</li></ul><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;compilerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;outFile&quot;</span><span class="token operator">:</span> <span class="token string">&quot;dist/app.js&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="rootdir" tabindex="-1"><a class="header-anchor" href="#rootdir" aria-hidden="true">#</a> rootDir</h4><p>指定代码的根目录，默认情况下编译后文件的目录结构会以最长的公共目录为根目录，通过 rootDir 可以手动指定根目录</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;compilerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;rootDir&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./src&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="allowjs" tabindex="-1"><a class="header-anchor" href="#allowjs" aria-hidden="true">#</a> allowJs</h4><p>是否对 js 文件编译</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;compilerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;allowJs&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;checkJs&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="checkjs" tabindex="-1"><a class="header-anchor" href="#checkjs" aria-hidden="true">#</a> checkJs</h4><p>是否对 js 文件进行检查</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;compilerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;allowJs&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;checkJs&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="removecomments" tabindex="-1"><a class="header-anchor" href="#removecomments" aria-hidden="true">#</a> removeComments</h4><p>是否删除注释，默认值：false</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;compilerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  removeComments<span class="token operator">:</span><span class="token boolean">false</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="noemit" tabindex="-1"><a class="header-anchor" href="#noemit" aria-hidden="true">#</a> noEmit</h4><p>不对代码进行编译，默认值：false</p><h4 id="sourcemap" tabindex="-1"><a class="header-anchor" href="#sourcemap" aria-hidden="true">#</a> sourceMap</h4><p>是否生成 sourceMap，默认值：false</p><h4 id="严格检查" tabindex="-1"><a class="header-anchor" href="#严格检查" aria-hidden="true">#</a> 严格检查</h4><ul><li>strict <ul><li>启用所有的严格检查，默认值为 true，设置后相当于开启了所有的严格检查</li></ul></li><li>alwaysStrict <ul><li>总是以严格模式对代码进行编译</li></ul></li><li>noImplicitAny <ul><li>禁止隐式的 any 类型</li></ul></li><li>noImplicitThis <ul><li>禁止类型不明确的 this</li></ul></li><li>strictBindCallApply <ul><li>严格检查 bind、call 和 apply 的参数列表</li></ul></li><li>strictFunctionTypes <ul><li>严格检查函数的类型</li></ul></li><li>strictNullChecks <ul><li>严格的空值检查</li></ul></li><li>strictPropertyInitialization <ul><li>严格检查属性是否初始化</li></ul></li></ul><h4 id="额外检查" tabindex="-1"><a class="header-anchor" href="#额外检查" aria-hidden="true">#</a> 额外检查</h4><ul><li>noFallthroughCasesInSwitch <ul><li>检查 switch 语句包含正确的 break</li></ul></li><li>noImplicitReturns <ul><li>检查函数没有隐式的返回值</li></ul></li><li>noUnusedLocals <ul><li>检查未使用的局部变量</li></ul></li><li>noUnusedParameters <ul><li>检查未使用的参数</li></ul></li></ul><h4 id="allowunreachablecode" tabindex="-1"><a class="header-anchor" href="#allowunreachablecode" aria-hidden="true">#</a> allowUnreachableCode</h4><p>检查不可达代码</p><ul><li>可选值： <ul><li>true，忽略不可达代码</li><li>false，不可达代码将引起错误</li></ul></li></ul><h4 id="noemitonerror" tabindex="-1"><a class="header-anchor" href="#noemitonerror" aria-hidden="true">#</a> noEmitOnError</h4><p>有错误的情况下不进行编译，默认值：false</p>`,76),i=[o];function l(p,c){return n(),a("div",null,i)}const u=s(t,[["render",l],["__file","09_tsconfig_json.html.vue"]]);export{u as default};
