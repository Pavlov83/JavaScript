//FUNCTION DECLARATIONS
function greet(firstName = 'Steve',lastName = 'Smith'){
    //console.log('Hello');
    return 'Hello' + firstName +lastName;
}

console.log(greet('John','Doe'));// overrides the defualt values


//FUNCTION EXPRESSIONS

const square = function(x = 3){   //x = 3 is default parameter
    return x*x;
};

//console.log(square(8));

//IMMEDIATELY INVOKABLE FUNCTION EXPRESSIONS -IIFEs
// This is function that you declare and run at the same time

//(function(name){
//    console.log('Hello' + name);
//})('Pavel');//    the final brackets are needed to run the IIFE

//PROPERTY METHODS

const todo = {
    add: function(){
        console.log('Add todo');
    },
    edit: function(id){
        console.log(`Edit todo ${id}`);

    }
}

todo.delete = function(){
    console.log('Delete todo...');
}


todo.add();
todo.edit(22);
todo.delete();
