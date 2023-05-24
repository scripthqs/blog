import{_ as n,o as s,c as a,f as t}from"./app-440c3c5c.js";const p={},o=t(`<h1 id="node-事件" tabindex="-1"><a class="header-anchor" href="#node-事件" aria-hidden="true">#</a> node 事件</h1><p>Node 中的核心 API 都是基于异步事件驱动的</p><ul><li>一些对象发出某件事件</li><li>可以监听这个事件，传入回调函数，会在监听时调用</li></ul><p>发出事件和监听事件是通过 EventEmitter 类完成的，该类属于 events 对象</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// events模块中的事件总线</span>
<span class="token keyword">const</span> EventEmitter <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;events&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 创建EventEmitter的实例</span>
<span class="token keyword">const</span> emitter <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">EventEmitter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 监听事件</span>
<span class="token keyword">function</span> <span class="token function">handleFn</span><span class="token punctuation">(</span><span class="token parameter">i<span class="token punctuation">,</span> j<span class="token punctuation">,</span> k</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;监听到a的事件&quot;</span><span class="token punctuation">,</span> i<span class="token punctuation">,</span> j<span class="token punctuation">,</span> k<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
emitter<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span> handleFn<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 发射事件</span>
<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  emitter<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// 取消事件监听</span>
  emitter<span class="token punctuation">.</span><span class="token function">off</span><span class="token punctuation">(</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span> handleFn<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    emitter<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="事件的常用方法" tabindex="-1"><a class="header-anchor" href="#事件的常用方法" aria-hidden="true">#</a> 事件的常用方法</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> EventEmitter <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;events&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> emitter <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">EventEmitter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
emitter<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
emitter<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
emitter<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&quot;c&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
emitter<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&quot;d&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
emitter<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&quot;e&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 1.获取所有监听事件的名称</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>emitter<span class="token punctuation">.</span><span class="token function">eventNames</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 2.获取监听最大的监听个数</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>emitter<span class="token punctuation">.</span><span class="token function">getMaxListeners</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 3.获取某一个事件名称对应的监听器个数</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>emitter<span class="token punctuation">.</span><span class="token function">listenerCount</span><span class="token punctuation">(</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 4.获取某一个事件名称对应的监听器函数(数组)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>emitter<span class="token punctuation">.</span><span class="token function">listeners</span><span class="token punctuation">(</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 5.once: 事件监听只监听一次(第一次发射事件的时候进行监听)</span>
emitter<span class="token punctuation">.</span><span class="token function">once</span><span class="token punctuation">(</span><span class="token string">&quot;c&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;on监听c&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 6.prependListener: 将事件监听添加到最前面</span>
emitter<span class="token punctuation">.</span><span class="token function">prependListener</span><span class="token punctuation">(</span><span class="token string">&quot;d&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;on监听d&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 7.removeAllListeners：移除所有的事件监听</span>

ee<span class="token punctuation">.</span><span class="token function">removeAllListeners</span><span class="token punctuation">(</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 在传递参数的情况下, 只会移除传递的事件名称的事件监听</span>
ee<span class="token punctuation">.</span><span class="token function">removeAllListeners</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 不传递参数的情况下, 移除所有事件名称的所有事件监听</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),e=[o];function c(u,i){return s(),a("div",null,e)}const k=n(p,[["render",c],["__file","05_node_events.html.vue"]]);export{k as default};
