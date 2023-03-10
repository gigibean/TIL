function solution(expression) {
  const OPERATIONS = ["+", "*", "-"];
  // 우선순위 순열 조합 만들기
  const combinatePriority = (opers, num) => {
    const result = [];
    if (num === 1) return opers.map((oper) => [oper]);

    opers.forEach((fix, index, origin) => {
      const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
      const combination = combinatePriority(rest, num - 1);
      const attatched = combination.map((combi) => [fix, ...combi]);
      result.push(...attatched);
    });
    return result;
  };
  // expression 내 전체 연산자 구하기
  const totalOperation = [];
  for (let operation of OPERATIONS) {
    if (expression.includes(operation)) totalOperation.push(operation);
  }
  const priorities = combinatePriority(totalOperation, totalOperation.length);

  // expression 연산자와 피연산자 분리하기
  const splitedExpression = expression
    .split(/([\+\-\*])/)
    .map((operation) =>
      OPERATIONS.includes(operation) ? operation : +operation
    );

  // 우선순위에 따라서 연산하고 최곳값을 갱신하기
  let max = 0;
  priorities.forEach((priority) => {
    let cur = [...splitedExpression];
    priority.forEach((operation) => {
      cur = cur.reduce((arr, cur, index) => {
        if (arr[arr.length - 1] === operation) {
          arr.pop();
          if (operation === "+") arr[arr.length - 1] += cur;
          else if (operation === "*") arr[arr.length - 1] *= cur;
          else if (operation === "-") arr[arr.length - 1] -= cur;
        } else arr.push(cur);
        return arr;
      }, []);
    });
    cur = Math.abs(...cur);
    if (max < cur) max = cur;
  });
  return max;
}
