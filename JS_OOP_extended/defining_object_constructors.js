var person = {
    name: "John",
    middlename:"Ian",
    surname:"Smith",
    address:{
        street:"13 Duncannon Street",
        city:"London",
        country:"United Kingdom"
    },

    fullName: function(){
        return this.name + " " + this.surname;
    }
};

//construcin new objects from existing ones
var johnSmith = new person();
johnSmith.name = "John ";
johnSmith.middlename = "Black";
johnSmith.surname = "Smith";

//The right way is to create default arguments

function Person(name, surname){
    this.name = name;
    this.surname = surname;
    displayFullname = function(){
        return ({this:name} + '' + {this:surname})
    }
};

//We can construct objects also with built-in Object() function;

var person = new Object();
person.name ="John";
person.surname = "Smith";

//built-in Object functiion also accepts default parameters

var number = new Object(12);
var string = new Object('test');
var anotherNumber = new Object(3 * 2);
var person = new Object({name:"John", surname:"Smith"})
