/**
 * 最长公共子序列 (longest-common-subsequence)
 * @param {*} x 
 * @param {*} y 
 * @returns length
 */

function lcs(x, y) {
    const m = x.length;
    const n = y.length;
    const ans = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0));

    for(let i = 1; i <= m; i++) {
        for(let j = 1; j <= n; j++) {
            if(x[i] === y[j]) {
                ans[i][j] = ans[i - 1][j - 1] + 1;
            } else {
                ans[i][j] = ans[i - 1][j] >= ans[i][j - 1] ? ans[i - 1][j] : ans[i][j - 1];
            }
        }
    }

    return ans[m][n];
}

console.log(lcs(
    ['a', 'b', 'c', 'b', 'd', 'a', 'b'],
    ['b', 'd', 'c', 'a', 'b', 'a']
)
)