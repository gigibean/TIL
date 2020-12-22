# Asynchronous

<b>index</b>

- [동기(Syncronous)와 비동기(Asynchronous)](#동기syncronous와-비동기asynchronous)
- [JS 기본 동작 방식](#js-기본-동작-방식)
  - [single-thread 인 JS가 비동기 처리할 수 있는 이유](#single-thread-인-js가-비동기-처리할-수-있는-이유)
- [비동기 처리 방법](#비동기-처리-방법)
  - [Callback function](#callback-function)
    - [콜백함수를 사용하는 이유](#콜백함수를-사용하는-이유)
    - [콜백함수 지양하는 이유](#콜백함수-지양하는-이유)
  - [Promise](#promise)
    - [Promise 만들기](#promise-만들기)
    - [Promise가 콜백을 구현하는 방식](#promise가-콜백을-구현하는-방식)
    - [reject와 catch()](#reject와-catch)
    - [Promise 상태값](#promise-상태값)
  - [Async/Await](#asyncawait)
    - [Async/Await 만들기](#asyncawait-만들기)
    - [Async 에러](#async-에러)
    - [Async/Await 와 Promise](#asyncawait-와-promise)
    - [Promise.all()](#promiseall)
    - [Promise.race()](#promiserace)
- [참고](#참고)

## 동기(Syncronous)와 비동기(Asynchronous)

<img src="https://i.imgur.com/hh3Mawr.png" alt="출처:https://learnjs.vlpt.us/async/">

- 동기: 요청을 보낸 후 해당 요청의 응답을 받아야 다음 동작을 실행하는 방식
- 비동기: 요청을 보낸 후 응답과 관계없이 다음 동작을 실행하는 방식

## JS 기본 동작 방식

<b>자바스크립트는 동기적 언어이다.</b>

- JS는 동기적이고, single-threaded 한 언어이다.
- 대신 JS는 비동기식으로 동작하도록 조작할 수 있는 방법이 있다.
  - [Callback function](#callback-function)
  - [Promise](#promise)
  - Async / Await

### single-thread 인 JS가 비동기 처리할 수 있는 이유

JS는 싱글스레드로 프로그램이 동작한다. 다중 스레드를 요구하는 멀티태스킹 작업인 비동기 처리방식을 어떻게 가능하게 하는 걸까?

JS는 웹 브라우저나 Node.js의 JS 엔진에서 실행된다. 이 엔진에는 JS를 돌리는 하나의 스레드가 존재한다.

그러나 이 엔진 뿐아니라 비동기식 처리 모델인 Web API라는 것이 함께 동작하면서 여기에서 setTimeout 이나 http 데이터를 가져오는 일들을 처리한다.

이 Web API가 JS 엔진 스레드와는 따로 비동기 처리를 하게 되고 콜백함수를 처리한 후 JS엔진으로 보낸다.

## 비동기 처리 방법

JS로 웹 개발을 하면 Ajax 같은 비동기 통신 JS 라이브러리를 사용하는 것이 거의 필수가 된 개발 방식이다. 이러한 비동기 데이터를 받는 프로그래밍을 하기 위해서는 비동기 처리하는 프로그래밍 방법을 알아야 한다.

아래 예시들에서 `setTimeout`을 많이 사용하는 이유는 비동기 데이터 통신(ajax 등)을 대체해서 시간을 미뤄서 비동기적으로 만든 것이다.

### Callback function

```js
function fn(callback) {
  // fn code..
  callback();
}

fn(() => {
  // callback code..
});
```

콜백 함수란 함수 타입의 값을 파라미터로 넘겨줘서 파라미터로 받은 함수를 특정 작업이 끝나고 호출하는 것을 의미한다.

#### 콜백함수를 사용하는 이유

콜백 함수에서 콜백을 받지 않는다면 콜백 함수의 과정이 끝나기도 전에 다음 프로세를 진행하게 되는 경우가 있다.

#### 콜백함수 지양하는 이유

콜백지옥이라는 다중 중첩된 콜백 함수로 가독성이 떨어지는 코드가 만들어질 수 있는 가능성이 높아지기 때문이다.

es6에서는 promise를, es8에서는 async와 await를 지원한다.

### Promise

서버에서 데이터를 가져오는 함수를 간단히 구현한 예시이다.

```js
function getData(data) {
  return new Promise(function (resolve, reject) {
    ajax(url + "javascript/" + data, function (response) {
      resolve(response);
    });
  });
}
```

비동기 작업을 좀 더 편하게 처리할 수 있도록 es6에 도입된 기능이다.  
이전에는 비동기 작업을 처리할 때에는 콜백함수로 처리를 했고, 이는 콜백지옥에 빠져 코드가 가독성이 떨어질 수 있다.  
Promise를 사용하면 코드의 깊이가 깊어지는 콜백지옥 현상을 방지할 수 있다.

#### Promise 만들기

```js
// 화살표 함수
const myPromise = new Promise((resolve, reject) => {});

const myPromise = new Promise(function (resolve, reject) {});
```

Promise는 성공할 수도 있고, 실패할 수도 있다. 성공할 때는 `resolve`를 호출해주면 되고, 실패할 때는 `reject`를 호출해주면 된다.

```js
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1);
  }, 2000);
});

myPromise.then((result) => {
  console.log(result); // 1
});
```

`resolve`를 호출할 때 특정 값을 파라미터로 넣어주면 `resolve(1)` 이 값(`1`)을 작업이 끝나고 나서도 사용할 수 있다.  
작업이 끝나고나서 또 다른 작업을 할 때에는 `.then`메서드를 사용하면 된다.

#### Promise가 콜백을 구현하는 방식

`.then` 으로 여러개의 promise를 연결해서 사용할 수 있다. 이 메서드를 호출하면 새로운 promise 객체가 반환된다.

```js
new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve(1);
  }, 2000);
})
  .then(function (result) {
    console.log(result); // 1
    return result + 10;
  })
  .then(function (result) {
    console.log(result); // 11
    return result + 20;
  })
  .then(function (result) {
    console.log(result); // 31
  });
```

위의 예시와 같이 then 메서드를 호출해서 새로운 프로미스 객체를 반환 받고 이는 result 라는 파라미터에 전달된다.  
이렇게 then 메서드로 이어서 비동기 작업을 순차적으로 처리할 수 있게 된다.  
콜백함수보다 직관적이기 때문에 많이 사용하나, polyfill등의 라이브러리 없이 익스플로러에서는 동작하지 않는다.

#### reject와 catch()

promise를 실패하게 해본다면

```js
new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error());
  }, 1000);
})
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
```

실패하는 상황에서는 `reject`를 사용하고, `.catch` 메서드를 사용해서 실패했을 때 수행할 작업을 설정할 수 있다.

#### Promise 상태값

Promise 객체는 new 키워드로 생성할 수 있으며 총 4개의 상태 값을 가진다.

1. pending: 아직 결과 값이 반환되지 않은 진행 중인 상태

2. settled: 결과 값이 성공 혹은 실패로 반환된 상태 (한번 setteld된 값은 재실행 할 수 없다.)

fulfilled : 성공  
rejected : 실패

### Async/Await

es8에 해당하는 문법으로 Promise를 더욱 쉽게 사용할 수 있게 해준다.

프로미스로 제공하던 함수들을 더 간결하고 직관적이게 실행할 수 있게 된다.

```js
async function getUserInfo() {
  let userInfo = await userCollection.find({});
  console.log("await 다음에 오는 콘솔", userInfo);
}
```

위 코드는 몽고디비에서 유저 정보를 가져오는 비동기 함수이다.

function앞에 async로 이어진 함수들 안에 await이란 코드를 달면 코드를 진행하다 멈추고 그 await 코드가 끝이난 뒤에 그 다음 작업을 실행하게 된다. 여기서 await을 기다렸다가 정보를 받아온뒤에 밑의 코드를 실행하는 것이다.

만약 await을 안붙인다면 데이터를 다 받아오기도 전에 밑 코드로 넘어갈 것이고 콘솔에는 undefine만 뜨게 될 것이다.

#### Async/Await 만들기

함수를 선언할 때 함수 앞부분에 `async` 키워드를 붙여야한다. 그리고 `Promise` 앞부분에 `await`를 붙여주면 해당 `Promise`가 끝날 때까지 기다렸다가 다음 작업을 수행할 수 있다.  
함수에서 `async`를 사용하면 해당 함수는 결과값으로 `Promise`를 반환한다.

```js
function sleep(ms) {
  return new Promise((resolove) => setTimeout(resolve, ms));
}

async function process() {
  console.log("hi");
  await sleep(1000); // 1 초 쉬고
  console.log("done");
}

process().then(() => {
  console.log("bye");
});
```

#### Async 에러

`async` 함수에서 에러를 발생시킬 때는 `throw`를 사용하고, 에러를 잡아낼 때는 try, catch 문을 사용한다.

```js
function sleep(ms) {
  return new Promise((resolove) => setTimeout(resolve, ms));
}

async function makeError() {
  await sleep(1000);
  const error = new Error();
  throw error; // 에러 발생
}

async function process() {
  try {
    await makeError();
  } catch (e) {
    console.error(e);
  }
}
process();

// 결과
// Error
```

#### Async/Await 와 Promise

async function 선언은 AsyncFunction 객체를 반환하는 하나의 비동기 함수를 정의한다. 비동기 함수는 이벤트 루프를 통해 비동기적으로 작동하는 함수로 암시적으로 Promise를 사용하여 결과를 반환한다.
비동기 함수를 사용하는 코드의 구문과 구조는 포준 동기 함수를 사용하는 것과 많이 비슷하다.

`async/await` 는 `Promise`를 대체하는 것이 아니라는 것에 유념해야 한다.
`Promise`를 사용하지만, `then`, `catch` 메서드를 사용하여 컨트롤을 하는 것이 아닌, 동기적 코드처럼 변환 값을 변수에 할당하여 작성할 수 있게끔 도와주는 문법이다.

```js
function promise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("result");
    }, 1000);
  });
}

async function asyncCall() {
  try {
    console.log("before await");
    const result = await promise();
    console.log("after await");
  } catch (e) {
    console.error(e); // error handling
  }
}

asyncCall();

// 출력
// 'before await'
// 'result'
// 'after await'
```

```js
console.log(0);

function promise() {
  console.log(1);

  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(2);
      resolve("result");
    }, 1000);
  });
}

console.log(3);

async function asyncCall() {
  try {
    console.log(4);

    const result = await promise(); // Promise가 settled될 때까지 기다린 후 resolve된 값을 항당한다.

    console.log(result);
    console.log(5);
  } catch (e) {
    console.erre(e); // error 발생시 catch 블락에 잡히도록 handling
  }
}

console.log(6);

asyncCall();

// 출력
// 0
// 3
// 6
// 4
// 1
// 2
// 'result'
// 5
```

비동기 상황에서는 어떤 이벤트가 먼저 완료될지 순서가 불명확한데 `async await` 사용시 먼저 완료되어야할 이벤트들을 순서대로, 동기적으로 실행되는 코드처럼 작성할 수 있다.

> 실제 코드를 작성할 때에는 axios나 fetch를 통해 ajax 요청하면 자동으로 Promise를 반환해주기 때문에 Promise 객체를 직접 생성하는 경우보다 Promise로 반환되는 객체들을 aynce await을 사용하여 비동기 처리하는 경우가 대부분이었다. 그래도 어째든 이전에 Promise의 구동 방식을 알고 있어야 사용 할때에도 그 흐름을 알 수 있다.

#### Promise.all()

여러 비동기 처리를 한번에 작업을 시작하고 싶을 때 `Promise.all`을 사용한다.

```js
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const getDog = async () => {
  await sleep(1000);
  return "멍멍이";
};

const getCat = async () => {
  await sleep(500);
  return "냐옹이";
};

const getBird = async () => {
  await sleep(3000);
  return "짹짹이";
};

async function process() {
  const dog = await getDog();
  console.log(dog);
  const cat = await getCat();
  console.log(cat);
  const birt = await getBird();
  console.log(bird);
}
process();
```

위 코드에서 각 함수들이 (getDog -> getCat -> getBird 순)동기적으로 실행되고 있기 때문에 총 4.5초가 걸린다.

그러나 동시에 작업을 시작하고 싶다면 `Promise.all`을 사용하면 된다.

```js
// ...
async function process() {
  const results = await Promise.all([getDog(), getCat(), getBird()]);
  console.log(results);
}

process()[
  // 출력
  ("멍멍이", "냐옹이", "짹짹이")
];
```

또 여기서 배열 비구조화 할당 문법을 사용하면 각 결과 값을 따로 추출해서 조회할 수도 있다.

```js
//  ..
async function process() {
  const [dog, cat, bird] = await Promise.all([getDog(), getCat(), getBird()]);
  console.log(dog);
  console.log(cat);
  console.log(bird);

  // 출력
  // '멍멍이'
  // '냐옹이'
  // '짹짹이'
}
```

`Promise.all` 를 사용할 때는 등록한 프로미스 중 하나라도 실패하면 모든 게 실패한 것으로 간주 된다.

#### Promise.race()

`Promise.all`와 달리 여러개의 프로미스를 등록해서 실행했을 때 가장 빨리 끝난 것 하나만 결과값으로 가져온다.

```js
async function process() {
  const first = await Promise.race([getDog(), getCat(), getBird()]);
  console.log(first);
}
// 출력
// '냐옹이'
```

`Promise.race`는 반환되는 값만 에러를 발생시키고 다른 값들의 에러는 무시된다.

---

## 참고

[vlpt.us](https://learnjs.vlpt.us/async/)  
[velog.io/@jiwon](https://velog.io/@jiwon/Javascript%EB%8A%94-%EB%8F%99%EA%B8%B0%EC%9D%BC%EA%B9%8C-%EB%B9%84%EB%8F%99%EA%B8%B0%EC%9D%BC%EA%B9%8C)  
[velog.io/@yejinh](https://velog.io/@yejinh/%EB%B9%84%EB%8F%99%EA%B8%B0-%ED%8C%8C%ED%97%A4%EC%B9%98%EA%B8%B0)  
[blog.metafor.kr](https://blog.metafor.kr/164)  
[blog.naver.com/dndlab](https://m.blog.naver.com/dndlab/221783285664)
