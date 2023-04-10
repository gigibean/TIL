function solution(N, road, K) {
  const distances = Array.from({ length: N + 1 }, () => Infinity); // 0 부터 N+1 까지 (0은 연산에서 제외)
  const adjacencyList = Array.from({ length: N + 1 }, () => []);

  road.forEach(([a, b, c]) => {
    // add edges
    adjacencyList[a].push({ to: b, distance: c });
    adjacencyList[b].push({ to: a, distance: c });
  });

  distances[1] = 0;
  const queue = [{ to: 1, distance: 0 }];

  while (queue.length) {
    const { to: current, _ } = queue.pop();
    adjacencyList[current].forEach((nextNode) => {
      let candidate = distances[current] + nextNode.distance;
      if (distances[nextNode.to] > candidate) {
        distances[nextNode.to] = candidate;
        queue.push(nextNode);
      }
    });
  }
  return distances.filter((distance) => distance <= K).length;
}
