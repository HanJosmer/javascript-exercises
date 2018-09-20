const palindromes = function(inputString) {

    // remove punctuation
    const noPunctuation = inputString.split('').filter((ch) => {
        if ((ch >= "a" && ch <= "z") || (ch >= "A" && ch <= "Z")) {
            return true;
        }
    });
    
    // set chars to lowercase
    const lowerCase = noPunctuation.map(ch => {
        return ch.toLowerCase();
    })

    // reverse santized string
    const reversed = [];
    for (let i = lowerCase.length; i > 0; i--) {
        reversed.push(lowerCase[i - 1]);
    }

    // compare strings
    let palindrome = true;
    let i = 0;
    while (i < (lowerCase.length - 1)) {
        if (lowerCase[i] !== reversed[i]) {
            palindrome = false;
            break;
        }
        i++;
    };

    // return result
    console.log(palindrome);
}

// module.exports = palindromes
