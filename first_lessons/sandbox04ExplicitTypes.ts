// explicit types
let myName: string;
let age: number;
let isPrime: boolean;

// age = "John";
age = 27;

// isPrime = 20;
isPrime = false;

// arrays
let names: string[];
// names = [10, 23];
// names.push("Mary"); //error push of undefined
names = ["Peter", "Anna"];

let names2: string[] = [];
names2.push("Mary"); 

// union types
let mixedArray: (string | number)[] =[];
mixedArray.push("Mary");
mixedArray.push(20);
// mixedArray.push(false);
console.log(mixedArray);

let uid: string | number;
uid = "123456";
uid = 123456;
// uid = false;

// objects
let myObject: object;
myObject = {name: "John", age: 20};
myObject = [];

let myObject2: {
    name: string,
    age: number,
    country: string,
}

myObject2 = {name: "John", age: 20, country: "US"};