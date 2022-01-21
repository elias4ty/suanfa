function quickSort(arr, start, end) {
    if(start > end) {
        return false;
    }

    const mid = partition(arr, start, end);

    quickSort(arr, 0, mid - 1);
    quickSort(arr, mid + 1, end);
}

function partition(arr, start, end) {
    let i = start - 1;
    let mid = arr[end];

    for(let j = start; j < end; j++) {
        if(arr[j] >= mid) {
            i++;
            exchange(arr, i, j);
        }
    }

    exchange(arr, i + 1, end);
    return i + 1;
}

function exchange(arr, x, y) {
    const tmp = arr[x];
    arr[x] = arr[y];
    arr[y] = tmp;
}

const arr = [2,8,7,1,3,5,6,4];
quickSort(arr, 0, arr.length - 1);
console.log(arr);