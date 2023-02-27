function solution(gems) {
  let ans = [];
  const gemCtn = new Set(gems).size;
  const map = new Map();
  let left = 0;
  let right = 0;
  while (left <= right && right <= gems.length) {
    // map 의 종류가 gemCtn 과 같으면 (충종한다면) left++ 계속 체크
    if (map.size === gemCtn) {
      if (!ans.length || ans[1] - ans[0] > right - left - 1)
        ans = [left + 1, right];
      map.set(gems[left], map.get(gems[left]) - 1);
      if (map.get(gems[left]) === 0) map.delete(gems[left]);
      left += 1;
    } else {
      // map 의 종류가 다 있지 않으면
      map.set(gems[right], map.has(gems[right]) ? map.get(gems[right]) + 1 : 1);
      right += 1;
    }
  }
  return ans;
}
