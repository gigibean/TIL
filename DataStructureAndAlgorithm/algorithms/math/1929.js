const fs = require("fs");
const input = (process.platform === "linux"
  ? fs.readFileSync("/dev/stdin").toString()
  : `3 16`
)
  .split(" ")
  .map((x) => +x);
const m = input[0];
const n = input[1];
const prim = [];
const check = new Array(n + 1).fill(false);
for (let i = 2; i <= n; i++) {
  if (!check[i]) {
    prim.push(i);
    for (let j = i * 2; j <= n; j += i) {
      check[j] = true;
    }
  }
}
console.log(prim.filter((x) => x >= m).join("\n"));
