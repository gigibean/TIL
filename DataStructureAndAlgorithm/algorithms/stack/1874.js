```
문제
스택 (stack)은 기본적인 자료구조 중 하나로, 컴퓨터 프로그램을 작성할 때 자주 이용되는 개념이다. 스택은 자료를 넣는 (push) 입구와 자료를 뽑는 (pop) 입구가 같아 제일 나중에 들어간 자료가 제일 먼저 나오는 (LIFO, Last in First out) 특성을 가지고 있다.

1부터 n까지의 수를 스택에 넣었다가 뽑아 늘어놓음으로써, 하나의 수열을 만들 수 있다. 이때, 스택에 push하는 순서는 반드시 오름차순을 지키도록 한다고 하자. 임의의 수열이 주어졌을 때 스택을 이용해 그 수열을 만들 수 있는지 없는지, 있다면 어떤 순서로 push와 pop 연산을 수행해야 하는지를 알아낼 수 있다. 이를 계산하는 프로그램을 작성하라.

입력
첫 줄에 n (1 ≤ n ≤ 100,000)이 주어진다. 둘째 줄부터 n개의 줄에는 수열을 이루는 1이상 n이하의 정수가 하나씩 순서대로 주어진다. 물론 같은 정수가 두 번 나오는 일은 없다.

출력
입력된 수열을 만들기 위해 필요한 연산을 한 줄에 한 개씩 출력한다. push연산은 +로, pop 연산은 -로 표현하도록 한다. 불가능한 경우 NO를 출력한다.

즉, 1..n 을 차례대로 stack에 넣고 빼면서 input으로 주어진 배열을 만족할 수 있는지 확인하는 문제.
1..n을 차례대로 넣고 빼면서 +, -를 출력해주면되고, 만약 input 값을 만들 수 없다면 NO를 출력하면 된다.
stack에서 빼는 값이 result 값으로, result값이 input값과 같아야 한다.

예를들어 
input = [4, 1, 2, 3, 4]
라면 
stack.push(1) // stack==[1] result==[] :+
result += stack.pop() // stack==[] result==[1] :-
stack.push(2) // stack==[2] result==[1] :+
result += stack.pop() // stack==[] result==[1,2] :-
stack.push(3) // stack==[3] result=[1,2] :+
result += stack.pop() // stack==[] result==[1,2,3] :-
stack.push(4) // stack==[4] result==[1,2,3] :+
result += stack.pop // stack==[] result==[1,2,3,4] :-

+-+-+-+-
```;

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

// const input = ["8", "4", "3", "6", "8", "7", "5", "2", "1"];
// const input = ["5", "1", "2", "5", "3", "4"];
//const input = ["8", "4", "3", "6", "8", "7", "5", "2", "1"];
//const input = ["5", "1", "2", "5", "3", "4"];
//const input =[1,1]
//const input= [5, 1, 5, 3, 4, 2]
//const input =[4,1,2,3,4]
//const input = [4, 4, 3, 2, 1];
function getResult() {
  let m = 1;
  let stack = [];
  let result = [];

  for (let i = 1; i <= parseInt(input[0]); i++) {
    if (
      parseInt(input[i]) >
      (stack[stack.length - 1] === undefined ? 0 : stack[stack.length - 1])
      // stack에 마지막 배열에 숫자가 없거나, 있어도 input[i]가 더 크면
    ) {
      for (let j = m; j <= parseInt(input[i]); j++) {
        // input[i]와 같아질 때까지 stack에 숫자 추가 push
        stack.push(m++);
        result.push("+");
      }
    } else if (parseInt(input[i]) < stack[stack.length - 1]) {
      return "NO";
    }
    if (parseInt(input[i]) === stack[stack.length - 1]) {
      // input[i]와 stack의 마지막 수가 같아지면 pop
      result.push("-");
      stack.pop();
    }
  }
  return result.join("\n");
}

console.log(getResult());
