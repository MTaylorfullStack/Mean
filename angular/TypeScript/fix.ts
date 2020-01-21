//Added a new variable with a type of number to store the number 9
var myString: string;
var myNumber: number;

myString = "Bee stinger";
myNumber = 9;

//Changed 9 to a string by placing quotes around it
function sayHello(name: string){
   return `Hello, ${name}!`;
}
console.log(sayHello("Kermit"));

console.log(sayHello('9'));

//Added a ? to the middle name parameter to indicate that it is optional
function fullName(firstName: string, lastName: string, middleName?: string){
   let fullName = `${firstName} ${middleName} ${lastName}`;
   return fullName;
}

console.log(fullName("Mary", "Moore", "Tyler"));
console.log(fullName("Jimbo", "Jones"));

//Added an s to belt in the Jay object
interface Student {
   firstName: string;
   lastName: string;
   belts: number;
}
//When creating an instance the word new must be used, and then the constructor parameters must be given as arguments
//Study function indicates it must be passed a ninja, Turing was not of type ninja so I changed turing from being an object to being a ninja
function graduate(ninja: Student){
   return `Congratulations, ${ninja.firstName} ${ninja.lastName}, you earned ${ninja.belts} belts!`;
}
const christine = {
   firstName: "Christine",
   lastName: "Yang",
   belts: 2
}
const jay = {
   firstName: "Jay",
   lastName: "Patel",
   belts: 4
}
console.log(graduate(christine));
console.log(graduate(jay));

class Ninja
{
   fullName: string;
    constructor(public firstName: string, public lastName: string)
    {
        this.fullName = `${firstName} ${lastName}`;
    }
    debug()
    {
      console.log("Console.log() is my friend.")
    }
}
const shane = new Ninja("Shane","TheNinja");
const turing = new Ninja("Alan", "Turing");

function study(programmer: Ninja){
   return `Ready to whiteboard an algorithm, ${programmer.fullName}?`
}
console.log(study(turing));

//All parameters must have types
//ES6 arrow functions must be in the format:
//return_variable=(parameter:parameter_type) => function body;
var increment=(x:number) => x + 1;
console.log(increment(3));

var square = (x:number) => {x * x};
console.log(square(4));

var multiply = (x:number,y:number) => x * y;

var math =(x: number, y: number) =>
{
    let sum: number = x + y;
    let product: number = x * y;
    let difference: number = Math.abs(x - y);
    return [sum, product, difference];
}
//Age was never given a value from the constructor
//Birthday did not need to be an anonymous function
class Elephant {
    constructor(public age: number) {
        this.age = age;
    }
	birthday()
	{	
      this.age++;
    }
}
const babar = new Elephant(8);
setTimeout(babar.birthday, 1000)
setTimeout(function(){
   console.log(`Babar's age is ${babar.age}.`)
   }, 2000)