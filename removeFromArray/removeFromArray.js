const removeFromArray = function() {
    args = Array.from(arguments);
    inputArray = args[0];
    outputArray = [];
    let i = 0;
    
    while (i < inputArray.length) {
        for (let j = 1; j < arguments.length; j++) {
            if (inputArray[i] == arguments[j]) {
                outputArray.push()
            } 
        }
        i++;
    }

    return inputArray;

    // for (let i = 0; i < inputArray.length; i++) {
    //     for (let j = 1; j < arguments.length; j++) {
    //         if (inputArray[i] == arguments[j]) {
    //             inputArray.splice(inputArray[i-1], 1);
    //             i++;
    //         }
    //     }
    // }
    // return inputArray;
}

module.exports = removeFromArray
