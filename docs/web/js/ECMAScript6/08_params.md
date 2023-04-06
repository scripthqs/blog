# 函数默认参数值

ES6 允许给函数参数赋值初始值

1. 形参初始值，具有默认值的参数，一般位置放在最后
2. 可以与解构赋值结合使用

```js
function add(a, b, c = 10) {
  return a + b + c;
}
var a = add(1, 2);
console.log(a); //13
```

```js
function connect(options) {
  console.log(options.host);
  console.log(options.username);
  console.log(options.password);
  console.log(options.port);
}
function connect({ host, username, password, port = 8888 }) {
  console.log(host);
  console.log(username);
  console.log(password);
  console.log(port);
}
connect({
  host: "localhost",
  username: "root",
  password: "123456",
});
```

## 默认参数处理

默认参数是不会对 null 进行处理的，使用`??`判断

```js
// 注意: 默认参数是不会对null进行处理的
function foo(arg1 = "我是默认值", arg2 = "我也是默认值") {
  // 1.两种写法不严谨
  // 默认值写法一:
  // arg1 = arg1 ? arg1: "我是默认值"

  // 默认值写法二:
  // arg1 = arg1 || "我是默认值"

  // 2.严谨的写法
  // 三元运算符
  // arg1 = (arg1 === undefined || arg1 === null) ? "我是默认值": arg1

  // ES6之后新增语法: ??
  // arg1 = arg1 ?? "我是默认值"

  // 3.简便的写法: 默认参数
  console.log(arg1, arg2);
}

// 1.注意一: 有默认参数的形参尽量写到后面
// 2.有默认参数的形参, 是不会计算在length之内(并且后面所有的参数都不会计算在length之内)
// 3.剩余参数也是放到后面(默认参数放到剩余参数的前面)
function foo(age, name = "abc", ...args) {
  console.log(name, age, args);
}

foo(18, "abc", "cba", "nba");

// 1.注意一: 有默认参数的形参尽量写到后面
// 2.有默认参数的形参, 是不会计算在length之内(并且后面所有的参数都不会计算在length之内)
// 3.剩余参数也是放到后面(默认参数放到剩余参数的前面)
function foo(age, name = "why", ...args) {
  console.log(name, age, args);
}

foo(18, "abc", "cba", "nba");

console.log(foo.length);
```
