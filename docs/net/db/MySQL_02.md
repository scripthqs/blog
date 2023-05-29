# SQL 语句

SQL 语句是数据库沟通的语言，用来操作数据库，特别是在代码中操作

- SQL 是 Structured Query Language，称之为结构化查询语言，简称 SQL
- 使用 SQL 编写出来的语句，就称之为 SQL 语句，以用于对数据库进行操作

SQL 语句的常用规范：

- 通常关键字使用大写的，比如 CREATE、TABLE、SHOW 等等
- 一条语句结束后，需要以 ; 结尾
- 如果遇到关键字作为表明或者字段名称，可以使用``包裹

## SQL 语句的分类

常见的 SQL 语句可以分成四类：

- DDL（Data Definition Language）：数据定义语言，创建、删除、修改等操作
- DML（Data Manipulation Language）：数据操作语言，添加、删除、修改等操作
- DQL（Data Query Language）：数据查询语言，从数据库中查询记录(重点)
- DCL（Data Control Language）：数据控制语言，对数据库、表格的权限进行相关访问控制操作

## SQL 操作数据库

```bash
# 对数据库进行操作:
# 1.查看当前所有的数据库
SHOW DATABASES;

# 2.使用某一个数据库
USE test_db;

# 3.查看目前哪一个数据是选中(正在使用的数据)
SELECT DATABASE();

# 4.创建一个新的数据库
# CREATE DATABASE test_db;
CREATE DATABASE IF NOT EXISTS test_db;

# 5.删除某一个数据库
DROP DATABASE IF EXISTS test_db;

# 6.修改数据库(了解)
```

## SQL 数据类型

在数据库中有不同的数据类型，MySQL 支持的数据类型有：数字类型，日期和时间类型，字符串（字符和字节）类型，空间类型和 JSON 数据类型(这种类型建议新建表)。

### 数字类型

最常用有 INT 和 DOUBLE 类型

- 整数数组类型：INTEGER、INT、BIGINT 等等
- 浮点数字类型：FLOAT(4 个字节)、DOUBLE(8 个字节)
- 精确数字类型：DECIMAL、NUMERIC

### 日期类型

最常用的有：DATE 和 TIMESTAMP

- YEAR 以 YYYY 格式显示值
- DATE 类型用于具有日期部分但没有时间部分的值
- DATETIME 类型用于包含日期和时间部分的值(比下面这个宽松一点)
- TIMESTAMP 数据类型被用于同时包含日期和时间部分的值(对时间有一定限制)

### 字符串类型

最常用的是 VARCHAR，VARCHAR 被查询不会删除后面的空格，CHAR 被查询时会删除后面空格

- CHAR 类型在创建表时为固定长度，长度可以是 0 到 255 之间的任何值
- VARCHAR 类型的值是可变长度的字符串，长度可以指定为 0 到 65535 之间的值
- BINARY 和 VARBINARY 类型用于存储二进制字符串，存储的是字节字符串
- BLOB 用于存储大的二进制类型
- TEXT 用于存储大的字符串类型

## 表约束

### 主键 PRIMARY KEY

一张表中，为了区分每一条记录的唯一性，必须有一个字段是永远不会重复，并且不会为空的，这个字段我们通常会将它设
置为主键(PRIMARY KEY)

- 主键是表中唯一的索引
- 并且必须是 NOT NULL 的，如果没有设置 NOT NULL，那么 MySQL 也会隐式的设置为 NOT NULL
- 主键也可以是多列索引，PRIMARY KEY(key_part, ...)，一般称之为联合主键
- 建议：开发中主键字段应该是和业务无关的，尽量不要使用业务字段来作为主键

### 唯一 UNIQUE

某些字段在开发中希望是唯一的，不会重复的，比如手机号码、身份证号码等，这个字段我们可以使用 UNIQUE 来约束

- 使用 UNIQUE 约束的字段在表中必须是不同的
- UNIQUE 索引允许 NULL 包含的列具有多个值 NULL

### 不能为空 NOT NULL

某些字段要求用户必须插入值，不可以为空，这个时候可以使用 NOT NULL 来约束

### 默认值 DEFAULT

某些字段希望在没有设置值时给予一个默认值，这个时候可以使用 DEFAULT 来完成；

### 自动递增 AUTO_INCREMENT

某些字段希望不设置值时可以进行递增，比如用户的 id，这个时候可以使用 AUTO_INCREMENT 来完成

### 外键约束

外键约束也是最常用的一种约束手段，一般用于多表关系

## DDL 操作数据表

```bash
CREATE TABLE IF NOT EXISTS `test`(
  name VARCHAR(20),
  age INT,
  height DOUBLE
);
# 查看所有的数据表
SHOW TABLES;
# 查看某一个表结构
DESC user;
```

### DDL 创建表

```bash
CREATE TABLE IF NOT EXISTS `users`(
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(20) NOT NULL,
  age INT DEFAULT 0,
  phone VARCHAR(20) DEFAULT '' UNIQUE NOT NULL
);
```

### DDL 删除表

```bash
DROP TABLE users;
DROP TABLE IF EXISTS users;
```

### DDL 修改表

```bash
# 1.修改表名
ALTER TABLE `moments` RENAME TO `moment`;
# 2.添加一个新的列
ALTER TABLE `moment` ADD `publishTime` DATETIME;
ALTER TABLE `moment` ADD `updateTime` DATETIME;
# 3.删除一列数据
ALTER TABLE `moment` DROP `updateTime`;
# 4.修改列的名称
ALTER TABLE `moment` CHANGE `publishTime` `publishDate` DATE;
# 5.修改列的数据类型
ALTER TABLE `moment` MODIFY `id` INT;
```

## DML 操作数据表

```bash
# 创建一张新的表
CREATE TABLE IF NOT EXISTS `products`(
    `id` INT PRIMARY KEY AUTO_INCREMENT,
    `title` VARCHAR(20),
    `description` VARCHAR(200),
    `price` DOUBLE,
    `publishTime` DATETIME
);

# 插入数据
# INSERT INTO `products` (字段名称) VALUES (值);
INSERT INTO `products` (`title`, `description`, `price`, `publishTime`)
VALUES ('iPhone', 'iPhone12只要998', 998.88, '2020-10-10');
INSERT INTO `products` (`title`, `description`, `price`, `publishTime`)
VALUES ('huawei', 'huaweiP40只要888', 888.88, '2020-11-11');

# 删除数据
# 会删除表中所有的数据(慎用)
DELETE FROM `products`;
# 会删除符合条件的数据
DELETE FROM `products` WHERE `title` = 'iPhone';

# 修改数据
# 会修改表中所有的数据
UPDATE `products` SET `title` = 'iPhone12', `price` = 1299.88;
# 会修改符合条件的数据
UPDATE `products` SET `title` = 'iPhone12', `price` = 1299.88 WHERE `title` = 'iPhone';

# 如果希望修改完数据后，直接可以显示最新的更新时间
ALTER TABLE `products` ADD `updateTime` TIMESTAMP
DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP;
```

## DQL 语句查询数据库

```bash
SELECT select_expr [, select_expr]...
    [FROM table_references]
    [WHERE where_condition]
    [ORDER BY expr [ASC | DESC]]
    [LIMIT {[offset,] row_count | row_count OFFSET offset}]
    [GROUP BY expr]
    [HAVING where_condition]

# 创建一个表，并添加一些字段
CREATE TABLE IF NOT EXISTS `products` (
    id INT PRIMARY KEY AUTO_INCREMENT,
    brand VARCHAR(20),
    title VARCHAR(100) NOT NULL,
    price DOUBLE NOT NULL,
    score DECIMAL(2,1),
    voteCnt INT,
    url VARCHAR(100),
    pid INT
);
```

### 基本查询

```bash
# 查询所有的数据并且显示所有的字段
SELECT * FROM `products`;
# 查询title、brand、price
SELECT title, brand, price FROM `products`;
# 给字段起别名，别名一般在多张表或者给客户端返回对应的key时会使用到
SELECT title as t, brand as b, price as p FROM `products`;
```

### 条件查询

- 条件查询会使用 WHERE 查询子句
- 逻辑条件 &&,||,BETWEEN,AND,OR,IN
- 模糊查询 LIKE 关键字结合`%`和`_`

```bash
# 简单条件查询
# 查询价格小于1000的手机
SELECT * FROM `products` WHERE price < 1000;
# 查询价格大于等于2000的手机
SELECT * FROM `products` WHERE price >= 2000;
# 价格等于3399的手机
SELECT * FROM `products` WHERE price = 3399;
# 价格不等于3399的手机
SELECT * FROM `products` WHERE price != 3399;
# 查询华为品牌的手机
SELECT * FROM `products` WHERE `brand` = '华为';

# 逻辑条件 &&,||,BETWEEN,AND,OR,IN
# 查询品牌是华为，并且小于2000元的手机
SELECT * FROM `products` WHERE `brand` = '华为' AND `price` < 2000;
SELECT * FROM `products` WHERE `brand` = '华为' && `price` < 2000;
# 查询1000到2000的手机（不包含1000和2000）
SELECT * FROM `products` WHERE price > 1000 AND price < 2000;
# OR: 符合一个条件即可
# 查询所有的华为手机或者价格小于1000的手机
SELECT * FROM `products` WHERE brand = '华为' OR price < 1000;
SELECT * FROM `products` WHERE brand = '华为' || price < 1000;
# 查询1000到2000的手机（包含1000和2000）
SELECT * FROM `products` WHERE price BETWEEN 1000 AND 2000;
# 查看多个结果中的一个
SELECT * FROM `products` WHERE brand IN ('华为', '小米')

# 模糊条件查询
# 模糊查询使用LIKE关键字，结合两个特殊的符号：
# %表示匹配任意个的任意字符
# _表示匹配一个的任意字符
# 查询所有以v开头的title
SELECT * FROM `products` WHERE title LIKE 'v%';
# 查询带M的title
SELECT * FROM `products` WHERE title LIKE '%M%';
# 查询带M的title必须是第三个字符
SELECT * FROM `products` WHERE title LIKE '__M%';
```

### 查询结果排序

将查询到的结果按照某种方式进行排序，这个时候使用的是 ORDER BY 有两个常用的值：

- ASC：升序排列
- DESC：降序排列

```bash
SELECT * FROM `products` WHERE brand = '华为' or price < 1000 ORDER BY price ASC;
```

### 分页查询

当数据库中的数据非常多时，不能一次性查询到所有的结果，需要分页查询

- 用户传入 offset、limit 或者 page 等字段
- 可以在数据库中进行分页查询

```bash
SELECT * FROM `products` LIMIT 30 OFFSET 0;
SELECT * FROM `products` LIMIT 30 OFFSET 30;
SELECT * FROM `products` LIMIT 30 OFFSET 60;
# 另外一种写法：offset, row_count
SELECT * FROM `products` LIMIT 90, 30;
```
