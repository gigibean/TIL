function solution(n) {
  let count = 1;
  while (n > 1) {
    if (n % 2 === 0) n /= 2;
    else {
      n -= 1;
      count += 1;
    }
  }
  return count;
}

// https://school.programmers.co.kr/learn/courses/30/lessons/12980
