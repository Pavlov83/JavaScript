//create some numbers
const numbers = [43,45,33,23,44,36,5];
const numbers2 = new Array(22,45,33,76,54);
const fruit = ['Apple','Banana', 'Orange','pear'];
const mixed = [22,'Hello',true,undefined,null,{a:1, b:1}, new Date()];

console.log(mixed);

let val;

//Get array length
val = numbers.length;
//Check if is array
val = Array.isArray(numbers);
//Get single value
val = numbers[3]; //the fourth index
val = numbers[0];//shows the first index

//insert into array
numbers[2] = 100;

//Find index of value
val = numbers.indexOf(36);

//MUTATING ARRAYS

//add at the end of the array
numbers.push(250);

//Add on to front
numbers.unshift(120);

//Take off from end
numbers.pop();

//Take off from front
numbers.shift();

//Splice values
numbers.splice(1,3);

//Reverse
numbers.reverse();

//Concatenate array
val = numbers.concat(numbers2);
 
//Sorting Arrays
val = fruit.sort();
val = numbers.sort();

//Use the "compare function"
val = numbers.sort(function(x,y){
    return x - y;

}); 

//Use reverse sort

val = numbers.sort(function(x,y){
    return x + y;
});

//Find
function under50(num){
    return num < 50;
}

val = numbers.find(under50)

console.log(numbers);
console.log(val);
