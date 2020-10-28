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

</details>