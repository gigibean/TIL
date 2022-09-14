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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function (root, low, high) {
  let sum = 0;
  // dfs
  (function dfs(t) {
    if (t) {
      if (t?.left) dfs(t.left);
      if (t.val >= low && t.val <= high) {
        sum += t.val;
      }
      if (t?.right) dfs(t.right);
    } else return;
  })(root);

  // bfs
  const t = [root];
  while (t.length) {
    const len = t.length;
    for (let i = 0; i < len; i++) {
      const node = t.shift();
      if (node.val >= low && node.val <= high) sum += node.val;
      if (node?.left) t.push(node.left);
      if (node?.right) t.push(node.right);
    }
  }

  return sum;
};
