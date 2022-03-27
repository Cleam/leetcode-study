/*
 * @lc app=leetcode.cn id=100 lang=javascript
 *
 * [100] 相同的树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  // 如果两个都是空树，则相同
  if (p === null && q === null) {
    return true;
  }
  // 如果其中一个是空树，则不相同
  if (p === null || q === null) {
    return false;
  }
  // 如果根节点值不相等，则不相同
  if (p.val !== q.val) {
    return false;
  }
  // 递归判断左子节点和右子节点
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};
// @lc code=end
