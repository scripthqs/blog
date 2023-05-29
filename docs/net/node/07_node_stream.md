# 文件流

## Stream

Stream 是小溪，小河的意思，在编程中翻译成流

- 在读取文件时，文件中的二进制(字节)数据会源源不断的读取到程序中
- 这一串串的字节，就是文件流

Node 中很多对象都是流实现的

- http 模块的 request 和 response 对象
- 所有流都是 EventEmitter 实例

node 中有四种基本流类型

- Writable：可以向其写入数据的流
- Readable：可以从中读取数据的流
- Duplex：同时为 Readable 和 Writable
- Transform：Duplex 可以写入和读取时修改或转换数据的流

## createReadStream

createReadStream：创建一个可读流

- start: 从什么位置开始读取
- end: 读取到什么位置后结束(包括 end 位置字节)
- highWaterMark：一次性读取字节的长度，默认是 64kb

```js
// 一次性读取
fs.readFile("./aaa.txt", (err, data) => {
  console.log(data);
});
// 缺点一: 没有办法精准控制从哪里读取, 读取什么位置
// 缺点二: 读取到某一个位置的, 暂停读取, 恢复读取
// 缺点三: 文件非常大的时候, 多次读取

// 使用流读取文件
const readStream = fs.createReadStream("./aaa.txt", {
  start: 8,
  end: 22,
  highWaterMark: 3,
  // 这个start可能在window上有兼容问题，需要使用r+
  // flags: "r+",
  // start: 5,
});
//监听data,获取数据
read.on("data", (data) => {});
// 监听其他事件、暂停或者恢复
read.on("open", (fd) => {});
read.on("end", () => {});
read.on("close", () => {});
readStream.pause();
readStream.resume();
```

## createWriteStream

createWriteStream 用来创建可写流

- flags：默认是 w，如果我们希望是追加写入，可以使用 a 或者 a+
- start：写入的位置

```js
// 创建一个写入流
const writeStream = fs.createWriteStream("./ccc.txt", {
  flags: "a",
});
// 监听open事件
writeStream.on("open", (fd) => {
  console.log("文件被打开", fd);
});
// 简单写入
writeStream.write("abcd");
// close事件
writeStream.close();

// end方法:
// 操作一: 将最后的内容写入到文件中, 并且关闭文件
// 操作二: 关闭文件
writeStream.end("hello world");
```

## pipe

可以进行拷贝流操作

```js
// 在可读流和可写流之间建立一个管道
const readStream = fs.createReadStream("./foo.txt");
const writeStream = fs.createWriteStream("./foo_copy03.txt");

readStream.pipe(writeStream);
```
