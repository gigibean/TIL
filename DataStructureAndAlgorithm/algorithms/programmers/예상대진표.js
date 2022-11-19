function solution(n, a, b) {
  let ans = 1;
  if (a > b) {
    let tmp = a;
    a = b;
    b = tmp;
  }
  let gap;
  const divide = (num) => (num % 2 === 0 ? num / 2 : (num + 1) / 2);
  while (true) {
    a = divide(a);
    b = divide(b);
    gap = b - a;
    if (gap === 0) return ans;
    ans += 1;
    if (gap === 1 && b % 2 === 0) return ans;
  }
}

// https://school.programmers.co.kr/learn/courses/30/lessons/12985#
