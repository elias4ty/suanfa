/**
 * 返回前 K 个高频词
 *
 */
 class PQ {
    constructor(arr, k) {
        this.arr = [];
        this.map = {};

        arr.forEach(ele => {
            if(this.map[ele]) {
                this.map[ele] = this.map[ele] + 1;
            } else {
                this.map[ele] = 1;
            }
        });

        Object.keys(this.map).forEach(key => {
            if(this.len < k) {
                this.arr.push(key);

                if(this.len === k - 1) {
                    this.build();
                }
            } else if(this.map[this.arr[0]] < this.map[key]) {
                heap[0] = key;
                this.heapify(0);
            }
        });        
        
    }

    get len() {
        return this.arr.length;
    }

    build() {
        const leaf = (this.len - 1) / 2 >> 0;

        for(let i = leaf; i >= 0; i--) {
            this.heapify(i);
        }
    }

    heapify(index) {
        const left = 2 * index + 1;
        const right = 2 * index + 2;
        let min = index;

        if(left < this.len && this.map[left] < this.map[min]) {
            min = left;
        }

        if(right < this.len && this.map[right] < this.map[min]) {
            min = right;
        }

        if(min !== index) {
            [this.arr[index], this.arr[min]] = [this.arr[min], this.arr[index]];
            this.heapify(min);
        }
    }

    out() {
        const res = this.arr[0].key;
        this.arr[0] = this.arr[this.len - 1];
        this.arr.pop();
        this.heapify(0);

        return res;
    }
}

function back2(arr, k) {
    const pq = new PQ(arr);
    const res = [];

    while(k > 0) {
        res.push(pq.out());
        k--;
    }

    return res;
}

console.log(back2([3,4,1,2,3,4,5,4], 2));