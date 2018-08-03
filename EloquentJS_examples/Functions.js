// defining a function

const square = function(x){
    return x * x;
};

console.log(square(2))
  //invoking the function and substituting the 
  // x with actual value
  

 //Function can be made even without parameters

const makeNoise = function(){

    console.log("boom");
};

// when there is no return statement the function returns 'undefined'
const power = function(base,exponent){
    value = 1;
    for(let count = 0;count<exponent;count++){
        value *= count;
        
    }
    return value;
};

console.log(power(3, 4))