/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  return (function recursive(t) {
    if (t === p || t === q || !t) return t;
    const [left, right] = [recursive(t.left), recursive(t.right)];
    return left && right ? t : left || right;
  })(root);
};
