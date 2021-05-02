const fs = require("fs");
const input = (process.platform === "linux"
  ? fs.readFileSync("/dev/stdin").toString()
  : `4
9 5 4 8`
)
  .split("\n")[1]
  .split(" ")
  .map((a) => +a);

let tmp = [];
let result = new Array(input.length).fill(-1);

for (let i = 0; i < input.length; i++) {
  while (tmp.length && input[tmp[tmp.length - 1]] < input[i]) {
    result[tmp.pop()] = input[i];
  }
  tmp.push(i);
}
console.log(result.join(" "));

// let stack = [];
// let result = new Array(input.length).fill(-1);
// for (let i = 0; i < input.length; i++) {
//   while (stack.length && input[stack[stack.length - 1]] < input[i]) {
//     result[stack[stack.length - 1]] = input[i];
//     stack.pop();
//   }
//   //   const ssize = stack.length;
//   //   for (let j = ssize - 1; j >= 0; j--) {
//   //     if (input[i + 1] > input[stack[j]]) {
//   //       result[stack[j]] = input[i + 1];
//   //       stack.pop();
//   //     }
//   //   }
//   stack.push(i);
// }
// console.log(result.join(" "));
