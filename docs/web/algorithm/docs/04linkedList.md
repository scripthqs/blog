# 链表(Linked List)

数组必须是连续的内存空间，链表不必。

- 链表访问任意位置的元素时，都需要从头开始访问。
- 无法通过下标访问
- 单向链表和双向链表

## 链表的操作

```js
```

## 链表的实现

```js
//链表的节点类
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null; //双链表需要
  }
}
class LinkedList {
  constructor(item) {
    this.head = new Node(item);
    this.size = 0;
    this.currentNode = ''; // 当前节点的指向
  }
  isEmpty() {
    return this.size === 0;
  }
}
```
