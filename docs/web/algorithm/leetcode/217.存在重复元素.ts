/*
 * @lc app=leetcode.cn id=217 lang=typescript
 *
 * [217] 存在重复元素
 *
 * https://leetcode.cn/problems/contains-duplicate/description/
 *
 * algorithms
 * Easy (54.78%)
 * Likes:    1011
 * Dislikes: 0
 * Total Accepted:    792.7K
 * Total Submissions: 1.4M
 * Testcase Example:  '[1,2,3,1]'
 *
 * 给你一个整数数组 nums 。如果任一值在数组中出现 至少两次 ，返回 true ；如果数组中每个元素互不相同，返回 false 。
 *
 *
 * 示例 1：
 *
 *
 * 输入：nums = [1,2,3,1]
 * 输出：true
 *
 * 示例 2：
 *
 *
 * 输入：nums = [1,2,3,4]
 * 输出：false
 *
 * 示例 3：
 *
 *
 * 输入：nums = [1,1,1,3,3,4,3,2,4,2]
 * 输出：true
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= nums.length <= 10^5
 * -10^9 <= nums[i] <= 10^9
 *
 *
 */

// @lc code=start
function containsDuplicate(nums: number[]): boolean {
  // 方法1:直接循环，然后用indexof判断有无该元素
  // const arr: number[] = [];
  // for (let num of nums) {
  //   if (arr.indexOf(num) === -1) {
  //     arr.push(num);
  //   } else {
  //     return true;
  //   }
  // }
  // return false;
  // 方法2：通过排序，判断相邻的两项是否相等
  // const arr = nums.sort((a, b) => a - b);
  // for (let i = 0; i < arr.length; i++) {
  //   if (arr[i] === arr[i + 1]) {
  //     return true;
  //   }
  // }
  // return false;

  //方法3：使用哈希表，Set 复杂度N
  const set = new Set();
  for (let n of nums) {
    //判断set中存在n否
    if (set.has(n)) {
      return true;
    } else {
      set.add(n);
    }
  }
  return false;
}
// @lc code=end
