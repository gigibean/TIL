/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let flag = 0;
  const shortlist = (function shorter(l1, l2) {
    while (l1 || l2) {
      if (!l1?.next) return "l1";
      else if (!l2?.next) return "l2";
      if (l1.next) l1 = l1.next;
      if (l2.next) l2 = l2.next;
    }
  })(l1, l2);
  let root1;
  let root2;
  if (shortlist === "l1") {
    root1 = l2;
    root2 = l1;
  } else if (shortlist === "l2") {
    root1 = l1;
    root2 = l2;
  }

  return (function recursion(l1, l2, flag) {
    if (l1) {
      l1.val += (l2?.val || 0) + flag;
      if (l1.val >= 10) {
        flag = 1;
        l1.val -= 10;
      } else {
        flag = 0;
      }
      l1.next = recursion(l1?.next, l2?.next, flag);
    }
    if (!l1 && flag) {
      const ll = new ListNode(1, null);
      l1 = ll;
      flag = 0;
    }
    return l1;
  })(root1, root2, flag);
};

// [2,4,3]
// [5,6,4]
// [0]
// [0]
