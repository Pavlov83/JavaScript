//Create element

const li = document.createElement(`li`);

//Add class
li.className = 'collection-item';

//Add id
li.id = 'new-item';

//Add attribute
li.setAttribute('title','New Item');

//Create text node and append
li.appendChild(document.createTextNode('Hello World'));

//Append li as child to ul
document.querSelectoer('ul.collection').appendChild(li);

//Create new link element
const link = document.createElement('a');

//Add classes
link.className = 'delete-item secondary-content';

document.querySelector('ul.collection').appendChild(li);

console.log(li);
