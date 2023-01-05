function solution(a) {
  a.sort();
  for (let i = 0; i < a.length - 2; i += 2) {
    if (a[i] !== a[i + 1]) {
      return a[i];
    }
  }
  return a[a.length - 1];
}
