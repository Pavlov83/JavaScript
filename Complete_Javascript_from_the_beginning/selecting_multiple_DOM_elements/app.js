//Get Elements by classname

const intems = document.getElementsByClassname('collection-item');
console.log(items);
items[0].style.txext.color = 'red';
items[3].textContent = 'Hello';

const listItems = document.querySelector('ul').getElementsByClassName('collection-item');

console.log(listItems);

//Get Elements by Tag name
let lis = document.getElementsByTagName('li');
console.log(lis);
console.log(lis[0]);
lis[0].style.color = 'red';
lis[3].textContent = 'Hello';

//Convert HTML Collection in array
lis = Array.from(lis); 
lis.reverse();
console.log(lis);

lis.forEach(function(li){
    console.log(li.className)
    li.textContent = `${index}: Hello`;
});

console.log(lis);

const items = document.querySelectorAll(`ul.collection li.collection-item`);

items.forEach(function(item, index){
    item.textContent = `${index}: Hello`;
});

const liOdd = document.querySelectorAll(`li:nth-child(odd)`);
const liEven = document.querySelectorAll(`li:nth-child(even)`);

liOdd.forEach(function(li, index){
    li.style.background = '#ccc';
});


//example woth for loop

for(let i = 0;i < liEven.length; i++){
   liEven[i].style.background = '#f4f4f4'; 
}
console.log(items);