/*
 * @lc app=leetcode.cn id=14 lang=typescript
 *
 * [14] 最长公共前缀
 *
 * https://leetcode.cn/problems/longest-common-prefix/description/
 *
 * algorithms
 * Easy (43.05%)
 * Likes:    2530
 * Dislikes: 0
 * Total Accepted:    971.7K
 * Total Submissions: 2.3M
 * Testcase Example:  '["flower","flow","flight"]'
 *
 * 编写一个函数来查找字符串数组中的最长公共前缀。
 *
 * 如果不存在公共前缀，返回空字符串 ""。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：strs = ["flower","flow","flight"]
 * 输出："fl"
 *
 *
 * 示例 2：
 *
 *
 * 输入：strs = ["dog","racecar","car"]
 * 输出：""
 * 解释：输入不存在公共前缀。
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= strs.length <= 200
 * 0 <= strs[i].length <= 200
 * strs[i] 仅由小写英文字母组成
 *
 *
 */

// @lc code=start
function longestCommonPrefix(strs: string[]): string {
  if (strs.length === 0) return "";
  if (strs.length === 1) return strs[0];
  let res = "";
  let next = true;
  for (let i = 0; i < strs[0].length; i++) {
    for (let j = 1; j < strs.length; j++) {
      if (strs[0][i] !== strs[j][i]) {
        next = false;
        break;
      }
    }
    if (next) {
      res += strs[0][i];
    } else {
      break;
    }
  }
  return res;
}
// @lc code=end
