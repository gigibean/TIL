function solution(a) {
  if (a.length <= 3) return 0;
  const slice1acc = new Array(a.length).fill(0);
  const slice2acc = new Array(a.length).fill(0);
  for (let i = 1; i < a.length - 1; i++) {
    slice1acc[i] = Math.max(0, slice1acc[i - 1] + a[i]);
  }
  for (let i = a.length - 2; i > 0; i--) {
    slice2acc[i] = Math.max(0, slice2acc[i + 1] + a[i]);
  }
  let max = 0;
  for (let i = 1; i < slice1acc.length - 1; i++) {
    max = Math.max(max, slice1acc[i - 1] + slice2acc[i + 1]);
  }
  return max;
}
