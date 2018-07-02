let val;

const list = document.querySelector(`ul.collection`);
const listItem = document.querySelector(`li.collection-item:first-child`);

val = listItem;
val = list;

//Get child nodes
val = list.childNodes;

//Get children element nodes
val = list.children; // returns HTML collection

val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[0].nodeType;

val = list.children;
//Node Types

//Element
// Attribute(deprecated)
// Text node
//Comment
//Document itself
//Doctype

// Get parent node
val = listItem.parentNode;
val = listItem.parentElement;
val = listItem.parentElement.parentElement;

//Get next sibling
val = listItem.nextSibling;
val = listItem.nextElementSibling.nextElementSibling;

//Get prev sibling
val = listItem.previousSibling;
val = listItem.previousElementSibling;



console.log(val);