import {Invoice} from "./classes/Invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import {Payment} from "./classes/Payment.js";
import {HasFormatter} from "./Interfaces/HasFormatter.js";

const form = document.querySelector(".new-item-form") as HTMLFormElement;

//Inputs 
const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

// list template instance
const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    let document: HasFormatter;
    if (type.value === 'invoice') {
        document = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
    } else {
        document = new Payment(toFrom.value, details.value, amount.valueAsNumber);
    }

    list.render(document, type.value, 'end');
    
})

// GENERICS
// const addUID = (object: object) => {
// const addUID = <T>(object: T) => {
// const addUID = <T extends object>(object: T) => {
const addUID = <T extends {name: string}>(object: T) => {
    let uid = Math.floor(Math.random() * 100);
    return {...object, uid};
}

let document1 = addUID({name: 'Max', age: 28});
// let document2 = addUID({name: 10, age: 28});
// let document2 = addUID("Hello");
console.log(document1);
console.log(document1.name);
// console.log(document2.toUpperCase);


//with Interfaces
interface Resource<T> {
    uid: number;
    resourceName: string;
    data: T;
}

interface Resource2{
    uid: number;
    resourceName: string;
    data: object;
}

const document3 : Resource2 ={
    uid: 1,
    resourceName: 'Resource',
    data: {name: 'Max'}
}

// const document4 : Resource2 ={
//     uid: 1,
//     resourceName: 'Resource',
//     data: 'Max'
// }

const document5 : Resource<string> ={
    uid: 1,
    resourceName: 'Resource',
    data: 'Max'
}

const document6 : Resource<object> ={
    uid: 1,
    resourceName: 'Resource',
    data: {name: 'Max'}
}

const document7 : Resource<string[]> ={
    uid: 1,
    resourceName: 'Resource',
    data: ['Max', 'Anna']
}

console.log(document6, document7);
