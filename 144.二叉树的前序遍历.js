/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 递归前序遍历
 * @param {TreeNode} root
 * @return {number[]}
 */
// var preorderTraversal = function (root, arr = []) {
//   if (root) {
//     arr.push(root.val);
//     preorderTraversal(root.left, arr);
//     preorderTraversal(root.right, arr);
//   }
//   return arr;
// };

/**
 * 迭代前序遍历
 * @param {TreeNode} root
 */
var preorderTraversal = function (root) {
  var stack = [];
  var arr = [];
  var cur = root;
  while (cur || stack.length > 0) {
    while (cur) {
      stack.push(cur);
      arr.push(cur.val);
      cur = cur.left;
    }
    cur = stack.pop();
    cur = cur.right;
  }
  return arr;
};
// @lc code=end
