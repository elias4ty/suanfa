function cancelPromise(originPro) {
    let cancel;

    const cancelPro = new Promise((_, reject) => {
        cancel = reject;
    });

    const racePro = Promise.race([originPro, cancelPro]);
    racePro.cancel = cancel;

    return racePro;
}

const p = new Promise((rv) => {
    setTimeout(() => {
        rv('success');
    }, 200);
});

const obj = cancelPromise(p);
obj.then((res) => { console.log(res); }, (e) => { console.error('123=>', e); });

setTimeout(() => {
    obj.cancel('cancel');
}, 100);
