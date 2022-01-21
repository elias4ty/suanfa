const Heap = require("./index.js");

class PriorityQueue {
    constructor(arr) {
        this.heap = new Heap(arr);
    }

    /**
     * 节点提权操作
     * @param {*} i 节点索引
     * @param {*} key 新的节点值
     * @returns 
     * 
     * 1. 节点值改变后依然要维护的性质
     * 2. 和 heapify 不同，这里要向上维护
     */
    increse(i, key) {
        if(key <= this.heap.arr[i]) {
            return false;
        }

        this.heap.arr[i] = key;
        let parent = Math.floor((i - 1) / 2);

        while(i >= 0 && this.heap.arr[parent] < this.heap.arr[i]) {
            [this.heap.arr[parent], this.heap.arr[i]] = [this.heap.arr[i], this.heap.arr[parent]];
            i = parent;
            parent = Math.floor((i - 1) / 2);
        }

        return true;
    }

    /**
     * 插入新节点
     * @param {*} key 新节点的值
     * @returns 
     * 默认给新节点一个无穷小的值，方便从尾部提权
     */
    insert(key) {
        this.heap.heapSize++;
        this.heap.arr[this.heap.heapSize] = -Infinity;

        return this.increse(this.heap.heapSize, key);
    }

    /**
     * 查询优先级最大的元素
     * @returns 
     */
    max() {
        return this.heap.arr[0];
    }

    /**
     * 取出优先级最大的元素
     * @returns 
     */
    extractMax() {
        const res = this.heap.arr[0];
        this.heap.arr[0] = this.heap.arr[this.heap.heapSize];
        this.heap.heapSize--;
        this.heap.heapify(0);

        return res;
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