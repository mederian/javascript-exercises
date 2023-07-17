const removeFromArray = function(arr, valueToRemove) {
    
    //Loop to handle the unkown number of arguments
    for(let i = 0; i < arguments.length - 1; i++){
            // Find position in string where to remove array; 
        let v = 0;
        for(val of arr){
            if (val === arguments[i+1]) break;
            v++;
        }
        arr.splice(v,1)
        

    }
    console.log(arr);
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
