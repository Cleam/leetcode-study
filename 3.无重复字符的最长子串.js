/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let len = 0;
  let tArr = []; // 用来存储不重复的字符串
  for (let i = 0; i < s.length; i++) {
    const c = s.charAt(i);
    if (!tArr.includes(c)) {
      // 不重复的字符直接push到数组中
      tArr.push(c);
    } else {
      // 发现重复字符，计算length并和之前的length比较，存储起来
      len = Math.max(len, tArr.length);
      // 然后从出现重复字符的位置开始重新记录新的不重复字符串
      // const j = tArr.indexOf(c);
      tArr = tArr.slice(tArr.indexOf(c) + 1);
      tArr.push(c);
    }
  }
  return Math.max(len, tArr.length);
};
// @lc code=end
