class Heap {
    heapSize = 0;
    arr = [];

    constructor(arr) {
        this.arr = arr;
        this.build();
    }

    exchange(i, j) {
        let tmp = this.arr[i];
        this.arr[i] = this.arr[j];
        this.arr[j] = tmp;    
    }

    /**
     * 
     * @param {Array} this.arr 
     * @param {Number} i 
     * @param {Number} heapSize 
     * 
     * 保持堆的性质
     * 思考：不用递归而用循环怎么写？
     * ex.6.2.5
     */    
    heapify(i) {
        const left = 2 * i + 1;
        const right = 2 * i + 2;
        let largest = i;
    
        if(left <= this.heapSize && this.arr[left] > this.arr[largest]) {
            largest = left;
        }
    
        if(right <= this.heapSize && this.arr[right] > this.arr[largest]) {
            largest = right;
        }
    
        if(largest !== i) {
            this.exchange(i, largest);
            this.heapify(largest);
        }
    }

    build() {
        this.heapSize = this.arr.length - 1;
        const start = this.arr.length / 2 >> 0;
    
        for(let i = start; i >= 0; i --) {
            this.heapify(i);
        }
    }

    heapSort(end = 0){
        const tmpArr = this.arr.slice(0);

        for(let i = this.arr.length - 1; i >= end; i--) {
            this.exchange(i, 0);
            this.heapSize--;
            this.heapify(0);
        }
        
        const sorted = this.arr.slice(0);
        this.arr = tmpArr;

        return sorted;
    }

    get() {
        return this.arr;
    }
}

module.exports = Heap;

/**
 * test
 */
// console.log(new Heap([1,2,3,4,5]).heapSort());
// console.log(new Heap([27,17,3,16,13,10,1,5,7,12,4,8,9,0]).heapSort());