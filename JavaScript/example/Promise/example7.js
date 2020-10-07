const p = new Promise((resolve, reject) => {
    /* pending */
    setTimeout(() => {
        resolve(); /*fullfiled*/ 
    }, 1000);
});

// fulfilled 상태가 되면 then으로 넘어간다.
p.then(() => {
    console.log('1000ms 후에 fulfilled 된다');
});
