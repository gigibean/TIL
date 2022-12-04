function solution(n) {
  let pre = 0,
    post = 1,
    acc = 0;
  for (let i = 2; i <= n; i++) {
    acc = (pre + post) % 1234567;
    pre = post;
    post = acc;
  }
  return acc;
}

// https://school.programmers.co.kr/learn/courses/30/lessons/12945#
