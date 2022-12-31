function solution(n) {
  const arr = new Array(n);
  for (let i = 0; i < n; i++) {
    arr[i] = new Array(i + 1);
  }
  const total = parseInt((n + n * n) / 2);
  let m = 1;
  let col = 0;
  let row = arr.length - 1;
  while (m <= total) {
    for (let i = 0; i < arr.length; i++) {
      if (col < arr[i].length && !arr[i][col]) arr[i][col] = m++;
    }
    for (let i = 0; i < arr[row].length; i++) {
      if (!arr[row][i]) arr[row][i] = m++;
    }
    row--;
    for (let i = row; i > 0; i--) {
      if (i - col >= 0 && i - col < arr[i].length && !arr[i][i - col])
        arr[i][i - col] = m++;
    }
    col++;
  }
  return arr.flat();
}
