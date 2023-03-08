function solution(stones, k) {
  let min = Number.MAX_SAFE_INTEGER;
  const len = stones.length - k;
  if (
    stones.every((stone, idx) => {
      if (idx + 1 < stones.length - 1) {
        return stone > stones[idx + 1];
      } else return stone < stones[idx - 1];
    })
  ) {
    stones = stones.reverse();
  }
  let i = 0;
  while (i <= len) {
    let max = stones[i];
    let maxId = i;
    for (let j = i; j < i + k; j++) {
      if (max < stones[j]) {
        max = stones[j];
        maxId = j;
      }
    }
    if (max < min) {
      min = max;
    }
    i = maxId + 1;
  }
  return min;
}
