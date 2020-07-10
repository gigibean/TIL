# 함수 매개변수

함수 정보 전달하는 수단으로 변수를 이용합니다.
이때 이 변수를 매개변수라고 합니다.
매개변수는 argument 혹은 parameter 라고 합니다.   
함수를 정의할 때, `function aa(x,y){} //()안에 들어가는 것이 매개변수입니다`   

함수를 호출할 때 `aa(5, 10)` 이라고 하면 5->x 에 10->y에 전달됩니다.   

이 때, x와 y를 `formal agrument` 라고 합니다. 정해진 매개변수는 값을 받아서 실제 매개변수가 됩니다.

```
function avr(a, b) {
    return (a + b) / 2;
}
```

```
avg();
```
return
```
NaN
```
값을 받지 않으면 `NaN`이 반환됩니다.

<br/>

```
avg(23,31);
```
return
```
27
```

<br/>

a와 b는 함수의 바디 안에서만 사용될 수 있습니다. 
함수 밖에서 사용하는 a와 b는 다른 변수입니다.

```
const pp1 = 5, pp2 = 6;
avg(pp1, pp2);
```
return
```
5.5
```
여기서 위에서 선언한 pp1과 pp2는 함수의 매개변수로 사용된 pp1과 pp2와는 다른 매개변수입니다. 이름은 같지만 다른 매개변수입니다.
함수를 호출하게 되면 해당 변수 자체를 전달받는 것이 아니라 값만 전달받는 것입니다.

```
function ff(x) {
    console.log(`ff의 내부 : x = ${x}`);
    x = 10;
    console.log(`ff의 내부: x = ${x} (할당 후)`);
}
```

<br/>

```
ff(5);
```

return
```
ff의 내부: x =5
ff의 내부: x = 10 (할당 후)
```
<br/>

```
console.log(x);
```
return
```
5
```
위와 같이 함수 밖에 있는 x는 함수내에서 값이 바뀌었어도 함수밖을 나오면 값이 달라지지 않을 것을 알 수 있습니다.
함수안에서 객체를 변경하면 함수밖에서도 변경됩니다.

```
function ff1(oo) {
    oo.message = `ff1 안에서 수정함 (이전 값: '${oo.message}')`;
}

let oo = {message : '초기설정 값'};

console.log(`ff함수를 호출하기전 : oo.message = "${oo.meassage}"`);

ff1(oo);

console.log(`ff함수를 호출한 다음 : oo.message = "${oo.message}"`);
```

return

```
ff함수를 호출하기 전: oo.message = "초기 설정 값"

ff함수를 호출한 다음 : oo.message = "ff1 안에서 수정함 (이전 값: '초기 설정 값')"
```

객체는 함수안에서 수정된 내용도 함수 밖에서도 반영됩니다.   
함수 안에 있는 객체와 밖에 있는 것는 서로 또 다른 객체입니다.   

```
function f2(oj) {
    oj.message = "f2에서 수정함";
    oj = {
        message : "new 객체"
    };
    console.log(`f2 내부: oj.message = "${oj.message}" (할당후)`);
}
let oj = {
    message: "초기값 설정"
};
console.log(`f2함수를 호출하기전 : oj.message = "${oj.message}"`);
f2(oj);
console.log(`f2함수를 호출한 다음: oj.message="${oj.message}"`);
```

return
```
f2함수를 호출하기전 : oj.message = "초기값 설정"
f2 내부: oj.message = "new 객체" (할당후)
f2함수를 호출한 다음: oj.message="f2에서 수정함"
```