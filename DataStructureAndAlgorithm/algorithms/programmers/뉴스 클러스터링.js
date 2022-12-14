const strToArr = (str) => {
  const arr = [];
  const splitedStr = str.toUpperCase().split("");
  for (let i = 0; i < str.length - 1; i++) {
    const tmp = `${splitedStr[i]}${splitedStr[i + 1]}`;
    if (/[A-Z]{2}/g.test(tmp)) {
      arr.push(tmp);
    }
  }
  return arr;
};
const arrToObj = (arr) => {
  const obj = {};
  arr.reduce((acc, cur) => {
    if (cur in acc) acc[cur]++;
    else acc[cur] = 1;
    return acc;
  }, obj);
  return obj;
};
function solution(str1, str2) {
  // 두 글자로 끊기 (공백, 특수문자, 숫자 포함쌍은 버린다)
  const arr1 = strToArr(str1);
  const arr2 = strToArr(str2);
  // A B 모두 공집합인 경우 return 1

  if (arr1.length === 0 && arr2.length === 0) return 65536;
  if (arr1.length === 0 || arr2.length === 0) return 0;

  // 교집합 찾기
  const obj1 = arrToObj(arr1);
  const obj2 = arrToObj(arr2);

  let interObj = {};
  Object.keys(obj1).forEach((item) => {
    if (obj2[item]) {
      interObj[item] = obj1[item] > obj2[item] ? obj2[item] : obj1[item];
    }
  });
  const inter = Object.values(interObj).reduce((acc, cur) => acc + cur, 0);

  // 합집합 찾기
  let unionObj = obj1;
  Object.keys(obj2).forEach((item) => {
    if (Object.keys(unionObj).includes(item)) {
      unionObj[item] =
        unionObj[item] < obj2[item] ? obj2[item] : unionObj[item];
    } else {
      unionObj[item] = obj2[item];
    }
  });
  const union = Object.values(unionObj).reduce((acc, cur) => acc + cur, 0);

  // J(A,B) = (교집합 / 합집합) * 65536 후 소숫점 버린 정수 출력
  if (inter === 0 && union === 0) return 65536;
  const jakad = inter / union;
  const ans = Math.floor(jakad * 65536);
  return ans;
}
