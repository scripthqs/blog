<template><div><h1 id="图片、框架、多媒体标签" tabindex="-1"><a class="header-anchor" href="#图片、框架、多媒体标签" aria-hidden="true">#</a> 图片、框架、多媒体标签</h1>
<h2 id="图片标签" tabindex="-1"><a class="header-anchor" href="#图片标签" aria-hidden="true">#</a> 图片标签</h2>
<p><code v-pre>&lt;img&gt;</code>是图像(image)的缩写，用于向当前界面引入图片，<code v-pre>&lt;img/&gt;</code>是一个自结束标签。</p>
<h3 id="img标签的属性" tabindex="-1"><a class="header-anchor" href="#img标签的属性" aria-hidden="true">#</a> <code v-pre>img</code>标签的属性</h3>
<ul>
<li><code v-pre>src</code>：引入图片的路径，src 是来源(source)的缩写。</li>
<li><code v-pre>alt</code>：对图片的描述。</li>
<li><code v-pre>title</code>：鼠标的悬停文本。</li>
<li><code v-pre>width、height</code>：宽度和高度，只设置一个图片会等比例缩放。
<ul>
<li>pc 端不建议修改图片的大小，最好是要多大的图片就裁多大。</li>
<li>移动端经常需要对图片进行缩放来保证清晰图。</li>
</ul>
</li>
<li><code v-pre>align</code> ：图片和周围文字的相对位置，可以是 bottom（默认值）、center、left、right、top 等</li>
</ul>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code>&lt;img src="相对路径或者绝对路径"alt="当图片无法显示时对图片的描述" / >
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code v-pre>&lt;img&gt;</code>这种元素属于替换元素，介于块和行内元素之间，具有两种元素的特性。</p>
<h3 id="图片的类型" tabindex="-1"><a class="header-anchor" href="#图片的类型" aria-hidden="true">#</a> 图片的类型</h3>
<ul>
<li><code v-pre>jpeg(jpg)</code>
<ul>
<li>支持的颜色比较丰富，不支持透明效果，不支持动图。</li>
<li>一般用于显示照片。</li>
</ul>
</li>
<li><code v-pre>gif</code>
<ul>
<li>支持的颜色比较少，支持简单的透明，支持动图。</li>
<li>颜色单一的动图。</li>
</ul>
</li>
<li><code v-pre>png</code>
<ul>
<li>支持的颜色丰富，支持复杂透明，不支持动图。</li>
<li>网页一般都选择这个格式。</li>
</ul>
</li>
<li><code v-pre>webp</code>
<ul>
<li>谷歌推出的专门用来网页图片的格式，具备所有优点，但是兼容性不太好。</li>
</ul>
</li>
<li><code v-pre>base64</code>
<ul>
<li>将图片使用 base64 进行编码，这样将图片转换成字符，通过字符形式来引入图片。</li>
<li>需要网页和图片一起加载时，用这种方法，比如网站的背景图片。</li>
</ul>
</li>
</ul>
<h2 id="框架标签" tabindex="-1"><a class="header-anchor" href="#框架标签" aria-hidden="true">#</a> 框架标签</h2>
<p><code v-pre>&lt;iframe&gt;</code>内联框架，用于向当前页面引入一个其他页面，跟图片标签<code v-pre>&lt;img&gt;</code>引入方式一样，不过<code v-pre>&lt;iframe&gt;</code>成对出现。
<code v-pre>&lt;iframe&gt;</code>基本属性：</p>
<ul>
<li><code v-pre>src</code>：指定要引入的路径</li>
</ul>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>iframe</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://www.qq.com<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>iframe</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li><code v-pre>frameborder</code>：指定内联框架的边框</li>
</ul>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>iframe</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://www.qq.com<span class="token punctuation">"</span></span> <span class="token attr-name">frameborder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>iframe</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li><code v-pre>width和height</code>：指定宽度和高度</li>
<li><code v-pre>scrolling=&quot;no&quot;</code>：是否需要滚动条。默认值是 true。</li>
</ul>
<p>内联框架的网页不会被搜索引擎检索到，对 SEO 没什么好处，使用较少。</p>
<h2 id="多媒体标签-html5" tabindex="-1"><a class="header-anchor" href="#多媒体标签-html5" aria-hidden="true">#</a> 多媒体标签(HTML5)</h2>
<p>多媒体包括音频<code v-pre>&lt;audio&gt;</code>和视频<code v-pre>&lt;video&gt;</code></p>
<h3 id="audio标签" tabindex="-1"><a class="header-anchor" href="#audio标签" aria-hidden="true">#</a> <code v-pre>audio</code>标签</h3>
<p><code v-pre>audio</code>标签向页面引入一个外部的音频文件，音视频文件引入时，默认情况下不允许用户自己控制播放停止。<code v-pre>audio</code>标签属性：</p>
<ul>
<li>controls：允许用户控制播放。</li>
<li>autoplay：音频文件自动播放，设置了 autoplay 打开音乐会自动播放，但是大部分浏览器不会对浏览器进行播放（IE 支持），但是有可能对用户体验不太好。</li>
<li>loop：循环播放。</li>
</ul>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>audio</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>xxx路径<span class="token punctuation">"</span></span> <span class="token attr-name">controls</span> <span class="token attr-name">autoplay</span> <span class="token attr-name">loop</span> <span class="token punctuation">/></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="video标签" tabindex="-1"><a class="header-anchor" href="#video标签" aria-hidden="true">#</a> <code v-pre>video</code>标签</h3>
<p><code v-pre>video</code>标签属性：</p>
<ul>
<li>controls：允许用户控制播放。</li>
<li>loop：循环播放。</li>
<li>muted：谷歌浏览器需要添加 muted 来解决自动播放的问题</li>
</ul>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>video</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>xxx路径<span class="token punctuation">"</span></span> <span class="token attr-name">controls</span> <span class="token attr-name">autoplay</span> <span class="token attr-name">muted</span> <span class="token attr-name">loop</span> <span class="token punctuation">/></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果要考虑 IE8 的兼容性，就需要加上<code v-pre>&lt;embed&gt;</code>标签。</p>
</div></template>


