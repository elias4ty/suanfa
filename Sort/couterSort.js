function counterSort(arr) {
    const ka = [];
    const ans = [];

    for(let i = 0; i < arr.length; i++) {
        ka[arr[i]] !== undefined ? (ka[arr[i]] += 1) : (ka[arr[i]] = 1);
    }

    ka[0] = ka[0] || 0;

    for(let i = 1; i < ka.length; i++) {
        ka[i] = ka[i] || 0;
        ka[i] += ka[i - 1];
    }

    for(let i = arr.length - 1; i >= 0; i--) {
        ans[ka[arr[i]] - 1] = arr[i];
        ka[arr[i]] -= 1;
    }

    return ans;
}

console.log(counterSort([2,5,3,0,2,3,0,3]));