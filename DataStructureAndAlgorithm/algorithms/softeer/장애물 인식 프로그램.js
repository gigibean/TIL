const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

readline
  .on("line", function (line) {
    input.push(line);
  })
  .on("close", function () {
    //이 안에 솔루션 코드 작성
    solution(input);
    process.exit();
  });

const solution = (a) => {
  const result = [];
  const n = +a.shift();
  a = a.map((x) =>
    x
      .trim()
      .split("")
      .map((j) => +j)
  );
  const dfs = (x, y) => {
    if (!(x < n && x >= 0 && y < n && y >= 0)) return 0;
    if (a[x][y]) {
      a[x][y] = 0;
      let count = 1;
      count += dfs(x - 1, y);
      count += dfs(x + 1, y);
      count += dfs(x, y - 1);
      count += dfs(x, y + 1);
      return count;
    }
    return 0;
  };
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      let count = dfs(i, j);
      if (count !== 0) result.push(count);
    }
  }
  console.log(result.length);
  if (result.length) {
    result.sort((a, b) => a - b);
    result.forEach((x) => {
      console.log(x);
    });
  }
};
