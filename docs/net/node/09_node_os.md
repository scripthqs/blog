# 常用内置模块

## Node 全局变量

在 node 中有一个全局对象 global，它的作用和网页中的 window 类似，里面包括了的 process、console、setTimeout

- 在全局中创建的变量会作为 global 的属性保存
- 在全局中创建的函数会作为 global 的方法保存

当 node 在执行模块中的代码时，他会首先在代码的最顶部，添加如下代码

```js
    function (exports,require,module,__filename,__dirname){

    }
```

实际中模块中的代码都是包装在一个函数中执行的，并且在函数执行时，同时传递了 5 个实参

- exports：该对象将变量和函数暴露在外面
- require：函数，用来引入外部的模块
- module：module 代表是当前模块的本身，exports 就是 module 的属性，既可以使用 exports 导出，也可以使用 module.exports
- `__filename`：当前文件的完整路径
- `__dirname`：当前文件夹的完整路径

```js
console.log(global);
console.log(__filename);
console.log(__dirname);
```

### 常见的全局对象

process 对象

- 提供了 Node 进程中相关的信息
- 如 Node 的运行环境、参数信息等

console 对象

- 提供了简单的调试控制台

定时器函数

- setTimeout
- setInterval
- setImmediate
- process.nextTick

更多内置模块及常用内置模块的更多 API 用法，可以参考：<http://nodejs.cn/api/>

## os 模块

os（`operation system`）模块提供了与操作系统相关的实用方法和属性。

```js
const os = require("os");
// 换行符
os.EOL; //根据操作系统生成对应的换行符 window \r\n，linux下面 \n

// 查看cpu相关信息
os.cpus();
// 总内存大小 (单位 字节)
os.totalmem();
// 空余内存大小 (单位 字节)
os.freemem();
// 主机名
os.hostname();
// 系统类型
os.type();
// ...
```

## path 模块

path 模块用于处理文件和目录(文件夹)的路径。

```js
const path = require("path");

// 获取路径最后一部内容，一般用它来获取文件名称
path.basename("c:/a/b/c/d.html"); // d.html

// 获取目录名，路径最后分隔符部分被忽略
path.dirname("c:/a/b/c/d.html"); // c:/a/b/c

// 获取路径中文件扩展名（后缀）
path.extname("c:/a/b/c/d.html"); // .html

// 给定的路径连接在一起
path.join("/a", "b", "c"); // /a/b/c

// resolve：模拟cd（切换目录）操作同时拼接路径
console.log(path.resolve("a", "b", "c"));
console.log(path.resolve("a", "../b", "c"));
console.log(path.resolve("/a", "b", "c"));

// ...
```

'/'表示当前磁盘的根目录，window 系统下，目录分割符可以是'/'或'\'，linux 系统下，系统的分割符是'/'，不能使用'\'。

## url 模块

URL 字符串是结构化的字符串，包含多个含义不同的组成部分。 解析字符串后返回的 URL 对象，每个属性对应字符串的各个组成部分。

![url](./images/url.png)

完整的 url 包含了：协议（https:），//，用户名和密码，域名（@sub.example.com），端口（8080），路径，查询，哈希。

```javascript
const url = require("url");
const href = "http://www.xxx.com:8080/pathname?id=100#bbb";
// 解析网址，返回Url对象
// 参2 如果为true 则 query获取得到的为对象形式
url.parse(href, true);
//以一种 Web 浏览器解析超链接的方式把一个目标 URL 解析成相对于一个基础 URL。
url.resolve("https://lynnn.cn/foo/bar", "bar");
```

> 注意：url 模块中没有 join 方法。

- url.parse() 将一个地址转化成对象模式 （已经废弃）
- url.resolve() 将多个路径拼接成一个完整的 url（已经废弃）

之前使用里面的 parse 方法来获取到前端发送到后端的数据，现在改方法已被弃用，现在需要使用 URL 类

```js
// new一个URL实例
const data = new URL(`${req.url}`, "https://example.org/");
```

另一种方法是使用 querstring()

## querystring 模块

用于**解析和格式化** URL 查询字符串（URL 地址的 get 形式传参）的实用工具。

```js
const qs = require("querystring");
// query字符串转为对象
qs.parse("foo=bar&abc=xyz");
//decode()是parse()的别名
qs.decode("foo=bar&abc=xyz");

// 对象转为query字符串
qs.stringify({ foo: "bar", abc: "xyz" });
//encode()是stringify()的别名
qs.encode({ foo: "bar", abc: "xyz" });
```
