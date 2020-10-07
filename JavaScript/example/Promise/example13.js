// then 함수에서 다시 프로미스 객체를 리턴하는 방법을 통해 체이닝하면, 비동기 작업을
// 순차적으로 아래로 표현할 수 있다.
// then 에 함수를 넣는 여러 방법이 있다.
function p() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, 1000);
    });
}

// 1s
p()
.then(() => {
    return p();
})
// 2s
.then(() => p())
// 3s
.then(p)
// 4s
.then(() => {
    console.log('4000ms 후에 fulfilled');
})

// 4000ms 후에 fulfilled
// [Done] exited with code=0 in 4.188 seconds

// 비교
/* 
function c(callback) {
    setTimeout(() => {
        callback();
    }, 1000);
}

c(() => {
    c(() => {
        c(() => {
            console.log('3000ms 후에 callback 함수가 실행된다.');
        });
    });
});
*/