let greeting: Function;

// () => void

let greeting1: (a: string, b: string) => void;

greeting1 = (name: string, greet: string): void => {
    console.log(`${greet} says ${name}`);
}

// greeting1 = (name: string, greet: number): void => {
//     console.log(`${greet} says ${name}`);
// }

let calculation: (a: number, b: number, c: string) => number;

calculation = (numOne: number, numTwo: number, action: string): number => {
    if (action === "add")
        return numOne = numTwo;
    else return numOne - numTwo;
}

// calculation = (numOne: boolean, numTwo: string, action: string): number => {
//     if (action === "add")
//         return numOne = numTwo;
//     else return numOne - numTwo;
// }

let logDetails: (obj: {name: string, age: number}) => void;

logDetails = (person: {name: string, age: number}) => {
    console.log(`${person.name} is ${person.age} years old`);
}

// logDetails = (person: {name: string, age: boolean}) => {
//     console.log(`${person.name} is ${person.age} years old`);
// }

type Person = {name: string, age: number}

logDetails = (person: Person) => {
    console.log(`${person.name} is ${person.age} years old`);
}
