function solution(plans) {
  const queue = plans
    .map((plan) => {
      const [hour, min] = plan[1].split(":").map((x) => +x);
      plan[1] = hour * 60 + min;
      plan[2] = +plan[2];
      return plan;
    })
    .sort((a, b) => a[1] - b[1]);

  const result = [];
  const first = queue.shift();
  let curTime = first[1];
  const stack = [first];

  while (queue.length) {
    const target = queue.shift();
    const [_name, time, _spend] = target;
    let timeDiff = time - curTime;
    curTime = time;

    while (stack.length && timeDiff > 0) {
      const last = stack.pop();
      const [name, _time, spend] = last;

      if (spend <= timeDiff) {
        result.push(name);
        timeDiff -= spend;
      } else {
        last[2] = spend - timeDiff;
        timeDiff = 0;
        stack.push(last);
      }
    }
    stack.push(target);
  }

  while (stack.length) result.push(stack.pop()[0]);
  return result;
}
