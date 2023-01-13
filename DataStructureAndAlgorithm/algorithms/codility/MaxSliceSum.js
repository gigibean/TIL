function solution(a) {
  if (a.length <= 1) return a[0];
  let a_min = Number.MAX_SAFE_INTEGER;
  let a_max = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < a.length; i++) {
    a_min = Math.min(a_min, a[i]);
    a_max = Math.max(a_max, a[i]);
  }
  if (a_min <= 0 && a_max <= 0) return a_max;
  let assum_cur_max = 0;
  let last_max = a_max;
  for (let i = 0; i < a.length; i++) {
    assum_cur_max = Math.max(0, assum_cur_max + a[i]);
    last_max = Math.max(last_max, assum_cur_max);
  }
  return last_max;
}
