// line 과 close로 나눈다.

// 한줄
rl.on("line", function (line) {
  console.log(line);
  rl.close();
}).on("close", function () {
  process.exit();
});

// 여러줄
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  // 여기서 데이터 처리
  console.log(input);
  precess.exit();
});

// fs

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
