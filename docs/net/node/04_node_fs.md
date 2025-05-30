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

// 1.异步写入
fs.writeFile("./ccc.txt", content, { encoding: "utf8", flag: "a" }, (err) => {
  if (err) {
    console.log("文件写入错误:", err);
  } else {
    console.log("文件写入成功");
  }
});
// 2. 同步写入
fs.writeFileSync("a.txt", "内容");

// 3. 追加写入
fs.appendFile("a.txt", "追加内容", (err) => {});

// 低级写入（适合大文件或流式写入）
fs.open("a.txt", "w", (err, fd) => {
  fs.write(fd, "内容", (err, written, str) => {
    fs.close(fd);
  });
});
// 使用流写入
fs.createWriteStream(path[, options])
ws.write('内容');
ws.end();
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

## 文件的其他操作

```js
//验证路径是否存在
fs.exists(path,callback) 异步该方法已废弃
fs.existsSync(path)

//获取文件的信息
fs.stat(path,callback)
fs.statSync(path)

//删除文件
fs.unlink(path,callback)
fs.unlinkSync(path)

//列出文件：
fs.readdir()
fs.readdirSync()

//截断文件
fs.truncate()
fs.truncateSync()

//建立目录
fs.mkdir()
fs.mkdirSync()

//删除目录
fs.rmdir()
fs.rmdirSync()

//重命名文件和目录
rs.rename(oldpath,newpath,callcack)
rs.renameSync(oldpath,newpath)

```

## path 模块

path 模块用于处理和转换文件路径

```js
const path = require("path");

// 获取当前文件所在目录
console.log(__dirname);

// 路径拼接
const fullPath = path.join(__dirname, "test", "a.txt");
console.log(fullPath); // 自动处理分隔符

// 解析绝对路径
const absPath = path.resolve("a", "b", "c.txt");
console.log(absPath);

// 获取文件扩展名
console.log(path.extname("index.html")); // .html

// 获取文件名
console.log(path.basename("/foo/bar/baz.txt")); // baz.txt

// 获取目录名
console.log(path.dirname("/foo/bar/baz.txt")); // /foo/bar
```

- path.join([...paths])：将多个路径片段拼接成一个路径，自动处理分隔符，适用构建相对路径。
- path.resolve([...paths])：将路径或路径片段解析为绝对路径。
