function solution(m, musicinfos) {
  // 길이를 반환하는 함수
  const makeLength = (start, end) => {
    const [sh, sm] = start.split(":").map((x) => +x);
    const [eh, em] = end.split(":").map((x) => +x);
    let len = 0;
    if (eh - sh > 0) len += (eh - sh) * 60;
    len += em - sm;
    return len;
  };
  // 매핑 #을 소문자로
  const mappingCodes = (strArr) => {
    return strArr.reduce((arr, cur, idx) => {
      if (cur === "#") arr[arr.length - 1] = arr[arr.length - 1].toLowerCase();
      else arr.push(cur);
      return arr;
    }, []);
  };
  // 길이로 음악문자열 생성 함수
  const makeMusic = (len, str) => {
    if (len + 1 === str.length) return str;
    const strArr = [...str];
    // 매핑 #을 소문자로
    const codesArr = mappingCodes(strArr);
    // str.length 와 비교하는 len 은 +1 해주어야 한다
    if (len + 1 < str.length) return codesArr.slice(0, len).join("");
    else {
      // len > str.length
      const repeatTime = Math.trunc(len / codesArr.length);
      const restDiff = len % codesArr.length;
      if (repeatTime > 0) str = codesArr.join("").repeat(repeatTime);
      for (let i = 0; i < restDiff; i++) {
        str += codesArr[i];
      }
      return str;
    }
  };
  // 공통 부분 확인 함수
  const isMatchSong = (m, p) => {
    if (m.length > p.length) {
      const reg = new RegExp(`^${p}[a-zA-Z]+$`);
      return reg.test(m);
    } else if (m.length < p.length) {
      const reg = new RegExp(`^[a-zA-Z]*${m}[a-zA-Z]*$`);
      return reg.test(p);
    } else {
      return m === p;
    }
  };
  const candidates = [];
  const indecis = [];
  for (let i = 0; i < musicinfos.length; i++) {
    m = mappingCodes([...m]).join("");
    const [start, end, name, codes] = musicinfos[i].split(",");
    const length = makeLength(start, end);
    const music = makeMusic(length, codes);
    console.log(music);
    const isMatch = isMatchSong(m, music);
    if (isMatch) {
      candidates.push(length);
      indecis.push(i);
    }
  }
  if (!candidates.length) return "(None)";
  const max = Math.max(...candidates);
  const index = indecis[candidates.indexOf(max)];
  if (max > 0 && candidates.indexOf(max) >= 0)
    return musicinfos[index].split(",")[2];
  else return "(None)";
}
