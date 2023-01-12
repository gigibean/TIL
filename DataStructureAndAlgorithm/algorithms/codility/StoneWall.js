function solution(h) {
  const stack = [];
  let i = 0;
  let count = 0;
  while (i < h.length) {
    // 만약 처음이 아니고, 현재 값이 스택보다 작으면 크거나 같은 값 만날 때까지 스택 빼기
    while (stack.length && stack[stack.length - 1] > h[i]) {
      stack.pop();
    }
    // 스택이 처음이거나 스택 값보다 큰 값을 만나면 쌓기. 쌓는 것은 블록이 증가하는 것
    if (!stack.length || stack[stack.length - 1] < h[i]) {
      stack.push(h[i]);
      count += 1;
    }
    i += 1;
  }
  return count;
}
