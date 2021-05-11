const fs = require("fs");
const input = (process.platform === "linux"
  ? fs.readFileSync("/dev/stdin").toString().trim()
  : `5
6
8
10
12
100`
).split("\n");

let maxnum = Math.max(...input);
let check = new Array(maxnum + 1).fill(false);
for (let i = 2; i <= maxnum; i++) {
  if (!check[i]) {
    for (let j = i * i; j <= maxnum; j += i) {
      check[j] = true;
      //   console.log(j);
    }
  }
}
let result = [];
input.map((x) => {
  let tmp = 0;
  for (let i = 3; i < x; i += 2) {
    if (!check[i] && !check[x - i] && x - i != 1) {
      //   tmp++;
      console.log(`${x} = ${i} + ${x - i}\n`);
    }
  }
  result.push(tmp);
});
console.log(result);
