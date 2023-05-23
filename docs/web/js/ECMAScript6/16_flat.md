# flat

flat() 方法会按照一个可指定的深度递归遍历数组，并将所有元素与遍历到的子数组中的元素合并为一个新数组返回。

```js
// 1.flat的使用:
// 将一个数组, 按照制定的深度遍历, 将遍历到的元素和子数组中的元素组成一个新的数组, 进行返回
const nums = [
  10,
  20,
  [111, 222],
  [333, 444],
  [
    [123, 321],
    [231, 312],
  ],
];
console.log(nums);
const newNums1 = nums.flat(1);
console.log(newNums1);
const newNums2 = nums.flat(2);
console.log(newNums2);
```

## flatMap

flatMap() 方法首先使用映射函数映射每个元素，然后将结果压缩成一个新数组

- flatMap 是先进行 map 操作，再做 flat 的操作
- flatMap 中的 flat 相当于深度为 1

```js
// 2.flatMap的使用:
// 1> 对数组中每一个元素应用一次传入的map对应的函数
const messages = ["Hello World aaaaa", "Hello bbbbb", "你好啊 cccc"];

// 1.for循环的方式:
const msg1 = [];
for (const item of messages) {
  const infos = item.split(" ");
  for (const info of infos) {
    msg1.push(info);
  }
}
console.log(msg1);

// 2.先进行map, 再进行flat操作
const msg2 = messages.map((item) => item.split(" ")).flat(1);
console.log(msg2);

// 3.flatMap
const msg3 = messages.flatMap((item) => item.split(" "));
console.log(msg3);
```
