function p(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(ms);
            // reject(new Error('reason'));
        }, ms);
    });
}


// Promise.all

// (async function main() {
//     const results = await Promise.all([p(1000), p(2000), p(3000)]);
//     console.log(results);
// })();

// Promise.race

(async function main() {
    const result = await Promise.race([p(1000), p(2000), p(3000)]);
    console.log(result);
})();
