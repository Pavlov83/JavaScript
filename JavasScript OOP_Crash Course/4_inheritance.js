//constructor


    function Book(title, author, year){
        this.title = title;
        this.author = author;
        this.year = year;

        
    }

    //getSummary

Book.prototype.getSummary = function(){
    return `${this.title} was written by ${this.author} in ${this.year}`;

};

// Constructor named "Magazine"
function Magazine(title, author, year, month){
    Book.call(this, title, author, year);     //this will use the Book object
    this.month = month;
}

//Inherit Prototype
Magazine.prototype = Object.create(Book.prototype);

//Instantiate Magazine Object
const mag1 = new Magazine('Mag One','Premiere','2002','June');

//Use Magazine constructor
Magazine.prototype.constructor = Magazine;
console.log(mag1);


