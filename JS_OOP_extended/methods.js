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

function showFullName(){
    return "John Smith";
}


