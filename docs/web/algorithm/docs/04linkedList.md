# 链表(Linked List)

数组必须是连续的内存空间，链表不必。

- 链表访问任意位置的元素时，都需要从头开始访问。
- 无法通过下标访问

## 链表的操作

```js
append（element）：向链表尾部添加一个新的项；
insert（position，element）：向链表的特定位置插入一个新的项；
get（position）：获取对应位置的元素；
indexOf（element）：返回元素在链表中的索引。如果链表中没有该元素就返回-1；
update（position，element）：修改某个位置的元素；
removeAt（position）：从链表的特定位置移除一项；
remove（element）：从链表中移除一项；
isEmpty（）：如果链表中不包含任何元素，返回true，如果链表长度大于0则返回false；
size（）：返回链表包含的元素个数，与数组的length属性类似；
toString（）：由于链表项使用了Node类，就需要重写继承自JavaScript对象默认的toString方法，让其只输出元素的值；
```

## 链表的实现

```js
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }
  append(value) {
    let current = this.head;
    let node = new Node(value);
    // 判断长度为空时添加
    if (this.length === 0) {
      this.head = node;
      node.next = null; //可以不写
    } else {
      while (current.next) {
        current = current.next;
      }
      current.next = node;
      node.next = null; //也可以不写
    }
    this.length += 1;
  }
}
```
