// 상속 기본

class Parent {
    name = "Lee";

    hello() {
        console.log('hello', this.name);
    }
}

class Child extends Parent {}

const p = new Parent();
const c = new Child();

console.log(p, c);
//Parent { name: 'Lee' } Child { name: 'Lee' }

c.hello();
c.name = 'Kim';
c.hello();
console.log(p, c);
/*
hello Lee
hello Kim
Parent { name: 'Lee' } Child { name: 'Kim' }
*/