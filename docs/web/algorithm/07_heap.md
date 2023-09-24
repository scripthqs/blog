# 堆(Heap)

堆都能用树表示，一般树的实现都是利用链表实现的。

堆虽然结构像树，但是是通过数组实现的，不是链表，二叉堆是使用最多的，二叉堆是一种特殊的堆，用完全二叉树表示，利用数组实现，易存储并且便于搜索。

- 左：`2 * index + 1`
- 右：`2 *index - 1`
- 找父：`(index-1) / 2`

## 最小堆

父节点最小

```js
class MinHeap {
  constructor() {
    this.heap = [];
  }
  //找到父节点
  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  //前移操作
  up(index) {
    //0不移动
    if (index === 0) return;
    const parentIndex = this.getParentIndex(index);
    if (this.heap[parentIndex] > this.heap[index]) {
      [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
      this.up(parentIndex);
    }
  }
  //获取左节点
  getLeftIndex(index) {
    return index * 2 + 1;
  }
  //获取右节点
  getRightIndex(index) {
    return index * 2 + 2;
  }
  //后移操作
  down(index) {
    const leftIndex = this.getLeftIndex(index);
    const rightIndex = this.getRightIndex(index);
    if (this.heap[leftIndex] < this.heap[index]) {
      [this.heap[leftIndex], this.heap[index]] = [this.heap[index], this.heap[leftIndex]];
      this.down(leftIndex);
    }
    if (this.heap[rightIndex] < this.heap[index]) {
      [this.heap[rightIndex], this.heap[index]] = [this.heap[index], this.heap[rightIndex]];
      this.down(rightIndex);
    }
  }
  //添加元素
  insert(value) {
    this.heap.push(value);
    this.up(this.heap.length - 1);
  }
  //删除堆顶
  pop() {
    this.heap[0] = this.heap.pop();
    this.down(0);
  }

  //获取堆顶
  peek() {
    return this.heap[0];
  }
  //获取长度
  size() {
    return this.heap.length;
  }
}
const heap = new MinHeap();
heap.insert(5);
heap.insert(4);
```

## 利用堆求数组中第 K 个最大元素

```js
function findKthLargest(nums: number[], k: number): number {
  //简单写法
  // const arr = nums.sort((a, b) => a - b);
  // return arr[arr.length - k];
  //使用堆实现
  const heap = new MinHeap();
  nums.forEach((num) => {
    heap.insert(num);
    if (heap.size > k) {
      heap.pop();
    }
  });
  return heap.peek();
}
```
