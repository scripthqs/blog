# 数据类型检测

JavaScript 有很多方法可以确定值到底是什么类型。

- typeof 运算符
- instanceof 运算符
- Object.prototype.toString 方法

## typeof 运算符

`typeof`运算符可以返回一个值的数据类型。它会将该值的类型以字符串的形式返回。

```js
typeof 变量;
```

- 数值返回 `'number'`
- 字符串返回 `'string'`
- 布尔值返回 `'boolean'`
- 函数返回 `'function'`
- undefined 返回 `'undefined'`
- null 返回 `'object'` 特殊，因为在 js 设计时，没有考虑 null，把 null 当作 object 的特殊值。

`typeof`可以用来检查一个没有声明的变量，而不报错。

```js
v;
// ReferenceError: v is not defined
typeof v;
// "undefined"
```

变量 v 没有用 var 命令声明，直接使用就会报错。但是，放在 typeof 后面，就不报错了，而是返回 undefined。

**总结：**

- 可以判断数值、字符串、undefined、布尔值、function
- 不能判断 null 和 object
- 不能判断 object 和 array
- 使用 typeof 检查`array`会返回`object`而不是`array`
- 检查数组必须使用`instanceof`

## instanceof 运算符

`instanceof`判断对象的具体类型，`instance`的含义是实例。

- A instanceof B
- 如果 B 函数的显式原型对象在 A 对象的原型链上，返回 true，否则返回 false。

```js
let arr = [];
arr instanceof Array; //true
```

## ===

`===` 可以判断 undefined、null

数量类型判断不要使用`==`，因为它有可能会做数据类型转换。
