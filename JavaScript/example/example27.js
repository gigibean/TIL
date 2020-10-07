// 중첩 배열 펼치기 flatten
const flattened = [[0,1], [2, 3], [4, 5]].reduce(
    (accumulator, currentValue) => accumulator.concat(currentValue),[]
)

console.log(flattened);

const flattened2 = [[0, 1, [2]], [3, 4, [5]]].reduce(
    (accumulator, currentValue) => accumulator.concat(currentValue), []
)

console.log(flattened2);

// [ 0, 1, [ 2 ], 3, 4, [ 5 ] ]

const s = flattened2.reduce(
    (accumulator, currentValue) => accumulator.concat(currentValue), []
)

console.log(s);

// [ 0, 1, 2, 3, 4, 5 ]