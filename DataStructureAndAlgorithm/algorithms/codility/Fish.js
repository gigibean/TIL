function solution(a, b) {
  let count = 0;
  const stack = [];
  for (let i = 0; i < a.length; i++) {
    if (b[i] === 1) stack.push(a[i]);
    else {
      while (stack.length >= 0 && a[i] > stack[stack.length - 1]) stack.pop();
      if (!stack.length) count += 1;
    }
  }
  return stack.length + count;
}
