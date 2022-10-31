# 数组(Array)

```js
//创建数组
const arr = new Array();
const arr = [];
//数组的长度
arr.length;
//遍历数组
for (let i = 0; i < arr.length; i++) {
  alert(arr[i]);
}
arr.forEach(item => {
  alert(item);
});
```

## 数组的增删改查

```js
//数组末尾添加元素x
arr.push(x); //
arr[arr.length] = x;
//数组首部添加元素x
arr.unshift(x);
for (let i = arr.length; i > 0; i--) {
  arr[i] = arr[i - 1];
}
arr[0] = x;
//数组删除末尾元素x
arr.pop();
for (let i = 0; i < arr.length; i++) {
  arr[i] = arr[i + 1];
}
//数组删除首部元素x
arr.shift();
//数组的splice方法(会改变原数组)
arr.splice(i, k, p); //i是开始的索引，k是删除的个数，p是插入的个数
//数组的slice方法(不会改变原数组)
arr.slice(b, e); //截取数组，b是开始的索引，e是结束的索引(不包括该元素)，e不传代表arr.length
//splice和slice索引参数都可以是负数

//拼接数组
arr.concat(arr1);

//数组转换成字符串
arr.join('/'); //转字符串并且使用/替换,
arr.toString().replace(/,/g, '/');
arr.valueOf();

//另外
toString.call(); //可以做类型判断

//every方法
arr.every(i => i > 0); //给一个函数，该函数对数组的每一项都返回true则返回true
//some方法
arr.some(i => i > 0); //给一个函数，该函数对数组的任意一项返回true则返回true
//filter方法
arr.filter(i => i > 0); //给一个函数，返回一个新数组，该数组的每一项执行函数返回true
//map方法
arr.map(i => i + 'map'); //给一个函数，返回一个新数组，给数组的每一项都执行这个函数
//forEach方法没有返回值，遍历数组

//indexOf方法
arr.indexOf(1); //返回与给定参数相等的第一个索引，没有则返回-1
//lastIndexOf方法
arr.lastIndexOf(1); //返回与给定参数相等的最后一个索引，没有则返回-1
//reverse方法
arr.reverse(); //翻转数组
//sort方法
arr.sort(); //数组排序，默认按照字母顺序，也可以按照指定函数
arr.sort((a, b) => a - b); //升序排序
arr.sort((a, b) => b - a); //降序排列

//reduce方法
arr.reduce(callback[, initialValue])
callback（一个在数组中每一项上调用的函数，接受四个函数：）
- previousValue（上一次调用回调函数时的返回值，或者初始值）
- currentValue（当前正在处理的数组元素）
- currentIndex（当前正在处理的数组元素下标）
- array（调用reduce()方法的数组）
initialValue（可选的初始值。作为第一次调用回调函数时传给previousValue的值）

//实现累加器
let total = 0
numbers.forEach((t)=> {
    total += t
})

let total = numbers.reduce((per,cur,i,arr)=>{
return per+cur
},0)
```
