function solution(x, a) {
  const arr = new Array(x).fill(false);
  let count = 0;
  for (let i = 0; i < a.length; i++) {
    if (!arr[a[i] - 1]) {
      arr[a[i] - 1] = true;
      count++;
    }
    if (count === x) return i;
  }
  return -1;
}
