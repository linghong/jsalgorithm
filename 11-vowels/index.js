// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0
//method1
function vowels(str){
	let count = 0;
	const vowels = ['a', 'e', 'i', 'o', 'u'];

	for(let char of str.toLowerCase()){
		if(vowels.includes(char)){
			count++;
		}
	}
	return count;
}

//method2
/*function vowels(str) {
	let count = 0;
	let vowels = ['a', 'e', 'i', 'o', 'u'];
	for (let i = 0; i<str.length; i++ ){
		if(vowels.some(x => x==str[i].toLowerCase())){
			count++;
		}
	}
	return count;
}*/

//method3
/*function vowels(str){
	const matches =	str.match(/[aeiou]/gi);
	return matches?matches.length : 0;
}*/


module.exports = vowels;
