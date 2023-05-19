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



## ECharts 常用图表

## 1 柱状图

### 1.1 柱状图的实现

1. ECharts 最基本的代码结构

   ```js
   // 准备盒子
   <div style="width: 600px;height:400px"></div>;
   // 获取盒子 DOM
   var mCharts = echarts.init(document.querySelector("div"));
   var option = {};
   ```

   此时 option 是一个空空如也的对象

2. 准备 x 轴的数据

   ```js
   var xDataArr = ["张三", "李四", "王五", "闰土", "小明", "茅台", "二妞", "大强"];
   ```

3. 准备 y 轴的数据

   ```js
   var yDataArr = [88, 92, 63, 77, 94, 80, 72, 86];
   ```

4. 准备 option , 将 series 中的 type 的值设置为: bar

   ```js
   var option = {
     xAxis: {
       type: "category",
       data: xDataArr,
     },
     yAxis: {
       type: "value",
     },
     series: [
       {
         type: "bar",
         data: yDataArr,
       },
     ],
   };
   ```

   注意: 坐标轴 xAxis 或者 yAxis 中的配置,，**type 的值**主要有两种: **category** 和 **value** , 如果 type 属性的值为 category ,那么需要配置 data 数据，代表在 x 轴的呈现。如果 type 属性配置为 value，那么无需配置 data , 此时 y 轴会自动去 series 下找数据进行图表的绘制。

## 通用配置

使用 ECharts 绘制出来的图表，都天生就自带一些功能,，这些功能是每一个图表都具备的，我们可以通过 配置，对这些功能进行设置。

### 标题 title

```js
var option = {
  title: {
    text: "成绩", // 标题文字
    textStyle: {
      color: "red", // 文字颜色
    },
    borderWidth: 5, // 标题边框
    borderColor: "green", // 标题边框颜色
    borderRadius: 5, // 标题边框圆角
    left: 20, // 标题的位置
    top: 20, // 标题的位置
  },
};
```

### 提示框 tooltip

tooltip 指的是当鼠标移入到图表或者点击图表时, 展示出的提示框

```js
var option = {
    tooltip: {
        trigger: 'item',//触发类型，可选值有item\axis，配合series的name
        triggerOn: 'click',//触发时机，可选值mouseOver\click
        formatter: '{b}:{c}'//格式化显示，字符串模板
        formatter: function (arg) {
            return arg.name + ':' + arg.data//回调函数
        }
    }
}
这个{b} 和 {c} 所代表的含义不需要去记, 在官方文档中有详细的描述
```

### 工具按钮 toolbox

toolbox 是 ECharts 提供的工具栏，内置有导出图片，数据视图，重置,，数据区域缩放，动态类型切换五个工具。

```js
var option = {
  toolbox: {
    feature: {
      //工具栏的按钮是配置在 feature 的节点之下
      saveAsImage: {}, // 将图表保存为图片
      dataView: {}, // 是否显示出原始数据
      restore: {}, // 还原图表
      dataZoom: {}, // 数据缩放
      magicType: {
        // 将图表在不同类型之间切换,图表的转换需要数据的支持
        type: ["bar", "line"],
      },
    },
  },
};
```

### 图例 legend

legend 是图例，用于筛选类别，需要和 series 配合使用

```js
var option = {
  legend: {
    data: ["语文", "数学"], //数组，data 的值需要和 series 数组中某组数据的 name 值一致
  },
  xAxis: {
    type: "category",
    data: ["张三", "李四", "王五", "闰土", "小明", "茅台", "二妞", "大强"],
  },
  yAxis: {
    type: "value",
  },
  series: [
    {
      name: "语文",
      type: "bar",
      data: [88, 92, 63, 77, 94, 80, 72, 86],
    },
    {
      name: "数学",
      type: "bar",
      data: [93, 60, 61, 82, 95, 70, 71, 86],
    },
  ],
};
```
