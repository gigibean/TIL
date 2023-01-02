function solution(n, a) {
  let tc = 0;
  let max = 0;
  const counters = new Array(n).fill(0);
  for (let i = 0; i < a.length; i++) {
    if (a[i] === n + 1) {
      max = tc;
    } else {
      if (!counters[a[i] - 1]) counters[a[i] - 1] = 0;
      if (max > counters[a[i] - 1]) counters[a[i] - 1] = max;
      counters[a[i] - 1] += 1;
      if (tc < counters[a[i] - 1]) tc = counters[a[i] - 1];
    }
  }
  for (let i = 0; i < counters.length; i++) {
    if (counters[i] < max) counters[i] = max;
  }
  return counters;
}
