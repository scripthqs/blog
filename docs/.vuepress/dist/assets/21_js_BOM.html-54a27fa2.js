import{_ as n,o as s,c as a,f as t}from"./app-68a897fb.js";const p={},o=t(`<h1 id="bom" tabindex="-1"><a class="header-anchor" href="#bom" aria-hidden="true">#</a> BOM</h1><p>JavaScript 基础分为三个部分：</p><ul><li>ECMAScript：JavaScript 的语法标准。包括变量、表达式、运算符、函数、if 语句、for 语句等。</li><li><strong>DOM</strong>：文档对象模型，操作<strong>网页上的元素</strong>的 API。比如让盒子移动、变色、轮播图等。</li><li><strong>BOM</strong>：浏览器对象模型，操作<strong>浏览器部分功能</strong>的 API。比如让浏览器自动滚动。</li></ul><h2 id="bom-简介" tabindex="-1"><a class="header-anchor" href="#bom-简介" aria-hidden="true">#</a> BOM 简介</h2><p>浏览器对象模型（Browser Object Model），操作浏览器部分功能的 API。比如让浏览器自动滚动。</p><ul><li>BOM 可以让我们通过 JS 来操作浏览器。</li><li>BOM 为我们提供了一些对象，来完成对浏览器的操作。</li></ul><p><strong>BOM 结构图：</strong></p><p><img src="https://raw.githubusercontent.com/scripthqs/assets/master/blog/BOM.png" alt="BOM"></p><ul><li><strong>window 对象是 BOM 的顶层(核心)对象</strong>，所有对象都是通过它延伸出来的，也可以称为 window 的子对象。</li><li>DOM 也是 BOM 的一部分。</li></ul><p>常用的 BOM 对象：</p><ul><li><code>window</code>代表整个浏览器窗口，同时该对象也是网页中的全局对象。</li><li><code>navigator</code>代表当前浏览器的信息，通过该对象可以识别不同的浏览器。</li><li><code>location</code>代表当前浏览器的地址栏信息，通过该对象可以获取地址栏信息，或者操作浏览器跳转页面。</li><li><code>history</code>代表浏览器的历史记录，通过该对象可以操作浏览器的历史记录。 <ul><li>由于隐私原因，该对象不能获取到具体的历史记录，只能操作浏览器向前或向后翻页</li><li>该操作只在当次访问时有效。</li></ul></li><li><code>screen</code>代表用户的屏幕信息，通过该对象可以获取到用户显示器的相关信息。</li></ul><p>这些对象都是作为<code>window</code>对象的属性保存的，可以通过<code>window</code>对象来使用，也可以直接使用。</p><h2 id="window" tabindex="-1"><a class="header-anchor" href="#window" aria-hidden="true">#</a> window</h2><ul><li><strong>window 对象是 JavaScript 中的顶级对象</strong>。</li><li>全局变量、自定义函数也是 window 对象的属性和方法。</li><li>window 对象下的属性和方法调用时，可以省略 window。</li></ul><p>浏览器的三种弹窗，都是 window 的方法：alert()是 window.alert()的简写</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">alert</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">confirm</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">prompt</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1、打开窗口：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>window<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> target<span class="token punctuation">,</span> param<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>参数解释：</strong></p><ul><li>url：要打开的地址。</li><li>target：新窗口的位置。可以是：<code>_blank</code> 、<code>_self</code>、 <code>_parent</code> 父框架。</li><li>param：新窗口的一些设置。</li><li>返回值：新窗口的句柄。</li></ul><p><strong>param</strong>这个参数，可以填各种各样的参数（），比如：</p><ul><li>name：新窗口的名称，可以为空</li><li>features：属性控制字符串，在此控制窗口的各种属性，属性之间以逗号隔开。</li><li>fullscreen= { yes/no/1/0 } 是否全屏，默认 no</li><li>channelmode= { yes/no/1/0 } 是否显示频道栏，默认 no</li><li>toolbar= { yes/no/1/0 } 是否显示工具条，默认 no</li><li>location= { yes/no/1/0 } 是否显示地址栏，默认 no。（有的浏览器不一定支持）</li><li>directories = { yes/no/1/0 } 是否显示转向按钮，默认 no</li><li>status= { yes/no/1/0 } 是否显示窗口状态条，默认 no</li><li>menubar= { yes/no/1/0 } 是否显示菜单，默认 no</li><li>scrollbars= { yes/no/1/0 } 是否显示滚动条，默认 yes</li><li>resizable= { yes/no/1/0 } 是否窗口可调整大小，默认 no</li><li>width=number 窗口宽度（像素单位）</li><li>height=number 窗口高度（像素单位）</li><li>top=number 窗口离屏幕顶部距离（像素单位）</li><li>left=number 窗口离屏幕左边距离（像素单位）</li></ul><p>各个参数之间用逗号隔开就行，但我们最好是把它们统一放到 json 里。</p><p>2、关闭窗口：window.close()</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>窗口<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>javascript:;<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>点击我打开一个新的页面<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>javascript:;<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>点击我关闭本页面<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
      <span class="token keyword">var</span> a1 <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementsByTagName</span><span class="token punctuation">(</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
      <span class="token keyword">var</span> a2 <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementsByTagName</span><span class="token punctuation">(</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
      a1<span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">var</span> json <span class="token operator">=</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;helloworld&quot;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">fullscreen</span><span class="token operator">:</span> <span class="token string">&quot;no&quot;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">location</span><span class="token operator">:</span> <span class="token string">&quot;no&quot;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">&quot;100px&quot;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token string">&quot;100px&quot;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">top</span><span class="token operator">:</span> <span class="token string">&quot;100px&quot;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token string">&quot;100px&quot;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token comment">//新窗口 = window.open(地址,是否开新窗口,新窗口的各种参数);</span>
        window<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">&quot;http://www.baidu.com&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;_blank&quot;</span><span class="token punctuation">,</span> json<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">;</span>
      a2<span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//关闭本页面</span>
        window<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">;</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="location" tabindex="-1"><a class="header-anchor" href="#location" aria-hidden="true">#</a> location</h2><p><code>window.location</code>可以简写成 location。location 相当于浏览器地址栏，可以将 url 解析成独立的片段。</p><ul><li><code>location.href</code>获取当前页面的 url 路径（或者设置 url 路径） <ul><li><code>location.href = &#39;https://www.xxx.com&#39;;</code>设置 url 路径</li></ul></li><li><code>location.assign(str);</code>用来跳转到其他的页面，作用和直接修改<code>location.href</code>一样。</li><li><code>location.reload();</code>用于重新加载当前页面，作用和「刷新按钮」一样。 <ul><li>在该方法的参数中传递一个 true，则会强制清空缓存刷新页面。</li></ul></li><li><code>location.replace();</code>使用一个新的页面替换当前页面，调用完毕也会跳转页面。但不会生成历史记录，不能使用「后退按钮」后退。</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//5秒后自动跳转到百度。</span>
<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  location<span class="token punctuation">.</span>href <span class="token operator">=</span> <span class="token string">&quot;http://www.baidu.com&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">5000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="navigator" tabindex="-1"><a class="header-anchor" href="#navigator" aria-hidden="true">#</a> navigator</h2><p><code>navigator.userAgent</code>可以获取浏览器的信息。</p><ul><li>我们还可以在电脑浏览器的控制台里可以添加很多设备，通过这种方式，可以模拟移动端浏览器的场景。</li><li>打开控制台-&gt;切换成移动端-&gt;点击 edit 编辑 userAgent</li></ul><p><code>navigator.platform</code>可以获取浏览器支持的系统</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>navigator<span class="token punctuation">.</span>userAgent<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>navigator<span class="token punctuation">.</span>platform<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code>navigator.geolocation</code>可以获取用户设备的地理位置</p><p>获取用户地理位置信息需要得到用户的明确授权，因此在使用该 API 时，应该尊重用户的隐私权，清楚告知用户使用他们的位置信息的目的，并且只在必要的情况下获取用户的地理位置信息。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>navigator<span class="token punctuation">.</span>geolocation<span class="token punctuation">.</span><span class="token function">getCurrentPosition</span><span class="token punctuation">(</span>
  <span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;获取位置成功:&quot;</span><span class="token punctuation">,</span> res<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;获取位置失败:&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">enableHighAccuracy</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//尽可能使用最准确的位置源获取位置信息</span>
    <span class="token literal-property property">timeout</span><span class="token operator">:</span> <span class="token number">5000</span><span class="token punctuation">,</span>
    <span class="token literal-property property">maximumAge</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="history" tabindex="-1"><a class="header-anchor" href="#history" aria-hidden="true">#</a> history</h2><ul><li><code>history.length</code>获取浏览器历史列表中的 url 数量。注意，只是统计当次的数量，如果浏览器关了，数量会重置为 1。</li><li><code>history.back();</code>用来回退到上一个页面，作用和浏览器的回退按钮一样。</li><li><code>history.forward();</code>用来跳转下一个页面，作用和浏览器的「前进按钮」一样。</li><li><code>history.go( int n);</code>需要整数作为参数。 <ul><li>向前/向后跳转 n 个页面</li><li>n&gt;0，向前跳转 n 个页面</li><li>n=0，刷新当前页面</li><li>n&lt;0，向后跳转 n 个页面</li></ul></li></ul>`,39),e=[o];function l(c,i){return s(),a("div",null,e)}const r=n(p,[["render",l],["__file","21_js_BOM.html.vue"]]);export{r as default};
