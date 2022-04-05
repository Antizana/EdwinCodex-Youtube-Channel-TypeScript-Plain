"use strict";
let greeting;
// () => void
let greeting1;
greeting1 = (name, greet) => {
    console.log(`${greet} says ${name}`);
};
// greeting1 = (name: string, greet: number): void => {
//     console.log(`${greet} says ${name}`);
// }
let calculation;
calculation = (numOne, numTwo, action) => {
    if (action === "add")
        return numOne = numTwo;
    else
        return numOne - numTwo;
};
// calculation = (numOne: boolean, numTwo: string, action: string): number => {
//     if (action === "add")
//         return numOne = numTwo;
//     else return numOne - numTwo;
// }
let logDetails;
logDetails = (person) => {
    console.log(`${person.name} is ${person.age} years old`);
};
logDetails = (person) => {
    console.log(`${person.name} is ${person.age} years old`);
};
