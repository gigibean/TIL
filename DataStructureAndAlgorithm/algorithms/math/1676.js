const fs = require("fs");
const input = parseInt(
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `100`
);

const getFiveMultiples = (x) => {
  let result = 0;
  for (let i = 1; i <= x; i++) {
    for (let j = Math.pow(5, i); j <= x; j += Math.pow(5, i)) {
      result += 1;
    }
  }
  return result;
};
console.log(getFiveMultiples(input));
