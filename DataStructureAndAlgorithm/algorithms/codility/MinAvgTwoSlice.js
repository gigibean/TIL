function solution(a) {
  let min = Number.MAX_SAFE_INTEGER;
  let minInd = a.length - 1;
  const first = a.map((x, i) => {
    if (i < a.length - 1) {
      let cur = a[i + 1] + x;
      let ave = cur / 2;
      if (ave < min) {
        min = ave;
        minInd = i;
      }
      return x + a[i + 1];
    }
  });
  first.pop();
  const P = [first];
  let len = 2;
  for (let j = 0; j < P[0].length - 1; j++) {
    if (!P[1]) P[1] = [];
    P[1][j] = P[0][j] + (a[j + 2] || 0);
    let ave = P[1][j] / (len + 1);
    if (ave < min) {
      min = ave;
      minInd = j;
    }
  }
  return minInd;
}
