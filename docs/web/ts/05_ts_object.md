# 面向对象

## 面向对象概念

面向对象是程序中一个非常重要的思想。面向对象很简单，简而言之就是**程序之中所有的操作都需要通过对象来完成**。

- 操作浏览器要使用 window 对象
- 操作网页要使用 document 对象
- 操作控制台要使用 console 对象

一切操作都要通过对象，也就是所谓的面向对象，那么对象到底是什么呢？这就要先说到程序是什么，计算机程序的本质就是对现实事物的抽象，抽象的反义词是具体，比如：照片是对一个具体的人的抽象，汽车模型是对具体汽车的抽象等等。程序也是对事物的抽象，在程序中我们可以表示一个人、一条狗、一把枪、一颗子弹等等所有的事物。一个事物到了程序中就变成了一个对象。

在程序中所有的**对象都被分成了两个部分数据和功能**，以人为例，人的姓名、性别、年龄、身高、体重等属于数据，人可以说话、走路、吃饭、睡觉这些属于人的功能。**数据在对象中被成为属性，而功能就被称为方法**。所以简而言之，在程序中一切皆是对象。

## 类（class）

要想面向对象，操作对象，首先便要拥有对象，那么下一个问题就是如何创建对象。**要创建对象，必须要先定义类**，所谓的类可以理解为对象的模型，程序中可以**根据类创建指定类型的对象**，举例来说：可以通过 Person 类来创建人的对象，通过 Dog 类创建狗的对象，通过 Car 类来创建汽车的对象，**不同的类可以用来创建不同的对象**。

### 定义类

```ts
class 类名 {
 属性名: 类型;

 constructor(参数: 类型){
  this.属性名 = 参数;
 }

 方法名(){
  ....
 }
}
```

```ts
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(`大家好，我是${this.name}`);
  }
}
```

### 使用类

```js
const p = new Person("aaa", 5000);
p.sayHello();
```

## 面向对象的特点

面向对象的特点：封装、继承和多态。

### 封装

- 对象实质上就是属性和方法的容器，它的主要作用就是存储属性和方法，这就是所谓的封装
- 默认情况下，对象的属性是可以任意的修改的，为了确保数据的安全性，在 TS 中可以对属性的权限进行设置
- 只读属性（readonly）：
  - 如果在声明属性时添加一个 readonly，则属性便成了只读属性无法修改
- TS 中属性具有三种修饰符：
  - public（默认值）：可以在类、子类和对象中修改
  - protected：可以在类、子类中修改
  - private：可以在类中修改,私有属性: `属性前面一般会使用_`，一种规范。

#### public

可以在类、子类和对象中修改

```ts
class Person {
  public name: string; // 写或什么都不写都是public
  public age: number;

  constructor(name: string, age: number) {
    this.name = name; // 1.可以在类中修改
    this.age = age;
  }

  sayHello() {
    console.log(`大家好，我是${this.name}`);
  }
}

class Employee extends Person {
  constructor(name: string, age: number) {
    super(name, age);
    this.name = name; // 2.可以在子类中修改
  }
}

const p = new Person("aaa", 18);
p.name = "bbb"; // 3.可以通过对象修改
```

#### protected

可以在类、子类中修改

```ts
class Person {
  protected name: string;
  protected age: number;

  constructor(name: string, age: number) {
    this.name = name; // 1.可以修改
    this.age = age;
  }

  sayHello() {
    console.log(`大家好，我是${this.name}`);
  }
}

class Employee extends Person {
  constructor(name: string, age: number) {
    super(name, age);
    this.name = name; //2.可以修改
  }
}

const p = new Person("aaa", 18);
p.name = "bbb"; // 3.不能修改
```

#### private

可以在类中修改

```ts
class Person {
  private name: string;
  private age: number;

  constructor(name: string, age: number) {
    this.name = name; // 1.可以修改
    this.age = age;
  }

  sayHello() {
    console.log(`大家好，我是${this.name}`);
  }
}

class Employee extends Person {
  constructor(name: string, age: number) {
    super(name, age);
    this.name = name; //2.不能修改
  }
}

const p = new Person("aaa", 18);
p.name = "bbb"; // 3.不能修改
```

#### readonly

```ts
class Person {
  readonly name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const p = new Person("aaa", 18);
console.log(p.name, p.age); //可以读取name和age
// p.name = "bbb"; //只读属性不能进行写入操作
p.age = 20;
```

#### 属性存取器

- 对于一些不希望被任意修改的属性，可以将其设置为 private
- 直接将其设置为 private 将导致无法再通过对象修改其中的属性
- 我们可以在类中定义一组读取、设置属性的方法，这种对属性读取或设置的属性被称为属性的存取器
- 读取属性的方法叫做 setter 方法，设置属性的方法叫做 getter 方法

```ts
class Person {
  // 私有属性: 属性前面会使用_;
  private _name: string;

  constructor(name: string) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  set name(name: string) {
    this._name = name;
  }
}

const p1 = new Person("aaa");
console.log(p1.name); // 通过getter读取name属性
p1.name = "bbb"; // 通过setter修改name属性
```

#### 静态属性

- 静态属性（方法），也称为类属性。使用静态属性无需创建实例，通过类即可直接使用
- 静态属性（方法）使用 static 开头

```ts
class Tools {
  static PI = 3.1415926;

  static sum(num1: number, num2: number) {
    return num1 + num2;
  }
}

console.log(Tools.PI);
console.log(Tools.sum(123, 456));
```

### 继承

- 继承时面向对象中的一个特性
- 通过继承可以将其他类中的属性和方法引入到当前类中
- 我们使用 extends 关键字来实现继承，子类中使用 super 来访问父类

```ts
class Animal {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Dog extends Animal {
  bark() {
    console.log(`${this.name}在汪汪叫！`);
  }
}

const dog = new Dog("旺财", 4);
dog.bark();
```

通过继承可以在不修改类的情况下完成对类的扩展

#### 重写

发生继承时，如果子类中的方法会替换掉父类中的同名方法，这就称为方法的重写

```ts
class Animal {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  run() {
    console.log(`父类中的run方法！`);
  }
}

class Dog extends Animal {
  bark() {
    console.log(`${this.name}在汪汪叫！`);
  }

  run() {
    console.log(`子类中的run方法，会重写父类中的run方法！`);
  }
}

const dog = new Dog("旺财", 4);
dog.run();
```

#### 抽象类（abstract class）

抽象类是专门用来被其他类所继承的类，它只能被其他类所继承不能用来创建实例

```ts
abstract class Animal {
  // 抽象方法必须出现在抽象类中, 类前面也需要加abstract
  abstract sound(): void; //抽象方法，该方法让子类自己实现
  bark() {
    console.log("动物在叫~");
  }
}

class Dog extends Animals {
  sound() {
    console.log("汪汪汪"); //子类实现
  }
}
class Cat extends Animals {
  sound() {
    console.log("喵喵喵"); //子类实现
  }
}
```

1. 使用 abstract 开头的方法叫做抽象方法
2. 抽象方法没有方法体只能定义在抽象类中
3. 继承抽象类时抽象方法必须要在子类中实现。
4. 抽象类是不能被实例的（也就是不能通过 new 创建）

作用：

- 抽象类是用来捕捉子类的通用特性的，是被用来创建继承层级里子类的模板
- 现实中有些父类中的方法确实没有必要写，因为各个子类中的这个方法肯定会有不同
- 而写成抽象类，这样看代码时，就知道这是抽象方法，而知道这个方法是在子类中实现的，有提示作用

## 类类型

类本身也是可以作为一种数据类型的

1. 可以创建类对应的实例对象
2. 类本身可以作为这个实例的类型
3. 类也可以当中有一个构造签名的函数

```ts
class Person {}
const name: string = "aaa";
const p: Person = new Person();
function printPerson(p: Person) {}

function factory(ctor: new () => void) {}
factory(Person);
```

## 严格的字面量赋值检测

```ts
interface IPerson {
  name: string;
  age: number;
}

const aaa = {
  name: "aaa",
  age: 18,
  // 多了一个height属性
  height: 1.88,
};

// 1.奇怪的现象一:
// 定义info, 类型是IPerson类型
const info: IPerson = aaa; // ts没有报错

// 2.奇怪的现象二:
function printPerson(person: IPerson) {}
// 多了一个height属性
const bbb = { name: "bbb", age: 30, height: 1.98 };
printPerson(bbb); // 没有报错
/**
 * aaa 作为对象字面量直接赋值给变量，bbb直接传递给函数，TypeScript 采用了类型推断来判断它们的类型。
 * 由于这两个对象中包含了 name 和 age 属性，且它们的类型与 IPerson 接口中的属性类型一致，
 * 因此 TypeScript 推断出它们的类型为 IPerson。
 */
```

解释现象

- 第一次创建的对象字面量, 称之为 fresh(新鲜的)
- 对于新鲜的字面量, 会进行严格的类型检测. 必须完全满足类型的要求(不能有多余的属性)
- 当类型断言或对象字面量的类型扩大时，新鲜度会消失

## 对象类型索引签名

```ts
// 定义对象类型
type IPerson = {
  // 属性?: 可选的属性
  name?: string;
  // readonly: 只读的属性
  readonly age: number;
  // 索引签名
  [index: string]: number;
};

interface IStudent {
  name?: string;
  readonly work: string;
}

const p: IPerson = {
  name: "aaa",
  age: 18,
};
```

对象类型的索引签名允许为对象定义动态属性名，可以定义一个对象，其中属性名不是在定义时静态指定的，而是在运行时动态生成的。例如需要处理来自 API 或其他动态来源的数据时。

```ts
interface MyObject {
  // 返回值类型的目的是告知通过索引去获取到的值是什么类型;
  [key: string]: string | number;
}

const myObject: MyObject = {
  name: "aaa",
  age: 20,
  email: "aaa@example.com",
};

console.log(myObject.name); // Output: aaa
console.log(myObject.age); // Output: 20
console.log(myObject.email); // Output: aaa@example.com

//从接口中获取数据
interface ApiResponse {
  [key: string]: string | number;
}

fetch("https://api.example.com/users")
  .then((response) => response.json())
  .then((data) => {
    const users: ApiResponse[] = data.users;
    users.forEach((user) => {
      console.log(user.name, user.email);
    });
  });
```
