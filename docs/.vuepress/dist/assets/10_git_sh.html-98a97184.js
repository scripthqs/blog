import{_ as s,o as n,c as a,f as e}from"./app-68a897fb.js";const i={},t=e(`<h1 id="git-一键提交" tabindex="-1"><a class="header-anchor" href="#git-一键提交" aria-hidden="true">#</a> git 一键提交</h1><p>使用 Git 的过程中，有时候需要经常和频繁的提交操作，每次都要 add，commit，pull，push</p><h2 id="方法" tabindex="-1"><a class="header-anchor" href="#方法" aria-hidden="true">#</a> 方法</h2><p>新建一个 .sh 文件，比如 git.sh</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable">now</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> <span class="token string">&quot;+%Y-%m-%d %H:%M:%S&quot;</span><span class="token variable">)</span></span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;进入项目目录&quot;</span>
<span class="token builtin class-name">cd</span> D:/user/Desktop/scripthqs/vuepress-blog
<span class="token builtin class-name">echo</span> <span class="token string">&quot;开始提交&quot;</span>
<span class="token function">git</span> <span class="token function">add</span> <span class="token parameter variable">-A</span> <span class="token operator">&amp;&amp;</span> <span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&quot;<span class="token variable">$now</span>&quot;</span> <span class="token operator">&amp;&amp;</span> <span class="token function">git</span> pull <span class="token operator">&amp;&amp;</span> <span class="token function">git</span> push
<span class="token builtin class-name">echo</span> <span class="token string">&quot;提交完成&quot;</span>
<span class="token builtin class-name">read</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="注意" tabindex="-1"><a class="header-anchor" href="#注意" aria-hidden="true">#</a> 注意</h2><ul><li><p>在文件夹下复制的路径是\\，应该改成正斜杠/</p></li><li><p>如何连命令窗口都不想保留，那就把最后那个 read 拿掉就好了。</p></li><li><p>如果想每次输入 commit 文字，那就把 now 这个变量设置成 read 变量</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">read</span> <span class="token parameter variable">-p</span>  <span class="token string">&quot;请输入提交信息：&quot;</span> msg
<span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&quot;<span class="token variable">$msg</span>&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="我的-git-文件" tabindex="-1"><a class="header-anchor" href="#我的-git-文件" aria-hidden="true">#</a> 我的 git 文件</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/usr/bin/env sh</span>
<span class="token comment"># 获取当前时间</span>
<span class="token assign-left variable">now</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> <span class="token string">&quot;+%Y-%m-%d %H:%M:%S&quot;</span><span class="token variable">)</span></span>

<span class="token comment"># 确保脚本抛出遇到的错误</span>
<span class="token builtin class-name">set</span> <span class="token parameter variable">-e</span>

<span class="token comment"># 生成静态文件</span>
<span class="token comment"># npm run build</span>
<span class="token function">npm</span> run docs:build

<span class="token comment"># 进入生成的文件夹</span>

<span class="token comment"># cd dist</span>
<span class="token builtin class-name">cd</span> docs/.vuepress/dist

<span class="token comment"># 如果是发布到自定义域名</span>
<span class="token comment"># echo &#39;www.example.com&#39; &gt; CNAME</span>

<span class="token function">git</span> init
<span class="token function">git</span> <span class="token function">add</span> <span class="token parameter variable">-A</span>
<span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&quot;<span class="token variable">$now</span>&quot;</span>

<span class="token comment"># 如果发布到 https://&lt;USERNAME&gt;.github.ioz</span>
<span class="token comment"># git push -f git@github.com:&lt;USERNAME&gt;/&lt;USERNAME&gt;.github.io.git master</span>

<span class="token function">git</span> push <span class="token parameter variable">-f</span> git@github.com:Scripthqs/Scripthqs.github.io.git master

<span class="token comment"># 如果发布到 https://&lt;USERNAME&gt;.github.io/&lt;REPO&gt;</span>
<span class="token comment"># git push -f git@github.com:&lt;USERNAME&gt;/&lt;REPO&gt;.git master:gh-pages</span>
<span class="token comment"># git push -f git@github.com:Scripthqs/vuepress-blog.git master:gh-pages</span>

<span class="token builtin class-name">echo</span> <span class="token string">&quot;进入项目目录&quot;</span>
<span class="token builtin class-name">cd</span> D:/user/Desktop/scripthqs/vuepress-blog
<span class="token builtin class-name">echo</span> <span class="token string">&quot;开始提交&quot;</span>
<span class="token function">git</span> <span class="token function">add</span> <span class="token parameter variable">-A</span> <span class="token operator">&amp;&amp;</span> <span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&quot;<span class="token variable">$now</span>&quot;</span> <span class="token operator">&amp;&amp;</span> <span class="token function">git</span> pull <span class="token operator">&amp;&amp;</span> <span class="token function">git</span> push
<span class="token builtin class-name">echo</span> <span class="token string">&quot;提交完成&quot;</span>
<span class="token builtin class-name">read</span>

<span class="token builtin class-name">cd</span> -
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),l=[t];function p(c,o){return n(),a("div",null,l)}const d=s(i,[["render",p],["__file","10_git_sh.html.vue"]]);export{d as default};
