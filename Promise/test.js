// Promise\A+ 2.2

const r = {
    name: 'tang'
};
// let r = 5;

const p = new Promise((rv, rj) => {
    rv(r);
    // rj('yyy')
});

// r.age = 20;
// r = 10;

const p2 = p.then((res) => {
    console.log(res);
    // throw new Error("p2's error")
    return 'sss'
},(err) => {
    console.log(err);
    // throw new Error("p2's error")
    return 'bbb'
});

p.then((res) => {
    console.log('p twice =>', res);
}, (e) => {
    console.log('catch p2', e);
})

// const p3 = p2.then((res) => {
//     console.log('then p2', res);
// }, (e) => {
//     console.log('catch p2', e);
// })

// p3.then((res) => {
//     console.log('then p3', res);
// }, (e) => {
//     console.log('catch p3', e);
// })
// console.log(p === p2);