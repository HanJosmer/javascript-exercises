const caesar = function(inputString, salt) {
    const inputArray = inputString.split('');
    console.log(inputArray.join(""));
    const shifted = inputArray.map(ch => {
        if (ch >= "A" && ch <= "Z") {
            const currentCode = ch.charCodeAt(0);
            const standardizedCode = currentCode - 64;
            const newStandardizedCode = (standardizedCode + salt) % 26;
            const newCode = String.fromCharCode(newStandardizedCode + 64);
            return newCode;
        } else if (ch >= "a" && ch <= "z") {
            const currentCode = ch.charCodeAt(0);
            const standardizedCode = currentCode - 96;
            const newStandardizedCode = (standardizedCode + salt) % 26;
            const newCode = String.fromCharCode(newStandardizedCode + 96);
            return newCode;
        } else {
            return ch;
        }
    });
    console.log(shifted.join(""));
}

// module.exports = caesar


// String.fromCharCode()
// String.charCodeAt()

// uppercase "A" = 65
// uppercase "Z" = 90

// lowercase "a" = 97
// lowercase "z" = 122