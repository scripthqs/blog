import{_ as s,o as i,c as e,f as h}from"./app-68a897fb.js";const l={},t=h('<h1 id="github-的-ssh-免登录" tabindex="-1"><a class="header-anchor" href="#github-的-ssh-免登录" aria-hidden="true">#</a> github 的 ssh 免登录</h1><h2 id="ssh-免登录" tabindex="-1"><a class="header-anchor" href="#ssh-免登录" aria-hidden="true">#</a> ssh 免登录</h2><p>win10 会自动记住 github 提交的地址和密码，其他环境不一定。可以使用 ssh 免登录，此时，不需要验证身份和密码。</p><ul><li>ssh 协议不要用户名和密码验证身份</li><li>ssh 协议中通过密钥实现身份验证，密钥是成对出现的，分为公钥和私钥</li><li>ssh 协议通过验证公钥和私钥的配对情况，决定验证是否通过</li><li>公钥和私钥需要开发者使用命令生成两个文件，将公钥放在 github 账户中，私钥保留在开发者的电脑中</li><li>推送时，比较密钥是否配对</li></ul><h2 id="如何使用-ssh" tabindex="-1"><a class="header-anchor" href="#如何使用-ssh" aria-hidden="true">#</a> 如何使用 ssh</h2><ul><li><code>ssh-keygen</code> 生成密钥</li><li>会要求我们输入内容，但是有默认值，可以不用输入直接回车确认</li><li>这两个密钥文件存储在<strong>系统-用户-找到.ssh 的文件夹</strong></li><li>找到私钥<code>id_rsa</code>和公钥<code>id_rsa.pub</code></li><li>用文本编辑器打开公钥<code>id_rsa.pub</code>，复制里面的字符串</li><li>点击 github 头像，选择 settings</li><li>选择左侧的 SSH and GPG keys</li><li>将公钥中的复制的字符串添加到 ssh keys 中</li><li>此时，就把将公钥放在了 github 服务器上</li></ul><p>选择仓库的 SSH 地址</p><ul><li><code>git remote add hqs_ssh 仓库的SSH地址</code>使用别名</li><li><code>git push 别名 分支名称</code> 此时可以实现免登录推送</li></ul>',8),a=[t];function d(c,o){return i(),e("div",null,a)}const n=s(l,[["render",d],["__file","05_git_ssh.html.vue"]]);export{n as default};
