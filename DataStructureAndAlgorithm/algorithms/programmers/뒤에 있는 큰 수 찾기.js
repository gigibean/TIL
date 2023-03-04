function solution(numbers) {
  const stack = [];
  const ans = new Array(numbers.length).fill(-1);
  numbers.forEach((number, index) => {
    if (stack.length <= 0) stack.push([number, index]); // stack에 없다면 추가
    else {
      // stack내의 값과 비교하는데 더 큰수나 같은 수를 만날 때까지 pop()
      // 모두 pop 한후에 마지막에 Number 푸시
      while (stack.length > 0 && stack[stack.length - 1][0] < number) {
        const [num, numIndex] = stack.pop();
        ans[numIndex] = number;
      }
      stack.push([number, index]);
    }
  });
  return ans;
}
