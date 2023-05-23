/*
 * @lc app=leetcode.cn id=226 lang=typescript
 *
 * [226] 翻转二叉树
 *
 * https://leetcode.cn/problems/invert-binary-tree/description/
 *
 * algorithms
 * Easy (79.52%)
 * Likes:    1587
 * Dislikes: 0
 * Total Accepted:    664.6K
 * Total Submissions: 835.7K
 * Testcase Example:  '[4,2,7,1,3,6,9]'
 *
 * 给你一棵二叉树的根节点 root ，翻转这棵二叉树，并返回其根节点。
 *
 *
 *
 * 示例 1：
 *
 *
 *
 *
 * 输入：root = [4,2,7,1,3,6,9]
 * 输出：[4,7,2,9,6,3,1]
 *
 *
 * 示例 2：
 *
 *
 *
 *
 * 输入：root = [2,1,3]
 * 输出：[2,3,1]
 *
 *
 * 示例 3：
 *
 *
 * 输入：root = []
 * 输出：[]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 树中节点数目范围在 [0, 100] 内
 * -100 <= Node.val <= 100
 *
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

function invertTree(root: TreeNode | null): TreeNode | null {
  //使用递归
  // if (!root) return null;
  // const left = invertTree(root.left);
  // const right = invertTree(root.right);
  // root.left = right;
  // root.right = left;
  // return root;

  //使用队列
  if (!root) return null;
  const queue: any[] = [root];
  while (queue.length) {
    const node = queue.shift();
    [node.left, node.right] = [node.right, node.left];
    node.left && queue.push(node.left);
    node.right && queue.push(node.right);
  }
  return root;
}
// @lc code=end
