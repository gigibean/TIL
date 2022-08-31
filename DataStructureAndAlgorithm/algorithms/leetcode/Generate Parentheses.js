/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  let comb = new Set();
  let result = [];
  (function recursion(depth, cur) {
    if (n * 2 === depth) {
      comb.add(cur);
      return;
    }

    recursion(depth + 1, cur + "(");
    recursion(depth + 1, cur + ")");
  })(0, "");
  comb = [...comb];
  function check(parentheses) {
    let flag = 0;
    let result = false;
    parentheses.split("").forEach((item) => {
      if (flag < 0) result = false;
      if (item === "(") flag += 1;
      else if (item === ")") flag -= 1;
    });
    const tmp = parentheses.split("");
    for (let i = 0; i < tmp.length; i++) {
      if (tmp[i] === "(") flag += 1;
      else if (tmp[i] === ")") flag -= 1;
      if (flag < 0) {
        result = false;
        break;
      }
    }
    if (flag === 0) result = true;
    return result;
  }
  for (let i = 0; i < comb.length; i++) {
    if (check(comb[i])) result.push(comb[i]);
  }
  return result;
};
