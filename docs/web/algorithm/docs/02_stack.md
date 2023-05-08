# 栈(Stack)

数组是一种线性结构，可以在任意位置插入或删除数据。而栈是一种受限的线性结构。

- 后进先出
- 只允许操作表的两端，栈顶和栈底。
- 进栈/入栈/压栈对应出栈/退栈。

```js
//函数调用栈
const a = () => {
  b();
};
const b = () => {
  c();
};
a(); //c->b->a
```

## 栈的操作

```js
push(element): 添加一个新元素到栈顶位置.
pop()：移除栈顶的元素，同时返回被移除的元素。
peek()：返回栈顶的元素，不对栈做任何修改（这个方法不会移除栈顶的元素，仅仅返回它）。
isEmpty()：如果栈里没有任何元素就返回true，否则返回false。
clear()：移除栈里的所有元素。
size()：返回栈里的元素个数。这个方法和数组的length属性很类似。
```

## 栈的实现

```js
class Stack {
  constructor() {
    this.list = [];
  }
  push(value) {
    this.list.push(value);
  }
  pop() {
    return this.list.pop();
  }
  peek() {
    return this.list[this.list.length - 1];
  }
  isEmpty() {
    return this.list.length === 0;
  }
  clear() {
    this.list = [];
  }
  size() {
    return this.list.length;
  }
}
```

## 使用栈将 10 进制转换成 2 进制

```js
let num = 100;
num.toString(2); //10进制转2进制
let num = 1100100;
parseInt(num, 2); //2进制转10进制
```

```js
const dec2bin = (num) => {
  const stack = new Stack();
  while (num > 0) {
    stack.push(num % 2);
    num = Math.floor(num / 2);
  }
  let bStr = "";
  if (!stack.isEmpty()) {
    bStr += stack.pop();
  }
  return bStr;
};
```
