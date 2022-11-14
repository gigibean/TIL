function solution(str) {
  return str.toLowerCase().replace(/(\s[a-z]|^[a-z])/g, (m) => m.toUpperCase());
}
