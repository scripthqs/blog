# 对象

在实际开发中，对象和函数往往是相辅相成的

## 对象的简介

对象是属性和方法的结合。对象的属性是函数时，称为方法。

## 创建对象

**1.对象字面量**:

```js
const obj1 = {};
const obj2 = {
  name: "a",
  age: 20,
  fun1: function(name) {
    this.name = name;
  },
};
```

**2.工厂方法创建对象**:

```js
function createPerson(name, age, fun) {
  const obj = new Object();
  obj.name = name;
  obj.age = age;
  obj.fun = function() {
    console.log(this.name);
  };
  return obj;
}
const obj1 = createPerson("a", 20);
const obj2 = createPerson("b", 22);
```

把这个对象封装起来，每次使用类似的对象都使用这个工厂函数来创建。

**问题：**

1. 工厂模式无法解决对象的识别问题： 不知道对象是什么类型的。
2. 每个对象都是通过工厂造就的全新的对象，浪费内存

```js
console.log(obj1.fun === obj2.fun); //false
```

**3.使用构造函数**:

```js
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.say = function() {
    console.log(this.age);
  };
}
const per1 = new Person("a", 20);
const per2 = new Person("b", 22);
```

1. 没有明显的创建对象的过程： （`new Object()`的过程）
2. 直接将参数赋值给了 this（因为 没有创建明显的对象，就需要用 this 进行赋值）
3. 没有 return
4. 构造函数的首字母大写

实例对象中会存在一个 constructor 属性，这个属性指向创造它的构造函数(沿着原型链找到的)

```js
p1.constructor == Person; // true
p2.constructor == Person; // true
```

**存在问题：**

构造函数的问题，浪费内存空间，所有的实例并不能使用同一个函数

```js
console.log(per1.say === per2.say); //false
```

解决办法：

**使用原型对象来添加公用属性和方法，从而实现代码的复用**。

```js
Person.prototype.fun1 = function() {};
console.log(per1.fun1 === per2.fun1); //true
```

**存在问题：**

1. 没有办法通过传入参数来初始化值
2. 如果存在一个引用类型如 Array 这样的值，那么所有的实例将共享一个对象，一个实例对引用类型值的改变会影响所有的实例。

```js
Person.prototype.x = [];
console.log(per1.x);
per1.x.push("a");
console.log(per1.x); //['a']
console.log(per2.x); //['a']
```

## 面向过程和面向对象

**面向过程**：先分析号具体的步骤，然后按照步骤，一步步解决问题。

- 优点：性能比面向对象高，适合跟硬件联系紧密的东西，例如单片机就是采用面向过程编程
- 缺点：没有面向对象易维护、易复用、易拓展

面向对象：以对象功能来划分问题，而不是步骤。

- 优点：面向对象有封装、继承、多态性的特性，可以设计出低耦合的系统，更加灵活，易于维护

**面向对象**的编程思想：对代码和数据进行封装，并以对象调用的方式，对外提供统一的调用接口。

- 开车时，无需关心汽车内部构造多复杂，对大多数人来说，只需要会开，知道有哪些功能就行了

面向对象的特性：在面向对象程序开发思想中，每一个对象都是功能中心，具有明确分工，面向对象编程适合多人合作。

JS 中的面向对象，是基于原型的面向对象。ES6 中，新引入了类(Class)和继承(Extends)来面向对象。

JS 中的对象(Object)是依靠构造器(constructor)和原型(prototype)构造出来的。

## 对象的创建模式

（1）Object 构造函数模式

先创建空对象，再动态添加属性和方法

```js
var p = new Object();
p.name = "hello";
p.age = 19;
p.fun = function(name) {
  this.name = name;
};
console.log(p.name); //"hello"
p.fun("world");
console.log(p.name); //'world'
```

（2）对象字面量模式

使用{}创建对象，同时指定属性和方法

```js
var p = {
  name: "hello",
  age: 20,
  fun: function(name) {
    this.name = name;
  },
};
console.log(p.name); //"hello"
p.fun("world");
console.log(p.name); //'world'
```

（3）工厂模式

通过工厂函数动态创建对象并返回。返回一个对象的函数可以称为工厂函数。

```js
function Person(name, age) {
  var obj = {
    name: name,
    age: age,
    fun: function(name) {
      this.name;
    },
  };
  return obj;
}
var p1 = Person("hello", 20);
var p2 = Person("world", 23);
console.log(p1, p2); //打印是个Object
```

（4）自定义构造函数

自定义构造函数，通过 new 创建对象

```js
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.say = function() {
    console.log(this.age);
  };
}
const p1 = new Person("hello", 20);
const p2 = new Person("world", 22);
console.log(p1, p2); //打印是个Person
```

（5）构造函数+原型的组合模式

自定义构造函数，属性在函数中初始化，方法添加到原型上

```js
function Person(name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype.fun = function(name) {
  this.name = name;
};
const p1 = new Person("hello", 20);
const p2 = new Person("world", 22);
console.log(p1, p2); //打印是个Person
```

## 继承模式

### 原型链的继承

让子类的原型对象为父类的实例对象，**constructor 记录该对象引用了哪个构造函数**，需要手动使用 constructor 属性指回原来的构造函数

```js
function Father() {
  this.prop1 = "father prototype";
}
Father.prototype.showProp1 = function() {
  console.log(this.prop1);
};
function Son() {
  this.prop2 = "son prototype";
}
//子类的原型对象为父类的实例对象
Son.prototype = new Father();
Son.prototype.constructor = Son; //必须将构造器指回去
Son.prototype.showProp2 = function() {
  console.log(this.prop2);
};
var s1 = new Son();
var f1 = new Father();
console.log(s1.constructor); //不然就是Father
s1.showProp1();
s1.showProp2();
//f1.showProp1()
// f1.showProp2()
```

### 借用构造函数继承

在子类型构造函数中，通过 call()调用父类型构造函数

```js
function Father(name, age) {
  this.name = name;
  this.age = age;
}
function Son(name, age, height) {
  Father.call(this, name, age); //相当于：this.Father(name,age)
  this.height = height;
}
var s = new Son("hello", 20, 1.81);
console.log(s.name, s.age, s.height);
```

### 组合继承

将原型链和借用构造函数组合起来使用的一种方式

```js
function Father(name, age) {
  this.name = name;
  this.age = age;
}
Father.prototype.setName = function(name) {
  this.name = name;
};
function Son(name, age, height) {
  Father.call(this, name, age); //为了得到属性
  this.height = height;
}
Son.prototype = new Father(); //为了得到方法
Son.prototype.constructor = Son; //指向自身的构造函数
Son.prototype.setHeight = function(height) {
  this.height = height;
};
var s = new Son("hello", 20, 1.81);
s.setName("world");
s.setHeight(1.77);
console.log(s.name, s.age, s.height);
```

全称: Immediately-Invoked Function Expression 立即调用函数表达式
别名: 匿名函数自调用

```js
(function() {
  alert("哈哈");
})();
```

**作用**:

- 隐藏内部实现
- 不污染外部命名空间
- 可以用来编写 js 模块

```js
window.$ = function() {
  return {
    test: test,
  };
};
```
