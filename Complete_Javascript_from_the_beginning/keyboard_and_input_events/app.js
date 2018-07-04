const form = document.querySelector('form');
const taskInput = document.getElementById('task');
const heading = document.querySelector('h5');
const select = document.querySelector('select');

//Clear input
taskInput.value = '';


//from.addEventListener('submit',runEvent);

//Keydown
taskInput.addEventListener('keydown',runEvent);//fires events on keypress

//Keyup
taskInput.addEventListener('keyup',runEvent);//fires events on keypress

//Keypress
taskInput.addEventListener('keypress',runEvent);

//Focus
taskInput.addEventListener('focus',runEvent);

//Blur
taskInput.addEventListener('blur', runEvent);

//Cut
taskInput.addEventListener('cut,runEvent');

//Paste
taskInput.addEventListener('paste',runEvent);

//Input
taskInput.addEventListener('input',runEvent);

//Change
select.addEventListener('change', runEvent);

function runEvent(){
    console.log(`EVENT TYPE: ${e.type}`);

    console.log(e.target.value);

    heading.innerText = e.target.value;

//Get input value
//    console.log(taskInput.value);

//    e.preventDefault();
}