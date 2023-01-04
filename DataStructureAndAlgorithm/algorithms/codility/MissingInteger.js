function solution(A) {
  // Implement your solution here
  A.sort((a, b) => a - b);
  if (A[A.length - 1] <= 0) return 1;
  let min = 1;
  for (let i = 0; i < A.length; i++) {
    if (A[i] === min) min++;
  }
  return min;
}
