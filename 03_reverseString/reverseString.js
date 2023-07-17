const reverseString = function(stringValue) {
    let stringArray = stringValue.split('');
    
    let reversed = stringArray.reverse();
    console.log(reversed);
    return reversed.join('');

};

// Do not edit below this line
module.exports = reverseString;
