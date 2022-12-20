function solution(want, number, discount) {
  let count = 0;
  // 처음 10개
  const discountMap = discount.slice(0, 10).reduce((map, item) => {
    if (!map.has(item)) map.set(item, 1);
    else map.set(item, map.get(item) + 1);
    return map;
  }, new Map());
  // want, number map
  const wantsMap = want.reduce((map, item, index) => {
    map.set(item, number[index]);
    return map;
  }, new Map());
  let start = 0;
  let end = 9;
  while (end < discount.length) {
    let values = 0;
    // wantsMap 과 discountMap 원소 비교하며 전체의 합이 10이 되는지 확인
    for (const [key, value] of wantsMap.entries()) {
      if (!discountMap.has(key)) break;
      else {
        if (discountMap.get(key) >= value) {
          values += value;
        }
      }
    }
    // 10이 되다면 count 증가
    if (values === 10) {
      count++;
    }
    // discountMap 에서 discount의 현재 맨 앞(start) 원소 제거
    discountMap.set(discount[start], discountMap.get(discount[start]) - 1);
    start++;
    end++;
    // discountMap 에서 discount의 다음 원소(end) 추가
    discountMap.set(
      discount[end],
      discountMap.has(discount[end]) ? discountMap.get(discount[end]) + 1 : 1
    );
  }
  return count;
}
