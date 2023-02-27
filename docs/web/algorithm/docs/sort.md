# 排序算法

## 冒泡排序

- 冒泡排序是比较两个相邻的项，如果第一个比第二个大，则交换它们。好像气泡从水底升到水面。
- 进行一次后，最大值会移到数组的最后面，下一次就不用考虑最大值
- 一直重复就会得到排序完成的数组

```js
//原始
const bubbleSort(arr)=>{
  for(let i = 0; i < arr.length; i++){
    for(let j = 0;j < arr.length-1; j++){
      if(arr[j] > arr[j+1]){
        // let temp = arr[j];
        // arr[j] = arr[j + 1];
        // arr[j + 1] = temp;
        [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
      }
    }
  }
}
//优化
const bubbleSort(arr)=>{
  for(let i = 0; i < arr.length; i++){
    for(let j = 0;j < arr.length-1-i; j++){
      if(arr[j] > arr[j+1]){
        [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
      }
    }
  }
}
```
