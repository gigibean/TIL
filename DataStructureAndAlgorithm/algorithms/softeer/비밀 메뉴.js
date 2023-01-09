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
  const [m, n, k] = input[0].split(" ").map((x) => +x);
  if (m > n) {
    console.log("normal");
    return;
  }
  const secretNum = input[1].split(" ").join("");
  const insertNum = input[2].split(" ").join("");
  const reg = new RegExp(`${secretNum}`);
  const isMatch = reg.test(insertNum);
  console.log(isMatch ? "secret" : "normal");
};
