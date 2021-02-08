```
문제
자연수 N이 주어졌을 때, 1부터 N까지 한 줄에 하나씩 출력하는 프로그램을 작성하시오.

입력
첫째 줄에 100,000보다 작거나 같은 자연수 N이 주어진다.

출력
첫째 줄부터 N번째 줄 까지 차례대로 출력한다.

예제 입력 1 
5
예제 출력 1 
1
2
3
4
5
```;
// 시간 초과
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = "";

rl.on("line", function (line) {
  input = line;
}).on("close", function () {
  const count = parseInt(input);
  for (let i = 1; i <= count; i++) {
    console.log(i);
  }

  process.exit();
});

// 시간 초과
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split(" ");
const count = parseInt(input);
for (let i = 1; i <= count; i++) {
  console.log(i);
}

// answer에 답을 모두 모아서 \n으로 띄어쓰기 처리 후 log 찍기
let input = Number(require("fs").readFileSync("/dev/stdin").toString());

let answer = "";

for (let i = 1; i <= input; i++) {
  answer += i + "\n";
}

console.log(answer);
