var kthSmallest = function(matrix, k) {
	let row = matrix.length;
	let col = matrix[0].length;
	let left = 0;
	let right = matrix[row - 1][col - 1];

	while(left < right) {
		const mid = left + right >>> 1;
		const count = getCount(mid);

		if(count < k) {
			left = mid + 1;
		} else {
			right = mid;
		}
	}

	return left;

	function getCount(total) {
		let newRow = 0;
		let ans = 0;

		while(newRow < row) {
			if(matrix[newRow][col] > total) {
				ans += col;
			} else {
				let newCol = 0;

				while(newCol < col){
					if(matrix[newRow][newCol] < total) {
						newCol++;
						ans++;
					} else {
						break;
					}
				}
			}

			newRow++;
		}

		return ans;
	}
};

console.log(kthSmallest([
	[1,5,10],
	[9,11,13],
	[12,13,15]
], 8));