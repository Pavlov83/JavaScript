var number = 1;
let count = 2;

function doSomething() {
    for(var i = 0; i < 5; i++){
        console.log(i);
    }
    console.log('Finally :' + i);
}

//This shows the scope problem(the variable is available outside the scope) - we have to use 'let'

doSomething();