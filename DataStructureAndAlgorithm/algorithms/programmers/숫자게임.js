function solution(A, B) {
  // a b 정렬
  A.sort((a, b) => a - b);
  B.sort((a, b) => a - b);
  let i = 0,
    j = 0;
  let n = A.length;
  let count = 0;
  while (i < n && j < n) {
    while (j < n - 1 && B[j] <= A[i]) j += 1;
    if (A[i] < B[j]) {
      count += 1;
      j += 1;
    }
    i += 1;
  }
  return count;
}
