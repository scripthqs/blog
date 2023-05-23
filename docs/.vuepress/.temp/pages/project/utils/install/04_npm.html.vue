<template><div><h1 id="发布到-npm-仓库" tabindex="-1"><a class="header-anchor" href="#发布到-npm-仓库" aria-hidden="true">#</a> 发布到 npm 仓库</h1>
<h2 id="完善-package-json" tabindex="-1"><a class="header-anchor" href="#完善-package-json" aria-hidden="true">#</a> 完善 package.json</h2>
<ul>
<li>注意:
<ul>
<li>name: 必须是唯一的名称(在 npm 在线中央仓库中没有同名的)</li>
<li>main: 必须指定为打包生成的 js 文件</li>
<li>keywords: 指定一些方便别的程序员搜索到当前库的关键字</li>
</ul>
</li>
</ul>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"utils"</span><span class="token punctuation">,</span>
  <span class="token property">"version"</span><span class="token operator">:</span> <span class="token string">"1.0.0"</span><span class="token punctuation">,</span>
  <span class="token property">"author"</span><span class="token operator">:</span> <span class="token string">"scripthqs"</span><span class="token punctuation">,</span>
  <span class="token property">"description"</span><span class="token operator">:</span> <span class="token string">"前端-自定义工具函数库"</span><span class="token punctuation">,</span>
  <span class="token property">"keywords"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"utils"</span><span class="token punctuation">,</span> <span class="token string">"array"</span><span class="token punctuation">,</span> <span class="token string">"object"</span><span class="token punctuation">,</span> <span class="token string">"function"</span><span class="token punctuation">,</span> <span class="token string">"string"</span><span class="token punctuation">,</span> <span class="token string">"axios"</span><span class="token punctuation">,</span> <span class="token string">"event-bus"</span><span class="token punctuation">,</span> <span class="token string">"pub-sub"</span><span class="token punctuation">,</span> <span class="token string">"promise"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">"main"</span><span class="token operator">:</span> <span class="token string">"dist/hqs-utils.js"</span><span class="token punctuation">,</span>
  <span class="token property">"license"</span><span class="token operator">:</span> <span class="token string">"MIT"</span><span class="token punctuation">,</span>
  <span class="token property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"build"</span><span class="token operator">:</span> <span class="token string">"webpack --watch"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"devDependencies"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"webpack"</span><span class="token operator">:</span> <span class="token string">"^5.9.0"</span><span class="token punctuation">,</span>
    <span class="token property">"webpack-cli"</span><span class="token operator">:</span> <span class="token string">"^4.2.0"</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="npm-配置" tabindex="-1"><a class="header-anchor" href="#npm-配置" aria-hidden="true">#</a> npm 配置</h2>
<ul>
<li>npm 配置的中央仓库不能是淘宝镜像</li>
<li>发布前必须执行: npm config set registry <a href="https://registry.npmjs.org/" target="_blank" rel="noopener noreferrer">https://registry.npmjs.org/<ExternalLinkIcon/></a></li>
<li>不用发布时: npm config set registry <a href="http://registry.npm.taobao.org/" target="_blank" rel="noopener noreferrer">http://registry.npm.taobao.org/<ExternalLinkIcon/></a></li>
<li>查看配置: npm config list</li>
</ul>
<h2 id="注册-npm-中央仓库账号" tabindex="-1"><a class="header-anchor" href="#注册-npm-中央仓库账号" aria-hidden="true">#</a> 注册 npm 中央仓库账号</h2>
<ul>
<li>注册地址: <a href="https://www.npmjs.com/" target="_blank" rel="noopener noreferrer">https://www.npmjs.com/<ExternalLinkIcon/></a></li>
<li>关键信息: 用户名/密码/邮箱(<font color='red'>需要验证</font>)</li>
</ul>
<p><img src="@source/project/utils/images/image-20201204150917555.png" alt="image-20201204150917555"></p>
<h2 id="添加用户" tabindex="-1"><a class="header-anchor" href="#添加用户" aria-hidden="true">#</a> 添加用户</h2>
<ul>
<li>执行: npm addUser</li>
<li>登陆 npm 仓库</li>
<li>依次指定用户名/密码/邮箱</li>
</ul>
<p><img src="@source/project/utils/images/image-20201204151301849.png" alt="image-20201204151301849"></p>
<h2 id="发布仓库" tabindex="-1"><a class="header-anchor" href="#发布仓库" aria-hidden="true">#</a> 发布仓库</h2>
<ul>
<li>执行: npm publish</li>
</ul>
<p><img src="@source/project/utils/images/image-20201210143938993.png" alt="image-20201210143938993"></p>
<ul>
<li>发布失败, 原因是库的名称重复了, 修改 name 为一个唯一值, 再发布</li>
</ul>
<p><img src="@source/project/utils/images/image-20201204153505733.png" alt="image-20201204153505733"></p>
<h2 id="更新代码后再发布" tabindex="-1"><a class="header-anchor" href="#更新代码后再发布" aria-hidden="true">#</a> 更新代码后再发布</h2>
<ul>
<li>修改项目库的版本号: package.json 中的 version 从 1.0.0 改为 1.0.1, 注意一定要变大</li>
<li>修改代码后重新打包: npm run build</li>
<li>执行发布: npm publish</li>
</ul>
<h2 id="强制删除已发布的库" tabindex="-1"><a class="header-anchor" href="#强制删除已发布的库" aria-hidden="true">#</a> 强制删除已发布的库</h2>
<ul>
<li>执行: npm unpublish --force</li>
<li>注意: 必须在 72 小时内, 否则不能再删除</li>
</ul>
</div></template>


