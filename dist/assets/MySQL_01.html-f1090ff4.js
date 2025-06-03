import{_ as l,r as i,o as t,c,b as n,e as s,d as p,f as a}from"./app-06f72143.js";const o={},r=a('<h1 id="mysql" tabindex="-1"><a class="header-anchor" href="#mysql" aria-hidden="true">#</a> MySQL</h1><p>MySQL 原本是一个开源的数据库，原开发者为瑞典的 MySQL AB 公司</p><ul><li>在 2008 年被 Sun 公司收购；在 2009 年，Sun 被 Oracle 收购</li><li>所以目前 MySQL 归属于 Oracle</li></ul><p>MySQL 是一个关系型数据库，其实本质上就是一款软件、一个程序：</p><ul><li>这个程序中管理着多个数据库</li><li>每个数据库中可以有多张表</li><li>每个表中可以有多条数据</li></ul>',5),d={href:"https://dev.mysql.com/downloads/mysql/",target:"_blank",rel:"noopener noreferrer"},u=a(`<ul><li>Windows 推荐下载 MSI 的版本</li><li>Mac 推荐下载 DMG 的版本</li></ul><p>打开终端，查看 MySQL 的安装：MySQL 的连接操作</p><ul><li>需要配置环境变量</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>mysql <span class="token parameter variable">--version</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="终端连接数据库" tabindex="-1"><a class="header-anchor" href="#终端连接数据库" aria-hidden="true">#</a> 终端连接数据库</h2><p>想要操作数据，需要先和数据建立一个连接，最直接的方式就是通过终端来连接</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 方式一：</span>
mysql <span class="token parameter variable">-uroot</span> -p密码
<span class="token comment"># 方式二：</span>
mysql <span class="token parameter variable">-uroot</span> <span class="token parameter variable">-p</span>
Enter password: your password

<span class="token comment"># 查询数据库</span>
show databases<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>MySQL 默认的数据库：</p><ul><li>infomation_schema：信息数据库，其中包括 MySQL 在维护的其他数据库、表、列、访问 权限等信息</li><li>performance_schema：性能数据库，记录着 MySQL Server 数据库引擎在运行过程中的一 些资源消耗相关的信息</li><li>mysql：用于存储数据库管理者的用户信息、权限信息以及一些日志信息等</li><li>sys：相当于是一个简易版的 performance_schema，将性能数据库中的数据汇总成更容易 理解的形式</li></ul><p>一般情况下一个新的项目会对应一个新的数据库</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 在终端直接创建一个属于自己的新的数据库 test_db</span>
create database test_db<span class="token punctuation">;</span>
<span class="token comment"># 使用我们创建的数据库 test_db</span>
use test_db<span class="token punctuation">;</span>
<span class="token comment"># 在数据中，创建一张表</span>
create table user<span class="token punctuation">(</span>
  name varchar<span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span>,
  age int,
  height double
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment"># 插入数据</span>
insert into user <span class="token punctuation">(</span>name, age, height<span class="token punctuation">)</span> values <span class="token punctuation">(</span><span class="token string">&#39;aaa&#39;</span>, <span class="token number">18</span>, <span class="token number">1.88</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
insert into user <span class="token punctuation">(</span>name, age, height<span class="token punctuation">)</span> values <span class="token punctuation">(</span><span class="token string">&#39;bbb&#39;</span>, <span class="token number">40</span>, <span class="token number">1.98</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="gui-工具连接数据库" tabindex="-1"><a class="header-anchor" href="#gui-工具连接数据库" aria-hidden="true">#</a> GUI 工具连接数据库</h2><p>直接在终端操作数据库非常不方便，开发中可以借助 GUI 工具来连接数据库，操作更加方便，常见工具：</p><ul><li>Navicat</li><li>SQLYog</li><li>TablePlus</li></ul>`,14);function m(v,b){const e=i("ExternalLinkIcon");return t(),c("div",null,[r,n("p",null,[s("下载："),n("a",d,[s("https://dev.mysql.com/downloads/mysql/"),p(e)])]),u])}const k=l(o,[["render",m],["__file","MySQL_01.html.vue"]]);export{k as default};
