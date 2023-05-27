import{_ as n,o as s,c as a,f as t}from"./app-27e95156.js";const p={},c=t(`<h1 id="_9-手写消息订阅与发布" tabindex="-1"><a class="header-anchor" href="#_9-手写消息订阅与发布" aria-hidden="true">#</a> 9 手写消息订阅与发布</h1><h2 id="_9-1-api-说明" tabindex="-1"><a class="header-anchor" href="#_9-1-api-说明" aria-hidden="true">#</a> 9.1 API 说明</h2><ol><li>PubSub: 包含所有功能的订阅/发布消息的管理者</li><li>PubSub.subscribe(msg, subscriber): 订阅消息: 指定消息名和订阅者回调函数</li><li>PubSub.publish(msg, data): 异步发布消息: 指定消息名和数据</li><li>PubSub.publishSync(msg, data): 同步发布消息: 指定消息名和数据</li><li>PubSub.unsubscribe(flag): 取消订阅: 根据标识取消某个或某些消息的订阅</li></ol><h2 id="_9-2-编码实现" tabindex="-1"><a class="header-anchor" href="#_9-2-编码实现" aria-hidden="true">#</a> 9.2 编码实现</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/* 
自定义消息订阅与发布
*/</span>

<span class="token keyword">const</span> PubSub <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">/* 
  {
    add: {
      token1: callback1, 
      token2: callback2
    },
    update: {
      token3: callback3
    }
  }
*/</span>
<span class="token keyword">let</span> callbacksObj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span> <span class="token comment">// 保存所有回调的容器</span>
<span class="token keyword">let</span> id <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// 用于生成token的标记</span>

<span class="token comment">// 1. 订阅消息</span>
PubSub<span class="token punctuation">.</span><span class="token function-variable function">subscribe</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">msgName<span class="token punctuation">,</span> callback</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 确定token</span>
  <span class="token keyword">const</span> token <span class="token operator">=</span> <span class="token string">&quot;token_&quot;</span> <span class="token operator">+</span> <span class="token operator">++</span>id<span class="token punctuation">;</span>
  <span class="token comment">// 取出当前消息对应的callbacks</span>
  <span class="token keyword">const</span> callbacks <span class="token operator">=</span> callbacksObj<span class="token punctuation">[</span>msgName<span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>callbacks<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    callbacksObj<span class="token punctuation">[</span>msgName<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token punctuation">[</span>token<span class="token punctuation">]</span><span class="token operator">:</span> callback<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    callbacks<span class="token punctuation">[</span>token<span class="token punctuation">]</span> <span class="token operator">=</span> callback<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 返回token</span>
  <span class="token keyword">return</span> token<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 2. 发布异步的消息</span>
PubSub<span class="token punctuation">.</span><span class="token function-variable function">publish</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">msgName<span class="token punctuation">,</span> data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 取出当前消息对应的callbacks</span>
  <span class="token keyword">let</span> callbacks <span class="token operator">=</span> callbacksObj<span class="token punctuation">[</span>msgName<span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token comment">// 如果有值</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>callbacks<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// callbacks = Object.assign({}, callbacks)</span>
    <span class="token comment">// 启动定时器, 异步执行所有的回调函数</span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      Object<span class="token punctuation">.</span><span class="token function">values</span><span class="token punctuation">(</span>callbacks<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">callback</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token function">callback</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 3. 发布同步的消息</span>
PubSub<span class="token punctuation">.</span><span class="token function-variable function">publishSync</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">msgName<span class="token punctuation">,</span> data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 取出当前消息对应的callbacks</span>
  <span class="token keyword">const</span> callbacks <span class="token operator">=</span> callbacksObj<span class="token punctuation">[</span>msgName<span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token comment">// 如果有值</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>callbacks<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 立即同步执行所有的回调函数</span>
    Object<span class="token punctuation">.</span><span class="token function">values</span><span class="token punctuation">(</span>callbacks<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">callback</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token function">callback</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">/*
4. 取消消息订阅
  1). 没有传值, flag为undefined
  2). 传入token字符串
  3). msgName字符串
*/</span>
PubSub<span class="token punctuation">.</span><span class="token function-variable function">unsubscribe</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">flag</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 如果flag没有指定或者为null, 取消所有</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>flag <span class="token operator">===</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    callbacksObj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> flag <span class="token operator">===</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>flag<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">&quot;token_&quot;</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// flag是token</span>
      <span class="token comment">// 找到flag对应的callbacks</span>
      <span class="token keyword">const</span> callbacks <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">values</span><span class="token punctuation">(</span>callbacksObj<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">callbacks</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> callbacks<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">(</span>flag<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token comment">// 如果存在, 删除对应的属性</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>callbacks<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">delete</span> callbacks<span class="token punctuation">[</span>flag<span class="token punctuation">]</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token comment">// flag是msgName</span>
      <span class="token keyword">delete</span> callbacksObj<span class="token punctuation">[</span>flag<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&quot;如果传入参数, 必须是字符串类型&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> PubSub<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_9-3-测试" tabindex="-1"><a class="header-anchor" href="#_9-3-测试" aria-hidden="true">#</a> 9.3 测试</h2><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>手写消息订阅与发布<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>../dist/hqs-utils.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
      <span class="token keyword">const</span> <span class="token punctuation">{</span> PubSub <span class="token punctuation">}</span> <span class="token operator">=</span> utils<span class="token punctuation">;</span>
      <span class="token comment">// 订阅消息</span>
      PubSub<span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span><span class="token string">&quot;add&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;add()...&quot;</span><span class="token punctuation">,</span> data<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      PubSub<span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span><span class="token string">&quot;add&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;add2()...&quot;</span><span class="token punctuation">,</span> data<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">const</span> token <span class="token operator">=</span> PubSub<span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span><span class="token string">&quot;add&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;add3()...&quot;</span><span class="token punctuation">,</span> data<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      PubSub<span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span><span class="token string">&quot;update&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;update()...&quot;</span><span class="token punctuation">,</span> data<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

      <span class="token comment">// PubSub.unsubscribe(token)</span>
      <span class="token comment">// PubSub.unsubscribe(&#39;add&#39;)</span>
      <span class="token comment">// PubSub.unsubscribe()</span>

      PubSub<span class="token punctuation">.</span><span class="token function">publish</span><span class="token punctuation">(</span><span class="token string">&quot;add&quot;</span><span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      PubSub<span class="token punctuation">.</span><span class="token function">publish</span><span class="token punctuation">(</span><span class="token string">&quot;update&quot;</span><span class="token punctuation">,</span> <span class="token number">13</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;----&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token comment">// PubSub.unsubscribe(token)</span>
      <span class="token comment">// PubSub.unsubscribe(&#39;add&#39;)</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),e=[c];function o(l,u){return s(),a("div",null,e)}const k=n(p,[["render",o],["__file","09_pubsub.html.vue"]]);export{k as default};
