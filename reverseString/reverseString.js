const reverseString = function(inputString) {
    let outputString = "";
    for (i = 0; i < inputString.length; i++) {
        outputString += inputString[(inputString.length - 1) - i];
    }
    return outputString;
}

module.exports = reverseString
