/*
 * @lc app=leetcode.cn id=11 lang=typescript
 *
 * [11] 盛最多水的容器
 *
 * https://leetcode.cn/problems/container-with-most-water/description/
 *
 * algorithms
 * Medium (60.84%)
 * Likes:    3881
 * Dislikes: 0
 * Total Accepted:    865.2K
 * Total Submissions: 1.4M
 * Testcase Example:  '[1,8,6,2,5,4,8,3,7]'
 *
 * 给定一个长度为 n 的整数数组 height 。有 n 条垂线，第 i 条线的两个端点是 (i, 0) 和 (i, height[i]) 。
 *
 * 找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。
 *
 * 返回容器可以储存的最大水量。
 *
 * 说明：你不能倾斜容器。
 *
 *
 *
 * 示例 1：
 *
 *
 *
 *
 * 输入：[1,8,6,2,5,4,8,3,7]
 * 输出：49
 * 解释：图中垂直线代表输入数组 [1,8,6,2,5,4,8,3,7]。在此情况下，容器能够容纳水（表示为蓝色部分）的最大值为 49。
 *
 * 示例 2：
 *
 *
 * 输入：height = [1,1]
 * 输出：1
 *
 *
 *
 *
 * 提示：
 *
 *
 * n == height.length
 * 2 <= n <= 10^5
 * 0 <= height[i] <= 10^4
 *
 *
 */

// @lc code=start

// let max = 0;
// // 因为容量受限于矮的一边，所以在向内收缩时，移动矮的一侧
// // 如果新边足够高的话，效果有可能大于宽度收缩带来的负效果
// for (let i = 0, j = height.length - 1; i < j; ) {
//   let minHeight = height[i] > height[j] ? height[j--] : height[i++];
//   //因为上面--或者++了，所有需要补个+1
//   max = Math.max(max, (j - i + 1) * minHeight);
// }
// return max;

function maxArea(height: number[]): number {
  //test1
  // let maxA = 0; //保存存放盛水最大容器的最终结果
  // for (let i = 0; i < height.length; i++) {
  //   for (let j = i + 1; j < height.length; j++) {
  //     // 遍历每一种结果取最大值
  //     maxA = Math.max(maxA, Math.min(height[i], height[j]) * (j - i));
  //   }
  // }
  // return maxA;
  //test2
  let i = 0;
  let j = height.length - 1;
  let max = 0;
  while (i < j) {
    let minHeight = height[i] > height[j] ? height[j--] : height[i++];
    console.log(minHeight);
    max = Math.max(max, (j - i + 1) * minHeight);
  }
  return max;
}
maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]);
// @lc code=end
