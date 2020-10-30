# Change Type
## Number to String
* `+ ''` : 숫자형에다가 `''`를 더해주면 문자형이 된다.
* `value.toString()` : 숫자형에 `.toString()`을 해주면 되는데 여기서 중요한건, 해당 메서드 파라미터에 숫자 n을 넣으면 String 타입의 n진법 숫자가 반환된다.

```js
var value = 10
value.toString(2) // "1010"
```

* String(value) : 스트링 객체를 생성할 수 있다.

## Array to String
* `value.toString()` : 해당 배열의 elements가 `,`로 연결된 문자열을 반환한다.
* `value.join()` : 해당 배열의 elements가 메서드의 인자(separator)로 들어온 구분자로 나뉘어 하나의 문자열로 반환된다. separator가 빈문자열이면 아무 문자도 없이 연결되고, separater를 생략하면 배열의 요소들이 `,`로 구분된다.

## String to Array
* `value.split()` : 해당 문자열을 메서드의 인자로 들어온 구분자로 나뉘어 하나의 배열로 반환된다. 인자(separator)가 빈 문자열이면 str의 각각의 char를 하나씩 원소로 변환한다.

## String to Number
* `paseInt(value[, radix])` : value를 int인 숫자형으로 변환한다. 더하여 redix에 n의 숫자를 부여하면 n진법의 value를 10진법의 숫자형으로 변환해 반환한다.
* `+value` : value에 +를 해주면 숫자형으로 변환된다.

## Number to Array
* `Array.from(value.toString(), x => +x)` : 문자를 하나씩배열에 담을 수 있다.
* `value.toString.split('').map(x => +x)` 

## Array to Number
* `parseInt(value.join(''))`