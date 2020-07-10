# 클로저
`closing`은 가까운, 좁히는 이라는 의미로 사용됩니다.    
스코프 내에서 정의되어 있는 변수는 스코프를 빠져나가면 사용할 수 없게 됩니다. 그러나 함수같은 경우엔 특정 스코프에 접근할 수 있도록 특정 스코프내에서 정의하는 경우가 있습니다.    
이러한 것을 `클로저`라고 합니다.    
함수에 가깝게 하는 것이라고 이해하시면 됩니다.      
어떠한 스코프에 접근할 수 있도록 하기 위한 것을 `클로저`라고 합니다.        

```
let globalFunc; //정의되어있지 않은 전역 변수
{
    let varA = 'aa';
    globalFunc = function() {
        console.log(varA);
    }
}
globalFunc();
```

result
```
aa
```

보통 블록 내에 있는 것은 접근할 수 없었는데 `globalFunc`이 전역 스코프에 선언되어 있기 때문에 어디서든 호출할 수 있게 되는 것입니다. 그리고 내부 블록에 함수를 정의함으로써 `globalFunc`'함수는 클로저 내에 있는 식별자에 언제든지 접근할 수 있게 됩니다. 스코프 내에서 함수를 선언하게 되면 블록을 빠져나와도 스코프가 계속 유지될 수 있게 됩니다. 이렇게 접근할 수 있게 만들어 놓은 장치가 `클로저`입니다.

```
let f;
{
    let obj = {
        address : "Seoul"
    };
    f = function() {
        return obj;
    }
}
let objRef = f();
console.log(objRef);
objRef.address = "Busan";
```
여기서도 내부블록에 `f = function() {}`이라는 `클로저`를 하나 만들어서 스코프 내에 객체에 접근할 수 있도록 하였습니다.      

result
```
{ address: 'Seoul' }
'Busan'
```
이러한 것이 클로저의 개념입니다. 함수를 정의를 해서 클로져를 만들면 접근할 수 없는 객체에도 접근할 수 있게 됩니다. 그리고 객체에 있는 프로퍼티까지 바꿀 수 있게 됩니다.