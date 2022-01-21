// Promise\A+ 2.3
const pro = new Promise((rv, rj) => {
    rv(123);
});

// const pendingPro = new Promise(() => {
//     console.log('i am pending')
// });
// const resolvePro = Promise.resolve('resolvePro');
// const rejectPro = Promise.reject('rejectPro');
const thenable = {
    then(rv, rj) {
        // throw new Error('haha err')

        rv('thenable rv')
        rv('thenable rv2')

        rj('thenable rj')
        // console.log(this.name)
        return 'thenable suc'
    },
    name: 'kkk'
};

const obj = {
    then: 'then is not function'
}

const then = 'then is a string';

function thenFn(rv, rj) {
    // throw new Error('haha err')

    rv('thenable rv')
    rv('thenable rv2')

    rj('thenable rj')
    // console.log(this.name)
    return 'thenable suc'
};

const pro2 = pro.then(res => {
    console.log(res);

    /*
        2.3.3.3
        If then is a function
    */
    // return thenable

    /* 
        2.3.3.4 
        If then is not a function, fulfill promise with x.
    */
    // return obj;

    // If x is function, fulfill promise with x.
    return thenFn;

    /*
        2.3.4
        If x is not an object or function, fulfill promise with x.
    */
    // return then;
}, err => {
    console.log(err);
})

// setTimeout(() => {
//     console.log(pro2)
// })
pro2.then(res => {
    console.log('pro2 fulfilled =>', res);
}, err => {
    console.log('pro2 rejected =>', err);
})