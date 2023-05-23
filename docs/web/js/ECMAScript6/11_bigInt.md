# BigInt

ES5 之前，只有 6 种数据类型，ES6 之后，到目前为止（2021），JavaScript 一共有 8 种数据类型。

其中，基本数据类型

- **`String` 字符串**
- **`Number` 数值**
- **`Boolean` 布尔值**
- **`Null` 空值**
- **`Undefined` 未定义**
- **`Symbol` (ES6) 独一无二的值类型。**
- **`BigInt` (ES10) 大整数基本类型。**

引用数据类型

- **`Object` 对象**

BigInt 数据类型提供了一种方法来表示大于 2^53-1 的整数。BigInt 可以**表示任意大的整数**。

## 作用

Number 类型只能安全的支持-9007199254740991(-(2^53-1)) 和 9007199254740991(2^53-1)之间的整数，任何超过这个范围的数值都会失去精度；而 BigInt 可以解决这个问题

```js
console.log(9007199254740999); //9007199254741000
console.log(9007199254740993 === 9007199254740992); //true
12;
```

上图，当数值超过 Number 数据类型支持的安全范围值时，将会被四舍五入，从而导致精度缺失的问题

## 使用方法

1. 在整数的末尾追加 n

   ```js
   console.log(9007199254740999n); //9007199254740999
   ```

2. 调用 BigInt()构造函数

   ```js
   var bigInt = BigInt("9007199254740999"); //传递给BigInt()的参数将自动转换为BigInt:
   console.log(bigInt); //9007199254740999n
   ```

**注意事项**:

1. BigInt 除了不能使用一元加号运算符外，其他的运算符都可以使用

   ```js
   console.log(+1n); // Uncaught TypeError: Cannot convert a BigInt value to a number
   console.log(-1n); //ok
   ```

2. BigInt 和 Number 之间不能进行混合操作

   ```js
   console.log(1n + 5);
   ```
