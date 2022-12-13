function solution(n, computers) {
  // 방문할 곳
  const needVisit = [];
  // 방문한 곳
  const visited = new Array(n).fill(0);
  let count = 0;
  for (let i = 0; i < n; i++) {
    if (visited[i] === 0) {
      needVisit.push(i);
      count++;
    }
    while (needVisit.length) {
      const current = needVisit.pop();
      if (visited[current] === 0) {
        visited[current] = 1;
        computers[current].forEach((item, index) => {
          if (item === 1 && index !== current && visited[index] === 0) {
            needVisit.push(index);
          }
        });
      }
    }
  }
  return count;
}

function solution(n, computers) {
  const visited = new Array(n).fill(0);
  const needVisit = [];
  let count = 0;
  while (visited.some((item) => item === 0)) {
    const beginCom = visited.indexOf(0);
    needVisit.push(beginCom);
    count++;
    while (needVisit.length) {
      const start = needVisit.pop();
      if (visited[start] === 0) {
        visited[start] = 1;
        const departs = computers[start].reduce((arr, isConnect, index) => {
          if (isConnect === 1 && start !== index) {
            arr.push(index);
          }
          return arr;
        }, []);
        needVisit.push(...departs);
      }
    }
  }
  return count;
}
