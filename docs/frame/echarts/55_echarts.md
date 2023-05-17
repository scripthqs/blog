# ECharts 常用图表

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

### 1.2 柱状图的常见效果

#### 1 最值

使用 markPoint 标记出最大值\最小值

```js
series: [
    {
        ......
        markPoint: {
            data: [
                {
                    type: 'max', name: '最大值'
                },
                {
                    type: 'min', name: '最小值'
                }
            ]
        }
    }
]
```

#### 2 平均值

使用 markLine 标记平均值

```js
series: [
    {
        ......
        markLine: {
            data: [
                {
                    type: 'average', name: '平均值'
                }
            ]
        }
    }
]
```

#### 3 数值显示

使用 label 数值显示

```js
series: [
    {
        ......
        label: {
            show: true, // 是否可见
            rotate: 60 // 旋转角度
        }
    }
]
```

#### 4 柱宽度

使用 barWidth 表示柱宽度

```js
series: [
    {
        ......
        barWidth: '30%' // 柱的宽度
    }
]
```

#### 5 横向柱状图

所谓的横向柱状图, 只需要让 x 轴的角色和 y 轴的角色互换一下即可.。即 xAxis 的 type 设置为 value , yAxis 的 type 设置为 category , 并且设置 data 即可

```js
var option = {
  xAxis: {
    type: "value",
  },
  yAxis: {
    type: "category",
    data: xDataArr,
  },
  series: [
    {
      type: "bar",
      data: yDataArr,
    },
  ],
};
```

## 2 通用配置

使用 ECharts 绘制出来的图表，都天生就自带一些功能,，这些功能是每一个图表都具备的，我们可以通过 配置，对这些功能进行设置。

### 1 标题 title

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

### 2 提示框 tooltip

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

### 3 工具按钮 toolbox

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

### 4 图例 legend

legend 是图例,用于筛选类别,需要和 series 配合使用

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

## 3 折线图

折线图和柱状图很相似

```js
series: [
  {
    type: "line", //折线图是line,柱状图是bar
    data: yDataArr,
  },
];
```

### 3.1 折线图的常见效果

#### 1 markPoint

使用 markPoint 标记出最大值\最小值

#### 2 markLine

使用 markLine 标记平均值

#### 3 标注区间

使用 markArea 标注区间

```js
var option = {
    series: [
        {
            ......
            markArea: {
                data: [
                    {
                        xAxis: '1月'
                    },
                    {
                        xAxis: '2月'
                    }
                ]
            }
        }
    ]
}
```

#### 4 线条控制

```js
var option = {
    series: [
        {
            ......
            smooth: true,//平滑线条 smooth
            lineStyle: {//线条样式 lineStyle
                color: 'green',
                type: 'dashed' // 可选值还有 dotted solid
            },
            areaStyle: {//填充风格 areaStyle
                color: 'pink'
            }
        }
    ]
}
```

#### 5 紧挨边缘

boundaryGap 是设置给 x 轴的, 让起点从 x 轴的 0 坐标开始

```js
var option = {
  xAxis: {
    type: "category",
    data: xDataArr,
    boundaryGap: false,
  },
};
```

#### 6 缩放, 脱离 0 值比例

如果每一组数据之间相差较少, 且都比 0 大很多, 那么有可能会出现折线变成一条直线的情况

```js
var option = {
  yAxis: {
    type: "value",
    scale: true,
  },
};
```

#### 7 堆叠图

堆叠图指的是，同个类目轴上系列配置相同的 stack 值后，后一个系列的值会在前一个系列的值上相加
