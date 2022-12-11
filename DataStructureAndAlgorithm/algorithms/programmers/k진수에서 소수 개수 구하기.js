const isPrime = (num) => {
  if (num === 1) return false;
  if (num === 2) return true;
  for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
    if (num % i === 0) return false;
  }
  return true;
};

const changeArithmetic = (num, arith) => num.toString(arith);

const findMatchedNums = (num) => {
  const reg = /(?<=0)([1-9]+)(?=0)|^([1-9]+)(?=0)|(?<=0)([1-9]+)$|^([1-9]+)$/g;
  const matchedNums = num.match(reg);
  return matchedNums;
};

function solution(n, k) {
  let ans = 0;
  // 진법 변환
  const arithmetic = changeArithmetic(n, k);

  // 조건에 맞는 수 구하기
  const matchedNum = findMatchedNums(arithmetic);

  // 조건 맞는 수가 소수 인지 판별
  matchedNum.forEach((item) => {
    if (isPrime(+item)) ans += 1;
  });

  return ans;
}
