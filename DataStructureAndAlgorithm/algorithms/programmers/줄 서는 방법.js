function solution(n, k) {
  const ans = [];
  const people = Array.from({ length: n }, (_, i) => i + 1);
  let cases = people.reduce((acc, cur) => acc * cur, 1);
  while (ans.length < n) {
    cases /= people.length;
    ans.push(...people.splice(Math.floor((k - 1) / cases), 1));
    k = k % cases;
  }
  return ans;
}
