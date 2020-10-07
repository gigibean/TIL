// fulfilled 되거나 rejected 된 후에 최종적으로 실행할 것이 있다면, .finally() 를 설정하고, 함수를 인자로 넣는다.

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
})
.finally(() => {
    console.log('end');
});

// 1000ms후에 rejected된다. Error: bad
//     at Timeout._onTimeout (d:\frontend organization\TIL\JavaScript\example\example12.js:7:20)
//     at listOnTimeout (internal/timers.js:549:17)
//     at processTimers (internal/timers.js:492:7)
// end