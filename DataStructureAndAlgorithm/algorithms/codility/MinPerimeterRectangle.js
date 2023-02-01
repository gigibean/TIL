function solution(n) {
  // 약수의 쌍을 확인하며 최솟값 갱신
  let min = Number.MAX_SAFE_INTEGER;
  let i = 1;
  while (i * i < n) {
    // root n 보다 작을 때까지 i를 증가시키며 약수를 찾는다
    if (n % i === 0) {
      // i 가 n 의 약수라면
      min = Math.min(min, i + n / i); // 약수의 쌍과 현재 Min 중 더 작은 값으로 갱신
    }
    i += 1;
  }
  // 마지막 i * i === n 인 경우도 확인
  if (i * i === n) {
    min = Math.min(min, i + i);
  }
  // 구해진 min * 2 하여 둘레 반환
  return 2 * min;
}
