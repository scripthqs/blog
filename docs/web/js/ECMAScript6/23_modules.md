# 模块化开发

## 为什么使用模块化

- 解决全局变量命名冲突问题
- 解决 js 文件必须按照一定顺序引入的问题

## 如何使用模块化

- 使用匿名函数，还需要使用一个模块作为出口，暴露函数里面的变量
- 在匿名函数中定义一个对象
- 给对象添加各种需要暴露的属性和方法
- 最后将这个对象返回，并且在外面使用一个 ModuleA 接收

## 常见的模块化规范

ES6 之前，js 没有模块化，JavaScript 社区已经尝试并提出了 AMD、CMD、CommonJS 等模块化规范。

**ES6**标准发布后，**module 成为标准**，标准使用是以**export 指令导出**接口，以**import 引入**模块。

**但是在我们一贯的 node 模块**中，我们依然采用的是**CommonJS 规范**，使用**module.exports 导出**接口，使用**require 引入**模块，

模块化已经有很多既有的规范和对应的实现方案，常见的模块化规范：

- CommonJS**node 和 webpack 使用，适用于服务器端**
- AMD **适用浏览器端**
- CMD**适用浏览器端**

太多的模块化规范给开发者增加了学习的难度与开发的成本。因此，大一统的 **ES6 模块化规范诞生**了

ES6 的 Modules **vuecli 脚手架中可以使用，ES6 语法，js 文件中都可以使用**

模块化两个核心：**导出和导入**

## CommonJS 模块化的导出和导入

node.js 遵循了 CommonJS 的模块化规范。其中：

- 导入其它模块使用 require() 方法
- 模块对外共享成员使用 module.exports 对象或者 exports
- 模块化的好处： 大家都遵守同样的模块化规范写代码，降低了沟通的成本，极大方便了各个模块之间的相互调用，利人利己

```js
//导出
module.exports = { flag, sum };
exports.fs = fs;
//导入
let { flag, sum } = require("./aaa.js");
const fs = require("fs");
```

### exports

exports 是一个对象，可以在这个对象中添加很多个属性，添加的属性会导出

```js
//bar.js
exports.name = "aaa";
export.age = 20
//index.js
const bar = require('./bar.js')
// 此时的bar变量等于exports对象
```

### module.exports

在 Node 中真正用于导出的其实根本不是 exports，而是 module.exports，是因为 module 对象的 exports 属性是 exports 对象的一个引用

```js
console.log(exports === module.exports); //true
```

- 通过 exports 只能使用.的方式来向外暴露内部变量
- module.exports 既可以使用.的形式，也可以直接赋值

```js
const name = "foo";
const age = 18;
function sayHello() {
  console.log("sayHello");
}
// 1.在开发中使用的很少
exports.name = name;
exports.age = age;
exports.sayHello = sayHello;

// 2.将模块中内容导出
// 结论: Node导出的本质是在导出module.exports对象
module.exports.name = name;
module.exports.age = age;
module.exports.sayHello = sayHello;

// console.log(exports.name, "----")
// console.log(exports.age, "----")
// console.log(exports.sayHello, "----")
console.log(exports === module.exports);

// 3.开发中常见的写法
module.exports = {
  name,
  age,
  sayHello,
};
```

### require

require 是一个函数，可以帮助我们引入一个文件（模块）中导出的对象

```js
require(x);
/**
 * X是一个Node核心模块，比如path、http
 * 直接返回核心模块，并且停止查找
 */
const path = require("path");
const http = require("http");
console.log(path, http);
/**
 * X是以 ./ 或 ../ 或 /（根目录）开头的
 * 将X当做一个文件在对应的目录下查找
 * 没有找到对应的文件，将X作为一个目录
 * 没有找到，那么报错：not found
 */
const utils = require("./utils");
const foo = require("./foo");
console.log(utils.formatDate());

/**
 *  名称不是路径, 也不是一个内置模块
 *  找node_modules
 */
const aaa = require("aaa");
console.log(aaa);
const axios = require("axios");
console.log(axios);
```

### CommonJS 的特点

CommonJS 加载模块是同步的，只有等到对应的模块加载完毕，当前模块中的内容才能被运行。

- 服务器加载的 js 文件都是本地文件，加载速度非常快，所以服务器加载没问题

但是在浏览器中，同步加载可能会影响 js 代码的正常运行，所有通常不使用 CommonJS 规范。早期浏览器使用模块化是 AMD 或者 CMD，现在都是用 ES Modules，并且 webpack 等工具可以对 CommonJS 或者 ES Modules 的转化

## ES6 模块化实现

**ES6 模块化规范是浏览器端与服务器端通用的模块化开发规范**。它的出现极大的降低了前端开发者的模块化学习成本，开发者不需再额外学习 AMD、CMD 或 CommonJS 等模块化规范。

ES6 模块化规范中定义：

- 每个 js 文件都是一个独立的模块
- **导入**其它模块成员使用 **import 关键字**
- **导出**模块成员使用 **export 关键字**

### 在 node.js 中体验 ES6 模块化

node.js 中默认仅支持 CommonJS 模块化规范，若想基于 node.js 体验与学习 ES6 的模块化语法，可以按照 如下两个步骤进行配置：

- 确保安装了 v14.15.1 或更高版本的 node.js

- 在 package.json 的根节点中添加 "type": "module" 节点

### ES6 exports

export 关键字将一个模块中的变量、函数、类等导出。

导出的具体方式有 3 种：

1. 在语句声明前直接加上 export 导出
2. 将需要导出的标识符，放在 export 后面的`{}`，注意`{}`不是 ES6 的对象字面量增强写法，也不是表示一个对象。`export {name:name}`是错误的写法。
3. 导出时给标识符起一个别名，通过 `as` 关键字起别名

### ES6 import

import 关键字负责从另外一个模块中导入内容

导入的具体方式：

1. `import {标识符列表 } from 模块`，注意`{}`不是表示一个对象，只是存放导入的标识符列表内容。
2. 导入时给标识符起别名，也是通过`as`关键字
3. 通过`*`将模块功能放在模块功能对象上

另外 export 和 import 可以结合使用

```js
export { sum as barSum } from "./bar.js";
```

**import 函数返回一个 Promise，可以通过 then 获取结果**。

### 默认导入导出

**默认导出**：

```js
export default 默认导出的成员;
export default { a, b, fun };
```

**默认导入**：

```js
import 接收名称 from "模块标识符";
import m1 from "./01.module.js";
```

- 每个模块中，只允许使用唯一的一次 export default，否则会报错！
- 默认导入时的接收名称可以任意名称，只要是合法的成员名称即可
- 在导入时不需要使用 {}，并且可以自己来指定名字

### 按需导入导出

**按需导出**：

```js
export 按需导出的成员
export let a = 1
export let s1 = 'hello world'
```

**按需导入**：

```js
import { s1 } from "模块标识符";
import { a, s1 } from "./02.module.js";
import * as 自定义名字 from "./02.module.js";
import { a, s1 as 新名字 } from "./02.module.js";
```

1. 每个模块中可以使用**多次**按需导出
2. 按需导入的成员名称必须和按需导出的**名称保持一致**
3. 按需导入时，可以使用 **as 关键字进行重命名**
4. 按需导入可以和**默认导入一起**使用

如果需要导入的变量很多时，使用

```js
import * as 自定义名字 from "./aaa.js";
```

### 直接导入并执行

如果只想单纯地执行某个模块中的代码，并不需要得到模块中向外共享的成员。此时，可以直接导入并执行模 块代码

```js
//直接导入
import "./style.css";
```

## require，import 的区别

require/exports 的用法只有以下三种简单的写法：

```js
const fs = require("fs");
exports.fs = fs;
module.exports = fs;
```

import/export 的写法就多种多样

```js
import fs from 'fs'
import {default as fs} from 'fs'
import * as fs from 'fs'
import {readFile} from 'fs'
import {readFile as read} from 'fs'
import fs, {readFile} from 'fs'

export default fs
export const fs
export function readFile
export {readFile, read}
export * from 'fs'
```

1. CommonJS 还是 ES6 Module 输出都可以看成是一个具备多个属性或者方法的对象；
2. default 是 ES6 Module 所独有的关键字，export default fs 输出默认的接口对象，import fs from 'fs' 可直接导入这个对象；
3. ES6 Module 中导入模块的属性或者方法是强绑定的，包括基础类型；而 CommonJS 则是普通的值传递或者引用传递。
