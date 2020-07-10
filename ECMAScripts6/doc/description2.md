# 템플릿 문자열, null, undefined

## 문자열 합치기
```
let n1 = 20;
const message = "n1의 값은 " + n1;
console.log(message);
```
예전에 쓰던 방법인데 es6에서는 interpolation(문자열 채우기)를 사용

${} <- interpolation

```
const message2 = "n1의 값은 ${n1}입니다."
```
이렇게 되면 이스케이프가 발상하여

result
```
"n1의 값은 ${n1} 입니다."
```
***
```
const message3 = `n1의 값은 ${n1} 입니다.`;
```
backtick을 사용하여야 출력 가능합니다.

result
```
"n1의 값은 20 입니다."
```

### 멀티라인으로 표시하는 방법
```
const nultiline = "line\nline2";
```

result
```
"line1
line2"
```
\n 은 줄바꿈
***
```
const multiline2 = "line1
line2
line3";
```

result
```
"line1
line2
line3"
```

이렇게 사용하면 원하는 공백칸은 따로 만들지 못해서 불편할 수 있습니다.
***
```
const multiline3 = "line1\n" +
"    line2\n" +
"    line3";
```

result
```
"line1
 line2
 line3"
 ```
### 숫자와 문자열을 함께 사용하는 경우
```
const res1 = 10 + '10';
```

result
```
"1010"
```
문자열로 되어서 문자열의 합이 됩니다.
***
```
const res2 = 10*'10';
```

result
```
100
```
숫자형으로 바뀌어서 10*10이 됩니다.
## null & undefined
```
aa = null;
```

### 둘의 차이점
프로그래머가 의도적으로 null값으로 지정해줄 수 있지만
undefined는 거의 그렇게 사용하는 경우 없습니다.
자바스크립트 타입이 JS중에서 특이한 타입입니다.
원시타입으로 지정 되어 있습니다.
프로그래머가 undefined라고 지정할 수 있지만  그 경우에는 변수의 동작을 주어지지 않는 값으로 지정할 때 사용하지만
거의 사용하지 않습니다.
null을 사용하시면 됩니다.

```
let bb;
```

result
```
undefined
```
***
```
let cc = null;
```

result
```
null
```

원시타입 같은경우는 유일한 값으로 단 하나의 값만을 나타낼 수 있는 타입입니다. 
이것이 변하지 않습니다.
불변하는 값을 원시타입이라고 합니다.

객체는 여러가지 값을 가질 수 있고 여러가지 값을 가질 수 있습니다.
또한 값이 변할 수 있습니다.
객체는 일종의 하나의 컨테이너라고 생각하시고 그 안에 내용물이 바뀔 수 있는 것입니다. 
컨테이너는 바뀔 수 없지만 내용물은 충분히 바뀔 수 있습니다.


