// Arrow Function
function plusTwo(s) {
    return s + 2;
}

console.log(plusTwo(10)); //12

plusTwo_1 = (s) => {
    return s + 2;
}

console.log(plusTwo_1(10)); //12

pluseTwo_2 = s => s+2;

console.log(pluseTwo_2(10)); //12

//Map 
arr = [1,2,3,4,5,7];

// arr_map = arr.map(function(value) {return value * 2;}) //ES5

arr_map = arr.map(value => value*2);

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