function solution(a) {
  let min = a[0];
  let assum_cur_max = 0;
  let last_max = 0;
  for (let i = 1; i < a.length; i++) {
    let cur = a[i];
    assum_cur_max = Math.max(0, cur - min);
    min = !assum_cur_max ? cur : min;
    last_max = Math.max(last_max, assum_cur_max);
  }
  return last_max;
}
