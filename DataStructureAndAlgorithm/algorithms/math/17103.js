const fs = require("fs");
let input = (process.platform === "linux"
  ? fs.readFileSync("/dev/stdin").toString().trim()
  : `5
4
6
8
10
12
100`
)
  .split("\n")
  .map((x) => +x);
input.shift();
let maxnum = Math.max(...input);
let check = new Array(maxnum + 1).fill(false);
for (let i = 2; i <= maxnum; i++) {
  if (!check[i]) {
    for (let j = i * i; j <= maxnum; j += i) {
      check[j] = true;
    }
  }
}
let result = [];

input.map((x) => {
  let tmp = 0;
  let y = Math.ceil(x / 2);
  if (x === 4) tmp = 1;
  else {
    for (let i = 3; i <= y; i += 2) {
      if (!check[i] && !check[x - i] && x - i != 1) {
        tmp++;
      }
    }
  }
  result.push(tmp);
});

console.log(result.join("\n"));
