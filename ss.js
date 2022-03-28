var peakIndexInMountainArray = function(arr) {
	let left = 0;
	let right = arr.length - 1;

	while(left < right) {
		const mid = left + right >> 1;

		if(arr[mid - 1] < arr[mid] && arr[mid] > arr[mid + 1]) {
			return mid;
		} else if(arr[mid - 1] < arr[mid] && arr[mid] < arr[mid + 1]) {
			left = mid + 1;
		} else {
			right = mid;
		}
	}

	return left;
};

console.log(peakIndexInMountainArray([3,5,3,2,0]))