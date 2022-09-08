function solution(maps) {
  // 최단 거리 -> BFS / node === x, y / edge === 4 ways
  // 갔던 곳을 0으로 처리 -> 중복 x
  let needVisited = maps;
  let visited = [];
  const goalX = maps.length;
  const goalY = maps[0].length;

  // 0, 0 은 시작점으로 항상 1 임
  visited.push([0, 0]);
  needVisited[0][0] = 0;
  let count = 1;

  const ways = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  // loop 문에서 4 방향으로 모두 BFS
  while (visited.length > 0) {
    // case 만큼 visited size 증가
    const size = visited.length;
    for (let i = 0; i < size; i++) {
      const [x, y] = visited.shift();
      // 각 케이스에서 4방향으로
      for (let j = 0; j < ways.length; j++) {
        const tmpX = x + ways[j][0];
        const tmpY = y + ways[j][1];
        // 해당 needVisited 가 1이면
        if (
          tmpX >= 0 &&
          tmpY >= 0 &&
          tmpX < goalX &&
          tmpY < goalY &&
          needVisited[tmpX][tmpY] === 1
        ) {
          // visited push / [tmpx][tmpy] = 0
          if (tmpX === goalX - 1 && tmpY === goalY - 1) return ++count;
          visited.push([tmpX, tmpY]);
          needVisited[tmpX][tmpY] = 0;
        }
      }
    }
    count++;
  }

  return -1;
}
