```
문제
정수 4를 1, 2, 3의 합으로 나타내는 방법은 총 7가지가 있다. 합을 나타낼 때는 수를 1개 이상 사용해야 한다.

1+1+1+1
1+1+2
1+2+1
2+1+1
2+2
1+3
3+1
정수 n이 주어졌을 때, n을 1, 2, 3의 합으로 나타내는 방법의 수를 구하는 프로그램을 작성하시오.

입력
첫째 줄에 테스트 케이스의 개수 T가 주어진다. 각 테스트 케이스는 한 줄로 이루어져 있고, 정수 n이 주어진다. n은 양수이며 11보다 작다.

출력
각 테스트 케이스마다, n을 1, 2, 3의 합으로 나타내는 방법의 수를 출력한다.

예제 입력 1 
3
4
7
10
예제 출력 1 
7
44
274
``````
DP[1] = 1
DP[2] = 2
1 + 1
2
DP[3] = 4
1 + 1 + 1, 1 + 2, 2 + 1, 3
DP[4] = 7 
1 + 1 + 1 + 1, 1 + 1 + 2, 1 + 2 + 1, 2 + 1 + 1, 2 + 2, 1 + 3, 3 + 1
DP[5] = 13
1 + 1 + 1 + 1 + 1,
1 + 1 + 1 + 2,
1 + 1 + 2 + 1,
1 + 2 + 1 + 1,
2 + 1 + 1 + 1,
1 + 1 + 3, 
1 + 3 + 1,
3 + 1 + 1,
1 + 2 + 2,
2 + 1 + 2,
2 + 2 + 1,
2 + 3, 
3 + 2, 

...

4의 경우, 
1의 조합(1)에다가 + 3 -> (1 + 3)
2의 조합(1 + 1, 2) 에다가 +2 -> (1 + 1 + 2, 2 + 2)
3의 조합(1 + 1 + 1, 2 + 1, 1 + 2, 3) 에다가 + 1 -> (1 + 1 + 1 + 1, 2 + 1 + 1, 1 + 2 + 1 )

5의 경우,
2의 조합에다가 + 3,
3의 조합에다가 + 2,
4의 조합에다가 + 1,

...
i >= 4
DP[i] = DP[i - 1] + DP[i - 2] + DP[i - 3]
```;

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];
rl.on("line", function (line) {
  input.push(line);
  /* [
        "3",
        "4",
        "7",
        "10"
    ] */
}).on("close", function () {
  const DP = [];
  DP[1] = 1;
  DP[2] = 2;
  DP[3] = 4;
  const array1 = input.slice(1);
  const array2 = array1.map((value) => {
    for (let i = 4; i <= value; i++) {
      DP[i] = DP[i - 1] + DP[i - 2] + DP[i - 3];
    }
    return DP[value];
  });
  array2.map((value) => {
    console.log(value);
  });
});
