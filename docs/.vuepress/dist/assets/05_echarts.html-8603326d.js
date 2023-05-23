import{_ as p,r as o,o as l,c as i,d as n,e as s,b as t,f as e}from"./app-68a897fb.js";const c={},r=n("h1",{id:"echarts",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#echarts","aria-hidden":"true"},"#"),s(" ECharts")],-1),u=n("h2",{id:"echarts-简介",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#echarts-简介","aria-hidden":"true"},"#"),s(" ECharts 简介")],-1),d=n("p",null,"ECharts 是百度公司开源的一个使用 JavaScript 实现的开源可视化库，兼容性强，底层依赖矢量图形库 ZRender ，提供直观，交互丰富，可高度个性化定制的数据可视化图表。",-1),k={href:"https://echarts.apache.org/zh/index.html",target:"_blank",rel:"noopener noreferrer"},v=e(`<ul><li>开源免费</li><li>功能丰富</li><li>多种数据的支持</li><li>移动端的优化</li><li>跨平台</li></ul><p>ECharts 能够做出各种各样漂亮的图表，它能满足绝大多数可视化图表的实现。它的兼容性强, 使用方便，功能强大, 是实现数据可视化的最佳选择之一。</p><h2 id="echarts-基本使用" tabindex="-1"><a class="header-anchor" href="#echarts-基本使用" aria-hidden="true">#</a> Echarts 基本使用</h2><p>引入 ECharts 的方法</p><ol><li>通过 npm 获取 echarts，<code>npm install echarts --save</code></li><li>通过 jsDelivr 等 CDN 引入</li></ol><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!-- 4.ECharts 的容器( 必须要有高度,宽度是可选的 ) --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>main<span class="token punctuation">&quot;</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">height</span><span class="token punctuation">:</span> 400px</span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  window<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 1.基于准备好的dom，初始化 echarts实例</span>
    <span class="token keyword">let</span> myChart <span class="token operator">=</span> echarts<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&quot;main&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 2.指定图表的配置项和数据</span>
    <span class="token keyword">let</span> option <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">xAxis</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;衬衫&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;羊毛衫&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;雪纺衫&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;裤子&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;高跟鞋&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;袜子&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">yAxis</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">series</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;bar&quot;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">36</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token comment">// 3.使用刚指定的配置项和数据显示图表。</span>
    myChart<span class="token punctuation">.</span><span class="token function">setOption</span><span class="token punctuation">(</span>option<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>一个图表最终呈现什么样子，完全取决于这个<strong>配置项</strong>，所以对于不同的图表, 除了<strong>配置项会发生改变</strong>之外，其他的代码都是<strong>固定不变</strong>的。</p><h2 id="echarts-渲染器" tabindex="-1"><a class="header-anchor" href="#echarts-渲染器" aria-hidden="true">#</a> ECharts 渲染器</h2><p>ECharts 的默认渲染器是 canvas，可以切换成 svg</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 切换为svg的渲染器( 默认是canvas )</span>
<span class="token keyword">let</span> myChart <span class="token operator">=</span> echarts<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&quot;main&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">renderer</span><span class="token operator">:</span> <span class="token string">&quot;svg&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Canvas 更适合绘制图形元素数量较多的图表，热力图、坐标图、大规模线图等</li><li>Svg 内存占用更低、适配性、扩展性性好，放大缩小图表不会模糊，除非数据量较大，不然建议 svg</li></ul><h2 id="option-配置项-组件" tabindex="-1"><a class="header-anchor" href="#option-配置项-组件" aria-hidden="true">#</a> option 配置项(组件)</h2><p>配置项不同就生成不同的图形，常用的配置项：</p><ul><li>grid：直接坐标系绘图区域</li><li>yAxis：直角坐标系 grid 中的 y 轴</li><li>xAxis：直角坐标系 grid 中的 x 轴</li><li>title ：图表的标题</li><li>legend：图例，展现了不同系列的标记、颜色和名字</li><li>tooltip：提示框</li><li>toolbox：工具栏，提供操作图表的工具</li><li>series：系列，配置系列图表的类型和图形信息数据</li><li>visualMap：视觉映射，可以将数据值映射到图形的形状、大小、颜色等</li><li>geo：地理坐标系组件。用于地图的绘制，支持在地理坐标系上绘制散点图，线集。</li></ul><h2 id="grid-配置" tabindex="-1"><a class="header-anchor" href="#grid-配置" aria-hidden="true">#</a> grid 配置</h2><p>grid 是绘图区域</p><ul><li>show：是否显示直角坐标系网格</li><li>left、right、top、bottom： grid 组件离容器左右上下的距离</li><li>containLabel：grid 区域是否包含坐标轴的刻度标签</li><li>backgroundColor： Color 类型，网格背景色，默认透明</li></ul><h2 id="xaxis-和-yaxis-配置" tabindex="-1"><a class="header-anchor" href="#xaxis-和-yaxis-配置" aria-hidden="true">#</a> xAxis 和 yAxis 配置</h2><p>x 轴和 y 轴选项</p><ul><li>show 是否显示轴</li><li>name：坐标轴名称</li><li>type ： 坐标轴类型。 <ul><li>value 数值轴，适用于连续数据。</li><li>category 类目轴，适用于离散的类目数据。类目数据可来源 xAxis.data、series.data 或 dataset.source 之一。</li></ul></li><li>data：类目数据，在类目轴（type: &#39;category&#39;）中有效。 array 类型</li><li>axisLine：坐标轴轴线相关设置</li><li>axisTick：坐标轴刻度相关设置</li><li>axisLabel：坐标轴刻度标签的相关设置</li><li>splitLine：坐标轴在 grid 区域中的分隔线</li></ul><h2 id="series-配置" tabindex="-1"><a class="header-anchor" href="#series-配置" aria-hidden="true">#</a> series 配置</h2><p>series 系列用于配置系列图表的类型和图形信息数据。</p><ul><li><p>name：系列名称，用于 tooltip 的显示，legend 的图例筛选等</p></li><li><p>type：指定系列图表的类型，比如：柱状图、折线图、饼图、散点图、地图等</p></li><li><p>coordinateSystem：该系列使用的坐标系，默认二位直角坐标系（笛卡尔坐标系）</p></li><li><p>data：系列中的数值内容数组。数组中的每一项称为数据项</p><ul><li>一维数组: <code>[ value,value ]</code></li><li>二位数组：<code>[[index,value],[index,value]]</code>,<code>[ [x, y, value ], [ x, y,value ] ]</code></li><li>对象类型（推荐）：<code>[ { value: x， name: x， label: { }，itemStyle:{}、 emphasis:{} .... } ]</code></li><li>data 有很多种写法，一般对象类型使用最多，因为它可以同时支持多种 type 的图形。</li></ul></li></ul><p>这几个属性可以写在 series 里，也可以写在 data 的对象写法里，使用就近原则，data 中的比 series 优先级高</p><ul><li>label：图形上的文本标签</li><li>itemStyle：图形样式</li><li>emphasis：高亮的图形样式和标签样式</li></ul><p>当 type 为 pie 时，是饼图，常用饼图相关配置</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">series</span><span class="token operator">:</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;pie&quot;</span><span class="token punctuation">,</span> <span class="token comment">// line bar scatter pie</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">center</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;50%&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;50%&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// 饼图的中心（圆心）坐标，数组的第一项是横坐标，第二项是纵坐标。</span>
    <span class="token literal-property property">radius</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;50%&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;100%&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// 饼图的半径。数组的第一项是内半径，第二项是外半径。</span>
    <span class="token literal-property property">roseType</span><span class="token operator">:</span> <span class="token string">&quot;area&quot;</span><span class="token punctuation">,</span> <span class="token comment">//area玫瑰图(南丁格尔图)。 圆心角一样，通过半径展现数据大小(默认false)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="title-标题" tabindex="-1"><a class="header-anchor" href="#title-标题" aria-hidden="true">#</a> title 标题</h2><p>图表的标题，Object 类型。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> option <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> <span class="token string">&quot;rgba(255, 0, 0, 0.1)&quot;</span><span class="token punctuation">,</span> <span class="token comment">//容器背景色</span>
  <span class="token literal-property property">grid</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> <span class="token string">&quot;rgba(0, 255, 0, 0.1)&quot;</span><span class="token punctuation">,</span> <span class="token comment">//坐标系背景</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&quot;Echart 5 条形图&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
    <span class="token literal-property property">top</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
    <span class="token comment">// subtext: &#39;第二个标题&#39;</span>
    <span class="token comment">// ....</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="legend-图例" tabindex="-1"><a class="header-anchor" href="#legend-图例" aria-hidden="true">#</a> legend 图例</h2><p>图例，展现了不同系列的标记、颜色和名字，Object 类型。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> options <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">legend</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// width: 100, //整个图例的宽</span>
    <span class="token literal-property property">itemWidth</span><span class="token operator">:</span> <span class="token number">40</span><span class="token punctuation">,</span> <span class="token comment">// 单个图例的宽</span>
    <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">&quot;circle&quot;</span><span class="token punctuation">,</span> <span class="token comment">// round circle ...</span>

    <span class="token comment">// formatter: &quot;aaa-{name}&quot;, //格式化图例文字</span>
    <span class="token function-variable function">formatter</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token comment">// 富文本的语法: {style_name|content}</span>
      <span class="token keyword">return</span> name <span class="token operator">+</span> <span class="token string">&quot;{percentageStyle| 40%}&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">textStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">// 给富文本添加样式</span>
      <span class="token literal-property property">rich</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">percentageStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&quot;red&quot;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">fontSize</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
          <span class="token comment">// css 样式</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="tooltip-提示框" tabindex="-1"><a class="header-anchor" href="#tooltip-提示框" aria-hidden="true">#</a> tooltip 提示框</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> options <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">tooltip</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// 使用了 trigger ，一般也结合 axisPointer</span>
    <span class="token literal-property property">trigger</span><span class="token operator">:</span> <span class="token string">&quot;item&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 默认是 item axis</span>
    <span class="token comment">// axisPointer: {</span>
    <span class="token comment">//   type: &quot;line&quot;, //  (默认是竖线 line)  (横线 + 竖线 cross)  (横线 + 竖线 shadow)</span>
    <span class="token comment">// },</span>
    <span class="token comment">// formatter: &#39;&lt;div style=&quot;color:red&quot;&gt;haha&lt;/div&gt;&#39;,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="颜色" tabindex="-1"><a class="header-anchor" href="#颜色" aria-hidden="true">#</a> 颜色</h2><p>支持颜色的配置，也支持渐变色</p><ul><li>可以使用对象</li><li>还可以使用 api <code>new echarts.graphic.LinearGradient()</code></li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> options <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">series</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token comment">// 图形的颜色</span>
      <span class="token literal-property property">itemStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token comment">// 渐变</span>
          <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;linear&quot;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
          <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
          <span class="token literal-property property">x2</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
          <span class="token literal-property property">y2</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
          <span class="token literal-property property">colorStops</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
              <span class="token literal-property property">offset</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
              <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&quot;red&quot;</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
              <span class="token literal-property property">offset</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
              <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&quot;blue&quot;</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="echarts-地图绘制" tabindex="-1"><a class="header-anchor" href="#echarts-地图绘制" aria-hidden="true">#</a> ECharts 地图绘制</h2><p>ECharts 可以使用 GeoJSON 格式的数据作为地图的轮廓，可以获取第三方的 GeoJSON 数据注册到 ECharts 中</p>`,41),m={href:"https://datav.aliyun.com/portal/school/atlas/area_selector",target:"_blank",rel:"noopener noreferrer"},h={href:"https://github.com/echarts-maps/echarts-china-cities-js/tree/master/js/shape-with-internal-borders",target:"_blank",rel:"noopener noreferrer"},b=e(`<p>绘制地图的步骤</p><ol><li>拿到 GeoJSON 数据</li><li>注册对应的地图的 GeoJSON 数据（调用 setOption 前注册）</li><li>配置 geo 选项或者配置 map series，两种方式</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 1.导入了一个中国的 geo json，拿到 GeoJSON 数据</span>
<span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">&quot;./geojson/china_geojson.js&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span><span class="token punctuation">;</span>

<span class="token comment">// 2.注册一下中国地图的 geo json ( 需要在setOption之前调用 )</span>
echarts<span class="token punctuation">.</span><span class="token function">registerMap</span><span class="token punctuation">(</span><span class="token string">&quot;中国&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">geoJSON</span><span class="token operator">:</span> china_geojson <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> option <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">//方式1：配置 geo 选项</span>
  <span class="token literal-property property">geo</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 全局的地图( 创建一个地理坐标系统, 供其它系列复用该坐标系 )</span>
    <span class="token literal-property property">map</span><span class="token operator">:</span> <span class="token string">&quot;china&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">//方式2：配置 map series</span>
  <span class="token literal-property property">series</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">// 系列图是 地图(创建一个地理坐标系统, 用来展示数据 )</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;map&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 系列图是 地图</span>
      <span class="token literal-property property">map</span><span class="token operator">:</span> <span class="token string">&quot;中国&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 展示中国地图( 因为只注册一个中国地图 )</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
myChart<span class="token punctuation">.</span><span class="token function">setOption</span><span class="token punctuation">(</span>option<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),y={href:"https://echarts.apache.org/zh/option.html#visualMap",target:"_blank",rel:"noopener noreferrer"},g=e(`<h2 id="地图着色" tabindex="-1"><a class="header-anchor" href="#地图着色" aria-hidden="true">#</a> 地图着色</h2><p>可以通过 itemStyle 属性中的 areaColor 和 borderColor</p><ul><li>areaColor ：地图区域的颜色</li><li>borderColor ：图形（边界）的描边颜色</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// =======地图着色=========</span>
<span class="token literal-property property">itemStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">areaColor</span><span class="token operator">:</span> <span class="token string">&quot;#023677&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 地图区域的颜色。</span>
  <span class="token literal-property property">borderColor</span><span class="token operator">:</span> <span class="token string">&quot;#1180c7&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 图形的描边颜色。</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="echarts-常见-api" tabindex="-1"><a class="header-anchor" href="#echarts-常见-api" aria-hidden="true">#</a> ECharts 常见 API</h2><ul><li>echarts.init( dom， theme， opts )：创建 echartsInstance 实例</li><li>echarts.registerMap( mapName， opts )：注册地图</li><li>echarts.getMap( mapName )：获取已注册地图</li><li>echartsInstance.setOption(opts)：设置图表实例的配置项以及数据，万能接口。</li><li>echartsInstance.getWidth()、 echartsInstance. getHeight()：获取 ECharts 实例容器的宽高度。</li><li>echartsInstance.resize(opts)：改变图表尺寸，在容器大小发生改变时需要手动调用。</li><li>echartsInstance.showLoading()、 echartsInstance. hideLoading()：显示和隐藏加载动画效果。</li><li>echartsInstance.dispatchAction( )：触发图表行为，例如：图例开关、显示提示框 showTip 等</li><li>echartsInstance.dispose：销毁实例，销毁后实例无法再被使用</li><li>echartsInstance.on()：通过 on 方法添加事件处理函数，该文档描述了所有 ECharts 的事件列表。</li></ul><h3 id="响应式-echarts-图表" tabindex="-1"><a class="header-anchor" href="#响应式-echarts-图表" aria-hidden="true">#</a> 响应式 ECharts 图表</h3><ol><li>图表只设置高度，宽度设置为 100% 或 不设置</li><li>监听窗口的 resize 事件，即监听窗口尺寸的变化（需节流）</li><li>当窗口大小改变时，然后调用 <code>echartsInstance.resize</code> 改变图表的大小</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 1.响应式图表</span>
window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&quot;resize&quot;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  myChart<span class="token punctuation">.</span><span class="token function">resize</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在容器节点被销毁时，可以调用 <code>echartsInstance.dispose</code> 以销毁 echarts 的实例释放资源，避免内存泄漏</p>`,10);function q(x,f){const a=o("ExternalLinkIcon");return l(),i("div",null,[r,u,d,n("p",null,[n("a",k,[s("ECharts 官网"),t(a)])]),v,n("ul",null,[n("li",null,[n("a",m,[s("https://datav.aliyun.com/portal/school/atlas/area_selector"),t(a)])]),n("li",null,[n("a",h,[s("https://github.com/echarts-maps/echarts-china-cities-js/tree/master/js/shape-with-internal-borders"),t(a)])])]),b,n("p",null,[s("需要用 data 填充数据时，只能使用 map series 的方式，并且可以配合 visualMap 组件"),n("a",y,[s("https://echarts.apache.org/zh/option.html#visualMap"),t(a)])]),g])}const j=p(c,[["render",q],["__file","05_echarts.html.vue"]]);export{j as default};
