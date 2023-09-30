

//Fibonacci
// f0= 0 and f1= 1, f2 =1, f3 = 2, f4 = 3, f5 = 5, f6 = 8, f7 = 13
const fibonacci = function(f) {
    if(f < 0) return "OOPS";
    let a = 0;
    let b = 1;
    let res = 0;
    for(i = 0; i<=(f-2); i++){
        let b2 = a+b;
        a = b;
        b = b2;
    }
    return b;
};

// Do not edit below this line
module.exports = fibonacci;
