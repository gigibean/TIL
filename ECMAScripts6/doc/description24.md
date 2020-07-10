# 프로토타입

ES6에서는 클래스라고 하는 키워드를 사용할 수 있도록하고 있습니다. 그전에는 `class`를 사용할 수 있었습니다. 그러나 `class`가 없어도 객체를 만들 수 있었습니다. 다만 `class`를 이용해서 더욱 편리하게 코딩하기 위해 사용될 수 있게 되었습니다. 클래스를 만든다는 것은 클래스 생성자를 이용해서 인스턴스 객체를 만들수 있기 때문에 더 직관적이고 직관화 하기 위해서 `class`가 도입되었습니다. 그전에는 함수를 사용하여 만들었습니다. 그렇다면 객체라고 하는 것은 결국 함수라고 생각하시면 됩니다. 

```
function Car(make, model) {
    this.make = make;
    this.model = model;
    this._userColors = ['Blue', 'Black', 'White', 'Silver'];
    this.userColor = this._userColors[0];
}

var car1 = new Car('삼성', 'SM7');
console.log(car1);

typeof car1;
```
result
```
Car {
  make: '삼성',
  model: 'SM7',
  _userColors: [ 'Blue', 'Black', 'White', 'Silver' ],
  userColor: 'Blue'
}

'object'
```
위와 같이 함수로 객체를 만들 수 있습니다. 

```
class ES5Car {}
typeof ES5Car

typeof Car
```

result

```
'function'
'function'
```
결국은 클래스가 함수라는 의미입니다.

```
function ES5Car() {}
typeof ES5Car
```
result

```
'function'
```

ES6에서는 함수를 이용을 해서 만들던 클래스를 이런식으로 `class`를 이용해서 간소화해서 만드는 것일 뿐입니다. 기존의 함수를 이용해서 객체를 만들던 방법과 차이가 있는 것은 아닙니다.      

## 프로토타입
클래스의 인스턴스에서 사용할 수 있는 메서드를 프로포타입메서드라고 합니다.

```
function Person(name, blog) {
    this.name = name;
    this.blog = blog;
}

// Person 객체에 프로토타입이라고 하는 속성을 이용해서 속성을 추가
Person.prototype.getName = function() {
    return this.name;
}

Person.prototype.getBlog = function () {
    return this.blog;
}

var Hong = new Person("gildon", "gildong.naver.com");
var Kim = new Person("gilja", "gilja.naver.com");

console.log(Hong.getName());
console.log(Kim.getName());

console.log(Hong.getBlog());
console.log(Kim.getBlog());
```

result

```
gildon
gilja
gildong.naver.com
gilja.naver.com
```
함수를 선언하게 되면 프로토타입이라고 하는 속성이 만들어지게 됩니다. 함수가 만들어질 때 프로토타입이라는 속성이 자동으로 생성이 됩니다. 그렇기 때문에 `Person`이라는 이 객체에서 바로 이 프로토타입이라는 속성을 접근할 수 있게 됩니다. 프로토타입에 `getName`이라는 새로운 함수를 추가해 준 것입니다. `Person`이라는 객체에다가 없는 속성을 추가시켜준 것입니다. `getName`과 `getBlog`
자체적으로 `Person` 객체에서 선언하진 않았지만 프로토타입을 이용해서 2개의 함수를 객체에다가 추가시켜준 것입니다.       

Person 객체가 생성될 때 프포토타입 객체가 같이 생성됩니다. 이 때 같이 생성되는 것이 `prototype_object`가 함께 생성됩니다.   
이 때 `prototype`은 `prototype object`를 가리킵니다. `prototype object`는 객체니까 `constructor`가 있습니다. `constructor`가 있는 객체가 같이 생성됩니다. 그 안에는 `__Proto__`라고 하는 속성이 같이 만들어지고 `constructor`는 `Person`객체를 가리키게 됩니다.   

만약에 인스턴스가 생성이되면서 만들어진거기 때문에 `hong`, `kim`은 모두 `prototype`이라는 것을 가지고 있는 것입니다. 가지고 있기 때문에 이처럼 프로토타입에다가 속성을 이용해서 getBlog라는 새로운 프로퍼티를 추가시킬 수 있는 것입니다.        
그리고 프로토타입은 `prototype object`를 가리키고 있기 때문에 `getBlog`라고 새로만든 것은 `prototype object`에다가 새로 추가해 주는 것입니다. 이런식으로 추가된 속성을 `hong`과 `kim`을 사용할 수 있는 것입니다. 이 두 인스턴스는 `Person`객체에 의해 만들어진 것이기 때문에 `prototype obejct`의 해당 객체를 공유하고 있는 것입니다.       
모든 인스턴스들은 이러한 `prototype`을 공유하고 있다고 얘기하고 있습니다.