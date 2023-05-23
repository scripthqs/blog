<template><div><h1 id="常用内置模块" tabindex="-1"><a class="header-anchor" href="#常用内置模块" aria-hidden="true">#</a> 常用内置模块</h1>
<p>更多内置模块及常用内置模块的更多 API 用法，可以参考：<a href="http://nodejs.cn/api/" target="_blank" rel="noopener noreferrer">http://nodejs.cn/api/<ExternalLinkIcon/></a></p>
<h2 id="os-模块" tabindex="-1"><a class="header-anchor" href="#os-模块" aria-hidden="true">#</a> os 模块</h2>
<p>os（<code v-pre>operation system</code>）模块提供了与操作系统相关的实用方法和属性。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> os <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"os"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 换行符</span>
os<span class="token punctuation">.</span><span class="token constant">EOL</span><span class="token punctuation">;</span> <span class="token comment">//根据操作系统生成对应的换行符 window \r\n，linux下面 \n</span>

<span class="token comment">// 查看cpu相关信息</span>
os<span class="token punctuation">.</span><span class="token function">cpus</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 总内存大小 (单位 字节)</span>
os<span class="token punctuation">.</span><span class="token function">totalmem</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 空余内存大小 (单位 字节)</span>
os<span class="token punctuation">.</span><span class="token function">freemem</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 主机名</span>
os<span class="token punctuation">.</span><span class="token function">hostname</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 系统类型</span>
os<span class="token punctuation">.</span><span class="token function">type</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// ...</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="path-模块" tabindex="-1"><a class="header-anchor" href="#path-模块" aria-hidden="true">#</a> path 模块</h2>
<p>path 模块用于处理文件和目录(文件夹)的路径。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"path"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 获取路径最后一部内容，一般用它来获取文件名称</span>
path<span class="token punctuation">.</span><span class="token function">basename</span><span class="token punctuation">(</span><span class="token string">"c:/a/b/c/d.html"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// d.html</span>

<span class="token comment">// 获取目录名，路径最后分隔符部分被忽略</span>
path<span class="token punctuation">.</span><span class="token function">dirname</span><span class="token punctuation">(</span><span class="token string">"c:/a/b/c/d.html"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// c:/a/b/c</span>

<span class="token comment">// 获取路径中文件扩展名（后缀）</span>
path<span class="token punctuation">.</span><span class="token function">extname</span><span class="token punctuation">(</span><span class="token string">"c:/a/b/c/d.html"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// .html</span>

<span class="token comment">// 给定的路径连接在一起</span>
path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">"/a"</span><span class="token punctuation">,</span> <span class="token string">"b"</span><span class="token punctuation">,</span> <span class="token string">"c"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// /a/b/c</span>

<span class="token comment">// resolve：模拟cd（切换目录）操作同时拼接路径</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">"a"</span><span class="token punctuation">,</span> <span class="token string">"b"</span><span class="token punctuation">,</span> <span class="token string">"c"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">"a"</span><span class="token punctuation">,</span> <span class="token string">"../b"</span><span class="token punctuation">,</span> <span class="token string">"c"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">"/a"</span><span class="token punctuation">,</span> <span class="token string">"b"</span><span class="token punctuation">,</span> <span class="token string">"c"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// ...</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>'/'表示当前磁盘的根目录，window 系统下，目录分割符可以是'/'或''，linux 系统下，系统的分割符是'/'，不能使用''。</p>
<h2 id="url-模块" tabindex="-1"><a class="header-anchor" href="#url-模块" aria-hidden="true">#</a> url 模块</h2>
<p>URL 字符串是结构化的字符串，包含多个含义不同的组成部分。 解析字符串后返回的 URL 对象，每个属性对应字符串的各个组成部分。</p>
<p><img src="@source/net/node/images/url.png" alt="url"></p>
<p>完整的 url 包含了：协议（https:），//，用户名和密码，域名（@sub.example.com），端口（8080），路径，查询，哈希。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> url <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"url"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> href <span class="token operator">=</span> <span class="token string">"http://www.xxx.com:8080/pathname?id=100#bbb"</span><span class="token punctuation">;</span>
<span class="token comment">// 解析网址，返回Url对象</span>
<span class="token comment">// 参2 如果为true 则 query获取得到的为对象形式</span>
url<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>href<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//以一种 Web 浏览器解析超链接的方式把一个目标 URL 解析成相对于一个基础 URL。</span>
url<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">"https://lynnn.cn/foo/bar"</span><span class="token punctuation">,</span> <span class="token string">"bar"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>注意：url 模块中没有 join 方法。</p>
</blockquote>
<ul>
<li>url.parse() 将一个地址转化成对象模式 （已经废弃）</li>
<li>url.resolve() 将多个路径拼接成一个完整的 url（已经废弃）</li>
</ul>
<p>之前使用里面的 parse 方法来获取到前端发送到后端的数据，现在改方法已被弃用，现在需要使用 URL 类</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// new一个URL实例</span>
<span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">URL</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>req<span class="token punctuation">.</span>url<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span> <span class="token string">"https://example.org/"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>另一种方法是使用 querstring()</p>
<h2 id="querystring-模块" tabindex="-1"><a class="header-anchor" href="#querystring-模块" aria-hidden="true">#</a> querystring 模块</h2>
<p>用于<strong>解析和格式化</strong> URL 查询字符串（URL 地址的 get 形式传参）的实用工具。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> querystring <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"querystring"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// query字符串转为对象</span>
querystring<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token string">"foo=bar&amp;abc=xyz"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//decode()是parse()的别名</span>
querystring<span class="token punctuation">.</span><span class="token function">decode</span><span class="token punctuation">(</span><span class="token string">"foo=bar&amp;abc=xyz"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 对象转为query字符串</span>
querystring<span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">foo</span><span class="token operator">:</span> <span class="token string">"bar"</span><span class="token punctuation">,</span> <span class="token literal-property property">abc</span><span class="token operator">:</span> <span class="token string">"xyz"</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//encode()是stringify()的别名</span>
querystring<span class="token punctuation">.</span><span class="token function">encode</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">foo</span><span class="token operator">:</span> <span class="token string">"bar"</span><span class="token punctuation">,</span> <span class="token literal-property property">abc</span><span class="token operator">:</span> <span class="token string">"xyz"</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="buffer-缓冲区" tabindex="-1"><a class="header-anchor" href="#buffer-缓冲区" aria-hidden="true">#</a> Buffer(缓冲区)</h2>
<p>Buffer 的结构和数组很像，操作的方法和数组类似。数组不能存储二进制文件，而 buffer 就是专门存储二进制数据的。</p>
<ul>
<li>使用 buffer 不需要引入模块，直接使用即可</li>
<li>buffer 中存储的都是二进制数据，但是显示时都是 16 进制的形式显示</li>
<li>buffer 中每一个元素的范围是从 00-ff，（十进制中的 90-255，二进制中的 0000000-1111111），超过就省略</li>
<li>计算机中一个 0 或 1，称为 1 位（1 bit），8 位（5 bit）=1 字节（1 byte）</li>
<li>buffer 中的一个元素，占用内存的一个字节</li>
<li>一个汉字占 3 个字节，一个字母占 1 个字节</li>
</ul>
<p><strong>Buffer</strong>方法</p>
<ul>
<li><code v-pre>Buffer.from(str)</code>方法将一个字符串转换 buffer</li>
<li>使用<code v-pre>Buffer.alloc(size)</code>方法创建指定大小的 Buffer</li>
<li>使用<code v-pre>Buffer.allocUnsafe(size)</code>方法创建指定大小的 Buffer，但是可能包含敏感数据</li>
<li>Buffer 的大小一旦确定，则不能修改，Buffer 实际是对底层内存的直接操作。</li>
<li>只要数字在控制台或页面中输出一定是 10 进制</li>
<li><code v-pre>buf.toString()</code>将缓冲区中的数据转换成字符串</li>
</ul>
<h2 id="fs-模块" tabindex="-1"><a class="header-anchor" href="#fs-模块" aria-hidden="true">#</a> fs 模块</h2>
<p>fs（file system）模块提供了用于与文件进行交互相关方法。即通过 node 来操作系统中的文件。</p>
<ul>
<li>服务器的本质就是将本地文件发送给远程的客户端</li>
<li>Node 通过 fs 模块来和文件进行交互</li>
<li>该模块提供了一些标准文件访问 API 来打开、读取、写入文件，以及与其交互</li>
<li>要使用 fs 模块，首先需要对其进行加载 <code v-pre>const fs = require('fs')</code></li>
</ul>
<blockquote>
<p>注意：fs 模块提供了 2 大类 api 方法</p>
<ul>
<li>同步操作 sync</li>
<li>异步操作 async</li>
</ul>
<p>后续写代码的时候有 2 个方案，一个是使用之前套娃式的写法（回调地狱），二是使用同步的 api 去实现操作。</p>
</blockquote>
<ul>
<li>同步文件系统会阻塞程序的执行，除非操作完毕，否则不会向下执行代码</li>
<li>异步文件系统不会阻塞程序的执行，而是在操作完成时，通过回调函数将结果返回</li>
</ul>
<p>异步方法才有回调函数，同步方法带 Sync</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'fs'</span><span class="token punctuation">)</span>

<span class="token comment">// 写入数据（覆盖），追加写使用fs.appendFile</span>
fs<span class="token punctuation">.</span><span class="token function">writeFile</span><span class="token punctuation">(</span>文件路径<span class="token punctuation">,</span>待写入的数据<span class="token punctuation">,</span><span class="token parameter">err</span> <span class="token operator">=></span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 读取文件中数据</span>
fs<span class="token punctuation">.</span><span class="token function">readFile</span><span class="token punctuation">(</span>文件路径<span class="token punctuation">,</span> 'utf8’<span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span>data</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// （同步）检查文件是否存在    返回true/false</span>
<span class="token comment">// async：异步</span>
<span class="token comment">// sync：同步</span>
<span class="token keyword">let</span> ret <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">existsSync</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span>

<span class="token comment">// 获取文件信息（异步）</span>
fs<span class="token punctuation">.</span><span class="token function">stat</span><span class="token punctuation">(</span>文件<span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span>stats</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
 stats<span class="token punctuation">.</span><span class="token function">isDirectory</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 是否是目录</span>
 stats<span class="token punctuation">.</span><span class="token function">isFile</span><span class="token punctuation">(</span><span class="token punctuation">)</span>       <span class="token comment">// 是否为文件</span>
 stats<span class="token punctuation">.</span>size            <span class="token comment">// 文件大小(以字节为单位)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 删除文件（异步）</span>
fs<span class="token punctuation">.</span><span class="token function">unlink</span><span class="token punctuation">(</span>文件路径<span class="token punctuation">,</span><span class="token parameter">err</span> <span class="token operator">=></span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="文件的写入" tabindex="-1"><a class="header-anchor" href="#文件的写入" aria-hidden="true">#</a> 文件的写入</h3>
<p><strong>同步文件写入:</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">//打开文件同步调用,参数：路径，打开文件的操作，设置文件的权限，一般不传，r只读，w可写，a追加,该方法会返回一个文件的描述作为结果，可以通过该描述对文件进行各种操作</span>
fs<span class="token punctuation">.</span><span class="token function">openSync</span><span class="token punctuation">(</span>path<span class="token punctuation">[</span><span class="token punctuation">,</span> flags<span class="token punctuation">,</span> mode<span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token comment">//添加内容同步调用</span>
fs<span class="token punctuation">.</span><span class="token function">writeSync</span><span class="token punctuation">(</span>fd<span class="token punctuation">,</span> string<span class="token punctuation">[</span><span class="token punctuation">,</span> position<span class="token punctuation">[</span><span class="token punctuation">,</span> encoding<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token comment">//关闭文件</span>
fs<span class="token punctuation">.</span><span class="token function">closeSync</span><span class="token punctuation">(</span>fd<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>异步文件<strong>写入</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">//打开文件</span>
fs<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span>path<span class="token punctuation">[</span><span class="token punctuation">,</span> flags<span class="token punctuation">[</span><span class="token punctuation">,</span> mode<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">,</span> callback<span class="token punctuation">)</span>
<span class="token comment">//写入文件</span>
fs<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>fd<span class="token punctuation">,</span> string<span class="token punctuation">[</span><span class="token punctuation">,</span> position<span class="token punctuation">[</span><span class="token punctuation">,</span> encoding<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">,</span> callback<span class="token punctuation">)</span>
<span class="token comment">//关闭文件</span>
fs<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span>fd<span class="token punctuation">,</span>callback<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>流式文件<strong>写入</strong></p>
<p>同步，异步，简单文件的写入都不适合大文件的写入，性能较差，容易导致内存溢出</p>
<p>创建可写流：</p>
<ul>
<li><code v-pre>fs.createWriteStream(path[, options])</code></li>
<li><code v-pre>ws.write(data)</code></li>
</ul>
<p>可以通过监听流的 open 和 close 事件来监听流的打开和关闭</p>
<ul>
<li><code v-pre>ws.once('open',function())</code></li>
<li><code v-pre>ws.once('close',function())</code></li>
</ul>
<p>on 可以为事件绑定一个事件，once 会在触发一次以后自动失效</p>
<p>调用<code v-pre>ws.close()或者ws.end()</code></p>
<h3 id="文件的读取" tabindex="-1"><a class="header-anchor" href="#文件的读取" aria-hidden="true">#</a> 文件的读取</h3>
<p><strong>简单文件读取:</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>fs<span class="token punctuation">.</span><span class="token function">readFile</span><span class="token punctuation">(</span>path<span class="token punctuation">[</span><span class="token punctuation">,</span>option<span class="token punctuation">]</span><span class="token punctuation">,</span>callback<span class="token punctuation">)</span>
fs<span class="token punctuation">.</span><span class="token function">readFileSync</span><span class="token punctuation">(</span>path<span class="token punctuation">[</span><span class="token punctuation">,</span>option<span class="token punctuation">]</span><span class="token punctuation">,</span>callback<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>参数：读取的路径，读取的选项，回调函数（返回值 err,data 会返回一个 Buffer）</li>
<li>为什么返回 buffer，因为读取的文件有可能是图片，音频</li>
</ul>
<p><strong>流式文件读取:</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">//创建可读流</span>
fs<span class="token punctuation">.</span><span class="token function">createReadStream</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>必须为可读流绑定一个 data 事件，data 事件绑定完毕，它会自动读取数据</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>rs<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">"data"</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>简单的方法：</p>
<ul>
<li>创建可读流</li>
<li>创建可写流</li>
<li>导入数据<code v-pre>rs.pipe(ws)</code></li>
</ul>
<h3 id="文件的其他操作" tabindex="-1"><a class="header-anchor" href="#文件的其他操作" aria-hidden="true">#</a> 文件的其他操作</h3>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">//验证路径是否存在</span>
fs<span class="token punctuation">.</span><span class="token function">exists</span><span class="token punctuation">(</span>path<span class="token punctuation">,</span>callback<span class="token punctuation">)</span> 异步该方法已废弃
fs<span class="token punctuation">.</span><span class="token function">existsSync</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span>

<span class="token comment">//获取文件的信息</span>
fs<span class="token punctuation">.</span><span class="token function">stat</span><span class="token punctuation">(</span>path<span class="token punctuation">,</span>callback<span class="token punctuation">)</span>
fs<span class="token punctuation">.</span><span class="token function">statSync</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span>

<span class="token comment">//删除文件</span>
fs<span class="token punctuation">.</span><span class="token function">unlink</span><span class="token punctuation">(</span>path<span class="token punctuation">,</span>callback<span class="token punctuation">)</span>
fs<span class="token punctuation">.</span><span class="token function">unlinkSync</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span>

<span class="token comment">//列出文件：</span>
fs<span class="token punctuation">.</span><span class="token function">readdir</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
fs<span class="token punctuation">.</span><span class="token function">readdirSync</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">//截断文件</span>
fs<span class="token punctuation">.</span><span class="token function">truncate</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
fs<span class="token punctuation">.</span><span class="token function">truncateSync</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">//建立目录</span>
fs<span class="token punctuation">.</span><span class="token function">mkdir</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
fs<span class="token punctuation">.</span><span class="token function">mkdirSync</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">//删除目录</span>
fs<span class="token punctuation">.</span><span class="token function">rmdir</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
fs<span class="token punctuation">.</span><span class="token function">rmdirSync</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">//重命名文件和目录</span>
rs<span class="token punctuation">.</span><span class="token function">rename</span><span class="token punctuation">(</span>oldpath<span class="token punctuation">,</span>newpath<span class="token punctuation">,</span>callcack<span class="token punctuation">)</span>
rs<span class="token punctuation">.</span><span class="token function">renameSync</span><span class="token punctuation">(</span>oldpath<span class="token punctuation">,</span>newpath<span class="token punctuation">)</span>

<span class="token comment">//监视文件更改写入</span>
rs<span class="token punctuation">.</span><span class="token function">watchFile</span><span class="token punctuation">(</span>filename<span class="token punctuation">,</span><span class="token punctuation">[</span>option<span class="token punctuation">]</span><span class="token punctuation">,</span>listener<span class="token punctuation">)</span>
<span class="token operator">-</span> 在回调函数中<span class="token number">2</span>个参数curr和prev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


