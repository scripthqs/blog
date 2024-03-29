# js 变量

## 常量

常量也称字面量，不可改变的量。

- 数字 12345
- 字符串 单词句子'123' 'word' '吃饭'
- 布尔值 true false

字面量都可以直接使用，但是我们都不会直接使用字面量。一般定义一个变量来保存这个字面量。

## 变量

变量是程序向内存申请的一块可以存储数据的空间。变量需要的声明和赋值。

声明/定义变量

```js
var name; //声明一个名为`name`的变量。ES6之前都用`var`
const name;//定义一个常量
let age;//定义一个变量
```

变量的赋值

```js
name = "haha"; //变量名=变量值
age = 20;
```

变量的声明和赋值可以写在一起

```js
var a = 100;
const b = "hello";
let b = "world";
var age = 10,
  name = "zs",
  gender = "男";
```

声明一个变量并赋值，称为变量的初始化。

声明变量要点：

- 变量新赋值，以最后一次赋值为准
- 同时声明多个变量，多个变量名用`,`隔开。var name = 'a' , age =18;
- 变量建议先声明再使用。
- 变量名严格区分大小写。
- 定义但为赋值的变量结果显示`undefined`

## 区块

JavaScript 使用大括号，将多个语句组合起来，称为区块。对于`var`命令，JavaScript 的区块不构成单独的作用域（scope）。

```js
{
  var a = 1;
  const b = 2;
  let c = "hello world";
}
console.log(a);
console.log(b); //报错
console.log(c); //报错
```

在区块内部，使用 var 声明并赋值的变量 a，在区块外部依然有效。区块对于 var 不构成单独的作用域。所以现在都是用 let 和 const 声明变量

## 标识符

标识符：在 js 中可以由我们自主命名的都可以称为标识符。

变量名、函数名、属性名、参数名都是标识符。我们写代码时取的名字就是标识符。

- 可以含有字母、数字、`_`、`$`
- 不能以数字开头
- 不能是关键字和保留字
- 一般使用驼峰命名法，首字母小写，每个单词开头大写，`helloWorld` `tuoFengMingFa`
- 或者下划线方法`hello_world`

## 关键字

JS 本身已经使用的单词，不能再用来充当变量。

## 保留字

预备关键字
