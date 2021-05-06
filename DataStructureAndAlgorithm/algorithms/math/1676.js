const fs = require("fs");
const { parse } = require("node:path");
const input = parseInt(
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `100`
);
// const input = parseInt(fs.readFileSync("/dev/stdin").toString());

const getFiveMultiples = (x) => {
  let result = 0;
  //   for (let i = 1; i <= x; i++) {
  //     for (let j = Math.pow(5, i); j <= x; j += Math.pow(5, i)) {
  //       result += 1;
  //     }
  //   }
  for (let i = 5; i <= x; i *= 5) {
    result += parseInt(x / i);
  }
  return result;
};
console.log(getFiveMultiples(input));
