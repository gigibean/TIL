# OOP
특정한 객체의 특정 부분만을 추상화회해서 컴퓨터로 하나의 객체로 사용할 수 있게 하는 설계도를 클래스라고 합니다.     
이러한 설계도만 있으면 설계도를 바탕으로해서 얼마든지 객체를 만들어 낼 수 있습니다.     
이러한 클래스를 가지고 얼마든지 복제를 할 수 있습니다.  이를 인스턴스라고 합니다. 구체적인 복제물을 의미합니다.     
컴퓨터 상에서는 클래스를 만들고 그것의 복제물, 인스턴스를 만드는 것입니다.      
예를 들어 사람이 가지고 있는 필요한 특징을 만들고 이를 학생과 선생님이라는 클래스에서 상속해서 학생에는 학번과 나이를 추가한 또따른 복제를 할 수 있습니다. 이는 일종이 확장에 대한 개념입니다. 이렇듯 클래스는 계층저으로 이루어져 있습니다.        

## 클래스와 인스턴스
ES6가 나오며 `class`라는 키워드를 도입을 하면서 좀 더 쉽게 만들 수 있게 되었습니다.

```
//클래스를 생성하는 방법
class Car { //클래스 객체
    constructor() {

    }
}

//인스턴스를 생성하는 방법(실제로 객체화 하는 과정)
const car1 = new Car();
const car2 = new Car();

// car 클래스의 인스턴스인지를 확인하는 방법
car1 instanceof Car;

car2 instanceof Array;
```

인스턴스를 만들 때 생성자가 필요합니다.
<vr/>
result

```
true
false
```

<br/>



```
class Car {
    constructor(make, model) {
        this.make = make;
        this.model = model;
        this.userColors = ['Blue', 'Silver', 'White', 'Black'];
        this.userColor = this.userColors[2];
    }
    setColor(color) {
        if(this.userColors.indexOf(color) < 0) {
            throw new Error (`선택할 수 없는 색상: ${color}`);
        }
        this.userColor = color;
    }
}

const car1 = new Car("현대", "싼타페");
const car2 = new Car("기아", "쏘렌토");

car1.setColor('Black');
car2.setColor('White');
car1
```
result

```
Car {
  make: '현대',
  model: '싼타페',
  userColors: [ 'Blue', 'Silver', 'White', 'Black' ],
  userColor: 'Black'
}
```

```
class Car {
    constructor(make, model) {
        this.make = make;
        this.model = model;
        this.userColors = ['Blue', 'Silver', 'White', 'Black'];
        this.userColor = this.userColors[2];
    }
    setColor(color) {
        if(this.userColors.indexOf(color) < 0) {
            throw new Error (`선택할 수 없는 색상: ${color}`);
        }
        this.userColor = color;
    }
}

const car1 = new Car("현대", "싼타페");
const car2 = new Car("기아", "쏘렌토");

car1.setColor('Black');
car2.setColor('White');
car1

car1.userColor = "orange";
```

result

```
'orange'
```
<br/>


이처럼 `userColor`가 사용자의 접근으로 바뀔 수 있습니다. 이건 장점이 될 수도 있지만 어떻게 보면 프로퍼티를 보호하지 못한다는 의견도 있습니다.       
해당 프로퍼티를 안전하게 보호해야한다면 `IIFE` 방식과 `WeakMap`을 이용하는 방법이 있습니다.


```
const Car = (function() {

    const carProperties = new WeakMap();

    class Car {
        constructor(make, model) {
            this.make = make;
            this.model = model;
            this._userColors = ['Blue', 'Silver', 'White', 'Black'];
            carProperties.set(this, {userColor : this._userColors[2]}) //_는 외부에서 접근하면 안되는 프로퍼티임을 알려주기 위함
        }
        get userColor() {return carProperties.get(this).userColor;}
        set userColor(value){
            if(this._userColors.indexOf(value) < 0) {
                throw new Error (`선택할 수 없는 색상: ${value}`);
            }
            carProperties.get(this).userColor = value;
        }
        selColor(color) {this.userColor = color;}
    }
    return Car;
}) (); //IIFE 방식으로 호출과 동시에 선언
```