/*
 * @lc app=leetcode.cn id=9 lang=typescript
 *
 * [9] 回文数
 */

// @lc code=start
function isPalindrome(x: number): boolean {
  if ( x < 0 ) return false
  let str = '' + x
  return Array.from(str).reverse().join('') === str
}
// @lc code=end
