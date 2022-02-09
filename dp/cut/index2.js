/**
 * 切钢条
 * 切一刀，分别求左侧和右侧的最优解
 */

const p = [1,5,8,9,10,17,17,20,24,30];
const map = {};

function CutRod(n) {
    if(n == 0) {
        return p[0];
    }

    let q = p[n];

    for(let i = 0; i < n; i++) {
        const restid = n - 1 - i;

        q = Math.max(
            q,
            (map[i] === undefined ? cutRod(i) : map[i]) + 
            (map[restid] === undefined ? cutRod(restid) : map[restid])
        );
    }

    console.log(`n = ${n} 时，最优解为 ${q}`);
    map[n] = q;

    return q;
}

console.log(cutRod(p.length - 1));