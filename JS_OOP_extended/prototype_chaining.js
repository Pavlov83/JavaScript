var person = {name:"John",surname:"Smith"};
var developer = Object.create(person,{
    knownLanguage:{
        writable:true,
        configurable:true,
        value:"Javascript"
    }
});

developer.toString();

/* An object inherits all members of its prototype"S prototype and so on.The sequence of links between objects through the prototype relationship is called prototype chaining.