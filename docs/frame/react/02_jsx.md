# JSX 简介

JSX 是一种 JavaScript 的语法扩展（eXtension），也在很多地方称之为 JavaScript XML，因为看起就是一段 XML 语法。

- 用于描述我们的 UI 界面，并且其完成可以和 JavaScript 融合在一起使用
- 不同于 Vue 中的模块语法，不需要专门学习模块语法中的一些指令（比如 v-for、v-if、v-else、v-bind）

React 认为渲染逻辑本质上与其他 UI 逻辑存在内在耦合，所以选择 JSX。

## JSX 规范

1. JSX 的顶层只能有一个根元素，所以很多时候会在外层包裹一个 div 元素
2. 在 JSX 的外层包裹一个小括号()，这样可以方便阅读，并且 jsx 可以进行换行书写
3. JSX 中的标签可以是单标签，也可以是双标签；如果是单标签，必须以`/>`结尾；

## JSX 语法

JSX 注释

```js
return (
  <div>
    {/* JSX的注释写法 */}
    <h2>{message}</h2>
  </div>
);
```

JSX 嵌入表达式

- 运算表达式
- 三元运算符
- 执行一个函数

JSX 绑定属性

- 元素都会有 title 属性
- img 元素会有 src 属性
- a 元素会有 href 属性
- 元素可能需要绑定 class
- 原生使用内联样式 style

## React 事件绑定

- React 事件的命名采用小驼峰式（camelCase），而不是纯小写
- 通过`{}`传入一个事件处理函数，这个函数会在事件发生时被执行；

### 相关 js 知识

this 的四种绑定规则:

1. 默认绑定 独立执行 foo()
2. 隐式绑定 被一个对象执行 obj.foo() -> obj
3. 显式绑定: call/apply/bind foo.call("aaa") -> String("aaa")
4. new 绑定: new Foo() -> 创建一个新对象, 并且赋值给 this

super 和 constructor

super 关键字用于访问对象字面量或类的原型（[[Prototype]]）上的属性，或调用父类的构造函数。

1. 作为“函数调用”`super(...args)`
2. 作为“属性查询”`super.prop 和 super[expr]`

```js
// 注意：在派生的类中，在你可以使用 'this' 之前，必须先调用 super()。
// 然后使用 'this' 了，忽略 'this' 将导致引用错误（ReferenceError）
```

> 在 JavaScript class 中，每次你定义其子类的构造函数时，都需要调用 super 方法。
> 因此，在所有含有构造函数的的 React 组件中，构造函数必须以 super(props) 开头。

## React 列表渲染

在 React 中，没有 Vue 的模板语法，对 Js 的要求会更高，

- 展示列表最多的方式就是使用数组的 map 高阶函数，
- 过滤掉一些内容使用 filter 函数
- 截取数组中的一部分内容使用 slice 函数

列表展示的 jsx 中也需要添加一个 key，目的是为了提高 diff 算法时的效率。

```js
Array.prototype.fill();
// 方法用一个固定值填充一个数组
fill(value);
fill(value, start);
fill(value, start, end);
// 从起始索引到终止索引内的全部元素。不包括终止索引
```

## 数据的不可变性

一般来说改变数据有 2 种方式：

1. 直接修改变量的值
2. 是使用新的一份数据替换旧数据(不直接修改)

最好使用不直接修改数据的方式，好处：

1. 做撤销和恢复
2. 追踪数据的改变
