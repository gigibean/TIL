function solution(n, stations, w) {
  let count = 0;
  let current = 1;
  const toell = 2 * w + 1;
  for (let i = 0; i < stations.length; i++) {
    const start = stations[i] - w >= 1 ? stations[i] - w : 1;
    const end = stations[i] + w <= n ? stations[i] + w : n;
    const gap = start - current >= 0 ? start - current : 0;
    count += Math.trunc(gap / toell);
    if (gap % toell !== 0) count += 1;
    current = end + 1;
  }
  if (current <= n) {
    const gap = n - current + 1;
    count += Math.trunc(gap / toell);
    if (gap % toell !== 0) count += 1;
  }
  return count;
}
