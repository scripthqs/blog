# Koa

除了 express，另外一个非常流行的 Node Web 服务器框架就是 koa

koa 是 express 同一个团队开发的一个新的 Web 框架：

- 目前团队的核心开发者 TJ 的主要精力也在维护 koa，express 已经交给团队维护了
- 相对于 express 具有更强的异步处理能力
- 核心代码只有 1600+行，是一个更加轻量级的框架
- 可以根据需要安装和使用中间件

## 基本使用

```js
const Koa = require("koa");

// 创建app对象
const app = new Koa();

// 注册中间件(middleware)
// koa的中间件有两个参数: ctx/next
app.use((ctx, next) => {
  console.log("匹配到koa的中间件");
  ctx.body = "哈哈哈哈哈";
});

// 启动服务器
app.listen(6000, () => {
  console.log("koa服务器启动成功~");
});
```

koa 注册的中间件提供了两个参数：

- ctx：上下文（Context）对象，并没有像 express 一样，将 req 和 res 分开，而是将它们作为 ctx 的属性
  - ctx 代表一次请求的上下文对象
  - ctx.request：获取请求对象
  - ctx.response：获取响应对象
- next：本质上是一个 dispatch，类似于之前的 next

```js
// 中间件
app.use((ctx, next) => {
  // 1.请求对象
  console.log(ctx.request); // 请求对象: Koa封装的请求对象
  console.log(ctx.req); // 请求对象: Node封装的请求对象

  // 2.响应对象
  console.log(ctx.response); // 响应对象: Koa封装的响应对象
  console.log(ctx.res); // 响应对象: Node封装的响应对象

  // 3.其他属性
  console.log(ctx.query);
  // console.log(ctx.params)

  next();
});
```

## Koa 中间件

koa 通过创建的 app 对象，注册中间件只能通过 use 方法：

- koa 并没有提供 methods 的方式来注册中间件
- 也没有提供 path 中间件来匹配路径

如何将路径和 method 分离

1. 根据 request 自己来判断
2. 使用第三方路由中间件

```js
// 根据 request 自己来判断路径和 method
app.use((ctx, next) => {
  if (ctx.path === "/users") {
    if (ctx.method === "GET") {
      ctx.body = "user data list";
    } else if (ctx.method === "POST") {
      ctx.body = "create user success~";
    }
  } else if (ctx.path === "/home") {
    ctx.body = "home data list~";
  } else if (ctx.path === "/login") {
    ctx.body = "登录成功, 欢迎回来~";
  }
});
```

### 使用 koa-router

koa 官方并没有给我们提供路由的库，我们可以选择第三方库：koa-router

```bash
npm install @koa/router
```

1. 先封装一个 user.router.js 的文件
2. 在 app 中将 router.routes()注册为中间件

allowedMethods 用于判断某一个 method 是否支持

```js
// 封装一个 user.router.js 的文件
const KoaRouter = require("@koa/router");

// 1.创建路由对象，方便路由模块化，  添加前缀
const userRouter = new KoaRouter({ prefix: "/users" });

// 2.在路由中注册中间件: path/method
userRouter.get("/", (ctx, next) => {
  ctx.body = "users list data~";
});
userRouter.get("/:id", (ctx, next) => {
  const id = ctx.params.id;
  ctx.body = "获取某一个用户" + id;
});
userRouter.post("/", (ctx, next) => {
  ctx.body = "创建用户成功~";
});
userRouter.delete("/:id", (ctx, next) => {
  const id = ctx.params.id;
  ctx.body = "删除某一个用户" + id;
});

module.exports = userRouter;

// 让路由中的中间件生效
app.use(userRouter.routes());
app.use(userRouter.allowedMethods());
```

## 解析参数

1. get: params 方式, 例子:`/:id`
2. get: query 方式, 例子: `?name=aaa&id=123`
3. post: json 方式, 例子: `{ "name": "aaa", "id": 123 }`
4. post: x-www-form-urlencoded
5. post: form-data

```bash
# json方式或者x-www-form-urlencoded格式
npm install koa-bodyparser;
# form-data格式
npm install koa-multer
```

```js
const Koa = require("koa");
const KoaRouter = require("@koa/router");
// 使用 koa-bodyparser 的中间件；
const bodyParser = require("koa-bodyparser");
const multer = require("@koa/multer");

// 创建app对象
const app = new Koa();

// 使用第三方中间件解析body数据
app.use(bodyParser());
const formParser = multer();

// 1.get/params
userRouter.get("/:id", (ctx, next) => {
  const id = ctx.params.id;
  ctx.body = "user list data~:" + id;
});

// 2.get/query
userRouter.get("/", (ctx, next) => {
  const query = ctx.query;
  console.log(query);
  ctx.body = "用户的query信息" + JSON.stringify(query);
});

// 3.post/json(使用最多)
userRouter.post("/json", (ctx, next) => {
  // 注意事项: 不能从ctx.body中获取数据
  console.log(ctx.request.body, ctx.req.body);
  // ctx.body用于向客户端返回数据
  ctx.body = "用户的json信息";
});

// 4.post/urlencoded
userRouter.post("/urlencoded", (ctx, next) => {
  console.log(ctx.request.body);
  ctx.body = "用户的urlencoded信息";
});

// 5.post/form-data
userRouter.post("/formdata", formParser.any(), (ctx, next) => {
  console.log(ctx.request.body);
  ctx.body = "用户的formdata信息";
});
```

## 上传文件

- single
- array

```js
const Koa = require("koa");
const KoaRouter = require("@koa/router");
const multer = require("@koa/multer");
const upload = multer({
  //   dest: './uploads'
  storage: multer.diskStorage({
    destination(req, file, cb) {
      cb(null, "./uploads");
    },
    filename(req, file, cb) {
      cb(null, Date.now() + "_" + file.originalname);
    },
  }),
});
// 注册路由对象
const uploadRouter = new KoaRouter({ prefix: "/upload" });

uploadRouter.post("/avatar", upload.single("avatar"), (ctx, next) => {
  console.log(ctx.request.file);
  ctx.body = "文件上传成功~";
});

uploadRouter.post("/photos", upload.array("photos"), (ctx, next) => {
  console.log(ctx.request.files);
  ctx.body = "文件上传成功~";
});
```

## 静态服务器

koa 并没有内置部署相关的功能，所以我们需要使用第三方库：

```bash
npm install koa-static
```

类似 express

```js
const Koa = require("koa");
const static = require("koa-static");
const app = new Koa();
// app.use((ctx, next) => {
//   ctx.body = "哈哈哈哈"
// })
app.use(static("./uploads"));
app.use(static("./build"));
app.listen(8000, () => {
  console.log("koa服务器启动成功~");
});
```

## 数据的响应

body 将响应主体设置为以下之一

- string ：字符串数据
- Buffer ：Buffer 数据
- Stream ：流数据
- Object|| Array：对象或者数组
- null ：不输出任何内容
- 如果 response.status 尚未设置，Koa 会自动将状态设置为 200 或 204

```js
userRouter.get("/", (ctx, next) => {
  // 1.body的类型是string
  ctx.body = "user list data~";

  // 2.body的类型是Buffer
  ctx.body = Buffer.from("你好啊, 世界~");

  // 3.body的类型是Stream
  const readStream = fs.createReadStream("./uploads/test.png");
  ctx.type = "image/jpeg";
  ctx.body = readStream;

  // 4.body的类型是数据(array/object) => 使用最多
  ctx.status = 201;
  ctx.body = {
    code: 0,
    data: [
      { id: 111, name: "aaa", msg: 100 },
      { id: 112, name: "bbb", msg: 990 },
    ],
  };

  // 5.body的值是null, 自动设置http status code为204
  ctx.body = null;
});
```

## 错误处理

```js
app.use((ctx, next) => {
  ctx.app.emit("error", -1003, ctx);
});

// 独立的文件: error-handle.js
app.on("error", (code, ctx) => {
  const errCode = code;
  let message = "";
  switch (errCode) {
    case -1001:
      message = "账号或者密码错误~";
      break;
    case -1002:
      message = "请求参数不正确~";
      break;
    case -1003:
      message = "未授权, 请检查你的token信息";
      break;
  }

  const body = {
    code: errCode,
    message,
  };

  ctx.body = body;
});
```

## 同步和异步执行

express 和 koa 的 next 函数有区别

- 同步时，两个没什么区别
- 利用 async 和 await 实现异步效果
- 异步时，express 的 next 不会执行后面的代码
- 异步时，koa 的 next 可以执行后面的代码

```js
//同步中间件1
app.use((ctx, next) => {
  console.log("koa middleware01");
  ctx.msg = "aaa";
  next();
  // 返回结果
  ctx.body = ctx.msg;
});
//同步中间件2
app.use((ctx, next) => {
  console.log("koa middleware02");
  ctx.msg += "bbb";
  next();
});

//异步使用
// 1.koa的异步中间件1
app.use(async (ctx, next) => {
  console.log("koa middleware01");
  ctx.msg = "aaa";
  await next();
  // 返回结果，koa可以在这个返回异步结果
  ctx.body = ctx.msg;
});

// 2.koa的异步中间件2
app.use(async (ctx, next) => {
  console.log("koa middleware02");
  ctx.msg += "bbb";
  // 如果执行的下一个中间件是一个异步函数, 那么next默认不会等到中间件的结果, 就会执行下一步操作
  // 如果我们希望等待下一个异步函数的执行结果, 那么需要在next函数前面加await
  await next();
  console.log("----");
});

// 3.koa的异步中间件3
app.use(async (ctx, next) => {
  console.log("koa middleware03");
  // 网络请求
  const res = await axios.get("http://localhost/test");
  ctx.msg += res.data.data.test;
});
```

## koa 洋葱模型

- express 同步执行代码符合洋葱模型，异步执行不符合洋葱模型
- koa 同步和异步都符合洋葱模型
- 中间件处理代码的过程：request 从外到里，遇到 next，执行下个中间件，执行 next 后面的代码
- response 返回 body 执行：response 从里到外
