// async function 에서 return 되는 값은 
// Promise.resolve 함수로 감싸서 리턴된다.


function p(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(ms);
            // reject(new Error('reason'));
        }, ms);
    });
}

async function ayncP() {
    const ms = await p(1000);
    return 'Mark' + ms;
}

(async function main() {
    try { 
        const name = await ayncP();
        console.log(name);
    } catch (error) {
        console.log(error);
    }
})();