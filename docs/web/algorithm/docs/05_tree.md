# 树(tree)

树有二叉树、红黑树等各种树。不过所有树的本质都是二叉树。

- 树顶部有个根节点(root)
- 树的深度取决于祖先节点的数量，有几个祖先节点，深度就是几。
- 树的高度 = 深度的最大值

## js 中简单的树结构

```js
{
    "id": 1,
    "name": "1",
    "pid": 0,
    "children": [
        {
            "id": 2,
            "name": "2",
            "pid": 1,
            "children": []
        },
        {
            "id": 3,
            "name": "3",
            "pid": 1,
            "children": [
                {
                  "id": 4,
                  "name": "4",
                  "pid": 3,
                  "children": []
                }
            ]
        }
    ]
}
```

## 树的遍历

树的遍历有深度优先遍历和广度优先遍历

深度优先遍历：从根出发，尽可能深的搜索树的节点

1. 访问根节点
2. 对根节点的 children 挨个进行深度搜索

广度优先遍历：从根出发，优先访问离根节点最近的节点

1. 新建一个队列，把根节点入队
2. 把队头出队
3. 把对头的 children 挨个入队
4. 重复 2 和 3，直到队列为空

```js
//深度优先遍历
const fun1 = (root) => {
  // console.log(root.name);
  root.children.forEach(fun1);
};

//广度优先遍历
const fun2 = (root) => {
  const arr = [root];
  while (arr.length > 0) {
    const o = arr.shift();
    o.children.forEach((item) => {
      arr.push(item);
    });
  }
};
```

## 二叉树的结构

```js
const tree = {
  id: 1,
  left: {
    id: 2,
    left: {
      id: 3,
      left: null,
      right: null,
    },
    right: {
      id: 4,
      left: null,
      right: null,
    },
  },
  right: {
    id: 5,
    left: null,
    right: null,
  },
};
```

二叉树还有满二叉树和完全二叉树。

```js
/*
 * 满二叉树
 * ⁠     1
 * ⁠   /   \
 * ⁠  2     3
 *  /  \⁠  /  \
 * ⁠4    5 6   7
 * 完全二叉树：缺失的的三角形，但所缺失的部分一定是右下角某个连续的部分
 * ⁠     1
 * ⁠   /   \
 * ⁠  2     3
 *  /  \⁠  /  \
 * ⁠4    5 6   
 *
 */
```

## 二叉树的遍历

树的遍历有前序遍历和先序遍历

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
