const sumAll = function(numA,numB) {
    if(typeof numA !== 'number' || typeof numB !== 'number') return "ERROR";
    if(numA < 0 || numB < 0) return "ERROR";
    let start = numA;
    let end = numB;
    if(numA > numB){
        start = numB;
        end = numA;
    } 
    
    let i = start;
    let sum = 0;
    while(i <= end){
        sum += i++;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
