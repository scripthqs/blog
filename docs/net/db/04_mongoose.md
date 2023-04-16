# Mongoose

## Mongoose 介绍

网址：<http://www.mongoosejs.net/docs/index.html>

mongoose 是 Node 环境下异步操作 mongodb 数据库的扩展，仅限于 Node 环境下使用。

在实际开发中，通过命令管理 mongodb 麻烦，通过程序管理。

使用 mongoose 操作 mongodb 数据步骤：

1. 使用 npm 安装 mongoose
2. 导入模块
3. 然后使用
4. 连接 mongodb 数据库
5. 定义 Schema
   - schema：简单的来讲就是规定了表结构的操作。比如：要求表中有 username 字段，该字段接着要求必填，可以继续要求该字段类型为 string，还可以要求这个字段长度为 10（相当于 mysql 建表时候的 sql 语句对字段的规定）
6. 定义 model
   - **mvc：开发模式**，要求将一个项目拆分成三个大的主体部分（m 模型、v 视图、c 控制器），**==其中 m 负责业务逻辑与数据库的交互部分==、v 负责展示给用户页面、c 控制器负责请求与响应的整体调度**。
7. 使用 model 进行数据增删改查操作

## 连接数据库

使用 npm 安装 mongoose 模块，并在使用模块中导入：

```shell
# 安装mongoose
npm i -S mongoose
```

```js
// 导入模块
const mongoose = require("mongoose");
// 连接数据库 返回promise对象
mongoose.connect("mongodb://localhost:27017/数据库名", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
// 库必须要先存在

// connect方法参2在新版本需添加，否则会有警告提示
// useNewUrlParser：当前URL字符串分析器已弃用，将在将来的版本中删除。要使用新的解析器，请将选项{usenewurlparser:true}传递给mongoclient.connect。
// useUnifiedTopology：当前服务器发现和监视引擎已弃用，将在将来的版本中删除。要使用新的服务器发现和监视引擎，请将选项{useUnifiedTopology:true}传递给mongoclient构造函数
```

## 定义 Schema

Schema 是 mongoose 中会用到的一种数据模式，可以理解为数据表结构的定义；每个 schema 会映射到 mongodb 中的一个集合，它不具备操作数据库的能力。Schema 中定义数据校验，默认值，字段名，字段类型等特性。

作用：

- 建表（也就是说，后期建表不再通过 mongoDB 的命令行的形式产生了，而是通过 JavaScript 代码实现）

在定义 schema 的是有使用到相关约束规则，可以查看：<http://www.mongoosejs.net/docs/guide.html>

```js
// 创建用户集合规则
const UserSchema = new mongoose.Schema({
  // 字段名/域名称
  name: {
    // 指字域类型
    type: String,
    // 必填字段
    required: true,
    // 字段最小长度  minlength 用于字符串类型
    minlength: 2,
  },
  age: {
    type: Number,
    // 默认值
    default: 10,
    // 字段最小值 min用于数字类型
    min: 1,
  },
  pwd: String,
  email: String,
  // 定义此字段为 字符串数组类型
  hobbies: [String],
});
```

在 Schema 定义好后，后期增删改查时，如果对应的表不存在，则其会自动按照 Schema 的约束进行建表，如果表存在了则不重新建立。

## 定义 model

model 是由 schema 生成的模型，模型是最终用来进行数据增删改查操作使用的，可以对数据库的操作：

```javascript
// 参数1：model名称
// 参数2：schema名称
// 参数3：操作的数据集合（表名）   如果参数3没有填写则以 参1的复数形式为操作数据集合名称
const Model = mongoose.model("User", UserSchema, "users");

// 模型curd相关方法
Model.insertMany({ key: value });
Model.deleteMany({ 条件 }, (err) => {});
Model.deleteOne({ 条件 }, (err) => {});
Model.countDocuments({ 条件 });
Model.find({ 条件 }, { 可选字段返回: 0 / 1 }, { skip: 0, limit: 10 });
Model.findOne({ 条件 }, { 可选字段返回: 0 / 1 });
Model.updateMany({ 条件 }, { $set: { key: value } }, (res) => {});
Model.updateOne({ 条件 }, { $set: { key: value } }, (res) => {});
```

## 在 express 中使用 mongoose

需求：通过 postman 发送 post 数据给 express 服务器，能够对 mongoDB 中的`shop`库中的`members`表进行插入操作。

- 创建库
  - `use shop`
- 创建 express 服务器，接受 post 传参
- 连接数据库（mongoDB）
- 定义 schema（创建表`members`）
- 定义模型实现数据的添加操作

```js
// - 创建express服务器，接受post传参
const express = require("express");
const app = express();
const body = require("body-parser");

// 使用中间件解析post数据
app.use(body.urlencoded({ extended: false }));

// 1. 引入mongoose
const mongoose = require("mongoose");

// - 连接数据库（mongoDB）
mongoose.connect("mongodb://localhost:27017/shop", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// - 定义schema（创建表members）
const members_schema = new mongoose.Schema({
  username: {
    type: String,
    minlength: 2,
  },
  password: {
    type: String,
    minlength: 8,
  },
  // 后续如果需要更多的字段，接着写即可
});

// - 定义模型实现数据的添加操作
const Model = mongoose.model("Member", members_schema, "members");

app.post("/", (req, res) => {
  // console.log(req.body);
  // 写入数据到mongoDB
  // Model.insertMany(req.body)
  // 查询
  Model.find().then((ret) => console.log(ret));
  // 象征性输出
  res.send("hi");
});

app.listen(9527, () => {
  console.log("server is running at http://127.0.0.1:9527");
});
```
