# 数据类型转换

使用表单、prompt 获取过来的数据默认是字符串类型的，此时就不能直接简单的进行加法运算，而需要转换变量的数据类型。

**通常会实现 3 种方式的转换**：

- 转换成字符串类型 String
- 转换成数字型 Number
- 转换成布尔型 Boolean

**转换的方式有 2 种**：

- 强制的类型转换
- 隐式类型转换

在谷歌浏览器控制台中，不同的数据类型颜色不一样

```js
console.log(18); //数字型是蓝色
console.log("18"); //字符串黑色
console.log(true); //布尔是深蓝
console.log("true"); //字符串黑色
console.log(undefined); // 浅灰
console.log(null); //浅灰
```

## 1、String 类型转换

### 1.1、toString()方法

调用被转换数据类型的 toString()方法。

- 该方法不会影响原变量，它会将转换的结果返回

- 调用 xxx 的 yyy 方法，就是 xxx.yyy

- ```css
   var a = a.toString();
  ```

- 注意：null 和 undefined 两者值没有 toString()方法。

### 1.2、String()函数

调用 String()函数，并将转换的数据作为参数传递给函数。

- 调用 xxx 函数，就是 xxx();

- ```js
  var a = String(a);
  ```

- 使用 String()函数做强制转换时，对于 Number 和 Boolean 实际上就是调用的 toString()方法，对于 Null 和 Undefined 则是直接转换成"Null"和"Undefined"

### 1.3、隐式转换之’+‘拼接

任意数据类型和 String`+`时，结果会变成字符串拼接。

- ```
  var a = a + ''
  ```

- 加上一个空字符串`''`，即可将 a 转换成字符串，这个方法等价于`var a = String(a);`

## 2、Number 类型转换

### 2.1、Number()函数

调用 Number()函数，并将转换的数据作为参数传递给函数。

- ```js
  var b = Number(b);
  ```

- 纯数字字符串转换成数字

- 含有非数字内容转换成 NaN

- 空串和全空格转换成 0

- 布尔值 true 转换成 1，false 转换成 0

- null 转换成 0，undefined 转换成 NaN

### 2.2、parseInt()函数

parseInt()将一个字符串转换成整数，专门处理字符串

- 可以将一个字符串的有效整数取出来

- ```js
  var c = parseInt(c);
  var num = parseInt(120px);
  ```

### 2.3、parseFloat()函数

parseFloat()将一个字符串转换成小数

- 可以将一个字符串的有效小数取出来，专门处理字符串

- ```js
  var c = parseFloat(1.234);
  ```

- parseInt()和 parseFloat()会将非字符串会先转换字符串再操作

### 2.4、隐式转换之‘- \* /’

任意数据类型和 Number`-` 、`*`、`/`都会转换成 Number。

```js
var b = b - 0;
var b = b * 1;
var b = b / 1;
```

更简单的写法

```js
var b = +b;
```

## 3、Boolean 类型转换

### 3.1、Boolean()函数

使用 Boolean()函数，并将转换的数据类型作为参数传递给函数。

- ```js
  var d = Boolean(d);
  ```

- Number 类型中，除了 0 和 NaN，其余的都是 true

- String 中，除了空串`''`，其余的都是 true

- null 和 undefined 都会转换成 false

- 对象也会转换成 true

### 3.2、隐式转换之’!'运算

任意数据类型做两次非运算即可转换成 Boolean

```js
var c = !!c;
```

以下几个值转换成布尔值时为 false，其他都是 true

- undefined
- null
- false
- 0
- NaN
- ""或'' 空字符串

注意：空数组（[]）和空对象（{}）对应的布尔值，都是 true。
