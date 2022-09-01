/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  let set = new Set();
  (function recursion(cur, rest) {
    set.add(cur);
    for (let i = 0; i < rest.length; i++) {
      recursion([...cur, rest[i]], [...rest.slice(i + 1)]);
    }
  })([], nums);
  set = [...set];
  set = set.sort((a, b) => {
    if (a.length === 0) return -1;
    if (b.length === 0) return 1;
    const totalA = a.reduce((acc, cur) => acc + cur);
    const totalB = b.reduce((acc, cur) => acc + cur);
    if (totalA > totalB) return 1;
    else if (totalA < totalB) return -1;
    else {
      if (a.length > b.length) return -1;
      else return 1;
    }
  });
  return set;
};
