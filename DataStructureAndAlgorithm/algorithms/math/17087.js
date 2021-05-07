const fs = require("fs");
const input = (process.platform === "linux"
  ? fs.readFileSync("/dev/stdin").toString().trim()
  : `1 1
1000000000`
)
  .split("\n")
  .map((x) => x.split(" "));
const base = parseInt(input[0][1]);
const [...broDistance] = input[1].map((x) => Math.abs(+x - base));
const getGCD = (a, b) => {
  let r;
  while (b) {
    r = a % b;
    a = b;
    b = r;
  }
  return a;
};
let tmp = getGCD(broDistance[0], broDistance[1]);
if (broDistance.length === 1) console.log(broDistance[0]);
else if (broDistance.length === 2) console.log(tmp);
else {
  for (let i = 2; i < broDistance.length; i++) {
    tmp = getGCD(tmp, broDistance[i]);
  }
  console.log(tmp);
}
