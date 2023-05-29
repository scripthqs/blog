# Buffer 和二进制

计算机中，文字、数字、图片、音频、视频最终都是使用二进制来表示的

- 前端很少处理二进制的数据
- 只需要告诉浏览器图片 url 地址、视频链接、音频链接，浏览器会自己渲染出来

对于服务器来说，是需要处理二进制数据的

- 考虑文件的编码格式 utf-8 或者 GBK，转换时需要拿到二进制内容
- 对图片进行裁剪、转换等操作时，需要读取图片的 buffer 处理(node Sharp 库)
- Node 通过 TCP 建立长连接，需要将数据转成字节

服务器很多功能必须操作二进制数据，但是二进制是由 01 组成，又不太方便直接一位一位的操作。node 提供了全局 Buffer 类，方便操作二进制数据

- Buffer 存储的是二进制数据(bit)
- Buffer 看做一个数组，数组的每项可以保存 8 位二进制
- 8 位合成一个单元，称为字节(byte)
- 1 byte = 8bit , 1 kb = 1024 byte , 1 M = 1024 kb
- 很多编程语言中 int 类型 4 个字节，long 类型 8 个字节
- 二进制 11111111 , 十进制 255 , 十六进制 FF
- TCP 传输的是字节流，读写时需要说明字节个数
- RGB 值都是 255，本质在计算机一个字节存储

```js
// 1.创建Buffer
const buf2 = Buffer.from("world");
console.log(buf2);

// 2.创建Buffer(字符串中包含中文)
const buf3 = Buffer.from("你好啊hhhhh");
console.log(buf3);
console.log(buf3.toString());

// 3.手动指定的Buffer创建过程的编码
// 编码操作
const buf4 = Buffer.from("哈哈哈", "utf16le");
console.log(buf4);
// 解码操作
console.log(buf4.toString("utf16le"));

// 创建8个字节大小的buffer内存空间
const buf = Buffer.alloc(8);
//  可以对每项进行操作
buf[0] = 100;
buf[1] = 0x66;
console.log(buf);
console.log(buf.toString());
buf[2] = "m".charCodeAt();
console.log(buf);

// 读取文件是，不传编码，默认就是buffer
fs.readFile("./aaa.txt", (err, data) => {
  console.log(data, "buffer");
  data[0] = 0x6d; //m
  console.log(data.toString()); //默认传入utf-8
});

// 读取一个图片的二进制(node中有一个库sharp，可以处理图片buffer)
fs.readFile("./test.png", (err, data) => {
  console.log(data, "buffer");
});
```

创建 Buffer 时，并不会频繁的向操作系统申请内存，它会默认先申请一个 `8 * 1024` 个字节大小的内存，也就是 8kb

```js
Buffer.poolSize = 8 * 1024;
```
