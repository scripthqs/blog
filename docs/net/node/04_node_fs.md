# 使用 node 操作文件

## fs 模块

fs 是 File System 的缩写，表示文件系统。Node 的文件操作模块。

- 可以在个各种操作系统(window、Mac OS、Linux)上操作文件

```js
//首先引入 fs 模块
const fs = require("fs");
```

文件系统的 api 非常多，但是大致分为三种：

1. 同步操作，代码会阻塞
2. 异步回调，传入回调函数
3. 异步 Promise，通过 fs.promises 调用，返回 promise

```js
// 1.同步读取
const res1 = fs.readFileSync("./aaa.txt", { encoding: "utf8" });

// 2.异步读取
fs.readFile("./aaa.txt", { encoding: "utf8" }, (err, data) => {
  if (err) {
    console.log("读取文件错误:", err);
    return;
  }
  console.log("读取文件结果:", data);
});
console.log("后续的代码~");

// 3.异步读取: Promise
fs.promises
  .readFile("./aaa.txt", { encoding: "utf-8" })
  .then((res) => {
    console.log("获取到结果:", res);
  })
  .catch((err) => {
    console.log("发生了错误:", err);
  });
```

## 文件描述符

- 每个打开的文件都分配了一个文件描述符
- 该描述符是一个简单的数字标识符
- 一旦被分配，则文件描述符可用于从文件读取数据、向文件写入数据、或请求关于文件的信息。
- fs.open() 方法用于分配新的文件描述符。

```js
fs.open("./bbb.txt", (err, fd) => {
  if (err) {
    console.log("打开文件错误:", err);
    return;
  }
  // 1.获取文件描述符
  console.log(fd);
  console.log(typeof fd);
  // 2.读取到文件的信息
  fs.fstat(fd, (err, stats) => {
    if (err) return;
    console.log(stats);
    // 3.手动关闭文件
    fs.close(fd);
  });
});
```

## 文件写入

- flag：写入的方式
- encoding：字符的编码，目前基本用的都是 UTF-8 编码

```js
const content = "hello world, my name is abcd";

// 2.文件的写入操作
fs.writeFile("./ccc.txt", content, { encoding: "utf8", flag: "a" }, (err) => {
  if (err) {
    console.log("文件写入错误:", err);
  } else {
    console.log("文件写入成功");
  }
});
```

flag 的值：

- w 打开文件写入，默认值
- w+ 打开文件进行读写（可读可写），如果不存在则创建文件
- r 打开文件读取，读取时的默认值；
- r+ 打开文件进行读写，如果不存在那么抛出异常
- a 打开要写入的文件，将流放在文件末尾。如果不存在则创建文件
- a+ 打开文件以进行读写（可读可写），将流放在文件末尾。如果不存在则创建文件

## 操作文件夹

- fs.mkdir()或 fs.mkdirSync()创建一个新文件夹
- fs.readdir()读取文件夹
- fs.rename()重命名文件夹

```js
// 递归的读取文件夹中所有的文件
function readDirectory(path) {
  fs.readdir(path, { withFileTypes: true }, (err, files) => {
    files.forEach((item) => {
      if (item.isDirectory()) {
        readDirectory(`${path}/${item.name}`);
      } else {
        console.log("获取到文件:", item.name);
      }
    });
  });
}
readDirectory("./test");
```
