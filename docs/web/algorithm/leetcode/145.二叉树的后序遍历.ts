/*
 * @lc app=leetcode.cn id=145 lang=typescript
 *
 * [145] 二叉树的后序遍历
 *
 * https://leetcode.cn/problems/binary-tree-postorder-traversal/description/
 *
 * algorithms
 * Easy (76.32%)
 * Likes:    1035
 * Dislikes: 0
 * Total Accepted:    621.9K
 * Total Submissions: 814.8K
 * Testcase Example:  '[1,null,2,3]'
 *
 * 给你一棵二叉树的根节点 root ，返回其节点值的 后序遍历 。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：root = [1,null,2,3]
 * 输出：[3,2,1]
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
 * 树中节点的数目在范围 [0, 100] 内
 * -100 <= Node.val <= 100
 *
 *
 *
 *
 * 进阶：递归算法很简单，你可以通过迭代算法完成吗？
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

function postorderTraversal(root: TreeNode | null): number[] {
  // const arr: number[] = [];
  // function getVal(node) {
  //   if (!node) return [];
  //   getVal(node.left);
  //   getVal(node.right);
  //   arr.push(node.val);
  // }
  // getVal(root);
  // return arr;

  if (!root) return [];
  const arr: number[] = [];
  const stack: any[] = [root];

  while (stack.length) {
    const node = stack.pop();
    arr.unshift(node.val);
    node.left && stack.push(node.left);
    node.right && stack.push(node.right);
  }

  //   1
  // 2   3
  //4 5 6 7
  // arr  4 5 6 7 2 3 1
  // stack 1 2 3 6 7 4 5
  return arr;
}
// @lc code=end
