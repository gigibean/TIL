// 배열의 중복 항목 제거

let arr = [1, 2, 1, 2, 3, 5, 4, 5, 3, 4, 4, 4, 4];
// let arr = [40, 40, 20, 1, 10];

let result = arr.sort().reduce((accumulator, current) => {
    const length = accumulator.length;
    if(length === 0 || accumulator[length - 1] !== current) {
        accumulator.push(current);
    }
    return accumulator;
}, []);

console.log(result);
