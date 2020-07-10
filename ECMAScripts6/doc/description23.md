# 상속
코드의 재사용과 확장성이 가능해집니다.      

부모로부터 상속받는다고 할 때 이 부모클래스를 `슈퍼클래스`라고 합니다.      
부모로부터 상속받은 클래스는 `서브클래스`, `자식클래스`라고 합니다.

보통 최상위 클래스라고 하면 `Object`라고하는 최상위 클래스가 있습니다. 모든 클래스의 공통된 필드들을 가지고 있습니다. 최상위 클래스로부터 클래스들은 상속받은 것입니다.     
부모가 가지고 있지 않은 속성들을 자식 클래스에 추가해주면 되는 것입니다. 부모클래스가 가지고 있는 모든 프로퍼티는 자식클래스도 가집니다.        
이때 만들 때 사용하는 키워드가 `extends`입니다. 이는 확장이라는 뜻입니다. 기존에 있는 클래스를 확장해서 새로운 클래스를 만드는 것이기 때문입니다.   

```
class Vehicle {
    constructor() {
        this.passenger = [];
        console.log("Vehicle 객체 생성");
    }
    // 승객 추가 메서드
    addPassenger(p) {
        this.passenger.push(p); //배열에 넣을 때 push 사용
    }   
}

class Car extends Vehicle {
    constructor() {
        super(); // 부모클래스에 있는 생성자를 호출하는 것
        console.log("Car 객체 생성");
    }
    
    deployAirbags() {
        console.log("에어백 전개");
    }
}

const v = new Vehicle();
v.addPassenger("John");
v.addPassenger("Bing");
v.passenger

const c = new Car();

c.addPassenger("Joey");
c.addPassenger("Mon");
c.passenger


c.deployAirbags();
```

result

```
Vehicle 객체 생성
[ 'John', 'Bing' ]

Vehicle 객체 생성 //by super()
Car 객체 생성 

[ 'Joey', 'Mon' ]  // 상속받은 클래스의 메서드를 물려받음

에어백 전개
```