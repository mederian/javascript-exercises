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

const factorial = function() {
	
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
