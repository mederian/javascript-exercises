const repeatString = function(stringToRepeat, repeats) {
    
    let repeatedString = ''
    if(repeats < 0) return "ERROR"
    for (let i = 0; i < repeats; i++){
        repeatedString += stringToRepeat
    }

    return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
