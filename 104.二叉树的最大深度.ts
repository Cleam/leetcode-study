/*
 * @lc app=leetcode.cn id=104 lang=typescript
 *
 * [104] 二叉树的最大深度
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

function maxDepth(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }

  // 递归
  // return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));

  // 迭代 广度优先搜索
  const queue = [];
  let ans = 0;
  // 第一层只有一个节点
  queue.push(root);
  while (queue.length > 0) {
    // 记录队列长度，以便计算循环结束条件。
    let sz = queue.length;
    while (sz > 0) {
      // 从队列头部取出一个节点进行判断，如果还存在子节点就继续添加到队列。
      const node = queue.shift();
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
      //
      sz--;
    }
    ans++;
  }
  return ans;
}
// @lc code=end
