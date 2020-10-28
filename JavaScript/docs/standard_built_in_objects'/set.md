# Set

Set객체는 자료형에 관계 없이 원시 값과 객체 참조 모두 유일한 값을 저장할 수 있다.

## 구문
```js
new Set([iterable]);
```
### 매개 변수
* iterable: 반복 가능한 객체가 전달된 경우, 그 요소는 모두 새로운 Set에 추가된다. 만약 매개변수를 명시하지 않거나 null을 전달하면, 새로운 Set은 비어있는 상태가 된다.

### 반환값
새로운 Set 객체

## 설명
Set 객체는 값 콜랙션으로 삽입 순서대로 요소를 순회할 수 있다. 하나의 Set 내 값은 한번만 나타날 수 있다. 즉, 어떤 값은 그 Set콜랙션 내에서 유일하다. 
### 값 같음
Set 내의 값은 유일해야 하기 때문에 값이 같은지 검사를 수행한다. 원래는 +0 === -0 은 같지만 Set에서는 다른 값이었다. 그러나 이는 변경되었다. 

NaN과 undefined도 Set에 저장할 수 있다. 원래 NaN !== NaN 이지만, Set에서 NaN은 NaN과 같은 것으로 간주된다.

## 속성
* Set.length : 값이 0 인 속성이다.
* get Set[@@species]: 파생 객체를 생성하는데 사용하는 생성자 함수이다.
* Set.prototype: Set 생성자의 프로토타입을 나타낸다. 모든 Set객체에 속성을 추가할 수 있다.

## Set 인스턴스
모든 Set인스턴스는 Set.prototype을 상속받는다.  
### 속성
`Set.constructor` 
인스턴스의 프로토타입을 만든 함수를 반환한다. 이는 기본으로 Setgkatndlek.

`Set.size`
Set 객체 내의 값의 개수를 반환한다.

### 메서드
`Set.add(value)`      
Set객체에 주어진 값을 갖는 새로운 요소를 추가한다. Set 객체를 반환한다. 

`Set.clear()`     
Set 객체에서 모든 요소를 제거한다.

`Set.delete(value)`   
value와 관련된 요소를 제거하고 Set.has(value)가 이전에 반환했던 값을 반환한자. Set.has(value)는 그 뒤에 false를 반환한다.

`Set.entries()`   
삽입 순으로 Set 객체 내 각 값에 대한 [value, value] 배열을 포함하는 새로운 intertor 객체를 반환한다. 이는 Map 객체와 비슷하게 유지되므로 여기서 항목은 그 key 와 value에 대해 같은 값을 갖는다.
```js
const set1 = new Set();
set1.add(42);
set1.add('forty two');
const iterator1 = set1.entries();
for(const entry of iterator1) {
    console.log(entry);
    // [42, 42]
    // ['forty two', 'forty two']
}
```

```js
var mySet = new Set();
mySet.add('foobar')
mySet.add(1)
mySet.add('baz')

var setIter = myset.entries()

console.log(setIter.next().value) // ['foobar', 'foobar']
console.log(setIter.next().value) // [1, 1]
console.log(setIter.next().value) // ['baz', 'baz']
```

`Set.forEach(callbackFn[, thisArg])`    
삽입 순으로 Set 객체 내에 있는 값에 대해 한 번 callbackFn을 호출한다. thisArg매개변수가 forEach로 제공된 경우 이는 각 콜백에 대해 this값으로 사용된다.

<details>
<summary>Set.forEach 자세히</summary>

```js
function logSetElements(value1, value2, set) {
    console.log(`s[${value1}] = ${value2}`)
}
new Set(['foo', 'bar', undefined]).forEach(logSetElements)
// "s[foo] = foo"
// "s[bar] = bar"
// "s[undefined] = undefined"
```

## 구문

```js
mySet.forEach(callback[, thisArg])
```

### 매개변수
* `callback` : 각 요소에 대해 실행할 함수 다음 세가지 인수를 받는다.
    * `currentValue`, `currentKey` : 처리할 현재 요소, Set은 키를 갖지 않으므로 두 인수 모두에 값을 전달한다.
    * `Set` : forEach()를 호출한 Set
* `thisArg` : callback을 실행할 때 this로 사용할 값

### 반환값
* undefined
</details>

`Set.has(value)`    
Set 객체 내 주어진 값을 갖는 요소가 있는지를 나타내는 boolean을 반환한다.

`Set.keys()`    
values() 함수와 같은 함수로 삽이 순으로 Set 객체 내 각 요소에 대한 값을포함하는 새로운 iterator객체를 반환한다.

`Set.values()`
삽입 순으로 Set객체 내 각 요소에 대한 값을 포함하는 새로운 Iterator객체를 반환한다.

<details>
<summary>Set.values 예시</summary>

```js
const set1 = new Set()
set1.add(42)
set1.add('forty two')

const iterator1 = set1.values()
console.log(iterator1.next().value)
// 42
console.log(iterator1.next().value)
//'forty two'
```

</details>

## 예제
### Set 반복
```js
// set 내 항목에 대해 반복
// 순서대로 항목을 기록: 1, "some text", {"a" : 1, "b" : 2}
for (let item of mySet) console.log(item);

// 순서대로 항목을 기록
for (let item of mySet.keys()) console.log(item);

// 순서대로 항목을 기록
for (let item of mySet.values()) console.log(item);

// 순서대로 항목을 기록
// 여기서 key와 value는 같음
for (let [key, value] of mySet.entries()) console.log(key);

// Set 객체를 배열 객체로 반환 (Array.from()으로)
var myArr = Array.from(mySet); // [1, "some text", {"a": 1, "b": 2}]

// html 문서에 실행하는 경우
mySet.add(document.body);
mySet.has(document.querySelector('body')) // true

// set과 array 변환
mySet2 = new Set([1,2,3,4]);
mySet2.size; //4
[...mySet2]; // [1,2,3,4] 
// Set을 Array로 변환하기 위해 전개 연산자 사용

// Array를 Set으로 변환하기 위해 new Set 사용

// 교집합은 다음으로 흉내낼 수 있음
var intersection = new Set([...set1].filter(x => set2.has(x)))

// 차집합은 다음으로 흉내낼 수 있음
var difference = new Set([...set1].filter(x => !set2.has(x)))

// forEach로 set항목 반복
mySet.forEach(function(value) {
    console.log(value);
})