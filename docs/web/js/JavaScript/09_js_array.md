# 数组（Array）

## 数组简介

数组是一个对象，数组是使用数字作为索引操作元素。

- **索引(index)**，从 0 开始的整数叫做索引。
- 对象使用属性名，数字使用索引。数组的存储性能比一般对象要好，在开发中经常使用数组来存储数据。

## 数组的创建

### 利用 new 关键字

```js
var arr = new Array();
var arr = new Array(1, 2, 3); //可以在创建时指定元素，用,隔开 var arr = new Array(10);//长度为10的空数组
```

### 用数组字面量

```js
var arr = [];
var arr = [10]; //表示创建一个数组只有元素10
var arr = new Array(10); //长度为10的空数组
```

添加属性

```js
数组[index] = 值;
arr[0] = 1;
```

读取属性

```js
数组[index];
arr[2];
```

## 数组的长度

用`length`获取或者设置数组的长度

```js
for (var i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
```

- 数组的长度是元素的个数 l，length=max(index)+1
- 如果修改的 length>原长度，多的位置会空出来
- 如果修改的 length<原长度，少的位置会被删除

- 使用`arr.length`可以向数组的最后添加元素
- 尽量不要创建非连续的数组

数组里可以放数组，这样的数组称为二维数组。

## 新增元素

### length

可以通过 length 长度来实现数组扩容的目的。

```js
arr[arr.length] = "yellow";
```

### index

通过修改索引号，追加数组元素

```js
arr[index] = "black";
```

## 数组的遍历

### for 循环

遍历数组就是将数组中所有的元素都取出来。

```js
for (var i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
```

### for ... in

for ... in 和 for 循环一样，我们可以访问数组的下标，而不是实际的数组元素值。

```js
for (let i in arr) {
  console.log(arr[i]);
}
```

### for...of

使用 for...of，则可以直接访问数组的元素值.

```js
for (const v of num) {
  console.log(v);
}
```

一般遍历对象用`for in`，留下一个印象(in Object)

### forEach()

使用`forEach()`，则可以同时访问数组的下标与元素值

```js
num.forEach((v, i, o) => console.log(i, v, o));
```

`forEach()`需要一个函数作为参数

```js
arr.forEach(function (value, index, obj) {
  console.log(value, index, obj);
});
```

- 像这种函数，由我们创建但是不由我们调用的，称为回调函数。
- 数组中有几个元素，函数就会执行几次，每次执行时，浏览器会将遍历到的元素以实参的形式传递进来，我们可以定义形参读取这些内容。
- 浏览器会在回调函数中传递 3 个参数
  - 第一个参数 value：当前正在遍历的元素
  - 第二个参数 index：当前正在遍历元素的索引
  - 第三个参数 obj：正在遍历的数组

**4 种循环语法，只有`for/in`不会忽略非数字属性**

## 检测数组的方法

### instanceof

```js
arr instanceof Array;
```

### Array.isArray()

```js
Array.isArray(arr);
```

## 数组的方法

### push()

在数组的末尾添加一个或多个元素

```js
 arr.push('参数');
 arr.push('参数1','参数2'...);
```

- 返回值是新数组的长度
- 会改变原数组

### pop()

删除最后一个元素，无参数

```js
arr.pop();
```

- 返回被删除的元素

- 会改变原数组

### unshift()

向开头添加一个或多个元素

```js
 arr.unshift('参数');
 arr.unshift('参数1','参数2'...);
```

- 返回数组的新长度
- 向前插入元素后，其他元素索引会依次调正
- 会改变原数组

### shift()

删除第一个元素

```js
arr.shift();
```

- 返回被删除的元素
- 会改变原数组

### slice()

从数组中提取指定的一个或多个元素，返回新的数组

```js
 newArr = arr.slice([begin[, end]]);
 新数组 = 原数组.slice(开始位置的索引, 结束位置的索引);
```

- 传递一个负值，表示从后往前计算
- 注意：包含开始索引，不包含结束索引
- 不会改变原数组

### splice()

从数组中删除指定的一个或多个元素，也可以替换和插入元素

```js
 array.splice(starti,n);
 splice(开始元素的索引，需要删除几个元素，"添加的元素")
```

- 删除/插入/替换，删除 0 个时即可替换和插入

- 会改变原数组

### concat()

- 可以连接一个或多个数组，并将新的数组返回
- 不会改变原数组

### join()

将数组转换成字符串

```js
arr.join(); //默认是`,`
arr.join("-");
arr.join("&"); //指定其他符号
arr.toString();
```

- 不会改变原数组，将转换后的字符串作为结果返回
- 可以指定一个字符串作为参数，这个字符串将成为数组元素的连接符，默认是`,`

### reverse()

- 反转数组，返回的结果为反转后的数组
- 会改变原数组

### sort()

- 对数组的元素默认按照 Unicode 编码，从小到大排序
- 可以自己指定排序规则
- 添加一个回调函数
- 回调函数需要定义两个形参
- 浏览器将会使用数组中的元素作为实参去调回调函数
- 会改变原数组

```js
arr2.sort(function (a, b) {
  return a - b; //升序排列，b-a降序排列
});

num.sort((a, b) => a - b); //升序排列，b-a降序排列
```

### indexOf()

在数组中查找给定元素的第一个索引。

- 存在，返回索引号
- 不存在，返回-1

### lastIndexOf()

在数组中查找给定元素的最后一个索引。

- 存在，返回索引号
- 不存在，返回-1
