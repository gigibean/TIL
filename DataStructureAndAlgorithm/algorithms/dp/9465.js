```
스티커 출처다국어분류
시간 제한	메모리 제한	제출	정답	맞은 사람	정답 비율
1 초	256 MB	34206	17360	11412	49.080%
문제
상근이의 여동생 상냥이는 문방구에서 스티커 2n개를 구매했다. 스티커는 그림 (a)와 같이 2행 n열로 배치되어 있다. 상냥이는 스티커를 이용해 책상을 꾸미려고 한다.

상냥이가 구매한 스티커의 품질은 매우 좋지 않다. 스티커 한 장을 떼면, 그 스티커와 변을 공유하는 스티커는 모두 찢어져서 사용할 수 없게 된다. 즉, 뗀 스티커의 왼쪽, 오른쪽, 위, 아래에 있는 스티커는 사용할 수 없게 된다.



모든 스티커를 붙일 수 없게된 상냥이는 각 스티커에 점수를 매기고, 점수의 합이 최대가 되게 스티커를 떼어내려고 한다. 먼저, 그림 (b)와 같이 각 스티커에 점수를 매겼다. 상냥이가 뗄 수 있는 스티커의 점수의 최댓값을 구하는 프로그램을 작성하시오. 즉, 2n개의 스티커 중에서 점수의 합이 최대가 되면서 서로 변을 공유 하지 않는 스티커 집합을 구해야 한다.

위의 그림의 경우에 점수가 50, 50, 100, 60인 스티커를 고르면, 점수는 260이 되고 이 것이 최대 점수이다. 가장 높은 점수를 가지는 두 스티커 (100과 70)은 변을 공유하기 때문에, 동시에 뗄 수 없다.

입력
첫째 줄에 테스트 케이스의 개수 T가 주어진다. 각 테스트 케이스의 첫째 줄에는 n (1 ≤ n ≤ 100,000)이 주어진다. 다음 두 줄에는 n개의 정수가 주어지며, 각 정수는 그 위치에 해당하는 스티커의 점수이다. 연속하는 두 정수 사이에는 빈 칸이 하나 있다. 점수는 0보다 크거나 같고, 100보다 작거나 같은 정수이다. 

출력
각 테스트 케이스 마다, 2n개의 스티커 중에서 두 변을 공유하지 않는 스티커 점수의 최댓값을 출력한다.

예제 입력 1 
2
5
50 10 100 20 40
30 50 70 10 60
7
10 30 10 50 100 20 40
20 40 30 50 60 20 80
예제 출력 1 
260
290
```;

```
해당 위치의 위 혹은 아래, 양옆을 사용하지 못한다면,
사용할 수 있는 범위는, 대각선이 된다.

대각선의 값의 옆에 있는 값이 크다면, 대각선의 값을 사용할 수 없게 되고, 대각선 옆의 값을 사용하게 한다.

첫 줄 첫 번째와 둘째 줄 첫번째 각각 처음 시작하여 
대각선과 대각선 옆의 값을 비교한후 더 큰 값을 더한다.

그리고 마지막에 가장 큰 값을 리턴한다.

https://chanhuiseok.github.io/posts/baek-9/
```;

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line);
  /*[
 0       '2',
 1       '5',
 2       '50 10 100 20 40',
 3       '30 50 70 10 60',
 4       '7',
 5       '10 30 10 50 100 20 40',
 6       '20 40 30 50 60 20 80'
    ]*/
}).on("close", function () {
  const sticker = [];
  for (let i = 0; i < parseInt(input[0]); i++) {
    let temp1 = input[i * 3 + 2].split(" ");
    let temp2 = input[i * 3 + 3].split(" ");
    sticker[0] = temp1.map((value) => parseInt(value));
    sticker[1] = temp2.map((value) => parseInt(value));
    sticker[0].unshift(0, 0);
    sticker[1].unshift(0, 0);

    for (let k = 2; k < parseInt(input[i * 3 + 1]) + 2; k++) {
      for (let j = 0; j < 2; j++) {
        //   sticker[0][k] 와 sticker[1][k]를 비교한 후 k 를 + 1
        if (j === 0) {
          // sticker[j] 의 j 가 0 일 때
          sticker[j][k] =
            sticker[j][k] +
            Math.max(sticker[j + 1][k - 1], sticker[j + 1][k - 2]);
        }
        if (j === 1) {
          // sticker[j] 의 j 가 1 일 때
          sticker[j][k] =
            sticker[j][k] +
            Math.max(sticker[j - 1][k - 1], sticker[j - 1][k - 2]);
        }
      }
    }
    console.log(
      Math.max(
        sticker[0][sticker[0].length - 1],
        sticker[1][sticker[0].length - 1]
      )
    );
  }
});
