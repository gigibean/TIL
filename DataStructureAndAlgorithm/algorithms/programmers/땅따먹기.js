function solution(land) {
  let dp = land[0].slice();
  for (let i = 1; i < land.length; i++) {
    const tmp = [];
    for (let j = 0; j < dp.length; j++) {
      const notThisIndexArr = dp.filter((_, index) => index !== j);
      const max = Math.max(...notThisIndexArr);
      tmp[j] = max + land[i][j];
    }
    dp = tmp;
  }
  return Math.max(...dp);
}
