const fs = require("fs");
const input = (process.platform === "linux"
  ? fs.readFileSync("/dev/stdin")
  : `24 18`
)
  .toString()
  .split(" ")
  .map((x) => +x);

const getGCD = (a, b) => {
  let r = 0;
  while (b) {
    r = a % b;
    a = b;
    b = r;
  }
  return a;
};

const getLCM = (a, b) => {
  const g = getGCD(a, b);
  // a * b / gcm
  return (a / g) * (b / g) * g;
};

console.log(`${getGCD(input[0], input[1])}\n${getLCM(input[0], input[1])}`);
