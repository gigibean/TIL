/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  return (function reverse(cur, pre) {
    if (!cur) return pre;
    const next = cur.next;
    cur.next = pre;
    return reverse(next, cur);
  })(head, null);
};
