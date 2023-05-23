# Map

Map 是一种叫做字典的数据结构，Map 字典是以[key, value] 的形式储存。

```js
//Map的构建方式
const map = new Map(); // map = {1 => 2, 2 => 3}
// const map = new Map([[1, 2], [2, 3]]); // map = {1 => 2, 2 => 3}
```

1. set 设置 key,value，新增或者修改
2. get 获取 key,value，查询
3. delete 删除元素，返回 boolean 值
4. size 返回键值对个数
5. has 检测集合中是否包含某个元素，返回 boolean 值
6. keys(),返回一个新的迭代对象，其中包含 Map 对象中所有的键
7. values(),返回一个新的迭代对象，其中包含 Map 对象中所有的值
8. entries(),返回一个新的迭代对象，其为一个包含 Map 对象中所有键值对的 [key, value] 数组
9. clear 清空 Map，返回 undefined

迭代 Map

1. 使用 for...of 循环
2. 使用 forEach() 方法

```js
for (const [key, value] of map) {
  console.log(`${key} = ${value}`);
}
for (const key of map.keys()) {
  console.log(key);
}
for (const value of map.values()) {
  console.log(value);
}

map.forEach((value, key) => {
  console.log(`${key} = ${value}`);
});
```

## Map 和 Object

在 JavaScript 中，Map 和 Object 看起来都是用键值对来存储数据，不同处：

```js
//对象的构建方式
const obj = {...};
const obj = new Object();
const obj = Object.create(null);
```

- 在 Object 中， key 必须是简单数据类型（整数，字符串或者是 symbol）
- 在 Map 中则可以是 JavaScript 支持的所有数据类型，也就是说可以用一个 Object 来当做一个 Map 元素的 key
- Map 元素的顺序遵循插入的顺序，而 Object 的则没有这一特性
- Map 继承自 Object 对象

## 场景

```js
const m = new Map([
  ["Michael", 95],
  ["Bob", 75],
  ["Tracy", 85],
]);
m.get("Michael"); // 95
```

## WeakMap

与 map 的区别：

1. WeakMap 的 key 只能使用对象，不接受其他的类型作为 key
2. WeakMap 的 key 对对象的引用是弱引用，如果没有其他引用引用这个对象，那么 GC 可以回收该对象
3. WeakMap 不能遍历
