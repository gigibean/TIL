/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (digits.length === 0) return [];
  const numberChars = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"],
  };
  const splitedDigit = digits.split("");
  let set1 = new Set();

  (function recursion(depth, cur) {
    if (depth === splitedDigit.length) {
      if (cur.length === splitedDigit.length) set1.add(cur);
      return;
    }
    const chars = numberChars[splitedDigit[depth]];
    for (let j = 0; j < chars.length; j++) {
      recursion(depth + 1, cur + chars[j]);
    }
  })(0, []);
  return [...set1];
};
