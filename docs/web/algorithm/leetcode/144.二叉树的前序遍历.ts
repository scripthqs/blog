/*
 * @lc app=leetcode.cn id=144 lang=typescript
 *
 * [144] 二叉树的前序遍历
 *
 * https://leetcode.cn/problems/binary-tree-preorder-traversal/description/
 *
 * algorithms
 * Easy (71.29%)
 * Likes:    1070
 * Dislikes: 0
 * Total Accepted:    856.1K
 * Total Submissions: 1.2M
 * Testcase Example:  '[1,null,2,3]'
 *
 * 给你二叉树的根节点 root ，返回它节点值的 前序 遍历。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：root = [1,null,2,3]
 * 输出：[1,2,3]
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
 * 示例 4：
 *
 *
 * 输入：root = [1,2]
 * 输出：[1,2]
 *
 *
 * 示例 5：
 *
 *
 * 输入：root = [1,null,2]
 * 输出：[1,2]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 树中节点数目在范围 [0, 100] 内
 * -100
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

function preorderTraversal(root: TreeNode | null): number[] {
  // 使用递归
  // let res: number[] = [];
  // function getVal(node: TreeNode | null) {
  //   if (!node) return [];
  //   res.push(node.val); //先遍历根节点
  //   getVal(node.left); //遍历左节点
  //   getVal(node.right); //遍历右节点
  // }
  // getVal(root);
  // return res;

  //使用栈
  if (!root) return [];
  const arr: number[] = [];
  //根节点入栈
  const stack = [root];
  while (stack.length) {
    //出栈
    let node = stack.pop();
    arr.push(node.val);
    node.right && stack.push(node.right);
    node.left && stack.push(node.left);
  }
  return arr;
  // 6 4 2 1 8 7
  //5 4 1 2 6 7 8
}
// @lc code=end
