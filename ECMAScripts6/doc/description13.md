# call, apply, bind

# call 

```
const user1 = {name : "John"};
const user2 = {name : "Bing"};
function greeting() {
    return `Hi, my name is ${this.name}.`;
}
greeting(user1);
```

return

```
'Hi, my name is undefined.'
```

묶인 객체가 없기 때문에 `this`에 출력되는 것이 없습니다.   
이럴 때 객체를 묶어주는 키워드가 `call` 입니다.    

```
greeting.call(user1);
```

return

```
'Hi, my name is John.'
```

<br/>

```
function modify(birthYear, job) {
    this.birthYear = birthYear;
    this.job = job;
}
modify.call(user1, 1998, 'developer');
```

return

```
undefined
```

우선 `modify`의 `user1`은 `this`로, `1998`은 `birthYear`로, 'developer'는 `job`으로 들어가게 됩니다.   
그렇다면 `user1` 객체를 우선 보겠습니다.

```
console.log(user1);
```

return

```
{ name: 'John', birthYear: 1998, job: 'developer' }
```

함수를 이용해서 `call`메서드를 호출했더니, `modify`함수내에서 `user`의 내용을 수정해준 것입니다.   

```
modify.call(user2, 1997, 'designer');
console.log(user2);
```
return

```
{ name: 'Bing', birthYear: 1997, job: 'designer' }
```

## apply
`call`과 매우 비슷하지만 매개변수를 처리하는 방법이 조금 다릅니다.
`call`은 일반적으로 함수들이 매개변수를 직접 받는 방식을 사용하지만, `apply`는 배열로 받습니다. 동작하는 것은 똑같지만 이 차이점이 있습니다.

```
modify.apply(user1, [1996, 'programmer']);
console.log(user1);
```

return

```
{ name: 'John', birthYear: 1996, job: 'programmer' }
```
위 코드와 같이 배열요소를 함수의 매개변수로 사용할 때 사용합니다.   

<br/>

```
const arr = [12, 30, -2, 11, 90];
Math.min.apply(null, arr); //this와 상관없기 때문에 앞에는 null을 넣어줍니다
```
return

```
-2
```

`null`은 객체를 지정할 필요가 없음을 나타냅니다.

```
Math.min(...arr);
Math.max(...arr);
```
위와 같이 `apply`대신 확산 연산자를 사용할 수 있습니다. 이는 `call` 메서드 대신 사용할 수도 있습니다.   

return
```
-2
90
```

<br/>

```
const user2_2 = [2000, 'police'];
modify.call(user2,...user2_2);
console.log(user2);
```
return

```
{ name: 'Bing', birthYear: 2000, job: 'police' }
```

## bind
`this` 값을 바꾸는 함수입니다.   

```
const modifyUser2 = modify.bind(user2);
console.log(user2);
console.log(modifyUser2);
```

return
```
{ name: 'Bing', birthYear: 2000, job: 'police' }

function modify(birthYear, job) {
    this.birthYear = birthYear;
    this.job = job;
}
```

<br/>

```
modifyUser2(2002, "nurse");
user2
```

return

```
{ name: 'Bing', birthYear: 2002, job: 'nurse' }
```
`modify`함수를 `user2`와 묶어준 것입니다. 그렇게 해서 언제든지 함수를 바꿔 `user2`를 바꿀 수 있도록 한 것입니다.   

<br/>

```
modifyUser2.call(user1, 1994, "cooker");
user2
user1
```

return

```
{ name: 'Bing', birthYear: 1994, job: 'cooker' }
{ name: 'John', birthYear: 1996, job: 'programmer' }
```
결과가 객체를 `user1`로 대입시켰지만 `call` `user1`은 변경 사항이 없고, `user2`만 변경된 것을 볼 수 있습니다.   
즉, `bind`라고 하는 것은 `this`의 값을 모두 바꿔서 `user2`객체와 연결되도록 하였기때문에 임의적으로 바꾸려고 해도 바꿀 수 없고 `user2`와만 연결되어 있습니다.