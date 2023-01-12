function solution(s) {
  if (s.length % 2 !== 0 || s[0] === ")") return 0;
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") stack.push(s[i]);
    else {
      if (!stack.length) return 0;
      stack.pop();
    }
  }
  if (stack.length) return 0;
  return 1;
}
