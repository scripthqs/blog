# 树(tree)

- 二叉搜索树
- AVL 树
- 红黑树
- 线段树 - with min/max/sum range queries examples
- 芬威克树/Fenwick Tree (Binary Indexed Tree)

所有树的本质都是二叉树。

## 二叉搜索树的操作

二叉树可以为空，二叉树有左右之分。二叉查找树的同级左节点<同级右节点。

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

## 二叉查找树的实现

```js
```
