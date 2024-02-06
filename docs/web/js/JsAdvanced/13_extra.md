# with、eval、严格模式

## with 语句

```js
let message = "message";
let obj = {
  message: "Hello World",
};

with (obj) {
  console.log(message); //Hello World
}
```

## eval 函数

eval 函数允许执行一个代码字符串

- 可以将传入的字符串当做 js 代码执行
- 会将最后一句执行语句的结果，作为返回值

```js
var message = "Hello World";
var codeString = `var name = "huang"; console.log(name); console.log(message); "abc";`;
var result = eval(codeString); //huang Hello World
console.log(result); //abc
```

## 严格模式

JS 有一种严格模式(strict mode)的概念

- 具有限制性的 js 模式
- 浏览器对以更加严格的方式对代码进行检测和执行
