function _01bag(goods, bag) {
    var dp = new Array(goods.length).fill(0).map(() => new Array(bag + 1).fill(0));

    // 第一行物品初始化
    for(let b = 0; b <= bag; b++) {
    	if(goods[0].weight <= b) {
    		dp[0][b] = goods[0].val;
    	}
    }

    for(let i = 1; i < goods.length; i++) {
    	for(let j = 1; j <= bag; j++) {
    		if(goods[i].weight > j) {
    			dp[i][j] = dp[i - 1][j];
    		} else {
				dp[i][j] = Math.max(
					dp[i - 1][j],
					dp[i][j - goods[i].weight] + goods[i].val
				);    			
    		}
    	}
    }

    return dp[goods.length - 1][bag];
}

console.log(
    _01bag(
        [
            {
                weight: 1,
                val: 1500
            },
            {
                weight: 3,
                val: 2000
            },
            {
                weight: 4,
                val: 3000
            }
        ],
        4
    )
)