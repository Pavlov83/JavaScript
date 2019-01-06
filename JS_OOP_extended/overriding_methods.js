function Person(name, surname){
    this.name = name;
    this.surname = surname;
}

Person.prototype.getFullName = function(){
    return this.name + " " + this.surname;
};

function Developer(name,surname,knownLanguage){
    Person.apply(this, arguments);
    this.knownLanguage = knownLanguage;
}

Developer.prototype.getFullName = function(){
    return "Dev" + Person.prototype.getFullName.call(this);// uses the developer constructor
};

var johnSmith = new Person("Johh" , "Smith");
var saulGoodman = new Developer("Saul","Goodman");

johnSmith.getFullName();

saulGoodman.getFullName();