const repeatString = function(string, times) {
    let finalString = "";
    if (times >= 1) {
        for (let i = 0; i < times; i++) {
            finalString += string;
        }
        return finalString;
    } else if (times < 0) {
        return "ERROR";
    } else {
        return finalString
    }
}

module.exports = repeatString
