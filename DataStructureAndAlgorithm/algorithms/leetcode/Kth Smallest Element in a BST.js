/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
  let arr = [];
  (function recursive(t) {
    if (!t) {
      return;
    }
    if (t?.left) {
      recursive(t.left);
    }
    arr.push(t.val);
    if (t?.right) {
      recursive(t.right);
    }
  })(root);
  console.log(arr);
  return arr[k - 1];
};
