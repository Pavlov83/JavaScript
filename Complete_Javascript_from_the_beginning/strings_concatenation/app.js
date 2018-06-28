const firstName = 'Wiliam';
const lastName = 'Johnson';

let val;

//Concatenation
val = firstName + lastName;

//Append
val = 'Pavel';
val += 'Pavlov';

val = 'Hello, my name is ' + firstName + ' and I am' + age;

//Escaping
val = "That\'s awesome, I can\'t wait";

//Length
val = firstName.length;

//concat
val = firstName.concat(' ', lastName);

//Change case
val = firstName.toUpperCase();
val = firstName.toLowerCase();
const age = 36;
const str ='Hello there my name is  Pavel';
const tags = 'web design,web development'

val = firstName[0];

//indexOf()
val = firstName.indexOf('1');
val = firstName.lastIndexOf('1');

//charAt()
val = firstName.charAt('2');

//Get last char
val = greeting.charAt(firstName.length);

//substring()
val = firstName.substring(0, 4);

//slice()
val = firstName.slice(0, 4);

//split()
val = str.split(' ');
val = tags.split(' , ');

//replace()
val = str.replace('Pavel', 'Jack');

//includes()
val = str.includes('Hello');

console.log(val);