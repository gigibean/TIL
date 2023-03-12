function solution(rows, columns, queries) {
  // 1️⃣ 2차 행렬을 만든다
  const makeMatrix = (rows, columns) => {
    const arr = [];
    let k = 1;
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < columns; j++) {
        if (!arr[i]) arr[i] = [];
        arr[i][j] = k++;
      }
    }
    return arr;
  };
  const matrix = makeMatrix(rows, columns);
  const result = [];
  queries.forEach((query) => {
    query = query.map((q) => q - 1);
    const [x1, y1, x2, y2] = query;
    // 2️⃣ 쿼리 반복문을 돌며 최솟값을 찾고, query 에 맞는 2채 배열을 [x, y] 형태로 저장한다(arr)
    const arr = [];
    let min = Number.MAX_SAFE_INTEGER;
    for (let i = x1; i <= x2; i++) {
      for (let j = y1; j <= y2; j++) {
        if (i === x1 || i === x2) {
          arr.push([i, j, matrix[i][j]]);
          if (min > matrix[i][j]) min = matrix[i][j];
        } else if (j === y1 || j === y2) {
          arr.push([i, j, matrix[i][j]]);
          if (min > matrix[i][j]) min = matrix[i][j];
        }
      }
    }
    result.push(min);
    // 3️⃣ arr 를 돌면서 이차배열를 회전한다.
    arr.forEach(([x, y, item]) => {
      if (x === x1 && y < y2) matrix[x][y + 1] = item;
      if (y === y2 && x < x2) matrix[x + 1][y] = item;
      if (x === x2 && y > y1) matrix[x][y - 1] = item;
      if (y === y1 && x > x1) matrix[x - 1][y] = item;
    });
  });
  return result;
}
