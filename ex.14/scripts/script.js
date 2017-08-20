var p1 = document.getElementById("p1");

var navigation = document.getElementsByName("li");

var test = document.getElementsByName("p"); 

var p1 = document.getElementById("p1");

console.log("What is the type of this Element: ", p1.nodeType);
console.log("This is the inner HTML", p1.innerHTML);
console.log("does it have any child node:",p1.childNodes);

var listItem = document.getElementsByTagName("li");
consolelog("We have :",lisItem.length, "Items");



