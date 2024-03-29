# 访问调试

## 调试工具

在测试请求的时候，`GET`类型的请求我们可以直接通过地址栏访问 URL 来进行，对于`POST/PUT/DELETE`等特殊类型的请求，我们往往无法通过直接访问地址来实现，这个时候就需要使用三方测试工具了。常见的测试工具有：

- **postman**

- apipost

- apizza

以上三个，任选其一即可。

## 请求方式

在前后端分离式开发中，常见的增删改查不再是纯粹的`GET+POST`的两种请求方式，而是分的更加细化：

- GET：**查询**请求类型
  - 取全部的数据（列表）
  - 取单个的数据（详情）
- POST：**新增**请求类型
  - 新增是不带条件
- PUT：**修改**请求类型
  - 修改是要条件的
  - 修改条件的传递是通过地址栏传递的（restful 规范）
  - 修改的数据主体是通过请求体传递的（请求体发送方式与 post 一致）
- DELETE：**删除**请求类型
  - 删除需要条件的
  - 条件通过地址栏传递的

这种对请求方法（`请求动词`）约束的规范叫做**`restFul`规范**。该规范不是硬性要求，但是接口设计的时候一般都会遵守，其规范的不仅仅是请求方式，在请求地址形式、响应状态码等方面也存在规范要求。

在 Express 中，符合`restFul`规范的`请求动词`也是被支持的，例如如下代码：

```js
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("get请求");
});

app.post("/", (req, res) => {
  res.send("post请求");
});

app.put("/", (req, res) => {
  res.send("put请求");
});

app.delete("/", (req, res) => {
  res.send("delete请求");
});

app.listen(8080, () => {
  console.log("Server is running at http://127.0.0.1:8080");
});
```

> 注意点：如果有`地址都一样，但是需要支持所有的请求动词`这种需求，则可以简写成以下代码：
>
> ```js
> app.all("/", (req, res) => {
>   // 业务代码，只要路径匹配上即可
> });
> ```
>
> but，这种方式尽量少用！！甚至别用。虽然 all 的请求方式匹配可以所有的请求类型，但是存在安全隐患。
