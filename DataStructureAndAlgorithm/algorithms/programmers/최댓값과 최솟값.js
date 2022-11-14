function solution(s) {
  const sortedArr = s.split(" ").sort((a, b) => +a - b);
  return `${sortedArr[0]} ${sortedArr[sortedArr.length - 1]}`;
}
