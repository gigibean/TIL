/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
  return (function isPowerThree(cur) {
    if (n < 0) return false;
    if (n === 1) return true;
    cur *= 3;
    if (cur === n) return true;
    if (cur > n) return false;
    return isPowerThree(cur);
  })(1);
};
