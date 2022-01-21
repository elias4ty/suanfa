class Heap{
    constructor(arr) {
        this.arr = arr;
        this.len = this.arr.length;
        this.heapSize = this.len - 1;
        
        this.build();
    }

    /**
     * 建堆，时间复杂度为 O(n)，推理过程见算法导论 6.3
     * 每一个堆的叶子节点总是从 n / 2 开始
     * 倒序维护堆的性质
     */
    build() {
        const leaf = this.heapSize / 2 >> 0;

        for(let i = leaf; i >= 0; i--) {
            this.heapify(i);
        }
    }

    /**
     * 
     * @param {*} parent 父节点索引
     * 维护堆的性质，使得每一个节点的左子树和右子树依然是堆
     */
    heapify(parent) {
        const left = 2 * parent + 1;
        const right = left + 1;
        let max = parent;

        if (left <= this.heapSize && this.arr[left] > this.arr[max]) {
            max = left;
        }

        if (right <= this.heapSize && this.arr[right] > this.arr[max]) {
            max = right;
        }

        if(max !== parent) {
            [this.arr[max], this.arr[parent]] = [this.arr[parent], this.arr[max]];
            this.heapify(max);
        }
    }

    /**
     * 堆排序的时间复杂度为 O(nlgn)
     * 1. 依次把数组头部节点和尾部节点交换
     * 2. 再将头部节点维护成堆的性质，也就是找到合适的位置
     * 3. 注意维护堆的有效个数
     */
    sort() {
        const tmp = this.arr.slice(0);
        const len = this.heapSize;

        for(let i = len; i >= 0; i--) {
            [this.arr[0], this.arr[this.heapSize]] = [this.arr[this.heapSize], this.arr[0]];
            this.heapSize--;
            this.heapify(0);
        }

        const res = this.arr.slice(0);
        this.arr = tmp;
        this.heapSize = len;

        return res;
    }
}

module.exports = Heap;