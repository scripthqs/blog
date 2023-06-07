import{_ as n,o as s,c as a,f as t}from"./app-dcac65c0.js";const p={},e=t(`<h1 id="文件流" tabindex="-1"><a class="header-anchor" href="#文件流" aria-hidden="true">#</a> 文件流</h1><h2 id="stream" tabindex="-1"><a class="header-anchor" href="#stream" aria-hidden="true">#</a> Stream</h2><p>Stream 是小溪，小河的意思，在编程中翻译成流</p><ul><li>在读取文件时，文件中的二进制(字节)数据会源源不断的读取到程序中</li><li>这一串串的字节，就是文件流</li></ul><p>Node 中很多对象都是流实现的</p><ul><li>http 模块的 request 和 response 对象</li><li>所有流都是 EventEmitter 实例</li></ul><p>node 中有四种基本流类型</p><ul><li>Writable：可以向其写入数据的流</li><li>Readable：可以从中读取数据的流</li><li>Duplex：同时为 Readable 和 Writable</li><li>Transform：Duplex 可以写入和读取时修改或转换数据的流</li></ul><h2 id="createreadstream" tabindex="-1"><a class="header-anchor" href="#createreadstream" aria-hidden="true">#</a> createReadStream</h2><p>createReadStream：创建一个可读流</p><ul><li>start: 从什么位置开始读取</li><li>end: 读取到什么位置后结束(包括 end 位置字节)</li><li>highWaterMark：一次性读取字节的长度，默认是 64kb</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 一次性读取</span>
fs<span class="token punctuation">.</span><span class="token function">readFile</span><span class="token punctuation">(</span><span class="token string">&quot;./aaa.txt&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> data</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 缺点一: 没有办法精准控制从哪里读取, 读取什么位置</span>
<span class="token comment">// 缺点二: 读取到某一个位置的, 暂停读取, 恢复读取</span>
<span class="token comment">// 缺点三: 文件非常大的时候, 多次读取</span>

<span class="token comment">// 使用流读取文件</span>
<span class="token keyword">const</span> readStream <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">createReadStream</span><span class="token punctuation">(</span><span class="token string">&quot;./aaa.txt&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">start</span><span class="token operator">:</span> <span class="token number">8</span><span class="token punctuation">,</span>
  <span class="token literal-property property">end</span><span class="token operator">:</span> <span class="token number">22</span><span class="token punctuation">,</span>
  <span class="token literal-property property">highWaterMark</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
  <span class="token comment">// 这个start可能在window上有兼容问题，需要使用r+</span>
  <span class="token comment">// flags: &quot;r+&quot;,</span>
  <span class="token comment">// start: 5,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//监听data,获取数据</span>
read<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&quot;data&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 监听其他事件、暂停或者恢复</span>
read<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&quot;open&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">fd</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
read<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&quot;end&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
read<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&quot;close&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
readStream<span class="token punctuation">.</span><span class="token function">pause</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
readStream<span class="token punctuation">.</span><span class="token function">resume</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="createwritestream" tabindex="-1"><a class="header-anchor" href="#createwritestream" aria-hidden="true">#</a> createWriteStream</h2><p>createWriteStream 用来创建可写流</p><ul><li>flags：默认是 w，如果我们希望是追加写入，可以使用 a 或者 a+</li><li>start：写入的位置</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 创建一个写入流</span>
<span class="token keyword">const</span> writeStream <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">createWriteStream</span><span class="token punctuation">(</span><span class="token string">&quot;./ccc.txt&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">flags</span><span class="token operator">:</span> <span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 监听open事件</span>
writeStream<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&quot;open&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">fd</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;文件被打开&quot;</span><span class="token punctuation">,</span> fd<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 简单写入</span>
writeStream<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">&quot;abcd&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// close事件</span>
writeStream<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// end方法:</span>
<span class="token comment">// 操作一: 将最后的内容写入到文件中, 并且关闭文件</span>
<span class="token comment">// 操作二: 关闭文件</span>
writeStream<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token string">&quot;hello world&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="pipe" tabindex="-1"><a class="header-anchor" href="#pipe" aria-hidden="true">#</a> pipe</h2><p>可以进行拷贝流操作</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 在可读流和可写流之间建立一个管道</span>
<span class="token keyword">const</span> readStream <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">createReadStream</span><span class="token punctuation">(</span><span class="token string">&quot;./foo.txt&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> writeStream <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">createWriteStream</span><span class="token punctuation">(</span><span class="token string">&quot;./foo_copy03.txt&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

readStream<span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span>writeStream<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,19),o=[e];function c(i,l){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","07_node_stream.html.vue"]]);export{r as default};