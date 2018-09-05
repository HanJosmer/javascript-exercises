const removeFromArray = function() {
    args = Array.from(arguments);
    let inputArray = args[0];
    let length = inputArray.length;

    for (let i = 1; i < arguments.length; i++) {
        for (let j = 0; j < length; j++) {
            if (arguments[i] === inputArray[j]) {
                inputArray.splice(j, 1);
                length = inputArray.length;
                i--;  // account for element shift after splicing
            }
        }
    } 
    return inputArray;
}

module.exports = removeFromArray
