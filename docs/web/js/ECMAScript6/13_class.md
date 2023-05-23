# class

在 ES6 中，可以使用 class 来定义类，可以使用两种方法：

1. 类声明式
2. 类表达式

```js
class Person {}
const Student = class {};
```

## constructor 构造函数

希望在创建对象的时候给类传递一个参数，需要

- 每个类都可以有一个自己的构造函数（方法），这个方法叫做 constructor
- 当通过 new 操作符时，操作一个类就会调用这个类的构造函数(constructor)
- 每个类只能有一个构造函数(constructor)，如果包含多个 constructor 会抛出异常

通过 new 关键字操作类时，会调用 constructor 函数，并且会执行一下操作：

1. 在内存中创建一个新的空对象
2. 对象内部的`[[prototype]]`属性会被赋值为该类的 prototype 属性
3. 构造函数内部的 this，会指向创建出来的新对象
4. 执行构造函数的内部代码（函数体代码）
5. 如果构造函数没有返回非空对象，则返回创建出来的新对象；

## 类的实例方法

```js
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  running() {
    console.log(this.name + "running");
  }
}
```

## 类的访问器方法

```js
class Person {
  constructor(name) {
    this._name = name;
  }
  set name(newName) {
    console.log("调用name的setter方法");
    this._name = newName;
  }
  get name() {
    console.log("调用name的getter方法");
    return this._name;
  }
}
```

## static 类的静态方法

静态方法用于直接使用类来执行的方法，不需要类的实例，使用 static 关键字定义

```js
class Person {
  constructor(age) {
    this.age = age;
  }
  static create() {
    return new Person(20);
  }
}
```

## extend 继承

用 extends 关键字，可以方便的实现继承

```js
class Person {}
class Student extends Person {}
```

## super 关键字

在子（派生）类的构造函数中使用 this 或者返回默认对象之前，必须先通过 super 调用父类的构造函数

```js
// 子类的构造函数、实例方法、静态方法
```
