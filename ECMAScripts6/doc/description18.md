# 객체에서 프로퍼티 나열하기

객체도 배열처럼 컨테이너 안에 얼마든지 나열할 수 있습니다. 또 이러한 프로퍼티 나열을 할 수 있는 기능을 지원합니다.   
배열같은 경우 요소를 나열할 때 순서가 부여가 됩니다. 반면에 객체같은 경우 순서가 보장되어 있지 않습니다.   
해당 프로퍼티를 입력한 순서대로 나열되는 것은 아닙니다.   
<br/>
객체 안에 프로퍼티를 나열할 때 `for..in`을 많이 사용합니다.

```
const SYM = Symbol();
const obj = {a: 1, b: 100, c: 200, [SYM]: 220};
for(let prop in obj) {
    if(!obj.hasOwnProperty(prop)) continue;
    console.log(`${prop} : ${obj[prop]}`);
}
```
result
```
a : 1
b : 100
c : 200
```

심볼 타입은 출력이 되고있지 않습니다. `key` 가 `Symbol`인 프로퍼티는 포함되지 않습니다.

`Object.keys` 메소드는 객체에서 나열 가능한 문자열 프로프티를 배열로 반환합니다.

```
const SYM = Symbol();
const obj = {
    a: 1,
    b: 100,
    c: 200,
    [SYM]: 220
};

Object.keys(obj).forEach(prop => console.log(`${prop}: ${obj[prop]}`));
```

`hasOnwProperty`는 객체를 나열할 때 예상치 않은 상황이 발생했을 때 대비하기 위하여 사용하는데
`Object.keys`는 객체에서 나열 가능한 문자열만을 반환을 받기 때문에 `Symbol`을 따로 체크하는 `hasOnProperty`를 사용하지 않아도 되는 것입니다.
<br/>

result
```
a: 1
b: 100
c: 200
```

`x`로 시작하는 단어만 필터링할 수도 있습니다.

```
const obj = {
    a: 1,
    b: 100,
    c: 200,
    x1: 220,
    x2: 1000
};

Object.keys(obj)
    .filter(prop => prop.match(/^x/))
    <!-- .filter(function(prop) {return prop.match(/^x/)}); -->
    .forEach(prop => console.log(`${prop} : ${obj[prop]}`));
    <!-- .forEach(function(prop) {return console.log(...)}) -->
```
이렇게 되면 객체 내에서 출력하고 싶은 해당 프로퍼티만 출력할 수 있습니다.
<br/>

```
x1 : 220
x2 : 1000
```