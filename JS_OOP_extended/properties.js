var person = {
    name: "John",
    middlename:"Ian",
    surname:"Smith",
    address:{
        street:"13 Duncannon Street",
        city:"London",
        country:"United Kingdom"
    }
};

var name = person.name;
var city = person.address.city;
person.age = 22; //override(add) property of the object