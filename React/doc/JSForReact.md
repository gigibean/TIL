# JS for React
React 를 위한 JS를 정리해봅니다. react를 위한 더 자세한 자바스크립트 문법을 보시려면 EAMAScript6 문서를 참고해주세요 ::smile::

## Map and Filter

### Map
다른 언어 중 파이썬 같은 경우, 배열의 조각된 값을 리턴하려면

```
arr = [1,2,3,4,5,7];

arr_2 = [i*2 for i in arr];
```

위와 같이 해주었습니다. 자바스크립트에서는 이런 기능을 대신하는 것이 `map()`입니다.

```
arr_map = arr.map(value => value*2);

```

return
```
[ 2, 4, 6, 8, 10, 14 ]
```


이처럼 `map()`을 이용해서 `value`와 `return` 을 넣어주면 그에 따라 배열값을 반환합니다.

<br/>

### Filter
`filter()`는 어떤 조건을 주고 조건을 만족하는 값을 반환하는 메서드입니다.

```
arr_filter = arr.filter(v => v > 4);
```
return
```
[ 5, 7 ]
```
이처럼 `filter()`는 `return` 에 쓴 조건에 만족하는 값을 반환하는 메서드고, 배열을 반환합니다.

# CLass

기존 다른 언어 중 파이썬 같은 경우에는 클래스를 생성할 때

```
class Example {
    __init__{...}
}
```
위와 같이 사용합니다.       
그러나 자바스크립트 같은 경우

```
class Example {
    constructor() {...}
}
```
로 생성자를 생성합니다. 

`class`는 기본적으로 생성자 프로퍼티, 추가적으로 get, set 함수등을 포함하며, 이 `class`로 객체를 `new` 를 사용하여 생성합니다. 그리고 `class`내에 있는 프로퍼티와 메서드들을 객체를 통하여 호충할 수 있습니다.

## 상속

부모의 프로퍼티를 가져다 사용할 수 있습니다. 또한 부모를 상속한다, 확장한다는 의미에서
`extends` 와 부모클래스의 이름을 적어주셔야 합니다.

```
class Person {
    setAge(age) {
        this.age = age;
    }
    getAge() {
        console.log("I'm " + this.age);
    }
}

class User extends Person {
    constructor(name) {
        super();
        this.name = name;
    }
    ...
```
위와 같이 상속을 받을 때는 `super()` 를 써주어야 합니다.

```
class Person {
    constructor(age) {
        this.age = age;
        
    }
    printInfo() {
        console.log("I'm " + this.name + "and " + this.age);
    }
}

class User extends Person {
    constructor(name, age) {
        super(age);
        this.name = name;
    }
    getName() {
        console.log("I'm " + this.name);
    }
}
```
상속 첫번째 예시처럼 `constructor`를 만들지 않으면 자동으로 생성됩니다.
하지만 `constructor`를 직접 생성해야 한다면, 부모에서 생성한 `constructor`의 파라미터를 자식 클래스의 생성자의 파라미터에도 써주셔야 합니다. `super()` 또한 부모 `constructor`의 파라미터를 적어주셔야 합니다. 이는 `super()`가 부모 `constructor`의 input이기 때문입니다.      
그리고 당연하게도 객체를 생성할 때도 두 인자 모두 채워주셔야 합니다.        
그리고 재미있는 것은 자식 클래스의 프로퍼티 또한 부모 클래스에서도 사용할 수 있습니다. ::star::

## 비동기성 동기성
비동기는 모든게 절차적으로 실행되진 않습니다. 실행되고 있으면, 결과가 오기전에 다른 코드도 실행할 수 있습니다. 

```
setTimeout(() => {console.log("hello wolrd")}, 2000)
console.log("bye world");
```
이런 코드가 있다면 어떤 것이 먼저 출력될 것 같나요?
앞에 있는 `hello world`가 2초 뒤에 출력된 다음, `bye world`가 실행될 것 이라고 예상하실 수 있습니다. 그러나 비동기는 실행방식이 다르기 때문에 예상처럼 코드가 출력되지 않습니다.    

result
```
bye world
hello wolrd
```
이렇게 `bye world` 가 출력되고 난 후 `hello world`가 출력됩니다.        

<br/>
우선 자바스크립트는 웹에 치중되어 있고 이 웹는 인터넷속도에 의존적일 수 밖에 없습니다. 또한 유저 인터랙션이 굉장히 많은 플랫폼이기도 합니다. 이런 상황에서 인터넷 속도가 느려서 결과가 바로 나오지 않더라도 인터랙션이 바로 되어야 합니다.
싱글 스레드 환경에서 비동기가 성능상 좀더 좋기 때문에       
요청이 다 오기 전부터 인터렉션이 가능하게 끔 만들어 놓기 위해 사용합니다. 

어떤 데이터를 먼저 처리해야 순차적으로 처리가능한 코드들도 분명 존재합니다. 이럴 때 사용하는 것이 `call back` 입니다. `call back`은 처리가 다되면 알려달라는 요청이 필요할 때 사용합니다.   

`input` -> `startExecution` -> `doSometingAsync` -> `callback` -> `someting` -> `doSomethingElseAsync` -> `callback` -> `something` -> `moreAsync` -> `callback` -> `something` -> `evenMoreAsync` -> `callback` -> `somethingoutput`       

이러한 구조라고 보시면 됩니다.      

콜백 기본 구조는 아래와 같습니다.
```
// prints text end waits half a second
function doSomethingElseAsync(callback) {
    console.log('doSomethingElseAsync: Wait for half a sec.');
    setTimeout(function() { callbakc(); }, 500);
}
```
데이터를 요청하는 리퀘스트를 보내면 다운을 받는 시간이 걸리는 작업이 있다면 그 작업을 두고 그 다음에 실행을 시킨다는 구조라고 생각하시면 될 것같습니다.

```
function greeting(sayGoodbye) {
    setTimeout(() => {
        console.log("sayHello");
        sayGoodbye();
    }, 2000);
}
greeting(()=>console.log("bye worold"))
```

`greeting` 함수에서 함수(`sayGoodBye`)를 입력값으로 받습니다. `sayGoodbye`함수를을 `greeting`함수안에서 `console.log(..)`가 끝난 후 실행시키면 된다고 알려주는 것입니다.        


## Promise
언젠가 해결될 것이라는 약속 입니다.
```
new Promise((resolve, reject) => {})
Resolve -> 해결, 성공 -> then
Reject -> 거절, 실패 -> catch
```
결과를 반환 받고 이후에 동기적으로 처리할 수 있는 것입니다.     
비동기 함수를 가져다가 이후에 실행을 약속하므로 동기적으로 처리하는 것입니다.       

```
function sayHello2(name) {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            console.log(name + "님 안녕하세요");
            resolve("서울");
        }, 3000)
    }
    )
}

sayHello2("John").then((location)=> console.log(location + "로 안녕히가세요"));
```
위 코드와 같이 `revolve`와 `reject` 로 코드가 정상적으로 완료되었을 때와 반대의 경우를 모두 처리할 수 있습니다.     

`Then`을 조금더 직관적으로 사용하고 싶다면 `async` function을 사용하는 것입니다.

```
async func_name(p) {
    const result = await get_result()
}
```
함수 앞에 `async`를 적습니다. 비동기적인 함수 `await`가 있습니다.
`await`는 `promise`를 대체하는 것이 아닌 `then`을 대체하는 것입니다. 오래걸리는 함수가 있다고 했을 때 `await`를 적어주게 되면, 기다려주는 것입니다. 결과가 나올 때까지 기다려주겠다는 의미입니다. 동기적으로 해결하겠다는 의미이죠.

```
function sayHello2(name) {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            console.log(name + "님 안녕하세요");
            resolve("서울");
        }, 3000)
    }
    )
}


async function sayHelloBye(name) {
    loc = await sayHello2(name)

    console.log(loc + "로 안녕히 가세요");
}

```
위와 같이 사용하게 되면 `John님 안녕하세요 서울로 안녕히 가세요` 라는 값이 반환됩니다.
`resolve`에서 반환된 값이 `function sayHello`를 통해서 `loc`으로 복사됩니다. 그렇기 때문에 `resolve`에 인자로 던져준 `서울`이 `loc`에 담겨서 `log`로 호출할 수 있게 됩니다.    
<br/>
그러나 위 코드에서 `await`을 뺴면

```
function sayHello2(name) {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            console.log(name + "님 안녕하세요");
            resolve("서울");
        }, 3000)
    }
    )
}


async function sayHelloBye(name) {
    loc = sayHello2(name)

    console.log(loc + "로 안녕히 가세요");
}
```

`[object Promise]로 안녕히 가세요 John님 안녕하세요` 라는 값이 반환 됩니다.
약속된 어떤 값으로 안녕하세요라고 뜨고, `await`이 없으니 기다리지 않고 값을 출력한 다음에 `John님 안녕히 가세요`라는 값을 반환하는 것입니다.
`await(then)`을 적어주셔야지 약속을 통해서 값을 전달할 수 있습니다.

<br/>

비동기의 문제는 순서를 기다려주지 않기때문에 `callback`이 있습니다. 하지만 `callback`은 가독성이 좋지않아, 그걸 해결하기위해 `Promise`가 나왔습니다. `Promise`는 `then`과 `catch`로 편리하게 사용가능하지만 이것을 더 편리하게 만들기 위해서 ES6에서 `async`와 `await`이 나온 것입니다.