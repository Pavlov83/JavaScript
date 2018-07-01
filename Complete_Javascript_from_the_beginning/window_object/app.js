//WINDOW METHODS/OBJECT/PROPERTIES

console.log(123);

//Alert

//alert(`Hello World`);

//Prompt
//const input = prompt();
//alert(input);

//Confirm
//if(confirm('Are you sure?')){
//    console.log('YES');
//}else{
//    console.log('NO');
//}

let val;

//Outer height and width
val = window.outerHeight;//shows the current window size
//val = window.outerWidth;

//Scroll points
val = window.scrollY;

//Location Object
val = window.location;
val = window.location.hostname;
val = window.location.port;
val = window.location.href;
val = window.location.search;

//Redirect
//window.location.href = 'http://google.com';
//Reload
//window.location.reload();

//HISTORY OBJECT
window.history.go();

val= window.history.length;

//Navigator Object
val = window.navigator;
val = window.navigator.userAgent;

console.log(val);