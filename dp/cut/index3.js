/**
 * 切钢条
 * 自底向上带缓存求解
 */
const p = [1,5,8,9,10,17,17,20,24,30];
const map = {};

function bottomCutRod(n) {
    for(let j = 0; j < n; j++) {
        let q = -Infinity;

        for(let i = 0; i <= j; i++) {
            q = Math.max(
                q,
                p[i] + (map[j - 1 - i] || 0)
            );
        }

        map[j] = q;
    }

    return map[n - 1];
}

console.log(bottomCutRod(p.length));