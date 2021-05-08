const fs = require("fs");
let n =
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString().trim()
    : `0`;
let result = "";
if (n === 0) result += 0;
while (n != 0) {
  result += Math.abs(n % -2);
  n = Math.ceil(n / -2);
}
if (result) console.log(result.split("").reverse().join(""));
else console.log(0);
