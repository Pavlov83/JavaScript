//document.getElementById()

console.log(document.getElementById('task-title'));

//Get things from the element

console.log(document.getElementById('task-title').id);
console.log(getElementById('task-title').className);

//Change styling
document.getElementById('task-title').style.background = '#333';
document.getElementById('task-title').style.color = '#fff';
document.getElementById('task-title').style.padding = '5px';

//Change content
document.getElementById('task-title').textContent = 'Task List';
document.getElementById('task-title').innerText='My Tasks';
document.getElementById('task-title').innerHTML ='<span style="color:red">Task List</span>';

//document.querySelector()  -this works like jquery 

console.log(document.querySelector('#task-title'));
console.log(document.querySelector('.card-title'));
console.log(document.querySelector('h5'));

document.querySelector('li').style.color = 'red';
document.querySelector('ul li').style.color = 'blue';

document.querySelector('li:last-child').style.color = 'red';