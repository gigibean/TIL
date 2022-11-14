function solution(str) {
  return str.toLowerCase().replace(/\b([a-z])/g, (m) => m.toUpperCase());
}
