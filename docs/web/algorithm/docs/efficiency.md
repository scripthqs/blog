# 时间复杂度和空间复杂度

算法是用来操作数据结构的方法，可能不同的算法得到的结果是一样的，但是消耗的资源和时间可能会有很大的差别。主要体现在两个方面：

1. 时间纬度：执行当前算法所消耗的时间，用时间复杂度描述
2. 空间纬度：执行当前算法需要占用多少内存，用空间复杂度来描述

一个算法的效率主要就是通过时间复杂度和空间复杂度来评判。

## 时间复杂度

由于机器的性能不同，数据的规模不同，所以相同的程序运行时间可能并不一样，所有需要一种通用的方法来表示，这就是大 O 符号表示法。

在大 O 符号表示法中，时间复杂度的公式是： `T(n) = O(f(n))`，其中 f(n) 表示每行代码执行次数之和，而 O 表示正比例关系，这个公式的全称是：算法的渐进时间复杂度。常见的时间复杂度：

- 常数阶 O(1)
- 对数阶 O(logN)
- 线性阶 O(n)
- 线性对数阶 O(nlogN)
- 平方阶 O(n²)
- 立方阶 O(n³)
- k 次方阶 O(n^k)
- 指数阶 O(2^n)

从上至下依次的时间复杂度越大，执行的效率越低。

### 常数阶 O(1)

只要没有循环等复杂结构，那么无论代码执行了多少行，那么这个代码的时间复杂度就是 O(1)。

```js
let i = 1;
let j = 2;
i++;
++j;
...
//有一万个i++和++j
let k = i + j;
//上述代码执行时，消耗的时间并不随i或者j的增大而变长，所以时间复杂度为O(1)
```

### 线性阶 O(n)

```js
for (let i = i; i <= n; ++i) {
  let j = i;
  j++;
}
```

代码循环执行 n 次，消耗的时间随着 n 的线性增加而线性增长，因此用 O(n) 表示它的时间复杂度。

### 对数阶 O(logN)

```js
let i = 1;
while (i < n) {
  i = i * 2;
}
```

在 while 循环中，每次都将 i 乘以 2，i 会距离 n 越来越近。假设循环 x 次后，循环就退出，就是 2^x = n，x = log2^n，此时，时间复杂度就为：O(logN)

### 线性对数阶 O(nlogN)

```js
for (let m = 1; m < n; m++) {
  let i = 1;
  while (i < n) {
    i = i * 2;
  }
}
```

线性对数就是将时间复杂度为 O(logN)的代码执行 n 次，即 `n * O(logN) = O(nlogN)`，

### 平方阶 O(n²)

```js
for (let i = 1; i < n; i++) {
  for (let j = 1; j < n; j++) {
    let m = i + j;
  }
}
```

平方阶 O(n²)就是将线性阶 O(n)再嵌套一次