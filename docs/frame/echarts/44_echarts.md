# ECharts 介绍

## 1 ECharts 简介

ECharts 是百度公司开源的一个使用 JavaScript 实现的开源可视化库，兼容性强，底层依赖矢量图形库 ZRender ，提供直观，交互丰富，可高度个性化定制的数据可视化图表。

[ECharts 官网](https://echarts.apache.org/zh/index.html)

- 开源免费
- 功能丰富
- 多种数据的支持
- 移动端的优化
- 跨平台

ECharts 能够做出各种各样漂亮的图表，它能满足绝大多数可视化图表的实现.它的兼容性强, 使用方便，功能强大, 是实现数据可视化的最佳选择之一。

## 2 Echarts 使用步骤

1. 引入 echarts 文件

   ```js
   //使用 js 引入
   <script src="js/echarts.min.js"></script>;
   // 在项目中使用 npm 安装引入
   import * as echarts from "echarts";
   ```

2. 准备一个呈现图表的盒子

   ```js
   <div id="main" style="width: 650px;height:300px;"></div>
   ```

3. 初始化 echarts 实例对象

   ```js
   var myChart1 = echarts.init(document.getElementById("main"));
   ```

4. 准备配置项

   ```js
   var option = {
     xAxis: {
       type: "category",
       data: ["小明", "小红", "小王"],
     },
     yAxis: {
       type: "value",
     },
     series: [
       //系列列表
       {
         name: "语文",
         type: "bar", // 决定自己的图表类型
         data: [70, 92, 87],
       },
     ],
   };
   ```

5. 将配置项设置给 echarts 实例对象

   ```js
   myChart1.setOption(result);
   ```

一个图表最终呈现什么样子，完全取决于这个**配置项**，所以对于不同的图表, 除了**配置项会发生改变**之外，其他的代码都是**固定不变**的。
