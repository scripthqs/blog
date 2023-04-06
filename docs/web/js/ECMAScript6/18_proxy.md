# proxy

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
  running: function() {
    console.log("running~");
  },
};

// 3.1.&&一般的应用场景
// obj && obj.running && obj.running()
// obj = obj && obj.name
obj &&= obj.name;
console.log(obj);
```
