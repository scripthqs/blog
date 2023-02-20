/*
 * @lc app=leetcode.cn id=66 lang=typescript
 *
 * [66] 加一
 *
 * https://leetcode.cn/problems/plus-one/description/
 *
 * algorithms
 * Easy (45.45%)
 * Likes:    1112
 * Dislikes: 0
 * Total Accepted:    564.9K
 * Total Submissions: 1.2M
 * Testcase Example:  '[1,2,3]'
 *
 * 给定一个由 整数 组成的 非空 数组所表示的非负整数，在该数的基础上加一。
 *
 * 最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。
 *
 * 你可以假设除了整数 0 之外，这个整数不会以零开头。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：digits = [1,2,3]
 * 输出：[1,2,4]
 * 解释：输入数组表示数字 123。
 *
 *
 * 示例 2：
 *
 *
 * 输入：digits = [4,3,2,1]
 * 输出：[4,3,2,2]
 * 解释：输入数组表示数字 4321。
 *
 *
 * 示例 3：
 *
 *
 * 输入：digits = [0]
 * 输出：[1]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1
 * 0
 *
 *
 */

// @lc code=start
function plusOne(digits: number[]): number[] {
  //test1 数组长度太长后不行
  // let num = 0;
  // let j = digits.length-1;
  // for (let i = 0; i < digits.length; i++) {
  //   num += digits[i] * Math.pow(10, j);
  //   j--;
  // }
  // num = num + 1;
  // let res = String(num).split('');
  // return res.map(Number);
  //考虑数组的最后一位是9

  var len = digits.length;
  for (let i = len - 1; i >= 0; i--) {
    if (digits[i] === 9) {
      digits[i] = 0;
    } else {
      digits[i]++;
      return digits;
    }
  }
  digits[0] = 1;
  digits.forEach((element) => {
    element = 0;
  });
  digits.push(0);
  return digits;
}
// @lc code=end
