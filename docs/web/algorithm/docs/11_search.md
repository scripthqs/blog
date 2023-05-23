# 分治、动态规划、贪心算法

## 二分搜索

二分搜索，二分查找，也叫折半查找。二分搜索类似一种分治思想。

- 数组必须是有序的，且不存在重复项

```js
// let arr = [1, 2, 3, 4, 5, 6];
//  找到6
function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    //去出中间值
    let middle = Math.floor((start + end) / 2);
    let guess = arr[middle];
    //如果中间===目标值
    if (guess === target) {
      return middle;
    }
    if (guess > target) {
      end = middle - 1;
    }
    if (guess < target) {
      start = middle + 1;
    }
  }
  return -1;
}
```

## 分治

一个大问题，分成小问题，递归解决小问题，将结果合并从而解决原来的大问题

## 动态规划

动态规划就是把分治思想优化，将分治重复的问题，单独保存起来

## 贪心算法

在求解问题时，总是做出当前看来最好的选择，不从整体考虑，局部最优
