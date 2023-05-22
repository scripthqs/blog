# ECharts

## ECharts 简介

ECharts 是百度公司开源的一个使用 JavaScript 实现的开源可视化库，兼容性强，底层依赖矢量图形库 ZRender ，提供直观，交互丰富，可高度个性化定制的数据可视化图表。

[ECharts 官网](https://echarts.apache.org/zh/index.html)

- 开源免费
- 功能丰富
- 多种数据的支持
- 移动端的优化
- 跨平台

ECharts 能够做出各种各样漂亮的图表，它能满足绝大多数可视化图表的实现。它的兼容性强, 使用方便，功能强大, 是实现数据可视化的最佳选择之一。

## Echarts 基本使用

引入 ECharts 的方法

1. 通过 npm 获取 echarts，`npm install echarts --save`
2. 通过 jsDelivr 等 CDN 引入

```html
<!-- 4.ECharts 的容器( 必须要有高度,宽度是可选的 ) -->
<div id="main" style="height: 400px"></div>

<script>
  window.onload = function() {
    // 1.基于准备好的dom，初始化 echarts实例
    let myChart = echarts.init(document.getElementById("main"));
    // 2.指定图表的配置项和数据
    let option = {
      xAxis: {
        data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
      },
      yAxis: {},
      series: [
        {
          type: "bar",
          data: [5, 20, 36, 10, 10, 20],
        },
      ],
    };
    // 3.使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
  };
</script>
```

一个图表最终呈现什么样子，完全取决于这个**配置项**，所以对于不同的图表, 除了**配置项会发生改变**之外，其他的代码都是**固定不变**的。

## ECharts 渲染器

ECharts 的默认渲染器是 canvas，可以切换成 svg

```js
// 切换为svg的渲染器( 默认是canvas )
let myChart = echarts.init(document.getElementById("main"), null, { renderer: "svg" });
```

- Canvas 更适合绘制图形元素数量较多的图表，热力图、坐标图、大规模线图等
- Svg 内存占用更低、适配性、扩展性性好，放大缩小图表不会模糊，除非数据量较大，不然建议 svg

## option 配置项(组件)

配置项不同就生成不同的图形，常用的配置项：

- grid：直接坐标系绘图区域
- yAxis：直角坐标系 grid 中的 y 轴
- xAxis：直角坐标系 grid 中的 x 轴
- title ：图表的标题
- legend：图例，展现了不同系列的标记、颜色和名字
- tooltip：提示框
- toolbox：工具栏，提供操作图表的工具
- series：系列，配置系列图表的类型和图形信息数据
- visualMap：视觉映射，可以将数据值映射到图形的形状、大小、颜色等
- geo：地理坐标系组件。用于地图的绘制，支持在地理坐标系上绘制散点图，线集。

## grid 配置

grid 是绘图区域

- show：是否显示直角坐标系网格
- left、right、top、bottom： grid 组件离容器左右上下的距离
- containLabel：grid 区域是否包含坐标轴的刻度标签
- backgroundColor： Color 类型，网格背景色，默认透明

## xAxis 和 yAxis 配置

x 轴和 y 轴选项

- show 是否显示轴
- name：坐标轴名称
- type ： 坐标轴类型。
  - value 数值轴，适用于连续数据。
  - category 类目轴，适用于离散的类目数据。类目数据可来源 xAxis.data、series.data 或 dataset.source 之一。
- data：类目数据，在类目轴（type: 'category'）中有效。 array 类型
- axisLine：坐标轴轴线相关设置
- axisTick：坐标轴刻度相关设置
- axisLabel：坐标轴刻度标签的相关设置
- splitLine：坐标轴在 grid 区域中的分隔线

## series 配置

series 系列用于配置系列图表的类型和图形信息数据。

- name：系列名称，用于 tooltip 的显示，legend 的图例筛选等
- type：指定系列图表的类型，比如：柱状图、折线图、饼图、散点图、地图等
- coordinateSystem：该系列使用的坐标系，默认二位直角坐标系（笛卡尔坐标系）
- data：系列中的数值内容数组。数组中的每一项称为数据项

  - 一维数组: `[ value,value ]`
  - 二位数组：`[[index,value],[index,value]]`,`[ [x, y, value ], [ x, y,value ] ]`
  - 对象类型（推荐）：`[ { value: x， name: x， label: { }，itemStyle:{}、 emphasis:{} .... } ]`
  - data 有很多种写法，一般对象类型使用最多，因为它可以同时支持多种 type 的图形。

这几个属性可以写在 series 里，也可以写在 data 的对象写法里，使用就近原则，data 中的比 series 优先级高

- label：图形上的文本标签
- itemStyle：图形样式
- emphasis：高亮的图形样式和标签样式

当 type 为 pie 时，是饼图，常用饼图相关配置

```js
series: [
  {
    type: "pie", // line bar scatter pie
    label: {
      show: true,
    },
    center: ["50%", "50%"], // 饼图的中心（圆心）坐标，数组的第一项是横坐标，第二项是纵坐标。
    radius: ["50%", "100%"], // 饼图的半径。数组的第一项是内半径，第二项是外半径。
    roseType: "area", //area玫瑰图(南丁格尔图)。 圆心角一样，通过半径展现数据大小(默认false)
  },
];
```

## title 标题

图表的标题，Object 类型。

```js
let option = {
  backgroundColor: "rgba(255, 0, 0, 0.1)", //容器背景色
  grid: {
    show: true,
    backgroundColor: "rgba(0, 255, 0, 0.1)", //坐标系背景
  },
  title: {
    show: true,
    text: "Echart 5 条形图",
    left: 20,
    top: 10,
    // subtext: '第二个标题'
    // ....
  },
};
```

## legend 图例

图例，展现了不同系列的标记、颜色和名字，Object 类型。

```js
let options = {
  legend: {
    show: true,
    // width: 100, //整个图例的宽
    itemWidth: 40, // 单个图例的宽
    icon: "circle", // round circle ...

    // formatter: "aaa-{name}", //格式化图例文字
    formatter: function(name) {
      console.log(name);
      // 富文本的语法: {style_name|content}
      return name + "{percentageStyle| 40%}";
    },
    textStyle: {
      // 给富文本添加样式
      rich: {
        percentageStyle: {
          color: "red",
          fontSize: 20,
          // css 样式
        },
      },
    },
  },
};
```

## tooltip 提示框

```js
let options = {
  tooltip: {
    show: true,
    // 使用了 trigger ，一般也结合 axisPointer
    trigger: "item", // 默认是 item axis
    // axisPointer: {
    //   type: "line", //  (默认是竖线 line)  (横线 + 竖线 cross)  (横线 + 竖线 shadow)
    // },
    // formatter: '<div style="color:red">haha</div>',
  },
};
```

## 颜色

支持颜色的配置，也支持渐变色

- 可以使用对象
- 还可以使用 api `new echarts.graphic.LinearGradient()`

```js
let options = {
  series: [
    {
      // 图形的颜色
      itemStyle: {
        color: {
          // 渐变
          type: "linear",
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: "red",
            },
            {
              offset: 1,
              color: "blue",
            },
          ],
        },
      },
    },
  ],
};
```

## ECharts 地图绘制

ECharts 可以使用 GeoJSON 格式的数据作为地图的轮廓，可以获取第三方的 GeoJSON 数据注册到 ECharts 中

- <https://datav.aliyun.com/portal/school/atlas/area_selector>
- <https://github.com/echarts-maps/echarts-china-cities-js/tree/master/js/shape-with-internal-borders>

绘制地图的步骤

1. 拿到 GeoJSON 数据
2. 注册对应的地图的 GeoJSON 数据（调用 setOption 前注册）
3. 配置 geo 选项或者配置 map series，两种方式

```js
// 1.导入了一个中国的 geo json，拿到 GeoJSON 数据
<script src="./geojson/china_geojson.js"></script>;

// 2.注册一下中国地图的 geo json ( 需要在setOption之前调用 )
echarts.registerMap("中国", { geoJSON: china_geojson });

let option = {
  //方式1：配置 geo 选项
  geo: {
    // 全局的地图( 创建一个地理坐标系统, 供其它系列复用该坐标系 )
    map: "china",
  },
  //方式2：配置 map series
  series: [
    // 系列图是 地图(创建一个地理坐标系统, 用来展示数据 )
    {
      type: "map", // 系列图是 地图
      map: "中国", // 展示中国地图( 因为只注册一个中国地图 )
    },
  ],
};
myChart.setOption(option);
```

需要用 data 填充数据时，只能使用 map series 的方式，并且可以配合 visualMap 组件<https://echarts.apache.org/zh/option.html#visualMap>

## 地图着色

可以通过 itemStyle 属性中的 areaColor 和 borderColor

- areaColor ：地图区域的颜色
- borderColor ：图形（边界）的描边颜色

```js
// =======地图着色=========
itemStyle: {
  areaColor: "#023677", // 地图区域的颜色。
  borderColor: "#1180c7", // 图形的描边颜色。
},
```

## ECharts 常见 API

- echarts.init( dom， theme， opts )：创建 echartsInstance 实例
- echarts.registerMap( mapName， opts )：注册地图
- echarts.getMap( mapName )：获取已注册地图
- echartsInstance.setOption(opts)：设置图表实例的配置项以及数据，万能接口。
- echartsInstance.getWidth()、 echartsInstance. getHeight()：获取 ECharts 实例容器的宽高度。
- echartsInstance.resize(opts)：改变图表尺寸，在容器大小发生改变时需要手动调用。
- echartsInstance.showLoading()、 echartsInstance. hideLoading()：显示和隐藏加载动画效果。
- echartsInstance.dispatchAction( )：触发图表行为，例如：图例开关、显示提示框 showTip 等
- echartsInstance.dispose：销毁实例，销毁后实例无法再被使用
- echartsInstance.on()：通过 on 方法添加事件处理函数，该文档描述了所有 ECharts 的事件列表。

### 响应式 ECharts 图表

1. 图表只设置高度，宽度设置为 100% 或 不设置
2. 监听窗口的 resize 事件，即监听窗口尺寸的变化（需节流）
3. 当窗口大小改变时，然后调用 `echartsInstance.resize` 改变图表的大小

```js
// 1.响应式图表
window.addEventListener("resize", function() {
  myChart.resize();
});
```

在容器节点被销毁时，可以调用 `echartsInstance.dispose` 以销毁 echarts 的实例释放资源，避免内存泄漏
