const fs = require("fs");
const input = (process.platform === "linux"
  ? fs.readFileSync("/dev/stdin").toString()
  : `5 8 4`
)
  .split(" ")
  .map((x) => +x);

const getOne = () => (input[0] + input[1]) % input[2];
const getTwo = () => ((input[0] % input[2]) + (input[1] % input[2])) % input[2];
const getThree = () => (input[0] * input[1]) % input[2];
const getFour = () =>
  ((input[0] % input[2]) * (input[1] % input[2])) % input[2];

console.log(`${getOne()}\n${getTwo()}\n${getThree()}\n${getFour()}`);
