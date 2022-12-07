function solution(n, left, right) {
  let ans = [[]];
  // [row, column]
  let lp = [Math.floor(left / n), left % n];
  let rp = [Math.floor(right / n), right % n];
  // row
  for (let i = lp[0]; i <= rp[0]; i++) {
    // column
    // 1. left 가 포함된 행이면 j = lp[1] ~ 끝까지
    if (!ans[i]) ans[i] = [];
    let firstJ;
    let lastJ;
    if (i === lp[0]) {
      firstJ = lp[1];
      lastJ = n - 1;
    }
    // 2. right 가 포함된 행이면 j = 0 ~ rp[1]
    else if (i === rp[0]) {
      firstJ = 0;
      lastJ = rp[1];
      // 3. 나머지는 전체
    } else {
      firstJ = 0;
      lastJ = n - 1;
    }
    if (i === rp[0] && i === lp[0]) {
      firstJ = lp[1];
      lastJ = rp[1];
    }

    for (let j = firstJ; j <= lastJ; j++) {
      if (i < j) ans[i][j] = j + 1;
      else ans[i][j] = i + 1;
    }
  }

  let tmp = [];
  for (let i = 0; i < ans.length; i++) {
    if (ans[i]) tmp.push(...ans[i].filter((item) => item !== undefined));
  }
  return tmp;
}
