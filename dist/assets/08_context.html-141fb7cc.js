import{_ as n,o as s,c as a,f as e}from"./app-f4e03468.js";const t={},p=e(`<h1 id="执行上下文与执行上下文栈" tabindex="-1"><a class="header-anchor" href="#执行上下文与执行上下文栈" aria-hidden="true">#</a> 执行上下文与执行上下文栈</h1><h2 id="变量提升与函数提升" tabindex="-1"><a class="header-anchor" href="#变量提升与函数提升" aria-hidden="true">#</a> 变量提升与函数提升</h2><ul><li>变量声明提升：通过 var 声明的变量，在定义语句前就可以访问到，值为 undefined</li><li>函数声明提升：通过 function 声明的函数（<strong>函数声明</strong>），在之前就可以直接调用，值为函数对象</li><li><strong>先执行变量提升再执行函数提升。</strong></li></ul><h2 id="执行上下文" tabindex="-1"><a class="header-anchor" href="#执行上下文" aria-hidden="true">#</a> 执行上下文</h2><p>执行上下文(Execution Contexts，简称 ECS)是当前代码的执行环境。</p><p>代码分为全局代码和局部（函数）代码。</p><p>执行上下文主要是三种类型：</p><ul><li>全局执行上下文</li><li>函数执行上下文</li><li>eval 执行上下文，很少用</li></ul><h3 id="全局执行上下文" tabindex="-1"><a class="header-anchor" href="#全局执行上下文" aria-hidden="true">#</a> 全局执行上下文</h3><ol><li><p>在执行全局代码<strong>前</strong>，将<strong>window</strong>确定为<strong>全局执行上下文</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//window</span>
<span class="token keyword">var</span> a1 <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">a2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>对全局数据进行预处理</p><ul><li><code>var</code>定义的全局变量==》undefined，添加为 window 的属性</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//window</span>
<span class="token comment">//window.a1 = undefined</span>
<span class="token keyword">var</span> a1 <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">a2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>function</code>声明的全局函数==》赋值为 function，添加为 window 的方法</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//window</span>
<span class="token comment">//window.a1 = undefined</span>
<span class="token comment">//window.a2 = function(){}</span>
<span class="token keyword">var</span> a1 <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">a2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>this</code>赋值为 window</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//window</span>
<span class="token comment">//window.a1 = undefined</span>
<span class="token comment">//window.a2 = function(){}</span>
<span class="token comment">//this = window</span>
<span class="token keyword">var</span> a1 <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">a2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>开始执行全局代码</p></li></ol><p><strong>先执行变量提升再执行函数提升。</strong></p><h3 id="函数执行上下文" tabindex="-1"><a class="header-anchor" href="#函数执行上下文" aria-hidden="true">#</a> 函数执行上下文</h3><ol><li><p>在调用函数时，准备执行函数体前，创建对应的函数的执行上下文对象</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//1.window.fn = function(){.....}</span>
<span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token parameter">a1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> a2 <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
  <span class="token keyword">function</span> <span class="token function">a3</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token function">fn</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>对局部数据进行处理</p><p>（1）形参变量==》赋值（实参）==》添加为执行上下文的属性</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//1.window.fn</span>
<span class="token comment">//2.window.fn.a1 = undefined</span>
<span class="token comment">//3.window.fn.a1 = 4</span>
<span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token parameter">a1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">//var a1 = undefined</span>
  <span class="token comment">//a1 = 4</span>
<span class="token punctuation">}</span>
<span class="token function">fn</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（2）arguments==》赋值（实参列表）==》添加为执行上下文的属性</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//1.window.fn</span>
<span class="token comment">//2.window.fn.a1 = undefined</span>
<span class="token comment">//3.window.fn.a1 = 4</span>
<span class="token comment">//4.window.fn.arguments = [4]</span>
<span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token parameter">a1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">//var a1 = undefined</span>
  <span class="token comment">//a1 = 4</span>
  <span class="token comment">//arguments = [4]</span>
<span class="token punctuation">}</span>
<span class="token function">fn</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（3）var 定义的变量==》赋值为 undefined==》添加为执行上下文的属性</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//1.window.fn</span>
<span class="token comment">//2.window.fn.a1 = undefined</span>
<span class="token comment">//3.window.fn.a1 = 4</span>
<span class="token comment">//4.window.fn.arguments = [4]</span>
<span class="token comment">//5.window.fn.a2 = undefined</span>
<span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token parameter">a1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">//var a1 = undefined</span>
  <span class="token comment">//a1 = 4</span>
  <span class="token comment">//arguments = [4]</span>
  <span class="token comment">//var a2 = undefined</span>
<span class="token punctuation">}</span>
<span class="token function">fn</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（4）function 声明的函数==》赋值为 function==》添加为执行上下文的属性</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//1.window.fn</span>
<span class="token comment">//2.window.fn.a1 = undefined</span>
<span class="token comment">//3.window.fn.a1 = 4</span>
<span class="token comment">//4.window.fn.arguments = [4]</span>
<span class="token comment">//5.window.fn.a2 = undefined</span>
<span class="token comment">//6.window.fn.a3 = function(){...}</span>
<span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token parameter">a1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">//var a1 = undefined</span>
  <span class="token comment">//a1 = 4</span>
  <span class="token comment">//arguments = [4]</span>
  <span class="token comment">//var a2 = undefined</span>
  <span class="token comment">//var a3 = function(){...}</span>
<span class="token punctuation">}</span>
<span class="token function">fn</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（5）this==&gt;赋值（调用函数的对象）</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//1.window.fn</span>
<span class="token comment">//2.window.fn.a1 = undefined</span>
<span class="token comment">//3.window.fn.a1 = 4</span>
<span class="token comment">//4.window.fn.arguments = [4] 伪数组</span>
<span class="token comment">//5.window.fn.a2 = undefined</span>
<span class="token comment">//6.window.fn.a3 = function(){...}</span>
<span class="token comment">//7.this = window 赋值（调用函数的对象）</span>
<span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token parameter">a1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">//var a1 = undefined</span>
  <span class="token comment">//a1 = 4</span>
  <span class="token comment">//arguments = [4]</span>
  <span class="token comment">//var a2 = undefined</span>
  <span class="token comment">//var a3 = function(){...}</span>
<span class="token punctuation">}</span>
<span class="token function">fn</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>开始执行局部代码</p><p><strong>验证：</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token parameter">a1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a1<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//4</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a2<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//undefined</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a3<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//f a3(){...}</span>
  <span class="token function">a3</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//3</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arguments<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//arguments[4]</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//window</span>
  <span class="token keyword">var</span> a2 <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
  <span class="token keyword">function</span> <span class="token function">a3</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token function">fn</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>总结</strong>：</p><ul><li>每调用一次函数，就会有一个函数执行上下文。</li><li><strong>n+1 个执行上下文，n 代表调用函数的次数，1 代表 window</strong></li></ul></li></ol><h2 id="执行上下文栈" tabindex="-1"><a class="header-anchor" href="#执行上下文栈" aria-hidden="true">#</a> 执行上下文栈</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//1.进入全局执行上下文</span>
<span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> <span class="token function-variable function">bar</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> b <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>
  <span class="token function">fn</span><span class="token punctuation">(</span>x <span class="token operator">+</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//3.进入fn执行上下文</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> <span class="token function-variable function">fn</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">y</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> c <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a <span class="token operator">+</span> c <span class="token operator">+</span> y<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token function">bar</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//2.进入bar执行上下文</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>代码运行时，会有很多的执行上下文，执行上下文栈用来管理执行上下文。</strong></p><p><img src="https://raw.githubusercontent.com/scripthqs/assets/master/blog/context1.png" alt="执行上下文栈1"></p><p><strong>栈：后进先出</strong>。</p><ol><li>在执行上下文前，JS 会创建一个栈来管理所有的执行上下文对象。</li><li>在全局执行上下文（window）确定后，加入栈中（压栈）</li><li>函数执行上下文确定后，加入栈中压栈</li><li>当前函数执行完后，将栈顶的对象移除（出栈）</li><li>当前所有的代码执行完后，栈中还剩下 window</li></ol><p><img src="https://raw.githubusercontent.com/scripthqs/assets/master/blog/context2.png" alt="执行上下文栈2"></p><h2 id="递归调用" tabindex="-1"><a class="header-anchor" href="#递归调用" aria-hidden="true">#</a> 递归调用</h2><p>递归调用的特点</p><ul><li>在函数内部调用自己</li><li>一般会有 return 返回值退出循环</li></ul>`,23),c=[p];function i(o,l){return s(),a("div",null,c)}const d=n(t,[["render",i],["__file","08_context.html.vue"]]);export{d as default};
