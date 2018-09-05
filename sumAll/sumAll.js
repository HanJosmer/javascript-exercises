const sumAll = function(lowerBound, upperBound) {
    
    // return "ERROR" if negative or NaN
    if (typeof lowerBound != "number" || typeof upperBound != "number") {
        return "ERROR";
    } else if (lowerBound < 0 || upperBound < 0) {
        return "ERROR";
    }

    // swap upper and lower bounds if larger number first
    if (lowerBound > upperBound) {
        let temp = lowerBound;
        lowerBound = upperBound;
        upperBound = temp;
    }
    
    let sum = 0;
    for (let i = lowerBound; i <= upperBound; i++) {
        sum += i;
    }
    return sum;
}

module.exports = sumAll
