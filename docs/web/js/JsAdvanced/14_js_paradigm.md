# 编程范式

编程范式是一种编程风格，分为命令式(过程式)、声明式(函数式)、面向对象等多种范式。

JavaScript 是一种“多范式”语言，可以使用不用的范式进行编程。

## 命令式(面向过程)

命令式编程由一组详细的指令组成，让计算机以一定的顺序执行。之所以被称作“命令式”是因为开发者以非常具体的方式，准确地规定计算机必须做什么。

```js
// 使用命令式编程，获取数组中大于 5 的数字
const nums = [1, 4, 3, 6, 7, 8, 9, 2];
const result = [];
for (let i = 0; i < nums.length; i++) {
  if (nums[i] > 5) result.push(nums[i]);
}
console.log(result); // 输出: [ 6, 7, 8, 9 ]
```

告诉程序要遍历整个数组的每一个元素，并且和 5 来比较，如果这个元素的值大于 5，就将它加入到另一个数组。

面向过程编程(过程式编程)，是命令式编程的派生，在其基础上添加了函数特性。先分析好具体的步骤，然后按照步骤(定义一个个函数)，一步步解决问题。

面向过程编程性能比面向对象高，适合跟硬件联系紧密的东西，例如单片机就是采用面向过程编程。

```js
// 使用命令式编程做蛋糕
1- Pour flour in a bowl //将面粉倒入碗中
2- Pour a couple eggs in the same bowl //在碗中打入两个鸡蛋
3- Pour some milk in the same bowl //倒入一些牛奶
4- Mix the ingredients //将它们混合
5- Pour the mix in a mold //将混合物倒入模具
6- Cook for 35 minutes //烤35分钟
7- Let chill //冷却
```

## 声明式(函数式)

声明式编程是通过描述要做什么（what to do）来解决问题，而非像命令式编程那样明确指定如何实现（how to do）。

声明式编程通常使用函数式编程来实现，看起来更加简洁和易读，在函数式编程中，函数被认为是一等公民，意味着可以将它们赋值给变量，作为参数传入其他函数，或者由函数返回。

纯函数的概念：纯函数指的是输出仅取决于输入的函数。如果输入相同，输出的结果始终保持不变，另外纯函数没有副作用（对函数外部环境的改变）。

函数式编程，隐藏了复杂性，直接告诉计算机需要什么样的结果。函数式编程在函数中，还是使用了原来命令式编程的模式(这是必然，计算机最终还是依靠命令式来执行具体的指令才能解决问题)。

```js
//1.使用命令式编程，需要使用一个result变量来存储函数结果，这是一种副作用
const nums = [1, 4, 3, 6, 7, 8, 9, 2];
const result = []; // 外部变量
for (let i = 0; i < nums.length; i++) {
  if (nums[i] > 5) result.push(nums[i]);
}
console.log(result); // 输出: [ 6, 7, 8, 9 ]
//2.改成函数式编程
const nums = [1, 4, 3, 6, 7, 8, 9, 2];
function filterNums() {
  const result = []; // 内部变量
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 5) result.push(nums[i]);
  }
  return result;
}
console.log(filterNums()); // 输出: [ 6, 7, 8, 9 ]
//这样写可以确保函数不会更改任何作用域以外的东西。只创造了一个处理自己信息的变量，一旦执行结束，变量也就被回收
const nums = [1, 4, 3, 6, 7, 8, 9, 2];
//3.进一步的，直接将filterNums这种通用的函数改进成filter函数
console.log(nums.filter((num) => num > 5)); // 输出: [ 6, 7, 8, 9 ]
// 只需要告诉计算机我们需要过滤（filter），过滤的条件是（num > 5）
// JavaScript 的 filter、map、reduce 和 sort 函数都是函数式编程的例子。
```

计算机实际上还是循环遍历了整个数组，但是不需要开发人员直接写出这个指令。声明式编程实际上做的是在开发者面前隐藏代码的复杂性。

```js
//使用函数式编程做蛋糕
//1.配料
function pourIngredients() {
    1- Pour flour in a bowl
    2- Pour a couple eggs in the same bowl
    3- Pour some milk in the same bowl
}
//2.混合并使用模具
function mixAndTransferToMold() {
    4- Mix the ingredients
    5- Pour the mix in a mold
}
//3.烹饪放凉
function cookAndLetChill() {
    6- Cook for 35 minutes
    7- Let chill
}
pourIngredients()
mixAndTransferToMold()
cookAndLetChill()
```

## 面向对象

面向对象编程以对象功能来划分问题，而不是步骤。
面向对象有封装、继承、多态性的特性，可以设计出低耦合的系统，更加灵活，易于维护。
面向对象的编程思想是对代码和数据进行封装，并以对象调用的方式，对外提供统一的调用接口。

- 在面向对象程序开发思想中，每一个对象都是功能中心，具有明确分工，面向对象编程适合多人合作。
- JS 中的面向对象，是基于原型的面向对象。ES6 中，新引入了类(Class)和继承(Extends)来面向对象。
- JS 中的对象(Object)是依靠构造器(constructor)和原型(prototype)构造出来的。
- 易维护、易复用、易拓展。

```js
//使用面向对象的思想烤蛋糕
//1.假设有一个主厨(叫厨神)，一个助理厨师(叫小福贵)，他们分工做蛋糕

class Cook {
  constructor(name) {
    this.name = name;
  }
  minAndBake() {
    4- Mix the ingredients //将它们混合
    5- Pour the mix in a mold //将混合物倒入模具
    6- Cook for 35 minutes //烤35分钟
  }
}
class AssistantCook {
  constructor(name){
    this.name = name;
  }
  pourIngredients() {//倒入配料
    1- Pour flour in a bowl
    2- Pour a couple eggs in the same bowl
    3- Pour some milk in the same bowl
  }
  chillTheCake() {//放凉
    7- Let chill
  }
}

// 将每一个类实例化
const cookGod = new Cook('cookGod')
const littleRich = new AssistantCook('littleRich')

// 调用实例的方法
littleRich.pourIngredients()
cookGod.mixAndBake()
littleRich.chillTheCake()
```
