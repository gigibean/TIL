const fs = require("fs");
const input = (process.platform === "linux"
  ? fs.readFileSync("/dev/stdin").toString().trim()
  : `0`
).split("");

let ans = [];
input.map((x, i) => {
  let tmp = parseInt(x);
  let result = new Array(3).fill(0);
  while (tmp) {
    if (tmp >= 4) {
      tmp -= 4;
      result[0] = 1;
    } else if (tmp >= 2 && tmp < 4) {
      tmp -= 2;
      result[1] = 1;
    } else if (tmp === 1) {
      tmp -= 1;
      result[2] = 1;
    }
  }
  if (i === 0) {
    while (result[0] === 0) result.shift();
    if (result[0] !== 1) {
      ans += "0";
    }
  }
  ans += result.join("");
});
console.log(ans);
