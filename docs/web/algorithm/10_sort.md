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
- 遍历，如果假定值 < 某个值，记住该索引
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

## 插入排序

插入排序类似打牌

- 假设第一个排好
- 取出下一个，不断和前面比较
- 该元素比前面小，该元素插入到前面合适的位置

```js
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    let j = i - 1; //记录默认已排序元素，就是第一个元素
    while (j > 0 && arr[j] > current) {
      //已排序的元素>新元素，将该元素移动到下一个位置
      arr[j + 1] = arr[j];
      j--;
    }
    // 如果该元素大于前一个元素，那么它将放到合适的位置
    arr[j + 1] = current;
  }
  return arr;
}
```

## 归并排序

归并是一种分治的排序算法。将大问题分成小问题，并在是适当的地方合并它们。

- 将待排序数组分为若干个子数组
- 将相邻的子数组并成一个有序数组
- 最后将这些有序数组归并成一个整体有序数组

```js
function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  //计算中间位置
  const mid = Math.floor(arr.length / 2);
  //对左边数组进行归并
  const left = mergeSort(arr.slice(0, middle));
  //对右边数组进行归并
  const right = mergeSort(arr.slice(middle));
  //合并两个排好序的数组
  return merge(left, right);
}

//定义函数merge，参数是排好序的数组left和right
function merge(left, right) {
  //定义指针变量，分别指向两个数组的开头
  let i = 0;
  let j = 0;
  //定义一个空数组，用来存放合并后的数组
  const result = [];
  // 比较两个数组的第一个元素，将较小的放入result数组
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i++]);
    } else {
      result.push(right[j++]);
    }
  }
  // 将没有比较完的剩余元素放入result数组
  while (i < left.length) {
    result.push(left[i++]);
  }
  while (j < right.length) {
    result.push(right[j++]);
  }
  // 返回合并后的数组
  return result;
}
```
