const repeatString = function(string, times) {
    let finalString = "";
    for (var i = 0; i < times; i++) {
        finalString += string;
    }
    return console.log(finalString);
}

module.exports = repeatString
