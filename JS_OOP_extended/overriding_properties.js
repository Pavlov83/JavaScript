function Person(name,surname){
    this.name = name;
    this.surname = surname;

}

function Developer(name,surname,knownLanguage){
    Person.apply(this.arguments);
    this.knownLanguage = knownLanguage;
}

Object.defineProperty(
    Person.prototype,
    "fullName",{

        get: function(){
        return this.name + " " + this.surname;
    }
);

Object.defineProperty(
    Developer.prototype,
    "fullName", {
        get: function(){
        return "Dev " + this.name + " " + this.surname;
    }

}  
);