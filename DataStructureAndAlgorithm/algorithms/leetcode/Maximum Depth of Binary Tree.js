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
 * @return {number}
 */
var maxDepth = function (root) {
  let tmp = 1;
  if (!root) return 0;
  (function recursive(t, depth) {
    if (t) {
      if (!t?.left && !t?.right) {
        if (tmp < depth) tmp = depth;
        return;
      } else depth += 1;
      recursive(t.left, depth);
      recursive(t.right, depth);
    }
  })(root, 1);
  return tmp;
};
