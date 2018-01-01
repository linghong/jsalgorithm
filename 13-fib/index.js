// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

//Method 1
/*function memoize(fn){
	const cache = {};
	//a series of number, n is an array
	return function(...n){
		if(cache[n]){
			return cache[n];
		}
		const result = fn.apply(this, n);
		cache[n] = result;
		return result;
	}
}

function fib(n) {
	if(n<2){
		return n;
	}
	return fib(n-1) + fib(n-2);
}

fib = memoize(fib);
*/

//Method 2
const cache = {}

function fib(n) {
	if(n<2){
		return n;
	}

	if(cache[n]){
		return cache[n];
	}

	cache[n] = fib(n-1) + fib(n-2);
	
	return  cache[n];
}

module.exports = fib;
