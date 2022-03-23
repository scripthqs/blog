# 二次封装 ECharts

在 vue3 项目中，使用 ts 对 ECharts 进行二次封装，

## 封装 baseECharts

```js
<template>
  <div class="base-echart">
    <div class="echart" ref="echartDivRef" :style="{ width: width, height: height }"></div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, defineProps, withDefaults, watchEffect } from 'vue';
import { useEcharts } from '../hooks/useEcharts';
import { EChartsOption } from 'echarts';

const props = withDefaults(
  defineProps<{
    options: EChartsOption;
    width?: string;
    height?: string;
  }>(),
  {
    options: () => ({}),
    width: '100%',
    height: '350px'
  }
);

const echartDivRef = ref<HTMLElement>();
onMounted(() => {
  const [setOptions] = useEcharts(echartDivRef.value!);
  watchEffect(() => {
    setOptions(props.options);
  });
});
</script>

<style scoped>
.echart {
  background-color: #fff;
}
</style>

```

## 柱状图

```js
<template>
  <div class="bar-echart">
    <base-echart :options="options"></base-echart>
  </div>
</template>

<script setup lang="ts">
import { defineProps, computed } from 'vue';
import * as echarts from 'echarts';
import BaseEchart from '../echarts';
import { IEchartXAxisLabel, IEchartValueData } from '../types';

const props = defineProps<{
  labels: IEchartXAxisLabel[];
  values: IEchartValueData[];
  title?: string;
}>();

const options = computed(() => {
  return {
    title: {
      text: props.title
    },
    legend: {},
    xAxis: {
      data: props.labels
    },
    yAxis: [
      {
        type: 'value',
        position: 'left',
        alignTicks: true,
        axisLine: {
          show: true
        },
        axisLabel: {
          formatter: '{value} a'
        }
      },
      {
        type: 'value',
        position: 'right',
        alignTicks: true,
        axisLine: {
          show: true
        },
        axisLabel: {
          formatter: '{value} b'
        }
      }
    ],
    series: [
      {
        name: '111',
        type: 'bar',
        showBackground: true,
        itemStyle: {
          color: ''
        },
        data: props.values[0]
      },
      {
        name: '222',
        type: 'bar',
        yAxisIndex: 1,
        showBackground: true,
        itemStyle: {
          color: ''
        },
        data: props.values[1]
      }
    ]
  };
});
</script>

<style scoped></style>
```

## 饼图

```js
<template>
  <div class="pie-echart">
    <base-echart :options="options"></base-echart>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, computed } from 'vue';
import BaseEchart from '../echarts';
import { IPieEchartData } from '../types';

const props = defineProps<{
  pieData: IPieEchartData[];
  title?: string;
}>();

const options = computed(() => {
  return {
    title: {
      text: props.title
    },
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'horizontal',
      left: 'center'
    },
    series: [
      {
        type: 'pie',
        // radius: '50%',//饼
        radius: ['40%', '70%'],//圆环
        bottom: '-10%',
        data: props.pieData,
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  };
});
</script>

<style scoped></style>

```