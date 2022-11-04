# 递归(recursion)

递归从解决小问题开始，直到解决大问题。调用自身函数的函数叫做递归。

```js
// 要理解递归，首先要理解递归。
const understandRecursion = understandRecursion => {
  const recursionAnswer = confirm('Do you understand recursion?');
  if (recursionAnswer === true) {
    //停止递归的条件
    return true;
  }
  understandRecursion(recursionAnswer);
};
```

## 计算 n 的阶乘(factorial)

```js
//迭代阶乘
const jsFactorial = n => {
  let res = 1;
  for (let i = n; i > 1; i--) {
    res *= i;
  }
  return res;
};
//递归阶乘
const jsFactorial = n => {
  if (n < 0) return false;
  if (n <= 1) return 1;
  return n * jsFactorial(n - 1);
};
```

## 斐波那契数列(fibonacci)

斐波那契数列由 0 1 1 2 3 5 8 等组成的序列。第 3 项开始由前两项相加得到。f(n) = f(n-1) + f(n-2);

```js
//迭代求斐波那契数列
const fibonacci = n => {
  if (n < 1) return 0;
  if (n <= 2) return 1;
  let f1 = 0;
  let f2 = 1;
  let fn = n;
  for (let i = 2; i < n; i++) {
    fn = f1 + f2;
    f1 = f2;
    f2 = fn;
  }
  return fn;
};
//递归求斐波那契数列
const fibonacci = n => {
  if (n < 1) return 0;
  if (n <= 2) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
};
```
