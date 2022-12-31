function solution(x, y, d) {
  const diff = y - x;
  const left = diff % d;
  const count = Math.trunc(diff / d);
  return left ? count + 1 : count;
}
