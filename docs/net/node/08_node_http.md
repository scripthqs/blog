# web 服务器

- 当客户端需要某个资源时，可以向一台服务器，通过 HTTP 请求获取到某个资源
- 提供资源的服务器，就是 web 服务器
- 实际开发中，会借助框架来搭建服务器

目前很多的开源服务器，Nginx、Apache、Apache Tomcat、Node.js

## http

在 node 中，体统 web 服务器的资源返回给了浏览器，主要是通过 http 模块

- http.createServer 会返回服务器的对象
- 直接 new Server 对象(底层)

```js
const http = require("http");
// 创建一个http对应的服务器
const server = http.createServer((request, response) => {
  // request对象中包含本次客户端请求的所有信息
  // 请求的url
  console.log(request.url);
  // 请求的method
  console.log(request.method);
  // 请求的headers
  console.log(request.headers);
  // 请求携带的数据
  // response对象用于给客户端返回结果的
  response.end("Hello World");
});

// 直接 new Server 对象(底层)
const server2 = new http.Server((req, res) => res.end());
```

## 监听主机和端口

通过 listen 方法来开启服务器，并且在某一个主机和端口上监听网络请求，具有三个参数

- port：可以不传，会默认分配一个
- host：主机，本机地址 localhost 或者 127.0.0.1 默认 0.0.0.0
- 回调函数：服务器启动时的回调函数

```js
// 开启对应的服务器, 并且告知需要监听的端口
// 监听端口时, 监听1024以上的端口, 666535以下的端口
// 1024下可能是有特俗作用的
// 1025~65535之间的端口
// 2个字节 => 256*256 => 65536 => 0~65535
server.listen(8000, () => {
  console.log("服务器已经开启成功了~");
});
```

## 处理 url

处理不同的 url

```js
const server = http.createServer((req, res) => {
  const url = req.url;

  if (url === "/login") {
    res.end("登录成功~");
  } else if (url === "/products") {
    res.end("商品列表~");
  } else if (url === "/test") {
    res.end("abcdef");
  }
});
```

## 处理参数

处理 url 的参数

- querystring
- body=>请求体

```js
const http = require("http");
const url = require("url");
const qs = require("querystring");
```

## method 方法

在 Restful 规范（设计风格）中，我们对于数据的增删改查应该通过不同的请求方式：

- GET：查询数据
- POST：新建数据
- PATCH：更新数据
- DELETE：删除数据

```js
// 1.创建server服务器
const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
});
```

## 响应头文件

- res.setHeader：一次写入一个头部信息；
- res.writeHead：同时写入 header 和 status；

```js
// 设置header信息: 数据的类型以及数据的编码格式
// 1.单独设置某一个header
res.setHeader("Content-Type", "text/plain;charset=utf8;");

// 2.和http status code一起设置
res.writeHead(200, {
  "Content-Type": "application/json;charset=utf8;",
});
```

## axios 库

axios 库可以在浏览器中使用，也可以在 Node 中使用：

- 在浏览器中，axios 使用的是封装 xhr
- 在 Node 中，使用的是 http 内置模块
