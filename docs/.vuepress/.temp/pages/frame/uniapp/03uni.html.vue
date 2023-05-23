<template><div><h1 id="目录结构和配置" tabindex="-1"><a class="header-anchor" href="#目录结构和配置" aria-hidden="true">#</a> 目录结构和配置</h1>
<h2 id="_1-项目目录结构解析" tabindex="-1"><a class="header-anchor" href="#_1-项目目录结构解析" aria-hidden="true">#</a> 1 项目目录结构解析</h2>
<p><code v-pre>pages.json</code> 文件用来对 uni-app 进行全局配置，决定页面文件的路径、窗口样式、原生的导航栏、底部的原生tabbar 等</p>
<p><code v-pre>manifest.json</code> 文件是应用的配置文件，用于指定应用的名称、图标、权限等。</p>
<p><code v-pre>App.vue</code>是根组件，所有页面都是在<code v-pre>App.vue</code>下进行切换的，是页面入口文件，可以调用应用的生命周期函数。</p>
<p><code v-pre>main.js</code>是我们的项目入口文件，主要作用是初始化<code v-pre>vue</code>实例并使用需要的插件。</p>
<p><code v-pre>uni.scss</code>文件的用途是为了方便整体控制应用的风格。比如按钮颜色、边框风格，<code v-pre>uni.scss</code>文件里预置了一批scss变量预置。</p>
<p><code v-pre>unpackage</code> 就是打包目录，在这里有各个平台的打包文件。</p>
<p><code v-pre>pages</code> 所有的页面存放目录。</p>
<p><code v-pre>static</code> 静态资源目录，例如图片等。</p>
<p><code v-pre>components</code> 组件存放目录。</p>
<h2 id="_2-uni-app-开发规范" tabindex="-1"><a class="header-anchor" href="#_2-uni-app-开发规范" aria-hidden="true">#</a> 2 Uni-App 开发规范</h2>
<p>为了实现多端兼容，综合考虑编译速度、运行性能等因素，<code v-pre>uni-app</code> 约定了如下开发规范：</p>
<ul>
<li>页面文件遵循 <a href="https://vue-loader.vuejs.org/zh/spec.html" target="_blank" rel="noopener noreferrer">Vue 单文件组件 (SFC) 规范<ExternalLinkIcon/></a></li>
<li>组件标签靠近小程序规范，详见<a href="https://uniapp.dcloud.io/component/README" target="_blank" rel="noopener noreferrer">uni-app 组件规范<ExternalLinkIcon/></a></li>
<li>接口能力（JS API）靠近微信小程序规范，但需将前缀 <code v-pre>wx</code> 替换为 <code v-pre>uni</code>，详见<a href="https://uniapp.dcloud.io/api/README" target="_blank" rel="noopener noreferrer">uni-app接口规范<ExternalLinkIcon/></a></li>
<li>数据绑定及事件处理同 <code v-pre>Vue.js</code> 规范，同时补充了App及页面的生命周期</li>
<li>为兼容多端运行，建议使用 flex 布局进行开发</li>
</ul>
<h2 id="_3-全局配置和页面配置" tabindex="-1"><a class="header-anchor" href="#_3-全局配置和页面配置" aria-hidden="true">#</a> 3 全局配置和页面配置</h2>
<p>uniapp中的局配置和页面配置都在 pages.json 文件中进行配置，.json文件是一个对象 <code v-pre>{}</code></p>
<h3 id="_1-globalstyle" tabindex="-1"><a class="header-anchor" href="#_1-globalstyle" aria-hidden="true">#</a> 1 globalStyle</h3>
<p>通过 globalStyle 进行全局配置。用于设置应用的状态栏、导航条、标题、窗口背景色等。<a href="https://uniapp.dcloud.io/collocation/pages?id=globalstyle" target="_blank" rel="noopener noreferrer">详细文档<ExternalLinkIcon/></a></p>
<table>
<thead>
<tr>
<th>属性</th>
<th>类型</th>
<th>默认值</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>navigationBarBackgroundColor</td>
<td>HexColor</td>
<td>#F7F7F7</td>
<td>导航栏背景颜色（同状态栏背景色）</td>
</tr>
<tr>
<td>navigationBarTextStyle</td>
<td>String</td>
<td>white</td>
<td>导航栏标题颜色及状态栏前景颜色，仅支持 black/white</td>
</tr>
<tr>
<td>navigationBarTitleText</td>
<td>String</td>
<td></td>
<td>导航栏标题文字内容</td>
</tr>
<tr>
<td>backgroundColor</td>
<td>HexColor</td>
<td>#ffffff</td>
<td>窗口的背景色</td>
</tr>
<tr>
<td>backgroundTextStyle</td>
<td>String</td>
<td>dark</td>
<td>下拉 loading 的样式，仅支持 dark / light</td>
</tr>
<tr>
<td>enablePullDownRefresh</td>
<td>Boolean</td>
<td>false</td>
<td>是否开启下拉刷新，详见<a href="https://uniapp.dcloud.io/use?id=%e9%a1%b5%e9%9d%a2%e7%94%9f%e5%91%bd%e5%91%a8%e6%9c%9f" target="_blank" rel="noopener noreferrer">页面生命周期<ExternalLinkIcon/></a>。</td>
</tr>
<tr>
<td>onReachBottomDistance</td>
<td>Number</td>
<td>50</td>
<td>页面上拉触底事件触发时距页面底部距离，单位只支持px，详见<a href="https://uniapp.dcloud.io/use?id=%e9%a1%b5%e9%9d%a2%e7%94%9f%e5%91%bd%e5%91%a8%e6%9c%9f" target="_blank" rel="noopener noreferrer">页面生命周期<ExternalLinkIcon/></a></td>
</tr>
</tbody>
</table>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code> <span class="token property">"globalStyle"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">"navigationBarTextStyle"</span><span class="token operator">:</span> <span class="token string">"white"</span><span class="token punctuation">,</span>
  <span class="token property">"navigationBarTitleText"</span><span class="token operator">:</span> <span class="token string">"吃饭睡觉"</span><span class="token punctuation">,</span>
  <span class="token property">"navigationBarBackgroundColor"</span><span class="token operator">:</span> <span class="token string">"#aa0000"</span><span class="token punctuation">,</span>
  <span class="token property">"backgroundColor"</span><span class="token operator">:</span> <span class="token string">"#000000"</span><span class="token punctuation">,</span>
  <span class="token property">"app-plus"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
   <span class="token property">"background"</span><span class="token operator">:</span> <span class="token string">"#efeff4"</span>
  <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-新建页面" tabindex="-1"><a class="header-anchor" href="#_2-新建页面" aria-hidden="true">#</a> 2 新建页面</h3>
<p>右键 pages 新建 message 目录，在 message 目录下右键新建 .vue 文件，并选择基本模板。</p>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">></span></span>这是一条信息<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-pages" tabindex="-1"><a class="header-anchor" href="#_3-pages" aria-hidden="true">#</a> 3 pages</h3>
<p>通过 pages.json 来配置页面的路径和样式</p>
<table>
<thead>
<tr>
<th style="text-align:left">属性</th>
<th style="text-align:left">类型</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">path</td>
<td style="text-align:left">String</td>
<td>配置页面路径</td>
</tr>
<tr>
<td style="text-align:left">style</td>
<td style="text-align:left">Object</td>
<td>配置页面窗口表现，配置项参考 <a href="https://uniapp.dcloud.io/collocation/pages?id=style" target="_blank" rel="noopener noreferrer">pageStyle<ExternalLinkIcon/></a></td>
</tr>
</tbody>
</table>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code> <span class="token property">"pages"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
   <span class="token property">"path"</span><span class="token operator">:</span> <span class="token string">"pages/message/message"</span><span class="token punctuation">,</span>
   <span class="token property">"style"</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token property">"navigationBarTitleText"</span><span class="token operator">:</span> <span class="token string">"喝水"</span>
   <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
   <span class="token property">"path"</span><span class="token operator">:</span> <span class="token string">"pages/index/index"</span>
  <span class="token punctuation">}</span>
 <span class="token punctuation">]</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-tabbar" tabindex="-1"><a class="header-anchor" href="#_4-tabbar" aria-hidden="true">#</a> 4 tabBar</h3>
<p>配置 tabbar，如果应用是一个多 tab 应用，可以通过 tabBar 配置项指定 tab 栏的表现，以及 tab 切换时显示的对应页。</p>
<p><strong>Tips</strong>：</p>
<ul>
<li>当设置 position 为 top 时，将不会显示 icon</li>
<li>tabBar 中的 list 是一个数组，只能配置最少2个、最多5个 tab，tab 按数组的顺序排序。</li>
</ul>
<table>
<thead>
<tr>
<th>属性</th>
<th>类型</th>
<th>必填</th>
<th>默认值</th>
<th>描述</th>
<th>平台差异说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>color</td>
<td>HexColor</td>
<td>是</td>
<td></td>
<td>tab 上的文字默认颜色</td>
<td></td>
</tr>
<tr>
<td>selectedColor</td>
<td>HexColor</td>
<td>是</td>
<td></td>
<td>tab 上的文字选中时的颜色</td>
<td></td>
</tr>
<tr>
<td>backgroundColor</td>
<td>HexColor</td>
<td>是</td>
<td></td>
<td>tab 的背景色</td>
<td></td>
</tr>
<tr>
<td>borderStyle</td>
<td>String</td>
<td>否</td>
<td>black</td>
<td>tabbar 上边框的颜色，仅支持 black/white</td>
<td>App 2.3.4+ 支持其他颜色值</td>
</tr>
<tr>
<td>list</td>
<td>Array</td>
<td>是</td>
<td></td>
<td>tab 的列表，详见 list 属性说明，最少2个、最多5个 tab</td>
<td></td>
</tr>
<tr>
<td>position</td>
<td>String</td>
<td>否</td>
<td>bottom</td>
<td>可选值 bottom、top</td>
<td>top 值仅微信小程序支持</td>
</tr>
</tbody>
</table>
<p>其中 list 接收一个数组，数组中的每个项都是一个对象，其属性值如下：</p>
<table>
<thead>
<tr>
<th>属性</th>
<th>类型</th>
<th>必填</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>pagePath</td>
<td>String</td>
<td>是</td>
<td>页面路径，必须在 pages 中先定义</td>
</tr>
<tr>
<td>text</td>
<td>String</td>
<td>是</td>
<td>tab 上按钮文字，在 5+APP 和 H5 平台为非必填。例如中间可放一个没有文字的+号图标</td>
</tr>
<tr>
<td>iconPath</td>
<td>String</td>
<td>否</td>
<td>图片路径，icon 大小限制为40kb，建议尺寸为 81px * 81px，当 position 为 top 时，此参数无效，不支持网络图片，不支持字体图标</td>
</tr>
<tr>
<td>selectedIconPath</td>
<td>String</td>
<td>否</td>
<td>选中时的图片路径，icon 大小限制为40kb，建议尺寸为 81px * 81px ，当 position 为 top 时，此参数无效</td>
</tr>
</tbody>
</table>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token property">"tabBar"</span><span class="token operator">:</span><span class="token punctuation">{</span>
  <span class="token property">"color"</span><span class="token operator">:</span><span class="token string">"#1785FF"</span><span class="token punctuation">,</span>
  <span class="token property">"selectedColor"</span><span class="token operator">:</span><span class="token string">"#FF0000"</span><span class="token punctuation">,</span>
  <span class="token property">"position"</span><span class="token operator">:</span><span class="token string">"top"</span><span class="token punctuation">,</span>
  <span class="token property">"list"</span><span class="token operator">:</span><span class="token punctuation">[</span>
   <span class="token punctuation">{</span>
    <span class="token property">"text"</span><span class="token operator">:</span><span class="token string">"首页"</span><span class="token punctuation">,</span>
    <span class="token property">"pagePath"</span><span class="token operator">:</span> <span class="token string">"pages/index/index"</span><span class="token punctuation">,</span>
    <span class="token property">"iconPath"</span><span class="token operator">:</span><span class="token string">"static/c1.png"</span><span class="token punctuation">,</span>
    <span class="token property">"selectedIconPath"</span><span class="token operator">:</span><span class="token string">"static/c2.png"</span>
   <span class="token punctuation">}</span><span class="token punctuation">,</span>
   <span class="token punctuation">{</span>
    <span class="token property">"text"</span><span class="token operator">:</span><span class="token string">"信息"</span><span class="token punctuation">,</span>
    <span class="token property">"pagePath"</span><span class="token operator">:</span> <span class="token string">"pages/message/message"</span><span class="token punctuation">,</span>
    <span class="token property">"iconPath"</span><span class="token operator">:</span><span class="token string">"static/c3.png"</span><span class="token punctuation">,</span>
    <span class="token property">"selectedIconPath"</span><span class="token operator">:</span><span class="token string">"static/c4.png"</span>
   <span class="token punctuation">}</span><span class="token punctuation">,</span>
   <span class="token punctuation">{</span>
    <span class="token property">"text"</span><span class="token operator">:</span><span class="token string">"我们"</span><span class="token punctuation">,</span>
    <span class="token property">"pagePath"</span><span class="token operator">:</span> <span class="token string">"pages/contact/contact"</span><span class="token punctuation">,</span>
    <span class="token property">"iconPath"</span><span class="token operator">:</span><span class="token string">"static/c5.png"</span><span class="token punctuation">,</span>
    <span class="token property">"selectedIconPath"</span><span class="token operator">:</span><span class="token string">"static/c6.png"</span>
   <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-condition" tabindex="-1"><a class="header-anchor" href="#_5-condition" aria-hidden="true">#</a> 5 condition</h3>
<p>启动模式配置 condition，启动模式配置，仅开发期间生效，用于模拟直达页面的场景，如：小程序转发后，用户点击所打开的页面。</p>
<p><strong>属性说明：</strong></p>
<table>
<thead>
<tr>
<th>属性</th>
<th>类型</th>
<th>是否必填</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>current</td>
<td>Number</td>
<td>是</td>
<td>当前激活的模式，list节点的索引值</td>
</tr>
<tr>
<td>list</td>
<td>Array</td>
<td>是</td>
<td>启动模式列表</td>
</tr>
</tbody>
</table>
<p><strong>list说明：</strong></p>
<table>
<thead>
<tr>
<th>属性</th>
<th>类型</th>
<th>是否必填</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>name</td>
<td>String</td>
<td>是</td>
<td>启动模式名称</td>
</tr>
<tr>
<td>path</td>
<td>String</td>
<td>是</td>
<td>启动页面路径</td>
</tr>
<tr>
<td>query</td>
<td>String</td>
<td>否</td>
<td>启动参数，可在页面的 <a href="https://uniapp.dcloud.io/use?id=%e9%a1%b5%e9%9d%a2%e7%94%9f%e5%91%bd%e5%91%a8%e6%9c%9f" target="_blank" rel="noopener noreferrer">onLoad<ExternalLinkIcon/></a> 函数里获得</td>
</tr>
</tbody>
</table>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token property">"condition"</span><span class="token operator">:</span><span class="token punctuation">{</span>
  <span class="token property">"current"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token property">"list"</span><span class="token operator">:</span><span class="token punctuation">[</span>
   <span class="token punctuation">{</span>
    <span class="token property">"name"</span><span class="token operator">:</span><span class="token string">"详情页"</span><span class="token punctuation">,</span>
    <span class="token property">"path"</span><span class="token operator">:</span> <span class="token string">"pages/detail/detail"</span><span class="token punctuation">,</span>
    <span class="token property">"query"</span><span class="token operator">:</span><span class="token string">"id=80"</span>
   <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


