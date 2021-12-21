function exchange(arr, i, j) {
    let tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;    
}

function heapify(arr, i) {
    const left = 2 * i + 1;
    const right = 2 * i + 2;
    let largest = i;

    if(arr[left] > arr[largest]) {
        largest = left;
    }

    if(arr[right] > arr[largest]) {
        largest = right;
    }

    if(largest !== i) {
        exchange(arr, i, largest);
        heapify(arr, largest);
    }
}

function build(arr) {
    const start = arr.length / 2 >> 0;

    for(let i = start; i >= 0; i --) {
        heapify(arr, i);
    }

    return arr;
}

function heapSort(arr, end = 0){
    const newArr = build(arr);
    let heapSize = arr.length;
    const result = [];

    for(let i = heapSize - 1; i >= end; i--) {
        exchange(newArr, i, 0);
        result.push(newArr[i]);
        newArr.splice(-1, 1);
        heapify(newArr, 0);
    }

    return result;
}

console.log(heapSort([27,17,3,16,13,10,1,5,7,12,4,8,9,0]));