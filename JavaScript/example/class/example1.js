// get, set

class A {
    _name = 'no name';

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value + '!!!';
    }
}

const a = new A();
console.log(a);
// A { _name: 'no name' }

a.name = 'Mark';
// call set name function
// value = 'Mark'
console.log(a);
// A { _name: 'Mark!!!' }

console.log(a.name);
// call get name function
// Mark!!!

// readonly
class B {
    _name = 'no name';
    get name() {
        return this._name + "@@@";
    }
}

const b = new B();
console.log(b);
// B { _name: 'no name' }
b.name = "Mark";
console.log(b);
// B { _name: 'no name' }
