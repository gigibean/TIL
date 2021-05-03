const fs = require("fs");
let input = (process.platform === "linux"
  ? fs.readFileSync("/dev/stdin").toString()
  : `7
1 1 2 3 4 2 1`
)
  .split("\n")[1]
  .split(" ")
  .map((x) => +x);

let result = new Array(input.length).fill(-1);
let count = {};
input.forEach((x) => {
  count[x] = (count[x] || 0) + 1;
});
let stack = [];
for (let i = 0; i < input.length; i++) {
  // input[i]에 대응하는 count value와 input[stack[stack.top()]]에 value

  while (
    stack.length &&
    count[input[stack[stack.length - 1]]] < count[input[i]]
  ) {
    result[stack.pop()] = input[i];
  }
  stack.push(i);
}

console.log(result.join(" "));

`
// match용 str
const strInput = input.join("");
// console.log(strInput);

// F[] = F(Ai) = Ai의 중복개수,
// index = i,
// input[i] = A
let F = [];
for (let x of input) {
  let re = ;
  const reg = new RegExp(re, "g");
  F.push(strInput.match(reg).length);
}
console.log(F);

let stack = [];
for (let i = 0; i < F.length; i++) {
  // F[stack.top()]보다 큰 F[i]를 찾아
  // result[i]에 input[i] 넣기
  while (stack.length && F[stack[stack.length - 1]] < F[i]) {
    result[stack.pop()] = input[i];
  }
  stack.push(i);
}

console.log(result.join(" "));
`;
