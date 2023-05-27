import{_ as n,o as s,c as a,f as p}from"./app-27e95156.js";const t={},e=p(`<h1 id="链表-linked-list" tabindex="-1"><a class="header-anchor" href="#链表-linked-list" aria-hidden="true">#</a> 链表(Linked List)</h1><p>数组必须是连续的内存空间，链表不必。js 中的原型链就是链表解构。</p><ul><li>链表访问任意位置的元素时，都需要从头开始访问。</li><li>无法通过下标访问</li><li>单向链表和双向链表</li></ul><h2 id="用-js-写链表" tabindex="-1"><a class="header-anchor" href="#用-js-写链表" aria-hidden="true">#</a> 用 js 写链表</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Node</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>value <span class="token operator">=</span> value<span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Node</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> b <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Node</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> c <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Node</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> d <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Node</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
a<span class="token punctuation">.</span>next <span class="token operator">=</span> b<span class="token punctuation">;</span>
b<span class="token punctuation">.</span>next <span class="token operator">=</span> c<span class="token punctuation">;</span>
c<span class="token punctuation">.</span>next <span class="token operator">=</span> d<span class="token punctuation">;</span>

<span class="token comment">//普通遍历</span>
<span class="token keyword">function</span> <span class="token function">whileNode</span><span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> temp <span class="token operator">=</span> root<span class="token punctuation">;</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>temp<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>temp<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
    temp <span class="token operator">=</span> temp<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">//递归遍历</span>
<span class="token keyword">function</span> <span class="token function">nextNode</span><span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>root<span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">nextNode</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>next<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">//插入元素</span>
<span class="token keyword">let</span> m <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Node</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
b<span class="token punctuation">.</span>next <span class="token operator">=</span> m<span class="token punctuation">;</span>
m<span class="token punctuation">.</span>next <span class="token operator">=</span> c<span class="token punctuation">;</span>

<span class="token comment">//删除元素</span>
b<span class="token punctuation">.</span>next <span class="token operator">=</span> c<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="链表的操作" tabindex="-1"><a class="header-anchor" href="#链表的操作" aria-hidden="true">#</a> 链表的操作</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">append</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span> 向链表尾部添加一个新的项。
<span class="token function">insert</span><span class="token punctuation">(</span>position<span class="token punctuation">,</span> element<span class="token punctuation">)</span> 向链表的特定位置插入一个新的项。
<span class="token function">get</span><span class="token punctuation">(</span>position<span class="token punctuation">)</span> 获取对应位置的元素。
<span class="token function">indexOf</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span> 返回元素在链表中的索引。如果链表中没有该元素就返回<span class="token operator">-</span><span class="token number">1</span>。
<span class="token function">update</span><span class="token punctuation">(</span>position<span class="token punctuation">,</span> element<span class="token punctuation">)</span> 修改某个位置的元素。
<span class="token function">removeAt</span><span class="token punctuation">(</span>position<span class="token punctuation">)</span> 从链表的特定位置移除一项。
<span class="token function">remove</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span> 从链表中移除一项。
<span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span> 如果链表中不包含任何元素，返回 <span class="token boolean">true</span>，如果链表长度大于 <span class="token number">0</span> 则返回 <span class="token boolean">false</span>。
<span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> 返回链表包含的元素个数，与数组的 length 属性类似。
<span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> 由于链表项使用了 Node 类，就需要重写继承自 JavaScript 对象默认的 toString 方法，让其只输出元素的值。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="单向链表的实现" tabindex="-1"><a class="header-anchor" href="#单向链表的实现" aria-hidden="true">#</a> 单向链表的实现</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//链表的节点类</span>
<span class="token keyword">class</span> <span class="token class-name">Node</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>data <span class="token operator">=</span> data<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">LinkedList</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>size <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">append</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> newNode <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Node</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">=</span> newNode<span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">let</span> curNode <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">;</span>
      <span class="token keyword">while</span> <span class="token punctuation">(</span>curNode<span class="token punctuation">.</span>next<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        curNode <span class="token operator">=</span> curNode<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      curNode<span class="token punctuation">.</span>next <span class="token operator">=</span> newNode<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>size<span class="token operator">++</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">insert</span><span class="token punctuation">(</span><span class="token parameter">position<span class="token punctuation">,</span> item</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 1、对 position 进行越界判断，不能小于 0 或大于链表长度</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>position <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">||</span> position <span class="token operator">&gt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>size<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> newNode <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Node</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>position <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      newNode<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">;</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">=</span> newNode<span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">let</span> curNode <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">;</span>
      <span class="token keyword">let</span> preNode <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
      <span class="token keyword">let</span> index <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
      <span class="token keyword">while</span> <span class="token punctuation">(</span>index<span class="token operator">++</span> <span class="token operator">&lt;</span> position<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        preNode <span class="token operator">=</span> curNode<span class="token punctuation">;</span>
        curNode <span class="token operator">=</span> curNode<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      newNode<span class="token punctuation">.</span>next <span class="token operator">=</span> curNode<span class="token punctuation">;</span>
      preNode<span class="token punctuation">.</span>next <span class="token operator">=</span> newNode<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>size<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">get</span><span class="token punctuation">(</span>position<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>position <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">||</span> position <span class="token operator">&gt;=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>size<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> curNode <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">;</span>
    <span class="token keyword">let</span> index <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>index<span class="token operator">++</span> <span class="token operator">&lt;</span> position<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      curNode <span class="token operator">=</span> curNode<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> curNode<span class="token punctuation">.</span>data<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> curNode <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">;</span>
    <span class="token keyword">let</span> index <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>curNode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>curNode<span class="token punctuation">.</span>data <span class="token operator">===</span> item<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> index<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      curNode <span class="token operator">=</span> curNode<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
      index<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">update</span><span class="token punctuation">(</span><span class="token parameter">position<span class="token punctuation">,</span> item</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>position <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">||</span> position <span class="token operator">&gt;=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>size<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> curNode <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">;</span>
    <span class="token keyword">let</span> index <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>index<span class="token operator">++</span> <span class="token operator">&lt;</span> position<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      curNode <span class="token operator">=</span> curNode<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    curNode<span class="token punctuation">.</span>data <span class="token operator">=</span> item<span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">removeAt</span><span class="token punctuation">(</span><span class="token parameter">position</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>position <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">||</span> position <span class="token operator">&gt;=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>size<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> curNode <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>position <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">let</span> preNode <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
      <span class="token keyword">let</span> index <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
      <span class="token keyword">while</span> <span class="token punctuation">(</span>index<span class="token operator">++</span> <span class="token operator">&lt;</span> position<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        preNode <span class="token operator">=</span> curNode<span class="token punctuation">;</span>
        curNode <span class="token operator">=</span> curNode<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token comment">//让上一个节点的next指向下一个节点的next，相当于删除</span>
      preNode<span class="token punctuation">.</span>next <span class="token operator">=</span> curNode<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>size<span class="token operator">--</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> curNode<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">remove</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">removeAt</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>size <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> curNode <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">;</span>
    <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
    <span class="token comment">// 遍历所有的节点，拼接为字符串，直到节点为 null</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>curNode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      result <span class="token operator">+=</span> curNode<span class="token punctuation">.</span>data <span class="token operator">+</span> <span class="token string">&quot; &quot;</span><span class="token punctuation">;</span>
      curNode <span class="token operator">=</span> curNode<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> result<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> linkedList <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LinkedList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="双向链表的实现" tabindex="-1"><a class="header-anchor" href="#双向链表的实现" aria-hidden="true">#</a> 双向链表的实现</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 双向链表的节点类（继承单向链表的节点类）</span>
<span class="token keyword">class</span> <span class="token class-name">DoublyNode</span> <span class="token keyword">extends</span> <span class="token class-name">Node</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">element</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>prev <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 双向链表类继承单向链表类</span>
<span class="token keyword">class</span> <span class="token class-name">DoublyLinkedList</span> <span class="token keyword">extends</span> <span class="token class-name">LinkedList</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>tail <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">append</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 1、创建双向链表节点</span>
    <span class="token keyword">const</span> newNode <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DoublyNode</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 2、追加元素</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">=</span> newNode<span class="token punctuation">;</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>tail <span class="token operator">=</span> newNode<span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token comment">//this.tail.next指向的就是新节点</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>tail<span class="token punctuation">.</span>next <span class="token operator">=</span> newNode<span class="token punctuation">;</span>
      newNode<span class="token punctuation">.</span>prev <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>tail<span class="token punctuation">;</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>tail <span class="token operator">=</span> newNode<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>length<span class="token operator">++</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),o=[e];function c(l,i){return s(),a("div",null,o)}const k=n(t,[["render",c],["__file","04_linkedList.html.vue"]]);export{k as default};
