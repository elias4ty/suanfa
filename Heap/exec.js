/**
 * 1. 返回一个数组前 K 个最大的元素
 */

const PriorityQueue = require("./priorityQueue");

function back(arr, k) {
    const res = [];

    if(k === undefined || arr === undefined || arr.length === 0) {
        return [];
    }

    const ph = new PriorityQueue(arr);
    for(let i = 0; i < k; i++) {
        res.push(ph.extractMax());
    }

    return res;
}

console.log(back([5,2,7,1,8,3,66,34,29], 3));
