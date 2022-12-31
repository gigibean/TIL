function solution(a, k) {
  if (!a.length) return a;
  if (new Set(a).size === 1) return a;
  if (a.length === k) return a;
  const mid = a.length - (k % a.length);
  return a.slice(mid).concat(a.slice(0, mid));
}
