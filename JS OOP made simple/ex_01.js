
let baseSalary  = 30_000;
let overtime = 10;
let rate = 20;

function getWage(baseSalary,overtime, rate){
    return baseSalary + (overTime * rate);
}

//OOP way of solving problems (encapsulating important parts of the program)


let employee ={

    //properties of the object
    baseSalary: 30_000,
    overtime: 10,
    rate:20,
    //method of the object
    getWage: function(){
        return this.baseSalary + (this.overtime * this.rate);
    }
};

emplyee.getWage();