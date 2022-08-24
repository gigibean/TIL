function solution(numbers) {
  var answer = 0;
  const set = new Set();
  function recursive(combo, rest) {
    if (combo) {
      const numCom = +combo;
      if (numCom !== 0 && numCom !== 1) set.add(numCom);
    }
    for (let i = 0; i < rest.length; i++) {
      recursive(`${combo}${rest[i]}`, [
        ...rest.slice(0, i),
        ...rest.slice(i + 1),
      ]);
    }
  }
  function isSosu(num) {
    for (let i = 2; i * i <= num; i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
  recursive("", numbers);
  for (let item of set) {
    if (isSosu(item)) answer += 1;
  }
  return answer;
}
