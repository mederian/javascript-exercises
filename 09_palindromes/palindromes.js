const palindromes = function (text) {
    //Remove comma, dot, and spaces
    //create a reverse, and check if same
    text = text.replaceAll(' ', '');
    text = text.replaceAll(',', '');
    text = text.replaceAll('!', '');
    text = text.replaceAll('?', '');
    text = text.replaceAll('.', '');
    text = text.toLowerCase();

    let textArr = text.split('');
    let reverseTextArr = textArr.reverse();
    let reversedText = reverseTextArr.join('');
    console.log(`RESULT: ${text} <-> ${reversedText}`);
    if(text === reversedText) return true;
    return false;
    
};

// Do not edit below this line
module.exports = palindromes;
