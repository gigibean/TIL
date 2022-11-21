function solution(s) {
  let count = 0;
  if (s[0] === ")") return false;
  for (let bracket of s) {
    if (bracket === "(") count++;
    else count--;
    if (count < 0) return false;
  }
  return count === 0 ? true : false;
}

// https://school.programmers.co.kr/learn/courses/30/lessons/12909
