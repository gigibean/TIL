# typeof, 해체할당

## typeof
피연산자의 타입을 리턴해주는 연산자입니다.   
typeof를 이용해서 null을 입력하면 null은 원시타입이지만 return 값은 object라고 나옵니다.   

```
typeof null
```
return
```
"object"
```

<br/>

```
typeof {}
```
return
```
"object"
```
<br/>

```
typeof true
```
return
```
"boolean"
```

<br/>

```
typeof "";
```
return
```
"string"
```
<br/>

```
typeof function(){};
```
return
```
"function"
```

<br/>

```
typeof 1212;
```
return
```
"number"
```

<br/>

```
typeof Symbol();
```
return
```
"symbol"
```

<br/>

```
typeof undefined;
```
return
```
"undefined"
```

## 해체할당

### 객체

```
const obj2 = {
    p2 :2,
    P3 :100,
    p4 : 30
}
```

여기서 b,c,d를 따로 객체를 해체해서 하나의 변수처럼 분리하는 기능입니다.
<br/>

```
const {p1, p2, p3} = obj2;
```

```
p1
```
return
```
undefined
```
위와 같은 결과가 나오는 이유는 p1은 obj2 객체에 없기 때문입니다. <br/>
그렇다면 p2와 p3는 각각 할당되었을까요?

```
p2
```
return
```
2
```

<br/>

```
p3
```
return
```
100
```
이처럼 obj2객체 내에 있는 변수값에는 각각 할당되어 있는 것을 볼 수 있습니다.   
그렇다면 p4는 자동할당 되었을까요?

```
p4
```
return
```
p4 is not defined
```
위의 결과를 보면 p4는 변수설정이 안되어있기 때문에 값을 알 수 없습니다.   

<br/>
<br/>

### 배열
```
const arr_1 = [10, 20, 30];
```
객체같은 경우 중괄호를 사용했지만 배열은 대괄호를 사용하시면 됩니다.
```
let [xx, yy] = arr_1;
```
<br/>

```
xx
```
return
```
10
```

<br/>

```
yy
```
return
```
20
```
마지막 값 30은 변수가 없으므로 따로 할당되지 않았습니다.

### 확산 연산자(spread operator)

```
const arr_2 = [1, 2, 3, 4, 5];
let [xx1, yy1, ...zz1] = arr_2;
```

<br/>

```
xx1
```
return
```
1
```

<br/>

```
yy1
```
return
```
2
```

<br/>

```
zz1
```
return
```
(3)[3,4,5]
```

### 배열에 있는 값 바꾸기

```
let xx22 = 33, yy2 = 22;
[xx2, yy2] = [yy2, xx2]
```
xx2 와 yy2를 서로 교환합니다.   

```
xx2
```
return
```
22
```

<br/>

```
yy2
```
return
```
33
```

<br/><br/><br/>

해체할당을 하기 위해서 객체 선언과 할당을 동시에 했었습니다. 그런데 만약에 이렇게 사용하지 않고 선언과 할당을 따로 할 수 있을까요?

```
const obj4 {
    xx3 :12,
    yy3 : 11,
    zz3 : 100
};
let xx3, zzy3;
{xx3, zz3} = obj4;
```
return
```
SyntaxError
```
이렇게 에러가 뜹니다.   
선언과 할당을 따로 할 경우에는 괄호를 이용해 주어야 합니다.   

```
({xx3, zz3} = obj4)
```
return
```
Object {xx3 : 12, yy3 : 11, zz3: 100}
```

<br/>

```
xx3
```
return
```
12
```

<br/>

```
zz3
```
return
```
100
```
