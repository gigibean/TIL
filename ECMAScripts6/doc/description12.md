# annoymous function and arrow notation

## 익명함수
이름을 사용하지 않는 함수를 말합니다.   

기존 함수는 `function f(x) {}` 형태로 이루어져 있습니다. 여기서 `f`는 함수명이 됩니다. 이러한 함수명은 `식별자`라고 합니다.   
이러한 함수명(식별자)가 없는 함수를 `익명함수`라고 합니다.   

<br/>

JS는 함수를 값으로도 사용할 수 있습니다. 

예를 들어, `const f = function () {...}` 이런식으로 함수의 이름 없이 대입하여 하나의 표현식을 만들 수 있습니다.

<br/>

함수를 선언한 것과 마찬가지로 함수를 호출했을 때 return 값이 나올텐데, 그 값은 같습니다. 다만 함수의 이름만 없을 뿐입니다. 이 함수를 변수에 할당해주는 것입니다.
이 함수를 할당받은 변수(상수)가 식별자의 역할을 하게 됩니다.   

물론 다른 곳들에서 사용할 수 있습니다. 객체의 프로퍼티나 함수나 메서드 안에 매개변수 등에서도 다양하게 사용할 수 있습니다.   

<br/>

## arrow notation (=>)
es6에서 새롭게 나온 문법 중 하나가 화살표를 이용한 문법입니다. 이는 function을 사용하지 않고도 함수를 표현할 수 있게 합니다.   
함수의 매개변수가 하나인 경우엔 함수 안에 매개변수를 넣어서 사용하는데 이 매개변수를 넣는 괄호()도 생략할 수 있습니다.   
함수의 표현식이 하나만 있는 경우 중괄호{}를 생략할 수 있습니다.
return문도 생락할 수 있습니다.   

```
cosnt f1 = function() {return "Hello JavaScript";} //익명함수
const f1 = () => "Hello JavaScript"; //화살표 표기법

const f2 = function(name) {return `Hello, ${name}`;} //매개변수 1개인 경우
const f2 = name => `Hello, ${name}`; //화살표 표기법

const f3 = function(a, b) {return a*b;} //매개변수 2개 이상인 경우
const f3 = (a, b) => a*b; //화살표 표기법
```

<br/>

### 함수 내의 함수의 this 사용

```
const oj10 = {
    name: "bing",
    reverseName: function() {
        const getReverseName = () => {
            let nameBack = '';
            for (let i= this.name.length - 1; i>=0; i--) {
                nameBack += this.name[i];
            }
            return nameBack;
        }
        return `Hi. my reverse name is ${getReverseName()}`;
    }
}
oj10.reverseName();
```

result

```
'Hi. my reverse name is gnib'
```
함수 내에 또다른 함수가 들어왔을 때 원래는 const로 따로 `this`를 기억해 주어야 했는데, 화살표 함수를 사용하면 스스로 this를 기억할 수 있습니다.   

```
const modifyuser2Birth = modify.bind(user2, 2000);
modifyuser2Birth("singer");
user2
```

return

```
{ name: 'Bing', birthYear: 2000, job: 'singer' }
```

위 결과와 같이 `bind`를 사용하여 `birthYear`을 고정해 놓고 다른 부분만 바꿀 수 있게 할 수 있습니다.
