<template><div><h1 id="大屏可视化" tabindex="-1"><a class="header-anchor" href="#大屏可视化" aria-hidden="true">#</a> 大屏可视化</h1>
<p>在开发网页时，适配最多的屏幕尺寸是：</p>
<ul>
<li>PC 端电脑：<code v-pre>1920px * 1080px</code> （当然也有少部分电脑是支持输出 4k 屏， 比如：小米笔记本等）</li>
<li>移动设备： <code v-pre>750px * auto</code></li>
</ul>
<p>什么是大屏设备</p>
<ul>
<li>在我们的生活中，经常会见到一些比较大的屏幕，比如：指挥大厅、展厅、展会中的大屏。这些设备就可以称之为大屏设备</li>
<li><code v-pre>1920*1080</code> 和 <code v-pre>3840*2160</code>（4k 屏 ）也可以说是属于大屏</li>
</ul>
<p>大屏的硬件设备的常见分类：</p>
<ul>
<li>拼接屏：拼接屏就是很多屏幕按照一定拼接方式拼接而成</li>
<li>LED 屏</li>
<li>投影</li>
</ul>
<h2 id="定设计稿尺寸" tabindex="-1"><a class="header-anchor" href="#定设计稿尺寸" aria-hidden="true">#</a> 定设计稿尺寸</h2>
<p>拼接屏尺寸：</p>
<ul>
<li>设计可以按照横竖计算后的总和作为设计尺寸，但是尺寸不能过大，会造成卡顿</li>
<li>正常设计建议最好是保持在 4K(<code v-pre>3840*2160</code>) 内</li>
<li>保持大屏的比例等比缩放即可</li>
<li>注：最好是按照硬件的输出分辨率设计（关键），因为按照输出分辨率设计，一定不会出错</li>
</ul>
<p>LED 屏：</p>
<ul>
<li>LED 大屏是由若干单体屏幕模块组成的，规格很多，但是规格计算方法相同</li>
<li>我们用单体为 <code v-pre>500 * 500</code> 的作为标准计算，每个单体模块像素点横竖都为 128px</li>
<li>如图横向 12 块竖向 6 块，横向像素为 <code v-pre>128*12=1536px</code>，竖向 <code v-pre>128*6=768px</code>。可以使用横竖总像素去设计</li>
<li>如果超过 4K 像素时可以等比缩放，建议尽量保持在 4k 及以下</li>
</ul>
<p>移动端大屏：</p>
<ul>
<li>基本按照实际尺寸设计即可</li>
<li><code v-pre>750px * Auto</code>，设计搞尺寸 ： <code v-pre>750px * Auto</code> 。</li>
</ul>
<p>总结：</p>
<ul>
<li>设计尺寸建议按照输出分辨率设计（重点）</li>
<li>拼接后像素在 4k 左右直接按照总和设计就行</li>
<li>总和设计建议不要超过 4k，可以按比例缩小设计搞（非固定，超过也是可以，只是建议）</li>
<li>特殊尺寸，需到现场调试最佳设计搞的尺寸</li>
<li>不能一稿既适配电脑也适配各种尺寸大屏，应该优先考虑目标屏幕的适配，要针对性设计，而在小屏根据等比例缩放显示，这才是最佳的解决方法</li>
</ul>
<h2 id="大屏适配方案" tabindex="-1"><a class="header-anchor" href="#大屏适配方案" aria-hidden="true">#</a> 大屏适配方案</h2>
<p>大屏的适配方案：</p>
<ol>
<li>
<p>百分比设置</p>
<ul>
<li>因为不同属性的百分比值，相对的可能是不同参照物，所以百分比往往很难统一</li>
<li>所以百分比在移动端适配和大屏适配中使用都比较少</li>
</ul>
</li>
<li>
<p>rem 单位 + 动态设置 html 的 font-size</p>
</li>
<li>
<p>vw 单位</p>
</li>
<li>
<p>flex 弹性布局；</p>
</li>
<li>
<p>scale 等比例缩放（推荐）</p>
</li>
</ol>
<h2 id="新建大屏" tabindex="-1"><a class="header-anchor" href="#新建大屏" aria-hidden="true">#</a> 新建大屏</h2>
<p>先来创建几个大屏设备，这样可以方便我们学习和测试。</p>
<ol>
<li>在 chrome 浏览器中，打开 DevTools 页面</li>
<li>在选择设备下拉栏中，点击最后一个选项 Edit</li>
<li>然后在 Emulated Devices 中点击 Add custom device</li>
<li>最后在 Device 面板中输入设备信息，并点击 Add 按钮完成设备的新建。</li>
<li>这里分别新建：<code v-pre>1920*1080</code> 、 <code v-pre>3840* 2160</code> 、 <code v-pre>7680 * 2160</code></li>
</ol>
<h2 id="rem-font-size-方案" tabindex="-1"><a class="header-anchor" href="#rem-font-size-方案" aria-hidden="true">#</a> rem + font-size 方案</h2>
<p>动态设置 HTML 根字体大小 和 body 字体大小（lib_flexible.js）</p>
<ol>
<li>将设计稿的宽（1920）平均分成 24 等份，每一份为 80px</li>
<li>HTML 字体大小就设置为 80 px，即 1rem = 80px， 24rem = 1920px</li>
<li>body 字体大小设置为 16px</li>
<li>安装 cssrem 插件， root font size 设置为 80px。这个是 px 单位转 rem 的参考值
<ul>
<li>px 转 rem 方式：手动、less/scss 函数、cssrem 插件、webpack 插件、Vite 插件</li>
</ul>
</li>
<li>接着就可以按照 <code v-pre>1920px * 1080px</code> 的设计稿愉快开发，此时的页面已经是响应式，并且宽高比不变</li>
</ol>
<h2 id="vm-方案" tabindex="-1"><a class="header-anchor" href="#vm-方案" aria-hidden="true">#</a> vm 方案</h2>
<ol>
<li>
<p>屏幕的宽默认为 100vw，那么 100vw = 1920px, 1vw = 19.2px</p>
</li>
<li>
<p>安装 cssrem 插件， body 的宽高（<code v-pre>1920px * 1080px</code>）直接把 px 单位转 vw 单位</p>
<ul>
<li>px 转 vw 方式：手动、less/scss 函数、cssrem 插件、webpack 插件、Vite 插件</li>
</ul>
</li>
<li>
<p>接着就可以按照 <code v-pre>1920px * 1080px</code> 的设计稿愉快开发，此时的页面已经是响应式，并宽高比不变</p>
</li>
</ol>
<h2 id="scale-方案-推荐" tabindex="-1"><a class="header-anchor" href="#scale-方案-推荐" aria-hidden="true">#</a> scale 方案（推荐）</h2>
<p>使用 CSS3 中的 scale 函数来缩放网页，这里我们将使用两种方式来实现：</p>
<ol>
<li>方式一：直接根据宽度的比率进行缩放（宽度比率=网页当前宽 / 设计稿宽）</li>
<li>方式二：动态计算网页宽高比，决定是是否按照宽度的比率进行缩放</li>
</ol>
</div></template>


