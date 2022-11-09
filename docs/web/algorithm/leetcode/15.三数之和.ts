/*
 * @lc app=leetcode.cn id=15 lang=typescript
 *
 * [15] 三数之和
 *
 * https://leetcode.cn/problems/3sum/description/
 *
 * algorithms
 * Medium (36.39%)
 * Likes:    5364
 * Dislikes: 0
 * Total Accepted:    1.2M
 * Total Submissions: 3.2M
 * Testcase Example:  '[-1,0,1,2,-1,-4]'
 *
 * 给你一个整数数组 nums ，判断是否存在三元组 [nums[i], nums[j], nums[k]] 满足 i != j、i != k 且 j !=
 * k ，同时还满足 nums[i] + nums[j] + nums[k] == 0 。请
 *
 * 你返回所有和为 0 且不重复的三元组。
 *
 * 注意：答案中不可以包含重复的三元组。
 *
 *
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：nums = [-1,0,1,2,-1,-4]
 * 输出：[[-1,-1,2],[-1,0,1]]
 * 解释：
 * nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0 。
 * nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0 。
 * nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0 。
 * 不同的三元组是 [-1,0,1] 和 [-1,-1,2] 。
 * 注意，输出的顺序和三元组的顺序并不重要。
 *
 *
 * 示例 2：
 *
 *
 * 输入：nums = [0,1,1]
 * 输出：[]
 * 解释：唯一可能的三元组和不为 0 。
 *
 *
 * 示例 3：
 *
 *
 * 输入：nums = [0,0,0]
 * 输出：[[0,0,0]]
 * 解释：唯一可能的三元组和为 0 。
 *
 *
 *
 *
 * 提示：
 *
 *
 * 3 <= nums.length <= 3000
 * -10^5 <= nums[i] <= 10^5
 *
 *
 */

/* 
[[0],[1]].includes([1])返回false
因为数组是引用类型，所以[1,2,3]===[1,2,3]结果是false
非要这样比的画，将两者转成基本数据类型。
JSON.stringify([[0],[1]]).includes([1].toString())
*/

// @lc code=start
function threeSum(nums: number[]): number[][] {
  //暴力解法 (这种处理较大的数据不行)
  const sortArr = nums.sort((a, b) => a - b);
  let arr = [] as any;
  for (let i = 0; i < sortArr.length; i++) {
    if (i !== 0 && arr[i] === arr[i - 1]) {
      continue;
    }
    for (let j = i + 1; j < sortArr.length; j++) {
      if (j !== i + 1 && arr[j] === arr[j - 1]) {
        continue;
      }
      for (let k = j + 1; k < sortArr.length; k++) {
        if (k !== j + 1 && arr[k] === arr[k - 1]) {
          continue;
        }
        if (sortArr[i] + sortArr[j] + sortArr[k] === 0) {
          // if (!arr.includes([sortArr[i], sortArr[j], sortArr[k]])) {
          //这种不行，数组比较的是引用
          // if (!JSON.stringify(arr).includes([sortArr[i], sortArr[j], sortArr[k]].toString())) {
          //   arr.push([sortArr[i], sortArr[j], sortArr[k]]);
          // }
          arr.push([sortArr[i], sortArr[j], sortArr[k]]);
        }
      }
    }
  }
  return arr;
}
// @lc code=end
