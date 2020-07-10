# 데이터 타입 변환
es6 새롭게 등장한 타입 중 Map과 Set, Symbol 이 있습니다.
Map과 대응되는 WeakMap과 Set과 대응되는 WeakSet 이 있습니다.
<br/>
문자열 -> 숫자형으로 바꾼다던지 그 반대가 된다던지 등 새롭게 변환해서 사용하는 경우를   
데이터 타입 변환이라고 합니다.

```
const number = "440";
number
```

return

```
"440"
```
<br/>

```
const num = Number(number);
num
```

return

```
440
```
이런식으로 형변환을 합니다.

예전 JS에서는 parseInt, parseFloat을 많이 사용했었습니다. 지금도 사용가능 합니다.   
그러나 이러한 함수를 사용할 경우 약간의 차이가 있습니다.   

```
const a = parseInt(number);
a
```

return

```
440
```

이렇게도 사용 가능합니다.
그러나 어떤 점이 다르냐면

```
const a100 = parseInt("120 vv");
a100
```

이렇게 뒤에 문자열이 있으면   
return 

```
120
```

이렇게 문자열이 함께 들어가 있더라도 숫자만 인식하고 숫자형으로 변환하여 반환합니다.

```
const il = parseInt("120 vv", 10);
i1
```

return

```
120
```

parseInt의 두번째 파라미터는 기수(진수)를 받습니다.

```
const i2 = parseInt("3a", 16);
i2
```

return

```
58
```

결과적으로 16진수로 되어 있는 3a라는 값을 10진수로 바꾸어 반환합니다.
<br/>
parseFloat도 마찬가지 입니다.

```
const i3 = parseFloat("12.2KW");
i3
```

return

```
12.2
```

이렇게 기수값을 사용하는 여부가 parseInt, Number 와의 다른 점입니다.   

원래는 생성자는 new 연산자를 사용해야하지만 Number()와 String()은 new를 사용하지 않습니다.   

## Date 객체
Java에서 가져온 객체입니다.
Date객체가 사용하기 불편한 점이 있습니다.
날짜와 시간을 나타내는 Date 객체를 사용할 때는 new 연산자를 사용합니다.

```
const now = new Date();
now
```

이러면 현재 시간을 표시해 줍니다.

```
Fri Jun 26 2020 15:16:25 GMT+0900 (대한민국 표준시)
```

<br/>

```
const childDay = new Date(2020, 5, 5);
childDay
```

return

```
Fri Jun 05 2020 00:00:00 GMT+0900 (대한민국 표준시)
```

이렇게 달은 +1이 됩니다. 그래서 0이 1월, 2가 2월이 됩니다.

```
const childDay1 = new Date(2020, 4, 5);
childDay1
```

return

```
Tue May 05 2020 00:00:00 GMT+0900 (대한민국 표준시)
```

<br/>

시간까지 표시해주고 싶다면

```
const childDayTime = new Date(2020, 4, 5, 18, 0); // 뒤 2 파라미터는 시간과 분을 표시합니다.
childDayTime
```

return

```
Tue May 05 2020 18:00:00 GMT+0900 (대한민국 표준시)
```


<br/>
연도를 얻어오고 싶다면

```
childDay1.getFullYear();
```

return

```
2020
```

달을 얻어오고 싶으면

```
childDay1.getMonth();
```

return

```
5
```

날짜를 얻어오고 싶으면

```
childDay1.getDate();
```

return

```
5
```

요일을 얻어오고 싶으면

```
childDay1.getDay();
```

요일을 표기할 때 숫자로 표기됩니다.
요일 또한 0부터 시작합니다.
0은 일요일을 의미하고 6이 토요일을 의미합니다.

<br/>

날짜를 숫자로 바꾸기위해서

```
const d = new Date();
const dd = d.valueOf();
dd
```

return

```
1593152598275
```

1970.1.1 0시 0분 0초서부터 흘러간 시간을 초단위로 해서 표시해 주는 것입니다.

<br/>

## Boolean 변환

### Boolean 에서 Number로 변환

```
const bool = true;
bool
```

return

```
true
```

<br/>

```
const nn = bool ? 1 : 0;
nn
```

```
1
```

### Boolean으로 변환

```
let ii = 0;
let bool1 = !ii;
bool1
```

return

```
true
```

<br/>

```
let ii3 = 1;
let bool3 = !!ii3;
```

return

```
true
```

<br/>

```
let ii4 = 0;
let bool4 = Boolean(ii4);
bool4
```

return

```
false
```

Boolean 역시 Number와 String 처럼 new 연산자를 쓰지 않고 객체를 생성합니다.

## 문자열 변환

toString() <- 문자열로 변환할 때 사용합니다.   
문자열 병합에 있어서 숫자를 문자열로 자동으로 변환할 수 있습니다.

```
const num1 = 14.1;
num1
```

return

```
14.1
```

<br/>

```
const strNum = num1.toString();
strNum
```

return

```
"14.1"
```

이렇게 변환할 수 있습니다.   
Date객체도 이렇게 바꿀 수 있습니다.

```
const strDate = childDay1.toString();
strDate
```

return

```
"Tue May 05 2020 18:00:00 GMT+0900 (대한민국 표준시)"
```

<br/>

```
const StrDD = dd.toString();
strDD
```

return

```
"1593152598275"
```

<br/>

배열 같은경우도 문자열로 변환 가능합니다.

```
const arr = [1, "hello", 100];
arr;
arr.toString();
```

return

```
(3) [1, "hello", 100]
"1, hello, 100"
```

위와 같이 각 요소들을 묶어서 문자열로 출력할 수 있습니다.   
