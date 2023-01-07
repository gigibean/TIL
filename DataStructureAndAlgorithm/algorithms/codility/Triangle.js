function solution(a) {
  a.sort((a, b) => a - b);
  const flag = a.findIndex((a) => a >= 0);
  const arr = flag > -1 ? a.slice(flag) : a;
  if (arr.length < 3) return 0;
  for (let i = 1; i < arr.length - 1; i++) {
    if (arr[i - 1] + arr[i] > arr[i + 1]) return 1;
  }
  return 0;
}
