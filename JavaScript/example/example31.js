// 함수 ㄱ성을 위한 파이프 함수

const double = x => x + x;
const triple = x => 3 * x;
const quadruple = x => 4 * x;

const pipe = (...functions) => input =>  functions.reduce (
    (
        (acc, fn) => fn(acc)
    ),
    input
);

const multiply6 = pipe(double, triple);
const multiply9 = pipe(triple, triple);
const multiply16 = pipe(quadruple, quadruple);
const multiply24 = pipe(double, triple, quadruple);

// Usage
multiply6(6); // 36
multiply9(9); // 81
multiply16(16); // 256
multiply24(10); // 240