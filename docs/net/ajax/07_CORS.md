# 同源策略和跨域

## 同源策略

- 同源策略(Same-Origin Policy)是浏览器的一种安全策略
- 同源： 协议、域名、端口号必须完全相同
- 跨域： 违背同源策略就是**跨域**

## URL 的组成

- 协议://主机:端口/路径?查询
- scheme://host:port/path?query#fragment

HTTP 协议，超文本传输协议，详细规定了浏览器和万维网服务器之间相互通信的规则。协议就是约定，规定。

## 如何解决跨域

### JSONP

JSONP(JSON with Padding)，是一个非官方的跨域解决方案，纯粹凭借程序员的聪明才智开发出来，只支持 get 请求。

#### JSONP 原理

在网页有一些标签天生具有跨域能力，比如：img link iframe script。
JSONP 就是利用 script 标签的跨域能力来发送请求的。

#### JSONP 的使用

```js
// 客户端代码
function handleData(data) {
  console.log(data);
}

// 1.动态的创建一个 script 标签
var script = document.createElement("script");、

// 2.设置 script 的 src，设置回调函数
script.src = "http://example.com/api?callback=handleData";
// function abc(data) {
//   alert(data.name);
// }

// 3.将 script 添加到 body 中
document.body.appendChild(script);

// 4.服务器中路由的处理
router.get("/testAJAX", function(req, res) {
  console.log("收到请求");
  var callback = req.query.callback;
  var obj = {
    name: "aaa",
    age: 18,
  };
  res.send(callback + "(" + JSON.stringify(obj) + ")");
});
```

### CORS

CORS（Cross-Origin Resource Sharing），跨域资源共享。

CORS 是官方的跨域解决方案，它的特点是不需要在客户端做任何特殊的操作，完全在服务器中进行处理，支持 get 和 post 请求。

跨域资源共享标准新增了一组 HTTP 首部字段，允许服务器声明哪些源站通过浏览器有权限访问哪些资源

#### CORS 原理

CORS 是通过设置一个响应头来告诉浏览器，该请求允许跨域，浏览器收到该响应以后就会对响应放行。这个才是真正的解决跨域问题。但需要后端完成

#### CORS 的使用

主要是服务器端的设置：

```js
router.get("/testAJAX", function(req, res) {
  //通过res 来设置响应头，来允许跨域请求
  //res.set("Access-Control-Allow-Origin","http://127.0.0.1:3000");
  res.set("Access-Control-Allow-Origin", "*");
  res.send("testAJAX 返回的响应");
});

// 客户端代码
fetch("http://example.com/api", {
  headers: {
    Origin: "http://localhost:8080", // 请求源
  },
})
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });

// 服务端需要在响应头中添加Access-Control-Allow-Origin字段，指定允许哪些源访问该资源：
// 服务端代码
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:8080");
  next();
});
```

### 配置代理服务器

- 可以通过 nginx 开启代理服务器，但是需要学习后端等很多知识。
- 通过 vue-cli 的 api 的`module.exports = {devServer: {proxy: 'http://localhost:4000'}}`

#### 代理服务器原理

流程：

1. 本地浏览器地址(localhost:8080)
2. 向代理服务器发送请求(localhost:8080)
3. 代理服务器向服务器发送请求(localhost:5000)

注意：浏览器和服务器之间通信时 ajax，服务器和服务器之间通信是 http 请求，不用 ajax。

#### vuecli 中配置代理服务器

使用 vuecli 创建的项目中，配置 vue.config.js 文件

```js
module.exports = {
  //方式1.开启代理服务器，写真正访问服务器的端口
  // devServer: {
  //   proxy: 'http://localhost:5000'
  // }
  //这种方法只能保证本身服务器没有了走代理，不够灵活，而且只能配置一个服务器

  //方式2.不能同时用
  devServer: {
    proxy: {
      "/api": {
        //想走代理，就在请求前面加/api
        target: "http://localhost:5000",
        pathRewrite: { "^/api": "" }, //保证代理服务器转发到真正服务器的地址不带/api
        // ws: true,//用于支持websocket
        // changeOrigin: true//用于控制请求头中的host值
      },
      "/test": {
        //想走代理，就在请求前面加/test
        target: "http://localhost:5001",
        pathRewrite: { "^/test": "" }, //保证代理服务器转发到真正服务器的地址不带/test
        // ws: true,//用于支持websocket
        // changeOrigin: true//用于控制请求头中的host值
      },
      "/abc": {
        //想走代理，就在请求前面加/abc
        target: "https://autumnfish.cn/",
        pathRewrite: { "^/abc": "" }, //保证代理服务器转发到真正服务器的地址不带/api
        // ws: true,//用于支持websocket
        // changeOrigin: true//用于控制请求头中的host值
      },
    },
  },
};
```
