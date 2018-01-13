// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
	let front = 0;
	let back = str.length-1;
	while (front<back){
		if(str.charAt(front) != str.charAt(back)) {
			return false;
		}
		front++;
		back--;
	}
	return true;
}

/*function palindrome(str){
	let reversed =str.split('').reverse('').join('');
	return str===reversed;
}*/

/*function palindrome(str){
	return str.split('').every((char, i)=>char ===str[str.length-i-1]);
}*/

module.exports = palindrome;
