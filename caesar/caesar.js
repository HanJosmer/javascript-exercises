const caesar = function(inputString, salt) {
    const inputArray = inputString.split('');
    console.log(inputArray.join(""));

    // account for a negative shift
    while (salt < 0) {
        salt += 26;
    }

    // perform shift
    const shifted = inputArray.map(ch => {
        if (ch >= "A" && ch <= "Z") {
            const currentCode = ch.charCodeAt(0);
            const standardizedCode = currentCode - 65;
            const newStandardizedCode = (standardizedCode + salt) % 26;
            const newCode = String.fromCharCode(newStandardizedCode + 65);
            return newCode;
        } else if (ch >= "a" && ch <= "z") {
            const currentCode = ch.charCodeAt(0);
            const standardizedCode = currentCode - 97;
            const newStandardizedCode = (standardizedCode + salt) % 26;
            const newCode = String.fromCharCode(newStandardizedCode + 97);
            return newCode;
        } else {
            return ch;
        }
    });
    return shifted.join("");
}

// module.exports = caesar


// String.fromCharCode()
// String.charCodeAt()

// uppercase "A" = 65
// uppercase "Z" = 90

// lowercase "a" = 97
// lowercase "z" = 122