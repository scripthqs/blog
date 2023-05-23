/*
 * @lc app=leetcode.cn id=94 lang=typescript
 *
 * [94] 二叉树的中序遍历
 *
 * https://leetcode.cn/problems/binary-tree-inorder-traversal/description/
 *
 * algorithms
 * Easy (76.21%)
 * Likes:    1816
 * Dislikes: 0
 * Total Accepted:    1.1M
 * Total Submissions: 1.5M
 * Testcase Example:  '[1,null,2,3]'
 *
 * 给定一个二叉树的根节点 root ，返回 它的 中序 遍历 。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：root = [1,null,2,3]
 * 输出：[1,3,2]
 *
 *
 * 示例 2：
 *
 *
 * 输入：root = []
 * 输出：[]
 *
 *
 * 示例 3：
 *
 *
 * 输入：root = [1]
 * 输出：[1]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 树中节点数目在范围 [0, 100] 内
 * -100 <= Node.val <= 100
 *
 *
 *
 *
 * 进阶: 递归算法很简单，你可以通过迭代算法完成吗？
 *
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function inorderTraversal(root: TreeNode | null): number[] {
  //使用递归
  // const arr: number[] = [];
  // function getVal(node: TreeNode) {
  //   if (!node) return;
  //   getVal(node.left);
  //   arr.push(node.val);
  //   getVal(node.right);
  // }
  // getVal(root);
  // return arr;
  //使用栈
  const arr: number[] = [];
  const stack: any[] = [];

  // 能压栈的左子节点都压进来
  while (root) {
    stack.push(root);
    root = root.left;
  }
  // 此时所有的左节点都入栈，开始出栈
  while (stack.length) {
    let node = stack.pop();
    arr.push(node.val);
    //出栈的时候将它的右节点入栈
    node = node.right;
    while (node) {
      // 右子树存在，执行while循环
      stack.push(node); // 压入当前root
      node = node.left; // 不断压入左子节点
    }
  }
  return arr;

  //   1
  // 2   3
  //4 5 6 7
  // arr  4 2 5 1 6 3 7
  // stack 1 2 4 5 3 6 7  
}
// @lc code=end
