# Ts 的函数类型

- 函数可以作为参数，也可以作为返回值。
- 函数也有自己的类型，可以编写函数类型的表达式，来表示函数类型。

```ts
const foo: any = (arg: number): number => {
  return 123;
};
// foo本身也是一个标识符, 也应该有自己的类型

function bar(): number {
  return 123;
}
```

可以用函数类型的表达式（Function Type Expressions），来表示函数类型。

## 函数类型表达式

```ts
// 方案一: 函数类型表达式 function type expression
// 格式: (参数列表) => 返回值
type BarType = (num1: number) => number;
//参数num1:number不能省略，省略就代表any
const bar: BarType = (arg: number): number => {
  return 123;
};

//定义一个计算函数
type CalcType = (num1: number, num2: number) => number;
const calc = (calcFn: CalcType) => {
  const num1 = 10;
  const num2 = 20;
  const res = calcFn(num1, num2);
  console.log(res);
};
// 2.函数的调用
const sum = (num1: number, num2: number) => {
  return num1 + num2;
};
function foo(num1: number) {
  return num1;
}
calc(sum);
calc(foo); //不会报错，函数类型的参数不会被检测

// 3.使用匿名函数
calc(function(num1, num2) {
  return num1 - num2;
});
calc(() => 123); //不传参数也不会报错
```

## 函数的调用签名

从对象的角度来看待这个函数, 也可以有其他属性

- 函数类型表达式并不能支持声明属性
- 可以在一个对象类型中写一个调用签名，描述一个带有属性的函数

```ts
interface IBar {
  name: string;
  age: number;
  // 函数可以调用: 函数调用签名
  (num1: number): number;
}

const bar: IBar = (num1: number): number => {
  return 123;
};

bar.name = "aaa";
bar.age = 18;
bar(123);
```

1. 如果只是描述函数类型本身(函数可以被调用), 使用函数类型表达式(Function Type Expressions)
2. 如果在描述函数作为对象可以被调用, 同时也有其他属性时, 使用函数调用签名(Call Signatures)

## 函数的构造签名

函数可以使用 new 操作符调用，当被调用的时候，会产生一个新对象，TypeScript 会认为这是一个构造函数。

```ts
class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

interface ICTORPerson {
  new (): Person;
}

function factory(fn: ICTORPerson) {
  const f = new fn();
  return f;
}

factory(Person);
```

## 参数的可选类型

```ts
function foo(x: number, y?: number) {
  console.log(x, y);
}

//此时，y的类型是number|undefined
```

可选类型必须在必传参数的后面

## 默认参数

```ts
function foo(x: number, y: number = 6) {
  console.log(x, y);
}
// 此时y的类型是number|undefined
foo(10);
foo(10, undefined);
foo(10, 55);
foo(1, "2"); //报错
```

1. 有默认值的情况下, 参数的类型注解可以省略
2. 有默认值的参数, 是可以接收一个 undefined 的值

## 剩余参数

剩余参数语法允许我们将一个不定数量的参数放到一个数组中。

```ts
function foo(...args: (string | number)[]) {}

foo(123, 321);
foo("abc", 111, "cba");
```

## 函数重载

函数的重载就是函数名称相同，函数的参数个数和参数的类型不同。

在 TypeScript 中，我们可以去编写不同的重载签名（_overload signatures_）来表示函数可以以不同的方式进行调用。

```ts
// 获取数组或者字符串的length
// 1.普通的实现
function getLength(arg) {
  return arg.length;
}

// 2.函数的重载
function getLength(arg: string): number;
function getLength(arg: any[]): number;
function getLength(arg) {
  return arg.length;
}

// 3.联合类型实现(可以使用联合类型实现的情况, 尽量使用联合类型)
function getLength(arg: string | any[]) {
  return arg.length;
}
```
