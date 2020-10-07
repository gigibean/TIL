/*
마찬가지로, executor의 reject 함수를 실행할 때 인자를 넣어 실행하면, catch의 callback 함수의 인자로 받을 수 있다.
    reject('error');
    then((reason) => {...})
*/

function p() {
    return new Promise((resolve, reject) => {
        /* pending */
        setTimeout(() => {
            reject(new Error('bad'));
        }, 1000);
    });
}

p()
.then((message) => {
    console.log('1000ms후에 fulfilled 된다.', message);
})
.catch((reason) => {
    console.log('1000ms후에 rejected된다.', reason);
});

// 1000ms후에 rejected된다. Error: bad
//     at Timeout._onTimeout (d:\frontend organization\TIL\JavaScript\example\example11.js:11:20)
//     at listOnTimeout (internal/timers.js:549:17)
//     at processTimers (internal/timers.js:492:7)
