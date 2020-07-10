# 스코프
전역, 지역 변수가 선언된 위치를 결정하는 용어로 사용이 됩니다.   
전역 변수는 선언이되고 사용되는 위치에 따라서 모든 곳에서 사용할 수 있는 변수이고, 지역변수는 특정한 부분에서 사용할 수 있는 변수로 이해할 수 있습니다.   
블럭 내에 선언된 변수는 대체로 블럭이 끝나는 부분까지만 사용할 수 있게 됩니다. 이러한 범위를 스코프라고 합니다.     
변수나 상수 혹은 매개변수 등이 언제 어디서 정의되는지 따라서 스코프가 결정됩니다.      
<br/>

```
function f(i) {
    return i + 1;
}

f(5);
i;
```

```
i is not defined
```

함수 `f(i)`라는 범위 내에서만 사용할 수 있는 `i` 

변수를 선언할 때 `let`이나 `const` 로 변수를 생성하지 않으면 해당 변수는 생성되지 않은 것 입니다.   


```
function f4() {
    console.log('one');
}

function f5() {
    console.log('two');
}

f5();
f4();
f5();
```

호출을 할 때 알 수 있는 것이 아니라 정의를 할 때 스코프의 범위를 알 수 있습니다. `f4()`가 선언된 다음 `f5()`가 선언되었고 이를 정적 스코프라고 합니다. 그후에
실제도 동작을 할 때는 동적으로 실행되게 되어 동적인 코드라고 합니다.

```
const x = 3;
function f6() {
    console.log(x);
    console.log(y);
}

{
    const y = 10;
    f6();
}
```

result
```
3
Uncaught ReferenceError: y is not defined
```

`const y = 10;` 이라고 지정하고 `f6()`를 호출했지만 `y`값은 정의되지 않았다고 뜹니다. 그 이유가 무엇일까요?     
`x`는 위에서 전역변수처럼 정의되어있기 때문에 `f6()`에서 사용될 수 있는 것입니다. 그리고 `y`는 함수 내에서만 선언이 되어 있고, 또다른 스코프 내에서 `y`를 정의를 해주었습니다. 이때 f6()를 호출할 때 `y`를 사용할 수 없는데, 그 이유는 자바스크립트에서 정적 스코프를 사용할고 있기 때문입니다. `y`가 다른 스코프에 존재하는데, 그 스코프내에서 함수를 호출하더라도, 정의가 될때 선언된 `x`에는 접근할 수 있지만 호출할 때 선언된 식별자에는 접근할 수 없습니다.    
이렇듯 자바스크립트는 스코프가 정적이고 정의될 때만 식별자를 인식할 수 있습니다. 또 호출할 때는 동적으로 코드가 만들어집니다.       
`x`는 전역스코프로 모든 영역에서 사용될 수 있습니다. 이렇게 전역 스코프에서 사용할 수 있는 변수를 전역변수라고 합니다.      

```
let name = "John";
let age = 20;
function greeting() {
    console.log(`Hello, ${name}`);
}
function getBirthYear() {
    return new Date().getFullYear() - age;
}
greeting();
getBirthYear();
```

result
```
Hello, John
2000
```

`name`과 `age`가 전역변수로 사용되어가져옵니다.     
이런 것들은 대부분 객체로 사용되면 효율적입니다.

```
let user = {
    name : "John",
    age: 23,
};
function greeting() {
    console.log(`Hello, ${user.name}`);
}
function getBirthYear() {
    return new Date().getFullYear() - user.age;
}
greeting();
getBirthYear();
```
result
```
Hello, John
1997
```

함수들이 `user`라는 객체에 의존적이지 않게 사용하는 방법은 `user`라는 객체는 매개변수로 사용하는 것이 있습니다. 

```
function greeting(user) {
    console.log(`Hello, ${user.name}`);
}
function getBirthYear() {
    return new Date().getFullYear - user.age;
}
```

이렇게 만들어 놓으면 전역변수에 의존적이지도, 객체에 의존적이지도 않게 됩니다.      


```
console.log('before block');
{
    console.log('inside block');
    const x = 100;
    console.log(x);
}
console.log(`outside block; x = ${x}`);
```
result
```
inside block
100
Uncaught ReferenceError: x is not defined
```
`x`는 `inside block` 범위 내에서만 사용가능합니다.

```
{
    let x = 'red';
    console.log(x);
    {
        let x = 300;
        console.log(x);
    }
    console.log(x);
}
console.log(x);
```
result
```
red
300
red
Uncaught ReferenceError: x is not defined
```
위 결과와 같이 `200`이 들어있는 `x`를 블록 내에서 사용할 수 있는 것을 볼 수 있습니다. 반대로 `red` 값을 가지고 있는 `x`는 숨겨졌습니다.
이런 것을 `변수 숨김`이라고 합니다. 두개의 `x`가 모두 스코프 내에 있지만, 외부 스코프 내에 있는 `x`를 내부 스코프 내에 있는 변수 `x`가 가리고 있는 것이라고 볼 수 있습니다.

```
{
    let x = { color : 'red' };
    let y = x;
    let z = 100;
    { //외부 블록을 숨기는 블록
        let x = 50;
        console.log(x); //50
        console.log(y.color); //red
        y.color = 'green';
        console.log(z); //100
    }
    console.log(x.color); //green
    console.log(y.color); //green
    console.log(z); //100
}
```
result
```
50
red
100
green
green
100
```

계층적인 스코프의 구조를 나타내는 예시 입니다.