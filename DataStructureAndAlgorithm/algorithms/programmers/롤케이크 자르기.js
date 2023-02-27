function solution(topping) {
  let ans = 0;
  let pivot = 0;
  let left = new Map();
  let right = topping.reduce((map, cur) => {
    if (!map.has(cur)) map.set(cur, 0);
    map.set(cur, map.get(cur) + 1);
    return map;
  }, new Map());
  for (let i = 0; i < topping.length; i++) {
    // topping 을 돌면서 pivot을 설정하고 양 옆의 토핑 개수를 확인한다
    // 토핑 개수가 같다면 ans 를 하나 증가 시킨다
    if (left.size === right.size) ans += 1;
    // 그 후 값도 구하기 위해 토핑 하나의 위치를 바꿔준다
    right.set(topping[i], right.get(topping[i]) - 1);
    if (right.get(topping[i]) === 0) right.delete(topping[i]);
    left.set(topping[i], left.has(topping[i]) ? left.get(topping[i]) + 1 : 1);
  }
  return ans;
}
