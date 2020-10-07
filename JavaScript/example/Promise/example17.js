// Promise.race()

function p(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(ms);
        }, ms);
    })
}

Promise.race([p(1000), p(2000), p(3000)]).then((message) => {
    console.log('가장 빠른 하나가 fulfilled 된 이후에 실행된다', message);
})

// 가장 빠른 하나가 fulfilled 된 이후에 실행된다 1000
// [Done] exited with code=0 in 3.156 seconds
