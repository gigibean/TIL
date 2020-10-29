# Array Methods
## 자주 사용하는 연산

### 배열 항목들을 순환하며 처리하기
```js
fruits.forEach(function (item, index, array)  {
    console.log(item, index)
})
```
### 배열 끝에 항목 추가하기

```js
let newLength = fruits.push('오렌지')
```

### 배열 끝에 항목 제거하기

```js
let last = fruits.pop()
// ['사과', '바나나']
```

### 배열 앞에서부터 항목 제고하기

```js
let first = fruits.shift()
// ['바나나']
```

### 배열 앞에 항목 추가하기

```js
let newLength  = fruits.unshift("딸기")
// ['딸기', '바나나']
```

### 배열 안 항목의 인덱스 찾기

```js
let pos = fruits.indexOf('바나나')
// 1
```

### 인덱스 위치에 있는 항목 제거하기
```js 
let removedItem = fruits.splice(pos, 1)
```

### 배열 복사하기

```js
let shallowCopy = fruits.slice()
```

## 주의사항
숫자로 시작하는 JS 속성은 마침표 구문으로 접근할 수 없으며, 반드시 괄호 표기법으로 접근해야 한다.
예를 들어 3d라는 이름의 속성을 가진 객체에서 해당 속성에 접근할 땐 괄호 표기법을 사용해야 한다.

```js
let years = [1950, 1960, 1970]
console.log(years.0) // 구문 오류
console.log(years[0]) // 정상 작동
```

```js
renderer.3d.setTexture(model, 'charcter.png') // 구문 오류
renderer['3d'].setTexture(model, 'character.png') // 정상작동
```

3d에서 '3d'를 따옴표로 감싸야 함에 주의하자. JS 배열 인덱스도 따옴표로 감쌀 수 있지만, year[2]를 year['2']처럼, 그러나 굳이 필요하진 않다.  

year[2]의 2는 JS엔진이 암시적인 toString 변환을 사용해 문자열로 변환한다. 그 결과로서 '2'와 '02'는 year객체에서 서로 다른 칸을 가리키며, 다음 코드는 true가 될 수 있다.

```js
console.log(year['2'] !== year['02'])
```


## Array.from()
유사 배열 또는 반복 가능한 객체로부터 새로운 Array인스턴스를 생성한다.

<details>
<summary>Array.from() 자세히</summary>

`Array.from()`메서드는 유사 배열 객체(array-like object)나 반복 가능한 객체(iterable object)를 얕게 복사해 새로운 Array 객체를 만든다.

```js
console.log(Array.from('foo'))
// expected output: Array['f', 'o', 'o']

console.log(Array.from([1, 2, 3], x => x + x))
// expected output: Array[2, 4, 6]
```

### 구문
```js
Array.from(arrayLike[, mapFn[, thisArg]])
```
#### 매개변수
`arrayLike`     
배열로 변환하고자 하는 유사 배열 객체나 반복 가능한 객체    

`mapFn` (optional)      
배열의 모든 요소에 대해 호출할 매핑 함수

`thisArg` (optional)    
`mapFn`실행시에 this로 사용할 값

#### 반환값
새로운 `Array`인스턴스

### 설명
다음과 같은 경우에 `Array.from()`으로 새`Array`를 만들 수 있다. 
* 유사 배열 객체(length 속성과 인덱싱된 요소를 가진 객체)
* 순회 가능한 객체(Map, Set 등 객체의 요소를 얻을 수 있는 객체)

`Array.from()`은 선택 매개변수인 mapFn을 가지는데, 배열(혹은 배열 서브클래스)의 각 요소를 매핑할 때 사용할 수 있다. 즉, `Array.from(obj, mapFn, thisArg)`는 중간에 다른 배열을 생성하지 않는 접을 재외한다면, `Array.from(obj).map(mapFn, thisArg)`와 같다. 이 특징은 typed arrays와 같은 특정 배열 서브클래스에서 중간 배열 값이 적절한 유형에 맞게 생략되기 때문에 특히 중요하다. 

from() 메서드의 length 속성은 1이다.

클래스 구문은 내장 및 새 클래스의 상속을 가능하게 했다. 그 결과로 Array.from과 같은 정적 메서드는 Array의 서브클래스에 의해 상속되면 Array 대신 자신의 인스턴스를 만든다.   

### 예제
#### String에서 배열 만들기
```js
Array.from('foo')
// ['f', 'o', 'o']
```

#### Set에서 배열 만들기
```js
const s = new Set(['foo', window]);
Array.from(s);
//or
// [...s]
```

#### Map에서 배열 만들기
```js
const m = new Map([[1, 2], [2, 4], [4, 8]])
Array.from(m)
// [[1, 2], [2, 4], [4, 8]]

const mapper = new Map([['1', 'a'], ['2', 'b']])
Array.from(mapper.values());
// ['a', 'b']

Array.from(mapper.keys());
// ['1', '2']
```

### 배열형태를 가진 객체(arguments)에서 배열 만들기
```js
function f() {
    return Array.from(arguments)
}

f(1,2,3) // (3) [1, 2, 3]
```

### Array.from과 화살표 함수 사용하기
```js
Array.from([1, 2, 3], x => x + x)
// [2, 4, 6]
```

```js
// In ES6 using Array from() and keys() methods.

Array.from(Array(10).keys())
//=> [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
// Shorter version using spread operator.

[...Array(10).keys()]
//=> [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
// Start from 1 by passing map function to Array from(), with an object with a length property:

Array.from({length: 10}, (_, i) => i + 1)
//=> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

### 시퀀스 생성하기
```js
const range = (start, stop, step) => Array.from({length: (stop - start) / step + 1}, (_, i) => start + (i * step))

range(0, 5, 1)

range('A'.charCodeAt(0), 'Z'.charCodeAt(0), 1).map(x => String.fromCharCode(x))
```

</details>

## Array.isArray()
인자가 Array인지 판별한다.

```js
Array.isArray([1, 2, 3]) //true
Array.isArray('foo bar') //false
```

<details>
<summary>Array.isArray() 자세히</summary>

### instanceof vs isArray
Array 객체를 판별할 때, Array.isArray 는 iframe을 통해서도 작동하기 때문에 instanceof 보다 적합하다.

```js
var iframe = document.createElement('iframe')
document.body.appendChild(iframe)
xArray = window.frames[window.frames.length-1].Array
var arr = new xArray(1,2,3); // [1,2,3]

// 올바른 Array 판별
Array.isArray(arr) //true;

// iframe을 통해서 작동하지 않기 대문에 올바르지 않은 방법
arr instanceof Array //false
```

</details>

## Array.of()
인자의 수나 유형에 관계없이 가변 인자를 갖는 새 Array인스턴스를 만든다.

<details>
<summary>Array.of() 예시</summary>
`Array.of()`와 `Array` 생성자의 차이는 정수형 인자의 처리방법에 있다. `Array.of(7)`은 하나의 요소 7을 가진 배열을 생성하지만 `Array(7)`은 length 속성이 7인 빈 배열을 생성한다.

```js
Array.of(2) // [2]
Array.of(1, 2, 3) // [1,2,3]

Array(2) // [,,]
Array(1,2,3) //[1,2,3]
```

```js
Array.of(undefined) //[undefined]
```

</details>

## Array.concat()
인자로 주어진 배열이나 값들을 개존 배열에 햡쳐서 새 배열을 반환하다.
* 기존 배열을 변경하지 않는다.
* 추가된 새로운 배열을 반환한다.

## Array.copyWithin()
배열의 일부을 얕게 복사한뒤 동일한배열의 다른 위치에 덮었고 그 배열을 반환한다. 이때 크기를 수정하지 않고(배열의 길이) 반환한다.

<details>
<summary>Array.copyWithin() 자세히</summary> 

```js
arr.copyWithin(target[, start[, end]])
```

### 매개변수
* target : 복사한 시퀀스 값을 넣을 위치를 가리키는 0 기반 인덱스 음수를 지정하면 인덱스를 배월의 끝에서부터 계산한다. target이 arr.length보다 크거나 같으면 아무것도 복사하지 않는다. target이 start이후라면 복사한 시퀀스를 arr.length에 맞춰 자른다.

* start (optional) : 복사를 시작할 위치를  가리키는 0 기반 인덱스 음수를 지정하면 인덱스를 배열의 끝에서부터 계산한다.

* end (optional) : 복사를 끝낼 위치를 가리키는 0 기반 인덱스 copyWithin 은 end 인덱스 이전까지 복사하므로 end인덱스가 가리키는 요소는 제외된다. 음수를 지정하면 인덱스를 배월의 끝에서부터 계산한다. 기본값은 arr.length로 end를 지정하지 않으면 배열의 끝까지 복사한다.

### 반환값
수정한 배열

</details>

## Array.entries()
배열의 각 인덱스에 대한 키/값 쌍을 가지는 새로운 Array Iterator 객체를 반환한다.

<details>
<summary>Array.entries() 예시</summary>

```js
const a = [1, 2, 3]
for (const [index, element] of a.entries()) {
    console.log(index, element)
}
// 0 1
// 1 2
// 2 3
```

```js
var a = [1, 2, 3]
var iterator = a.entries()
 
for (let e of iterator) {
    console.log(e)
}
// [0, 1]
// [1, 2]
// [2, 3]
```

</details>

## Array.every()
배열 안의 모든 요소가 주어진 판별함수를 통과하는지 테스트한다.
빈 배열에서 호출하면 무조건 true를 반환한다.

<details>
<summary>Array.every() 자세히</summary>

```js
const isBelowThreshold = (currenValue) => currentValue < 40

const arr1 = [1, 30, 38, 10]
console.log(arr1.every(isBelowThreshold))
// true
```
### 구문
```js
arr.every(callvack[, thisArg])
```

#### 매개변수
* callback : 각 요소를 시험할 함수. 다음 세가지 인수를 받는다.
    * currentValue : 처리할 현제 요소
    * index (optional) : 처리할 현재 요소의 인덱스
    * array (optional) : every를 호출한 배열
* thisArg (optional) : callback을 샐행할 때 this로 사용하는 값

#### 반환값
true or false

</details>

## Array.fill()
배열의 시작 인덱스부터 끝 인덱스의 이전가지 정적인 값 하나로 채운다.

<details>
<summary>Array.fill() 자세히</summary> 

### 구문

```js
arr.fill(value[, start[, end]])
```

#### 매개변수
* value : 배열을 채울 값
* start (optional) : 시작 인덱스, 기본값은 0
* end (optional) : 끝 인덱스, 기본 값은 this.length

#### 반환값
변형한 배열

### 설명
fill 메서드는 value, start, end 의 3개의 인자를 가진다. start와 end 인자는 선택 사항으로써 기본값으로 각각 0과, this 객체의 length 를 가진다.   
length가 배열의 길이일 때, start 가 음수이면 시작 인덱스는 length+start 이다. end가 음수이면 끝 인덱스는 length+end이다.
fill은 일반 함수이며, this 값이 배열 객체일 필요는 없다.
fill 메서드는 변경자 메서드로, 복사본이 아니라 this객체를 변형해야한다. 
value에 객체를 받을 경우 그 참조만 복사해서 배열을 채운다.

</details>

## Array.filter()
주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환한다.

<details>
<summary>Array.filter() 자세히</summary>

### 구문

```js
arr.filter(callback(element[, index[, array]])[, thisArg])
```
#### 매개변수
* callback : 각 요소를 시험할 함수. true를 반환하면 요소를 유지하고, false를 반환하면 버린다. 다음 세가지 매개변수를 받는다.
    * element (optional) : 처리할 현재 요소
    * index (optional) : 처리할 현재 요소의 인덱스
    * array (optional) : filter 를 호출한 배열
* thisArg (optional) : callback 을 실행할 때 this로 사용하는 값

### 설명
배열 내 각요소에 대해 한번 제공된 callback함수를 호출해 callback이 true로 강제하는 값을 반환하는 모든 값이 있는 새로운 배열을 생성한다. callback은 할당된 값이 있는 배열의 인덱스에 대해서만 호출된다. 삭제됐거나 값이 할당된 적이 없는 인덱스에 대해서는 호출하지 않는다. callback테스트를 통과하지 못한 배열요소는 그냥 건너 뛰며 새로운 배열에 포함되지 않는다.

callback은 다음 세 인수와 함께 호출된다:
1. 요소값
2. 요소 인덱스
3. 순회되는 객체 배열
thisArg 매개변수가 filter에 제공된 경우, 호출될 때 그 값은 callback의 this 값으로 전달된다. 
그 이외에 undefined 값도 callback의 this값으로 쓰기 위해 전달된다. 결국 callback의 해 관찰될 수 있는 this 값은 this를 결정하는 함수의 평소 규칙에 따라 결정된다.

filter()는 호출되는 배열을 변화시키지(mutate)않는다.

filter()에 의해 처리되는 요소의 범위는 callback의 첫 호출 전에 설정된다. filter() 호출 시작이후 배열의 추가된 요소는 callback에 의해 방문되지 않는다. 배열의 기존 요소가 변경 도는 삭제된 경우, callback에 전달된 그 값은 filter() 가 그 요소를 방문한시점에 값이 된다. 삭제된 요소는 반영되지 않는다.

### 예제

#### 모든 작은 값 걸러내기

```js
function solution(n) {
    return n >= 10
}
var filterd = [12, 4, 100, 200, 14].filter(solution)
// filterd == [12, 4, 14]
```

#### JSON에서 무효한 항목 거르기
0이아닌 숫자 id인 모든 요소의 걸러진 json을 만들기 위해 filter()를 사용한다.
```js
var arr = [
    {id: 15},
    {id: -1},
    {id: 0},
    {id: 3},
    {id: 12.2},
    {id: null},
    {}.
    {id: NaN},
    {id: 'undefined'}
]
var invalidEntries = 0;

function isNumber(obj) {
    return obj !== undefined && typeof(obj) === 'number' && !isNaN(obj)
}

function filterById(item) {
    if(isNumber(item.id) && item.id !== 0) {
        return true
    }
    invalidEntries++
    return false
}

var aryById = arr.filter(filterById)

console.log('filtered array\n', arrByID)

//filtered array
// [{id: 15}, {id: -1}, {id: 3}, {id: 12.2}]

console.log('number of invalid entries = ', invalidEntries)
// number of invalid entries = 5
```

```js
var fruits = ['apple', 'banana', 'grapes', 'mango', 'orange']
// 검색 조건에 따른 필터링(쿼리)
function filterItems(query) {
    return fruits.filter(function(el) {
        return el.toLowerCase().indexOf(query.toLowerCase()) > -1
    })
}

console.log(filterItems('ap')) // ['apple', 'grapes']
console.log(filterItems('an')) // ['banana', 'mango', 'orange']
```

```js
const filterItems = (query) => {
    fruits.filter((value) => 
        value.toLowerCase().indexOf(query.toLowerCase()) > -1
    )
}
```
</details>

## Array.find()
주어진 판별 함수를 만족하는 첫 번째 요소의 값을 반환한다. 그런 요소가 없다면 undefined를 반환한다.

## Array.findIndex()
주어진 판별 함수를 만족하는 첫 번째 요소의 인덱스를 반환한다. 그런 요소가 없다면 -1 를 반환한다.

## Array.flat()
모든 하위 배열 요소를 지정한 깊이 까지 재귀적으로 이어붙인 새로운 배열을 생성한다.

<details>
<summary>Array.flat() 자세히</summary>

### 구문

```js
const newArr = arr.falt([depth])
```
#### 매개변수
* depth (optional) : 중첩 배열 구조를 평탄화할 때 사용할 깊이의 값. 기본 값은 1이다.

#### 반환값
하위 배열을 이어 붙인 새로운 배열

### 예제
#### 중첩 배열 평탄화

```js 
const arr1 = [1, 2, [3, 4]]
arr.flat()
// [1, 2, 3, 4]

const arr2 = [1, 2, [3, 4, [5 ,6]]]
arr2.flat()
// [1, 2, 3, 4, [5, 6]]

arr.flat(2)
// [1, 2, 3, 4, 5, 6]

const arr3 = [1, 2, [3, 4, [5, 6 [7, 8, [9, 10]]]]]
arr.flat(Infinity)
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```
#### 배열 구멍 제고

```js
const arr1 = [1, 2, , 4, 5]
arr1.flat()
// [1, 2, 4, 5]
```
### 대안
#### reduce 와 concat

```js
const arr = [1, 2, [3, 4]]
// To flat single level array
arr.flat()
// is equivalent to 
arr.redeuce((acc, val) => acc.concat(val), [])
// [1, 2, 3, 4]

// or with decomposition syntax
const flattened = arr => [].concat(...arr)
```

</details>

## Array.flatMap()
먼저 미팽함수를 사용해 각 엘리먼트에 대해 map 수행 후 결과를 새로운 배열로 평탄화한다. 이는 깊이 1의 flat이 뒤따르는 map과 동일하지만 flatMap은 이 두개의 메소드를 병합할 때 효율적이다.

<details>
<summary>Array.flatMap() 예제</summary>

### 예제
#### map과 flatMap
```js
let arr1 = [1,2,3,4]
arr1.map(x => [x * 2])
// [[2], [4], [6], [8]]

arr1.flatMap(x => [x * 2])
// [2, 4, 6, 8]

arr1.flatMap(x => [[x * 2]])
// [[2], [4], [6], [8]]
```

```js
let arr1 = ["it's Sunny in", "", "California"]
arr1.map(x => x.split(" "))
// [["it's", "Sunny", "in"], [""], ["California"]]

arr1.flatMap(x => x.split(" "))
//["it's", "Sunny", "in", "California"]
```

#### flatMap()을 이용한 아이템 추가 및 제거
map을 하는 과정에서 아이템을 추가하거나 제거([]를 반환)하여 아이템의 개수를 바꿀 수도 잇다. 다른 말로는 각각의 아이템에 대해 1:1대응관계 분만아니라 다대다 대응도 가능하다는 것이다. 이러한 측면에서 filter가 하는 역할의 반대역할을 한다고 볼 수 있다. 단순히 아무런 변화를 주고 싶지않을 때에는 원소 하나를 가진 배열을 반활 수도, 아이템을 추가하고 싶을 때는 다-원소 배열을 반환할수도, 아이템을 제고하고싶을 때는 빈배열을 반환할 수도 있다.

```js
let a = [5, 4, -3, 20, 17, -33, -4, 18]

a.flatMap(value => 
(value < 0) ? [] : 
(value % 2) ? [value - 1, 1] : [value]
)
```

</details>

## Array.forEach()
주어진 함수를 배열 요소 각각에 대해 실행한다. 반환값은 undefined이다.

<details>
<summary>다양한 for 문</summary>

### for ...of
반복가능한 객체(Array, Map, Set, String, TypedArray, arguments 객체등을 포함)에 대해서 반복하고 객 개별 속성값에 대해 실행되는 문이 있는 사용자 정의 반복 후크를 호출하는 루프를 생성한다.

### for ...in
상속된 열거 가능한 속성들을 포함하여 객체에서 문자열로 키가 지정된 모든 열거 가능한 속성에 대해 반복한다.
배열 인덱스는 정수로 된 열거 가능한 속성이며, 일반적인 객체의 속성과 같다. for...in은 특정 순서에 따라 인덱스를 반환하는 것을 보장할 수 없다. for...in 반복문은 정수가 아닌 이름을 가진 속성, 상속된 모든 열거 가능한 속성들을 반환한다.

반복되는 순서는 구현에 따라 다르기 때문에 배열의 반복이 일관된 순서로 요소를 방문하지 못할 수도 있다. 그러므로 방문의 순서가 중요한 배열의 반복시 숫자 인덱스를 사용할 수 있는 for 반복문을 사용하는 것이 좋다. 또는 forEach나 for...of

</details>

## Array.includes()
배열이 특정 요소를 포함하고 있는지 판별한다. boolean 값을 반환한다.

<details>
<summary>비슷한 메서드</summary>

* Array.find() : 해당 배열 안에 판별 함수를 만족하는 첫번째 요소의 값을 반환한다.
* Array.findIndex() : 해당 배열 안에 판별 함수를 만족하는 첫번째 요소의 인덱스를 반환한다.
* Array.every() : 해당 배열의 요소들이 판별 함수를 만족하는 지 boolean으로 반환한다.
* Array.indexOf() : 배열에서 지정된 요소를 찾을 수 있는 첫 인덱스를 반환하고 존재하지 않으면 -1를 반환한다.

</details>

## Array.join()
배열의 모든 요소를 연결해 하나의 `문자열`로 만든다.
+ String.split()은 문자열을 하나의 배열로 만든다.

## Array.keys()
배열의 각 인덱스를 키 값으로 가지는 새로운 Array Iterator 객체를 반환한다.

## Array.lastIndexOf()
배열에서 주어진 값을 발견할 수 있는 마지막 인덱스를 반환하고 요소가 존재하지 않으면 -1을 반환한다. 배열 탐색은 fromIndex(2번째 파라미터)에서 시작하여 뒤로 진행된다.

+ Array.indexOf()는 첫 인덱스를 반환한다면 Array.lastIndexOf()는 마지막 인덱스를 반환한다.

## Array.map()
배열 내에 모든 요소에 각각에 대한 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환한다.  
반환값은 배열의 각 요소에 대해 실행한 callback의 결과를 모은 새로운 배열이다.

## Array.pop()
배열에서 마지막 요소를 제거하고 그 요소를 반환한다.
반환 값은 배열에서 제거한 요소이고 빈 배열인 경우 undefined를 반환한다.

## Array.push()
배열의 끝에 하나 이상의 요소를 추가하고 배열의 새로운 길이를 반환한다.

여러개를 추가하고 싶으면 콤마(,) 로 이어주면 된다.

반환값은 호출한 배열의 새로운 length이다.

## Array.reduce()
배열의 각 요소에 대해 주어진 reducer함수를 실행하고 하나의 결과값을 반환한다.

리듀서 함수는 네 개의 인자를 가진다.
* 누산기(acc)
* 현재값(cur)
* 현재 인덱스(idx)
* 원본 배열(src)
리듀서 함수의 반환값은 누산기에 할당되고 누산기는 순회 중 유지되므로 결국 최종 결과는하나의 값이 된다.

<details>
<summary>Array.reduce 자세히</summary>

### 구문
```js
arr.reduce(callback[, initialValue])
```

#### 매개변수
* callback : 배열의 각 요소에 대해 실행할 함수 다음 네가지 인수를 받는다.
    * accumulator: 누산기는 콜백의 반환값을 누적한다. 콜백의 이전 반환값 또는 콜백의 첫번째 호출이면서 initialValue를 제공한 경우에는 initialValue의 값이다.
    * currentValue: 처리할 현재 요소
    * currentIndex (optional): 처리한 현재 요소의 인덱스 
    * array (optional): reduce를 호출한 배열
* initialValue (optional) : callback의 최초 호출에서 첫 번째 인수에 제공하는 값 초기값을 제공하지 않으면 배열의 첫 번째 요소를 사용한다. 빈 배열에서 초기값없이 reduce()를 호출하면 오류가 발생한다.

#### 반환값
누적 계산의 결과 값
<details>

## Array.reduceRight()
reduce() 메서드와 같지만 오른쪽에서 왼쪽으로 값을 단일 값으로 줄인다.

## Array.reverse()
배열의 순서를반전한다. 첫번째 요소는 마지막 요소가 되며 마지막 요소는 첫번째 요소가 된다.

## Array.shift()
배열에서 첫 번재 요소를 제거하고 제거된 요소를 반환한다. 이 메서드는 배열의 길이를 변하게 한다.

## Array.slice()
배열의 begin부터 end(optional)까지 얕은 복사본을 새로운 배열 객체로 반환한다. 원본 배열은 바뀌지 않는다.

## Array.some()
배열의 어떤 요소라도 하나만 참이면 true를 반환하고 모두 만족하지 못하면 false를 반환한다.

## Array.sort()
배열의 요소를 적절한 위치에 정렬한 후 그 배열을 반환한다. 정렬은 stable sort가 아닐 수 있다. 기본 정렬 순서는 문자열의 유니코드 코드 포인트를 따른다.
그래서 10보다 2가 더클 수도 있다.
그렇기 때문에 sort에 compare함수를 적어주어야 한다.

`Array.sort((a,b) => a-b)`혹은 `Array.sort((a,b) b-a)`(reverse)

## Array.splice()
배열의 기존 요소를 삭제 또는 교체하거나 새 요소를 추가하여 배열의 내용을 변경한다.

<details>
<summary>Array.splice() 자세히</summary>

### 구문
```js
array.splice(start[, deleteCount[, item1[, item2[, ...]]]])
```

#### 매개변수
* start: 배열의 변경을 시작할 인덱스
* deleteCount (optional) : 배열에서 제거할 요소의 수 만약 0이하면 어느 요소도 제거하지 않는다. 그 인덱스에 있는 요소가 뒤로 밀리고 그자리에 지정 값(3번째 인자)을 넣는다.
* item (optional) : 배열에 추가할 요소. 아무것도 지정하지 않으면 기존 요소를 제거만 한다.

#### 반환값
제거한 요소를 담은 배열, 하나의 요소만 제거한 경우 길이가 1인 배열을 반환한다. 아무것도제거하지 않으면 빈 배열을 반환한다.

</details>

## Array.toLacaleString()
배열의 요소를 나타낸는 문자열을 반환한다. 요소는 이 메서드를 사용하여 문자열로 변환되고 이 문자열은 locale 고유 문자열(가령 쉼표',')에 의해 분리된다.

<details>
<summary>Array.toLacaleString 자세히</summary>

### 예제
```js
var number = 1331;
var date = new Date()
var myArr = [number , date, 'foo']
var str = myArr.toLocaleString();
console.log(str);
//"1,331,10/29/2020, 11:09:53 AM,foo"
```
</details>

## Array.toString()
toString() 메서드는 배열 및 그 요소를 나타내는 문자열을 반환한다.

### 설명
Array객체는 Object의 toString 메서드를 재정의한다. Array객체에 대해 toString 메서드는 배열을 합쳐(join) 쉼표로 구분된 각 배열의 요소를 포함하는 하나의 문자열을 반환한다. 

## Array.unshift()
새로운 요소를 배열의 맨 앞쪽에 추가하고 새로운길이를 반환한다.

## Array.values()
배열의 각 인덱스에 대한 값을 가지는 새로운 Array Iterator 객체를 반환한다.