# 树(tree)

树有二叉树、红黑树等各种树。不过所有树的本质都是二叉树。

- 树顶部有个根节点(root)
- 树的深度取决于祖先节点的数量，有几个祖先节点，深度就是几。
- 树的高度 = 深度的最大值

## 二叉搜索树的操作

二叉树可以为空，二叉树有左右之分。二叉搜索树就是二叉树的一种。二叉搜索树的同级左节点<同级右节点。

```js
insert(key)：向树中插入一个新的键。
search(key)：在树中查找一个键，如果结点存在，则返回true；如果不存在，则返回false。
inOrderTraverse：通过中序遍历方式遍历所有结点。
preOrderTraverse：通过先序遍历方式遍历所有结点。
postOrderTraverse：通过后序遍历方式遍历所有结点。
min：返回树中最小的值/键。
max：返回树中最大的值/键。
remove(key)：从树中移除某个键。
```

## 二叉搜索树的实现

```js
class Node {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}
```
