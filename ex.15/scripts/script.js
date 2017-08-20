var p1 = document.getElementById("p1");

p1.innerHTML = "I change the text by using javascript";


var createPTag = document.createElement("p");
createPTag.innerHTML =  "I just Created a new P tag with javascript";
document.getElementById("maincontainer").appendChild(createPTag);

var createTextElement = document.createTextNode("this is another text node");
document.getElementById("maincontainer").appendChild(createTextElement);






