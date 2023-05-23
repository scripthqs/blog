# 函数

在实际开发中，对象和函数往往是相辅相成的

## 函数高级

函数也是对象，只有函数是可执行的, 其它类型的数据是不可执行的。

函数需要**数据+算法**才有意义。

1. 没有意义的函数，**没有输入，不会变化**，

   ```js
   var test = function() {
     console.log("HelloWorld");
   };
   ```

2. **通过传参改变数据**------普通的函数

   ```js
   var test = function(string) {
     console.log(string);
   };
   test("HelloWorld");
   ```

3. **改变算法**——回调函数

## 创建函数

**1.函数声明**：

```js
function fun1(a, b) {
  return a + b;
}
```

**2.函数表达式**：

```js
const fun2 = function() {
  console.log("hello world");
};
```

**3.以构造函数的方式创建函数**(实际开发不会使用)

```js
const fun = new Function();
const fun3 = new Function("console.log(1+1)");
```

**函数的声明提前：**

**使用函数声明创建的函数**`function fun(){}`，会在所有的代码执行之前就被创建，**函数名称和函数体的提前**。

```js
fn1();
function fn1() {
  console.log("匿名声明定义的函数可以先调用再声明");
}
```

## 函数的调用

1. 普通函数的调用 fun()
2. 通过构造函数来调用 new fun()
3. 通过对象的方法来调用 obj.fun()
4. 临时将一个函数作为指定对象的方法调用 fun.call/apply(obj)

## 函数 this

根据函数的**调用的方式不同**，this 会指向不同的对象

- fun() this 永远都是 window
- new fun() this 就是实例对象
- obj.fun() this 就是 obj
- fun.call/apply(obj) this 就是 call/apply 后括号的 obj，(fun 不能是箭头函数)
- 事件的响应函数，响应函数是给谁绑定的，this 就是谁

  ```js
  btn.onclick = function() {
    console.log(this);
  };
  ```

**this 永远指向的是最后调用它的对象**。

## 回调函数

**1. 什么函数才是回调函数**？

1. 你定义的
2. 你没有直接调用
3. 但最终它执行了(在特定条件或时刻)

**2. 常见的回调函数**:

1. DOM 事件函数
2. 定时器函数
3. ajax 回调函数(后面学)
4. 生命周期回调函数(后面学)

**在直接调用函数 A()时，把另一个函数 B()作为参数，传入函数 A()里面，以此来通过函数 A()间接调用函数 B()**。

## 立即调用函数

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
