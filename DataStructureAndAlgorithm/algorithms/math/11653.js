const fs = require("fs");
let input = +(process.platform === "linux"
  ? fs.readFileSync("/dev/stdin").toString().trim()
  : `9991`);

let result = [];
for (let i = 2; i <= input; i++) {
  while (input % i === 0) {
    input = input / i;
    result.push(i);
  }
}
console.log(result.join("\n"));
