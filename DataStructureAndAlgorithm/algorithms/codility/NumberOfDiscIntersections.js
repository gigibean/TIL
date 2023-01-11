function solution(a) {
  const len = a.length;
  const start = a.map((x, i) => i - x);
  const end = a.map((x, i) => i + x);
  start.sort((a, b) => b - a);
  end.sort((a, b) => b - a);
  let j = 0;
  let count = 0;
  for (let i = 0; i < len; i++) {
    while (j < len && end[j] >= start[i]) {
      j++;
    }
    count += j - i - 1;
    if (count > 10000000) return -1;
  }
  return count;
}
