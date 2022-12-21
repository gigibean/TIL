// 규칙이 피보나치 수열임
function solution(n) {
  if (n < 3) return n;
  let a = 1;
  let b = 2;
  for (let i = 3; i <= n; i++) {
    let tmp = a;
    a = b;
    b = (b + tmp) % 1000000007;
  }
  return b;
}
