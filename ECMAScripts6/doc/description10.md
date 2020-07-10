# 객체에 메소드 추가하기

## 객체를 변수로 해체하는 방법

```
function getString({s, v, o}) {
    return `${s} ${v} ${o}`;
}
cosnt oj2 = {
    s : "I",
    v : "love",
    o : "you",
};

getString(oj2);
```

return
```
"I love you"
```
이처럼 해체 할당하는 방법을 사용할 수 있습니다.
배열도 같은 방법으로 해체할 수 있습니다.

## 배열을 변수로 해체하는 방법

```
function getArrString([a, b, c]) {
    return `${a} ${b} ${c}`;
}
const arr = ["I", "love", "you"];
getArrString(arr);
```

return
```
"I love you"
```

<br/>

## 확장연산자 사용

```
function addPrefix(prefix,...words) {
    const prefixedWords = [];
    for(let i = 0; i < words.length; i++) {
        prefixedWords[i] = prefix + words[i];
    }
    return prefixedWords;
}

addPrefix("con", "verse", "vex");
```

return
```
[ 'converse', 'convex' ]
```

## 매개변수의 초기값 지정
매개변수의 기본값을 지정하는 기능이 es6에 생겼습니다.   
매개변수의 초기값을 지정할 수 있는데, 만약 지정되지 않으면 `undefined`가 지정되는데 이렇게 되지 않도록 초기값을 설정해줄 수 있습니다.

```
function f3(a, b="default value", c) {
    return `${a} - ${b} - ${c}`;
}

f3(4, 5, 9);

f3(5, 6);

f3(10);
```
return
```
'4 - 5 - 9'

'5 - 6 - undefined'

'10 - default value - undefined'
```
<br/>

## 객체의 메소드 추가

```
const oj3 = {
    name : "홍길동",
    speak: function() {return "안녕";}, //함수프로퍼티 = 메서드
}

oj3.speak();
oj3.name;
```

return

```
'안녕'
'홍길동'
```
위와 같은 함수를 추가하는 코드를 아래와 같이 쓸 수 있게되었습니다.

```
const oj4 = {
    name: "홍길둘",
    speak() {return "안녕2";}, //function 키워드를 생략한 간편한 방법입니다
}
oj4.name;
oj4.speak();
```
return
```
'홍길둘'
'안녕2'
```