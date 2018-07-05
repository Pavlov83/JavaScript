const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

//Clck
clearBtn.addEventListener('click',runEvent);

//Doubleclick
clearBtn.addEventListener('dblclick',runEvent);

//Click + Hold
clearBtn.addEventListener('mousedown',runEvent);

//MouseUp
clearBtn.addEventListener('mouseup',runEvent);

//MouseEnter (fires events only on the main element)
card.addEventListener('mouseenter',runEvent);

//MouseLEave
card.addEventListener('mouseleave',runEvent);

//MouseOver (fires also in the child elements)
card.addEventListener('mouseover',runEvent);

//MouseOut (fires also in the child elements)
card.addEventListener('mouseout',runEvent);

//MouseMove
card.addEventListener('mousemove',runEvent);

heading.textContent = `<h5></h5>`;








//Event Handler
function runEvent(e){
    console.log(`EVENT TYPE: ${e.type}`);

    heading.textContent=`MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;

    document.body.style.backgroundColor = `rgb(${e.offsetX},${e.offsetY}, 40)`;  
    
    

}
