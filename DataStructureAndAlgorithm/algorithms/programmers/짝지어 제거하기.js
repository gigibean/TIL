function solution(s) {
  const stack = [];
  for (let alpha of s) {
    if (!stack.length) stack.push(alpha);
    else {
      if (alpha === stack[stack.length - 1]) stack.pop();
      else stack.push(alpha);
    }
  }
  return stack.length ? 0 : 1;
}

// https://school.programmers.co.kr/learn/courses/30/lessons/12973
