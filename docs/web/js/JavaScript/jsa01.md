# js 简介

## JavaScript 简介

JavaScript：从交互的角度，描述**行为**（实现业务逻辑和页面控制）

JavaScript 基础分为三个部分：

- **ECMAScript**：JavaScript 的**语法标准**。包括变量、表达式、运算符、函数、if 语句、for 语句等。
- **DOM**：Document Object Model（文档对象模型），操作**页面上的元素**的 API。比如让盒子移动、变色、改变大小、轮播图等等。
- **BOM**：Browser Object Model（浏览器对象模型），操作**浏览器部分功能**的 API。通过 BOM 可以操作浏览器窗口，比如弹框、控制浏览器跳转、获取浏览器分辨率等等。

通俗理解就是：ECMAScript 是 JS 的语法；DOM 和 BOM 是浏览器运行环境为 JS 提供的 API。

## JavaScript 特点

1. JavaScript 是解释型（脚本）语言，不需要事先被翻译为机器码；而是边翻译边执行（翻译一行，执行一行）

2. 单线程，从上到下逐行执行

3. 遵循 ECMAScript 标准

## JavaScript 引入方式

HTML 中推荐双引号，js 中推荐单引号。js 严格区分大小写。以分号结尾但是可以省略。
有 3 种方式引入 js 代码：

- 行内式：直接写 HTML 标签的事件中
- 内嵌式：直接编写到`<script>`标签中。
- 引入外部 JS 文件`<script src="tool.js"></script>`

## JavaScript 输入输出

- 弹出警告框 `alert()`
- 控制台输出 `console.log()`
- 向 body 中输入内容 `document.write()`
- 弹出输入框 `prompt()`，用户不管输入什么内容，都是字符串。我们可以用一个变量，来接收用户输入的内容。

```js
alert("弹窗");
console.log("控制台打印");
document.write("<h1>标题1</h1>");
var a = prompt("请随便输入点什么东西吧");
console.log(a);
```

## JavaScript 注释语句

```js
//单行注释
/*
  多行注释
 */
/**
 * 文档注释
 */
```

vscode 输入`/**`就会自动补全文档注释

## JavaScript 作用

- 表单动态校验（密码强度检测）**js 最初的目的**
- 网页特效
- 服务端开发（node.js）
- 桌面应用程序（Electron)
- App（Cordova）
- 控制硬件-物联网（Ruff）
- 游戏开发（cocos2d-js）

## 浏览器引擎

浏览器分为渲染引擎和 js 引擎

- 渲染引擎：用来解析 HTML 和 css，俗称内核，chrome 的内核就是 webkit
- js 引擎：也称 js 解释器。用来读取网页中 JavaScript 代码，对其处理后运行，chrome 浏览器的 js 引擎是 v8
