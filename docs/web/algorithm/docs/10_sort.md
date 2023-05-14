# 排序算法

算法工具网站：<https://visualgo.net/zh/>，将算法可视化

## 冒泡排序

- 冒泡排序是比较两个相邻的项，如果第一个比第二个大，则交换它们。好像气泡从水底升到水面。
- 进行一次后，最大值会移到数组的最后面，下一次就不用考虑最大值
- 一直重复就会得到排序完成的数组

```js
//原始
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // let temp = arr[j];
        // arr[j] = arr[j + 1];
        // arr[j + 1] = temp;
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}
//优化
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    // 根据外层for循环的 i，逐渐减少内层 for循环的次数
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}
```

## 选择排序

- 先假定第一个没有排序的数为最小值
- 遍历，如果假定值 < 某个值，该元素将成为新的最小值
- 将两者交换

```js
function sortMin(arr) {
  for (let i = 0; i < arr.length; i++) {
    // 预设最小数的索引为当前循环的索引;
    let minIndex = i;
    // 在后面的数中寻找更小的数
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        // 如果找到更小的数，记录它的索引
        minIndex = j;
      }
    }
    // 如果当前循环的索引不是最小数的索引，交换它们
    if (i !== minIndex) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }
  return arr;
}
```
