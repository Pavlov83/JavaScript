/*Association is a relationship between two or more objects where each object is independent of the others */

function Person(name,surname){
    this.name = name;
    this.surname = surname;
    this.parent = null;
}

var johnSmith = new Person("John", "Smith");
var fredSmith = new Person("Fred","Smith");

fredSmith.parent = johnSmith;//now parent is pointing to johnSmith