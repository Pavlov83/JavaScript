const id = 100;

//Equal to
if(id = 100){
    console.log('Correct');
}else{
    cosnosle.log('Incorrect')
}

// Not Equal to
if(id != 101){
    console.log('Correct')
}else{
    console.log('incorrect');
}

//Equal to Value and type
if(id === 101){
    console.log('Correct');
}else{
    console.log('Incorrect')
}

if(id){
    console.log(`The ID is ${id}`);
}else{
    console.log('No Id');
}

if(typeof id !== 'undefined'){
    console.log(`The ID is ${id}`);
}else{
    console.log('No ID');
}

//Greater or less than
if(id > 200){
    console.log('Correct');
}else{
    console.log('incorrect');
}

//LOGICAL OPERATORS

const name = 'Steve';
const age = 20;

// AND &&
if(age > 0 && age < 12){
    console.log(`${name} is a child`);
}else if(age >= 13 && age <= 19){
    console.log(`${name} is a teenager`);
}else{
    console.log(`${name} is an adult`);
}

//OR ||
if(age < 16 || age > 65 ){
    console.log(`${name} cannot compete with others`)
}else{
    console.log(`${name} can compete`);
}

//TERNARY OPERATOR
console.log(id === 100 ? 'Correct' : 'Incorrect');

//Without braces

if(id === 100)
    console.log('Correct');
else
console.log('INCORRECT');
