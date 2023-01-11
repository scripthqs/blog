# Node 模块化

## 1.node 模块的定义

在 node 中，一个 js 文件就是一个模块。

**ES6**标准发布后，**module 成为标准**，标准使用是以**export 指令导出**接口，以**import 引入**模块。

**但是在我们一贯的 node 模块**中，我们依然采用的是**CommonJS 规范**，使用**module.exports 导出**接口，使用**require 引入**模块，

## 2.如何使用 node 模块

- 通过 require()函数引入外部的模块，传递一个文件的路径作为参数，node 将会自动根据该路径来引入外部模块
- 如果使用相对路径，必须以.或..开头
- 使用 require()引入模块后，该函数会返回一个对象，这个对象代表的是引入的模块
- 在 node 中，每一个文件中的 js 代码独立运行在一个函数中，一个模块中给的变量，其他模块不能直接访问
- 需要通过 exports 或者 module.exports 向外部暴露变量和方法，需要将暴露的变量和方法设置为 exports 的属性

## 3.exports 和 module.exports 的区别

**require 方能看到的只有 module.exports 这个对象，它是看不到 exports 对象的，而我们在编写模块时用到的 exports 对象实际上只是对 module.exports 的引用。**

```js
console.log(exports === module.exports); //true
```

- 通过 exports 只能使用.的方式来向外暴露内部变量
- module.exports 既可以使用.的形式，也可以直接赋值

## 4.node 模块的分类

模块分为三大类：

- **核心模块**：由 node 引擎提供，核心模块的标识就是模块的名字
- **文件模块**：由用户自己创建的模块，文件模块的标识就是文件的路径，相对路径必须以.或..开头
- 自定义模块：开发者自己编写