# if문 단축표현식, 함수 호출와 참조

## if문 단축표현식

### 삼항 연산자
```
if (a > b) {
    x = true;
}
else {
    x = false;
}
```
이와 같은 if 문을 아래와 같이 바꿀 수 있습니다.

```
x = (a > b) ? true : false;
```

<br/>

### or 문 (파이프라인)

```
let target;
if(!target) { // target === undefined
    target = 0;
}
```
위와 같은 if문은 아래와 같이 바꿀 수 있습니다.

```
let target;
target = target || 0;
```

이는 `target`이라는 값이 있으면 `target` 이라는 값을 넣겠는데, 그게 아니라면 (없다면) `0`을 대입하겠다는 의미 입니다.
<br/>

자바스크립트에서 `null`과 `undefined`는 `false`입니다.

```
let target;
target = null;
target = target || 0;
```
return
```
0
```

<br/>

## 함수

```
function 함수명() {}
```

### 호출

함수를 호출할 때(콜할 때) 기본적으로 반환값이 있습니다.

```
function greeting() {
    return "hello world!";
}
greeting();
```
return
```
"hello world!"
```

리턴 명시적으로 호출하지 않게되면 반환값이 `undefined`로 됩니다.

```
function() greeting2() {
    aa = "hello world";
}
greeting2();
```

return
```
undefined
```

### 참조
괄호를 사용하지 않게 되면 참조하게 되는 것입니다.   
함수의 바디부분을 수행하려면 함수를 호출해 주어야 합니다.   
괄호를 쓰지 않고 함수명만 적게 되면 함수를 참조한다는 의미입니다.   

```
greeting
```
return
```
function greeting() {
    return "hello world!";
}
```
이렇게 함수를 참조할 수 있게 됩니다.   
함수를 변수에 할당을하게 되면 다른 이름으로 함수를 호출할 수 있게 됩니다.   
```
cost f1 = greeting;
f1();
```
return
```
"hello world!"
```
다른 언어에서 볼 수 없는 함수 참조 입니다.   

### 함수를 객체안에 포함
객체 안에는 여러개의 프로퍼티가 들어올 수 있습니다. 함수가 프로퍼티로 할당될 수 있습니다.

```
const o = {};
o.f1 = greeting;
console.log(o);
```
return
```
Object {f1: function}
```
`f1` 키와 `function` 값으로 쌍을 이루고 있는 프로퍼티가 오브젝트로 만들어 집니다.   
만약에 `f1`으로 접근하고 싶다면 접근 연산자를 사용합니다.   
<br/>

#### 객체 접근 연산자
##### 배열 연산자 []
##### 객체 접근 연산자 .
##### 프로퍼티 존재 연산자 in
##### 객체 생성 연산자 new
##### 확장 연산자 ...
##### 삭제 연산자 delete

<br/>

```
o.f1();
```
return
```
"hello world!";
```

<br/>

### 함수를 배열안에 포함

```
cosnt arr_3 = [1, 2, 3];
arr_3[1] = greeting;
arr_3[1](); //괄호 붙이기
```
return

```
"hello world!"
```

<br/>

```
console.log(arr_3);
```
return
```
(3)[1, function, 3]
```
기존에 있던 요소 `2`가 `greeting`이라는 `function`으로 바뀐 것을 볼 수 있습니다.

