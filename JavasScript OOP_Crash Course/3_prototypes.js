//Constructor

function Book(){
    console.log('Book Instantiated..');
}

//Crate object instance
const book1 = new Book(); 

//So far this is not very useful...

// The following example shows constructor with default arguments


function Book(title, author, year){
    this.title = title;
    this.author = author;
    this.year = year;
}

Book.prototype.getSummary = function(){
    return `${this.title} was written by ${this.author} in ${this.year}`;

}

Book.prototype.getAge = function(){
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} years old`
};

Book.prototype.revise = function(newYear){
    this.year = newYear;
    this.revised = true;
};

const book2 = new Book('The waitress','Mr Pnikman','2010');
const book3 = new Book('The Bad','Will Hunting', '2005');
console.log(book2.getSummary());
console.log(book3.getAge());
book2.revise('2018');
console.log(book2);




