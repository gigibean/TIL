function solution(n, s) {
  if (n > s) return [-1];
  // 하나씩 나눠주기 방법을 통해서 가장 큰 수의 조합을 만들 수 있다
  let count = 0;
  let j = n - 1;
  // s 가 모두 소진 될 떄 까지
  while (n <= s) {
    // n 보다 s 가 크거나 같을 떄 s-=n 하고 count 증가
    s -= n;
    count += 1;
  }
  const mset = new Array(n).fill(count);
  if (s === 0) return mset;
  // 나머지는 하나씩 분배하기
  for (let i = 1; i <= s; i++) {
    mset[j] += 1;
    if (j === 0) j = n - 1;
    else j -= 1;
  }
  return mset;
}
