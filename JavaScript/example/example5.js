// super

class Parent {
    name;

    constructor(name) {
        this.name = name;
    }

    hello() {
        console.log('hello', this.name);
    }
}

class Child extends Parent {
    age;

    constructor(name, age) {
        super(name);
        this.age = age;
    }

    hello() {
        console.log('hello' , this.name, this.age);
    }
}


const p = new Parent('Mark');
const c = new Child("Jennie", 14);

console.log(p, c);
// Parent { name: 'Mark' } Child { name: 'Jennie', age: 14 }