# Map
키-값 쌍을 저장하며 각 쌍의 삽입 순서도 기억하는 콜랙션이다. 아무 값(객체와 원시값)이라도 캐와 값으로 사용할 수 있다.   

## 설명
Map 객체는 요소의 삽입 순서대로 원소를 순회한다. `for...of` 반복문은 각 순회에서 [key, value]로 이루어진 배열을 반환한다.

### 키 동일성
* 키 동일성은 sameValueZero 알고리즘에 기반한다.
* `NaN !== NaN`이지만, 그럼에도 NaN은 NaN과 일치한다고 간주하며, 다른 모든 값은 === 연산자의 결과를 따른다.
* 현 ECMA 명세는 -0과 +0을 같은 값으로 처리하지만 초기 명세에서는 그렇지 않았다. 

### Object와 Map비교
Object는 값에 키를 할당할 수 있고 그 키로 값을 얻을 수 잇고 키를 삭제할 수잇으며 어떤 키에 값이 존재하는지 확인할 수 있다는 점에서 Map과 유사하다. 이런 이유에 더해 이전에는 내장된 대체제가 없었기 때문에, Object를 Map대신 사용하곤 했다. 그러나 어떤 상황들에선 Map을 선호해야할 몇가지 중요한 차이점이 있다.    

|/|Map|Object|
|--|--|--|
|의도치 않은 키|Map은 명시적으로 제공한 키 외에는 어떤 키도 가지지 않는다.| Object는 프로토타입을 가지므로 기본 키가 존재할 수 있다. 주의하지 않으면 직접 제공한 키와 충돌할 수도 있다.|
|키 자료형|Map의 키는 함수, 객체등을 포함한 모든 값이 가능하다.|Object의 키는 반드시 String또는 Symbol이어야한다|
|키 순서|Map의 키는 정렬된다. 따라서 Map의 순회는 삽입순으로 이루어진다|Object의 키는 정렬되지 않는다.|
|크기|Map항목 수는 `size` 속성을 통해 쉽게 알아낼 수 있다|Object의 항목 수는 직접 알아내야 한다.|
|순회|Map은 순회가 가능하므로 바로 순회할 수 있다|Object는 순회하려면 먼저 모든 키를 알아낸 후 그 키의 배열을 순회해야 한다.|
|성능|잦은 키-값쌍의 추가와 제거에서 더 좋은 성능을 보일 것|잦은 키-값 쌍의 추가와 제거를 위한 최적화가 없다|

## 속성

`Map.length`    
값이 0 인 속성이다.
요소의 수는 `Map.size`로 알아낼 수 있다.

`Map.prototype` 
Map 생성자의 프로토타입을 나타낸다. 모든 Map 인스턴스에 속성을 추가할 수 있다.

## 인스턴스
### 속성
`Map.constructor`   
인스턴스의 프로토타입을 만든는 함수이다. Map함수의 기본 값이다.

`map.size`  
Map 객체에 들어있는 key/value pair수를 반환한다.

### 메서드
`Map.clear()`   
모든 key/value pair를 제거한다.

`Map.delete(key)`   
주어진 키와 해당되는 값을 제거하고 제거하기전에 Map.has(key)가 반환했던 값을 반환한다. 그 후 Map.has.key(key) false를 반환한다.

`Map.entries()`     
Map객체 안의 모든 요소들을 [key, value]형태의 Array로 집어 넣은 순서대로 가지고 있는 Iterator객체를 반환한다.

`Map.forEach(callbackFn[, thisArg])`  
Map객체 안에 존재하는 각각의 key/value pair에 집어넣은 순서대로 callbackFn을 부른다. 만약 thisArg 매개변수가 제공되며, 이것이 각 callback의 this값으로 사용된다.

<details>
<summary>Map.forEach 자세히</summary>

```js
function logMapElements(value, key, map) {
    console.log(`m[${key}] = ${vlaue}`);
}
new map([['foo', 3], ['bar', {}], ['baz', undefined]]).forEach(logMapElements);

// "m[foo] = 3"
// "m[bar] = [object Object]"
// "m[baz] = undefined"
```

</details>

`Map.get(key)`  
주어진 key에 해당되는 값(value)를 반환하고 만약 없으면 undefined를 반환한다.    

`Map.has(key)`      
객체 안에 주어진 key/value 쌍이 있는지 검사하고 boolean값을 반환한다.

`Map.keys()`    
Map 객체 안의 모든 키를 집어넣은 순서대로 가지고 있는 Iterator 객체를 반환한다.

`Map.set(key, value)`   
객체에 주어진 key에 value를 집어넣고 Map 객체를 반환한다.

`Map.values()`  
객체 안에 모든 value를 집어넣은 순서대로 가지고 있는 Iterator 객체를 반환한다.

## 예제
### Map 객체 사용하기

```js
let myMap = new Map()
let keyString = '문자열'
let keyObj = {}
let keyFunc = function() {}

// 값 설정
myMap.set(keyString, "'문자열'과 관련된 값")
myMap.set(keyObj, 'keyObj와 관련된 값')
myMap.set(keyFunc, 'keyFunc와 관련된 값')

myMap.size // 3

// getting the values
myMap.get(keyString) // "'문자열'과 관련된 값"
myMap.get(keyObj) // "keyObj와 관련된 값"
myMap.get(keyFunc) //"keyFunc와 관련된 값"

myMap.get("문자열") //"'문자열'과 관련된 값"
myMap.get({}) // undefined, keyObj !== {}
myMap.get(function() {}) //undefined, keyFunc !== function() {}
```

### Map의 키로 NaN사용하기
```js
let myMap = new Map()
myMap.set(NaN, 'not a number')

myMap.get(NaN)
// "not a number"

let otherNaN = Number('foo')
myMap.get(otherNaN)
// "not a number"
// 이는 원래는 NaN !== NaN 이지만 Set, Map 등에서는 같다고 정의한다.
```

### for...of로 Map순회하기
```js
let myMap = new Map()
myMap.set(0, 'zero')
myMap.set(1, 'one')

for (let [key, value] of myMap) {
    console.log(key + " = " + value)
}

// 0 = zero
// 1 = one

for (let vlaue of myMap.values()) {
    console.log(value)
}
// zero
// one

for (let key of myMap.keys()) {
    console.log(key)
}
// 0
// 1

for (let [key, value] of myMap.entries()) {
    console.log(key + " = " + value)
}

// 0 = zero
// 1 = one
```

### forEach로 Map 순회하기
```js
myMap.forEach(function(value, key) { // forEach의 callback 인수는 총 3개 value, key, map
    console.log(key + " = " + value)
})
// 0 = zero
// 1 = one
```

### Array 객체와의 관계
```js
let kvArray = [['key1', 'value1'], ['key2', 'value2']]

// use the regular Map constructor to transform a 2D key-value Array into a map
let myMap = new Map(kvArray)

myMap.get('key1') // value1

// use Array.from() to transform a map into a 2D key-value Array
console.log(Array.from(myMap)) // == kvArray

// A succinct way to do the same, using the spread syntax
console.log([...myMap])

// or use the keys() or values() iterators, and convert them to an array
console.log(Array.from(myMap.keys())) // ['key1', 'key2']