# 泛型（Generic）

定义一个函数或类时，有些情况下无法确定其中要使用的具体类型（返回值、参数、属性的类型不能确定），或者通过传入不同的函数参数，函数可以帮助我们完成不同的操作，此时泛型便能够发挥作用。

```ts
function test(arg: any): any {
  return arg;
}
```

test 函数有一个参数类型不确定，但是能确定的是其返回值的类型和参数的类型是相同的，由于类型不确定所以参数和返回值均使用了 any，但是很明显这样做是不合适的

1. 首先使用 any 会关闭 TS 的类型检查
2. 其次这样设置也不能体现出参数和返回值是相同的类型。

## 定义泛型

对于上述问题，就需要使用泛型

```ts
function test<Type>(arg: Type): Type {
  return arg;
}
//通常会简写成这种形式
function test<T>(arg: T): T {
  return arg;
}
```

这里的`<T>`就是泛型，T 是我们给这个类型起的名字（不一定非叫 T），设置泛型后即可在函数中使用 T 来表示该类型。所以泛型其实很好理解，就表示某个类型。

此时，定义的 test 函数有 2 中方式来调用：

1. 通过 `<类型>`的方式将类型传递给函数
2. 通过`类型推导`，自动推导出我们传入变量的类型：

```ts
// 1.通过 `<类型>`的方式
test<string>("abc");
test<number>(123);
// 2.通过`类型推导
test("abc");
test(123);
```

### 同时指定多个泛型

```ts
function test<T, K>(a: T, b: K): K {
  return b;
}
test<number, string>(10, "hello");
```

平时在开发中我们可能会看到一些常用的名称：

- T：Type 的缩写，类型
- K、V：key 和 value 的缩写，键值对
- E：Element 的缩写，元素
- O：Object 的缩写，对象

## 泛型接口

定义接口的时候也可以使用泛型：

```ts
interface IPerson<T> {
  name: T;
  age: number;
  address: T;
  list: T[];
  run: (value: T) => void;
}
//并且可以给T直接指定一个类型
interface IPerson<T = string> {
  name: T;
  age: number;
  address: T;
  list: T[];
  run: (value: T) => void;
}
```

## 泛型类

定义类的时候可以使用泛型

```ts
class Point<T> {
  x: T;
  y: T;
  constructor(x: T, y: T) {
    this.x = x;
    this.y = y;
  }
}

const p1 = new Point(10, 20);
const p2 = new Point("123", "321");
const p3 = new Point<string>("123", "321");
const p4: Point<number> = new Point(10, 20);
```

## 泛型约束

希望传入的类型有某些共性，但是这些共性可能不是在同一种类型中

- string 和 array 都是有 length 的，或者某些对象也是会有 length 属性的
- 只要是拥有 length 的属性都可以作为我们的参数类型

```ts
interface ILength {
  length: number;
}

// 1.getLength不使用泛型
function getLength(arg: ILength) {
  return arg.length;
}

const length1 = getLength("aaaa");
const length2 = getLength(["aaa", "bbb", "ccc"]);
const length3 = getLength({ length: 100 });
// const length4 = getLength({ length: 100, width: 20 });//会报错

// 2.获取传入的内容, 这个内容必须有length属性，使用泛型
// 使用 T extends ILength 表示泛型 T 必须是 ILength 的子类，不一定非要使用接口，类和抽象类同样适用。
// T 相当于是一个变量, 用于记录本次调用的类型, 所以在整个函数的执行周期中, 一直保留着参数的类型
function getInfo<T extends ILength>(args: T): T {
  return args.length;
}

const info1 = getInfo("aaaa");
const info2 = getInfo(["aaa", "bbb", "ccc"]);
const info3 = getInfo({ length: 100 });
// 传入的类型必须有这个属性，也可以有其他属性，但是必须至少有这个成员。
const info3 = getInfo({ length: 100, width: 20 }); //不会报错
// getInfo(12345)
// getInfo({})
```

T 继承于 ILength ，T 至少有 ILength 的属性，T 也可以有属性

### 泛型参数约束

可以声明一个类型参数，这个类型参数被其他类型参数约束。

```ts
// 传入的key类型, obj当中key的其中之一
interface IPerson {
  name: string;
  age: number;
}

type IPersonKeys = keyof IPerson; // "name"|"age"

// 希望获取一个对象给定属性名的值，所以我们在两个类型之间建立一个约束
function getObjectProperty<O, K extends keyof O>(obj: O, key: K) {
  return obj[key];
}

const info = {
  name: "aaa",
  age: 18,
  height: 1.88,
};

const name = getObjectProperty(info, "name");
```

## 映射类型

一个类型需要基于另外一个类型，但是你又不想拷贝一份，这个时候可以考虑使用映射类型

- 大部分内置的工具都是通过映射类型来实现的
- 大多数类型体操的题目也是通过映射类型完成的

映射类型建立在索引签名的语法上，配合 keyof 创建，映射类型不能使用 interface 定义，只能使用 type

```ts
// 写法1：拷贝一份IPerson
interface IPerson {
  name: string;
  age: number;
}

interface NewPerson {
  name: string;
  age: number;
}

//写法2：映射类型
type MapPerson<T> = {
  // 索引类型以此进行使用
  [aaa in keyof T]: T[aaa];
};
type NewPerson = MapPerson<IPerson>;
```

## 条件类型

很多时候，日常开发中我们需要基于输入的值的类型来决定输出的值的类型，可以使用条件类型判断。

```ts
type IDType = number | string;

// 判断number是否是extends IDType
// const res = 2 > 3? true: false
type ResType = boolean extends IDType ? true : false;

function sum<T extends number | string>(num1: T, num2: T): T extends number ? number : string;
function sum(num1, num2) {
  return num1 + num2;
}

const res = sum(20, 30);
const res2 = sum("abc", "cba");
```
