# 队列(Queue)

队列是一种受限的线性结构。

- 先进先出
- 队列只允许前端删除，后端插入

## 队列的操作

```js
enqueue(element)：向队列尾部添加一个（或多个）新的项。
dequeue()：移除队列的第一（即排在队列最前面的）项，并返回被移除的元素。
front()：返回队列中第一个元素——最先被添加，也将是最先被移除的元素。队列不做任何变动（不移除元素，只返回元素信息——与Stack类的peek方法非常类似）。
isEmpty()：如果队列中不包含任何元素，返回true，否则返回false。
size()：返回队列包含的元素个数，与数组的length属性类似。
```

## 队列的实现

```js
class Queue {
  constructor() {
    this.list = [];
  }
  enqueue(value) {
    this.list.push(value);
  }
  dequeue() {
    return this.list.shift();
  }
  front() {
    return this.list[0];
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

## 优先级队列

```js
class PriorityQueue extends Queue {
  enqueue(value, priority = 0) {
    let insertIndex = this.list.length;
    for (let i = 0; i < this.list.length; i++) {
      if (priority <= this.list[i][1]) {
        insertIndex = i;
        break;
      }
    }
    this.list.splice(insertIndex, 0, [value, priority]);
  }
}
```
