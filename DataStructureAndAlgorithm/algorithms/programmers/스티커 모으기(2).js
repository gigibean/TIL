function solution(sticker) {
  const len = sticker.length;
  if (sticker.length === 1) return sticker[0];
  const makeDp = (isStartFirst) => {
    const dp = new Array(len - 1).fill(0);
    let start = 1;
    let last = len;
    if (isStartFirst) {
      dp[0] = sticker[0];
      dp[1] = dp[0]; // 첫번짼를 선택하면 두번째선택 x
      start = 2;
      last = len - 1;
    } else {
      dp[0] = 0;
    }
    for (let i = start; i < last; i++) {
      dp[i] = Math.max(dp[i - 1], (dp[i - 2] || 0) + sticker[i]);
    }
    return dp[dp.length - 1];
  };
  return Math.max(makeDp(true), makeDp(false));
}
