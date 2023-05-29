# Express 路由

路由在生活中如拨打服务电话时，按数字几能处理什么样的处理，它就是类似于按键与服务之间的**映射**关系。在 Express 中，**路由指的就是客户端发起的请求与服务器端处理方法之间的映射关系**。映射就是一一对应的关系。

将所有的代码逻辑都写在 app 中，那么 app 会变得越来越复杂，应该将用户接口定义在单独的路由对象中。
![路由](./images/router.png)

```js
// 将用户的接口直接定义在app中，会让app变得复杂难以维护
app.get("/users", (req, res, next) => {});
app.get("/users/:id", (req, res, next) => {});
app.post("/users", (req, res, next) => {});
app.delete("/users/:id", (req, res, next) => {});
app.patch("/users/:id", (req, res, next) => {});
```

## express.Router

可以使用 express.Router 来创建一个路由处理程序：

- 一个 Router 实例拥有完整的中间件和路由系统
- 因此，它也被称为 迷你应用程序(mini-app)

```js
// 将用户的接口定义在单独的路由对象中userRouter
//新建router文件夹
//1.创建出空白的js文件，引入express
const express = require('express')
//2.在第一步js文件中使用express.Router()方法创建路由模块对象
const userRouter = express.Router();
//3.使用路由对象完成路由规则的对应的业务编写
userRouter.get("/", (req, res, next) => {
  res.json("用户列表数据");
});
......
//4.使用模块化导出
module.exports= userRouter

//5.在主入口文件中能够使用app.use方法来注册定义的路由模块
//在主入口文件导入userRouter.js文件
const userRouter = require("./router/userRouter");
// 让路由生效
app.use("/users", userRouter);
```
