function radixSort(arr) {
	let tmp = [];
	let ans = [];
	let max = arr[0];
	
	// 求最大数可以确定循环次数
	arr.forEach((val) => {
		val > max && (max = val);
	}); 

	let base = 1;

	while(max / base > 1) { 
		for(let i = 0; i < arr.length; i++) {
			// 求得当前循环次数中的位数值
			const cur = arr[i] / base % 10 >> 0; 
			tmp[cur] === undefined ? (tmp[cur] = 1) : (tmp[cur] += 1);
		}
	
		tmp[0] = tmp[0] || 0;
	
		for(let i = 1; i < tmp.length; i++) {
			tmp[i] = tmp[i] || 0;
	
			tmp[i] += tmp[i - 1];
		}
	
		for(let i = arr.length - 1; i >= 0; i--) {
			const cur = arr[i] / base % 10 >> 0;
			const index = tmp[cur] - 1;
			ans[index] = arr[i];
			tmp[cur] -= 1;
		}

		arr = ans;
		ans = [];
		tmp = [];
		base *= 10;
	}

	return arr;
}