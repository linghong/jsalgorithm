// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution( A) {	
    let maxEndingHere = A[0];
    let maxSoFar = A[0];
    for(let i = 1; i < A.length; i++){
    	//maxEndingHere >= 0, maxEndingHere = maxEndingHere+A[i];
		//when maxEndingHere < 0, maxEndingHere = A[i];
        maxEndingHere = Math.max(A[i], maxEndingHere + A[i]);
        //if the new slice is larger, switch to new slice
        maxSoFar = Math.max(maxSoFar, maxEndingHere);
    }
    return maxSoFar;
}