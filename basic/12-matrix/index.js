// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
	let result = [];
	for (let i =0; i<n; i++){
		result.push([]);
	}
	let count =1;
	let rowStart = 0;
	let rowEnd = n-1;
	let columnStart = 0;
	let columnEnd = n-1;

	while(columnStart <= columnEnd && rowStart <= rowEnd){
		//topLine
		for(let j = columnStart; j<= columnEnd; j++){
			result[rowStart][j] = count;
			count++;
		}
		rowStart++;

		//rightLine
		for(let j = rowStart; j<= rowEnd; j++){
			result[j][columnEnd] = count;
			count++;
		}
		columnEnd--;

		//bottom Line
		for (let j = columnEnd; j>= columnStart; j--){
			result[rowEnd][j]=count;
			count++;
		}
		rowEnd--;

		//left Line
		for (let j = rowEnd; j>= rowStart; j--){
			result[j][columnStart] = count;
			count++;
		}
		columnStart++;
	}
	return result;
}

module.exports = matrix;
