# IIFE 
IIFE = Imadiately Invoked Function Expression
즉시 호출하는 함수 표현식이라고 해석할 수 있습니다. 

```
(function() {...})()
```
위와 같이 표현할 수 있습니다. 함수를 만들어 놓고 바로 호출하는 방식입니다.
함수명이 없기 때문에 함수를 바로 괄호로 묶고 괄호를 뒤에 붙여서 선언과 함께 즉시 실행할 수 있게 합니다.
이를 사용하는 이유는 전역스코프를 지저분하게 하지 않기 위해서입니다.    
이러한 방식은 함수 내부 안에 있는 멤버들이 해당 자신만의 스코프를 가지고 있습니다. 스코프 밖에서 접근하기 힘듭니다. 그래서 스코프 밖으로 무언가를 내보낼 수 있도록 하기 위해서 이러한 방식을 사용합니다.    

```
const message = (function() {
    const aa = "비밀 문장";
    return `aa 문자열의 길이는 ${aa.length}입니다.`;
})();
console.log(message);
```
`message`는 함수가 실행되면서 그 값이 바로 저장됩니다. 이때 `aa`라는 변수는 IIFE라고 하는 해당 스코프안에 선언이 되어 있기 때문에 외부에서 접근하기 힘듭니다. 그리고 IIFE라는 함수는 자신의 멤버를 언제든지 반환할 수 있습니다. 
<br/>

result
```
aa 문자열의 길이는 5입니다.
```

선언과 동시에 바로 호출하는 방식을 의미합니다.      

```
const f11 = (function() {
    let cnt = 0;
    return function() {
        return `이함수는 ${++cnt} 번 호출되었습니다.`;
    }
})();
f11();
f11();
f11();
```

함수 자체가 `f11` 이라는 이름으로 만들어져 있는 상태입니다. 그래서 `f11`또한 함수입니다.

<br/>

result
```
'이함수는 1 번 호출되었습니다.'
'이함수는 2 번 호출되었습니다.'
'이함수는 3 번 호출되었습니다.'
```

`cnt`는 안전하게 보관되고 있어서 이 변수에는 접근할 수 없게 됩니다. 이렇게 IIFE를 사용하는 이유는 클로저에서 중복되는 값을 해결하기 위해서 이러한 방법을 사용하기도 하고 전역스코프를 깔끔하게 사용하기 위해서 사용하기도 합니다.       

