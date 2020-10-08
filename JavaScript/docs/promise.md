# promise

<img src="./imgs/promise.svg" alt="code result" /> <br/>

함수가 시작되고 끝나는 동안에도 프로그램이 계속 실행되어야 하는 경우가 있다.    
이렇게 비동기적 상황에서 코드를 명확하게 표현할 수 있다.    
생성자를 통해서 프로미스 객체를 만들 수 있다.   
생성자의 인자로 executor 라는 함수를 이용한다.  

```js
new Promise(/* executor */)
```


executor 함수는 resolve와 reject를 인자로 가진다.   
    `(reslove, reject) => {...}`    
resolve와 reject는 함수이다.    
    `reslove(), reject()`


```js
new Promise(/* executor */(reslove, reject)=> {});
```

생성자를 통해서 프로미스 객체를 만드는 순간 pending(대기)상태라고 한다.     
```js
new Promise((resolve, reject) => {});
```

executor 함수 인자 중 하나인 resolve 함수를 실행하면, fulfilled (이행) 상태가 된다.     

```js
new Promise((resolve, reject) => {
    // 비동기적 상황
    resolve(); // fufilled
});
```

executor 함수 인자 중 하나인 reject 함수를 실행하면, rejected (거부) 상태가 된다.        

```js
new Promise((resolve, reject) => {
    reject(); // rejected
});
```


p 라는 프로미스 객체는 1000ms 후에 fulfilled 된다       

```js
new Promise((resolve, reject) => {
    /* pending */
    setTimeout(() => {

    }, 1000); /*fullfiled*/
});
```

```js
const p = new Promise((resolve, reject) => {
    /* pending */
    setTimeout(() => {
        resolve(); /*fullfiled*/
    }, 1000); 
});

// fulfilled 상태가 되면 then으로 넘어간다.
p.then(/* callback */)
```

보통 비동기 작업을 할 때, callback 함수를 인자로 넣어 로직이 끝나면 callback 함수를 호출한다.   
이런 경우 함수가 아래로 진행되지 않고, callback 함수 안으로 진행된다.   

```js
function c(callback) {
    setTimeout(() => {
        callback();
    }, 1000);
}

c(() => {
    console.log('1000ms 후에 callback 함수가 실행된다.');
});
```
위와 같이 promise를 사용하지 않았을 때는 callback함수를 인자로 넣어 callback함수를 호출했다.    

그리고 함수 안으로 callback이 진행되는데 아래와 같이 비동기 프로그램을 할 수 있다.      

```js
c(() => {
    c(() => {
        c(() => {
            console.log('3000ms 후에 callback 함수가 실행된다.');
        });
    });
});
```


value가 프로미스 객체인지 아닌지 알 수 없는 경우, 사용하면 연결된 then 메서드를 실행한다.       
value가 프로미스 객체이면, resolve된 then을 메서드로 실행한다.      
value가 프로미스 객체가 아니면, value를 인자로 보내면서 then 메서드를 실행한다.         

```js
Promise.resolve(/* value */);
```

프로미스 객체 여러개를 생성하여, 배열로 만들어 안자로 넣고 Promise.all을 실행하면,  
배열의 모든 프로미스 객체들이 fulfilled 되었을 때, then 의 함수가 실행된다. 
then의 함수의 인자로 프로미스 객체들의 resolve 인자값을 배열로 돌려준다.

```js
Promise.all([프로미스 객체들]);
```

그래서 all, then은 여러가지 비동기 함수를 모두 처리한 후 일괄 어떤 처리를 하고 싶을 때 사용하면 유용하다.


프로미스 객체 여러개를 생상하여, 배열로 만들어 인자로 넣고 Promise.race를 실행하면,     
배열의 모든 프로미스 객체들 중 가장 먼저 fulfilled 된 것으로, then 함수가 실행된다.     
then 의 함수의 인자로 가장 먼저 fulfilled 된 프로미스 객체의 resolve 인자값을 돌려준다. 

```js
Promise.race([프로미스 객체들])
```