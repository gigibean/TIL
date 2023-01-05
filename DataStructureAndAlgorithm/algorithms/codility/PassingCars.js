function solution(a) {
  const n = a.length;
  let result = 0;
  const p = new Array(n + 1).fill(0);
  const easts = [];
  if (n === 1) return 0;
  for (let i = 0; i < n; i++) {
    if (a[i] === 0) {
      p[i + 1] = p[i];
      easts.push(i + 1);
    } else {
      if (easts.length) p[i + 1] = p[i] + 1;
    }
  } // O(n)
  const last = p[p.length - 1];
  result = last;
  for (let i = 1; i < easts.length; i++) {
    if (result > 1000000000) return -1;
    result += last - p[easts[i]];
  }
  // O(m+n)
  return result;
}
