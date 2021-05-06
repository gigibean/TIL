const fs = require("fs");
const input = parseInt(
  process.platform === "linux" ? fs.readFileSync("/dev/stdin").toString() : `10`
);

const getFactorial = (x) => {
  let result = 1;
  for (let i = 1; i <= x; i++) {
    result *= i;
  }
  return result;
};
// const getFactorial = (n) => {
//   if (n <= 1) return 1;
//   return n * getFactorial(n - 1);
// };
console.log(getFactorial(input));
