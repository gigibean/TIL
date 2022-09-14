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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  const t = [root];
  const visited = [];
  if (root) visited.push([root.val]);
  while (t.length) {
    const len = t.length;
    const tmp = [];
    for (let i = 0; i < len; i++) {
      const node = t.shift();
      if (node?.left) {
        tmp.push(node.left.val);
        t.push(node.left);
      }
      if (node?.right) {
        tmp.push(node.right.val);
        t.push(node.right);
      }
    }
    if (tmp.length) {
      visited.push(tmp);
    }
  }
  return visited;
};
