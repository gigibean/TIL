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
var sortList = function (head) {
  const merge = (left, right) => {
    const list = new ListNode();
    let tail = list;
    while (left !== null && right !== null) {
      if (left.val > right.val) {
        tail.next = right;
        right = right.next;
      } else {
        tail.next = left;
        left = left.next;
      }
      tail = tail.next;
    }
    tail.next = left !== null ? left : right;
    return list.next;
  };
  const getMid = (head) => {
    let mid = null;
    while (head !== null && head.next !== null) {
      mid = mid !== null ? mid.next : head;
      head = head.next.next;
    }
    const right = mid.next;
    mid.next = null;
    return right;
  };
  const mergeSort = (head) => {
    if (head == null || head.next == null) return head;
    const right = getMid(head);
    const left = head;
    return merge(mergeSort(left), mergeSort(right));
  };
  return mergeSort(head);
};

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
var sortList = function (head) {
  const merge = (left, right) => {
    const list = new ListNode();
    let tmp = list;
    while (left !== null && right !== null) {
      if (right.val < left.val) {
        tmp.next = new ListNode(right.val);
        right = right.next;
      } else {
        tmp.next = new ListNode(left.val);
        left = left.next;
      }
      tmp = tmp.next;
    }
    if (left !== null) tmp.next = left;
    if (right !== null) tmp.next = right;
    return list.next;
  };
  const mergeSort = (head) => {
    let tmp = head;
    if (!tmp?.next) return tmp;
    let left = new ListNode();
    let right = new ListNode();
    let tmp1 = left;
    let tmp2 = right;
    while (tmp?.val !== undefined) {
      tmp1.next = new ListNode(tmp.val);
      tmp = tmp?.next;
      tmp1 = tmp1.next;
      if (!tmp) break;
      tmp2.next = new ListNode(tmp.val);
      tmp = tmp?.next;
      tmp2 = tmp2.next;
    }
    return merge(mergeSort(left.next), mergeSort(right.next));
  };
  return mergeSort(head);
};
