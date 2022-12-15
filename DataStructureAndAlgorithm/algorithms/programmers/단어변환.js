function solution(begin, target, words) {
  if (!words.includes(target)) return 0;
  let count = 0;
  const needVisit = [[begin, -1]];
  const visited = new Array(words.length).fill(false);
  const wordLen = begin.length;

  while (needVisit.length) {
    const size = needVisit.length;
    for (let i = 0; i < size; i++) {
      const [word, index] = needVisit.pop();
      if (word === target) return count;
      // 하나만 바뀐 것 찾기
      const nextWords = words.reduce((arr, w, index) => {
        // 방문한 적 없고, 하나만 차이날 때
        // 하나만 차이난다는 것은 순서가 바뀌어도 같은 문자로 새면 안되는데...
        if (!visited[index]) {
          let matchNum = 0;
          for (let s = 0; s < w.length; s++) {
            if (w[s] === word[s]) matchNum++;
          }

          if (matchNum === wordLen - 1) arr.push([w, index]);
        }
        return arr;
      }, []);
      // 방문하지 않는 값은 visited true
      if (!visited[index] && index !== -1) visited[index] = true;

      // 다음 방문할 곳이 있다면 방문 예정
      if (nextWords.length) {
        // 만약 바뀐 값이 target이라면
        needVisit.unshift(...nextWords);
      }
    }
    count++;
  }

  return 0;
}
