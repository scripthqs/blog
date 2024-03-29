# 数组的高阶函数

高阶函数是一个函数，它将**函数作为参数**或者**函数作为返回值**

## `.filter()`

filter，过滤器，其作用是根据给定的**判断函数**，返回判定为 true 的元素的集合

```js
const nums = [1, 2, 3, 4, 5, 6, 5, 4, 3];
let newNums = nums.filter(function (n) {
  return n < 5;
});
console.log(newNums); //将小于5的数添加到新数组
```

**过滤操作，筛选符合条件的所有元素，若为 true 则返回组成新数组**。

## `.map()`

map 其作用如字面意思——“映射”，将原有数组的元素按照给定的函数将其映射成为一个新的值，并返回新值的集合。给定的函数可以是普通的函数，也可以是箭头函数。

```js
let new1Nums = newNums.map(function (n) {
  return n * 2;
});
console.log(new1Nums); //将刚刚得到的数组*2处理
```

**映射操作，对原数组每个元素进行处理，并回传新的数组**。

## `.reduce()`

归并操作，总共两个参数，第一个是函数，可以理解为累加器，遍历数组累加回传的返回值，第二个是初始数值。如果没有提供初始值，则将使用数组中的第一个元素

```js
let new2Nums = new1Nums.reduce(function (preValue, n) {
  return preValue + n;
}, 0);
console.log(new2Nums);
```

## 链式调用

map、reduce 和 filter 返回的可以（reduce 不一定是）都是数组，所有可以进行链式调用

```js
const nums = [1, 2, 3, 4, 5, 6, 5, 4, 3];
let total = nums
  .filter(function (n) {
    return n < 5;
  })
  .map(function (n) {
    return n * 2;
  })
  .reduce(function (p, n) {
    return p + n;
  }, 0);
console.log(total);
```

并且可以使用 ES6 的箭头函数

```js
let total1 = nums
  .filter((n) => n < 5)
  .map((n) => n * 2)
  .reduce((p, n) => p + n);
console.log(total1);
```

## `.find()`

find() 方法返回通过测试（函数内判断）的数组的**第一个元素**的值

```js
let arr = [1, 2, 3];
let arr1 = arr.find(function (item) {
  return item >= 2;
});
console.log(arr5); //2
```

## `.some()`

some() 方法会依次执行数组的每个元素：

- 如果**有一个元素满足条件，则表达式返回 true** , 剩余的元素不会再执行检测。
- 如果没有满足条件的元素，则返回 false。

```js
let arr = [2, 4, 6, 8];
let flag = arr.some(function (item) {
  return item > 5;
});
console.log(flag); //true
```

## `.every()`

every 方法用于检测数组**所有元素是否都符合指定条件，返回 true**

```js
let arr = [2, 4, 6, 8];
let flag = arr.every(function (item) {
  return item > 5;
});
console.log(flag); //false
```

## `.forEach()`

forEach 是对数组每个数据进行遍历，不会改变原数组。两个参数：**function(currentValue, index, arr)**和**thisValue**

```js
arr.forEach(function(currentValue, index, arr), thisValue)
arr.forEach(function(当前元素, 当前元素的索引值, arr), this/undefined)
```

```js
var arr = [1, 2, 3, 4, 5];
var a = arr.forEach(function (value, index, arr) {
  console.log(value + " " + index + " " + arr);
});
```

## `.Includes()`

想判断一个数组中是否包含某个元素，可以通过 indexOf 获取结果，并且判断是否为 -1。在 ES7 中，我们可以通过 includes 来判断一个数组中是否包含一个指定的元素，根据情况，如果包含则返回 true，否则返回 false
