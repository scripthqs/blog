# 内置对象

除了 String、Number、Boolean 三个基本包装类外，还有很多其他的常用的包装类。

## Date 对象

在 JS 中使用 Date 对象来表示时间

- 创建 Date 对象
  - `var date = new Date();`
  - 直接使用构造函数创建的 Data 对象，则会封装当前代码执行的时间
  - 可以将一个时间作为参数传递给构造函数
  - `var date = new Date('12/30/2020 12:13:58')`
- date.getDate();
  - 获取当前日期是几日
- date.getDay();
  - 获取当前日期是周几，0-6，0 代表周日
- date.getMonth();
  - 获取月份，0-11，0 表示 1 月，11 表示 12 月
- getTime();
  - 获取当前日期对象的时间戳
  - 从 1970 年 1 月 1 日，0 时 0 分 0 秒到当前时间花费的毫秒数，1 秒=1000 毫秒
  - 计算机底层就是使用时间戳
  - `Date.now()`获取当前时间的时间戳，可以测试代码执行的性能

```js
//将字符串时间转成时间戳
let timeString = "2023-01-01";
let date = new Date(timeString);
let sjc1 = date.getTime();
let sjc2 = date.valueOf();
let scj3 = +date;
console.log(sjc1, sjc2, scj3);
let timestamp = Date.parse(timeString);
console.log(timestamp);
```

## Math 对象

- Math 和其他对象不同，不是一个构造函数
- 它属于工具类，不用创建对象，里面封装了数学运算相关的属性和方法
- `Math.abs()`绝对值
- `Math.ceil()`上舍入，进行向上取整
- `Math.floor()`向下取整
- `Math.round()`四舍五入
- `Math.random()`可以生成随机 0-1 的随机数
- 生成 x-y 随机数：`Math.round(Math.random()*(y-x)+x)`
- `Math.max()`获取最大值
- `Math.min()`获取最小值
- `Math.pow(x,y)`x 的 y 次幂
- `Math.sqrt(x)`对一个数开方
- `Math.PI` 圆周率

## RegExp 对象

RegExp 即正则表达式

- 正则表达式用于定义一些字符串的规则。
- 计算机可以根据正则表达式，来检查一个字符串是否符合指定的规则，或者将字符串中符合规则的内容提取出来。

### 创建正则表达式对象

1. 使用构造函数创建正则表达式的对象

   - `var 变量 = new RegExp("正则表达式","匹配模式") //两个参数都是字符串`
   - `test()`这个方法可以检查一个字符串是否符合正则表达式的规则
   - `reg.test(str)`如果符合则返回 true，否则返回 false
   - 构造函数第二个参数，两个参数都是字符串
     - i 忽略大小写，ignore
     - g 全局匹配模式，global

2. 使用字面量创建正则表达式

- `var 变量 = /正则表达式/匹配模式; // 注意，这个语法里没有引号`

两种方法的比较：

- 构造函数创建时，更加灵活，因为参数中可以传递变量
- 使用字面量创建更加简单

全局匹配 g 慎用 test()方法(否则很可能写出一个难以排查的 bug):

- 对于全局的正则表达式，test()只会检测是否存在某个目标字符串，只要存在就为 true

```js
const reg = /test/g;
const str = "_test_test";

console.log(reg.test(str)); // true
console.log(reg.lastIndex); // 5

console.log(reg.test(str)); // true
console.log(reg.lastIndex); // 10

console.log(reg.test(str)); // false
console.log(reg.lastIndex); // 0
```

- 全局匹配模式 g 一般用 exec()、match()、replace()等方法。
- 全局匹配模式 g 如果用于 test()方法会有问题。因为 g 模式会生成一个 lastIndex 参数来存储匹配最后一次的位置。`reg.test`可能上一次返回 true，下一次就返回 false 了。

```js
let reg = /1/g;
reg.test("123123"); //true
reg.lastIndex; //1;
reg.test("123123"); //true;
reg.lastIndex; //4;
reg.test("123123"); //false;
reg.lastIndex; //0;
```

- 创建一个表达式，检查字符串是否有 a 或 b，使用`|`或者`[]`
  - `var reg = /a|b/`
  - `var reg = /[ab]/`
  - `var reg = /[a-z]/`任意小写
  - `var reg = /[A-Z]/`任意大写
  - `var reg = /[A-z]/`任意字母
  - `var reg = /a[bde]c/`
- `^`表示除了
  - `var reg = /[^ab]/`除了 a 或 b 之外，还有没有其他的字符内容
  - `var reg = /[^0-9]/`除了数字，还有没有其他的字符内容

### 字符串和正则表达式的方法

- `split()`可以将一个字符串拆分成一个数组
  - 该方法可以根据任意字母将字符串拆分
  - 可以传递正则表达式作为参数，这样方法可以根据正则表达式区拆分字符串
  - `str.split(/[a-z]/)`
- `search()`可以搜索字符串是否含有指定内容
  - 如果搜索到指定内容，则会返回第一次出现的出现的索引，没有则返回-1
  - 可以传递正则表达式作为参数
  - `str.search(/a[bcd]e/)`
- `match()`可以根据正则表达式，从一个字符串中符合条件的内容提取出来
  - `str.match(/[A-z]/)`默认情况下，match 只会只找到第一个
  - 我们可以设置正则表达式为全局匹配
  - `str.match(/[A-z]/g)`也可以设置同时设置 ig
  - match()方法会将匹配到的内容封装到一个数组中返回，即使只查询到一个结果
  - match()这个方法还是很实用的，可以在一个很长的字符串中，提取出有规则的内容。爬虫的时候经常会使用
- `replace()`可以将字符串中的指定内容替换成新的内容
  - `str.replace('a','@')`2 个参数，被替换的内容和新的内容，默认只会替换第一个
  - `str.replace(/[a-z]/ig,'@')`
  - `str.replace(/[a-z]/ig,'')`可以去除字母

### 正则表达式语法

- 创建正则表达式检查字符串是否含有 aaa
  - `var reg = /a{3}/`
  - `{n}`表示正好出现 n 次
  - `{m,n}`表示出现 m 次到 n 次
  - `{m,}`表示出现 m 次以上
  - `()`表示一组
  - `[]`表示匹配里面的字符
- 量词
  - `+`表示至少一个，相当于`{1，}`
  - `*`表示 0 或多个，相当于`{0,}`
  - `?`表示 0 或 1，相当于`{0,1}`
- 检查字符串是否以 a 开头

  - `var reg = /^a/`
  - `^`表示开头，中括号里面表示除了/[^a]/
  - `var reg = /a$/`
  - `$`表示结尾
  - `/^a$/`表示只有 a
  - 如果在正则表达式中同时使用^和\$符号，则要求字符串必须完全符合正则表达式。

- 检查字符串是否是合法手机号
  - `var reg = /^1[3-9][0-9]{9}$/`
- 检查字符串中是否含有.
  - `.`有特殊意义，表示任意字符
  - 此时需要使用转义字符，`\`，字符串中`\`也是表示转义
  - `var reg = /\./`
  - `\.`表示单纯的`.`
- `\w`任意字母、数字、_ 相当于`[A-z0-9_]`
- `\W`除了字母、数字、_ 相当于`[^A-z0-9_]`
- `\d`任意数字，[0-9]
- `\D`除了数字，[^0-9]
- `\s`空格
- `\S`除了空格
- `\b`单词边界 `var reg = /\bhello\b/`
- `\B`除了单词边界
- 去除字符串前后的空格
  - 去除空格就是就是使用`''`替换空格
  - `str.replace(/^\s*/,"')`去掉开头的空格
  - `str = str.replace(/\s*$/, "")`去除结尾的空格
  - `str = str.replace(/^\s*|\s*$/g,"")`去除开头结尾空格
- 判断字符串是否为电子邮件
  - `var emailReg = /^\w{3,}(\.\w+)*@[A-z0-9]+(\.[A-z]{2,5}){1,2}$/`
