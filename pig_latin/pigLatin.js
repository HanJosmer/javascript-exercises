const CONSONANTS = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "x", "z"];
const VOWELS = ["a", "e", "i", "o", "u"];

function translate(inputString) {
	
	// break string into words
	const words = inputString.split(" ");
	console.log(words);

	// perform pig latin transform on each word
	words.forEach(function() {
		words.push(pigLatin(words.shift()));
	});

	return words.join(" ");
}

function pigLatin(inputString) {
	const inputStringArray = inputString.split("");
	while (CONSONANTS.includes(inputStringArray[0])) {
		if (inputStringArray[0] === "q" && inputStringArray[1] === "u") {
			inputStringArray.push(...inputStringArray.splice(0, 2))
			continue;
		}
		inputStringArray.push(inputStringArray.shift());
	}
	inputStringArray.push("ay");
	return inputStringArray.join("");
}


// module.exports = {
// 	translate
// }

