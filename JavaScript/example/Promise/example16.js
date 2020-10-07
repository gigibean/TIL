// Promise.all()

function p(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(ms);
        }, ms);
    })
}

Promise.all([p(1000), p(2000), p(3000)]).then((messages) => {
    console.log('모두 fulfilled 된 이후에 실행된다', messages);
})

// 모두 fulfilled 된 이후에 실행된다 [ 1000, 2000, 3000 ]
// [Done] exited with code=0 in 3.22 seconds