const input = [
  15,
  "push 1",
  "push 2",
  "front",
  "back",
  "size",
  "empty",
  "pop",
  "pop",
  "pop",
  "size",
  "empty",
  "pop",
  "push 3",
  "empty",
  "front",
];
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
class Queue {
  constructor() {
    this._arr = [];
  }
  push(x) {
    this._arr.push(x);
  }
  pop() {
    return this._arr.length === 0 ? -1 : this._arr.shift();
  }
  size() {
    return this._arr.length;
  }
  empty() {
    return this._arr.length === 0 ? 1 : 0;
  }
  front() {
    return this._arr.length === 0 ? -1 : this._arr[0];
  }
  back() {
    //console.log(this._arr[this._arr.length - 1])
    return this._arr.length === 0 ? -1 : this._arr[this._arr.length - 1];
  }
}

const queue = new Queue();
let ak = "";
let p = [];
let result = [];
for (let i = 1; i < input.length; i++) {
  p = input[i].split(" ");
  if (input[i].includes("push")) {
    ak = parseInt(p[1]);
  }
  switch (p[0]) {
    case "push":
      queue.push(ak);
      break;
    case "pop":
      result.push(queue.pop());
      break;
    case "size":
      result.push(queue.size());
      break;
    case "empty":
      result.push(queue.empty());
      break;
    case "front":
      result.push(queue.front());
      break;
    case "back":
      result.push(queue.back());
      break;
  }
}
console.log(result.join("\n"));
