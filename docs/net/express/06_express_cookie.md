# cookie 和 session

## 介绍

**HTTP 是无状态协议**。例如：活中一些商家开设的会员卡服务，记名的会员卡和不记名的会员卡，不记名的就类似无状态协议**HTTP**的情况。

实际情况中，系统需要一些手段记录用户的一些列操作，就是 cookie 和 session（会话管理手段）。

两者区别：

- cookie：
  - 存储于浏览器的（客户端）
  - 有大小限制，大概是 4kb 的大小
  - 有被用户修改、删除的风险
- session：
  - 存储在服务端的（服务器上）
  - 没有被用户说改就改的风险（相对于 cookie 更加安全）
  - 默认情况下是基于 cookie 实现的（会将 session 会话 id 给 cookie，id 存储客户端上）
  - 当然 session 的 id 是可以被删除的（客户端上），解决是需要后端技术去实现的
  - 理论上讲，只要磁盘空间够，session 是可以放很多数据的

## cookie

HTTP 是一个无状态协议，客户端每次发出请求时候，下一次请求得不到上一次请求的数据，我们如何将上一次请求和下一次请求的数据关联起来呢？如用户登录成功后，跳转到其他页面时候，其他的页面是如何知道该用户已经登录了呢？此时就可以使用到 cookie 中的值来判断用户是否登录，cookie 可以保持用户数据。

cookie 它是一个由浏览器（存储 cookie）和服务器（产生 cookie）共同协作实现的（**cookie 是存储于浏览器中**）。cookie 分为如下几步实现：

1. 服务器端向客户端发送 cookie 并指定 cookie 的过期时间。
2. 浏览器将 cookie 保存起来。
3. 之后每次请求都会将 cookie 发向服务器端，在 cookie 没有过期时间内服务器都可以得到 cookie 中的值。

express 中操作的 cookie 使用 cookie-parser 模块。

> cookie-parser 模块（也是中间件），所以其也会去操作 req，res 对象；设置 cookie 是通过`res.cookie(name,value,[选项])`，读 cookie 的时候需要通过`req.cookies`对象来获取。

```shell
npm i -S cookie-parser
```

**示例代码:**

```js
const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
// 中间件引入
app.use(cookieParser());

app.get("/", (req, res) => {
  // 服务器端通过req来获取cookie数据
  if (req.cookies.username) {
    console.log(req.cookies);
    res.send("再次欢迎你");
  } else {
    // cookie设置过期时间为1天
    // maxAge 设置cookie过期时间  毫秒
    res.cookie("username", "admin", { maxAge: 86400 * 1000 });
    res.send("欢迎你~");
  }
});
app.listen(8080);
```

## session

cookie 操作很方便，但是使用 cookie 安全性不高，cookie 中的所有数据存储在客户端浏览器中，数据很容易被伪造；所以一些重要的数据就不能放在 cookie 当中了，并且 cookie 还有一个缺点就是不能存放太多的数据，一般浏览大约在 4k 左右，为了解决这些问题，session 就产生了，**session 中的数据保留在服务端的**。

数据放到 cookie 中是不安全的，我们可以在 cookie 中存放一个 sessionId 值,该 sessionId 会与服务器端之间会产生映射关系，如果 sessionId 被篡改的话，那么它就不会与服务器端数据之间产生映射，因此安全性就更好，并且**session 的有效期一般比较短，一般都是设置是 20 分钟左右**，如果在 20 分钟内客户端与服务端没有产生交互，服务端就会将数据删除。

> **扩展阅读**
>
> session 的原理是通过一个**sessionid**来进行的，sessionid 是放在客户端的 cookie 中，当请求到来时候，服务端会检查 cookie 中保存的 sessionid 是否有，并且与服务端的 session 数据（一般是 session 文件）映射起来，进行数据的保存和修改，也就是说当我们浏览一个网页时候，服务端会随机生成一个 1024 比特长的字符串，然后存在 cookie 中的 sessionid 字段中，当我们下次访问时，cookie 会带有 sessionid 这个字段。

express 中操作的 session 使用 cookie-session 模块

> cookie-session 包的对 session 设置与获取都是基于 req 请求对象。

```shell
npm i -S cookie-session
```

**示例代码:**

```js
const express = require("express");
const session = require("cookie-session");
const app = express();

app.use(
  session({
    name: "sessionId",
    // 给sessionid加密的key,随便填写，擦下键盘即可
    secret: "afsfwefwlfjewlfewfef",
    maxAge: 20 * 60 * 1000, // 20分钟
  })
);
app.get("/", (req, res) => {
  if (!req.session["view"]) {
    req.session["view"] = 1;
  } else {
    req.session["view"]++;
  }
  res.send(`欢迎您第 ${req.session["view"]} 次访问！`);
});
app.listen(8080);
```
