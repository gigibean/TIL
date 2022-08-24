function solution(k, dungeons) {
  let count = 0;
  let tmpArr = [];
  function recursive(k, current0, current1, rest) {
    if (k > 0 && k >= current0) {
      count = dungeons.length - rest.length;
      tmpArr.push(count);
      count = 0;
      for (let i = 0; i < rest.length; i++) {
        const newRest = [...rest.slice(0, i), ...rest.slice(i + 1)];
        recursive(k - current1, rest[i][0], rest[i][1], newRest);
      }
    }
  }
  recursive(k, null, null, dungeons);
  return Math.max(...tmpArr);
}
