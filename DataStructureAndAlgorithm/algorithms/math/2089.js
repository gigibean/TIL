const fs = require("fs");
let n =
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString().trim()
    : `-13`;
let result = "";
if (n === 0) result += 0;
while (n != 0) {
  result += Math.abs(n % -2);
  console.log(result, n);
  n = Math.ceil(n / -2);
  console.log(n);
}
if (result) console.log(result.split("").reverse().join(""));
else console.log(0);
