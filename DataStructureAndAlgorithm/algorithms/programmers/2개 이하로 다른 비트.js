function solution(numbers) {
  return numbers.map((number) => {
    let number2 = number.toString(2);
    let y = Number.MAX_VALUE;
    let z = Number.MAX_VALUE;
    let result = 0;
    if (number2.indexOf("01") !== -1) {
      const changedBit = number2.lastIndexOf("01");
      y =
        number2.substring(0, changedBit) +
        "10" +
        number2.substring(changedBit + 2);
    }
    if (number2.indexOf("0") !== -1) {
      const changedBit = number2.lastIndexOf("0");
      z =
        number2.substring(0, changedBit) +
        "1" +
        number2.substring(changedBit + 1);
    }
    result = y > z ? z : y;
    if (number2.indexOf("0") === -1) {
      result = "10" + "1".repeat(number2.length - 1);
    }
    return parseInt(result, 2);
  });
}

// function func(b) {
//   // const b = 262143
//   const a = b.toString(2);
//   console.log(a);
//   let f = 0;
//   let y = Number.MAX_VALUE;
//   let z = Number.MAX_VALUE;
//   if (a.indexOf("01") !== -1) {
//     const changedBit = a.lastIndexOf("01");
//     console.log(changedBit);
//     y = a.substring(0, changedBit) + "10" + a.substring(changedBit + 2);
//   }
//   if (a.indexOf("0") !== -1) {
//     const changedBit = a.lastIndexOf("0");
//     z = a.substring(0, changedBit) + "1" + a.substring(changedBit + 1);
//   }
//   f = y > z ? z : y;
//   if (a.indexOf("0") === -1) {
//     f = "10" + "1".repeat(a.length - 1);
//   }
//   console.log(f, parseInt(f, 2));
//   // const c = "1111"
//   // console.log(parseInt(c, 2))

//   let d = b;
//   while (true) {
//     d += 1;
//     let d2 = d.toString(2);
//     let count = 0;
//     let a2 = a.padStart(d2.length, "0");
//     for (let i = 0; i < d2.length; i++) {
//       if (d2[i] !== a2[i]) count++;
//       if (count > 2) break;
//     }
//     if (count > 0 && count <= 2) {
//       console.log(d2, d);
//       return d;
//     }
//   }
// }

// console.log(func(15));
