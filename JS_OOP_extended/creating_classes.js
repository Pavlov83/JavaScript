//The javascript class construct provides a much simpler and clearer syntax for managing constructors,prototypes and inheritance.

class Person{
    constructor(name,surname){
        this.name = name;
        this.name = surname;
    }

    displayFullName(){
        return this.name + " " + this.surname;
    }
}

var johnSmith = new Person("John","Smith");