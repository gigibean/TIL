function solution(arr1, arr2) {
  const ans = [[]];
  const k = arr1[0].length;
  const m = arr1.length;
  const n = arr2[0].length;
  // result = m * n
  for (let i = 0; i < m; i++) {
    if (!ans[i]) ans[i] = [];
    for (let j = 0; j < n; j++) {
      if (!ans[i][j]) ans[i][j] = 0;
      for (let b = 0; b < k; b++) {
        ans[i][j] += arr1[i][b] * arr2[b][j];
      }
    }
  }
  return ans;
}
