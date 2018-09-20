const snakeCase = function(inputString) {
    
    // split string into array
    const inputStringArray = inputString.split('');
    
    // remove punctuation
    const noPunctuation = inputStringArray.filter(ch => {
        if (checkAlpha(ch) || ch === " " || ch === "-") {
            return true;
        }
    });

    // replace spaces and hyphens with underscores
    const noSpacesOrHyphens = noPunctuation.join('')
                                         .replace(/ /g, "_")
                                         .replace(/-/g, "_")
                                         .split('');

    // insert underscores before capital letters
    for (let i = 1; i <= noSpacesOrHyphens.length; i++) {
        const prevLetter = i - 1;
        const nextLetter = i;
        if (checkAlpha(noSpacesOrHyphens[prevLetter]) && (noSpacesOrHyphens[nextLetter] > "A" && noSpacesOrHyphens[nextLetter] < "Z")) {
            noSpacesOrHyphens.splice(i, 0, "_");
        }
    }

    const lowerCase = noSpacesOrHyphens.map(ch => {return ch.toLowerCase()});

    return lowerCase.join('');
}

function checkAlpha(ch) {
    if ((ch >= "a" && ch <= "z") || (ch >= "A" && ch <= "Z")) {
        return true;
    } else {
        return false;
    }
}

module.exports = snakeCase
