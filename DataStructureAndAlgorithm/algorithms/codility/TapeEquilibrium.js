function solution(a) {
  let right = a.reduce((acc, cur) => acc + cur, 0);
  let left = 0;
  let min = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < a.length - 1; i++) {
    left += a[i];
    right -= a[i];
    const abs = Math.abs(left - right);
    if (min > abs) min = abs;
  }
  return min;
}
