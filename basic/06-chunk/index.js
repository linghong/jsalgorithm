// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

/*
function chunk(array, size){
	const chunksArr =[];
	let i = 0;
	while (i<array.length){
		chunksArr.push(array.slice(i, i+size));
		i +=size;
	}
	return chunksArr;	
}*/

function chunk(array, size) {
	let i = 0;
	let chunksArr = [];
	while ( i < array.length ){
		let arr =[];
		for ( let j = 0; j < size; j++){
			arr.push(array[i]);
			i++;
			if (i >= array.length) break;
		}
		chunksArr.push(arr);
	}
	return chunksArr;
} 

module.exports = chunk;
