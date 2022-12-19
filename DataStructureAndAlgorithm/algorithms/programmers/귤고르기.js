function solution(k, tangerine) {
  const ts = tangerine.reduce((map, item, index) => {
    if (!map.has(item)) map.set(item, 1);
    else map.set(item, map.get(item) + 1);
    return map;
  }, new Map());
  const tsa = [...ts];
  tsa.sort((a, b) => {
    if (a[1] > b[1]) return 1;
    else if (a[1] === b[1]) return 0;
    return -1;
  });
  let i = tsa.length - 1;
  let count = 0;
  while (k > 0) {
    let value = tsa[i][1];
    k -= value;
    i--;
    count++;
  }
  return count;
}
