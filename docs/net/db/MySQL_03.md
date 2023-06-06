# MySQL 的高级操作

## 聚合函数

聚合函数表示对值的集合进行操作的组（集合）函数，聚合函数相当于默认将所有的数据分成了一组。

- 计算平均值
- 计算最大/小值
- 计算总和
- 统计条数

```bash
# 华为手机价格的平均值
SELECT AVG(price) FROM `products` WHERE brand = '华为';
# 计算所有手机的平均分
SELECT AVG(score) FROM `products`;
# 手机中最低和最高分数
SELECT MAX(score) FROM `products`;
SELECT MIN(score) FROM `products`;
# 计算总投票人数
SELECT SUM(voteCnt) FROM `products`;
# 计算所有条目的数量
SELECT COUNT(*) FROM `products`;
# 华为手机的个数
SELECT COUNT(*) FROM `products` WHERE brand = '华为';
```

### Group by

GROUP BY 通常和聚合函数一起使用，表示先对数据进行分组，再对每一组数据，进行聚合函数的计算。

- 根据品牌进行分组
- 计算各个品牌中：商品的个数、平均价格、最高价格、最低价格、平均评分

```bash
SELECT brand,
COUNT(*) as count,
ROUND(AVG(price),2) as avgPrice,
MAX(price) as maxPrice,
MIN(price) as minPrice,
AVG(score) as avgScore
FROM `products` GROUP BY brand;
```

### HAVING

给 Group By 查询到的结果添加一些约束，那么我们可以使用：HAVING

- 筛选出平均价格在 4000 以下，并且平均分在 7 以上的品牌

```bash
SELECT brand,
COUNT(*) as count,
ROUND(AVG(price),2) as avgPrice,
MAX(price) as maxPrice,
MIN(price) as minPrice,
AVG(score) as avgScore
FROM `products` GROUP BY brand
HAVING avgPrice < 4000 and avgScore > 7;
```

## 创建多张表

一个商品表中，对应的品牌还需要包含其他的信息

- 比如品牌的官网，品牌的世界排名，品牌的市值等
- products 表中应该表示的都是商品相关的数据，应该又另外一张表来表示 brand 的数据
- 多个商品使用的品牌是一致时，会存在大量的冗余数据

将所有的品牌数据，单独放到一张表中，创建一张品牌的表

```bash
CREATE TABLE IF NOT EXISTS `brands`(
id INT PRIMARY KEY AUTO_INCREMENT,
name VARCHAR(20) NOT NULL,
website VARCHAR(100),
worldRank INT
);
```

### 外键约束

将两张表联系起来，我们可以将 products 中的 brand_id 关联到 brand 中的 id。

```bash
# 如果是创建表添加外键约束，我们需要在创建表的()最后添加
FOREIGN KEY (brand_id) REFERENCES brand(id)
# 如果是表已经创建好，额外添加外键
ALTER TABLE `products` ADD `brand_id` INT;
ALTER TABLE `products` ADD FOREIGN KEY (brand_id) REFERENCES brand(id);
# 更新brand_id
UPDATE `products` SET `brand_id` = 1 WHERE `brand` = '华为';
UPDATE `products` SET `brand_id` = 4 WHERE `brand` = 'OPPO';
UPDATE `products` SET `brand_id` = 3 WHERE `brand` = '苹果';
UPDATE `products` SET `brand_id` = 2 WHERE `brand` = '小米';
```

### 外键存在时更新和删除数据

如果 products 中引用的外键直接更新或者删除会报错

```bash
# 存在外键时修改会报错
UPDATE `brand` SET id = 100 WHERE id = 1;
```

需要 on delete 或者 on update 的值，给更新或者删除时设置几个值：

- RESTRICT：默认，更新或删除时，报错
- NO ACTION：是在 SQL 标准中定义，和 RESTRICT 一样
- CASCADE：更新或删除某个记录时，会同步
- SET NULL：更新或删除某个记录时，设置为 NULL

## 多表查询

当数据是存放在两张表中，就需要进行多表查询，例如：希望查询到产品的同时，显示对应的品牌相关的信息

```bash
# 最简单
SELECT * FROM `products`, `brand`;
# 符合products.brand_id = brand.id条件的数据过滤出来
SELECT * FROM `products`, `brands` WHERE products.brand_id = brands.id;
```

简单的筛选并不能满足需求，需要对表进行连接

- 左连接
- 右连接
- 内连接
- 全连接

### 左连接(开发中使用最多)

以左表为主，希望获取到的是左边所有的数据

- 无论左边的表是否有对应的 brand_id 的值对应右边表的 id，左边的数据都会被查询出来

```bash
SELECT * FROM `products` LEFT JOIN `brands` ON products.brand_id = brands.id;
SELECT * FROM `products` LEFT JOIN `brands` ON products.brand_id = brands.id WHERE brands.id IS NOT NULL;
```

### 右连接

以右表为主

```bash
SELECT * FROM `products` RIGHT JOIN `brands` ON products.brand_id = brands.id;
SELECT * FROM `products` RIGHT JOIN `brands` ON products.brand_id = brands.id WHERE products.id IS NULL;
```

### 内连接

CROSS JOIN 或者 JOIN 都可以

```bash
# 内连接，代表的是在两张表连接时就会约束数据之间的关系，来决定之后查询的结果；
SELECT * FROM `products` INNER JOIN `brand` ON `products`.brand_id = `brand`.id;
# where条件，代表的是先计算出笛卡尔乘积，在笛卡尔乘积的数据基础之上进行where条件的筛选（效果一样）
SELECT * FROM `products`, `brand` WHERE `products`.brand_id = `brand`.id;
```

### 全连接

MySQL 中并没有对它的支持，需要使用 UNION 来实现

```bash
(SELECT * FROM `products` LEFT JOIN `brands` ON products.brand_id = brands.id)
UNION
(SELECT * FROM `products` RIGHT JOIN `brands` ON products.brand_id = brands.id)
```

## 多对多关系数据查询

比如学生可以选择多门课程，一个课程可以被多个学生选择

```bash
# 创建学生表
CREATE TABLE IF NOT EXISTS `students`(
id INT PRIMARY KEY AUTO_INCREMENT,
name VARCHAR(20) NOT NULL,
age INT
);
# 创建课程表
CREATE TABLE IF NOT EXISTS `courses`(
id INT PRIMARY KEY AUTO_INCREMENT,
name VARCHAR(20) NOT NULL,
price DOUBLE NOT NULL
);
```

### 建立关系表

需要一个关系表来记录两张表中的数据关系

```bash
# 创建关系表
CREATE TABLE IF NOT EXISTS `students_select_courses`(
id INT PRIMARY KEY AUTO_INCREMENT,
student_id INT NOT NULL,
course_id INT NOT NULL,
FOREIGN KEY (student_id) REFERENCES students(id) ON UPDATE CASCADE,
FOREIGN KEY (course_id) REFERENCES courses(id) ON UPDATE CASCADE
);
```

## JSON_OBJECT

使用 JSON_OBJECT 可以将数据转成对象

## JSON_ARRAYAGG

JSON_ARRAYAGG 和 JSON_OBJECT 结合可以多对多转成数组
