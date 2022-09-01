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
 * @return {boolean}
 */
var isSymmetric = function (root) {
  if (!root?.left && !root?.right) return true;
  let result = true;
  (function recursive(t1, t2) {
    if (!t1 && !t2) return;
    if (t1?.val !== t2?.val) {
      result = false;
      return;
    }
    recursive(t1?.left, t2?.right);
    recursive(t1?.right, t2?.left);
  })(root.left, root.right);
  return result;
};
