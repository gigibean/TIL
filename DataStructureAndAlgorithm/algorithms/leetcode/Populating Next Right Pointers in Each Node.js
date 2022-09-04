/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
  if (!root) return root;
  let t = [root];
  while (t.length > 0) {
    const len = t.length;
    for (let i = 0; i < len; i++) {
      const node = t.shift();
      if (i !== len - 1) node.next = t[0];
      if (node.left) t.push(node.left);
      if (node.right) t.push(node.right);
    }
  }
  return root;
};
