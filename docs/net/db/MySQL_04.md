# Node 使用 MySQL 数据库

在 Node 的代码中执行 SQL 语句可以借助两个库：

- mysql：最早的 Node 连接 MySQL 的数据库驱动
- mysql2：在 mysql 的基础之上，进行了很多的优化、改进

mysql2 兼容 mysql 的 API，并且提供了一些附加功能，支持 promise

## 使用 mysql2

安装 mysql2

```bash
npm install mysql2
```

1. 创建连接（通过 createConnection），并且获取连接对象
2. 执行 SQL 语句即可（通过 query）

```js
const mysql = require("mysql2");

// 1.创建一个连接(连接上数据库)
const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "xxxxx",
  database: "test_db",
});

// 2.执行操作语句, 操作数据库
const statement = "SELECT * FROM `students`;";
// structure query language: DDL/DML/DQL/DCL
connection.query(statement, (err, values, fields) => {
  if (err) {
    console.log("查询失败:", err);
    return;
  }

  // 查看结果
  console.log(values);
  // console.log(fields)
});
```

## Prepared Statement

Prepared Statement（预编译语句）

- 提高性能：将创建的语句模块发送给 MySQL，然后 MySQL 编译（解析、优化、转换）语句模块，并且存储它但是不执行，真正执行时会给?提供实际的参数才会执行；就算多次执行，也只会编译一次，所以性能是更高的
- 防止 SQL 注入：：之后传入的值不会像模块引擎那样就编译，那么一些 SQL 注入的内容不会被执行；or 1 = 1 不会被执行

## Connection Pools

Connection Pools 连接池

- 可以在需要的时候自动创建连接，并且创建的连接不会被销毁，会放到连接池中，后续可以继续使用
- 可以在创建连接池的时候设置 LIMIT，也就是最大创建个数

## Promise 方式

mysql2 同样是支持的 promise，以及 async 和 await
