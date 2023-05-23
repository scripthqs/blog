<template><div><h1 id="mongodb" tabindex="-1"><a class="header-anchor" href="#mongodb" aria-hidden="true">#</a> MongoDB</h1>
<p>mongodb（芒果数据库）</p>
<h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h2>
<p>Mongodb 是一个介于关系数据库和非关系数据库之间的产品(Nosql)，是非关系数据库当中功能最丰富，最像关系数据库的（在学习的时候有一种在学 mysql 的感觉），<em>语法有点类似<strong>javascript</strong>面向对象的查询语言（又有一种在学习 JavaScript 的感觉）</em>，它是一个面向集合的，模式自由的文档型数据库。Mongodb 数据库旨在为 WEB 应用提供可扩展的高性能数据存储解决方案。</p>
<blockquote>
<ul>
<li>MongoDB 是一个数据库</li>
<li>操作语法有点像 JavaScript 的面向对象写法</li>
</ul>
</blockquote>
<ul>
<li>关系型数据库和非关系型数据库结构区别</li>
</ul>
<p><img src="@source/net/db/images/db1.png" alt="数据库1"></p>
<p><strong>mongodb 数据体系:</strong></p>
<p><img src="@source/net/db/images/db2.png" alt="数据库2"></p>
<p>上图所表达的含义：</p>
<ul>
<li>一个数据库中可以包含多个 collection（集合或者叫表），例如 admin、user</li>
<li>一个 collection 里可以包含多个 document，例如管理员 1，管理员 2，用户 1，用户 2</li>
</ul>
<p>MongoDB 数据模型是面向文档的，所谓的文档是一种类似 json 的结构，简单理解就是 MongoDB 这个数据库存的就是各种 JSON(实际是 BSON)。</p>
<p>MongoDB 数据库结构:库，表（集合），行（文档），列（字段，域），主键（primary key）。库包含表，表包含文档。</p>
<h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2>
<p>安装并配置环境变量</p>
<ul>
<li>官方下载地址：<a href="https://www.mongodb.com/try/download" target="_blank" rel="noopener noreferrer">https://www.mongodb.com/try/download<ExternalLinkIcon/></a></li>
<li>分为社区版和企业版，偶数为稳定版，奇数为开发版</li>
</ul>
<p>安装完后需要手动配置环境变量：计算机-属性-高级系统设置-环境变量</p>
<p>在 cmd 进入 D:\MongoDB\bin 目录下，然后执行</p>
<ul>
<li><code v-pre>mongod -dbpath D:\MongoDB\data\db</code></li>
<li><code v-pre>mongo</code></li>
</ul>
<p>这条命令是开启服务，它会一直运行，只要你要使用 Mongodb，这个窗口就不能关）</p>
<p><a href="https://www.cnblogs.com/TM0831/p/10606624.html" target="_blank" rel="noopener noreferrer">最详细的安装教程<ExternalLinkIcon/></a></p>
<h2 id="基本操作指令" tabindex="-1"><a class="header-anchor" href="#基本操作指令" aria-hidden="true">#</a> 基本操作指令</h2>
<p>打开 cmd 在命令行中输入命令</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#退出mongoDB使用</span>
<span class="token builtin class-name">exit</span>

<span class="token comment">#查看所有的数据库列表</span>
show dbs

<span class="token comment">#创建数据库或切换数据库,有则切换，无则新建库</span>
use 数据库名

<span class="token comment">#显示当前的库</span>
db

//给数据库中创建一个members的集合，并向集合中添加文档（行）数据
db.表名/集合名.insert<span class="token punctuation">(</span>JSON格式数据<span class="token punctuation">)</span>
db.members.insert<span class="token punctuation">(</span><span class="token punctuation">{</span>id:1,name:<span class="token string">'zhangsan'</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">#查看当前数据库中的集合列表：</span>
show tables
<span class="token comment"># 或</span>
show collections

<span class="token comment">#删除表</span>
db.表名/集合名.drop<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># 删除的是当前的库,需要进入要删除的库，然后再去执行这个命令</span>
db.dropDatabase<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>表是不需要先行进行定义的，当我们往一个表中插入记录后，表就自动出来了。</p>
<p>JSON 格式数据：不是严格意义上的 json 数据，key 名可以不使用引号包裹</p>
</blockquote>
<ul>
<li>show dbs：查看数据库列表</li>
<li>use db：使用/创建数据库，数据库要创建成功，<strong>必须要插入至少一个数据</strong></li>
<li>db：查看当前库名</li>
<li>db.表名.insert()：新增数据&amp;可能会创建出一个数据表</li>
<li>show tables / show collections：查看当前库中的表列表</li>
<li>db.表名.drop()：删除指定的表</li>
<li>db.dropDatabase()：删除当前的库</li>
<li>cls 清屏</li>
</ul>
</div></template>


