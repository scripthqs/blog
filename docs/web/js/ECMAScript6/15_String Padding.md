# String Padding

某些字符串我们需要对其进行前后的填充，来实现某种格式化效果，ES8 中增加了 padStart 和 padEnd 方法，分别是对字符串
的首尾进行填充的。

```js
// padStart和padEnd
// 1.应用场景一: 对时间进行格式化
// const minute = "15".padStart(2, "0")
// const second = "6".padStart(2, "0")

// console.log(`${minute}:${second}`)

// 2.应用场景二: 对一些敏感数据格式化，例如银行卡
let cardNumber = "132666200001018899";
const sliceNumber = cardNumber.slice(-4);
cardNumber = sliceNumber.padStart(cardNumber.length, "*");
// const cardEl = document.querySelector(".card");
// cardEl.textContent = cardNumber;
```

## trimStart

去除一个字符串首尾的空格，可以通过 trim 方法，如果单独去除前面或者后面，可以使用：

- trimStart
- trimEnd

```js
const message = "   Hello World    ";
console.log(message.trim());
console.log(message.trimStart());
console.log(message.trimEnd());
```
