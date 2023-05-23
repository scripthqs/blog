/*
 * @lc app=leetcode.cn id=169 lang=typescript
 *
 * [169] 多数元素
 *
 * https://leetcode.cn/problems/majority-element/description/
 *
 * algorithms
 * Easy (66.78%)
 * Likes:    1807
 * Dislikes: 0
 * Total Accepted:    691.8K
 * Total Submissions: 1M
 * Testcase Example:  '[3,2,3]'
 *
 * 给定一个大小为 n 的数组 nums ，返回其中的多数元素。多数元素是指在数组中出现次数 大于 ⌊ n/2 ⌋ 的元素。
 *
 * 你可以假设数组是非空的，并且给定的数组总是存在多数元素。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：nums = [3,2,3]
 * 输出：3
 *
 * 示例 2：
 *
 *
 * 输入：nums = [2,2,1,1,1,2,2]
 * 输出：2
 *
 *
 *
 * 提示：
 *
 *
 * n == nums.length
 * 1 <= n <= 5 * 10^4
 * -10^9 <= nums[i] <= 10^9
 *
 *
 *
 *
 * 进阶：尝试设计时间复杂度为 O(n)、空间复杂度为 O(1) 的算法解决此问题。
 *
 */

// @lc code=start
function majorityElement(nums: number[]): number {
  //1.使用哈希表
  // const n = Math.floor(nums.length / 2);
  // const map = new Map();
  // for (let v of nums) {
  //   if (map.has(v)) {
  //     map.set(v, map.get(v) + 1);
  //   } else {
  //     map.set(v, 1);
  //   }
  //   if (map.get(v) > n) return v;
  // }
  // return nums[n];
  //2.对于排序数组，如果一个数出现频率>n/2
  const arr = nums.sort((a, b) => a - b);
  return arr[Math.floor(arr.length / 2)];
}
// @lc code=end
