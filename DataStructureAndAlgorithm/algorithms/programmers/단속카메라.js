function solution(routes) {
  routes.sort((a, b) => a[1] - b[1]);
  let i = 0;
  let count = 1;
  let n = routes.length;
  while (i < n - 1) {
    const point = routes[i][1]; // 가장 가까운 마지막 지점
    let includedPointIndex = i + 1;
    for (let j = i + 1; j < n; j++) {
      // point 보다 시작점이 작거나 같고, 끝점이 크거나 같으면
      if (point >= routes[j][0] && point <= routes[j][1]) {
        includedPointIndex = j;
      } else {
        includedPointIndex = j;
        count += 1;
        break;
      }
    }
    i = includedPointIndex;
  }
  return count;
}
