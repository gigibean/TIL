const fs = require("fs");
let input = (process.platform === "linux"
  ? fs.readFileSync("/dev/stdin").toString().trim()
  : `3
4 10 20 30 40
3 7 5 12
3 125 15 25`
)
  .split("\n")
  .map((x) => x.split(" "));
input.shift();
input.map((x) => x.shift());
const getGCD = (a, b) => {
  let r;
  while (b !== 0) {
    r = a % b;
    a = b;
    b = r;
  }
  return a;
};
let tmp = 0;

for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < input[i].length - 1; j++) {
    for (let k = j + 1; k < input[i].length; k++) {
      tmp += getGCD(parseInt(input[i][j]), parseInt(input[i][k]));
    }
  }
  console.log(tmp);
  tmp = 0;
}
