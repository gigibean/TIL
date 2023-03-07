function solution(x, y, n) {
  if (x === y) return 0;
  const dp = {};
  dp[x] = 0;
  let datas = [x];
  while (datas.length > 0) {
    const newDatas = [];
    for (let data of datas) {
      for (let each of [data + n, data * 2, data * 3]) {
        if (dp[each] || each > y) continue;
        if (each === y) return dp[data] + 1;
        dp[each] = dp[data] + 1;
        newDatas.push(each);
      }
    }
    datas = newDatas;
  }
  return -1;
}
