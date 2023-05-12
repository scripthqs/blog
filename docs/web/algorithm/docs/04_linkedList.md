# 链表(Linked List)

数组必须是连续的内存空间，链表不必。js 中的原型链就是链表解构。

- 链表访问任意位置的元素时，都需要从头开始访问。
- 无法通过下标访问
- 单向链表和双向链表

## 用 js 写链表

```js
function Node(value) {
  this.value = value;
  this.next = null;
}
let a = new Node(1);
let b = new Node(2);
let c = new Node(3);
let d = new Node(4);
a.next = b;
b.next = c;
c.next = d;

//普通遍历
function whileNode(root) {
  let temp = root;
  while (temp) {
    console.log(temp.value);
    temp = temp.next;
  }
}
//递归遍历
function nextNode(root) {
  if (!root) return;
  console.log(root.value);
  nextNode(root.next);
}

//插入元素
let m = new Node(5);
b.next = m;
m.next = c;

//删除元素
b.next = c;
```

## 链表的操作

```js
append(element) 向链表尾部添加一个新的项。
insert(position, element) 向链表的特定位置插入一个新的项。
get(position) 获取对应位置的元素。
indexOf(element) 返回元素在链表中的索引。如果链表中没有该元素就返回-1。
update(position, element) 修改某个位置的元素。
removeAt(position) 从链表的特定位置移除一项。
remove(element) 从链表中移除一项。
isEmpty() 如果链表中不包含任何元素，返回 true，如果链表长度大于 0 则返回 false。
size() 返回链表包含的元素个数，与数组的 length 属性类似。
toString() 由于链表项使用了 Node 类，就需要重写继承自 JavaScript 对象默认的 toString 方法，让其只输出元素的值。
```

## 单向链表的实现

```js
//链表的节点类
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  append(item) {
    const newNode = new Node(item);
    if (!this.head) {
      this.head = newNode;
    } else {
      let curNode = this.head;
      while (curNode.next) {
        curNode = curNode.next;
      }
      curNode.next = newNode;
    }
    this.size++;
  }
  insert(position, item) {
    // 1、对 position 进行越界判断，不能小于 0 或大于链表长度
    if (position < 0 || position > this.size) return false;
    const newNode = new Node(item);
    if (position === 0) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      let curNode = this.head;
      let preNode = null;
      let index = 0;
      while (index++ < position) {
        preNode = curNode;
        curNode = curNode.next;
      }
      newNode.next = curNode;
      preNode.next = newNode;
    }
    this.size++;
    return true;
  }
  get(position) {
    if (position < 0 || position >= this.size) return null;
    let curNode = this.head;
    let index = 0;
    while (index++ < position) {
      curNode = curNode.next;
    }
    return curNode.data;
  }
  indexOf(item) {
    const curNode = this.head;
    let index = 0;
    while (curNode) {
      if (curNode.data === item) {
        return index;
      }
      curNode = curNode.next;
      index++;
    }
    return -1;
  }
  update(position, item) {
    if (position < 0 || position >= this.size) return false;
    let curNode = this.head;
    let index = 0;
    while (index++ < position) {
      curNode = curNode.next;
    }
    curNode.data = item;
    return true;
  }
  removeAt(position) {
    if (position < 0 || position >= this.size) return null;
    let curNode = this.head;
    if (position === 0) {
      this.head = this.head.next;
    } else {
      let preNode = null;
      let index = 0;
      while (index++ < position) {
        preNode = curNode;
        curNode = curNode.next;
      }
      //让上一个节点的next指向下一个节点的next，相当于删除
      preNode.next = curNode.next;
    }
    this.size--;
    return curNode;
  }
  remove(item) {
    this.removeAt(this.indexOf(item));
  }
  isEmpty() {
    return this.size === 0;
  }
  toString() {
    let curNode = this.head;
    let result = "";
    // 遍历所有的节点，拼接为字符串，直到节点为 null
    while (curNode) {
      result += curNode.data + " ";
      curNode = curNode.next;
    }
    return result;
  }
}

const linkedList = new LinkedList();
```

## 双向链表的实现

```js
// 双向链表的节点类（继承单向链表的节点类）
class DoublyNode extends Node {
  constructor(element) {
    super(element);
    this.prev = null;
  }
}

// 双向链表类继承单向链表类
class DoublyLinkedList extends LinkedList {
  constructor() {
    super();
    this.tail = null;
  }
  append(item) {
    // 1、创建双向链表节点
    const newNode = new DoublyNode(item);
    // 2、追加元素
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      //this.tail.next指向的就是新节点
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
  }
}
```
