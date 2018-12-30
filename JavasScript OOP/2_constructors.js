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

const book2 = new Book('The waitress','Mr Pnikman','2010');
console.log(book2.getSummary);