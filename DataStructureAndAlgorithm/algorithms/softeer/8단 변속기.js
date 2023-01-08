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
    const l = input[0]
      .trim()
      .split(" ")
      .map((x) => +x);
    const result = solution(l);
    console.log(result);
    process.exit();
  });

const solution = (input) => {
  const a = [...input].sort((a, b) => a - b);
  const b = [...input].sort((a, b) => b - a);
  const flag = [true, true];
  for (let i = 0; i < input.length; i++) {
    if (a[i] !== input[i]) flag[0] = false;
    if (b[i] !== input[i]) flag[1] = false;
  }
  if (!flag[0] && !flag[1]) return "mixed";
  if (flag[0]) return "ascending";
  return "descending";
};
