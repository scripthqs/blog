/*
 * @lc app=leetcode.cn id=35 lang=typescript
 *
 * [35] 搜索插入位置
 *
 * https://leetcode.cn/problems/search-insert-position/description/
 *
 * algorithms
 * Easy (45.01%)
 * Likes:    1762
 * Dislikes: 0
 * Total Accepted:    978.5K
 * Total Submissions: 2.2M
 * Testcase Example:  '[1,3,5,6]\n5'
 *
 * 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
 *
 * 请必须使用时间复杂度为 O(log n) 的算法。
 *
 *
 *
 * 示例 1:
 *
 *
 * 输入: nums = [1,3,5,6], target = 5
 * 输出: 2
 *
 *
 * 示例 2:
 *
 *
 * 输入: nums = [1,3,5,6], target = 2
 * 输出: 1
 *
 *
 * 示例 3:
 *
 *
 * 输入: nums = [1,3,5,6], target = 7
 * 输出: 4
 *
 *
 *
 *
 * 提示:
 *
 *
 * 1 <= nums.length <= 10^4
 * -10^4 <= nums[i] <= 10^4
 * nums 为 无重复元素 的 升序 排列数组
 * -10^4 <= target <= 10^4
 *
 *
 */

// @lc code=start
function searchInsert(nums: number[], target: number): number {
  //test1
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= target) {
      return i;
    }
  }
  return nums.length;
  //test2
  // let min = 0;
  // let max = nums.length - 1;
  // while (true) {
  //   const middle = Math.floor((min + max) / 2);
  //   const num = nums[middle];
  //   if (max - min <= 1) {
  //     if (target <= nums[min]) {
  //       return min;
  //     } else if (target <= nums[max]) {
  //       return max;
  //     } else {
  //       return max + 1;
  //     }
  //   }
  //   if (num > target) {
  //     max = middle;
  //   } else if (num < target) {
  //     min = middle;
  //   } else {
  //     return middle;
  //   }
  // }

  //test3
  // let head = 0,
  //   tail = nums.length - 1,
  //   mid;
  // while (tail - head > 3) {
  //   mid = head + Math.floor((tail - head) / 2);
  //   if (nums[mid] >= target) tail = mid;
  //   else {
  //     head = mid + 1;
  //   }
  // }
  // for (let i = head; i <= tail; i++) {
  //   if (nums[i] >= target) return i;
  // }
  // return nums.length;
}

// @lc code=end
