/*
 * @lc app=leetcode.cn id=20 lang=typescript
 *
 * [20] 有效的括号
 *
 * https://leetcode.cn/problems/valid-parentheses/description/
 *
 * algorithms
 * Easy (44.48%)
 * Likes:    3583
 * Dislikes: 0
 * Total Accepted:    1.3M
 * Total Submissions: 2.9M
 * Testcase Example:  '"()"'
 *
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。
 *
 * 有效字符串需满足：
 *
 *
 * 左括号必须用相同类型的右括号闭合。
 * 左括号必须以正确的顺序闭合。
 * 每个右括号都有一个对应的相同类型的左括号。
 *
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：s = "()"
 * 输出：true
 *
 *
 * 示例 2：
 *
 *
 * 输入：s = "()[]{}"
 * 输出：true
 *
 *
 * 示例 3：
 *
 *
 * 输入：s = "(]"
 * 输出：false
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= s.length <= 10^4
 * s 仅由括号 '()[]{}' 组成
 *
 *
 */

// @lc code=start

function isValid(s: string): boolean {
  //利用栈的数据结构
  if (s.length % 2 == 1) return false;
  const obj = {
    "(": ")",
    "[": "]",
    "{": "}",
  } as any;
  const stack: string[] = [];
  for (let i = 0; i < s.length; i++) {
    const v = obj[s[i]];
    if (v) {
      stack.push(v);
    } else {
      const p = stack.pop();
      if (p !== s[i]) {
        return false;
      }
    }
  }
  return stack.length === 0;
}

isValid("([{[]}])[]{}");
// @lc code=end
