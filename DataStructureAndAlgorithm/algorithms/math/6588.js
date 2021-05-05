const fs = require("fs");
const input = (process.platform === "linux"
  ? fs.readFileSync("/dev/stdin").toString()
  : `8
20
42
0`
)
  .split("\n")
  .map((x) => +x);
input.pop();

// 주어진 수보다 작은 소수 중에 가장 큰 수 찾기

const largestNum = Math.max(...input);
const check = new Array(largestNum + 1).fill(false);
for (let i = 2; i <= largestNum; i++) {
  if (!check[i]) {
    for (let j = i * i; j <= largestNum; j += i) {
      check[j] = true;
    }
  }
}
let result = "";
input.map((x) => {
  for (let i = 3; i < x; i += 2) {
    if (!check[i] && !check[x - i]) {
      result += `${x} = ${i} + ${x - i}\n`;
      break;
    }
  }
});
console.log(result);
