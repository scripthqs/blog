import{_ as o,r as d,o as l,c,d as i,e,b as r,f as t}from"./app-68a897fb.js";const n={},s=t('<h1 id="git-的简介" tabindex="-1"><a class="header-anchor" href="#git-的简介" aria-hidden="true">#</a> Git 的简介</h1><h2 id="git-是什么" tabindex="-1"><a class="header-anchor" href="#git-是什么" aria-hidden="true">#</a> git 是什么</h2><p>git 是一个版本控制管理系统（VCS,version control system），可以在任何时间点，将文档的状态记录作为更新记录保存起来，也可以在任何时间点，将更新记录恢复出来。</p><h2 id="使用-git-的目的" tabindex="-1"><a class="header-anchor" href="#使用-git-的目的" aria-hidden="true">#</a> 使用 git 的目的</h2><p>通过 git 管理托管项目代码。</p><h2 id="下载和安装-git" tabindex="-1"><a class="header-anchor" href="#下载和安装-git" aria-hidden="true">#</a> 下载和安装 git</h2>',6),h={href:"https://git-scm.com/downloads",target:"_blank",rel:"noopener noreferrer"},g=t(`<ul><li>安装完后打开 git bash 命令行窗口</li><li><code>git --version</code> 可以使用这条命令查看当前 git 版本</li></ul><h2 id="git-的初始配置" tabindex="-1"><a class="header-anchor" href="#git-的初始配置" aria-hidden="true">#</a> git 的初始配置</h2><p>git 安装后需要先配置，使用 git 可以多人协作，可以做到责任分工。</p><ol><li>初始化用户名 <code>git config --global user.name &#39;username&#39;</code></li><li>设置用户名邮箱<br><code>git config --global user.email &#39;xxx@qq.com&#39;</code></li><li>查看设置(验证是否初始化成功)<br><code>git config --list</code></li><li>如果配置需要修改配置信息 <ul><li>再重复上述的命令可以修改配置信息</li><li>也可以找到<code>C盘-用户文件夹-.gitconfig</code>中的文件，该文件中修改修改配置信息</li></ul></li></ol><p><strong>注意：此操作只需要执行一次，该设置在 GitHub 仓库主页显示谁提交了该文件。</strong></p><h2 id="git-初始化仓库" tabindex="-1"><a class="header-anchor" href="#git-初始化仓库" aria-hidden="true">#</a> git 初始化仓库</h2><p><strong>前 5 步的作用主要通过命令行创建文件夹和文件，熟悉命令行</strong>，也可以手动创建文件夹</p><ol><li><p>显示当前位置<br><code>pwd</code></p></li><li><p>创建名为<code>test</code>的文件夹<br><code>mkdir test</code></p></li><li><p>进入名为<code>test</code>文件夹<br><code>cd test</code></p></li><li><p>返回上一级目录<br><code>cd ..</code></p></li><li><p>创建名为<code>index.html</code>的文件<br><code>touch index.html</code></p></li><li><p>在文件内初始化 Git（创建 Git 仓库）<br><code>git init</code><br> 文件夹中会出现一个隐藏文件夹<code>.git</code>，如图：</p><p><img src="https://raw.githubusercontent.com/scripthqs/assets/master/blog/git.png" alt="git"></p><ul><li>hooks：目录包含客户端或服务端的钩子脚本</li><li>info：包含一个全局性排除文件</li><li>logs：保存日志信息</li><li>objects：目录存储所有数据内容</li><li>refs：目录存储指向数据（分支）的提交对象指针</li><li>config：文件包含项目特有的配置选项</li><li>description：用来显示对仓库的描述信息</li><li>HEAD：文件指示目前被检出的分支</li><li>index：文件保存暂存区信息</li></ul></li></ol><h2 id="git-的工作区域" tabindex="-1"><a class="header-anchor" href="#git-的工作区域" aria-hidden="true">#</a> git 的工作区域</h2><p>git 有 3 个工作区域：</p><ol><li><p>工作区(Working Directory)：添加、编辑、修改文件等动作。</p></li><li><p>暂存区：暂存已经修改的文件，最后统一提交到 Git 仓库中。</p></li><li><p>版本库(git Repository)：最终确定的文件保存到仓库，成为一个新的版本，对他人可见。</p></li></ol><h2 id="git-的基本使用" tabindex="-1"><a class="header-anchor" href="#git-的基本使用" aria-hidden="true">#</a> git 的基本使用</h2><ul><li><code>git init</code> 初始化仓库，一个项目只需要做一次</li><li><code>git status</code> 查看当前状态</li><li><code>git add xx</code> 将 xx 文件提交到暂存区</li><li><code>git add .</code> 使用<code>.</code>时，代表将当前文件夹下的所有文件提交到暂存区</li><li><code>git commit -m 描述</code> 提交到仓库，每次提交一定要写描述</li><li><code>git log</code> 查看提交状态，每一次提交都会有一个唯一的提交 ID</li></ul><p>git 默认配置忽略了文件的大小写，我选择打开</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> config core.ignorecase
<span class="token comment"># true为忽略了大小写，false为不忽略大小写</span>
<span class="token function">git</span> config core.ignorecase <span class="token boolean">false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="git-的撤销" tabindex="-1"><a class="header-anchor" href="#git-的撤销" aria-hidden="true">#</a> Git 的撤销</h2><h3 id="情况-1" tabindex="-1"><a class="header-anchor" href="#情况-1" aria-hidden="true">#</a> 情况 1</h3><p>用暂存区的文件覆盖工作目录的文件 ，会改变工作目录的文件</p><ul><li><code>git checkout 文件</code></li></ul><p>此时，工作目录中这个文件就会被暂存区的文件所覆盖，这个操作不会影响暂存区的文件状态</p><h3 id="情况-2" tabindex="-1"><a class="header-anchor" href="#情况-2" aria-hidden="true">#</a> 情况 2</h3><p>将文件从暂存区中删除 ，不会更改工作区的文件</p><ul><li><code>git rm --cached 文件</code></li></ul><p>将暂存区的文件从暂存区撤出，不会更改工作区的文件（即： <strong>git status</strong> 提示的被修改且被加入暂存区的内容，会被撤销，工作区文件不会变）</p><ul><li><code>git restore --staged 文件</code></li></ul><p>注意：这两条命令产生的结果一样，可以替换使用</p><h3 id="情况-3" tabindex="-1"><a class="header-anchor" href="#情况-3" aria-hidden="true">#</a> 情况 3</h3><p>将不在暂存区的文件撤销更改 （即： <strong>git status</strong> 提示的被修改 但未被加入暂存区的内容，会被撤销）</p><ul><li><code>git restore 文件</code></li></ul><h3 id="情况-4" tabindex="-1"><a class="header-anchor" href="#情况-4" aria-hidden="true">#</a> 情况 4</h3><p>将 git 仓库中指定的更新记录恢复出来，并且覆盖暂存区和工作目录</p><ul><li><code>git log</code> 查看之前提交版本的 commitID</li><li><code>git reset --hard commitID</code></li></ul><p>此时，就知道当初提交描述的重要性</p>`,33);function p(u,b){const a=d("ExternalLinkIcon");return l(),c("div",null,[s,i("p",null,[e("git 官网下载："),i("a",h,[e("https://git-scm.com/downloads"),r(a)])]),g])}const f=o(n,[["render",p],["__file","01_git.html.vue"]]);export{f as default};
