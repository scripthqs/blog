/*
 * @lc app=leetcode.cn id=3 lang=typescript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
function lengthOfLongestSubstring(s: string): number {
  let arr: string[] = [];
  let longest = 0;
  for (const char of s) {
    const pIndex = arr.indexOf(char);
    if (pIndex !== -1) {
      arr.splice(0, pIndex + 1);
    }
    arr.push(char);
    longest = Math.max(longest, arr.length);
  }
  return longest;
}
// @lc code=end
