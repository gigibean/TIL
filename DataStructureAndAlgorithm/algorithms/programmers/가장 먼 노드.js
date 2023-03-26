function solution(n, edge) {
  const adjacencyList = new Array(n).fill().map((_) => []);
  for (let [start, end] of edge) {
    adjacencyList[start - 1].push(end - 1);
    adjacencyList[end - 1].push(start - 1);
  }

  const queue = [0];
  const visited = [1];
  let max = 0;
  while (queue.length) {
    const current = queue.shift();

    for (let next of adjacencyList[current]) {
      if (!visited[next]) {
        visited[next] = visited[current] + 1;
        if (visited[next] > max) max = visited[next];
        queue.push(next);
      }
    }
  }
  return visited.filter((item) => item === max).length;
}
