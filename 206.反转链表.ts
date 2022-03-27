/*
 * @lc app=leetcode.cn id=206 lang=typescript
 *
 * [206] 反转链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function reverseList(head: ListNode | null): ListNode | null {
  let prev = head;
  let next = head?.next;

  if(!prev) {
    return null;
  } else {
    prev.next = null;
  }

  // 循环判断next节点是否存在，存在则将其指向prev节点
  while(next) {
    const tempNext = next.next;
    next.next = prev;
    prev = next;
    next = tempNext;
  }

  return prev;
}
// @lc code=end
