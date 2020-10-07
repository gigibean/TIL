// override

class Parent {
    name = 'Lee';

    hello() {
        console.log('hello', this.name);
    }
}

class Child extends Parent {
    age = 23;

    hello() {
        console.log('hello', this.name, this.age);
    }
}

const p = new Parent();
const c = new Child();
console.log(p, c);
// Parent { name: 'Lee' } Child { name: 'Lee', age: 23 }

c. name = "Kim";
console.log(p, c);
// Parent { name: 'Lee' } Child { name: 'Kim', age: 23 }