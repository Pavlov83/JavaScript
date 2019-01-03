const s = 'Hello'; //this is a primitive
console.log(s.toUpperCase());//once we call a method JS wraps it as an object

const s2 = new String('Hello'); 


console.log(window);//this is parent DOM element
window.alert(1);

console.log(navigator.appVersion);

//Object Literals

const book1 = {

    name = 'Book One',
    author ='Ed Blomquist',
    year = '2013',
    summary = function(){
        return `${this.name} was written by${this.author} in 
        ${this.year}`;
    }

};

console.log(book2.getSummary());

const book2 = {

    name = 'Book Two',
    author ='Harvey Oswald',
    year = '2013',
    summary = function(){
        return `${this.name} was written by${this.author} in 
        ${this.year}`;
    }

};