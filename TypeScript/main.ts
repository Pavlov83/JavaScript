export{}
let message = 'Wellcome Node';
console.log(message);

let x = 10;
const y = 20;

let isBeginner: boolean = true;
let total: number = 0;

let name:string = 'Pavel';
let sentence: string = `My name is ${name}
 and I know typescript`;
 //array
 let list1 : number[] = [1,2,3];

 //tuple
 let person1: [string, number] = ['String', 22];

 enum Color {Red,Green,Blue};

 let c: Color = Color.Green;

 console.log(c);

 //Type 'any'

 let randomValue: any = 10;
 randomValue = true;
 randomValue = 'Pavel';

 let myVariable: any = 10;
 console.log(myVariable.name);
 myVariable.toUpperCase();

 //'Unknown' type -cannot access any properties of unknown 
 //type or call or construct from them

 let myUnknownVar : unknown = 10;

 //Type assertion tells the compiler that we"ve made the
 //necessary check
 (myVariable as string).toUpperCase();
 
 //Type inferrence

 let a;
 a = 10;
 a = true;

 let b = 20;
 
 let multitype: number | boolean;
 multitype = 20;
 multitype = true;

 let anyType: any;
 anyType = 20;
 anyType = true;

//*********  Functions ************//

function add(num1: number, num2: number = 10): number{
    if(num2)   //if is true value executes
     return num1 + num2;
    else       
     return num1;
}
add(5,10);
//add(5,'10');//static type checking is not allowing to mix types
add(3);

//*** Interfaces  ***

//We can declare object as a type

interface Person{
    firstname: string;
    lastname?: string; //'?' means optional parameter
}


function fullName(person: Person){
   console.log(`${person.firstname} ${person.lastname}`); 
}

let p = {
    firstname: 'Bruce',
    };

fullName(p);

//*********** Classes ************

class Employee{
    employeeName: string;

    constructor(name:string){
    this.employeeName = name;

    }
    greet(){
        console.log(`Good Morning ${this.employeeName}`);
    }

}

let emp1 = new Employee('Pavel');
console.log(emp1.employeeName);
emp1.greet();

//***  Inheritance ***

class Manager extends Employee{
    constructor(managerName: string){
    super(managerName);
    }
    delegateWork(){
        console.log(`Manager delegating tasks`);
    }
}

let m1 = new Manager('Bruce');
m1.delegateWork();
m1.greet();
console.log(m1.employeeName);

//***  Access modifiers ***

// private member of a class cannot be accessed outside of a class
// protected allows acces in base class and derived class


