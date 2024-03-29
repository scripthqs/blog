# Ts 语法细节

## 联合类型

Ts 可以使用运算符，从现有类型中构建新的类型。

- 联合类型是由两个或者多个其他类型组成的类型
- 表示可以是这些类型下的任何一种类型
- 联合类型的每一个类型称为联合成员

```ts
let id: number | string;

// 使用的时候要小心，可以配合类型缩小
function printID(id: number | string) {
  console.log("您的ID:", id);
  // 类型缩小
  if (typeof id === "string") {
    console.log(id.length);
  } else {
    console.log(id);
  }
}
```

## 类型别名

使用 type 关键字声明类型别名

```ts
type myType = 1 | 2 | 3 | 4;
let k: myType;
let x: myType;

type Point = {
  x: number;
  y: number;
};

function printPoint(p: Point) {
  console.log(p.x, p.y);
}
```

## 接口声明

type 和 interface 两个关键字的使用方法类似。

使用 type 可以声明一个对象类型

```ts
type Point = {
  x: number;
  y: number;
};
```

使用接口声明对象，没有`=`，并建议使用 I 开头

```ts
interface IPoint {
  x: number;
  y: number;
}
```

### type 和 interface 的区别

type 和 interface 都可以声明对象类型。大多数都可以任意使用。

- type 范围广，可以定义非对象类型。interface 只能声明对象。
- type 别名不可以重复声明。interface 接口可以重复声明。
- interface 支持继承的

如果是非对象类型的定义使用 type, 如果是对象类型的声明那么使用 interface。

```ts
// 1. type类型使用范围更广, 接口类型只能用来声明对象
type MyNumber = number;
type IDType = number | string;

// 2.在声明对象时, interface可以多次声明
// 2.1. type不允许两个相同名称的别名同时存在
type PointType1 = {
  x: number;
  y: number;
};

//报错
type PointType1 = {
  z?: number;
};

// 2.2. interface可以多次声明同一个接口名称
interface PointType2 {
  x: number;
  y: number;
}

interface PointType2 {
  z: number;
}

const point: PointType2 = {
  x: 100,
  y: 200,
  z: 300,
};

// 3.interface支持继承的
interface IPerson {
  name: string;
  age: number;
}

interface Student extends IPerson {
  do: string;
}

const student: Student = {
  name: "aaa",
  age: 20,
  do: "homework",
};
```

### implements

```ts
interface Person {
  name: string;
  sayHello(): void;
}

// 作用: 接口被类实现;
class Student implements Person {
  constructor(public name: string) {}
  sayHello() {
    console.log("大家好，我是" + this.name);
  }
}
```

## 交叉类型

交叉类型使用`&`符号，表示需要满足多个类型的条件

```ts
type nsType = number & string;
//但是，实际情况该类型是不存在的，nsType此时就是一个never类型
```

开发中，交叉类型通常是对对象类型进行交叉使用的。

```ts
let j: { name: string } & { age: number };

interface IColor {
  color: string;
}
interface ISize {
  getSize: () => void;
}
type newType = IColor & ISize;
const obj: newType = {
  color: "red",
  getSize: () => {},
};
```

## 类型断言

有些情况下，变量的类型对于我们来说是很明确，但是 TS 编译器却并不清楚，此时，可以通过类型断言来告诉编译器变量的类型。

使用**类型断言**

- 可以告诉解析器，变量的实际类型

```ts
// 变量 as 类型;
let s: string;
let e: unknown;
s = e as string;
```

当获取 html 元素时，ts 只知道该函数会返回 HTMLElement

```ts
const imgEL = document.getElementById("myImg") as HTMLImageElement;
img.src = "图片地址";
```

类型断言不能太离谱

```ts
let name = "script" as number; //会报错
```

## 非空断言

```ts
function printMsg = (msg?:string){
  console.log(msg.toUpperCase())
}
```

此时，传入的 msg 有可能为 undefined，这个时候执行方法会报错。

当我们确定，传入的参数一定是有值的，就可以使用非空类型断言`!`。

```ts
function printMsg = (msg?:string){
  console.log(msg!.toUpperCase())
}

//这里没必要使用非空断言，更推荐可选链这种写法
function printMsg = (msg?:string){
  console.log(msg?.toUpperCase())
}
```

这种情况也可以使用类型缩小来解决

```ts
// 定义接口
interface IPerson {
  name: string;
  age: number;
  friend?: {
    name: string;
  };
}

const info: IPerson = {
  name: "why",
  age: 18,
};

// 访问属性: 可选链: ?.
console.log(info.friend?.name); //直接访问name，ts会报错，可以使用?
// 属性赋值:
// 解决方案一: 类型缩小
if (info.friend) {
  info.friend.name = "kobe";
}
// 解决方案二: 非空类型断言(有点危险, 只有确保friend一定有值的情况, 才能使用)
info.friend!.name = "james";
```

## 字面量类型

```ts
// 1.字面量的基本使用
const name: "huang" = "huang";
let age: 20 = 20;

// 2.可以将多个字面量结合起来
type Direction = "left" | "right" | "up" | "down";
const d1: Direction = "left";

//例子
// 封装一个请求方法时
type MethodType = "get" | "post";
function request(url: string, method: MethodType) {}
request("url", "post");
const info = {
  url: "xxxx",
  method: "post",
};
request(info.url, info.method);
//此时，会报错，因为info.method获取的是string类型

// 解决方案一: info.method进行类型断言
request(info.url, info.method as "post");

// 解决方案二: 直接让info对象类型是一个字面量类型
const info2: { url: string; method: "post" } = {
  url: "xxxx",
  method: "post",
};

//方案二还有一种简洁的写法
const info2 = {
  url: "xxxx",
  method: "post",
} as const;
// xxx 本身就是一个string
request(info2.url, info2.method);
```

## 类型缩小

常见的类型缩小，或者叫类型保护的方法。常见的方法有：

- typeof
- 平等缩小(===,!==)
- instanceof
- in

### typeof

```ts
type NS = number | string;
const printId = (id: NS) => {
  if (typeof id === "string") {
    console.log(id.toUpperCase());
  } else {
    id++;
  }
};
```

### 平等缩小

```ts
type Direction = "left" | "right" | "up" | "down";
function switchDirection(direction: Direction) {
  if (direction === "left") {
    console.log("左:", "角色向左移动");
  } else if (direction === "right") {
    console.log("右:", "角色向右移动");
  } else if (direction === "up") {
    console.log("上:", "角色向上移动");
  } else if (direction === "down") {
    console.log("下:", "角色向下移动");
  }
}
```

### instanceof

```ts
function printDate(date: string | Date) {
  if (date instanceof Date) {
    console.log(date.getTime());
  } else {
    console.log(date);
  }
  // 或者
  // if (typeof date === "string") {
  //   console.log(date)
  // } else {
  //   console.log(date.getTime())
  // }
}
```

### in

```ts
interface ISwim {
  swim: () => void;
}
interface IRun {
  run: () => void;
}
function move(animal: ISwim | IRun) {
  if ("swim" in animal) {
    animal.swim();
  } else if ("run" in animal) {
    animal.run();
  }
}
const fish: ISwim = {
  swim: function () {},
};
const dog: IRun = {
  run: function () {},
};
move(fish);
move(dog);
```
