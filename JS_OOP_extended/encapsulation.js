/*This is the principle of information hiding
 and enforces the design of obects that have at least two parts.

 Also hiding internal detail has at least two great benefits

-Simple way to use an object

-Decouples the internal implementation from the use of object.
*/


//For this purpose we need a convention based approach(naming)


 var greeting = "Good morning";

 function greets(person){
 	var fullName = person.name + " " + person.surname;
 		function displayGreeting(){
 		console.log(greeting + " " + fullName);
 	}

 }

displayGreeting = greets({name:"John",surname:"Smith"});
displayGreeting();
