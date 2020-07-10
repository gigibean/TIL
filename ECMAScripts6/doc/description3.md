# 심볼, 객체
## 객체
내용물은 얼마든지 바뀔 수 있고 컨테이넌 바뀌지 않습니다.
### 객체를 사용할 때 사용하는 문법

#### 생성
##### 리터럴
{} 중괄호를 사용하여 객체의 시작과 끝을 알려주는 기호입니다.
멤버를 만들 때
```
const person1 = {
    name: '홍길동',
    age: 20,
};
```
위에는 2개의 멤버와 2개 쌍의 key-value가 있습니다.

### 또 다른 객체
```
const person3 = {
    name: "강길동",
    classification: { //분류키
        a: 1,
        b: 2,
        c: 100,
        d: 200,
        e: 300,
    }; //이 객체가 값이 되는 것입니다.
};
```

```
person3.name;
```

result

```
"강길동"
```

<br/>

```
person.classification.b;
```

result

```
2
```

<br/>

```
person3["classification"].c
```

result

```
100
```

<br/>

```
person3["classification"]["c"]
```

result

```
100
```

<br/>

### 함수 넣기

```
person3.speak = function() {return "Hello";};
```

<br/>

```
console.log(person3);
```

result

```
Object {name: "강길동", classification: Object, speak: function}
```

<br/>

```
person3.speak()
```

result

```
"Hello"
```

### 객체 제거
delete 연산자를 사용합니다.

```
delete person3.classification
```

result

```
true
```

<br/>

### 함수 삭제

```
delete person.speak;
```

result

```
true
```
<br/>

### 구성
객체는 기본적으로 프로퍼티(속성,멤버,필드 등 여러 이름으로 불림)과 메서드로 구성되어 있습니다.
#### 프로퍼티
키와 벨류 쌍으로 되어있으며, 이름은 꼭 문자열로 사용해야 합니다. 혹은 심볼로 표시해줍니다.
오브젝트의 컨텐트(프로퍼티)의 이름은 문자열이나 심볼로 표시합니다. 

##### 접근 연산자

```
const obj = {};
// mumber 추가
obj.color = "red";
console.log(obj.color);
```

result

```
red
```
여기서 color가 프로퍼티가 되고 이 프로퍼티에 접근하기 위한 연산자(접근 연산자)는 '.'을 사용합니다.
Member Eccess Operater 라고 합니다.

```
obj[color];
```

result

```
"red"
```

이런식으로 대괄호를 사용하려 표현할 수 있습니다.
참고로 이런 프로퍼티는 심볼로도 사용가능합니다.

## 심볼
### 심볼를 사용할 때 사용하는 문법
#### 생성

```
const SIZE = Symbol();
obj[SIZE] = 100;
```

result

```
100
```

### 접근

위와 같이 'color'와 'SIZE' 모두 식별자가 되는 것입니다.

```
console.log(obj);
```

result

```
Object{color: "red", Symbol() : 100}
```

심볼은 Symbol() 생성자로 접근 가능합니다.
그리고

```
obj.SIZE
```

이런식으로 접근 불가능하며 오직
```

obj[SIZE]
```

로 접근은 불가능 합니다.
Symbol()은 대괄호로 접근만 가능하며 '.' 접근 연산자로 접근은 불가능합니다.

