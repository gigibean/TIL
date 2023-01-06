function solution(a) {
  // - - +
  // + + +
  a.sort((a, b) => a - b);
  const pro1 = a[0] * a[1] * a[a.length - 1];
  const pro2 = a.slice(a.length - 3).reduce((acc, cur) => acc * cur, 1);
  return pro1 > pro2 ? pro1 : pro2;
}
