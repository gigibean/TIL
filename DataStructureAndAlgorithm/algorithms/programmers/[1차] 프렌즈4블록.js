function solution(m, n, board) {
  board = board.map((row) => row.split(""));
  let needPop = []; // 같은 모양인 블록들
  let count = 0;
  while (true) {
    for (let i = 0; i < m - 1; i++) {
      for (let j = 0; j < n - 1; j++) {
        // 2 * 2가 같은 블록을 찾는다
        const [one, two, three, four] = [
          board[i][j],
          board[i][j + 1],
          board[i + 1][j],
          board[i + 1][j + 1],
        ];
        if (one === two && two === three && three === four && one !== null) {
          needPop.push([i, j]);
        }
      }
    }
    if (!needPop.length) {
      for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
          if (board[i][j] === null) count += 1;
        }
      }
      return count;
    }
    needPop.forEach((item, index) => {
      const [x, y] = item;
      board[x][y] = null;
      board[x][y + 1] = null;
      board[x + 1][y] = null;
      board[x + 1][y + 1] = null;
    });
    needPop = [];
    // 각 열 중에 null 의 가장 깊은 행을 찾는다
    const findNull = new Array(m).fill(null);
    for (let i = 0; i < m; i++) {
      const nullColumns = board.reduce((arr, row, index) => {
        if (row[i] === null) {
          arr.push(index);
        }
        return arr;
      }, []);
      const deepIndex = nullColumns.length
        ? nullColumns[nullColumns.length - 1]
        : -1;
      if (deepIndex !== -1) findNull[i] = deepIndex;
    }
    // 각 열 중에 null 이 있는 애 중에 null index보다 작은 곳에 null이 아닌 수 있다면 옮긴다

    for (let i = 0; i < findNull.length; i++) {
      if (findNull[i] !== null) {
        // 가변적인 findNull[i] 를 -1 하여 for문을 계속 바꾸는 것
        for (let j = findNull[i] - 1; j >= 0; j--) {
          if (board[j][i] !== null) {
            console.log(findNull[i], j, i, board);
            board[findNull[i]][i] = board[j][i];
            board[j][i] = null;
            findNull[i] -= 1;
          }
        }
      }
    }
  }
}
