/*
 * @lc app=leetcode.cn id=257 lang=typescript
 *
 * [257] 二叉树的所有路径
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function binaryTreePaths(root: TreeNode | null): string[] {
  const paths = [];
  const constructPaths = (root: TreeNode, path: string) => {
    if (root) {
      path += root.val.toString();
      if (root.left === null && root.right === null) {
        paths.push(path);
      } else {
        path += '->';
        constructPaths(root.left, path);
        constructPaths(root.right, path);
      }
    }
  };

  constructPaths(root, '');

  return paths;
}
// @lc code=end
