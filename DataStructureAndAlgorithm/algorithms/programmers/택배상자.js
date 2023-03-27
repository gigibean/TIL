function solution(order) {
  const len = order.length;
  let count = 0;
  let cur = 1;
  let orderCur = 0;
  const stack = [];
  while (cur <= len) {
    if (cur === order[orderCur]) {
      cur += 1;
      count += 1;
      orderCur += 1;
    } else if (stack[stack.length - 1] === order[orderCur]) {
      stack.pop();
      count += 1;
      orderCur += 1;
    } else {
      stack.push(cur);
      cur += 1;
    }
  }
  if (!stack.length) return count;
  while (orderCur < len && order[orderCur] === stack[stack.length - 1]) {
    stack.pop();
    count += 1;
    orderCur += 1;
  }
  return count;
}
