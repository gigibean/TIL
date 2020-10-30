# String

## Methods

### String.fromCharCode()
UTF-16 코드 유닛의 시쿼스로 부터 문자열을 생성해 반환한다.

### String.charCodeAt()
주어진 인덱스에 있는 char을 UTF-16코드를 나타내는 0 부터 65535 사이에 정수를 반환한다.

### String.charAt()
문자열에서 특정 인덱스에 위치하는 유니코드 단일 문자를 반환한다.

### String.concat()
매개변수로 전달된 모든 문자열을 호출문자열에 붙인 새로운 문자열을 반환한다.
```js
const str1 = 'hello'
const str2 = 'world'

console.log(str1.concat(' ', str2))
// hello world
console.log(str1.concat(',' str2))
// hello,world
```

### String.endsWith()
어떤 문자열에서 특정 문자열로 끝나는지를 확인할  수 있으며, true 혹은 false로 반환한다.

### String.includes()
하나의 문자열이 다른 문자열에 포함되어 있는지를 판별하고, 결과를 true 혹은 false로 반환한다. 그리고 이 메서드는 대소문자를 구별한다.

### String.indexOf()
호출한 String 객체에서 주어진 값과 일치하는 첫 번째 인덱스를 반환한다. 일치하는 값이 없으면 -1을 반환한다.

### String.lastIndexOf()
fromIndex(두번째 인자) 로 부터 역순으로 탐색하며 최초로 마주치는 인덱스를 반환한다. 일치하는 부분이 없으면 -1일 반환한다.

### String.localeCompare()
기준 문자열과 비교했을 때 비교 대상 문자열이 정렬상 전에 오는지, 후에 오는지 혹은 같은 순서에 배치되는지를 알려주는 숫자를 리턴한다.

```js
var items = ['ab', 'cz', 'cd']
items.sort((a,b) => a.localeCompare(b))
// ['ab', 'cd', 'cz']
```

### String.match()
문자열이 정규식과 매치되는 부분을 검색한다.

```js
var str = 'For more information, see Chapter 3.4.5.1'
var re = /see (chapter \d+(\.\d)*)/i
var found =str.match(re)

console.log(found)
/*
logs ['see Chapter 3.4.5.1',
      'Chapter 3.4.5.1',
      '.1',
      index: 22,
      input: 'For more information, see Chapter 3.4.5.1'
      ]

'see Chpater 3.4.5.1'은 완전한 매치 상태
'Chapter 3.4.5.1'은 '(chapter \d+(\.\d)*)' 이 부분에 의해 발견
'.1'은 '(\.\d)`를 통해 매치된 마지막 값
'index' 요소가 (22)라는 것은 0에서부터 셀때 22번째 위치부터 완전 매치된 문자열이 나나남을 의미
'input' 요소는 입력된 원래 문자열은 나타냄
*/
```
### String.padEnd()
현재 문자열에 다른 문자열을 채워 주어진 길이를만족하는 새로운 문자열을 반환한다. 채워넣기는 대상 문자열의 끝(우측)부터 적용된다.

```js
const srt = 'Breaded Mushrooms'
console.log(str1.padEnd(25, '.'))
// Breaded Mushrooms........

const str2 = '200'
console.log(str2.padEnd(5))
// '200  '
```

### String.padStart()
문자열의 시작을 다른 문자열로 채워 주어진 길이를 만족하는  새로운 문자열을 반환한다. 채원허기는  대상 문자열의 시작(좌측)부터 적용된다.

### String.repeat()
문자열을 주어진 횟수만큼 반복해 붙인 새로운 문자열을 반환한다.

`str.repeat(count)`

### String.replace()
어던 패턴에 일치하는일부 또는 모든 부분이 교체된 새로운 문자열을 반환한다. 그 패턴은 문자열이나 정규식이 될수 있으며교체 문자열은 문자열이나 모든 매치에 대해 호출된 함수일 수있다.

```js
var newStr = str.replace(regexp|substr, newSubstr|function)
```
### String.search
정규 표현식과 이 String 객체간에 같은 것을 찾기위한 검색을 실행한다.

```js
str.search(regexp)
```

* regexp: 정규 표현식 객체. noe-RegExp 객체 obj가 전달되면 그것은 new RegExp(obj)을 이용하여 암묵적으로 변환한다.

정규 표현식과 주어진 스트링간에 첫번째로 매치되는 것의 인덱스를 반환한다. 찾지 못하면 -1을 반환한다.

+ 비슷한게, indexOf 가 있다. 그러나 search는 정규식을 이용한다.

### String.slice()
문자열의 일부를 추출하면서 새로운 문자열을 반환한다.

2개의 인자를 받고 첫번째는 시작인덱스이고, 두번째는 옵션이며 끝나는 인덱스이다.

### String.split()
지정한 구분자를 이용해서 여러개의 문자열로 나눠 배열에 담는다.

### String.startWith()
어떤 문자열이 특정 문자로 시작하는지 확인하여 결과를 true혹은 false로 반환한다.

### String.substring()
String.slice와 같다. string객체의 시작 인덱스로 부터 종료 인덱스 전까지 문자열의 부분 문자열을 반환한다.

### String.toLowerCase and String.toUpperCase
모두 소문자 혹은 모두 대문자로 변환한다.

### String.toString()
String 오브젝트의 문자열 값을 표시한다.

### String.trim()
문자열 양 끝의 공백을 제거한다. 공백이란 모든 공백문자(space, tab, NBSP 등) 와 같은 개행문자를 의미한다.

### String.valueOf()
String 객체의 원시값을 반환한다.
```js
const strObj = new String('foo')
console.log(strObj)
// String {"foo"}

console.log(strObj.valueOf())
// "foo"