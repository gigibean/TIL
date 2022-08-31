/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  let str1 = (str2 = "");
  let node = head;
  while (node) {
    str1 = `${str1}${node.val}`;
    str2 = `${node.val}${str2}`;
    node = node.next;
  }
  if (str1 === str2) return true;
  return false;
};
