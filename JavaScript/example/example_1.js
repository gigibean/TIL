// Arrow Function
function plusTwo(s) {
    return s + 2;
}

console.log(plusTwo(10)); //12

plusTwo_1 = (s) => {
    return s + 2;
}

console.log(plusTwo_1(10)); //12

pluseTwo_2 = s => s + 2;

console.log(pluseTwo_2(10)); //12

//Map 
arr = [1, 2, 3, 4, 5, 7];

// arr_map = arr.map(function(value) {return value * 2;}) //ES5

arr_map = arr.map(value => value * 2);

console.log(arr_map);

// Filter

arr_filter = arr.filter(v => v > 4);

console.log(arr_filter);

// class

class Person {
    setAge(age) {
        this.age = age;
    }
    getAge() {
        console.log("I'm " + this.age);
    }
}

class User extends Person {
    constructor(name) {
        super();
        this.name = name;
    }
    getName() {
        console.log("I'm " + this.name);
    }
}

exam_1 = new User("John");
exam_1.getName(); // I'm John
exam_1.setAge(23);
exam_1.getAge(); //23

// class 2

class Person {
    constructor(age) {
        this.age = age;

    }
    printInfo() {
        console.log("I'm " + this.name + "and " + this.age);
    }
}

class User extends Person {
    constructor(name, age) {
        super(age);
        this.name = name;
    }
    getName() {
        console.log("I'm " + this.name);
    }
}

exam_1 = new User("John", 23);
exam_1.getName(); // I'm John
exam_1.printInfo(); //I'm Johnand 23

// 비동기성 동기성
setTimeout(() => {
    console.log("hello wolrd")
}, 2000)
console.log("bye world");

/*
bye world
hello wolrd
*/

function greeting(sayGoodbye) {
    setTimeout(() => {
        console.log("sayHello");
        sayGoodbye();
    }, 2000);
}
greeting(()=>console.log("bye worold"))

/*
sayHello
bye worold
*/

// 비동기 1
function greeting(name, callback) {
    setTimeout(() => {
        console.log(name + " 님 안녕하세요!");
        callback(name);
    }, 2000);
}

greeting("김길동", function (name) {
    console.log(name + " 님 안녕히 가세요!");
})

// 비동기 2
function greeting(name, callback) {
    console.log(name + " 님 안녕하세요!");
    callback(name);
}

greeting("김길동", function (name) {
    console.log(name + " 님 안녕히 가세요!");
})

// Promise

function sayHello2(name) {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            console.log(name + "님 안녕하세요");
            resolve("서울");
        }, 3000)
    }
    )
}

sayHello2("John").then((location)=> console.log(location + "로 안녕히가세요")); 
//John님 안녕하세요 서울로 안녕히 가세요

/*
John님 안녕하세요
서울로 안녕히가세요
*/

async function sayHelloBye(name) {
    loc = sayHello2(name)

    console.log(loc + "로 안녕히 가세요");
}

sayHelloBye("John") //[object Promise]로 안녕히 가세요 John님 안녕하세요