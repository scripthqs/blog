# 对象的简写

ES6 允许在大括号里面，直接写入变量和函数，作为对象的属性和方法。这样的书写更加简洁。

1. 属性的增强
2. 方法的增强
3. 计算属性名的写法

```js
let msg = "hello";
let fun = function () {
  console.log("函数fun");
};

// 3. 计算属性名的写法
const key = "address" + " city";
const obj = {
  msg: msg, //ES5写法
  fun, //ES6简写
  fun1: function () {
    console.log("对象中的函数fun1"); //ES5写法
  },
  fun2() {
    console.log("对象中的函数fun2,简写形式"); //ES6写法
  },
  [key]: "广州",
};
```

**注意：对象简写形式简化了代码，所以以后用简写就对了**。
