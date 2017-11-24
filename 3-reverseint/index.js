// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

/*function reverseInt(n) {
	let index=1;
	if(n<0){
		index = -1;
		n = -n;
	};
	let newString = n.toString().split('').reverse().join('');
	return parseInt(newString)*index;
}*/

/*function reverseInt(n) {
	let reversedStr = n
		.toString()
		.split('')
		.reverse()
		.join('');

	return parseInt(reversedStr)*Math.sign(n);
}*/

function reverseInt(n){
	let sign=n<0?-1:1;
	let newN = 0;
	let inter = n*sign;
	while(inter != 0){
		newN = newN * 10 + inter % 10;
		inter = Math.floor(inter / 10);
	}

	return newN * sign;
}

module.exports = reverseInt;
