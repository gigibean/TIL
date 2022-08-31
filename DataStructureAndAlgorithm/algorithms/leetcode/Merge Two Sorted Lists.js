/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  let newList = new ListNode();
  if (!list1) return list2;
  if (!list2) return list1;
  return (function recursive(list1, list2, newList) {
    if (list1 || list2) {
      if (list1?.val <= list2?.val || list2 === null) {
        newList.next = new ListNode(list1.val);
        list1 = list1.next;
      } else if (list1?.val > list2?.val || list1 === null) {
        newList.next = new ListNode(list2.val);
        list2 = list2.next;
      }
      recursive(list1, list2, newList.next);
      return newList.next;
    }
  })(list1, list2, newList);
};

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  const output = new ListNode();
  let current = output;
  while (list1 && list2) {
    if (list1.val <= list2.val) {
      current.next = new ListNode(list1.val);
      list1 = list1.next;
    } else {
      current.next = new ListNode(list2.val);
      list2 = list2.next;
    }
    current = current.next;
  }
  if (list1) current.next = list1;
  if (list2) current.next = list2;
  return output.next;
};
