// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

//method1
function capitalize(str) {
	let newStr = "";
	for (word of str.split(" ")){
		if(newStr!=""){ newStr += " ";}
		newStr += word[0].toUpperCase() + word.slice(1);		
	}
	return newStr;
}

//method2
/*function capitalize(str){
	let newStr = str[0].toUpperCase();
	for( let i = 1; i<str.length; i++){
		let char = str[i-1]===" "?str[i].toUpperCase():str[i];
		newStr += char;
	}
	return newStr;
}*/

module.exports = capitalize;
