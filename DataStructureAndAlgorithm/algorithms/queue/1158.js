const fs = require("fs");
const input = (process.platform === "linux"
  ? fs.readFileSync("/dev/stdin").toString()
  : `3 1`
)
  .split(" ")
  .map((x) => +x);

class Queue {
  constructor(len, x) {
    this._arr = [];
    this._len = len;
    this._x = x;
    for (let i = 1; i <= this._len; i++) {
      this._arr.push(i);
    }
  }
  size() {
    return this._arr.length;
  }
  fpop() {
    return this._arr.shift();
  }
  goback() {
    let x = this._x - 1;
    while (x > 0) {
      let f = this._arr.shift();
      this._arr.push(f);
      x--;
    }
  }
}

const queue = new Queue(input[0], input[1]);
let result = [];
let len = queue.size();
while (len > 0) {
  queue.goback();
  result.push(queue.fpop());
  len--;
}
console.log(`<${result.join(", ")}>`);
