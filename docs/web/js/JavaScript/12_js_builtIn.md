# 包装类

内置对象是由 ES 标准中定义的对象，在任何的 ES 实现中都可以使用。

比如：Object、Math、Date、String、Array、Number、Boolean、Function，RegExp 等。

## 基本包装类

JS 为我们提供了三个**基本包装类**：

- String()：将基本数据类型字符串，转换为 String 对象。
- Number()：将基本数据类型的数字，转换为 Number 对象。
- Boolean()：将基本数据类型的布尔值，转换为 Boolean 对象。

通过上面这这三个包装类，我们可以**将基本数据类型的数据转换为对象**。

代码举例：

```js
let str1 = "abcdefg";
let str2 = new String("abcdefg");

let num = new Number(3);

let bool = new Boolean(true);

console.log(typeof str1); // 打印结果：string
console.log(typeof str2); // 注意，打印结果：object
```

**需要注意的是**：我们在实际应用中一般不会使用基本数据类型的对象。如果使用基本数据类型的对象，在做一些比较时可能会带来一些**不可预期**的结果。

比如说：

```js
var boo1 = new Boolean(true);
var boo2 = new Boolean(true);

console.log(boo1 === boo2); // 打印结果是：false
```

再比如说：

```js
var boo3 = new Boolean(false);
//boo3是一个对象，会转成true
if (boo3) {
  console.log("abcd"); // 这行代码会执行了
}
```

## 基本包装类型的作用

当我们对一些基本数据类型的值去调用属性和方法时，浏览器会**临时使用包装类将基本数据类型转换为引用数据类型**，这样的话，基本数据类型就有了属性和方法，然后再调用对象的属性和方法；调用完以后，再将其转换为基本数据类型。

举例：

```js
var str = "abcdefg";
console.log(str.length); // 打印结果：7
```

比如，上面的代码，执行顺序是这样的：

```js
// 步骤（1）：把简单数据类型 string 转换为 引用数据类型  String，保存到临时变量中
var temp = new String("abcdefg");
// 步骤（2）：把临时变量的值 赋值给 str
str = temp;
//  步骤（3）：销毁临时变量
temp = null;
```
