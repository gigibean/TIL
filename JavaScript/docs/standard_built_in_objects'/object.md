# Object
Object생성자는 객체 래퍼를 생성한다.

## 구문
```js
// 객체 초기자 또는 리터럴
{ [nameVlauePair[, nameValuePair2[, nameValuePairN]]]}

// 생성자
new Object([value])
```

## 매개변수
`nameValuePair1, nameValuePair2, ...nameValuePairN` 
콜론으로 나뉘엊 있는 키(문자열)와 값의 쌍

`value`

## 설명
Object 생성자는 주어진 값의 객체 리퍼를 생성한다. 저이진 값이   null이거나 undefined면 
빈 객체를 생성해 반환하고, 그렇지 않으면 값에 맞는 자료형의 객체를 반환한다.    
만약 값이 미이 객체이면 그 값을 그대로 반환한다.    
생성자가 아닌 맥락에서 호출하면 Object는 new Object()와 동일하게 작동한다.  

## Object 생성자의 속성

* `Object.length` : 1의 값을 가진다.
* `Object.prototype` : Object 형의 모든 객체에 속성을 추가할 수 있다.

## Object 생성자와 메서드

### Object.assign()
하나 이상의 원본 객체들로부터 모든 열거 가능한 속성들을 대상 객체로 복사한다. 

<details>
<summary>Object.assign 자세히</summary>

`Object.assign()`메소드는 열거할 수 잇는 하나 이상의 출처 객체(두번째 인자)로부터 대상 객체(첫번째 인자)로 속성을 복사할 대 사용한다. 대상 객체를 반환한다.

```js
const target = {a:1, b:2}
const source = {b: 4, c:5}

const returnedTarget = Object.assign(target, source)

console.log(target)
// Object {a: 1, b:4, c:5}
console.log(returnedTarget)
// Object {a:1, b:4, c:5}
```

#### 구문
```js
Object.assign(target, ...sources)
```
##### 매개변수
`target`: 대상 객체  
`sources`: 하나 이상의 출처 객체  

##### 반환값
대상 객체

#### 설명
동일한 키가 존재할 경우 대상 객체의 속성은 출처 객체의 속성으로 덮어씌여진다. 후에 출처의 속성은 이전의 출처의 속성과 유사하게 덮어쓴다.    

Object.assign()메소드는 열거할 수 있는 출처 객체의 속성만 대상 객체로 복사한다. 이 메서드는 출처 객체의 [[Get]], 대상 객체의 [[Set]] 을 이용하여 getter와 setter를 호출한다. 따라서 이 속성을 단순히 복사하거나 새롭게 정의하는 것이 아니라 할당하는 것이다. 병합 출처가 getter를 포함하는 경우 포로토타입으로 새로운 속성을 병합하는 것이 적절하지 않을 수 있다. 프로토타입으로 속서으이 열거성을 포함한 속성의 정의를 복사하려면 대신 Object.getOwnPropertyDescriptor() 와 Object.defineProperty()를 사용해야한다. String과 Symbol 속성 모두 복사된다. 

에러가 발생할 수 있는 상황에서는(예, 프로퍼티가 쓰기 불가인 경우), TypeError가 발생하며, 에러가 발생하기 전에 속성이 추가되었다면 target 객체는 변경될 수 있다.

Object.assign() 메소드는 null또는 undefined 출처 값에 대해서는 오류를 던지지 않는다.

#### 예시
##### 객체 클로닝
```js
const obj = { a: 1}
const copy = Object.assign({}, obj)
console.log(copy) //{a:1}
```

##### 깊은 클로닝에 대한 주의사항
깊은 클로니에 대해서 Object.assign() 은 속성의 값을 복사하기 때문에 다른 대안을 상용해야 한다. 출처 값이  객체에 대한 차조인 경우 참조값만을 복사한다.

```js
function test() {
    'use strict'

    let obj1 = {a: 0, b: {c: 0} }
    let obj2 = Object.assign({}, obj1)
    console.log(JSON.stringify(obj2)) // {a: 0, b: {c: 0}}

    obj1.a = 1
    console.log(JSON.stringify(obj1)) // {a: 1, b: {c:0}}
    console.log(JSON.stringify(obj2)) // {a: 0, b: {c:0}}

    obj2.b.c = 3 // obj1, obj2 모두에 영향을 줌
    console.log(JSON.stringify(obj1)) // {a:1, b: {c: 3}}
    console.log(JSON.stringify(obj2)) // {a: 2, b: {c: 3}}

    // 깊은 클론
    obj1 = {a: 0, b: {c: 0}}
    let obj3 = {a: 0, b: {c : 0}}
    let obj3 = JSON.parse(JSON.stringify(obj1))
    obj1.a = 4;
    obj1.b.c = 4
    console.log(JSON.stringify(obj3)) // {a : 0, b, {c : 0}}
}


</details>

## Object 인스턴스와 Object 프로토타입 객체
JS에서 모든 객체들은 Object의 자손이다. 모든 객체는 Obejct.prototype으로부터 메서드와 속성을 상속하는데 나중에 덮어쓸수도 있다. 예를들어 다른 생성자의 프로토타입은 그 constructor속성을 덮어쓰고 자신의 toString()메서드를 제공한다. Object 프로토타입 객체에 대한 변경 내용은 그 변경 내용에 영향을 받는 속성들과 메소드들이 프로토입인 체인을 따라 더이상 무시되지 않는 한 모든 객체들로 전달된다.   