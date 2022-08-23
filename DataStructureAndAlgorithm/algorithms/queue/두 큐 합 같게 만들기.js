class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor(value) {
    const newNode = new Node(value);
    this.first = newNode;
    this.last = newNode;
    this.length = 1;
  }
  enqueue(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
    } else {
      this.last.next = newNode;
    }
    this.last = newNode;
    this.length++;
    return this;
  }
  dequeue() {
    if (this.length === 0) return false;
    let tmp = this.first;
    if (this.length === 1) {
      this.last = null;
    }
    this.first = this.first.next;
    tmp.next = null;
    this.length--;
    return tmp;
  }
}

function solution(queue1, queue2) {
  // 큐의 원소의 합과 전체 큐의 합
  let q1total = queue1.reduce((acc, cur) => acc + cur);
  let q2total = queue2.reduce((acc, cur) => acc + cur);
  const totalCount = q1total + q2total;
  const goalCount = parseInt(totalCount / 2);
  // 나눌 수 없다면 false
  if (totalCount % 2 !== 0) return -1;
  // 배열 큐로 만들기
  const qu1 = new Queue(queue1[0]);
  const qu2 = new Queue(queue2[0]);
  let count = 0;
  for (let i = 1; i < queue1.length; i++) {
    qu1.enqueue(queue1[i]);
    qu2.enqueue(queue2[i]);
  }
  let i = 0;
  while (i <= queue1.length * 3) {
    i++;
    if (
      q1total <= 0 ||
      q2total <= 0 ||
      q1total >= totalCount ||
      q2total >= totalCount
    )
      return -1;
    // 합이 더 큰 큐를 dequeue, 작은 큐에 enqueue
    if (q1total > goalCount) {
      const tmp = qu1.dequeue().value;
      qu2.enqueue(tmp);
      q1total -= tmp;
      q2total += tmp;
      count++;
    } else if (q1total < goalCount) {
      const tmp = qu2.dequeue().value;
      qu1.enqueue(tmp);
      q1total += tmp;
      q2total -= tmp;
      count++;
    } else {
      // 값이 같다면 return
      return count;
    }
  }
  // 찾는 값이 없다면 false
  return -1;
}
