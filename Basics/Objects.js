// create an object
var person = {
  firstname: 'Pavel',
  lastname: 'Pavlov',
  age: 34
  children:['First child','Second child'],
  address: {
    street:'555 Somewhere',
    city: 'Boston',
    state:'MA'
  },
  fullName: function(){
    return this.firstName + " " + this.lastName;
  }
}

console.log(person.children[0]);
