function solution(msg) {
  const ans = [];
  const alpha = [
    null,
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  let i = 0;
  while (msg.length > i) {
    let tmp = msg[i];
    for (let j = i + 1; j < msg.length; j++) {
      if (alpha.includes(tmp + msg[j])) {
        tmp += msg[j];
        i = j;
      } else break;
    }
    ans.push(alpha.indexOf(tmp));
    i += 1;
    alpha.push(tmp + msg[i]);
  }
  return ans;
}
