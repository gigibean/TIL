function solution(n, works) {
  works.sort((a, b) => b - a);
  let last = works.length - 1;
  for (let i = 0; i < works.length - 1; i++) {
    const left = (works[i] - works[i + 1]) * (i + 1);
    if (left <= n) {
      n -= left;
    } else {
      last = i;
      break;
    }
  }
  const restWorks = [
    ...new Array(last + 1).fill(works[last]),
    ...works.slice(last + 1),
  ];
  for (let i = 0; i < n; i++) {
    const max = Math.max(...restWorks);
    if (max === 0) return 0;
    const maxIndex = restWorks.indexOf(max);
    restWorks[maxIndex] -= 1;
  }
  return restWorks.reduce((acc, cur) => acc + cur ** 2, 0);
}
