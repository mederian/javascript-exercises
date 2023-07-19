const leapYears = function(year) {

    //if divisable by 4
    // but not 100
    //unless 400
    if(year % 4 === 0){
        if(year % 100 === 0){
            if(year % 400 === 0){
                return true;
            }
            return false;    
        }
        return true;
    }
    return false;
};

// Do not edit below this line
module.exports = leapYears;
