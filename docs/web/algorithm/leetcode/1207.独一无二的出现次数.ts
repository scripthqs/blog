/*
 * @lc app=leetcode.cn id=1207 lang=typescript
 *
 * [1207] 独一无二的出现次数
 *
 * https://leetcode.cn/problems/unique-number-of-occurrences/description/
 *
 * algorithms
 * Easy (72.74%)
 * Likes:    176
 * Dislikes: 0
 * Total Accepted:    80.7K
 * Total Submissions: 110.9K
 * Testcase Example:  '[1,2,2,1,1,3]'
 *
 * 给你一个整数数组 arr，请你帮忙统计数组中每个数的出现次数。
 *
 * 如果每个数的出现次数都是独一无二的，就返回 true；否则返回 false。
 *
 *
 *
 * 示例 1：
 *
 * 输入：arr = [1,2,2,1,1,3]
 * 输出：true
 * 解释：在该数组中，1 出现了 3 次，2 出现了 2 次，3 只出现了 1 次。没有两个数的出现次数相同。
 *
 * 示例 2：
 *
 * 输入：arr = [1,2]
 * 输出：false
 *
 *
 * 示例 3：
 *
 * 输入：arr = [-3,0,1,-3,1,1,1,-3,10,0]
 * 输出：true
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= arr.length <= 1000
 * -1000 <= arr[i] <= 1000
 *
 *
 */

// @lc code=start
function uniqueOccurrences(arr: number[]): boolean {
  //创建一个map
  const map = new Map();
  for (let v of arr) {
    //将map中每项出现的次数保存
    if (map.has(v)) {
      map.set(v, map.get(v) + 1);
    } else {
      map.set(v, 1);
    }
    // map.set(v, (map.get(v) || 0) + 1);
  }
  const set = new Set();
  for (let [key, value] of map) {
    set.add(value);
  }
  return set.size === map.size;
}
// @lc code=end
