# 实用的运算符

## 空值合并操作符

```js
let info = undefined;
// info = info || "默认值"
// console.log(info) // 默认值
// ??: 空值合并运算符
info = info ?? "默认值";
console.log(info); //''
```

## 可选链

```js
const obj = {
  name: "aaa",
  friend: {
    name: "bbb",
    // running: function() {
    //   console.log("running~")
    // }
  },
};

// 1.直接调用: 非常危险
// obj.friend.running()

// 2.if判断: 麻烦/不够简洁
// if (obj.friend && obj.friend.running) {
//   obj.friend.running()
// }

// 3.可选链的用法: ?.
obj?.friend?.running?.();
```

## 赋值

```js
// 赋值运算符
// const foo = "foo"
let counter = 100;
counter = counter + 100;
counter += 50;

// 逻辑赋值运算符
function foo(message) {
  // 1.||逻辑赋值运算符
  // message = message || "默认值"
  // message ||= "默认值"

  // 2.??逻辑赋值运算符
  // message = message ?? "默认值"
  message ??= "默认值";

  console.log(message);
}

foo("abc");
foo();

// 3.&&逻辑赋值运算符
let obj = {
  name: "why",
  running: function () {
    console.log("running~");
  },
};

// 3.1.&&一般的应用场景
// obj && obj.running && obj.running()
// obj = obj && obj.name
obj &&= obj.name;
console.log(obj);
```
