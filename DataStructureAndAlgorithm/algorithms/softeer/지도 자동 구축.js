const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

readline
  .on("line", function (line) {
    input.push(line);
  })
  .on("close", function () {
    //이 안에 솔루션 코드 작성
    solution(input);
    process.exit();
  });

const solution = (input) => {
  const num = +input[0];
  const gettotalNum = (num) => {
    let tn = 2;
    let sequence = 1;
    for (let i = 1; i <= num; i++) {
      tn += sequence;
      sequence *= 2;
    }
    return tn;
  };
  const tn = gettotalNum(num);
  console.log(tn * tn);
};
