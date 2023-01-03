function solution(s, p, q) {
  const n = s.length;
  const m = p.length;
  const k = [[0, 0, 0, 0]];
  const result = [];
  const difference = (a, b) => {
    const diff = [];
    for (let i = 0; i < 4; i++) {
      diff[i] = a[i] - b[i];
    }
    return diff;
  };
  const getNum = (str) => {
    switch (str) {
      case "A":
        return 1;
      case "C":
        return 2;
      case "G":
        return 3;
      case "T":
        return 4;
    }
  };
  for (let i = 0; i < n; i++) {
    const num = getNum(s[i]);
    k[i + 1] = k[i].slice();
    k[i + 1][num - 1] = k[i][num - 1] + 1;
  }
  for (let i = 0; i < m; i++) {
    const diff = difference(k[q[i] + 1], k[p[i]]); // p 는 해당 값은 포함 x 그전값까지 0이어도 [0,0,0,0]으로 가능
    result[i] = diff.findIndex((x) => x !== 0) + 1;
  }
  return result;
}
