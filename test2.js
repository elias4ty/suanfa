const swap = (arr,a,b) => {
    [arr[a], arr[b]]=[arr[b], arr[a]];
}

var topKFrequent = function(nums, k) {
    let map = new Map(), heap = [];

    nums.map((num)=>{
        if(map.has(num)) map.set(num,map.get(num)+1);
        else map.set(num,1);
    })

    if(map.size <= k)
        return [...map.keys()];

    let i = 0;

    map.forEach((value, key) => {
        if (i < k) {
            heap.push(key);
            if(i == k - 1) buildMinHeap(heap, map, k);
        } else if (map.get(heap[0]) < value) {
            heap[0] = key;
            heapify(heap, map, k, 0);
        }

        i++;
    });

    return heap;
};

let buildMinHeap = (heap, map, k) => {
    if(k == 1) return 

    for(let i = Math.floor(k/2) - 1; i >= 0; i--) {
        heapify(heap, map, k, i);
    }
} 

let heapify = (heap, map, k, i) => {
    while(true) {
        let minIndex = i;

        if(2 * i + 1 < k && map.get(heap[2 * i + 1]) < map.get(heap[i])) {
            minIndex = 2 * i + 1;
        }

        if(2 * i + 2 < k && map.get(heap[2 * i + 2]) < map.get(heap[minIndex])) {
            minIndex = 2 * i + 2;
        }

        if(minIndex != i) {
            swap(heap, minIndex, i);
            i = minIndex;
        } else {
            break;
        }
    }
}

console.log(topKFrequent([1,1,1,2,2,3], 2))