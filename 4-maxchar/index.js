// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
	const charObj = {};
	for (let char of str) {
		charObj[char] = charObj[char]++||1;
	};

	let max = 0;
	let maxChar = null;
	for (let char in charObj) {
		if (max < charObj[char]){
			max = charObj[char];
			maxChar = char;
		}
	}
	return maxChar;
}

module.exports = maxChar;
