<template><div><h1 id="浏览器的事件循环-event-loop" tabindex="-1"><a class="header-anchor" href="#浏览器的事件循环-event-loop" aria-hidden="true">#</a> 浏览器的事件循环(event loop)</h1>
<p><strong>浏览器事件循环是浏览器处理各种任务的机制。</strong></p>
<p>浏览器在运行过程中，会同时面对很多任务，用户的各种交互事件，网络请求，页面渲染等。这些任务并不是无序的，浏览器内部需要处理这些任务，所以就出现了事件循环。</p>
<h2 id="进程和线程" tabindex="-1"><a class="header-anchor" href="#进程和线程" aria-hidden="true">#</a> 进程和线程</h2>
<p>程序需要有自己的内存空间，这个内存空间简单的理解为进程。</p>
<ul>
<li>每个程序至少一个进程</li>
<li>一个进程至少一个线程，进程开启后会自动创建一个线程，该线程叫主线程</li>
</ul>
<p>浏览器是一个多进程多线程应用程序。浏览器更多工具任务管理器可以看到进程，其中最主要的进程：</p>
<ul>
<li>浏览器进程：负责页面显示，用户交互，子进程管理</li>
<li>网络进程：负责加载网络资源</li>
<li>渲染进程：渲染进程启动后，会开启一个渲染主线程，主要负责执行 HTML、CSS、JS 代码</li>
</ul>
<h2 id="渲染主线程" tabindex="-1"><a class="header-anchor" href="#渲染主线程" aria-hidden="true">#</a> 渲染主线程</h2>
<p>渲染主线程是浏览器最繁忙的线程，主要处理的任务包括：</p>
<ul>
<li>解析 HTML</li>
<li>解析 CSS</li>
<li>计算样式</li>
<li>处理图层</li>
<li>每秒把页面执行 60 次</li>
<li>执行全局 JS 代码</li>
<li>执行事件处理函数</li>
<li>执行计时器的回调函数</li>
<li>...</li>
</ul>
<p>主线程需要处理非常多的任务，需要合理的调度任务：</p>
<ul>
<li>正在执行 js 函数，执行到一半用户点击了按钮，需要立即执行吗？</li>
<li>正在执行 js 函数，执行到一半某个计时器达到了时间，需要立即去执行吗？</li>
<li>用户点按钮的同时，某个计时器也到达了时间，该处理哪一个？</li>
</ul>
<p>所以，浏览器需要排队</p>
<ol>
<li>开始时渲染主线程，会进入一个无限循环</li>
<li>每一个循环会检查消息队列是否有任务存在，如果有，取出第一个执行，没有则休眠</li>
<li>其他所有线程，可以随时向消息队列中添加任务，新任务在消息末尾。如果此时主线程时休眠的，则唤醒继续循环去任务</li>
<li>整个过程，称为事件循环(消息循环)</li>
</ol>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>渲染主线程：正在执行的任务<span class="token operator">...</span>
<span class="token literal-property property">消息队列</span><span class="token operator">:</span>任务<span class="token number">1</span> 任务<span class="token number">2</span> 任务<span class="token number">3.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
message queue
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="异步" tabindex="-1"><a class="header-anchor" href="#异步" aria-hidden="true">#</a> 异步</h2>
<p>代码在执行是，会遇到无法立即处理的任务</p>
<ul>
<li>计时器完成后需要执行的任务 setTimeout、setInterval</li>
<li>网络通信完成后需要执行的任务 XHR、Fetch</li>
<li>用户操作后需要执行的任务 addEventListener</li>
</ul>
<p>如果让渲染主线程等这些任务执行，会导致浏览器长期处于阻塞状态，会导致浏览器卡死。浏览器的解决方案就是使用异步。</p>
<p>主线程遇到定时器时，定时器会进入定时器线程，计时完后，进入消息队列，浏览器的渲染引擎只管按照消息队列的顺序执行，渲染主线程永不阻塞。</p>
<ul>
<li>异步的出现是因为浏览器的渲染引擎是单线程。</li>
<li>异步是通过事件循环实现的</li>
</ul>
<h3 id="js-的异步" tabindex="-1"><a class="header-anchor" href="#js-的异步" aria-hidden="true">#</a> js 的异步</h3>
<ol>
<li>js 是一门单线程的语言，因为 js 运行在浏览器的渲染主线程中，而渲染主线程只有一个。</li>
<li>渲染主线程负责渲染页面，执行 js 等。如果使用同步的方式极可能导致主线程产生阻塞，从而消息队列中的任务无法执行。这样既会浪费主线程的时间，又导致页面无法及时更新。</li>
<li>浏览器采用异步的方式来避免这种情况，当定时器、网络请求、事件监听等任务发生时、主线程会将这些任务交给其他线程去处理，自身立即结束该类任务，转而继续去执行后续代码。当其他线程完成后，将事先传递的回调函数包装成任务，加入到消息队列的末尾排队，等待主线程调度执行。在这种异步模式下，浏览器永不阻塞，从而最大限度的保证单线程的流畅执行。</li>
</ol>
<h3 id="任务的优先级" tabindex="-1"><a class="header-anchor" href="#任务的优先级" aria-hidden="true">#</a> 任务的优先级</h3>
<p>任务是没有优先级的，在消息队列中先进先出。但消息队列是有优先级的。</p>
<blockquote>
<p>以前的说法是宏队列(普通队列)加微队列(VIP 队列)，但是随着浏览器复杂度急剧提升，W3C 不再使用宏队列的说法。两个队列不好搞定。</p>
</blockquote>
<ul>
<li>每个任务都有一个任务类型，同一个类型的任务必须在同一个队列里，浏览器可以根据实际的情况从不同的队列中取出任务执行</li>
<li>浏览器必须准备一个微队列，微队列中的任务优先所有其他任务执行</li>
</ul>
<p>chrome 的实现中，至少有以下队列：</p>
<ul>
<li>延时队列：优先级中</li>
<li>交互队列：优先级高</li>
<li>微队列：优先级最高</li>
</ul>
<p>添加任务到微队列的主要方式是：使用 Promise、MutationObserver</p>
<h2 id="js-事件循环" tabindex="-1"><a class="header-anchor" href="#js-事件循环" aria-hidden="true">#</a> js 事件循环</h2>
<ul>
<li>事件循环又叫做消息循环，是浏览器渲染主线程的工作方式。</li>
<li>chrome 会开启一个不会结束的 for 循环，每次循环都从消息队列中取出第一个任务执行，其他线程只需要在消息队列后面排队。</li>
<li>之前的消息队列分为宏队列和微队列，现在是每一任务都有不同的类型，同一个类型的任务必须在同一个队列，不同队列优先级不同。浏览器自己决定执行哪个队列，但是都会有一个微队列，它具有最高优先级，必须优先调度执行。</li>
</ul>
<h2 id="js-的计时器能否准确计时" tabindex="-1"><a class="header-anchor" href="#js-的计时器能否准确计时" aria-hidden="true">#</a> js 的计时器能否准确计时</h2>
<p>不能</p>
<ol>
<li>js 计时器调用的是操作系统的函数，不同操作系统肯定存在偏差</li>
<li>浏览器计时时，如果嵌套过多，超过了 5 层，会带至少 4ms 的偏差</li>
<li>受事件循环的影响，计时器回调函数只能在主线程空闲时运行，所有会有偏差</li>
</ol>
</div></template>


