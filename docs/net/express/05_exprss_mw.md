# 静态资源和服务端错误处理

## express.static 静态资源托管

express 提供了一个非常好用的方法，叫做 `express.static()`，通过此方法，可以非常方便地创建一个静态 web 资源服务器：

```js
app.use(express.static("public"));
// app.use()表示使用（中间件）
// 现在可以访问public目录下所有的文件
// 如public/aa.jpg文件，则可以通过 : http://xxxx/images/aa.jpg

// 内置的中间件: 直接将一个文件夹作为静态资源
app.use(express.static("./uploads"));
app.use(express.static("./build"));
```

express 还支持给静态资源文件创建一个**虚拟的**文件前缀（实际上文件系统中并不存在），可以使用 `express.static` 函数指定一个虚拟的静态目录，就像下面这样：

> 前缀的使用意义：
>
> - 可以迷惑别人，一定程度上阻止别人猜测我们服务器的目录结构
> - 可以帮助我们更好的组织和管理静态资源

```js
app.use("/static", express.static("public"));
```

> 前缀前面的“/”必须要加，否则就错。

现在你可以使用 `/static` 作为前缀来加载 `public` 文件夹下的文件了：

```js
http://localhost:3000/static/images/kitten.jpg
http://localhost:3000/static/css/style.css
http://localhost:3000/static/js/app.js
http://localhost:3000/static/images/bg.png
http://localhost:3000/static/hello.html
```

> 使用 app.use()方法**一般**写在具体的路由监听之前。

## 服务端错误处理

编写中间件，处理服务器给客户端错误信息

1. 方案一：返回对应 http 错误码
2. 方案二：都返回 200，在错误信息中自定义错误码和信息

```js
// 对用户名和密码进行判断
if (!username || !password) {
  next(-1001);
} else if (username !== "coderwhy" || password !== "123456") {
  next(-1002);
} else {
  res.json({
    code: 0,
    message: "登录成功, 欢迎回来~",
    token: "323dfafadfa3222",
  });
}
// 错误处理的中间件
app.use((errCode, req, res, next) => {
  const code = errCode;
  let message = "未知的错误信息";

  switch (code) {
    case -1001:
      message = "没有输入用户名和密码";
      break;
    case -1002:
      message = "输入用户名或密码错误";
      break;
  }

  res.json({ code, message });
});
```

## express 同步和异步实现

```js
// 同步情况--------------------------
app.use((req, res, next) => {
  console.log("express middleware01");
  req.msg = "aaa";
  next();
  // 返回值结果
  res.json(req.msg);
});

app.use((req, res, next) => {
  console.log("express middleware02");
  req.msg += "bbb";
  next();
});

// 异步情况------------------------
app.use(async (req, res, next) => {
  console.log("express middleware01");
  req.msg = "aaa";
  await next();
  // 返回值结果
  // res.json(req.msg)
});

app.use(async (req, res, next) => {
  console.log("express middleware02");
  req.msg += "bbb";
  await next();
});

app.use(async (req, res, next) => {
  console.log("express middleware03");
  const resData = await axios.get("http://localhost/test");
  req.msg += resData.data.data.test;

  // 只能在这里返回结果
  res.json(req.msg);
});
```
