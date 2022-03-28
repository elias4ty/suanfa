var findBestValue = function(arr, target) {
    arr.sort((next, prev) => {
        return next - prev;
    });

    let last = arr.length - 1;
    let ans = [Infinity, Infinity];

    for(let i = len - 1; i >= 0; i--) {
        const cur = arr[i] * (len - i) - target;
        if(cur < ans[1]) {
            ans = [arr[i], cur];
        }
    }
};