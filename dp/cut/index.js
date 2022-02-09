/**
 * 切钢条带备忘的切割方法
 * 切一次钢条，只求右侧的子问题最优解
 * 自顶向下，带缓存的求解
 */

const p = [1,5,8,9,10,17,17,20,24,30];
const map = {};

function topCutRod(n) {
    if(n == 0) {
        return 0;
    }

    let q = -Infinity;

    for(let i = 0; i < n; i++) {
        const restid = n - 1 - i;
        let rest;

        if(map[restid] !== undefined) {
            rest = map[restid];
        } else {
            rest = cutRod(restid);
        }

        q = Math.max(q, p[i] + rest);
    }

    console.log(`n = ${n} 时，最优解为 ${q}`);
    map[n] = q;
    return q;
}

console.log(topCutRod(p.length));