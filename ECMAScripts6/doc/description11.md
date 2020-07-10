# this 키워드
객체 안의 프로퍼티, 함수를 호출할 때 사용됩니다.

```
const oj5 = {
    name : "John",
    speak() {return `My name is ${name}`}
}

oj5.speak();
```
return
```
Uncaught ReferenceError: name is not defined
```
위처럼 `name`이 어느 객체에 있는 프로퍼티인지 알려주지 않아서 에러가 일어난 것을 알 수 있습니다. 이럴 때 사용하는 것이 this 키워드 입니다. 

```
const oj6 = {
    name : "John",
    speak() {return `My name is ${this.name}`}
}

oj6.speak();
```
this는 현재 객체 자신을 이야기 합니다. 접근 연산자와 함께 사용해서 oj6 객체 자신의 name 프로퍼티에 접근할 수 있게 됩니다.

```
'My name is John'
```

<br/>

```
const speak = oj6.speak;
speak === oj6.speak;
speak();
```
return
```
true
'My name is undefined'
```
this.name이 어떤 객체 안에 있는 프로퍼티인지 speak() 함수는 알 수 없습니다. 그렇기 때문에 해당 객체 oj6에 있는 this.name을 가져오지 못하는 것입니다.
객체 안에 함수를 다른 변수에 대입해 함수를 만들었지만 this가 가리키는 것을 가리키고 있지않은 함수입니다. 서로 다른 것을 가리키고 있다고 생각하시면 됩니다.

<br/>

```
const oj7 = {
    name: "bing",
    reverseName: function() {
        function getReverseName() {
            let nameBack = '';
            for (let i= this.name.length - 1; i>=0; i--) {
                nameBack += this.name[i];
            }
            return nameBack;
        }
        return `Hi. my reverse name is ${getReverseName()}`;
    }
}
```

return
```
Uncaught TypeError: Cannot read property 'length' of undefined
```
위와 같은 에러가 일어나느 이유는 oj7 객체의 this.name.length의 this가 어느 객체의 소속인지 알 수 없기 때문입니다.
이러한 문제를 해결하기 위해서는 `const` 타입에 `this`를 넣어주는 방법이 있습니다.
```
const oj7 = {
    name: "bing",
    reverseName: function() {
        const self = this;
        function getReverseName() {
            let nameBack = '';
            for (let i= self.name.length - 1; i>=0; i--) {
                nameBack += self.name[i];
            }
            return nameBack;
        }
        return `Hi. my reverse name is ${getReverseName()}`;
    }
}
oj7.reverseName();
```

return
```
'Hi. my reverse name is gnib'
```