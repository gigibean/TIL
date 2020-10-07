// static 변수, 함수

class A {
    static age = 34;
    static hello() {
        console.log(A.age);
        // new 를 통해서 만들 객체가 아니라 이 클래스A의 함수
    }
}

console.log(A, A.age);
A.hello();
/* 
[Function: A] { age: 34 } 34
34
*/

class B {
    age = 24;
    static hello() {
        console.log(this.age);
    }
}

console.log(B, B.age);
// [Function: B] undefined
const b = new B();
// b.hello();  -> occur error
console.log(b.age);