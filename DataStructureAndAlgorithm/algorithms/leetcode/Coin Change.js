/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  // bfs
  // amount === 0 return count
  // amounts => 추후 coin에서 뺀 값들 중에 중복 값 체크
  const amounts = new Set([amount]);
  // bfs 위한 array
  const t = [[amount, 0]];
  while (t.length) {
    // left == 현재 남은 값
    // count == 현재 더한 값
    const [left, count] = t.shift();
    if (left === 0) return count;
    for (let i = 0; i < coins.length; i++) {
      // coins bfs
      const coin = coins[i];
      const leftcoin = left - coin;
      if (leftcoin >= 0 && !amounts.has(leftcoin)) {
        t.push([leftcoin, count + 1]);
        amounts.add(leftcoin);
      }
    }
  }
  return -1;
};

// [186,419,83,408]
// 6249
