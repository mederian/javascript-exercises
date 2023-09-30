const add = function(a, b) {
	return a+b;
};

const subtract = function(a, b) {
	return a-b;
};

const sum = function(arr) {
	let sum = 0;
  for(let i = 0; i < arr.length; i++){
    sum += arr[i];
  }

  return sum;
};

const multiply = function(m) {
  let sum = 1;
  for(let i = 0; i < arguments.length; i++){
    sum *= arguments[i];
  }
  return sum;

};

const power = function(num, exp) {
  // Easy: Math.pow(num,exp);
	if(exp === 0) return 0;
  if(exp === 1) return num;
  let res = 1;
  for(let i = 0; i < exp; i++){
    res *=num;
  }
 
  return res;
};


// 1 x 2 x 3 x 4 =  4!
// 1 = 0!
// 1 = 1!
// 2 = 2!
// 6 = 3!
const factorial = function(fact) {
  const init = 1;
  let res = 1;
  for(i = init; i <= fact; i++){
    res *= i;
  }

  return res;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
