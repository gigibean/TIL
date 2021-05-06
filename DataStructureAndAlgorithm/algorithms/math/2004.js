const fs = require("fs");
const [n, m] = (process.platform === "linux"
  ? fs.readFileSync("/dev/stdin").toString()
  : `25 12`
)
  .split(" ")
  .map((x) => +x);

const getTwoFive = (x) => {
  let five = 0;
  let two = 0;
  for (let i = 2; i <= x; i *= 2) {
    two += parseInt(x / i);
  }
  for (let i = 5; i <= x; i *= 5) {
    five += parseInt(x / i);
  }
  return [two, five];
};

const [nt, nf] = getTwoFive(n);
const [mt, mf] = getTwoFive(m);
const [nmt, nmf] = getTwoFive(n - m);
const two = nt - mt - nmt;
const five = nf - mf - nmf;
console.log(Math.min(two, five));
