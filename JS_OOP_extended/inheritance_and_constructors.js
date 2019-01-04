function Person(name,surname){
    this.name = name;
    this,surname = surname;

}

function Developer(name,surname,knownLanguage){
    Person.apply(this, arguments);
    this.knownLanguage = knownLanguage;
}


var Pavlov = Developer("Pavel","Pavlov","JavaScript");

Developer.prototype = Object.create(Person.prototype);

Person.prototype.constructor = Developer;