/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const set = new Set();
  (function recursion(depth, cur) {
    if (depth === nums.length) {
      set.add(cur);
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      if (!cur.includes(nums[i]))
        recursion(depth + 1, [
          ...cur.slice(0, depth),
          nums[i],
          ...cur.slice(depth + 1),
        ]);
    }
  })(0, []);
  return [...set];
};
