# MySQL

MySQL 原本是一个开源的数据库，原开发者为瑞典的 MySQL AB 公司

- 在 2008 年被 Sun 公司收购；在 2009 年，Sun 被 Oracle 收购
- 所以目前 MySQL 归属于 Oracle

MySQL 是一个关系型数据库，其实本质上就是一款软件、一个程序：

- 这个程序中管理着多个数据库
- 每个数据库中可以有多张表
- 每个表中可以有多条数据

下载：<https://dev.mysql.com/downloads/mysql/>

- Windows 推荐下载 MSI 的版本
- Mac 推荐下载 DMG 的版本

打开终端，查看 MySQL 的安装：MySQL 的连接操作

- 需要配置环境变量

```bash
mysql --version
```

## 终端连接数据库

想要操作数据，需要先和数据建立一个连接，最直接的方式就是通过终端来连接

```bash
# 方式一：
mysql -uroot -p密码
# 方式二：
mysql -uroot -p
Enter password: your password

# 查询数据库
show databases;
```

MySQL 默认的数据库：

- infomation_schema：信息数据库，其中包括 MySQL 在维护的其他数据库、表、列、访问
  权限等信息
- performance_schema：性能数据库，记录着 MySQL Server 数据库引擎在运行过程中的一
  些资源消耗相关的信息
- mysql：用于存储数据库管理者的用户信息、权限信息以及一些日志信息等
- sys：相当于是一个简易版的 performance_schema，将性能数据库中的数据汇总成更容易
  理解的形式

一般情况下一个新的项目会对应一个新的数据库

```bash
# 在终端直接创建一个属于自己的新的数据库 test_db
create database test_db;
# 使用我们创建的数据库 test_db
use test_db;
# 在数据中，创建一张表
create table user(
  name varchar(20),
  age int,
  height double
);
# 插入数据
insert into user (name, age, height) values ('aaa', 18, 1.88);
insert into user (name, age, height) values ('bbb', 40, 1.98);
```

## GUI 工具连接数据库

直接在终端操作数据库非常不方便，开发中可以借助 GUI 工具来连接数据库，操作更加方便，常见工具：

- Navicat
- SQLYog
- TablePlus
