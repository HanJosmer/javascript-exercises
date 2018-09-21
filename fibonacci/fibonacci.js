const fibonacci = function(input) {

    // check that strings are numeric
    if (typeof input == "string" && isNumericString(input) === false) {return alert("String cannot be converted to numeric value")};

    // check for negative numbers
    if (input <= 0) {return "OOPS"};

    // build fibonacci array
    const fibArray = [];
    for (let i = 0; i < input; i++) {
        if (i === 0) {
            fibArray.push(1);
        } else if (i === 1) {
            fibArray.push(1);
        } else {
            fibArray.push(fibArray[i - 2] + fibArray[i - 1]);
        }
    }
    
    console.log(fibArray[fibArray.length - 1]);
}

function isNumericString(inputString) {

    // if string, check that all characters are numeric
    const isNumericString = inputString.split('').every(ch => {
        if (ch >= "0" && ch <= "9") {
            return true;
        }
    });
    
    return isNumericString;
}

module.exports = fibonacci
