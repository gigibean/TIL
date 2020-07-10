# JS for React
React 를 위한 JS를 정리해봅니다. react를 위한 더 자세한 자바스크립트 문법을 보시려면 EAMAScript6 문서를 참고해주세요 ::smile::

## Map and Filter

### Map
다른 언어 중 파이썬 같은 경우, 배열의 조각된 값을 리턴하려면

```
arr = [1,2,3,4,5,7];

arr_2 = [i*2 for i in arr];
```

위와 같이 해주었습니다. 자바스크립트에서는 이런 기능을 대신하는 것이 `map()`입니다.

```
arr_map = arr.map(value => value*2);

```

return
```
[ 2, 4, 6, 8, 10, 14 ]
```


이처럼 `map()`을 이용해서 `value`와 `return` 을 넣어주면 그에 따라 배열값을 반환합니다.

<br/>

### Filter
`filter()`는 어떤 조건을 주고 조건을 만족하는 값을 반환하는 메서드입니다.

```
arr_filter = arr.filter(v => v > 4);
```
return
```
[ 5, 7 ]
```
이처럼 `filter()`는 `return` 에 쓴 조건에 만족하는 값을 반환하는 메서드고, 배열을 반환합니다.

# CLass

기존 다른 언어 중 파이썬 같은 경우에는 클래스를 생성할 때

```
class Example {
    __init__{...}
}
```
위와 같이 사용합니다.       
그러나 자바스크립트 같은 경우

```
class Example {
    constructor() {...}
}
```
로 생성자를 생성합니다. 

`class`는 기본적으로 생성자 프로퍼티, 추가적으로 get, set 함수등을 포함하며, 이 `class`로 객체를 `new` 를 사용하여 생성합니다. 그리고 `class`내에 있는 프로퍼티와 메서드들을 객체를 통하여 호충할 수 있습니다.

## 상속

부모의 프로퍼티를 가져다 사용할 수 있습니다. 또한 부모를 상속한다, 확장한다는 의미에서
`extends` 와 부모클래스의 이름을 적어주셔야 합니다.

```
class Person {
    setAge(age) {
        this.age = age;
    }
    getAge() {
        console.log("I'm " + this.age);
    }
}

class User extends Person {
    constructor(name) {
        super();
        this.name = name;
    }
    ...
```
위와 같이 상속을 받을 때는 `super()` 를 써주어야 합니다.

```
class Person {
    constructor(age) {
        this.age = age;
        
    }
    printInfo() {
        console.log("I'm " + this.name + "and " + this.age);
    }
}

class User extends Person {
    constructor(name, age) {
        super(age);
        this.name = name;
    }
    getName() {
        console.log("I'm " + this.name);
    }
}
```
상속 첫번째 예시처럼 `constructor`를 만들지 않으면 자동으로 생성됩니다.
하지만 `constructor`를 직접 생성해야 한다면, 부모에서 생성한 `constructor`의 파라미터를 자식 클래스의 생성자의 파라미터에도 써주셔야 합니다. `super()` 또한 부모 `constructor`의 파라미터를 적어주셔야 합니다. 이는 `super()`가 부모 `constructor`의 input이기 때문입니다.      
그리고 당연하게도 객체를 생성할 때도 두 인자 모두 채워주셔야 합니다.        
그리고 재미있는 것은 자식 클래스의 프로퍼티 또한 부모 클래스에서도 사용할 수 있습니다. ::star::