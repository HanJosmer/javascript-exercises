const CONSONANTS = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "x", "z"];
const VOWELS = ["a", "e", "i", "o", "u"];

function translate(inputString) {
	
	// break string into words
	const words = inputString.split(" ");
	console.log(words);

	// remove first consonanants from string
	let j = 0;
	const first = firstConsonants(words, j);
	
	for (let i = 0; i < first.length; i++) {
		words.shift();
	}

	console.log(words);

	// determine if word begins with vowel or consonant
	// todo
}

function firstConsonants(inputString, j) {
	const inputStringArray = inputString[j].split("");
	const consonants = [];
	let i = 0;
	while (CONSONANTS.includes(inputStringArray[i])) {
		consonants.push(inputStringArray[i]);
		i++;
	}
	return consonants;
}


// module.exports = {
// 	translate
// }

