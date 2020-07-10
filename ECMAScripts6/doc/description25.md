# hasOwnProperty. set

## hasOwnProperty

모든 객체의 조상, 루트 객체 즉, `Object`라고 하는 클래스로부터 상속 받습니다. 최상위 객체라고도 합니다. 이 오브젝트 객체에 있는 메서드들은 모든 객체들이 포합하고 있습니다. 이 오브젝트가 가지고 있는 메서드 중에 `hasOwnProperty`를 가지고 있습니다. 이 메서드는 해당 객체의 프로퍼티와 `prototype`으로 추가한 프로퍼티를 추가 시켰습니다. 그러다 보니, 이 객체가 `prototype`으로 추가한 프로퍼티들도 마치 객체 안에 포함된 메서드로 착각할 수 있습니다. 그런 경우를 방지하기 위해 `hasOwnProperty`를 사용합니다.

```
function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.getName = function() {
    return this.name;
}
Person.prototype.getAge = function() {
    return this.age;
}

const hong = new Person('gildong', 23);
var prop;

for(prop in hong) {
    console.log("hong[" + prop + "] = " + hong[prop]);
}
```

result

```
hong[name] = gildong
hong[age] = 23
hong[getName] = function() {
    return this.name;
}
hong[getAge] = function() {
    return this.age;
}
```
`hong` 이 가지고 있는 포로퍼티와 더하여 프로퍼티로 추가된 `getName`, `getAge` 까지 출력합니다. 이런 것을 방지하기 위해서 사용하는 것이 `hasOwnProperty`입니다.

```
function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.getName = function() {
    return this.name;
}
Person.prototype.getAge = function() {
    return this.age;
}

const hong = new Person('gildong', 23);
var prop;

for(prop in hong) {
    if(hong.hasOwnProperty(prop)){ //이 코드 추가 (걸러내는 역할)
        console.log("hong[" + prop + "] = " + hong[prop]);
    }
}
```

result

```
hong[name] = gildong
hong[age] = 23
}
```
객체 안의 속성인지를 구분해주는 메서드입니다.
자신이 가지고 있는 프로퍼티만을 가져오는 메서드 'hasOwnProperty`입니다.

## set

중복을 허용하지 않는 데이터 집합을 이야기 합니다.

```
const roles = new Set(); //new 연산자를 이용합니다.
roles.add("User"); // 추가할 때는 add() 메서드를 사용합니다
roles.add("Admin");

roles;
roles.size;

roles.delete("Admin"); //true 반환합니다.
roles
```
result
```
Set { 'User', 'Admin' }
2

Set { 'User' }
```

객체만을 대상으로 하는 `WeakMap`이 있었듯이, 객체만을 대상으로하는 `WeakSet`이 있습니다.   

```
const nn = new WeakSet();
const child = [
    {name : "홍길동"},
    {name : "강길동"}
];

nn.add(child[1]);
```
result
```
WeakSet {Objeck {name: "강길동}}
```