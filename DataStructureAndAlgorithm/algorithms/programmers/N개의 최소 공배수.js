function solution(arr) {
  if (arr.length === 1) return arr[0];
  arr.sort((a, b) => a - b);
  const gcd = (a, b) => {
    while (b !== 0) {
      let r = a % b;
      a = b;
      b = r;
    }
    return a;
  };

  const lcmf = (a, b) => (a * b) / gcd(a, b);
  let lcm = lcmf(arr[0], arr[1]);
  if (arr.length === 2) return lcm;
  for (let i = 2; i < arr.length; i++) {
    lcm = lcmf(lcm, arr[i]);
  }
  return lcm;
}

// https://school.programmers.co.kr/learn/courses/30/lessons/12953
