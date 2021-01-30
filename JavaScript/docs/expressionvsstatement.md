# Expression과 Statement 차이

## Expression

Expression: 값을 산출해 내는 코드

```js
4;
("John");
myValue;
10 * 3;
myFunc();
```

## Statement

Statement: 특정 액션을 수행하는 코드
Statement는 값을 도출할 수 있으며, 이를 Expression Statement라고 한다.  
사실상 모든 코드 각 줄이 Statement이다.

즉, 모든 Expression은 Statement이지만, 모든 Statement가 Expression은 아니다.

## Expressiion Statement 차이

### Function Expression vs. Function Statement

둘의 차이는

- Hoisting: 변수인지 함수인지?

  hoisting은 함수를 작성하기 전에 함수를 호출해도 코드는 여전히 작동하는데, 이는 JS에서 컨텍스트 실행이 작동하는 방식 때문이다. Hoisting은 다른 데이터 타입 및 변수와도 작동하는데, 💥 변수는 선언하기전에 초기화 없이는 사용할 수 없다. 💥

```js
greet();

// Function Expression
const greet = function () {
  console.log("hello Expression");
};

// Function Statement
function greet() {
  console.log("hello Statement");
}

// 결과
// Function Expression는 hoisting 에러
// Uncaught ReferenceError: Cannot access 'greet' before initialization

// Function Statement는
// hello Statement 출력
```

### Arrow Function

화살표 함수를 쓸 때,

```js
(param1, param2, …, paramN) => { statements }
(param1, param2, …, paramN) => expression
// 다음과 동일함:  => { return expression; }
```

```js
// 화살표 함수의 유일한 문장이 'return'일 때 'return'과
// 중괄호({})를 생략할 수 있다.
elements.map((element) => element.length);
```

[참고](https://m.blog.naver.com/PostView.nhn?blogId=jdub7138&logNo=221028032624&proxyReferer=https:%2F%2Fwww.google.com%2F)
[참고](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/%EC%95%A0%EB%A1%9C%EC%9A%B0_%ED%8E%91%EC%85%98)
