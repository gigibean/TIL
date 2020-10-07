// Promise 개체를 리턴하는 함수

function p(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(ms);
        }, ms);
    });
}

// Promise 객체를 이용해서 비동기 로직을 수행할 때
p(1000).then(ms => {
    console.log(`${ms} ms 후에 실행된다`);
});

// Promise 객체를 리턴하는 함수를 await으로 호출하는 방법

(async function main() {
    const ms = await p(1000);
    // 비동기 처리가 끝날 때까지 넘어가지 않고 기다렸다가 resolve되면 그때 인자값을 리턴해서 이어지게 한다.
    // await 사용하기 위해 async 함수로 감싸준다.
    console.log(`${ms} ms 후에 실행된다.`);
})();