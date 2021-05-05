const fs = require("fs");
let input = (process.platform === "linux"
  ? fs.readFileSync("/dev/stdin").toString()
  : `4
1 3 5 7`
).split("\n");
input.shift();
input = input[0].split(" ");

const isPrime = (x) => {
  if (x < 2) return false;
  // 루트 x 까지만 검사 O(√x)
  for (let i = 2; i * i <= x; i++) {
    if (x % i == 0) {
      return false;
    }
  }
  return true;
};
let result = 0;
input.map((x) => {
  if (isPrime(x)) {
    result++;
  }
});
console.log(result);
