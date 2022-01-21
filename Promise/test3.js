const p10 = new Promise((rv) => {
    rv(123);
});

p10.then(function() {
    return Promise.reject('err');
}).then((res) => {
    console.log(res,'111');
}, (err) => {
    console.log(err);
});

