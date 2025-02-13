import{_ as t,r as p,o as i,c as l,b as n,e as s,d as c,f as a}from"./app-f4e03468.js";const o={},u=a(`<h1 id="移动端布局" tabindex="-1"><a class="header-anchor" href="#移动端布局" aria-hidden="true">#</a> 移动端布局</h1><h2 id="meta" tabindex="-1"><a class="header-anchor" href="#meta" aria-hidden="true">#</a> meta</h2><p>移动端布局时，需要使用 meta 标签调整合适的视口。</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width=device-width, initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0,user-scalable=no<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>width：宽度设置的 viewport 宽度，可以设置 device-width 特殊值</li><li>initial-scale：初始缩放比例，大于 0 的数字</li><li>maximum-scale：最大缩放比，大于 0 的数字</li><li>minimum-scale：最小缩放比，大于 0 的数字</li><li>user-scalable：用户是否可以缩放，yes 或 no(1 或 0)</li></ul><h2 id="移动端像素" tabindex="-1"><a class="header-anchor" href="#移动端像素" aria-hidden="true">#</a> 移动端像素</h2><p>不同的屏幕，单位像素的大小是不同的，像素越小，屏幕越清晰。智能手机的像素点远远小于计算机的像素点。</p><p>物理像素就是分辨率，是屏幕最小的颗粒</p><ul><li>默认情况下移动端的网页都会将视口设置为 980 像素（css 像素），确保 PC 端网页可以在移动端正常访问。如果网页的宽度超过了 980，移动端的浏览器会自动对网页缩放以完整显示网页。此时像素比：980/移动端宽度</li><li>基本上大部分 PC 端网页都可以在移动端中正常浏览，但是往往都不会有一个好的体验。</li><li>为了解决这个问题，大部分网站都会为移动端专门设计一个网站</li></ul><h2 id="多倍图" tabindex="-1"><a class="header-anchor" href="#多倍图" aria-hidden="true">#</a> 多倍图</h2><ul><li>编写移动端时，必须确保有一个比较合理的像素比，一般 1：2/3 <ul><li>1 个 css 像素对应 2 个/ 3 个物理像素</li></ul></li><li>每一个移动设备都有一个最佳像素比，此时这个视口就称为完美视口。</li><li>不同的设备完美视口不一样，所有同样的 375 个像素，在不同的设备下，意义是不一样的。所以在移动端开发时，就不能使用 px 来布局了</li></ul><p>为了让图片更加清晰，在实际开发中，移动端往往需要使用 2 倍图/3 倍图。</p><h2 id="background-size" tabindex="-1"><a class="header-anchor" href="#background-size" aria-hidden="true">#</a> background-size</h2><p>background-size 属性规定背景图像的尺寸</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">background-size</span><span class="token punctuation">:</span> 500px 500px<span class="token punctuation">;</span> <span class="token comment">/* 设置图片宽、高的具体数值 */</span>
<span class="token property">background-size</span><span class="token punctuation">:</span> 50% 50%<span class="token punctuation">;</span> <span class="token comment">/* 宽高的百分比（相对于容器的大小）*/</span>
<span class="token property">background-size</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
<span class="token property">background-size</span><span class="token punctuation">:</span> cover<span class="token punctuation">;</span> <span class="token comment">/* 图片始终填充满容器，且保证长宽比不变。图片如果有超出部分，则超出部分会被隐藏。 */</span>
<span class="token property">background-size</span><span class="token punctuation">:</span> contain<span class="token punctuation">;</span> <span class="token comment">/* 图片完整地显示在容器中，且保证长宽比不变。可能会导致容器的部分区域为空白。*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用这个属性可以将多倍图进行缩放。</p><h2 id="移动端主流方案" tabindex="-1"><a class="header-anchor" href="#移动端主流方案" aria-hidden="true">#</a> 移动端主流方案</h2><ol><li><p><strong>单独制作移动端页面（主流）</strong></p><p>通常情况下，网址域名前面加 m（mobile）可以打开移动端。通过判断设备，如果是移动设备打开，则跳到移动端页面。</p><ul><li>流式布局（百分比布局）</li><li>flex 弹性布局（推荐）</li><li>less + rem + 媒体查询布局</li><li>混合布局</li></ul></li><li><p><strong>响应式页面兼容移动端</strong></p></li></ol><p>通过判断屏幕宽度来改变样式，以适应不同终端。</p><ul><li>媒体查询</li><li>Bootstrap</li></ul><h2 id="移动端布局问题" tabindex="-1"><a class="header-anchor" href="#移动端布局问题" aria-hidden="true">#</a> 移动端布局问题</h2><p>移动端浏览器基本以 webkit 内核为主，因此我们就需要考虑 webkit 兼容性问题。</p>`,22),d=n("li",null,[n("p",null,"浏览器私有前缀考虑添加 webkit。")],-1),r={href:"https://github.com/necolas/normalize.css",target:"_blank",rel:"noopener noreferrer"},k=a(`<li><p>一般使用 border-box 盒模型</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span> <span class="token comment">/*设置padding和border不再撑大盒子*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>此时，width 和 height 用来设置内容区 content + padding + border 和的大小。即<strong>设置 padding 和 border 不再撑大盒子</strong></p></li>`,1),v=a(`<h2 id="rem" tabindex="-1"><a class="header-anchor" href="#rem" aria-hidden="true">#</a> rem</h2><p>rem（root em）是一个相对单位，类似于 em，em 是父元素字体的大小。不同的是 rem 的基准是相对于 html 元素的字体大小。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.container</span> <span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 15px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.box</span> <span class="token punctuation">{</span>
  <span class="token comment">/* font-size: 20px; */</span>
  <span class="token comment">/* 如果自己没有设置, 那么会继承父元素的font-size */</span>

  <span class="token comment">/* 
      如果font-size中有写em单位, 可以理解成相对于父元素
      但是更准确的理解依然是相对于自己的
       */</span>
  <span class="token comment">/* font-size: 1em; */</span>

  <span class="token comment">/* 1.em: 相对自己的font-size */</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 10em<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 5em<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> orange<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* &lt;div class=&quot;container&quot;&gt;
    &lt;div class=&quot;box&quot;&gt;我是box&lt;/div&gt;
  &lt;/div&gt; */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="媒体查询" tabindex="-1"><a class="header-anchor" href="#媒体查询" aria-hidden="true">#</a> 媒体查询</h2><ul><li>使用媒体查询（media query）可以根据不同的媒体类型定义不同的样式</li><li>@media 可以针对不同的屏幕尺寸设置不同的样式</li><li>当重置浏览器大小的过程中，页面也会根据浏览器的宽度和高度重新渲染页面</li></ul><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token atrule"><span class="token rule">@media</span> mediatype <span class="token keyword">and</span>|<span class="token keyword">not</span>|<span class="token keyword">only</span> <span class="token punctuation">(</span>media feature<span class="token punctuation">)</span></span><span class="token punctuation">{</span>
    css-code<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>@media 开头 注意@符号</li><li>mediatype 媒体类型</li><li>关键字 and not only</li><li>media feature 媒体特性 必须有小括号包含</li></ul><h3 id="mediatype" tabindex="-1"><a class="header-anchor" href="#mediatype" aria-hidden="true">#</a> mediatype</h3><p>将不同的终端设备划分成不同的类型。称为媒体类型</p><ul><li>all：用于所有设备</li><li>print：用于打印机和打印预览</li><li>screen：用于电脑屏幕、平板电脑、智能手机</li></ul><h3 id="关键字" tabindex="-1"><a class="header-anchor" href="#关键字" aria-hidden="true">#</a> 关键字</h3><p>关键字将媒体类型或多个媒体特性连接到一起作为媒体查询的条件。</p><ul><li>and：可以将多个媒体特性连接到一起，相当于“且”</li><li>not：排除某个媒体特性，相当于“非”，可以省略</li><li>only：指定某个特定的媒体类型，可以省略</li></ul><h3 id="媒体查询用法" tabindex="-1"><a class="header-anchor" href="#媒体查询用法" aria-hidden="true">#</a> 媒体查询用法</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* @import是可以和媒体查询结合来使用 */</span>
<span class="token atrule"><span class="token rule">@import</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>./css/body_bgc.css<span class="token punctuation">)</span></span> <span class="token punctuation">(</span><span class="token property">max-width</span><span class="token punctuation">:</span> 800px<span class="token punctuation">)</span><span class="token punctuation">;</span></span>

<span class="token comment">/* link元素可以配合媒体查询 */</span>
&lt;link rel=<span class="token string">&quot;stylesheet&quot;</span> media=<span class="token string">&quot;screen and (max-width: 800px)&quot;</span> href=<span class="token string">&quot;./css/body_bgc.css&quot;</span> &gt; @media 

<span class="token comment">/* @media 可以针对不同的屏幕尺寸设置不同的样式 */</span>
<span class="token selector">(max-width: 800px)</span> <span class="token punctuation">{</span>
  <span class="token selector">body</span> <span class="token punctuation">{</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> orange<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token atrule"><span class="token rule">@media</span> screen</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 媒体查询可以使用逻辑运算符号 */</span>
<span class="token atrule"><span class="token rule">@media</span> <span class="token punctuation">(</span><span class="token property">min-width</span><span class="token punctuation">:</span> 500px<span class="token punctuation">)</span> <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">max-width</span><span class="token punctuation">:</span> 800px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
  <span class="token selector">body</span> <span class="token punctuation">{</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> orange<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="font-size-配合媒体查询" tabindex="-1"><a class="header-anchor" href="#font-size-配合媒体查询" aria-hidden="true">#</a> font-size 配合媒体查询</h2><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token atrule"><span class="token rule">@media</span> screen <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">min-width</span><span class="token punctuation">:</span> 320px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
  <span class="token selector">html</span> <span class="token punctuation">{</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token atrule"><span class="token rule">@media</span> screen <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">min-width</span><span class="token punctuation">:</span> 375px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
  <span class="token selector">html</span> <span class="token punctuation">{</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 24px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token atrule"><span class="token rule">@media</span> screen <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">min-width</span><span class="token punctuation">:</span> 414px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
  <span class="token selector">html</span> <span class="token punctuation">{</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 28px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token atrule"><span class="token rule">@media</span> screen <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">min-width</span><span class="token punctuation">:</span> 480px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
  <span class="token selector">html</span> <span class="token punctuation">{</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 32px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token selector">.box</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 5rem<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 5rem<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> orange<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="js-动态计算" tabindex="-1"><a class="header-anchor" href="#js-动态计算" aria-hidden="true">#</a> js 动态计算</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 1.获取html的元素</span>
<span class="token keyword">const</span> htmlEl <span class="token operator">=</span> document<span class="token punctuation">.</span>documentElement<span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">setRemUnit</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 2.获取html的宽度(视口的宽度)</span>
  <span class="token keyword">const</span> htmlWidth <span class="token operator">=</span> htmlEl<span class="token punctuation">.</span>clientWidth<span class="token punctuation">;</span>
  <span class="token comment">// 3.根据宽度计算一个html的font-size的大小</span>
  <span class="token keyword">const</span> htmlFontSize <span class="token operator">=</span> htmlWidth <span class="token operator">/</span> <span class="token number">10</span><span class="token punctuation">;</span>
  <span class="token comment">// 4.将font-size设置到html上</span>
  htmlEl<span class="token punctuation">.</span>style<span class="token punctuation">.</span>fontSize <span class="token operator">=</span> htmlFontSize <span class="token operator">+</span> <span class="token string">&quot;px&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// 保证第一次进来时, 可以设置一次font-size</span>
<span class="token function">setRemUnit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 当屏幕尺寸发生变化时, 实时来修改html的font-size</span>
window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&quot;resize&quot;</span><span class="token punctuation">,</span> setRemUnit<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="适配方案-vw" tabindex="-1"><a class="header-anchor" href="#适配方案-vw" aria-hidden="true">#</a> 适配方案 vw</h2><p>vw 相比于 rem 的优势：</p><ol><li>不需要去计算 html 的 font-size 大小，也不需要给 html 设置这样一个 font-size；</li><li>不会因为设置 html 的 font-size 大小，而必须给 body 再设置一个 font-size，防止继承；</li><li>因为不依赖 font-size 的尺寸，所以不用担心某些原因 html 的 font-size 尺寸被篡改，页面尺寸混乱；</li><li>vw 相比于 rem 更加语义化，1vw 刚才是 1/100 的 viewport 的大小;</li><li>可以具备 rem 之前所有的优点；</li></ol><p>如何转换成 vw</p><ol><li><p>手动计算</p><ul><li>1 个在 375px 屏幕上，100px 宽度和高度的盒子</li><li>将 100px 转成对应的 vw 值</li><li>100/3.75=26.667，其他也是相同的方法计算即可</li></ul></li><li><p>less/scss 函数</p><div class="language-less line-numbers-mode" data-ext="less"><pre class="language-less"><code><span class="token variable">@vwUnit<span class="token punctuation">:</span></span> 3.75<span class="token punctuation">;</span>
<span class="token selector">.pxToVw(<span class="token variable">@px</span>)</span> <span class="token punctuation">{</span>
  <span class="token property">result</span><span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token variable">@px</span> <span class="token operator">/</span> <span class="token variable">@vwUnit</span><span class="token punctuation">)</span> <span class="token operator">*</span> 1vw<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.box</span><span class="token punctuation">{</span>
 <span class="token property">width</span><span class="token punctuation">:</span>.<span class="token property">pxToVw</span><span class="token punctuation">:</span><span class="token punctuation">(</span>100<span class="token punctuation">)</span>[result]<span class="token punctuation">;</span>
 height.<span class="token property">pxToVw</span><span class="token punctuation">:</span><span class="token punctuation">(</span>100<span class="token punctuation">)</span>[result]
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>px to vw 插件</p></li></ol><h2 id="让页面占满屏幕" tabindex="-1"><a class="header-anchor" href="#让页面占满屏幕" aria-hidden="true">#</a> 让页面占满屏幕</h2><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.top-page</span> <span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
  <span class="token property">z-index</span><span class="token punctuation">:</span> 9<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100vh<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
  <span class="token property">overflow-y</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,26);function m(b,h){const e=p("ExternalLinkIcon");return i(),l("div",null,[u,n("ul",null,[d,n("li",null,[n("p",null,[s("移动端 css 初始化推荐使用 "),n("a",r,[s("normalize.css"),c(e)]),s(" 重置样式表")])]),k]),v])}const x=t(o,[["render",m],["__file","17_mobile.html.vue"]]);export{x as default};
