function solution(citations) {
  citations.sort((a, b) => b - a);
  const len = citations.length;
  const tmp = [];
  for (let i = 0; i < len; i++) {
    if (i + 1 <= citations[i]) {
      tmp.push(i + 1);
    }
  }
  if (tmp.length) return Math.max(...tmp);
  return 0;
}
