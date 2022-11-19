function solution(n) {
  let ans = 0;
  for (let i = 1; i <= n; i++) {
    let tmp = 0,
      num = i;
    while (tmp < n) {
      tmp += num;
      num += 1;
    }
    if (tmp === n) ans += 1;
  }
  return ans;
}

// https://school.programmers.co.kr/learn/courses/30/lessons/12924
