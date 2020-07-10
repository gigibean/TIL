# WeakMap
## weakMap 과 Map의 차이

`weakMap` 은 반드시 `key`값이 객체여야 합니다.      
`weakMap`은 Iterable이 아닙니다. 그리고 `clear()`메서드가 없습니다.     

`Map`객체같은 경우 키를 객체로 사용할 경우 JS는 이 맵이 존재하는 동안 키로 사용되는 객체가 계속 메모리에 남아 있습니다. 이와 다르게 `WeakMap`은 존재하더라도 키로사용되는 객체가 메모리에 계속 남아있지는 않습니다.

```
const secretA = (function() {
    const secrets = new WeakMap();

    return class {
        setSecret(secret) {
            secrets.set(this, secret);
        }
        getSecret() {
            return secrets.get(this);
        }
    }
})();

const a = new secretA();
const b = new secretA();

a.setSecret('secret A');
b.setSecret('secret B');
a.getSecret();
b.getSecret();
```

result

```
'secret A'
'secret B'
```

<br/>

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

const car1 = new Car("기아", "쏘렌토");
console.log(car1);
```

result

```
Car {
  make: '기아',
  model: '쏘렌토',
  _userColors: [ 'Blue', 'Silver', 'White', 'Black' ]
}
```

`userColor`는 찾아볼 수 없습니다. 이렇게 사용자가 쉽게 접근하지 못하게 하기위해 `(Weak)Map`을 사용한 것입니다.