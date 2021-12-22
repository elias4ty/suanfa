const Heap = require('./index');

class PriorityQueue {
    queue = null;
    arr = [];

    constructor(arr) {
        this.queue = new Heap(arr);
        this.arr = this.queue.get();
    }

    top() {
        return this.arr[0];
    }

    out() {
        this.queue.exchange(0, this.arr.length - 1);
        const top = this.arr.pop();
        this.queue.heapify(0);

        return top;
    }

    increseKey(index, key) {
        if(this.arr[index] >= key) {
            return false;
        }

        this.arr[index] = key;
        
        while(true) {
            const parent = ((index - 1) / 2) >> 0;
            if(parent >= 0 && this.arr[index] > this.arr[parent]) {
                this.queue.exchange(index, parent);
                index = parent;
            } else {
                break;
            }
        }
    }

    insert(key) {
        this.arr.push(-Infinity);
        this.queue.heapSize++;
        this.increseKey(this.arr.length - 1, key);
    }
}

/**
 * test
 */
// const pq = new PriorityQueue([1,2,3,4,5]);
// console.log(pq.top());
// pq.increseKey(2, 10);
// console.log(pq.out());
// console.log(pq.insert(8));

module.exports = PriorityQueue;