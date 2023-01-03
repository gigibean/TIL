function solution(A, B, K) {
  const getEvenCnt = (num) => {
    if (num % K === 0) return Math.ceil(num / K) + 1;
    return Math.floor(num / K) + 1;
  };
  return getEvenCnt(B) - (!A ? 0 : getEvenCnt(A - 1));
}
