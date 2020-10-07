/*
executor 와 resolve 함수를 실행할 때 인자를 넣어 실행하면, then의 callback 함수의 인자로 받을 수 있다.
    resove('hello');
    then((message) => {...})
*/

function p() {
    return new Promise((resolve, reject) => {
        /* pending */
        setTimeout(() => {
            resolve('hello'); /*fullfiled*/
        }, 1000);
    });
}

p()
.then((message) => {
    console.log('1000ms후에 fulfilled 된다.', message);
})
.catch(() => {
    console.log('1000ms후에 rejected된다.');
});

// 1000ms후에 fulfilled 된다. hello