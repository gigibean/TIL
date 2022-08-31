function solution(n, wires) {
  // graph obj
  // graph edge wires에서 하나씩 선택해서 해당 엣지가 없는 경우에
  // [0]번째 wires[i] 노드와 연결된 graph[wires[i][0]] 을 queue에 담는다
  // 그리고 wires[i][1] 를 제외하고 qraph[wires[i][0]] 부터 노드를 찾아 visited에 넣고
  // visited에 넣은 노드를 visitedNode라고 할 때 graph[visitedNode] 를 또 찾아서 넣는데, 이미 visited된 node는 제외하고 다시 queue에 넣는다.

  // 1. graph 만들기
  const graph = {};
  for (let i = 1; i <= n; i++) {
    graph[i] = [];
  }
  for (let i = 0; i < wires.length; i++) {
    graph[wires[i][0]].push(wires[i][1]);
    graph[wires[i][1]].push(wires[i][0]);
  }
  // 각각 경우에 따라 노드 개수를 담은 배열
  const count = [];

  // 2. wires loop 문에서 하나씩 wire가 없는 경우를 만든다
  for (let i = 0; i < wires.length; i++) {
    const include = wires[i][0];
    const exclude = wires[i][1];
    // visited, current 배열을 만들어 노드를 담는데, wires[i][0]는 우선 visited에 넣고, graph[wires[i][0]] 부터 current로 담는다
    const visited = [include];
    const current = [...graph[include]];
    //  current pop을 하는데 wires[i][1]라면 무시하고 아니라면 pop한 값이 visited에 이미 있는지 확인하여 visited에 담는다
    while (current.length > 0) {
      const popNode = current.shift();
      if (popNode !== exclude && !visited.includes(popNode)) {
        visited.push(popNode);
        // popNode 에서 graph[popNode] 를 또 두가지 조건에 부합한다면 current에 넣는다
        current.push(...graph[popNode]);
      }
    }
    count.push(Math.abs(visited.length - Math.abs(n - visited.length)));
  }
  // 차이가 가장 작은 값을 구하기 위해서는 visited.length 와 n-visited.length 차이가 가장 작은 값 구하기

  return Math.min(...count);
}
