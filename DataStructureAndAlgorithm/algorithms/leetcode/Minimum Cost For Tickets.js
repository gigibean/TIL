/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
var mincostTickets = function (days, costs) {
  let memo = new Array(366).fill(null);
  function dp(i) {
    if (i > 365) return 0;

    if (memo[i] !== null) return memo[i];

    let ans;
    if (days.includes(i)) {
      ans = Math.min(dp(i + 1) + costs[0], dp(i + 7) + costs[1]);
      ans = Math.min(ans, dp(i + 30) + costs[2]);
    } else {
      ans = dp(i + 1);
    }
    memo[i] = ans;
    return ans;
  }

  return dp(1);
};
